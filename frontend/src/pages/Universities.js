import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UnivCard from '../components/univCard';

const Universities = () => {
    const [univs,setUnivs]= useState();
     const sendRequest = async ()=> {
      const res = await axios.get("http://localhost:9000/api/universities/")
      .catch(err=>console.log(err));
      const data = await res.data;
      return data;
      };
    useEffect(()=>{
   sendRequest().then((data)=>setUnivs(data.univs));
  },[]);
  // console.log(univs);

   // Function to capitalize the first letter of a string
  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };
  
  return (
    <div style={{ display:"flex", flexWrap:"wrap",width:"100%",backgroundColor:'#f0f0f0',paddingTop:'20px'}}>{univs && univs.map((univ,index)=>(
      <UnivCard 
    // univName={capitalizeFirstLetter(univ.univName)}
    univName={univ.univName}
    about={univ.about}
    location={univ.location}
    state={univ.state}
    country={univ.country}
    type={univ.type}
    rank={univ.rank}
    founded={univ.founded}
    gratio={univ.gratio}
    alumini={univ.alumini}
    strength= {univ.strength}
    gpa = {univ.gpa}
    acceptance = {univ.acceptance}
    approach = {univ.approach}
    ielts ={univ.ielts}
    gre_quant={univ.gre_quant}
    gre_verbal={univ.gre_verbal}
    gre_awa={univ.gre_awa}
    salary={univ.salary}
    majority={univ.majority}
    expenses={univ.expenses}
    tuition_expenses={univ.tuition_expenses}
    living_expenses ={univ.living_expenses}
    safety={univ.safety}
    weather={univ.weather}
    logo={univ.logo}
    image={univ.image} />
    )) }</div>
  )
};

export default Universities