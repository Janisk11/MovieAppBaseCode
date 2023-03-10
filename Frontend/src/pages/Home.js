import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { Container, Typography, Stack , Card, CardContent, CardActionArea, CardActions} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import mainCarouselImag1 from '../assets/images/about-carousel-img1.avif';
import mainCarouselImag2 from '../assets/images/about-carousel-img2.jpg';
import mainCarouselImag3 from '../assets/images/about-carousel-img3.jpg';
const bannerCarousel = [mainCarouselImag1, mainCarouselImag2, mainCarouselImag3]

const StyledButton =  styled('button')({
  border: '1px solid rgb(22, 21, 27, 0.8)',
  backgroundColor: 'rgb(22, 21, 27, 0.8)', 
  paddingBottom: 12, 
  paddingTop: 12, 
  fontWeight: 700, 
  width: 90,
  color:'white',
  borderRadius:20,
  cursor:'pointer',
  '&:hover': {
    backgroundColor: 'rgb(22, 21, 27, 0.2)', 
  }
})


const Home = () => {
  var [movies,setmovies] = useState([]);
  
  useEffect(() => {
    fetchMovies();
  }, [])
  const fetchMovies = () => {
    axios.get("http://localhost:8000/api/getmovies")
    .then((res) => {
      setmovies(movies = res.data);
    })
    
  }
  const removeMovie = (id) => {
    var movieId = {"_id":id};
    axios.post("http://localhost:8000/api/removemovie", movieId)
    .then((res) => {
      alert("Removed Successfully!!")
      fetchMovies();
    })
  }
  
  return (
    <div className='main-wrapper'>
      <Container maxWidth="xl">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {bannerCarousel.map((imgurl, i) => (
            <div key={i}>
              <img alt='carousel-item' src={imgurl} />
            </div>
          ))}
        </Carousel>
      </Container>

      <Container maxWidth="xl"  sx={{mt:7}}>
        <Box sx={{ display: 'flex', justifyContent:'center', alignContent:'center', flexWrap: 'wrap', '& > :not(style)': { m: 1}, }}>
          {movies.map((value, i) => (
            <Card elevation={24} key={i} sx={{ width: 250, p: 2}}>
              <CardActionArea>
                <CardContent>
                  <Typography  pb={3}variant="h5" align='center' sx={{color:'rgb(72,61,108)', fontWeight:700, textTransform: 'uppercase'}} component="div">
                    {value.mName}
                  </Typography>
                  <Typography sx={{textTransform:'capitalize'}} variant="body2" pb={2}>
                    Director: {value.director}
                  </Typography>
                  <Typography sx={{textTransform:'capitalize'}} variant="body2" pb={2}>
                    Producer: {value.producer}
                  </Typography>
                  <Typography sx={{textTransform:'capitalize'}} variant="body2" pb={2}>
                    Camera: {value.mCamera}
                  </Typography>
                  <Typography sx={{textTransform:'capitalize'}} variant="body2" pb={2}>
                    Actor: {value.actor}
                  </Typography>
                  <Typography variant="body2" pb={2}>
                    Actress: {value.actress}
                  </Typography>
                  <Typography sx={{textTransform:'capitalize'}} variant="body2" pb={2}>
                    Released Year: {value.mYear}
                  </Typography>
                  <Typography sx={{textTransform:'capitalize'}} variant="body2" pb={2}>
                    Language: {value.language}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{justifyContent:'center'}}>
                <Stack direction="row"  alignItems="center"spacing={2}>
                  <StyledButton> <Link className='edit-link' to={`/updatemovie/${value._id}`}>Edit</Link> </StyledButton>
                  <StyledButton onClick={()=>{removeMovie(value._id)}}>Remove</StyledButton>
                </Stack>
              </CardActions>
            </Card>
        ))}
        </Box>
      </Container>

      
    </div>
  )
}

export default Home