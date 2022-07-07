import React from 'react'
import { Box, Heading, Grid} from '@chakra-ui/react'
import CourseCard from './CourseCard'

function Courses(props) {
  return (
    <>
      <Box w='100%' h='auto' pb='20px'>
        <Heading mt='50px' textAlign='center'> <span style={{ 'color': '#3071E7', 'fontWeight': '700' }} >Our</span>  Courses</Heading>
        <Grid templateColumns= {['auto','auto auto','auto auto','auto auto auto']} gap={10} mt='50px' placeItems='center'>
          <CourseCard category='Programming' courseName='Python' desc='Learn Python programming language, used in competetive programming.' duration='23h' price='999' teacher='Sameer Bakshi' />
          <CourseCard category='Language' courseName='English' desc='English is spoken in major parts of the world.' duration='23h' price='699' teacher='Sanket Pal' />
          <CourseCard category='Web Dev' courseName='Javascript' desc='JS is one of the core technologies of the World Wide Web.' duration='23h' price='899' teacher='Ebrahim MG' />
          <CourseCard category='Language' courseName='Japanese' desc='Spoken in Japan and quite difficult to learn because of its literals.' duration='23h' price='799' teacher='Naruto Uzumaki' />
          <CourseCard category='Web Dev' courseName='React JS' desc='React is a free and open-source front-end JavaScript library for building UI.' duration='23h' price='599' teacher='Sanket Pal' />
          <CourseCard category='Programming' courseName='C++' desc='Learn C++ is a general purpose programming language' duration='23h' price='799' teacher='Ebrahim MG' />
        </Grid>
      </Box>
    </>
  )
}

export default Courses