'use client'

import { MoonWithStarIcon, SunFillIcon } from "@/app/icons/GlobalIcons"
import { Box, IconButton, useColorMode } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"


export const CustomColorModeSwitch = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    const MotionIconButton = motion(IconButton)
    const MotionBox = motion(Box)

    const ButtonVariants = {
        initial: () => {
            if (colorMode === 'light') {
                return {
                    x: 23,
                    opacity: 1
                }
            } else {
                return {
                    x: 0,
                    opacity: 1
                }
            }
        },
        animate: () => {
            if (colorMode === 'light') {
                return {
                    x: 0,
                    opacity: 1
                }
            } else {
                return {
                    x: 23,
                    opacity: 1
                }
            }
        },
        exit: () => {
            if (colorMode === 'light') {
                return {
                    x: 0,
                    opacity: 0.5
                }
            } else {
                return {
                    x: 23,
                    opacity: 0.5
                }
            }
        }
    }

    const IconVariants = {
        initial: () => {
            if (colorMode === 'light') {
                return {
                    rotate: 360,
                }
            } else {
                return {
                    rotate: 0
                }
            }
        },
        animate: () => {
            if (colorMode === 'light') {
                return {
                    rotate: 0
                }
            } else {
                return {
                    rotate: 360
                }
            }
        },
        exit: () => {
            if (colorMode === 'light') {
                return {
                    rotate: 0
                }
            } else {
                return {
                    rotate: 360
                }
            }
        }
    }

    return (
        <AnimatePresence
            initial={false}
            mode='wait'
            onExitComplete={toggleColorMode}
        >
            <Box
                position='relative'
                display='flex'
                alignItems='center'
                justifyContent='start'
                p='0'
                w='48px'
                h='24px'
                borderRadius='16px'
                bg='exBlue'
                onClick={toggleColorMode}
                _hover={{
                    bg: 'exBlue'
                }}
                _active={{
                    bg: 'exBlue'
                }}
            >
                <MotionIconButton 
                    aria-label='colorMode'
                    icon={
                        colorMode === 'light' ? 
                            <MotionBox
                                p='0'
                                m='0'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                variants={IconVariants}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'exit'}
                                transition={{
                                    rotate: {
                                        duration: 0.5
                                    }
                                }}
                            >
                                <SunFillIcon h='16px' w='16px' p='0' m='0' color='yellow.300' /> 
                            </MotionBox>
                            : 
                            <MotionBox
                                p='0'
                                m='0'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                variants={IconVariants}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'exit'}
                                transition={{
                                    rotate: {
                                        duration: 0.5
                                    }
                                }}
                            >
                                <MoonWithStarIcon h='14px' w='14px' p='0' m='0' color='rgba(11, 52, 93, 1)' />
                            </MotionBox>
                    }
                    bg='white'
                    p='0'
                    m='0'
                    ml='3px'
                    maxW='20px'
                    minW='20px'
                    w='20px'
                    h='20px'
                    variant='ghost'
                    layout
                    variants={ButtonVariants}
                    initial={'initial'}
                    animate={'animate'}
                    exit={'exit'}
                    transition={{
                        x: {
                            type: "spring",
                            stiffness: 700,
                            damping: 30,
                            duration: 0.2
                        }
                    }}
                    borderRadius='full'
                    _hover={{
                        bg: 'white'
                    }}
                    _active={{
                        bg: 'white'
                    }}
                />
            </Box>
        </AnimatePresence>
    )
}