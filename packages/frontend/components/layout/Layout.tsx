import { Nav } from './Nav'

import type { Children } from '../../types'

export const Layout = ({ children }: Children) => {
  return (
    <>
      <Nav />
      <main className='flex justify-center items-center h-screen'>{children}</main>
    </>
  )
}
