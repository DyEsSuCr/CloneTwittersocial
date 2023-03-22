import { useLoaderData } from 'react-router-dom'

export const Profile = () => {
  const { profile } = useLoaderData()

  return (
    <div>
      <h1 className='text-blue font-semibold '>Profile</h1>
      <p className='mb-6'> {profile.username}</p>
    </div>
  )
}

export const loaderProfile = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/users/${params.username}`)
  const profile = await res.json()

  return { profile }
}
