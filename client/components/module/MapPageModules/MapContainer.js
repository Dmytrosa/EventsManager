import { Box } from "@mui/material";
import Intro from "./Map";
import { useEffect, useState } from "react";

function WeChanging() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/event");
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#246a73",
                mt: { xs: "70px", md: "100px" },
                flexDirection: { xs: "column-reverse", xl: "row" },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: { xs: "20px", md: "70px" },
                    height: { xs: "230px", md: "300px", xl: "auto" },
                }}
            >
                <Intro events={events} />
            </Box>
        </Box>
    );
}

export default WeChanging;
