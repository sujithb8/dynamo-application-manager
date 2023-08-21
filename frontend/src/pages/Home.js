
import { Box, Container, Grid } from '@mui/material'
import Header from '../components/Header'


const Home = () => {

    return (
        <>
        <Header/>
            <Box sx={{bgcolor:"#fafafa",minHeight:"100vh"}}>
            <Container sx={{pt:5,pb:5,minHeight:"83vh"}}>
                <Box sx={{flexGrow:1}}>
                    <Grid container spacing={{xs:2,md:3}} columns={{xs:4,sm:8,md:12}}>
                        <Grid item xs={2} sm={4} md={4}>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
            </Box>

        </>
    )
}

export default Home