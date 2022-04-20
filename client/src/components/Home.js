import React from "react";
import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
import ItemList from "./ItemList";
import Grid from '@mui/material/Grid';

function Home({items}) {

    return (
        <div>
            {/* <NavBar /> */}
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>
                    <FilterBar />
                </Grid>
                <Grid item xs={10} md={10}>
                    <ItemList items={items}/>
                </Grid>
            </Grid>
            {/* <FilterBar />
            <ItemList items={items}/> */}
        </div>
    )
};

export default Home;