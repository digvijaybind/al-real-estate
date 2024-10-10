import React from 'react'
import ResponsiveWrapper from '../ResponsiveWrapper/ResponsiveWrapper'

const Notification = () => {
  return (
    <ResponsiveWrapper className={ "border border-slate-200 rounded-2xl relative my-20 flex flex-col lg:flex-row" }>
      <img src="https://i.1.creatium.io/81/a3/06/06aef09e040399668ba358b5ca85882bcd/48x29/mail_em_icn.svg" alt="" className='top-0 left-10 -translate-y-1/2 lg:top-10 lg:left-0 lg:-translate-x-1/2 w-32 h-auto z-[10] absolute' />

      <section className='lg:py-8 py-12 px-10 lg:pl-24 lg:pr-16 flex-1 flex flex-col items-center justify-center'>
        <h3 className='text-4xl font-medium text-left w-full mb-4'>Notify Me About New Projects
        </h3>

        <div className="flex items-start gap-5 text-xl text-left">
          <p> Be the first to hear about new off-plan projects and get access to <strong> VIP pre-launch bookings with special offers from the developers</strong></p>

          <img src="https://i.1.creatium.io/8e/d2/de/31e7f4b3aa8464b905015fb472a9f07c4b/82x72/bell_icn_bl.svg" alt="bell icon" className='size-28 rotate-12' />
        </div>
      </section>

      <div className="bg-[#00abe4] flex flex-col gap-6 justify-center py-8 px-10 rounded-b-2xl lg:rounded-r-2xl w-full lg:w-[30%]">
        <div className="relative">
          <input data-focus="true" type="text" name="" id="" className="border-b border-white outline-none bg-transparent w-full py-1 text-lg" placeholder=' ' />
          <label htmlFor="" className=''>Full Name*</label>
        </div>
        <div className="relative">
          <input data-focus="true" type="text" name="" id="" className="border-b border-white outline-none bg-transparent w-full py-1 text-lg" placeholder=' ' />
          <label htmlFor="" className=''>Email*</label>
        </div>

        <button type="button" className='text-white rounded-xl py-4 text-center bg-[#c81819] font-medium text-xl'>Subscribe Now</button>

        <p className='font-light text-sm text-white' >Zero spam. Unsubscribe at any time</p>
      </div>
    </ResponsiveWrapper>
  )
}

export default Notification