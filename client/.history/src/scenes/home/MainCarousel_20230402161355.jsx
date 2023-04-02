import { Box, Typography, IconButton, useMediaQuery} from '@mui/material';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateNextIcon  from '@mui/icons-material/NavigateNext';
import  NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {shades} from "../../theme";


const importAll = (r) =>
    r.keys().reduce((acc, item)=>{
        acc[item.replace("./", "")] = r(item);
        return acc; 
    }, {});

export const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);
const MainCarousel = () =>{
    const isNonMobile = useMediaQuery("(min-width:600px");
    return(
        <Carousel infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} 
        renderArrowPrev = {(onClickHandler, hasPrev, label) =>(
            <IconButton onClick={onClickHandler} sx={{ position: " absolute", top:"50%", left:"0", color:"white", padding:"5px", zIndex:"10"}}>
                <NavigateBeforeIcon sx={{fontSize:40}}/>
            </IconButton>
        )}
        renderArrowNext = {(onClickHandler, hasNext, label) =>(
            <IconButton onClick={onClickHandler} sx={{ position: " absolute", top:"50%", right:"0", color:"white", padding:"5px", zIndex:"5"}}>
                <NavigateNextIcon sx={{fontSize:40}}/>
            </IconButton>
        )}>
        {Object.values(heroTextureImports).map((texture, index)=>(
            <Box key={`carousel-image-${index}`} >
                <img src={texture} alt={`carousel-${index}`}  style={{ width:"100%", height:"700px", margin:"70px 0",objectFit:"cover", borderRadius:"0",  backgroundAttachment:"fixed"}}/>
                <Box color="white" padding="20px" borderRadius="1px" textAlign="left" backgroundColor=" rgb(0,0,0,0.6)" position="absolute" top="46%" 
                left={isNonMobile ? "10%":"0" } right={isNonMobile ? undefined:"0" } margin={isNonMobile ? undefined:"0, auto" } maxWidth={isNonMobile ? undefined:"240px" }
                >
                    <Typography color={shades.secondary[200]}>-- New Item --</Typography>
                    <Typography variant="h1">Special Sales</Typography>
                    <Typography fontWeight="bold" color={shades.secondary[300]} sx={{ textDecoration:"underline"}}>Discover our new Products </Typography>
                </Box>
            </Box>
        ))}
        </Carousel>
    )
}

export default MainCarousel;