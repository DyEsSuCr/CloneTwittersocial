import { Outlet } from 'react-router-dom'
import { Notices } from '../components/Notices/Notices'
import { Sidebars } from '../components/Sidebar/Sidebars'

export function App () {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='w-[1280px] grid grid-cols-container gap-6'>
        <Sidebars />
        <Outlet />
        <Notices />
      </div>
    </div>
  )
}
