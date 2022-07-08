import React, { useState } from 'react'
import { Flex, Image, Box, Center, Link } from "@chakra-ui/react";
import Logo from '../assets/logo.svg'

function Navbar() {

    const [display, setDisplay] = useState('none');

    return (
        <>
            <Flex
                boxSize="100%"
                justifyContent='space-between'
                alignItems='center' p='0 5%'>

                <Center boxSize='6rem' centerContent>
                    <Image src={Logo} fallbackSrc='https://via.placeholder.com/150' />
                </Center>

                <Flex
                    fontWeight='600'
                    w='50%'
                    zIndex='3'
                    display={['none', 'none', 'none', 'flex']}>

                    <Box pl='15%'>
                        <Link style={{ textDecoration: "none" }} href='#'>Home

                            <Box
                                w='30%'
                                h='10px'
                                bgColor='#3071E7'
                                ml='2%'
                                borderRightRadius='20px'
                                transition='all 0.5s ease-in-out'
                                _hover={{ w: '100%' }}></Box></Link>
                    </Box>

                    <Box pl='15%'>
                        <Link style={{ textDecoration: "none" }} href='#courses'>Courses

                            <Box
                                w='30%'
                                h='10px'
                                bgColor='#3071E7'
                                ml='2%'
                                borderRightRadius='20px'
                                transition='all 0.5s ease-in-out'
                                _hover={{ w: '100%' }}></Box></Link>
                    </Box>

                    <Box pl='15%'>
                        <Link style={{ textDecoration: "none" }} href='#reviews'>Review

                            <Box
                                w='30%'
                                h='10px'
                                bgColor='#3071E7'
                                ml='2%'
                                borderRightRadius='20px'
                                transition='all 0.5s ease-in-out'
                                _hover={{ w: '100%' }}></Box></Link>
                    </Box>

                    <Box pl='15%'>
                        <Link style={{ textDecoration: "none" }} href='#contact'>Contact

                            <Box
                                w='30%'
                                h='10px'
                                bgColor='#3071E7'
                                ml='2%'
                                borderRightRadius='20px'
                                transition='all 0.5s ease-in-out'
                                _hover={{ w: '100%' }}></Box></Link>
                    </Box>

                </Flex>
                <Box
                    p='5%'
                    display={['flex', 'flex', 'flex', 'none']}
                    zIndex='3'>
                    <i className="fa-solid fa-bars" style={{ transform: "scale(1.75)" }} onClick={() => setDisplay('flex')}></i>
                </Box>
            </Flex>


            <Flex bgColor='#EAF0FC'
                flexDirection='column'
                z-index='20'
                w='100%'
                h='100vh'
                color='#3071E7'
                overflow='hidden'
                pos='fixed' top='0'
                left='0'
                display={display}
                zIndex='3'>
                <Flex justifyContent='end'>
                    <Box
                        p='5%'
                        display={['flex', 'flex', 'flex', 'none']} >
                        <i className="fa-solid fa-xmark" style={{ transform: "scale(1.75)" }} onClick={() => setDisplay('none')}></i>
                    </Box>
                </Flex>


                <Flex
                    w='100%'
                    flexDirection='column'
                    h='100%'
                    justifyContent='center'
                    alignItems='center'
                    fontWeight='600'>
                    <Box
                        mb='5%'
                        fontSize='25px'>
                        <Link style={{ textDecoration: "none" }} href='#'>Home</Link>
                    </Box>
                    <Box
                        mb='5%'
                        fontSize='25px'>
                        <Link style={{ textDecoration: "none" }} href='#'>Courses</Link>
                    </Box>
                    <Box
                        mb='5%'
                        fontSize='25px'>
                        <Link style={{ textDecoration: "none" }} href='#'>Review</Link>
                    </Box>
                    <Box
                        mb='5%'
                        fontSize='25px'>
                        <Link style={{ textDecoration: "none" }} href='#'>Contact</Link>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Navbar