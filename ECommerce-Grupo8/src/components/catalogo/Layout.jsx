import {Grid} from "@mui/material";
import SidebarFilter from "./SidebarFilter.jsx";


const Layout = () => {
    return(
        <Grid container>
            <Grid item xs={2} sm={12} md={2} >
                <SidebarFilter></SidebarFilter>
            </Grid>
        </Grid>
    );
}


export default Layout;