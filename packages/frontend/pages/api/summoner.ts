import axios from 'axios'
import dotenv from 'dotenv'

import type { NextApiHandler } from 'next'

dotenv.config()

export interface Player {
  readonly accountId: string
  readonly id: string
  readonly name: string
  readonly profileIconId: number
  readonly puuid: string
  readonly revisionDate: number
  readonly summonerLevel: number
}

export interface PlayerStats {
  readonly freshBlood: boolean
  readonly hotStreak: boolean
  readonly inactive: boolean
  readonly leagueId: string
  readonly leaguePoints: number
  readonly losses: number
  readonly queueType: string
  readonly rank: string
  readonly summonerId: string
  readonly summonerName: string
  readonly tier: string
  readonly veteran: boolean
  readonly wins: number
}

const getPlayerByName: NextApiHandler = async (req, res) => {
  const { name }: { readonly name?: string } = req.body
  if (req.method === 'POST' && name) {
    try {
      const { data: player } = await axios.get<Player>(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.API_KEY}`
      )
      const { data: playerStats } = await axios.get<readonly PlayerStats[]>(
        `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${player.id}?api_key=${process.env.API_KEY}`
      )

      return res.status(200).json({ ...player, ...playerStats[0] })
    } catch (err) {
      return res.status(404).json({ message: 'Error' })
    }
  }
  res.status(404).json({ message: 'Error' })
}

export default getPlayerByName
