import React, { useState } from 'react'
import { Avatar, Container, Typography, Box, Grid, TextField, CssBaseline, Button } from '@mui/material';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddMovie = () => {
  const [movieInfo, setmovie] = useState({"mName":"","director":"","language":"","actor":"","actress":"","mCamera":"","mYear":"","producer":""});
  var [formErrors, setformErrors] = useState({"mName":"","director":"","language":"","mCamera":"","mYear":"","producer":""});
  const yearRegex = /^\d{4}$/;
  const navigate = useNavigate();

  const validateForm = (e) =>{
    e.preventDefault();
    var isFormValid = true;
    var errors ={};
  
    if (!movieInfo.mName) {
      errors.mName ='Movie Name Required!';
      isFormValid = false;
    } 
    if (!movieInfo.director) {
      errors.director ='Director Name Required!';
      isFormValid = false;
    }
    if (!movieInfo.producer) {
      errors.producer ='Producer Name Required!';
      isFormValid = false;
    }
    if (!movieInfo.language) {
      errors.language ='Language Required!';
      isFormValid = false;
    }
    
    if (!movieInfo.mCamera) {
      errors.mCamera ='Camera is Required!';
      isFormValid = false;
    }
    if (!movieInfo.mYear) {
      errors.mYear ='Released Year is Required!';
      isFormValid = false;
    } else if (!yearRegex.test(movieInfo.mYear)) {
      errors.mYear ='Invalid Year!';
      isFormValid = false;
    }
    
    if(!isFormValid) {
      setformErrors(errors);
    } else {
      submitMovieInfo();
    }
  }

  const submitMovieInfo = () =>{
    axios.post("http://localhost:8000/api/addmovie", movieInfo)
    .then((res) => {
      console.log(res.data);
      if(res.data.status) {
        alert("Movie Added Successfully!!");
        setTimeout(() => {
          navigate("/");         
        }, 700);
      } else {
        alert("Error Occured!!");
      }
    })
  }

  const onValueChange = (e) => {
    setmovie({...movieInfo, [e.target.name]: e.target.value})
  }

  return (
    <div className='main-wrapper'>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
          <Avatar sx={{ m: 1, bgcolor: 'rgb(22, 21, 27)' }}>
            <LiveTvRoundedIcon />
          </Avatar>
         
          <Typography component="h1" variant="h5">
            Add Movie
          </Typography>
          <Box component="form" onSubmit={validateForm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography className='form-required' sx={{mb:1, color:'black'}} component="p" variant="p">Title</Typography>
                <TextField onChange={onValueChange} value={movieInfo.mName} name="mName" 
                  autoComplete="mName"  fullWidth autoFocus
                />
                {formErrors.mName ? 
                  <Typography sx={{ mt:1, fontSize:10, pl:1, mb:1, color:'red'}} component="span" variant="span">
                    {formErrors.mName}
                  </Typography> 
                : ''}
              </Grid>
              <Grid item xs={12}>
                <Typography className='form-required' sx={{mb:1, color:'black'}} component="p" variant="p">Director</Typography>
                <TextField onChange={onValueChange} value={movieInfo.director} name="director" 
                  fullWidth autoComplete="director" 
                />
                {formErrors.director ? 
                  <Typography sx={{ mt:1, fontSize:10, pl:1, mb:1, color:'red'}} component="span" 
                    variant="span">{formErrors.director}
                  </Typography> 
                : '' }
              </Grid>
              <Grid item xs={12}>
                <Typography className='form-required' sx={{mb:1, color:'black'}} component="p" variant="p">Producer</Typography>
                <TextField onChange={onValueChange} value={movieInfo.producer} name="producer" 
                  fullWidth autoComplete="producer" 
                />
                {formErrors.producer ? 
                  <Typography sx={{ mt:1, fontSize:10, pl:1, mb:1, color:'red'}} component="span" 
                    variant="span">{formErrors.producer}
                  </Typography> 
                : '' }
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Actor</Typography>
                <TextField onChange={onValueChange} value={movieInfo.actor} name="actor" 
                  fullWidth autoComplete="actor" 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Actress</Typography>
                <TextField onChange={onValueChange} value={movieInfo.actress} name="actress" 
                  fullWidth autoComplete="actress"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography className='form-required' sx={{mb:1, color:'black'}} component="p" variant="p">Camera</Typography>
                <TextField onChange={onValueChange} value={movieInfo.mCamera} name="mCamera" 
                  fullWidth autoComplete="mCamera" 
                />
                {formErrors.mCamera ? 
                  <Typography sx={{ mt:1, fontSize:10, pl:1, mb:1, color:'red'}} component="span" 
                    variant="span">{formErrors.mCamera}
                  </Typography> 
                : '' }
              </Grid>
             
              <Grid item xs={12} sm={6}>
                <Typography className='form-required' sx={{mb:1, color:'black'}} component="p" variant="p">Language</Typography>
                <TextField
                    onChange={onValueChange} value={movieInfo.language} name="language"  fullWidth  
                     autoComplete="language" 
                  />
                {formErrors.language ? 
                  <Typography component="span" variant='span' sx={{ mt:1, mb:1, pl:1, fontSize:10, color:'red'}}>
                    {formErrors.language}
                  </Typography> 
                : ''}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography className='form-required' sx={{mb:1, color:'black'}} component="p" variant="p">Released Year</Typography>
                <TextField
                    onChange={onValueChange} value={movieInfo.mYear} name="mYear"  fullWidth  
                     autoComplete="mYear" 
                  />
                {formErrors.mYear ? 
                  <Typography component="span" variant='span' sx={{ mt:1, mb:1, pl:1, fontSize:10, color:'red'}}>
                    {formErrors.mYear}
                  </Typography> 
                : ''}
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" 
              sx={{ mt: 3, mb: 2, 
                bgcolor: 'rgb(22, 21, 27, 0.8)', 
                pb: 2, pt: 2, fontWeight: '700',
                '&:hover': {backgroundColor: '#fff',color: 'rgb(22, 21, 27, 0.8)',
              }}} >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default AddMovie