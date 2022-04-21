import React from "react";
import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
import ItemList from "./ItemList";
import Grid from '@mui/material/Grid';

function Home({itemsToDisplay, onCategoryChange, selectedCategory, onGenderChange, selectedGender, setSelectedCauses, causes}) {

    return (
        <div>
            {/* <NavBar /> */}
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>
                    <FilterBar 
                        onCategoryChange={onCategoryChange} 
                        selectedCategory={selectedCategory} 
                        onGenderChange={onGenderChange} 
                        selectedGender={selectedGender} 
                        setSelectedCauses={setSelectedCauses}
                        causes={causes}
                    />
                </Grid>
                <Grid item xs={10} md={10}>
                    <ItemList itemsToDisplay={itemsToDisplay}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Home;