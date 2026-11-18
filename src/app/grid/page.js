'use client';
import { Suspense } from 'react';
import VoltageParam from './VoltageParam/VoltageParam';

export default function GridPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VoltageParam />
    </Suspense>
  );
}