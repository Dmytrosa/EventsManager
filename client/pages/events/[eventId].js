// Importing necessary modules and components
import axios from "axios";
import { Box } from "@mui/material";

// Importing the EventDetailPage component
import EventDetailPage from "../../components/template/EventDetailPage";

// Functional component for rendering EventDetailPage with the provided event data
const EventDetail = ({ event }) => {
    return (
        <Box>
            <EventDetailPage event={event} />
        </Box>
    );
};

// Exporting the EventDetail component as the default export
export default EventDetail;

// Asynchronous function to generate static paths for pre-rendering
export async function getStaticPaths() {
    // Fetching data from the server endpoint for all events
    const result = await axios.get(`http://localhost:3001/event`);
    const data = await result.data;

    // Mapping data to create an array of paths for all events
    const paths = data.map(item => ({ params: { eventId: `${item.id}` } }));

    // Returning paths and specifying that there's no fallback
    return {
        paths,
        fallback: false
    };
}

// Asynchronous function to fetch data for a specific event based on params
export const getStaticProps = async (context) => {
    const { params } = context;

    // Fetching data for a specific event based on eventId from the server
    const result = await axios.get(`http://localhost:3001/event/${params.eventId}`);
    const data = await result.data;

    // Returning props with the fetched event data and revalidate time for ISR
    return {
        props: { event: data },
        revalidate: 7 * 24 * 60 * 60 // Revalidating every 7 days
    };
}
