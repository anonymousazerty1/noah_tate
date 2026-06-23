import type { Metadata } from 'next'
import ParallaxPhoto from '@/components/ParallaxPhoto'

export const metadata: Metadata = { title: 'Bio' }

const facts = [
  { k: 'Based',          v: 'Brussels / Melbourne' },
  { k: 'Latest release', v: 'The Grey House, 2025' },
  { k: 'Training',       v: 'Conservatoire de Mons' },
  { k: 'Film credit',    v: 'Souvenirs de la Lune' },
]

export default function Bio() {
  return (
    <>
      {/* Photo plein-largeur avec parallax */}
      <ParallaxPhoto
        src="/chandelier.jpg"
        alt="Anthony De Baere"
        speed={0.4}
        height="75vh"
      />

      {/* Texte */}
      <div className="page">
        <p className="s-label">Bio</p>

        <div className="bio-body">
          <p className="bio-text">
            Anthony De Baere writes under the name Noah Tate. He was a reclusive
            kid who heard Radiohead for the first time in a car on the way to
            Crete and got obsessed, bought his first guitar at ten, started
            writing songs almost immediately, played in a covers band at thirteen
            and then in his first real project a few years later. He went to
            Jazz Studio after that and started writing alone for the first time,
            which is where Stump! came from, a Brussels post-punk band he
            co-founded that played shows across Belgium and France for three
            years before ending in 2024. He studied film composition at the
            Conservatoire de Mons during the same period and scored the feature
            Souvenirs de la Lune with Antoine Dricot, while building a solo project
            on the side under the name Noah Tate. The first EP didn't land,
            neither did much of what came after it for a while, but he kept
            releasing anyway, a second more electronic EP, then singles, until
            something started sounding like him. When Stump! ended he left for
            Australia alone, formed a new band there, watched that end too, and
            came home to Belgium to finish The Grey House, written, produced and
            recorded entirely by himself except for the mixing. It came out last
            year. He's writing the next one now, with new music coming this year.
          </p>

          <div className="bio-facts">
            {facts.map(({ k, v }) => (
              <div key={k} className="bf">
                <span className="bf-k">{k}</span>
                <span className="bf-v">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
