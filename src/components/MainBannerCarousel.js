import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Bannerimg1 from '../assets/images/banner1.png'
import Bannerimg2 from '../assets/images/banner2.png'
import Bannerimg3 from '../assets/images/banner3.png'
import '../assets/styles/mainbanner.css'
import '../assets/styles/mainbannercarousel.css'
import { Step } from '@mui/material';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

let images = [
    {
      imagepath:Bannerimg1,
      title: 'Own Your Beauty Power',
      caption:'An experiential, interactive and inspirational beauty site ',
      btnName:'Discover Now',
      imgid:1,
    },
    {
      imagepath:Bannerimg2,
      title:'Own Your Beauty Power',
      caption:'An experiential, interactive and inspirational beauty site ',
      btnName:'Discover Now',
      imgid:2,
    },
    {
      imagepath:Bannerimg3,
      title:'Own Your Beauty Power',
      caption:'An experiential, interactive and inspirational beauty site ',
      btnName:'Discover Now',
      imgid:3,
    },
  ]

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;


  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <div className='mainbanner'>
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 80,
          pl: 1,
          opacity:1,
          bgcolor: 'background.default',
        }}
      >
        {/* <Typography>{images[activeStep].title}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        slideClassName='bannerSteppercarousal'
         enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
                <> 
                {/* <Typography>{images[activeStep].title}</Typography>
                <Typography>{images[activeStep].caption}</Typography> */}
                <span className={`bannertitle${step.imgid}`}>
                    {images[activeStep].title}
                </span>
                <div className={`bannercaption${step.imgid}`}>
                    {images[activeStep].caption}
                </div>
                <span>
                    <button value='Discover Now' className={`btn-discover${step.imgid}`}>{step.btnName}</button>
                </span>
              <Box
                component="img"
                sx={{
                  height: 370,
                  display: 'block',
                  maxWidth: 1272,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imagepath}
                alt={step.title}
              />
            
            </>) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
      <MobileStepper
        steps={maxSteps}
        position="right"
        activeStep={activeStep}
      
      />
    </Box>
</div>
</>
  );
}

export default SwipeableTextMobileStepper;
