import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ColorModeContext } from "../../../theme/MUI_MODE";

import {
    Button, Card, CardActionArea,
    CardContent, CardMedia, Dialog, DialogActions, IconButton, Typography
} from "@mui/material";
import { format } from "date-fns";
import { truncateText } from "../../additions/Truncate";
import { Category } from "../../additions/Category";


const EventCard = ({ event }) => {
    const { mode } = useContext(ColorModeContext);
    const imgsrc = event.category === Category.Art ? 'https://i.ibb.co/0nScyQw/undraw-monster-artist-2crm.png' :
        event.category === Category.Poetry ? 'https://i.ibb.co/Hg9fYz3/undraw-Reading-book-re-kqpk.png' :
            event.category === Category.Hackathon ? 'https://i.ibb.co/M8cfmK3/undraw-server-down-s4lk.png' :
                event.category === Category.Music ? 'https://i.ibb.co/ZT2MWdY/undraw-happy-music-g6wc.png' :
                    event.category === Category.Different && 'https://i.ibb.co/vkgpnqK/undraw-true-love-cy8x.png'

    const callAPI = async () => {
        try {
            const res = await fetch(
                `http://localhost:3001/event/${event.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            //TODO
            window.location.reload()

            const data = await res.json();
            console.log("callAPI at deleting event", data)
        } catch (err) {
            console.log("callAPI at deleting event error:", err);
        }
    };
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        callAPI();
        handleClose();
    };
    return (
        <Card sx={{
            width: { xs: "270px", md: "220px", xl: "250px" },
            height: "430px", borderRadius: '10px',
            backgroundColor: `${mode == 'dark' && '#252422'}`,
            "&:hover": { boxShadow: `${mode == 'dark' ? '0 0 7px 0 #FFFFFF' : '0 0 7px 0 #495057'}`, }
        }} >
            <IconButton
                sx={{
                    left: '7px',
                    top: '5px',
                    height: '40px',
                }}
                onClick={handleOpen}
            >
                <DeleteIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose} sx={{ textAlign: 'center' }}>
                <DialogActions sx={{ justifyContent: 'center', width: "400px", height: "150px" }}>
                    <Button
                        onClick={handleDelete}
                        sx={{ backgroundColor: '#ff0000', color: '#fff', width: "150px", height: "50px", '&:hover': { backgroundColor: '#cc0000' } }}
                    >
                        Aply deleting
                    </Button>
                    <Button onClick={handleClose} sx={{ backgroundColor: '#cfcfcf', color: '#333', width: "100px", height: "50px", }}>
                        Deny
                    </Button>
                </DialogActions>
            </Dialog>

            <Link href={`/events/${event.id}`}>
                <CardActionArea >
                    <CardMedia sx={{
                        display: 'flex', alignItems: 'center', pt: "10px",
                        justifyContent: 'center', width: '100%', height: '100%',
                    }}>
                        <Image src={imgsrc} alt="Event image" objectFit="cover"
                            width='210px' height='220px'
                            style={{ borderRadius: "5px" }}
                            loading="lazy"
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" sx={{
                            fontWeight: "500", mt: '5px', mb: '10px',
                            fontSize: "16px"
                        }}>
                            {truncateText(event.title, 20)}
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: "17px", fontWeight: "600"
                        }}>
                            {format(new Date(event.date), "yyyy-MM-dd 'at' HH:mm:ss")}
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: "16px", fontWeight: "500"
                        }}>
                            location: {event.latitude} , {event.longitude}
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: "14px", fontWeight: "500", minHeight: "50px"
                        }}>
                            {truncateText(event.description, 50)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}

export default EventCard;