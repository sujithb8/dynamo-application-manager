
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box,Button} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ReportIcon from '@mui/icons-material/Report';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DangerousIcon from '@mui/icons-material/Dangerous';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function UnivCard({univName,about,location,state,country,type,rank,founded,gratio,alumini,strength,gpa,acceptance,approach,ielts,gre_quant,gre_verbal,gre_awa,salary,majority,expenses,tuition_expenses,living_expenses,safety,weather,logo,image}) {
//Sum of the living and tuition expenses
// const getSum = (a, b) => {
//       const sumValue = a + b;
//       return sumValue
// };

//To get thefirst letter of the univesity name
const firstLetter = univName.split(' ').map(word => word.charAt(0)).join('');

//style for Cardimage

  return (
    <Card sx={{ minWidth:280,maxWidth: 280,minHeight:'auto',maxHeight:'auto',margin:2,borderRadius:3,boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.1)",zIndex:1,transform: 'scale(1)',
    transition: 'transform 0.2s ease-out','&:hover':{transform: 'scale(1.05)'}}}>
    <Box >
      <Box display="flex" flexDirection='row' margin="10px" alignItems='center'justifyContent='space-between'width='100%' >
      <div style={{display:"flex", flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginLeft:3}}>
        <Avatar src={logo} alt="Univ Logo" style={{height:35,width:35}}>
         <p style={{fontFamily:'Inter',fontSize:10}}> {logo="" ? null : firstLetter}</p>
          </Avatar> 
          <Typography style={{ fontWeight:1000,marginLeft:10,marginTop:5,fontSize:'auto',color:'#1a2736'}} component="div"
         sx={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: "150px", // or any desired width
      }}>
             {univName}
        </Typography></div>
        <div style={{display:"flex", flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginRight:8 }}>
          <Button sx={{'&:hover':{color:'#ff006c'}}}><FavoriteBorderIcon sx={{marginRight:'5px','&:hover':{color:'#ff006c'}}}/></Button>
          
          </div>
        </Box>
         <Box display="flex" flexDirection='row' margin='10px' maxWidth='90%' justifyContent='space-between'>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <LocationOnIcon sx={{ color: 'red',fontSize:'auto' }}/>
          <Typography  style={{ style: { color: 'black',fontSize:'auto' } }}> 
         <div style={{display:'flex',flexDirection:'row',color:'#000000',fontSize:15}}><div>{location}</div> , <div> {country}</div></div> 
        </Typography></div>
        <Typography style={{fontFamily:'Inter',fontSize:'auto',color:'#1a2736'}}>{type===false ? "Public":"Private"}</Typography>
        </Box>
      </Box>       
     
      <Box position="relative">
                <CardMedia
                    component="img"
                    alt="Sample Image"
                      style={{ width: "100%",height: "150px"} }
                      
                    image={image}
                />
                {/* Absolutely positioned text */}
               {rank>=1 && rank<= 10
      ?  <Typography 
                    variant="h6" 
                    style={{ 
                      borderRadius: 3,
                        position: 'absolute', 
                        top: 5, 
                        left: 5,
                        color: 'white',
                        backgroundColor: '#348540', 
                        backdropFilter:'blur(15px)',
                        padding: '3px',
                        fontSize: 10,
                        fontFamily: 'Inter',
                    }}
                >Top 10 </Typography>
                    
      : null}
      {rank>10 && rank<= 100
      ?  <Typography 
                    variant="h6" 
                    style={{ 
                      borderRadius: 3,
                        position: 'absolute', 
                        top: 5, 
                        left: 5,
                        color: 'white',
                        backgroundColor: '#e75600', 
                        backdropFilter:'blur(15px)',
                        padding: '3px',
                        fontSize: 10,
                        fontFamily: 'Inter',
                    }}
                >Top 100 </Typography>
                    
      : null}

     
        <Typography 
                    style={{ 
                      borderRadius:1,
                        position: 'absolute',  
                        bottom:"-10px",
                        left:"10px" ,
                        color: 'white',
                        backgroundColor: '#ff0000',
                        padding: '7px',
                        fontWeight:800,
                        backdropFilter:'blur(5px)',
                    }}
                ><p style={{margin:0}}>{rank}</p> </Typography>
                <Typography 
                    sx={{ 
                        position: 'absolute',  
                        bottom:"-5px",
                        right:"20px" ,
                        borderStartEndRadius:5,
                        borderStartStartRadius:5,
                        backgroundColor: 'white',
                        color: '#2e3843',
                        fontSize:12,
                        fontFamily: 'Inter',
                        padding: '5px',
                        '&:hover':{
                          color: '#1a2736',
                           cursor: 'pointer',
                        }
                    }}
                ><p style={{margin:0}}>Est {founded}</p> </Typography>
              
         {safety==="low" &&
      <DangerousIcon style={{borderRadius: 2,
                        position: 'absolute',  
                        top:"5px",
                        right:"35px" ,
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize: 'auto',
                        padding: '5px',}}/>}
        {safety==="moderate" &&
      <ReportIcon style={{borderRadius: 2,
                        position: 'absolute',  
                        top:"5px",
                        right:"35px" ,
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize: 'auto',
                        padding: '5px',}}/>}
        {safety==="high" &&
      <SecurityIcon style={{borderRadius: 2,
                        position: 'absolute',  
                        top:"5px",
                        right:"35px" ,
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize: 'auto',
                        padding: '5px'}}/>}

      <div style={{ position: 'absolute',top:'5px',right:'33px',backgroundColor: 'white', color: 'black'}}>|</div>
    
      {weather==="moderate" &&
      <CloudIcon style={{borderRadius: 2,
                        position: 'absolute',  
                        top:"5px",
                        right:"10px" ,
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize:'auto',
                        padding: '5px'}}/>}
      {weather==="cold" &&
      <AcUnitIcon style={{borderRadius: 2,
                        position: 'absolute',  
                        top:"5px",
                        right:"10px" ,
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize:'auto',
                        padding: '5px'}}/>}
      {weather==="hot" &&
      <WbSunnyIcon style={{borderRadius: 2,
                        position: 'absolute',  
                        top:"5px",
                        right:"10px" ,
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize:'auto',
                        padding: '5px'}}/>}
                  
                </Box>
      <CardContent >
        <Box style={{display:"flex",alignItems:'center',justifyContent:'space-between',maxHeight:'30px',marginTop:'15px'}}>
          <Typography 
            component="div"  // Ensuring it renders as a div which is more suitable for flex container
            sx={{ display: 'flex', flexDirection:"column" ,alignItems: 'center',fontWeight:400,fontSize:'small',fontFamily:'arial,sans-serif',color:'#626a72',letterSpacing:0.5}}>
            Acceptance
            <div style={{fontFamily:'Roboto',fontSize:'medium',fontWeight:600,color:'black',marginTop:5}}>{acceptance}%</div>
        </Typography><div>|</div>
         <Typography 
            component="div"  // Ensuring it renders as a div which is more suitable for flex container
            style={{ display: 'flex', flexDirection:"column" ,alignItems: 'center',fontWeight:400,fontSize:'small', fontFamily:'arial,sans-serif',color:'#626a72',letterSpacing:0.5}}>
              Expenses
              <div style={{fontFamily:'Roboto',fontSize:'medium',fontWeight:600,color:'black',marginTop:3}}>${expenses}</div>
        </Typography><div>|</div>
        <Typography 
            component="div"  // Ensuring it renders as a div which is more suitable for flex container
            style={{ display: 'flex', flexDirection:"column" ,alignItems: 'center',fontWeight:400,fontSize:'small', fontFamily:'arial,sans-serif',color:'#626a72',letterSpacing:0.5}}>
              Approach
              <div style={{fontFamily:'Roboto',fontSize:'medium',fontWeight:600,color:'black',marginTop:3}}>{approach===false ? "GPA":"Holistic" }</div>
        </Typography>
        </Box>

      </CardContent>
        
    </Card>
  );
}