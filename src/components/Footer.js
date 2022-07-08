import React from 'react'
import facebook from '../assets/facebook.svg'
import logo from '../assets/logo.svg'
// import blb from '../assets/blb.svg'
import linkedIn from '../assets/linkedIn.svg'
import twitter from '../assets/twitter.svg'
import { Box, Flex, Text, Image, Grid } from '@chakra-ui/react'

function Footer() {
    return (
        <>
            <Flex w='100%'
                h= {['auto','30vh','30vh','30vh']} 
                mt='5%'
                pos='relative'
                bgColor='#EAF0FC'
                overflow='hidden'>
                <Flex w='70%' mx='auto' alignItems='center' flexDirection={['column','row','row','row']}>
                    <Box
                        w='400px'
                        h='100px'
                        float='left'
                        ml='3%'>
                        <Image boxSize='100%' zIndex='1' src={logo} display={['none', 'block', 'block', 'block']} fallbackSrc='https://via.placeholder.com/150' />
                    </Box>
                    <Grid templateColumns={['auto', 'auto', 'auto', 'auto auto ']} placeItems='center' gap={3}>
                        <Box>
                            <Text w='100%' mt='20px'
                                fontSize='30px'
                                fontWeight='600'
                                lineHeight='30px'
                                textAlign='center'
                            >Contact Us</Text>
                            <Text w='100%' mt='20px'
                                fontSize='20px'
                                lineHeight='30px'
                                textAlign='center'
                                mx={['auto']}
                                mb='1%'>padhai.org@email.com</Text>
                            <Flex justifyContent='space-around'>
                                <Image boxSize='40px' src={facebook} fallbackSrc='https://via.placeholder.com/150'/>
                                <Image boxSize='40px' src={twitter} fallbackSrc='https://via.placeholder.com/150'/>
                                <Image boxSize='40px' src={linkedIn} fallbackSrc='https://via.placeholder.com/150'/>
                            </Flex>
                        </Box>
                        <Text w='100%' mt='20px'
                            fontSize='20px'
                            lineHeight='30px'
                            textAlign='center'
                            mx={['auto']}><span style={{ 'fontWeight': '600' }} >+91 94342 45XXX<br />+91 96896 04XXX</span></Text>
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}

export default Footer