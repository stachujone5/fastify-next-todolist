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

  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Card title!</h2>
        <input type='text' placeholder='Enter to-do name' className='input input-bordered w-full' />
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
