import axios from 'axios'
import { useState } from 'react'

import { Stats } from '../shared/Stats'

import type { Player, PlayerStats } from '../../pages/api/summoner'
import type { FormEvent } from 'react'

export interface PlayerFull extends Player, PlayerStats {}

export const HomePageContent = () => {
  const [inputValue, setInputValue] = useState('')
  const [playerInfo, setPlayerInfo] = useState<PlayerFull | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data: player } = await axios.post<PlayerFull>('/api/summoner', { name: inputValue })

      console.log(player)

      setInputValue('')
      setPlayerInfo(player)
    } catch (err) {
      setPlayerInfo(null)
      console.log(err)
    }
  }

  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>League stats tracker</h2>
        <div className='dropdown mb-8'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Enter player name'
              className='input input-bordered w-full dropdown'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </form>
          {inputValue && (
            <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-300 rounded w-full mt-2'>
              <li>{inputValue}</li>
            </ul>
          )}
        </div>
        {playerInfo && <p className='text-center text-xl'>{playerInfo.name}</p>}
        {playerInfo && <Stats {...playerInfo} />}
      </div>
    </div>
  )
}
