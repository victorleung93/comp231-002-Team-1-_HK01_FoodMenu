import { useTheme } from "@emotion/react";
import { shades } from "../../theme";
import { Box, Typography } from "@mui/material";

const Footer = () =>{
    const {
        palette: { neutral },
      } = useTheme();

    return(
        <Box margin="100px 0 0 0 " padding="40px 0" backgroundColor= { neutral.light } >
            <Box width="80%" margin="auto" display="flex" justifyContent="space-between" flexwrap="wrap" rowGap="30px" columnGap="clamp(20px, 30px, 40px)">
                
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography color={shades.secondary[500]}> Ecommer</Typography>
                    <Box>
                        This is Victor's creation. 
                        This is a sample website created from React and Strapi to host a Ecommerce website which has menu, product details, and payment pages. 
                        The products listed are not for sales purpose and any commercial use. 
                    </Box>
                </Box>
                
                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Contact Me
                    </Typography>
                    <Typography mb="30px">
                        19 Rosebank Dr, Scarborough, Ontario, M1B5Z2 
                    </Typography>
                    <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
                        Email: victorleung93@gmail.com
                    </Typography>
                    <Typography mb="30px">+1 (222)333-4444</Typography>
                </Box>
                
            </Box>
        </Box>
    )
};

export default Footer;