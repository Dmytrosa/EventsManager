import Link from "next/link";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { ColorModeContext } from "../../theme/MUI_MODE";
import Logo from "../elements/Logo";
import {
    HiOutlineSun,
    HiOutlineMoon, HiOutlineMenuAlt2,
} from 'react-icons/hi';
import { BsCalendar4Week, BsFillPinMapFill } from "react-icons/bs";
import {
    Box, Tooltip, IconButton, Typography,
    Drawer, List, ListItem, ListItemButton,
} from "@mui/material";


const Navbar = () => {

    const { mode, toggleMode } = useContext(ColorModeContext);
    const [menu, setMenu] = useState();
    const router = useRouter();
    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
            position: 'relative', py: { xl: "15px" },
        }}>
            <Box sx={{
                display: 'flex', justifyContent: "space-between",
                alignItems: 'center', backgroundColor: "transparent"
            }}>
                <ResponsiveMenu menu={menu} setMenu={setMenu} router={router} />
                <DesktopMenu router={router} />
                <Box sx={{
                    display: "flex", alignItems: "center"
                }}>
                    <Tooltip title='Theme'>
                        <IconButton onClick={toggleMode} color='primary'>
                            {mode === 'dark' ? <HiOutlineMoon sx={{ fontSize: '25px' }} /> :
                                <HiOutlineSun fontSize={23} />}
                        </IconButton>
                    </Tooltip>
                </Box>

            </Box>
        </Box>
    );
}

export default Navbar;

function DesktopMenu({ router }) {

    return (
        <Box sx={{
            display: { xl: 'flex', xs: "none" },
            alignItems: 'center', gap: "60px"
        }}>
            <Logo />
            <Box sx={{
                display: "flex", alignItems: "center", gap: "15px"
            }}>


                <Link href='/events'>
                    <Typography variant="subtitle1" color="primary" fontWeight={600}
                        sx={{
                            borderBottom: `${router.asPath === '/events' && "2px solid #998e76"}`,
                            cursor: "pointer", px: "6px", ":hover": { color: "#B2B2B2" },
                            transition: 'all .15s linear'
                        }}
                    >
                        Events
                    </Typography>
                </Link>

                <Link href='/map'>
                    <Typography variant="subtitle1" color="primary" fontWeight={600}
                        sx={{
                            borderBottom: `${router.asPath === '/map' && "2px solid #998e76"}`,
                            cursor: "pointer", px: "6px", ":hover": { color: "#B2B2B2" },
                            transition: 'all .15s linear'
                        }}
                    >
                        Map
                    </Typography>
                </Link>

            </Box>

        </Box>
    );
}


function ResponsiveMenu({ menu, setMenu, router }) {

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
                <HiOutlineMenuAlt2 style={{ color: "primary" }} />
            </IconButton>


            <Drawer
                anchor='left'
                open={menu}
                onClose={() => setMenu(false)}
            >
                <Box
                    sx={{ width: { xs: 200, md: 250 } }}
                    role="presentation"
                    onClick={() => setMenu(false)}
                    onKeyDown={() => setMenu(false)}
                >


                    <List sx={{
                        width: "100%", height: "50px",
                        display: 'flex', justifyContent: "center",
                        alignItems: "center", mt: "20px"
                    }}>
                        <Logo />
                    </List>


                    <List>
                        <ListItem disablePadding
                            sx={{
                                display: 'flex', flexDirection: 'column',
                                width: '100%', mt: '20px'
                            }}
                        >

                            <Link href='/events'>
                                <ListItemButton sx={{
                                    display: 'flex', alignItems: 'center',
                                    width: '100%', gap: '15px', pl: "25px", py: "15px",
                                    cursor: "pointer",
                                    backgroundColor: `${router.asPath === '/events' && "#deac7c"}`,
                                }}>
                                    <BsCalendar4Week style={{
                                        color: `${router.asPath === '/events' ? "black" : "primary"}`,
                                        fontSize: "25px"
                                    }} />
                                    <Typography variant="subtitle1"
                                        color={`${router.asPath === '/events' ? "black" : "primary"}`}
                                        fontWeight={600} px={"6px"}
                                    >
                                        Events
                                    </Typography>
                                </ListItemButton>
                            </Link>

                            <Link href='/map'>
                                <ListItemButton sx={{
                                    display: 'flex', alignItems: 'center',
                                    width: '100%', gap: '15px', pl: "25px", py: "15px",
                                    cursor: "pointer",
                                    backgroundColor: `${router.asPath === '/map' && "#deac7c"}`,
                                }}>
                                    <BsFillPinMapFill style={{
                                        color: `${router.asPath === '/map' ? "black" : "primary"}`,
                                        fontSize: "25px"
                                    }} />
                                    <Typography variant="subtitle1"
                                        color={`${router.asPath === '/map' ? "black" : "primary"}`}
                                        fontWeight={600} px={"6px"}
                                    >
                                        Map
                                    </Typography>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
