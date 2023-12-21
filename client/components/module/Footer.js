import Logo from "../elements/Logo";
import { Box, Typography } from "@mui/material";

const Footer = () => {

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
            mt: { xs: "100px", md: "120px" }, pb: "10px",
        }}>
            <Box sx={{
                display: 'flex', pb: "50px", flexWrap: { xs: "wrap", xl: "nowrap" },
                alignItems: "start", justifyContent: { xl: "space-between" }, gap: "50px",
                borderBottom: "1px solid #d3d3d3",
            }}>
                <Box sx={{
                    width: { xs: "350px", xl: "390px" },
                }}>
                    <Logo />
                    <Box sx={{ mt: "10px" }}>
                        <Typography variant="grayText" component="p" sx={{
                            fontSize: { xs: "8px", md: "10px", xl: "10px" },
                            fontWeight: "500", lineHeight: "20px",
                        }}>
                            Hey, you found me! 🥰
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    width: "390px", display: 'flex',
                    flexDirection: 'column',
                }}>
                </Box>
            </Box>
            <Box sx={{
                display: "flex", alignItems: "center",
                justifyContent: "center"
            }}>
            </Box>
        </Box>
    );
}

export default Footer;