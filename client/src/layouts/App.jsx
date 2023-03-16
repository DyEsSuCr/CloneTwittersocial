import { Outlet } from 'react-router-dom'
import { Notices } from '../components/Notices'
import { Sidebar } from '../components/Sidebar'

export function App () {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='w-[1280px] grid grid-cols-container gap-6'>
        <Sidebar />
        <Outlet />
        <Notices />
      </div>
    </div>
  )
}
