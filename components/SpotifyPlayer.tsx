/**
 * SpotifyPlayer — Embed Spotify via iframe
 *
 * uri examples:
 *   "playlist/37i9dQZF1DXcBWIGoYBM5M"
 *   "track/4iV5W9uYEdYUVa79Axb7Rh"
 *   "album/1DFixLWuPkv3KT3TnV35m3"
 *   "artist/0TnOYISbd1XYRBk9myaseg"
 *
 * Replace the default uri below with your own.
 */
interface SpotifyPlayerProps {
  uri?: string
  height?: number
  compact?: boolean
}

export default function SpotifyPlayer({
  uri = 'playlist/37i9dQZF1DXcBWIGoYBM5M', // ← remplace par ton URI
  height,
  compact = false,
}: SpotifyPlayerProps) {
  const h = height ?? (compact ? 152 : 352)
  const src = `https://open.spotify.com/embed/${uri}?utm_source=generator&theme=0`

  return (
    <iframe
      src={src}
      width="100%"
      height={h}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      style={{ borderRadius: '8px', border: 'none', display: 'block' }}
      title="Spotify Player"
    />
  )
}
