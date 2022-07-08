import React from 'react'
import logo from '../assets/logo.svg'
import { Box, Image, Text, Flex } from '@chakra-ui/react'
import Zoom from 'react-reveal/Zoom';

function CourseCard(props) {
    return (
        <Zoom left delay={500}>
            <Box
                w='300px'
                h='370px'
                borderRadius='15px'
                bgColor='#EAF0FC'
                px='2%'>

                <Box w='100%' h='90px'>
                    <Box
                        w='100px'
                        h='70px'
                        float='right'
                        mr='10px' mt='10px'>
                        <Image boxSize='100%' src={logo} fallbackSrc='https://via.placeholder.com/150' />
                    </Box>
                </Box>

                <Box
                    bgColor='#3071E7'
                    borderRadius='25px'
                    w='150px' py='3%' ml='2%'
                    textAlign='center'
                    fontSize='15px'
                    fontWeight='600'
                    color='white'>{props.category}</Box>

                <Text fontSize='20px'
                    fontWeight='600'
                    mt='20px'
                    ml='2%'
                    letterSpacing='0.1em'>{props.courseName}</Text>

                <Text fontSize='15px'
                    mt='10px'
                    ml='2%'
                    h='75px'>{props.desc}</Text>

                <Flex mt='10px'>
                    <Flex w='70px' h='25px' justifyContent='space-evenly' alignItems='center'>
                        <i style={{ 'color': "#3071E7", 'font-size': '20px' }} class="fa-solid fa-clock"></i>
                        <Text fontSize='15px' fontWeight='600'>{props.duration}</Text>
                    </Flex>
                    <Flex w='70px' h='25px' justifyContent='space-evenly' alignItems='center'>
                        <i style={{ 'color': "#3071E7", 'font-size': '20px' }} class="fa-solid fa-tag"></i>
                        <Text fontSize='15px' fontWeight='600'>&#8377;{props.price}</Text>
                    </Flex>
                </Flex>

                <Flex mt='40px' ml='2%' alignItems='center'>
                    <i class="fa-solid fa-user" style={{ 'marginRight': '2%', 'color': '#161E35' }}></i>
                    <Text fontSize='15px' fontWeight='600'>{props.teacher}</Text>
                </Flex>
            </Box>
        </Zoom>
    )
}

export default CourseCard