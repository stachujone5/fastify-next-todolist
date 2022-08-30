import axios from 'axios'

interface Champion {
  readonly image: {
    readonly full: string
    readonly sprite: string
  }
  readonly name: string
  readonly title: string
}

export const fetchChampions = async () => {
  try {
    const data = await axios.get<{ readonly data: { readonly [key: string]: Champion } }>(
      'http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json'
    )

    const champions = data.data.data
    const names = Object.keys(champions).map(name => champions[name])

    return names
  } catch (err) {
    throw new Error("Couldn't fetch champions!")
  }
}
