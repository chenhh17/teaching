import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useChineseLocale } from '../context/ChineseLocaleContext'
import {
  buildPeriodBars,
  buildReadingView,
  courseSlideCount,
  formatDuration,
  formatPercent,
  formatRelativeTime,
  monthDay,
  todayShanghai,
  weekdayIndex,
  type AnalysisPayload,
  type ChapterProgress,
  type DayTimeRow,
  type PartProgress,
  type PeriodMode,
  type ProgressStatus,
} from '../lib/readingAnalysis'

type Props = {
  data: AnalysisPayload
}

function paceLabel(seconds: number | null, zh: boolean) {
  if (seconds == null || seconds <= 0) return zh ? '尚无节奏' : 'No pace yet'
  const rounded = Math.round(seconds)
  if (rounded < 20) return zh ? `${rounded} 秒/页 · 偏快` : `${rounded}s / page · fast`
  if (rounded > 180) return zh ? `${rounded} 秒/页 · 精读` : `${rounded}s / page · deep`
  return zh ? `${rounded} 秒/页` : `${rounded}s / page`
}

function Meter({
  value,
  status,
  label,
}: {
  value: number
  status: ProgressStatus
  label?: string
}) {
  const width = Math.max(0, Math.min(100, value))
  return (
    <div className="analysis-meter" role="progressbar" aria-valuenow={width} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <span className={`analysis-meter-fill is-${status}`} style={{ width: `${width}%` }} />
    </div>
  )
}

function TimeBar({
  minutes,
  maxMinutes,
}: {
  minutes: number
  maxMinutes: number
}) {
  const width = maxMinutes <= 0 ? 0 : Math.max(minutes > 0 ? 4 : 0, (minutes / maxMinutes) * 100)
  return (
    <div className="analysis-timebar" aria-hidden="true">
      <span className="analysis-timebar-fill" style={{ width: `${width}%` }} />
    </div>
  )
}

function weekdayLabel(ymd: string, zh: boolean) {
  const names = zh
    ? ['日', '一', '二', '三', '四', '五', '六']
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return names[weekdayIndex(ymd)]
}

