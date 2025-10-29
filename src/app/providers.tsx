'use client';

import { ScenarioProvider } from '@/contexts/ScenarioContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ScenarioProvider>{children}</ScenarioProvider>;
}
