import Image from 'next/image'

interface Props {
  readonly img: string
  readonly name: string
  readonly title: string
}
export const Champion = ({ img, name }: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='avatar'>
        <div className='w-28 rounded relative'>
          <Image src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${img}`} alt={name} layout='fill' />
        </div>
      </div>
      <p>{name}</p>
    </div>
  )
}