function TimeOverPeriod({
  byDay,
  zh,
}: {
  byDay: DayTimeRow[]
  zh: boolean
}) {
  const [mode, setMode] = useState<PeriodMode>('day')
  const [offset, setOffset] = useState(0)
  const today = todayShanghai()
  const period = useMemo(
    () => buildPeriodBars(byDay, mode, offset, today),
    [byDay, mode, offset, today],
  )
  const maxMinutes = Math.max(0.001, ...period.items.map((item) => item.minutes))
  const hasTime = byDay.some((row) => row.focusedMinutes > 0)

  return (
    <div className="analysis-period-board">
      <div className="analysis-section-head">
        <h2>{zh ? '阅读时间' : 'Reading time'}</h2>
        <div className="analysis-filter">
          <button
            type="button"
            className={mode === 'day' ? 'active' : ''}
            onClick={() => {
              setMode('day')
              setOffset(0)
            }}
          >
            {zh ? '按日' : 'Day'}
          </button>
          <button
            type="button"
            className={mode === 'week' ? 'active' : ''}
            onClick={() => {
              setMode('week')
              setOffset(0)
            }}
          >
            {zh ? '按周' : 'Week'}
          </button>
        </div>
      </div>
      <div className="analysis-period-nav">
        <button
          type="button"
          className="analysis-period-shift"
          disabled={!period.canPrev}
          onClick={() => setOffset((value) => value + 1)}
        >
          ←
        </button>
        <p className="analysis-section-note">
          {`${monthDay(period.start)} – ${monthDay(period.end)} · ${formatDuration(period.totalMinutes)}`}
        </p>
        <button
          type="button"
          className="analysis-period-shift"
          disabled={!period.canNext}
          onClick={() => setOffset((value) => Math.max(0, value - 1))}
        >
          →
        </button>
      </div>
      {!hasTime ? (
        <p className="analysis-empty">
          {zh ? '还没有按日记录的阅读时间。' : 'No daily reading time yet.'}
        </p>
      ) : (
        <div
          className={`analysis-period-chart is-${mode}`}
          aria-label={zh ? '阅读时间柱状图' : 'Reading time bar chart'}
        >
          {period.items.map((item) => {
            const height =
              item.minutes <= 0 ? 0 : Math.max(6, (item.minutes / maxMinutes) * 100)
            const label =
              mode === 'day' ? weekdayLabel(item.start, zh) : monthDay(item.start)
            const sub =
              mode === 'day' ? monthDay(item.start) : monthDay(item.end)
            return (
              <div
                key={item.key}
                className={`analysis-period-col${item.isCurrent ? ' is-current' : ''}${item.minutes > 0 ? ' has-time' : ''}`}
                title={`${item.start}${mode === 'week' ? ` – ${item.end}` : ''} · ${formatDuration(item.minutes)}`}
              >
                <span className="analysis-period-value">
                  {item.minutes > 0 ? formatDuration(item.minutes) : ''}
                </span>
                <div className="analysis-period-track">
                  <span className="analysis-period-fill" style={{ height: `${height}%` }} />
                </div>
                <strong>{label}</strong>
                <em>{sub}</em>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function TimeByPart({
  parts,
  focusedMinutes,
  zh,
}: {
  parts: PartProgress[]
  focusedMinutes: number
  zh: boolean
}) {
  const active = parts.filter((part) => part.focusedMinutes > 0)
  const idle = parts.filter((part) => part.focusedMinutes <= 0)
  const ranked = [...active].sort((a, b) => b.focusedMinutes - a.focusedMinutes)
  const maxMinutes = Math.max(0.001, ...ranked.map((part) => part.focusedMinutes))

  if (active.length === 0) {
    return (
      <p className="analysis-empty">
        {zh ? '还没有专注时间记录。' : 'No focus time recorded yet.'}
      </p>
    )
  }

  return (
    <div className="analysis-time-board">
      <p className="analysis-section-note">
        {zh
          ? `共 ${formatDuration(focusedMinutes)}，按部分看时间占比。`
          : `${formatDuration(focusedMinutes)} total · share of focused time by part.`}
      </p>
      <div className="analysis-time-stack" aria-hidden="true">
        {ranked.map((part) => (
          <span
            key={part.partId}
            className={`theme-${part.theme}`}
            style={{ flexGrow: Math.max(part.timeShare, 1.5) }}
            title={`${part.letter} ${part.titleEn} ${formatPercent(part.timeShare)}`}
          />
        ))}
      </div>
      <div className="analysis-time-map" aria-label={zh ? '各部分时间热力图' : 'Time heatmap by part'}>
        {parts.map((part) => (
          <span
            key={part.partId}
            className={`analysis-time-cell theme-${part.theme} ${part.focusedMinutes > 0 ? 'has-time' : ''}`}
            style={{
              opacity: part.focusedMinutes > 0 ? 0.35 + (part.timeShare / 100) * 0.65 : 0.18,
            }}
            title={`${part.letter} ${part.titleEn}: ${formatDuration(part.focusedMinutes)}`}
          >
            {part.letter}
          </span>
        ))}
      </div>
      <ol className="analysis-time-rank">
        {ranked.map((part, index) => (
          <li key={part.partId} className={`theme-${part.theme}`}>
            <span className="analysis-time-rank-n">{index + 1}</span>
            <span className="analysis-time-label">
              {part.letter}
              <em>{zh ? part.titleZh : part.titleEn}</em>
            </span>
            <TimeBar minutes={part.focusedMinutes} maxMinutes={maxMinutes} />
            <b>
              {formatDuration(part.focusedMinutes)}
              <i>{formatPercent(part.timeShare)}</i>
            </b>
          </li>
        ))}
      </ol>
      {idle.length > 0 && (
        <p className="analysis-time-idle">
          {zh ? '尚未计时：' : 'No time yet: '}
          {idle.map((part) => part.letter).join(' · ')}
        </p>
      )}
    </div>
  )
}

function ChapterLine({
  chapter,
  zh,
}: {
  chapter: ChapterProgress
  zh: boolean
}) {
  const inner = (
    <>
      <span className="analysis-chapter-code">{chapter.code}</span>
      <span className="analysis-chapter-title">{zh ? chapter.titleZh : chapter.titleEn}</span>
      <Meter value={chapter.percent} status={chapter.status} />
      <span className="analysis-chapter-nums">
        {chapter.readPages}/{chapter.slideCount}
      </span>
      <span className="analysis-chapter-time">{formatDuration(chapter.focusedMinutes)}</span>
    </>
  )

  if (chapter.continuePath) {
    return (
      <Link to={chapter.continuePath} className={`analysis-chapter-line is-${chapter.status}`}>
        {inner}
      </Link>
    )
  }

  return <div className={`analysis-chapter-line is-${chapter.status}`}>{inner}</div>
}

function PartBlock({
  part,
  chapters,
  showDone,
  open,
  onToggle,
  zh,
}: {
  part: PartProgress
  chapters: ChapterProgress[]
  showDone: boolean
  open: boolean
  onToggle: () => void
  zh: boolean
}) {
  const doneChapters = chapters.filter((chapter) => chapter.status === 'done').length
  const visible = showDone ? chapters : chapters.filter((chapter) => chapter.status !== 'done')
  const panelId = `analysis-part-panel-${part.partId}`

  return (
    <div
      className={`analysis-part-block theme-${part.theme} is-${part.status}${open ? ' is-open' : ''}`}
    >
      <button
        type="button"
        className="analysis-part-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="analysis-part-letter">{part.letter}</span>
        <span className="analysis-part-name">{zh ? part.titleZh : part.titleEn}</span>
        <Meter
          value={part.percent}
          status={part.status}
          label={`${part.titleEn} ${part.percent}%`}
        />
        <span className="analysis-part-stats">
          <b>{formatPercent(part.percent)}</b>
          <i>
            {part.readPages}/{part.slideCount}
            {' · '}
            {doneChapters}/{part.chapterCount}
            {zh ? '章' : ' ch'}
          </i>
        </span>
        <span className="analysis-part-caret" aria-hidden="true" />
      </button>
      {open && (
        <div id={panelId} className="analysis-chapter-group">
          {visible.length === 0 ? (
            <p className="analysis-empty">
              {zh ? '此部分章节已完成。' : 'All chapters in this part are done.'}
            </p>
          ) : (
            visible.map((chapter) => (
              <ChapterLine key={chapter.chapterId} chapter={chapter} zh={zh} />
            ))
          )}
        </div>
      )}
    </div>
  )
}

export function AnalysisDashboard({ data }: Props) {
  const { showChinese } = useChineseLocale()
  const view = useMemo(() => buildReadingView(data), [data])
  const [chapterFilter, setChapterFilter] = useState<'open' | 'all'>('open')
  const [openPartIds, setOpenPartIds] = useState<string[] | null>(null)

  const chaptersByPart = useMemo(() => {
    const grouped = new Map<string, ChapterProgress[]>()
    for (const part of view.parts) grouped.set(part.partId, [])
    for (const chapter of view.chapters) {
      const list = grouped.get(chapter.partId)
      if (list) list.push(chapter)
    }
    return grouped
  }, [view.chapters, view.parts])

  const resolvedOpen = useMemo(() => {
    if (openPartIds) return new Set(openPartIds)
    if (view.next?.partId) return new Set([view.next.partId])
    return new Set<string>()
  }, [openPartIds, view.next])

  const togglePart = (partId: string) => {
    const next = new Set(resolvedOpen)
    if (next.has(partId)) next.delete(partId)
    else next.add(partId)
    setOpenPartIds([...next])
  }

  return (
    <div className="analysis-breakdown">
      <section className="analysis-hero" data-report="progress">
        <div className="analysis-hero-progress">
          <div className="analysis-hero-copy">
            <span>{showChinese ? '全书进度' : 'Course progress'}</span>
            <strong>{formatPercent(view.percent)}</strong>
          </div>
          <Meter
            value={view.percent}
            status={view.percent >= 100 ? 'done' : view.percent > 0 ? 'progress' : 'empty'}
            label="Course progress"
          />
          <p>
            {view.readPages}/{view.slideCount} {showChinese ? '页' : 'pages'} · {view.chaptersDone}/
            {view.chapterCount} {showChinese ? '章完成' : 'chapters done'} · {view.partsDone}/
            {view.partCount} {showChinese ? '部分完成' : 'parts done'}
          </p>
        </div>
        {view.next?.continuePath && (
          <Link className="analysis-continue" to={view.next.continuePath}>
            <span>{showChinese ? '继续阅读' : 'Continue'}</span>
            <strong>
              {view.next.code} {view.next.titleEn}
            </strong>
            {showChinese && <em>{view.next.titleZh}</em>}
          </Link>
        )}
      </section>

      <section className="analysis-kpis" data-report="kpis">
        <div className="analysis-kpi">
          <span>{showChinese ? '专注时间' : 'Focus time'}</span>
          <strong>{formatDuration(view.focusedMinutes)}</strong>
        </div>
        <div className="analysis-kpi">
          <span>{showChinese ? '已读页数' : 'Pages read'}</span>
          <strong>{view.readPages}</strong>
        </div>
        <div className="analysis-kpi">
          <span>{showChinese ? '阅读节奏' : 'Pace'}</span>
          <strong>{paceLabel(view.avgSecondsPerPage, showChinese)}</strong>
        </div>
        <div className="analysis-kpi">
          <span>{showChinese ? '最近活动' : 'Last active'}</span>
          <strong>{formatRelativeTime(view.lastActiveAt)}</strong>
        </div>
      </section>

      <p className="analysis-insight" data-report="insight">
        {view.insightEn}
        {showChinese && <span>{view.insightZh}</span>}
      </p>

      <section className="analysis-section" data-report="calendar">
        <TimeOverPeriod byDay={view.byDay} zh={showChinese} />
      </section>

      <section className="analysis-section" data-report="time">
        <h2>{showChinese ? '时间分布' : 'Time by part'}</h2>
        <TimeByPart
          parts={view.parts}
          focusedMinutes={view.focusedMinutes}
          zh={showChinese}
        />
      </section>

      <section className="analysis-section" data-report="parts">
        <div className="analysis-section-head">
          <h2>{showChinese ? '各部分进度' : 'Progress by part'}</h2>
          <div className="analysis-filter">
            <button
              type="button"
              className={chapterFilter === 'open' ? 'active' : ''}
              onClick={() => setChapterFilter('open')}
            >
              {showChinese ? '未完成' : 'Open'}
            </button>
            <button
              type="button"
              className={chapterFilter === 'all' ? 'active' : ''}
              onClick={() => setChapterFilter('all')}
            >
              {showChinese ? '全部' : 'All'}
            </button>
          </div>
        </div>
        <div className="analysis-progress-board" data-report="chapters">
          {view.parts.map((part) => (
            <PartBlock
              key={part.partId}
              part={part}
              chapters={chaptersByPart.get(part.partId) ?? []}
              showDone={chapterFilter === 'all'}
              open={resolvedOpen.has(part.partId)}
              onToggle={() => togglePart(part.partId)}
              zh={showChinese}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export function AdminUserProgress({
  readPages,
  minutes,
}: {
  readPages: number
  minutes: number
}) {
  const total = courseSlideCount()
  const percent = total > 0 ? Math.min(100, Math.round((readPages / total) * 1000) / 10) : 0
  const status: ProgressStatus =
    percent >= 100 ? 'done' : percent > 0 ? 'progress' : 'empty'
  return (
    <div className="analysis-admin-progress">
      <Meter value={percent} status={status} />
      <span>
        {formatPercent(percent)} · {formatDuration(minutes)}
      </span>
    </div>
  )
}
