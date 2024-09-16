// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        // defaultTheme={
        //   window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        //   ? 'dark'
        //   : 'light'
        // }
        defaultTheme="light"
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
