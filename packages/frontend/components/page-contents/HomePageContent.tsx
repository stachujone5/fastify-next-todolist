import { useEffect, useState } from 'react'

import { Stats } from '../Stats'

export const HomePageContent = () => {
  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:5432')
      .then(res => res.json())
      .then((data: { readonly message: string }) => setData(data.message))
      .catch(err => console.log(err))
  }, [])

  const players = ['gracz1', 'gracz2']

  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>League stats tracker</h2>
        <div className='dropdown'>
          <input type='text' placeholder='Enter player name' className='input input-bordered w-full dropdown' />
          <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
            {players.map(p => (
              <li key={p}>
                <a>{p}</a>
              </li>
            ))}
          </ul>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>Data from api: {data}</p>
        <Stats />
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}
