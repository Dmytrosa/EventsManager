import Link from "next/link";

import { Typography } from "@mui/material";

function Logo() {
    return (
        <Link href="/">
            <Typography
                variant="h3"
                color='#08c2af'
                fontWeight={700}
                fontFamily={"Trebuchet MS"}
            sx={{
                cursor: "pointer",
                fontSize: { xs: "30px", md: "35px", xl: "40px" }
            }}
            >
            Events Manager
        </Typography>
        </Link >
    );
}

export default Logo;