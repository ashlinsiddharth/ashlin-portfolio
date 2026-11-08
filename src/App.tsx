import React from 'react';
import { Terminal } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-dark p-6">
      <div className="flex items-center gap-3 rounded-lg border border-brand-border bg-brand-card/50 p-6 backdrop-blur">
        <Terminal className="h-6 w-6 text-brand-cyan" />
        <h1 className="font-heading text-xl font-bold tracking-tight text-text-primary">
          Ashlin Siddharth — Foundation Ready
        </h1>
      </div>
    </main>
  );
};

export default App;

