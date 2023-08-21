import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/Store";
// import toast from "react-hot-toast";
const Auth = () => {
  //hook
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  });
 const [isSignup,setIsSignup] = useState(false)
  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //singin 
  const sendRequest = async (type="signin") =>{
   const res = await axios.post(`http://localhost:9000/api/${type}`,{
        firstName:inputs.firstName,
        lastName:inputs.lastName,
        email:inputs.email,
        password:inputs.password
    }).catch(err=>console.log(err));
    const data = await res.data;
    return data;
  }
  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup){
      sendRequest("signup").then(()=>dispatch(authActions.login())).then(()=>navigate("/")).then(data=>console.log(data))
    } else{
      sendRequest().then(()=>dispatch(authActions.login())).then(()=>navigate("/")).then(data=>console.log(data));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={3}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
            color="primary"
          >
            {isSignup ? "Signup" : "Login"}
          </Typography>


        {isSignup && <>  <TextField
                             fullWidth
                             id="firstName"
                            name="firstName"
                            label="firstName"
                            type="firstName"
                            InputLabelProps={{
                                shrink: true,
                            }}
                             placeholder="firstName"
            value={inputs.firstName}
            margin="normal"
            required
            onChange={handleChange}
          />
           <TextField
                             fullWidth
                             id="lastName"
                            name="lastName"
                            label="lastName"
                            type="lastName"
                            InputLabelProps={{
                                shrink: true,
                            }}
                             placeholder="lastName"
            value={inputs.lastName}
            margin="normal"
            required
            onChange={handleChange}/>
          </>}

         <TextField
                             fullWidth
                             id="email"
                            name="email"
                            label="email"
                            type="email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                             placeholder="email"
            value={inputs.email}
            margin="normal"
            required
            onChange={handleChange}
          />

           <TextField
                             fullWidth
                             id="password"
                            name="password"
                            label="Password"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                             placeholder="password"
            value={inputs.password}
            margin="normal"
            required
            onChange={handleChange}
          />

          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="secondary"
            
          >
           {isSignup ? "Signup" : "login"}
          </Button>
          <Button  onClick={() => setIsSignup(!isSignup)} color="primary"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
           {isSignup ? "Already registered? Login here" : "New user ? Please Register"}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Auth;