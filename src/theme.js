import { extendTheme } from '@chakra-ui/react'


const breakpoints = {
    sm: '40em',
    md: '60em',
    lg: '70em',
    xl: '1120px',
  }  

const theme = extendTheme({
  fonts: {
    heading: `'Hepta Slab', sans-serif`,
    body: `'Hepta Slab', sans-serif`,
  },
  breakpoints,
})

export default theme