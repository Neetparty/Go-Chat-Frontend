import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { CustomProvider } from './components/CustomProvider'
// import { ColorModeScript } from '@chakra-ui/react'
// import { theme } from '@/config/theme'


export const metadata: Metadata = {
    title: 'DKtoday',
    description: '',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" >
            <body>
                <CustomProvider>
                    {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
                    {children}
                </CustomProvider>
            </body>
        </html>
    )
}
