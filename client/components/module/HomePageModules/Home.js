import { Box, Typography } from '@mui/material';

function Home() {

    return (
        <Box>
            <Box sx={{
                background: 'rgba(228, 243, 247)',
                height: { xl: "800px", md: "700px", xs: "400px" },
                width: "100%",
                position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center"
            }}>

                <Typography variant='h2' component='h3' sx={{
                    color: '#E58E00', mb: '20px',
                    textAlign: 'center', fontWeight: "700",
                    fontSize: { xs: "20px", md: "35px", xl: "45px" },
                }}>
                    Basic information about the application
                </Typography>
                <Box sx={{maxWidth: "600px"}}>
                <Typography  sx={{
                    color: '#E58E00', mb: '30px',
                    textAlign: 'center', fontWeight: "500",
                    fontSize: "16px" ,
                }}>
The application contains front and back parts, based on nextjs and nestjs + postgresql, respectively. There are several main elements - a main screen with a description, a list of events, a form for creating events, a detailed overview of events and a map. 
              </Typography>
              <Typography  sx={{
                    color: '#E58E00', mb: '30px',
                    textAlign: 'center', fontWeight: "500",
                    fontSize: "16px" , 
                }}>
                    The All Events screen includes filtering by category and sorting by date and title. Also an overview of all events and the download of additional ones.
                </Typography>
                <Typography  sx={{
                    color: '#E58E00', mb: '30px',
                    textAlign: 'center', fontWeight: "500",
                    fontSize: "16px" ,
                }}>          
                The map screen uses the google API and displays all events on the map.
                Changing the colors of the application (theme) is also presented
                      </Typography>

                </Box>

            </Box>


        </Box>
    );
}

export default Home;