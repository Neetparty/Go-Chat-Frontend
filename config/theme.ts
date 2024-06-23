import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import '@fontsource/kanit/200.css'
import '@fontsource/inter'

const styles = {
    global: (props: object) => ({
        body: {
            bg: mode('#FFFFFF', '#23262A')(props)
        }
    })
}

const components = {
    Progress: {
        baseStyle: {
            filledTrack: {
                bg: '#FEC84B'
            }
        }
    }
}

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const AdminColor = {}

const GraphColor = {}

const MainColor = {
    dkBlue: {
        900: 'rgba(22, 35, 99, 1)',
        850: 'rgba(34, 50, 134, 1)',
        800: 'rgba(35, 51, 138, 1)',
        500: '#437EF7',
    }
}

const statusColor = {}

const textColor = {}

const tagColor = {}

const colors = {
    ...AdminColor,
    ...MainColor,
    ...statusColor,
    ...textColor,
    ...tagColor,
    ...GraphColor
}

const fonts = {
    body: "Kanit, sans-serif",
    heading: "Kanit, sans-serif",
    mono: "Kanit, sans-serif",
}

const textStyles = {
    english: {
        fontFamily: 'inter, sans-serif',
        fontWeight: '400',
    }
}

const breakpoints = {
    sm: '375px',
    'sm-1': '425px',
    md: '768px',
    lg: '960px',
    xl: '1024px',
    '2xl': '1360px',
}

const shadows = {
    'exBlue': '0px 0px 18px -10px #19B5FE',
}


export const theme = extendTheme({ 
    breakpoints, 
    colors, 
    config, 
    fonts, 
    styles, 
    components, 
    shadows,
    textStyles
})