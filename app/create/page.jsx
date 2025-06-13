"use client"

import React, { useState, useEffect } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPalette from './_components/LogoColorPalette'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'
import PricingModel from './_components/PricingModel'

function CreateLogo() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState();
    useEffect(() => {
      console.log("Updated formData:", formData);
    }, [formData]);
    const onHandleInputChange = (field, value) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72 shadow-lg'>
        {
            step == 1?
        <LogoTitle onHandleInputChange={
            (v) => onHandleInputChange('title',v)
        }
        formData={formData}
        />:
        
            step == 2?
            <LogoDesc onHandleInputChange={
                (v) => onHandleInputChange('desc',v)
            }
            formData={formData}
            />:

            step == 3?
            <LogoColorPalette onHandleInputChange={
                (v) => onHandleInputChange('palette',v)
            } 
            formData={formData}
            />:

            step == 4?
            <LogoDesigns onHandleInputChange={
                (v) => onHandleInputChange('design',v)
            } 
            formData={formData}
            />:
            
            step == 5?
            <LogoIdea onHandleInputChange={
                (v) => onHandleInputChange('idea',v)
            } 
            formData={formData}
            />:

            step == 6?
            <PricingModel
            formData={formData}
            onHandleInputChange={
              (v) => onHandleInputChange('pricing',v)
            }
            />
            :
            null
        }

        <div className='flex items-center gap-2 justify-between mt-10'>
            {step != 1 && <Button onClick={()=>setStep(step-1)} variant="outline"><ArrowLeft />Previous</Button>}
            {step != 6 && <Button onClick={()=>setStep(step+1)} ><ArrowRight />Continue</Button>}
        </div>
    </div>
  )
}

export default CreateLogo