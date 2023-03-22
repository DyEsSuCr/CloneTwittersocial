import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen min-w-full gap-8'>
      <h1 className='text-blue font-semibold text-7xl text-center'>Welcome to Twitter Clone</h1>
      <nav className='flex gap-4 justify-center'>
        <Link to='/signup' className='text-black text-4xl hover:text-dark-gray duration-300'>
          Signup
        </Link>
        <Link to='/signin' className='text-black text-4xl hover:text-dark-gray duration-300'>
          Signin
        </Link>
        <Link to='/explore' className='text-black text-4xl hover:text-dark-gray duration-300'>
          Explore
        </Link>
      </nav>
      <a
        href='https://acortar.link/OZVlzc'
        className='absolute bottom-6 text-black font-medium text-lg'
        target='_blank'
        rel='noopener noreferrer'
      >
        By DyEsSuCr
      </a>
    </div>
  )
}
