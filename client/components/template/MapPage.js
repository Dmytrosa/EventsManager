
import { Box } from '@mui/material';
import MapContainer from '../module/MapPageModules/MapContainer';


function MapPage() {

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
        }}>
            <MapContainer />
        </Box>
    );
}

export default MapPage;