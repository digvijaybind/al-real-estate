import React from 'react'
import ResponsiveWrapper from '../ResponsiveWrapper/ResponsiveWrapper'
import { SlClock } from 'react-icons/sl'

const Quiz = () => {
  return (
    <div className="relative overflow-clip py-20">

      <img src="https://i.1.creatium.io/1b/fc/56/3baf311666a37825b4a5ea98485e58ceba/835x980q10/pattern2.png" alt="bacdrop" className='absolute left-0 top-0 w-full h-full object-cover -translate-x-1/2 z-[-1]' />

      <ResponsiveWrapper className={ "flex lg:flex-row flex-col" }>
        <section className="border bg-slate-50 border-slate-200 p-10 md:p-14 lg:border-r-0 rounded-2xl  lg:rounded-tr-none rounded-br-none flex flex-col gap-8 flex-1 lg:rounded-bl-2xl rounded-bl-none">
          <h2 className='text-4xl text-left font-medium'>Got Confused? Complete A Quiz & Get The Best Offers</h2>

          <p className="font-thin text-left text-lg">
            Being qualified property experts with years of experience, we realize how confusing Dubai’s off-plan property market could be for new buyers, as well as for professional investors. Especially when there are thousands of off-plan properties in Dubai.
            <br />
            <br />
            You won’t need to look through countless listings on other the UAE's property websites. We have gathered all available information about off-plan property in one place and created a short quiz for you to find your perfect home in less than two minutes. Follow simple steps on the screen to get your personal selection of projects that meet all your requirements.
          </p>

          <div className="flex justify-between gap-10 flex-wrap">
            <button type="button" className="bg-[#00abe4] shrink-0 py-5 font-medium text-white rounded-2xl text-xl px-20">Take a Quick Test →</button>
            <div className="flex gap-3 items-center"><SlClock className='text-[#00abe4] shrink-0 text-3xl' />
              <p className='text-lg font-medium text-left leading-[18px]'> It takes less than 2 minutes</p>
            </div>
          </div>
        </section>

        <img src="https://i.1.creatium.io/9c/8a/e5/2d98d8006bd700078929ca41d97388c25e/547x610q8/quiz.jpg" alt="" className='w-full lg:w-[38%] h-[350px] md:h-[450px] lg:h-auto object-cover rounded-b-2xl' />
      </ResponsiveWrapper>
    </div>
  )
}

export default Quiz