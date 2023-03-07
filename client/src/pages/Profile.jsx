import { useLoaderData } from 'react-router-dom'
import { Profiles } from '../components/Profiles'

export const Profile = () => {
  const { profile } = useLoaderData()

  return (
    <div>
      <h1 className='text-blue font-semibold '>Profile</h1>
      <p className='mb-6'> {profile.username}</p>

      <h1>more prifles</h1>
      <Profiles />
    </div>
  )
}

export const loaderProfile = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/users/${params.username}`)
  const profile = await res.json()

  return { profile }
}
