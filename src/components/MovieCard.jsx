import { CARD_IMG } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null
  
  return (
    <div className='relative z-10 shrink-0 w-32 md:w-40 h-48 md:h-56 mx-1.5 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform-gpu will-change-transform hover:scale-105 hover:z-30 group'>
        <img 
          className='w-full h-full object-cover group-hover:brightness-110 transition-all duration-300' 
          src={CARD_IMG+posterPath}
          alt='Movie Poster'
        />
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center'>
          <svg className='w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M8 5v14l11-7z' />
          </svg>
        </div>
    </div>
  )
}

export default MovieCard