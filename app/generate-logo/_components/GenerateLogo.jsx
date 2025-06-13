"use client"

import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../../_context/UserDetailContext'
import Prompt from '../../_data/Prompt';
import axios from 'axios';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { Download, LayoutDashboard, Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function GenerateLogo() {

  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [ formData, setFormData ] = useState();
  const [ loading, setLoading ] = useState(false);
  const [ logoImage, setLogoImage ] = useState();

  const searchParams = useSearchParams();
  const modelType = searchParams.get('type');

  useEffect(()=>{
    if ( userDetail?.userEmail && typeof window !=='undefined' ) {
      const storage = localStorage.getItem('formData');
      if (storage) {
        setFormData(JSON.parse(storage));
        console.log("Form Data from Local Storage:", JSON.parse(storage));
      }
    }
  },[userDetail])

  useEffect(()=> {
    if ( formData?.title ) {
      GenerateAiLogo();
    }
  },[formData])

  const handleDownload = () => {
  if (!logoImage) return;
  
  toast.success("Downloading your logo...");

  const link = document.createElement('a');
  link.href = logoImage;
  link.download = `${formData?.title || 'logo'}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  const GenerateAiLogo = async () => {
    if(modelType !== 'Free' && userDetail?.credits <= 0) {
      toast('Not Enough Credits')
      return;
    }

    setLoading(true);

    const PROMPT = Prompt.LOGO_PROMPT
      .replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoColor}", formData?.color)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoIdea}", formData?.idea )
      .replace("{logoPrompt}", formData?.design?.prompt);

      const result = await axios.post('/api/ai-logo-model',{
        prompt: PROMPT,
        email: userDetail?.userEmail,
        title: formData?.title,
        desc: formData?.desc,
        type: modelType,
        userCredits: userDetail?.credits
      })

      setLogoImage(result.data?.image);
      setLoading(false);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      {loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center text-center space-y-6 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800">Generating Logo...</h2>
          <Loader2Icon className="animate-spin text-gray-600" size={64} strokeWidth={2.5} />
        </div>
      )}
    {!loading && logoImage && (
      <div className='flex flex-col gap-4 items-center' >
        <h1 className="text-3xl font-bold mt-10">Your Generated Logo</h1>
        
        {/* Display the generated logo */}
        <Image
          src={logoImage}
          alt="Logo"
          width={400}
          height={400}
          className="rounded-xl shadow-md"
        />

        <div className="flex gap-5 mt-6">
          {/* Dashboard Button */}
          <Link href="/dashboard">
            <Button className="text-lg p-6" variant="default"><LayoutDashboard />Go to Dashboard</Button>
          </Link>

          {/* Download Button */}
          <Button className="text-lg p-6" variant="secondary" onClick={handleDownload}>
            <Download />
            Download Logo
          </Button>
        </div>
      </div>
    )}
    </div>
  );
}

export default GenerateLogo