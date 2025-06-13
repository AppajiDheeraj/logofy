import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import LogoDesig from '@/app/_data/LogoDesig'

function LogoDesigns({onHandleInputChange, formData}) {
  const [ selectedOption, setSelectedOption ] = useState(formData?.design);
  return (
    <div>
      <HeadingDescription
      title={Lookup.LogoDesignTitle}
      description={Lookup.LogoDesignDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
        {LogoDesig.map((design,index)=>(
          <div key={index} onClick={
              () => {
                setSelectedOption(design.title);
                onHandleInputChange(design);
              }
            }
            className={`p-1 cursor-pointer hover:border-2 border-primary rounded-xl ${selectedOption==design.title && 'border-2 border-primary p-1 rounded-lg'}`}            >
            <Image src={design.image} alt={design.title} height={200} width={300} className='w-full rounded-xl h-[150px] object-cover'/>
            <h1 className='text-center text-lg font-semibold mt-2'>{design.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesigns