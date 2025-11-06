'use client'

import dynamic from 'next/dynamic';

const AIChat = dynamic(() => import('./AIChat'), {
  ssr: false,
  loading: () => null
});

export default function AIChatWrapper() {
  return <AIChat />;
}
