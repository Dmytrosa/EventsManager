// React import for state management
import { useState } from "react";
// Material-UI components for styling
import { Box, Button, Typography } from "@mui/material";
// Custom EventCard component
import EventCard from "../module/EventsPageModules/EventCard";
// Next.js link component for client-side navigation
import Link from "next/link";
// Custom FilterEvents component
import FilterEvents from "../module/EventsPageModules/FilterEvents";
// Lodash function for sorting events
import { orderBy } from "lodash"; 
// React icon for alphabetical sorting
import { BsSortAlphaDown } from "react-icons/bs";

// Functional component for the EventsPage
function EventsPage({ events }) {
    // State for controlling the number of displayed events
    const [cuttedEvents, setCuttedEvents] = useState(8);
    // State for controlling the sorting order
    const [sortBy, setSortBy] = useState("date");

    // Sorting events based on the selected sorting order
    const sortedEvents = orderBy(events, [sortBy]);

    // Function to handle the "Load more" button click
    const loadMoreHandler = () => {
        setCuttedEvents((prevValue) => prevValue + 4);
    };

    // Function to handle the change in sorting order
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <Box
            sx={{
                maxWidth: "1576px",
                minHeight: "55vh",
                m: "auto",
                px: { xs: "20px", xl: "50px" },
                pt: "30px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                    flexDirection: { xs: "column", xl: "row" },
                }}
            >
                <Box>
                    {/* Filter events component */}
                    <FilterEvents />

                    {/* Sorting options */}
                    <Box sx={{ marginBottom: "20px", marginTop: "20px" }}>
                        <Typography htmlFor="sortSelect" variant='body2' sx={{
                            fontWeight: "600", fontSize: "18px",
                            display: "flex", alignItems: "center",
                            gap: "5px", mb: "15px", ml: "10px"
                        }}>
                            <BsSortAlphaDown size={17} />
                            Sorting
                        </Typography>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'flex-start',
                            width: "300px"
                        }}>
                            {/* Dropdown for sorting options */}
                            <Typography variant='text' sx={{
                                fontWeight: "500"
                            }}>
                                <select
                                    id="sortSelect"
                                    value={sortBy}
                                    onChange={handleSortChange}
                                    style={{ width: "300px", height: "45px", padding: "10px", fontSize: "16px" }}
                                >
                                    <option value="date">Date</option>
                                    <option value="name">Title</option>
                                </select>
                            </Typography>
                        </Box>
                    </Box>

                    {/* Link to create a new event */}
                    <Link href={`/events/form`}>
                        <Button
                            variant="outlined"
                            sx={{
                                top: "25px",
                                width: "100%",
                                color: "#08c297",
                                fontSize: "17px",
                                marginBottom: "30px",
                            }}
                        >
                            Create Event
                        </Button>
                    </Link>
                </Box>

                {/* Displaying sorted event cards */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        justifyContent: { xs: "center", md: "start" },
                    }}
                >
                    {sortedEvents.slice(0, cuttedEvents).map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}

                    {/* Load more button */}
                    {+sortedEvents.length > cuttedEvents ? (
                        <Box
                            sx={{
                                width: "95%",
                                textAlign: "center",
                                mt: "20px",
                            }}
                        >
                            <Button
                                variant="outlined"
                                onClick={loadMoreHandler}
                                sx={{
                                    width: "200px",
                                }}
                            >
                                Load more
                            </Button>
                        </Box>
                    ) : null}
                </Box>
            </Box>
        </Box>
    );
}

// Exporting the EventsPage component
export default EventsPage;
