import { useQuery } from '@tanstack/react-query'

import { fetchChampions } from '../../helpers/fetchChampions'
import { Champion } from '../Champion'

export const ChampionsPageContent = () => {
  const { data: champions, isError, isLoading } = useQuery(['champions'], fetchChampions)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }

  console.log(champions)
  return (
    <div className='container flex justify-center flex-wrap gap-2 p-10'>
      {champions.map(champion => (
        <Champion key={champion.name} name={champion.name} title={champion.title} img={champion.image.full} />
      ))}
    </div>
  )
}
