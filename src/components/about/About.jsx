import { ABOUT_US } from "../../lib/constant"
import ResponsiveWrapper from "../ResponsiveWrapper/ResponsiveWrapper"


export const AboutUs = () => {
  return (<ResponsiveWrapper className={ "flex flex-col gap-8 py-20" }>
    <h2 className="text-4xl font-medium text-left">Riverside by DAMAC Properties</h2>

    <section className="flex flex-col gap-5">
      <p className="font-thin text-left text-lg">
        Situated in Dubai Investments Park, Riverside is a large-scale residential community by DAMAC Properties. As of May 2024, there are a total of 1,900 townhouses with 4-5 bedrooms available for purchase. The architectural design of the residences is inspired by the world’s top cities, and include Rome, Paris, London, New York and Amsterdam.</p>

      <p className="font-thin text-left text-lg">
        The area of the units ranges from 2,297 sq. ft to 3,407 sq. ft over two or three storeys. The layouts include a storage area, laundry room, garage and balconies. Additionally, 5-bedroom units feature a terrace and maid’s room.
      </p>

      <p className="font-thin text-left text-lg">
        Riverside boasts outstanding infrastructure, with a variety of recreational amenities spanning across two zones: Water Vein and Green Vein. The Water Vein is designed with leisure and water sport in mind. Here you will find aquatic fitness areas, splash climbing, essential oil lakes, a floating opera and cinema, along with two restaurants – Portofino Ristorante and Island Restaurant. You can even propose to your loved one on the beautiful floating proposal deck for a truly romantic experience.
      </p>

      <p className="font-thin text-left text-lg">
        At the same time, the Green Vein offers unique opportunities for sport and leisure along with functional spaces for work and personal development. Residents will enjoy such offerings as culinary classes, hydroponic farms, a zen spa, BBQ & live cooking stations, a callisthenics zone, peace and meditation rooms, an amphitheatre and a children’s adventure land. There are also many amenities available in the clubhouse with its gym, co-working space, bowling alley, arcade and outdoor cinema.
      </p>

    </section>

    <div className="flex gap-5 items-start mb-10 lg:flex-row flex-col">
      <img src="https://i.1.creatium.io/disk2/d5/a2/8f/f472b2e1c105ec7cc8c07bb7ba5e4fa41c/725x479q8/sdfef_1.jpg" alt="" className="flex-1 h-auto rounded-2xl object-cover aspect-video" />
      <img src="https://i.1.creatium.io/disk2/d5/a2/8f/f472b2e1c105ec7cc8c07bb7ba5e4fa41c/725x479q8/sdfef_1.jpg" alt="" className="w-full lg:w-1/3 h-auto rounded-2xl object-cover aspect-video" />
    </div>


    <div className="flex lg:flex-row gap-5 flex-col lg:h-max relative">
      <h2 className="flex flex-col text-4xl font-medium text-left mr-4 gap-2">
        <span className="text-[48px]">About Location</span>
        <span className="text-[#00abe4]">Dubai Investments Park
          in Dubai</span>

        {/* <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /> */ }
      </h2>

      <figure className="w-full lg:w-[11%] bg-red-100 h-[175px] self-stretch rounded-lg overflow-hidden">
        <img src="https://i.1.creatium.io/disk2/4a/8b/f0/9a997c1b4797178a0ebd547fc6ce5016d2/407x271q8/dip5.jpg" alt="" className="  object-cover size-full object-center" />
      </figure>

      <figure className="w-full lg:relative lg:top-0 lg:left-0 lg:w-[20%] bg-red-100 h-[175px] self-stretch rounded-lg overflow-hidden">
        <img src="https://i.1.creatium.io/disk2/e8/b1/12/549aaac2715ec493db18cca7e191ebd60d/541x200q8/comm.jpg" alt="" className="  object-cover size-full object-center" />
      </figure>

      <figure className="w-full lg:relative lg:top-0 lg:left-0 lg:w-[11%] bg-red-100 h-[175px] self-stretch rounded-lg overflow-hidden">
        <img src="https://i.1.creatium.io/disk2/71/3c/1b/5ae4f37796f440d79a9cbaaeeed79f1e07/356x237q8/ritaj.jpg" alt="" className="  object-cover size-full object-center" />
      </figure>

      <figure className="w-full lg:w-[20%] bg-red-100 h-[175px] self-stretch rounded-lg overflow-hidden">
        <img src="https://i.1.creatium.io/disk2/4b/0d/77/f0850abeeccea8f9a403a200a72787fe97/407x234q8/jwbyqqjcvm_1.jpg" alt="" className="  object-cover size-full object-center" />
      </figure>
    </div>
    <section className="flex flex-col gap-5">
      { ABOUT_US.map((about, i) => <p key={ i } className="font-thin text-left text-lg">{ about }</p>) }
    </section>
  </ResponsiveWrapper>)
}