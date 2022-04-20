import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function FilterBar() {

    return (
        <div>
            <h1>Filter items by:</h1>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="men" control={<Radio />} label="Men" />
                    <FormControlLabel value="women" control={<Radio />} label="Women" />
                </RadioGroup>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Item Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Age"
                        onChange={handleChange}
                    >
                    <MenuItem value={"Bags"}>Bags</MenuItem>
                    <MenuItem value={"Shoes"}>Shoes</MenuItem>
                    <MenuItem value={"Pants"}>Pants</MenuItem>
                    <MenuItem value={"Tops"}>Tops</MenuItem>
                </Select>
                </FormControl>

            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Vegan" />
                <FormControlLabel control={<Checkbox />} label="Low carbon footprint" />
                <FormControlLabel control={<Checkbox />} label="Made with recycled materials" />
                <FormControlLabel control={<Checkbox />} label="Made in the USA" />
                <FormControlLabel control={<Checkbox />} label="Fair labor practices" />
                <FormControlLabel control={<Checkbox />} label="Charitable donations" />
                <FormControlLabel control={<Checkbox />} label="Women-owned" />
                <FormControlLabel control={<Checkbox />} label="Minority-owned" />
            </FormGroup>
        </div>
    )
};

export default FilterBar;