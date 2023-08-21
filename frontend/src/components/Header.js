import { Box ,styled} from '@mui/material'
import React from 'react'
import Banner from '../images/banner.png'

const Header = () => {

    const StyleHeader = styled(Box)(({theme})=>(
        {
            display:'flex',
            minHeight:"500px",
            justifyContent:"center",
            backgroundImage:`url(${Banner})`,
            backgroundColor:theme.palette.secondary.main,
            backgroundPosition:"center",
            backgroundRepeat:true,
        }
    ))
  return (
    <>
    <StyleHeader/>
    </>
  )
}

export default Header