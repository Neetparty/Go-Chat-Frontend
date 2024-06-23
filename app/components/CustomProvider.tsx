'use client'

import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { I18nextProvider } from 'react-i18next'
import { theme } from '@/config/theme'
import i18n from '@/config/i18n'
import { store } from '@/store'
import { AuthProvider } from './AuthProvider'

export const CustomProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store} >
            <ChakraProvider theme={theme} >
                <AuthProvider>
                    <I18nextProvider i18n={i18n} >
                        {children}
                    </I18nextProvider>
                </AuthProvider>
            </ChakraProvider>
        </Provider>
    )
}