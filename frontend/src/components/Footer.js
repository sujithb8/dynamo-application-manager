import { Box, Button } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                height: '70px',
                bgcolor: palette.primary.main,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position:"static",
                flex:1,
                marginTop:'20px',
            }}>
                <Box component='div' sx={{ color: palette.secondary.main,margin:10 }}>All rights reserved! 2023.</Box>
            <Box component='div' sx={{ color: palette.secondary.main,margin:10 }}>
                <Button style={{color:'white',border:'1px #000000'}}>About</Button>
                <Button style={{color:'white'}}>Help?</Button>
            </Box>
            </Box>
        </>
    )
}

export default Footer