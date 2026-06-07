const VideoBackground = ({title, overview}) => {
    
  return (
    <div className='-mt-20 absolute inset-0 z-10 pt-[20%] px-6 md:px-12 pb-20 flex flex-col justify-start w-full h-full'>
      {/* Gradient overlay for better text readability */}
      <div className='absolute inset-0 pointer-events-none bg-linear-to-r from-black/80 via-black/50 to-transparent'></div>
      
      {/* Content wrapper */}
      <div className='relative z-20 flex flex-col justify-start max-w-2xl'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 leading-tight drop-shadow-lg'>
          {title}
        </h1>
        
        <p className='text-base md:text-lg text-gray-100 mb-6 line-clamp-3 drop-shadow-md max-w-xl leading-relaxed'>
          {overview}
        </p>
        
        {/* Action buttons */}
        <div className='flex flex-row gap-4 mt-2'>
          <button className='group relative px-8 md:px-10 py-3 md:py-4 text-lg font-bold bg-white text-black rounded hover:bg-gray-200 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl'>
            <svg className='w-6 h-6 group-hover:scale-110 transition-transform' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z' />
            </svg>
            Play
          </button>
          
          <button className='group px-8 md:px-10 py-3 md:py-4 text-lg font-bold bg-gray-600/60 hover:bg-gray-500/80 text-white rounded active:scale-95 transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center justify-center gap-2'>
            <svg className='w-6 h-6 group-hover:scale-110 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoBackground