import React from 'react'
import IntroImg from '../assets/Intro-img.svg'
import blob from '../assets/blob-haikei.svg'
import { Box, Flex, Text, Image } from '@chakra-ui/react'

function Intro() {
    return (
        <Box w='100%'
            h={['100%', '100%', '90vh', '90vh']}
            overflow='hidden'>
            <Flex px='100px' flexDirection={['column', 'column', 'row', 'row']} justifyContent='space-between' alignItems='center'>
                <Box mt={['50px', '130px', '130px', '130px']} zIndex='1'>
                    <Text w={['80%', '100%', '400px', '600px']} fontSize={['30px', '40px', '40px', '50px']}
                        fontWeight='600'
                        lineHeight='63px'
                        letterSpacing='0.05rem'
                        textAlign={['center', 'center', 'left', 'left']}
                        textTransform='capitalize'
                        mx={['auto']}>Take your study experience to the next level</Text>
                    <Text w={['80%', '100%', '400px', '600px']} mt='20px'
                        fontSize='20px'
                        lineHeight='30px'
                        textAlign={['center', 'center', 'left', 'left']}
                        mx={['auto']}> <span style={{ 'color': '#3071E7', 'fontWeight': '700' }} >Padhai</span> is an online learning platform that offers various courses for you. We provide you with the best courses.</Text>
                    <Flex
                        w={['80%', '100%', '100%', '100%']}
                        mt='20px'
                        justifyContent={['center', 'center', 'flex-start', 'flex-start']}
                        mx={['auto']}>

                        <Box as='button'
                            bgColor='#3071E7'
                            borderRadius='50px'
                            w='200px' py='3%' mr='20px'
                            fontSize='15px'
                            fontWeight='600'
                            color='white'
                            filter='drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25))'
                            cursor='pointer'
                            transition='all 0.3s linear'
                            _hover={{ 'box-shadow': '15px 10px 0px #1C438A' }}>Get Started</Box>

                        <Box as='button'
                            bgColor='#EAF0FC'
                            borderRadius='50px'
                            w='200px' py='3%' mr='20px'
                            fontSize='15px'
                            fontWeight='600'
                            filter='drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25))'
                            cursor='pointer'
                            transition='all 0.3s linear'
                            _hover={{ 'box-shadow': '15px 10px 0px #3071E7' }}>Learn More</Box>

                    </Flex>
                    <Flex mt='20px'
                        w={['80%', '100%', '300px', '420px']}
                        justifyContent='space-evenly'
                        mx={['auto', 0, 0, 0]}>
                        <Box>
                            <Text
                                fontWeight='600'
                                fontSize={['20px', '20px', '20px', '25px']}
                                textAlign='center'>10K+</Text>
                            <Text fontSize={['15px', '15px', '15px', '20px']}>Students</Text>
                        </Box>
                        <Box>
                            <Text
                                fontWeight='600'
                                fontSize={['20px', '20px', '20px', '25px']}
                                textAlign='center'>100</Text>
                            <Text fontSize={['15px', '15px', '15px', '20px']}>Mentor</Text>
                        </Box>
                        <Box>
                            <Text
                                fontWeight='600'
                                fontSize={['20px', '20px', '20px', '25px']}
                                textAlign='center'>100+</Text>
                            <Text fontSize={['15px', '15px', '15px', '20px']}>Courses</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box boxSize={['300px', '400px', '600px', '600px']} zIndex='1'>
                    <Image boxSize='100%' src={IntroImg} fallbackSrc='https://via.placeholder.com/150' />
                </Box>
            </Flex>
            <Image src={blob} fallbackSrc='https://via.placeholder.com/150'
                position='absolute'
                h='105vh'
                right='0px'
                top='0'
                zIndex='0' />
        </Box>
    )
}

export default Intro