import Image from 'next/image'

interface Props {
  readonly img: string
  readonly name: string
  readonly title: string
}
export const Champion = ({ img, name, title }: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <figure>
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${img}`}
          alt={name}
          width={100}
          height={100}
        />
      </figure>
      <p className='card-title'>{name}</p>
    </div>
  )
}
