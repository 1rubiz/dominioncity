import { FaBible } from 'react-icons/fa'

export default function Loading() {
  return (
    <>
      <style>{`
        @keyframes dotSlide {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }

        .dot-slide {
          animation: dotSlide 2s ease-in-out infinite;
        }
      `}</style>
      <div className='fixed top-0 z-[50] left-0 w-full h-screen bg-[#f8f8f8] flex flex-col items-center justify-center overflight-hidden'>
        <div className='mb-4'>
          <FaBible className='text-6xl text-gray-700' />
        </div>
        
        <div className='relative w-32 h-8 flex items-center justify-center'>
          {/* Animated dots container */}
          <div className='absolute flex gap-1'>
            <div className='dot-slide w-3 h-3 rounded-full bg-slate-600' style={{ animationDelay: '0s' }} />
            <div className='dot-slide w-3 h-3 rounded-full bg-slate-600' style={{ animationDelay: '0.1s' }} />
            <div className='dot-slide w-3 h-3 rounded-full bg-slate-600' style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
        
        {/* <p className='mt-12 text-slate-900 text-sm font-light tracking-widest'>Loading</p> */}
      </div>
    </>
  )
}
