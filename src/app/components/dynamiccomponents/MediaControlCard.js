"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/navigation';

export default function MediaControlCard({carouselData}) {
  const theme = useTheme();
  const router = useRouter()
  const [previewNumber, setPreviewNum] = React.useState(0)
  const [delayValue, setDelayValue] = React.useState(3000)
  const [hoverFlag, setHoverFlag] = React.useState(false)
  let totalHeadlines = carouselData.length
  let currentData = carouselData[previewNumber]

  const handleNext = () => {
    setDelayValue(3000)
    if(previewNumber === totalHeadlines - 1){
      setPreviewNum(0)
    }else{
    setPreviewNum(previewNumber => previewNumber+1)}
  }

  const handlePrevious = () => {
    setDelayValue(3000)
    if(previewNumber === 0){
      setPreviewNum(totalHeadlines - 1)
    }else{
    setPreviewNum(previewNumber => previewNumber-1)}
  }

  const handleReadStory = () => {
    router.push('/pages')
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if(!hoverFlag){
      if(previewNumber === totalHeadlines - 1){
        setPreviewNum(0)
      }else{
      setPreviewNum(previewNumber => previewNumber+1)}}
    }, delayValue);
    return () => {
      clearTimeout(timer)
    }
  },[previewNumber,hoverFlag,delayValue])  

  const handleReadMouseEnter = () => {
    setHoverFlag(true)
  }

  const handleReadMouseLeave = () => {
    setHoverFlag(false)
  }

  return (
    <Card sx={{ display: 'flex', borderStyle: 'ridge' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%', height:250, marginTop: '4px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{ color: 'brown' }} >
            {currentData.headline}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">{currentData.content}</Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Tooltip title="Previous Headline" onClick={handlePrevious} >
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          </Tooltip>
          <Tooltip title="Read Full Story">
          <IconButton  aria-label="play/pause" onClick={handleReadStory} onMouseEnter={handleReadMouseEnter}
          onMouseLeave={handleReadMouseLeave} >
            <AutoStoriesIcon  sx={{ height: 38, width: 38 }} />
          </IconButton>
          </Tooltip>
          <Tooltip title="Next Headline">
          <IconButton aria-label="next" onClick={handleNext} >
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200, margin: 2 }}
        image={currentData.imgeUrl}
        alt="Live from space album cover"
      />
    </Card>
  );
}