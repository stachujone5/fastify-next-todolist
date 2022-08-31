import { Champion } from '../Champion'

import type { ChampionsPageProps } from '../../pages/champions'

export const ChampionsPageContent = ({ champions, isError }: ChampionsPageProps) => {
  return (
    <div className='container flex justify-center flex-wrap gap-2 p-10'>
      {isError ? (
        <h1>Error</h1>
      ) : (
        champions.map(champion => (
          <Champion key={champion.name} name={champion.name} title={champion.title} img={champion.image.full} />
        ))
      )}
    </div>
  )
}
