import React, { useState, useEffect } from 'react'
import { Avatar, Container, Typography, Box, Grid, TextField, CssBaseline, Button } from '@mui/material';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
  const [movie, setmovie] = useState({"mName":"","director":"","language":"","actor":"","actress":"","mCamera":"","mYear":"","producer":""});
  var [formErrors, setformErrors] = useState({"mName":"","director":"","language":"","mCamera":"","mYear":"","producer":""});
  const yearRegex = /^\d{4}$/;

  const {id} = useParams("");

  let navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetail();
  },[]);

  const fetchMovieDetail = async() => {
    axios.get(`http://localhost:8000/api/getmovie/${id}`)
    .then((res) => {
      setmovie(res.data);
    })
  }
  const validateForm = (e) =>{
    e.preventDefault();
    var isFormValid = true;
    var errors ={};
  
    if (!movie.mName) {
      errors.mName ='Movie Name Required!';
      isFormValid = false;
    } 
    if (!movie.director) {
      errors.director ='Director Name Required!';
      isFormValid = false;
    }
    if (!movie.producer) {
      errors.producer ='Producer Name Required!';
      isFormValid = false;
    }
    if (!movie.language) {
      errors.language ='Language Required!';
      isFormValid = false;
    }
    
    if (!movie.mCamera) {
      errors.mCamera ='Camera is Required!';
      isFormValid = false;
    }
    if (!movie.mYear) {
      errors.mYear ='Released Year is Required!';
      isFormValid = false;
    } else if (!yearRegex.test(movie.mYear)) {
      errors.mYear ='Invalid Year!';
      isFormValid = false;
    }
    
    if(!isFormValid) {
      setformErrors(errors);
    } else {
      editMovieDetails();
    }
  }


  const editMovieDetails = (e) =>{
    axios.post(`http://localhost:8000/api/updatemovie/${id}`, movie)
    .then((res) => {
      console.log(res.data);
      setTimeout(() => {
        navigate("/");         
      }, 1000);
    })
  }

  const onValueChange = (e) => {
    setmovie({...movie, [e.target.name]: e.target.value})
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
            Update Movie
          </Typography>
          <Box component="form" onSubmit={(e) => validateForm(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Title</Typography>
                <TextField onChange={(e) => onValueChange(e)} name="mName" value={movie.mName}
                  autoComplete="mName"  fullWidth autoFocus
                />
                 {formErrors.mName ? 
                  <Typography sx={{ mt:1, fontSize:10, pl:1, mb:1, color:'red'}} component="span" variant="span">
                    {formErrors.mName}
                  </Typography> 
                : ''}
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Director</Typography>
                <TextField onChange={(e) => onValueChange(e)} name="director" value={movie.director}
                  fullWidth  autoComplete="director" 
                />
                {formErrors.director ? 
                  <Typography sx={{ mt:1, fontSize:10, pl:1, mb:1, color:'red'}} component="span" 
                    variant="span">{formErrors.director}
                  </Typography> 
                : '' }
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Producer</Typography>
                <TextField onChange={(e) => onValueChange(e)} name="producer" value={movie.producer}
                  fullWidth  autoComplete="producer" 
                />
                 {formErrors.producer ? 
                  <Typography sx={{ mt:1, fontSize:10, pl:1, mb:1, color:'red'}} component="span" 
                    variant="span">{formErrors.producer}
                  </Typography> 
                : '' }
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Actor</Typography>
                <TextField onChange={(e) => onValueChange(e)} name="actor" value={movie.actor}
                  fullWidth autoComplete="actor" 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Actress</Typography>
                <TextField onChange={(e) => onValueChange(e)} name="actress" value={movie.actress}
                  fullWidth autoComplete="actress"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Camera</Typography>
                <TextField onChange={(e) => onValueChange(e)} name="mCamera" value={movie.mCamera}
                  fullWidth autoComplete="mCamera" 
                />
                 {formErrors.mCamera ? 
                  <Typography sx={{ mt:1, fontSize:10, pl:1, mb:1, color:'red'}} component="span" 
                    variant="span">{formErrors.mCamera}
                  </Typography> 
                : '' }
              </Grid>
             
              <Grid item xs={12} sm={6}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Language</Typography>
                <TextField
                    onChange={(e) => onValueChange(e)} name="language" value={movie.language} fullWidth  
                     autoComplete="language" 
                  />
                  {formErrors.language ? 
                  <Typography component="span" variant='span' sx={{ mt:1, mb:1, pl:1, fontSize:10, color:'red'}}>
                    {formErrors.language}
                  </Typography> 
                : ''}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{mb:1, color:'black'}} component="p" variant="p">Released Year</Typography>
                <TextField
                    onChange={(e) => onValueChange(e)} name="mYear"  fullWidth value={movie.mYear}
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
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default EditMovie