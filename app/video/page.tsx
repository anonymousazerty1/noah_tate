import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Video' }

const videos = [
  {
    id: '2QOvA2--tJs',
    cat: 'Live Session — Noah Tate',
    title: 'Burn',
    titleEm: 'live at Rolling Stock',
    meta: 'Melbourne, 2025',
  },
  {
    id: 'eDyQKEsJcco',
    cat: 'Live Session — Noah Tate',
    title: 'Shame',
    titleEm: 'live at Rolling Stock',
    meta: 'Melbourne, 2025',
  },
  {
    id: '9dUvivH1X1s',
    cat: 'Music Video — Noah Tate',
    title: '',
    titleEm: 'How Could I?',
    meta: '2024',
  },
  {
    id: '532mcpkt_so',
    cat: 'Music Video — Stump!',
    title: '',
    titleEm: 'Stealing Lash',
    meta: '2024',
  },
  {
    id: 'm6er2didbBI',
    cat: 'Film & Score',
    title: 'Music for films',
    titleEm: 'portfolio',
    meta: 'Conservatoire de Mons · 2024',
  },
]

export default function Video() {
  return (
    <div className="page">
      <p className="s-label">Video</p>
      <div className="video-list">
        {videos.map((v) => (
          <a
            key={v.id}
            href={`https://youtu.be/${v.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="vid-row"
          >
            <div className="vid-thumb">
              <Image
                src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                alt={`${v.title} ${v.titleEm}`}
                fill
                sizes="(max-width: 900px) 100vw, 340px"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
              <div className="play">
                <div className="play-circle">
                  <svg viewBox="0 0 10 12" aria-hidden="true">
                    <polygon points="0,0 10,6 0,12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="vid-info">
              <p className="vid-cat">{v.cat}</p>
              <h3 className="vid-title">
                {v.title && `${v.title} — `}<em>{v.titleEm}</em>
              </h3>
              <p className="vid-meta">{v.meta}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
