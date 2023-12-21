import axios from "axios";
import { Box } from "@mui/material";
import EventsPage from "../../components/template/EventsPage";

const Events = ({ events }) => {
  return (
    <Box>
      <EventsPage events={events} />
    </Box>
  );
};

export default Events;

export async function getServerSideProps(context) {
  const { query } = context;

  const result = await axios.get("http://localhost:3001/event");
  const data = await result.data;

  // filtered data
  const filteredData = data.filter((item) => {
    // category
    const categoryResult = item.category === query.category;

    if (query.category && categoryResult) {
      return item;
    } else if (!query.category) {
      return item;
    }
  });

  if (query.category) {
    return {
      props: { events: filteredData },
    };
  } else if (!query.category) {
    return {
      props: { events: data },
    };
  }
}
