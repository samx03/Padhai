import React from 'react'
import Rev from './Rev'
import { Box, Heading, Text, Grid } from '@chakra-ui/react'

function Reviews() {
    return (
        <>
            <Box w='100%'
                h='auto' pb={['50px','50px','70px','70px']}
                overflow='hidden'>

                <Heading fontSize={['40px','50px','50px','50px']} textAlign={['center', 'center', 'center', 'center']} mt='50px' lineHeight='63px'><span style={{ 'fontWeight': '500' }} >From our</span>  <span style={{ 'color': '#3071E7', 'fontWeight': '700' }} >Padhai</span> <span style={{ 'fontWeight': '500' }} >community</span></Heading>
                <Text w='100%' mt='20px'
                    fontSize={['15px','20px','20px','20px']}
                    lineHeight='30px'
                    textAlign='center'
                    mx={['auto']}> <span style={{ 'color': '#3071E7', 'fontWeight': '700' }} >Padhai</span> has been a platform for 10+ thousand students.</Text>
                <Box w={['300px','300px','900px','900px']} h='auto' mx='auto' mt='2%'>
                    <Grid templateColumns={['auto', 'auto', 'auto auto', 'auto auto auto']} placeItems='center' gap={3}>
                        <Rev name='Sameer Bakshi' country='India' info='Padhai has helped me expand my knowledge.' image='https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                        <Rev name='Dan Brown' country='Uganda' info='Padhai helped me to prove potential employers my understanding in programming.' image='https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                        <Rev name='Melissa Kuznetsov' country='Russia' info='It has been an amazing experience learning through this platform , very flexible deadlines as well.' image='https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Reviews