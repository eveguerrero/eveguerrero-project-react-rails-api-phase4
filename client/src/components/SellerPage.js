import React from "react";
import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
import SellerItemList from "./SellerItemList";
import Grid from '@mui/material/Grid';

function SellerPage({sellerItems, onCategoryChange, selectedCategory, onGenderChange, selectedGender, setSelectedCauses, causes, setItemToEdit}) {

    return (
        <div>
            {/* <NavBar /> */}
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>

                    <FilterBar onCategoryChange={onCategoryChange} 
                    selectedCategory={selectedCategory} 
                    onGenderChange={onGenderChange} 
                    selectedGender={selectedGender} 
                    setSelectedCauses={setSelectedCauses}
                    causes={causes}
                    />

                </Grid>
                <Grid item xs={10} md={10}>
                    <SellerItemList sellerItems={sellerItems} causes={causes} setItemToEdit={setItemToEdit} />
                </Grid>
            </Grid>
        </div>
    )
};

export default SellerPage;