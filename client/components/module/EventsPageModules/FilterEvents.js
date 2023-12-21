import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../../../theme/MUI_MODE";

import {
    Accordion, AccordionDetails,
    AccordionSummary, Box, Checkbox,
    Drawer, FormControlLabel,
    IconButton, List, ListItem,
    Tooltip, Typography, RadioGroup, Radio,
} from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BiReset, BiFilterAlt } from 'react-icons/bi';


const FilterEvents = () => {

    const router = useRouter();

    const [query, setQuery] = useState({ category: "" });

    const changeHandler = (event) => {
        setQuery({ ...query, [event.target.name]: event.target.value });
    };

    const resetHandler = () => {
        setQuery({ category: "" });
        router.replace({
            pathname: "/events"
        })
    };
    useEffect(() => {
        if (router.query.category !== query.category) {
            setQuery(router.query);
        }
    }, [])
    useEffect(() => {
        if (query.category) {
            router.replace({
                pathname: "/events",
                query
            })
        }
    }, [query]);


    return (
        <Box>
            <Box sx={{
                display: { xs: "none", xl: "block" }
            }}>
                <DesktopFilter
                    query={query}
                    changeHandler={changeHandler}
                    resetHandler={resetHandler}
                />
            </Box>

            <Box sx={{
                display: { xs: "block", xl: "none" },
                position: 'relative'
            }}>
                <ResponsiveFilter
                    query={query}
                    changeHandler={changeHandler}
                    resetHandler={resetHandler}
                />
            </Box>

        </Box>
    );
}
export default FilterEvents;


const DesktopFilter = ({ changeHandler, resetHandler, query }) => {
    // const [range, setRange] = React.useState(initialRange);

    const { mode } = useContext(ColorModeContext);

    return (
        <Box sx={{
            width: "300px"
        }}>

            <Box sx={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                px: "10px", height: "60px",
            }}>

                <Typography variant='body2' sx={{
                    fontWeight: "600", fontSize: "18px",
                    display: "flex", alignItems: "center",
                    gap: "5px"
                }}>
                    <BiFilterAlt size={20} />
                    Filtering
                </Typography>

                {query.category ?
                    <Tooltip title='reset filter' onClick={resetHandler}>
                        <IconButton color="primary">
                            <BiReset fontSize={20} />
                        </IconButton>
                    </Tooltip>
                    :
                    null
                }

            </Box>


            <Accordion sx={{
                backgroundColor: `${mode == 'dark' && '#252422'}`,
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant='text' sx={{
                        fontWeight: "500"
                    }}>
                        Category
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
                        alignItems: 'flex-start', 
                        pl: "10px"
                    }}>
                        <Typography gutterBottom>
                        </Typography>
                        <RadioGroup
                            row
                            aria-label="category"
                            name="category"
                            value={query.category}
                            onChange={changeHandler}
                        >
                            <FormControlLabel
                                value="Different"
                                control={<Radio size="small" />}
                                label="Different"
                            />
                            <FormControlLabel
                                value="Art"
                                control={<Radio size="small" />}
                                label="Art"
                            />
                            <FormControlLabel
                                value="Hackathon"
                                control={<Radio size="small" />}
                                label="Hackathon"
                            />
                            <FormControlLabel
                                value="Music"
                                control={<Radio size="small" />}
                                label="Music"
                            />
                            <FormControlLabel
                                value="Poetry"
                                control={<Radio size="small" />}
                                label="Poetry"
                            />
                        </RadioGroup>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}


const ResponsiveFilter = ({ changeHandler, resetHandler, query }) => {

    const [menu, setMenu] = useState();

    return (
        <Box sx={{
            display: { xl: "none", xs: "block" },
        }}>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenu(true)}
            >
                <Typography variant='body2' sx={{
                    fontWeight: "600", fontSize: "18px",
                    display: "flex", alignItems: "center",
                    gap: "5px"
                }}>
                    <BiFilterAlt size={17} />
                    Filtering
                </Typography>
            </IconButton>


            <Drawer
                anchor='bottom'
                open={menu}
                onClose={() => setMenu(false)}
            >
                <Box role="presentation"
                    onClick={() => setMenu(false)}
                    onKeyDown={() => setMenu(false)}
                >

                    <List sx={{
                        width: "100%", height: "50px",
                        display: 'flex', justifyContent: "space-between",
                        alignItems: "center", mt: "10px",
                        px: "20px", height: "50px",
                    }}>

                        <Typography variant='body2' sx={{
                            fontWeight: "600", fontSize: "18px",
                            display: "flex", alignItems: "center",
                            gap: "5px"
                        }}>
                            <BiFilterAlt size={17} />
                            Filter
                        </Typography>

                        {query.category ?
                            <Tooltip title='reset filter' onClick={resetHandler}>
                                <IconButton color="primary">
                                    <BiReset fontSize={20} />
                                </IconButton>
                            </Tooltip>
                            :
                            null
                        }

                    </List>

                    <List>
                        <ListItem disablePadding
                            sx={{
                                p: "20px",
                                display: 'flex', alignItems: "start",
                                justifyContent: "space-around"
                            }}
                        >

                            <Box>
                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'flex-start', justifyContent: 'flex-start',
                                    pl: "20px"
                                }}>
                                    <FormControlLabel label="Different" control={
                                        <Checkbox
                                            checked={query.category === "Different"}
                                            onChange={changeHandler} value="Different"
                                            name="category" size="small"
                                        />} />
                                    <FormControlLabel label="Art" control={
                                        <Checkbox
                                            checked={query.category === "Art"}
                                            onChange={changeHandler} value="Art"
                                            name="category" size="small"
                                        />} />
                                    <FormControlLabel label="Hackathon" control={
                                        <Checkbox
                                            checked={query.category === "Hackathon"}
                                            onChange={changeHandler} value="Hackathon"
                                            name="category" size="small"
                                        />} />
                                    <FormControlLabel label="Music" control={
                                        <Checkbox
                                            checked={query.category === "Music"}
                                            onChange={changeHandler} value="Music"
                                            name="category" size="small"
                                        />} />
                                    <FormControlLabel label="Poetry" control={
                                        <Checkbox
                                            checked={query.category === "Poetry"}
                                            onChange={changeHandler} value="Poetry"
                                            name="category" size="small"
                                        />} />
                                </Box>
                            </Box>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}
