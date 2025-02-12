// components/ErrorBoundary.tsx
'use client';

import {useEffect} from 'react';

export default function ErrorBoundary({
                                        error,
                                        reset,
                                      }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log any errors to console
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="p-4 border border-red-200 rounded-md bg-red-50">
      <h2 className="text-red-800 font-semibold">Something went wrong!</h2>
      <p className="text-red-600 text-sm mt-1">{error.message}</p>
      <button
        onClick={reset}
        className="mt-2 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
      >
        Try again
      </button>
    </div>
  );
}
