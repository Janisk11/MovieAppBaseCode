import { Container, Typography } from '@mui/material'
import React from 'react'

const Error = () => {
  return (
    <div className='main-wrapper'>
        <Container maxWidth="xl">
            <Typography sx={{textAlign:'center', mb:3, fontSize:30, fontWeight:700}} gutterBottom variant="h5" component="div">
                Page not found!!</Typography>
        </Container>
    </div>
  )
}

export default Error