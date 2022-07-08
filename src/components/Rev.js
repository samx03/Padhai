import React from 'react'
import { Box,Text,Image } from '@chakra-ui/react'

function Rev(props) {
  return (
    <div>
    <Box
            w='300px'
            h= {['400px','400px','370px','370px']}
            textAlign='center'
            borderRadius='15px'
            px='2%'>
                <Image boxSize='200px' mx='auto' src={props.image} fallbackSrc='https://via.placeholder.com/150'
                borderRadius='50%'/>
                <Text w='100%' mt='30px'
                        fontSize='25px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}> <span style={{ 'color': '#3071E7', 'fontWeight': '700' }} >{props.name}</span></Text>
                <Text w='100%' mt='10px'
                        fontSize='20px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}>{props.country}</Text>
                <Text w='100%' mt='10px'
                        fontSize='15px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}><span style={{'fontWeight': '900' }}>"</span>{props.info}<span style={{'fontWeight': '900' }}>"</span></Text>
            </Box>
        </div>
  )
}

export default Rev