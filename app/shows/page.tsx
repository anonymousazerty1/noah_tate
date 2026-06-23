import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Shows' }

const shows: { date: string; city: string; venue: string; ticketUrl?: string }[] = []

export default function Shows() {
  return (
    <div className="page">
      <p className="s-label">Shows</p>

      {shows.length === 0 ? (
        <div className="shows-empty">
          <p className="bio-text">No live dates right now — the focus is on releases. New songs coming this year.</p>
        </div>
      ) : (
        <div className="show-list">
          {shows.map((s, i) => (
            <div key={i} className="show-row">
              <span className="show-date">{s.date}</span>
              <span className="show-location">{s.city} — {s.venue}</span>
              {s.ticketUrl && (
                <a
                  href={s.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="show-ticket"
                >
                  Tickets
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
