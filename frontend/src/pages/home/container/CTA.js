import React from 'react'

export default function CTA() {
  return (
    <>
     <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>
     <section className='relative bg-dark-hard px-5'>
      <div className='container grid grid-cols-12 mx-auto py-10'>
        <div className='col-span-12'>
          <h2 className='text-white font-roboto font-bold text-2xl'>Get our stories delivered From us to your inbox weekly.</h2>
          <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto'>
            <input type="text" placeholder='Your Email' className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light'/>
            <button className='px-4 py-3 rounded-lg w-full bg-primary text-white font-bold'>Get Started</button>
          </div>
          <p className='text-dark-light text-sm leading-7 mt-6'>
            <span className='font-bold italic text-[#B3BAC5]'> Get a response tomorrow</span>if you submit by 9pm today. If we received after 9pm will get a
              reponse the following day.</p>
        </div>
      </div>
     </section> 
    </>
  )
}
