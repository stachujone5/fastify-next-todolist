import axios from 'axios'

import { ChampionsPageContent } from '../../components/page-contents/ChampionsPageContent'

interface Champion {
  readonly image: {
    readonly full: string
    readonly sprite: string
  }
  readonly name: string
  readonly title: string
}

export type ChampionsPageProps =
  | {
      readonly champions: readonly Champion[]
      readonly isError: false
    }
  | {
      readonly champions: null
      readonly isError: true
    }

const ChampionsPage = (props: ChampionsPageProps) => {
  return <ChampionsPageContent {...props} />
}

export default ChampionsPage

export const getStaticProps = async () => {
  try {
    const data = await axios.get<{ readonly data: { readonly [key: string]: Champion } }>(
      'http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json'
    )

    const champions = Object.keys(data.data.data).map(name => data.data.data[name])

    return { props: { champions, isError: false } }
  } catch (err) {
    return { props: { champions: null, isError: true } }
  }
}
