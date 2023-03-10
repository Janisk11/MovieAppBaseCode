import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardMedia} from '@mui/material';
import multi1 from '../assets/images/multi1.avif';
import multi2 from '../assets/images/multi2.avif';
import multi3 from '../assets/images/multi3.avif';
import multi4 from '../assets/images/multi4.avif';
import multi5 from '../assets/images/multi5.avif';
import multi6 from '../assets/images/multi6.avif';
import multi7 from '../assets/images/multi7.avif';
import multi8 from '../assets/images/multi8.avif';
import multi9 from '../assets/images/multi9.avif';
import multi10 from '../assets/images/multi10.avif';

const multiCarouselInfo = [multi1, multi2, multi3, multi4, multi5, multi6, multi7, multi8, multi9, multi10]

const MultiCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
    <>
      <Carousel
          showDots={false} 
          itemClass="multi-carousel-item" 
          infinite={true} 
          autoPlaySpeed={500} 
          responsive={responsive}
          centerMode={true}
          slidesToSlide={1}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          >
          {multiCarouselInfo.map((image, i) => (
              <Card key={i} sx={{width:230, height:375}}>
                  <CardMedia
                    component="img"
                    height="375"
                    width="100%"
                    image={image}
                    alt="multi carousel image"
                  />
              </Card>
          ))}
      </Carousel>
    </>
    
  )
}

export default MultiCarousel