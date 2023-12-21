import Image from "next/image";
import { format } from 'date-fns';
import { Box, Typography } from "@mui/material";
import { Category } from "../additions/Category";
import EventCard from "../module/EventsPageModules/EventCard";

function EventDetailPage({ event }) {
    const imgsrc = event.mainEvent.category === Category.Art ? 'https://i.ibb.co/0nScyQw/undraw-monster-artist-2crm.png' :
        event.mainEvent.category === Category.Poetry ? 'https://i.ibb.co/Hg9fYz3/undraw-Reading-book-re-kqpk.png' :
            event.mainEvent.category === Category.Hackathon ? 'https://i.ibb.co/M8cfmK3/undraw-server-down-s4lk.png' :
                event.mainEvent.category === Category.Music ? 'https://i.ibb.co/ZT2MWdY/undraw-happy-music-g6wc.png' :
                    event.mainEvent.category === Category.Different && 'https://i.ibb.co/vkgpnqK/undraw-true-love-cy8x.png'
    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "10px", xl: "50px" },
            minHeight: "60vh", pt: { xs: "40px", xl: "80px" },
        }}>
            <Box sx={{
                display: 'flex', marginBottom: "20px", alignItems: 'center',
                flexDirection: { xs: "column", xl: "row" },
                justifyContent: 'center',
                gap: { xs: "40px", xl: "100px" },
            }}>

                <Box sx={{
                    width: { xs: '90%', xl: '30%' },
                    textAlign: { xs: 'center', xl: 'end' },
                }}>
                    <Image src={imgsrc} alt='Event detail image' objectFit="cover"
                        width={550} height={450}
                        style={{ borderRadius: "5px" }}
                    />
                </Box>


                <Box sx={{
                    width: { xs: '90%', xl: '30%' },
                }}>

                    <Box sx={{
                        display: "flex", flexDirection: "column",
                        gap: "15px", borderBottom: "1px solid #e9ecef",
                        pb: "20px", mb: "20px"
                    }}>
                        <Typography variant="body1" sx={{
                            fontWeight: "600",
                            fontSize: { xs: "30px", md: "35px" }
                        }}>
                            {event.mainEvent.title.slice(0, 11)}
                        </Typography>

                        <Typography variant="body1" sx={{
                            fontSize: "25px", fontWeight: "600"
                        }}>
                            {format(new Date(event.mainEvent.date), "yyyy-MM-dd 'at' HH:mm:ss")}
                        </Typography>
                        <Typography variant="body2" sx={{
                            fontSize: "23px", fontWeight: "400"
                        }}>
                            X: {event.mainEvent.latitude}
                        </Typography>
                        <Typography variant="body3" sx={{
                            fontSize: "23px", fontWeight: "400"
                        }}>
                            Y: {event.mainEvent.longitude}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{
                            fontWeight: "600", mb: "5px",
                            fontSize: { xs: "15px", md: "16px" },
                        }}>
                            Event&apos;s Detail :
                        </Typography>

                        <Typography variant="grayText" component="p" sx={{
                            fontSize: { xs: "13px", md: "14px" },
                            mb: "15px", textAlign: "justify",
                            lineHeight: "19px", fontWeight: "500"
                        }}>
                            {event.mainEvent.description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {event.relatedEvents.length ? <Box>
                <Typography variant="grayText" component="p" sx={{
                    fontSize: { xs: "15px", md: "16px" },
                    mb: "17px", textAlign: "justify",
                    lineHeight: "19px", fontWeight: "500"
                }}>
                    You may also like:
                </Typography>
                <Box sx={{
                    width: '100%', display: 'flex', flexWrap: 'wrap',
                    gap: '20px', justifyContent: { xs: "center", md: "start" },
                }}>
                    {event.relatedEvents.map(event =>
                        <EventCard key={event.id} event={event} />
                    )}
                </Box>
            </Box> : <Typography variant="grayText" component="p" sx={{
                fontSize: { xs: "15px", md: "16px" },
                mb: "17px", textAlign: "justify",
                lineHeight: "19px", fontWeight: "500"
            }}>
                You can add more events with the same category, this is where they will appear ↓
            </Typography>}

        </Box>
    );
}

export default EventDetailPage;