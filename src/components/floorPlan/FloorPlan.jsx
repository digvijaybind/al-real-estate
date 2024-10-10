import React, { useState } from 'react'
import ResponsiveWrapper from '../ResponsiveWrapper/ResponsiveWrapper'
import { cn } from '../../lib/helpers'
import { MdOutlineHouse } from 'react-icons/md'

const FLOOR_PLANS = [
  {
    id: 1,
    title: "4-Bedroom",
    heading: "4-Bedroom Townhouse",
    area: "2,420 sqft",
    images: ["https://i.1.creatium.io/disk2/28/80/70/b916c0e25106740343b00e6deefea96c5b/303x536q8/4br_2420_sqft.jpg"]
  },
  {
    id: 2,
    title: "5-Bedroom",
    heading: "5-Bedroom Townhouse",
    area: "3,407 sqft",
    images: ["https://i.1.creatium.io/disk2/f2/3e/74/b9ba148d1f7d63dcf136cfd20f329b6104/483x367q8/5br_3407_sqft.jpg"]
  },
]

const FloorPlan = () => {
  const [activePlan, setActivePlan] = useState(FLOOR_PLANS[0])

  return (
    <ResponsiveWrapper className={ "flex flex-col gap-10 py-10" }>

      <h2 className='text-4xl font-medium w-max before:bg-[#00abe4] relative before:absolute before:w-[100px] before:h-1 before:left-[105%] before:top-1/2 before:-translate-y-1/2 lg:before:block before:hidden'>Floor Plans of Riverside</h2>
      <div className='flex items-center gap-5 flex-wrap'>
        { FLOOR_PLANS.map(btn => <button key={ btn.id } onClick={ () => setActivePlan(btn) } className={ cn("px-16 py-3.5 rounded-xl transition-all font-medium text-xl border-2 border-[#00abe4]", btn.id === activePlan.id ? "bg-[#00abe4] text-white" : "text-[#00abe4] ") } >{ btn.title }</button>) }
        <button type="button"></button>
      </div>
      <section className="border rounded-2xl p-14 border-slate-200 flex lg:flex-row flex-col">
        <figure className="flex gap-10 justify-center flex-1 border-r-2 border-slate-100">
          { activePlan.images.map((img, i) => <img alt='img' src={ img } key={ i } />) }
        </figure>
        <div className="flex flex-col flex-1 gap-4 pt-16 lg:pl-16">
          <h3 className='font-medium text-left text-3xl'>{ activePlan.heading }</h3>

          <div className="flex items-center gap-1 mb-5"><MdOutlineHouse className='text-[#00abe4] text-2xl' /> <strong>Total:</strong>  { activePlan.area }</div>

          <div className="flex w-full flex-col gap-4">
            <button type="button" className={ cn("self-stretch  sm:px-16 py-3.5 rounded-xl transition-all font-medium text-xl border-2 border-[#00abe4]", true ? "bg-[#00abe4] text-white" : "text-[#00abe4] ") }>
              Open All Floor Plans
            </button>
            <button type="button" className={ cn("self-stretch sm:px-16 py-3.5 rounded-xl transition-all font-medium text-xl border-2 border-[#00abe4]", false ? "bg-[#00abe4] text-white" : "text-[#00abe4] ") }>
              Download Brochure →
            </button>
          </div>
        </div>
      </section>
    </ResponsiveWrapper>
  )
}

export default FloorPlan