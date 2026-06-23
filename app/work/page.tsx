import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import SpotifyPlayer from '@/components/SpotifyPlayer'

export const metadata: Metadata = { title: 'Work' }

interface Project {
  num: string
  title: string
  cover: string
  coverStyle?: CSSProperties
  secondary?: boolean
  lines: string[]
  links: { label: string; href: string }[]
  spotify: string | null
}

const projects: Project[] = [
  {
    num: 'i',
    title: 'Noah Tate',
    cover: '/work/noah-tate.jpg',
    lines: [
      'Solo · Indie / Alternative / Lo-fi',
      'The Grey House — 2025 · Locked in an Elevator EP — 2023 · Oblivion EP — 2021',
    ],
    links: [
      { label: 'Spotify',   href: 'https://open.spotify.com/intl-fr/album/1l0SYtg393FzQ6SEVeVb2J' },
      { label: 'Instagram', href: 'https://www.instagram.com/noah__tate/' },
      { label: 'All links', href: 'https://linktr.ee/noah_tate' },
    ],
    spotify: 'album/1l0SYtg393FzQ6SEVeVb2J',
  },
  {
    num: 'ii',
    title: 'Stump!',
    cover: '/work/stump.jpg',
    coverStyle: { filter: 'grayscale(1) brightness(0.8)' },
    secondary: true,
    lines: [
      'Band · Indie / Post-punk / Krautrock',
      'Brussels · 2022–2024 · Floor 44 Country Club EP — 2023',
    ],
    links: [
      { label: 'Spotify',   href: 'https://open.spotify.com/artist/5ao0FlhbHttfQQfXexamDP' },
      { label: 'Bandcamp',  href: 'https://stump1.bandcamp.com' },
      { label: 'All links', href: 'https://linktr.ee/stump__' },
    ],
    spotify: null,
  },
  {
    num: 'iii',
    title: 'Film & Score',
    cover: '/work/souvenirs.jpg',
    lines: [
      'Composition for film — short & feature',
      'Souvenirs de la Lune (2023, feature film)',
    ],
    links: [
      { label: 'IMDB',             href: 'https://www.imdb.com/title/tt19844134/' },
      { label: 'Composition reel', href: 'https://youtu.be/m6er2didbBI' },
    ],
    spotify: null,
  },
]

export default function Work() {
  return (
    <div className="page">
      <p className="s-label">Work</p>

      <div className="work-projects">
        {projects.map((p) => (
          <article
            key={p.num}
            className="work-project"
            style={p.secondary ? { opacity: 0.82 } : undefined}
          >

            {p.cover && (
              <div className="wp-img-wrap">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 860px) 100vw, 80vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    ...(p.coverStyle ?? {}),
                  }}
                  className="wp-img"
                />
              </div>
            )}

            <div className="wp-header">
              <span className="wp-num">{p.num}</span>
              <h2
                className="wp-title"
                style={p.secondary ? { fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' } : undefined}
              >
                {p.title}
              </h2>
            </div>

            <p className="wp-desc">
              {p.lines.map((l, i) => (
                <span key={i}>{l}{i < p.lines.length - 1 && <br />}</span>
              ))}
            </p>

            <div className="wp-links">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="wp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {p.spotify && (
              <div className="wp-spotify">
                <SpotifyPlayer uri={p.spotify} compact height={152} />
              </div>
            )}

          </article>
        ))}
      </div>
    </div>
  )
}
