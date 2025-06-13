// app/generate-logo/page.jsx
import React, { Suspense } from 'react';
import GenerateLogo from './_components/GenerateLogo';

export default function GenerateLogoPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center text-lg">Loading...</div>}>
      <GenerateLogo />
    </Suspense>
  );
}
