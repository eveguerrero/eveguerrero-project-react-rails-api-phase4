import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';

function FilterBar({ onCategoryChange, selectedCategory, onGenderChange, selectedGender, setSelectedCauses}) {

    function handleCategoryChange(event) {
        onCategoryChange(event.target.value)
    }

    function handleGenderChange(event) {
        onGenderChange(event.target.value)
    }

    function onCauseToggle(cause) {
        setSelectedCauses(currentCauses => {
            if (currentCauses.includes(cause)) {
                return currentCauses.filter(c => c !== cause)
            } else {
            return [...currentCauses, cause]}
        })
    }

    return (
        <div>
            <h1>Filter by:</h1>
            {/* <FormControl>
                <FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="men" control={<Radio checked={selectedGender === "Men"} onChange={handleGenderChange}/>} label="Men" />
                    <FormControlLabel value="women" control={<Radio checked={selectedGender === "Women"} onChange={handleGenderChange}/>} label="Women" />
                </RadioGroup>
            </FormControl> */}
            <form>
                <p>Gender</p>
                <div>
                    <input
                    type="radio"
                    value="Men"
                    checked={selectedGender === 'Men'}
                    onChange={handleGenderChange}
                    /> Men
                </div>
                <div>
                    <input
                    type="radio"
                    value="Women"
                    checked={selectedGender === 'Women'}
                    onChange={handleGenderChange}
                    /> Women
                </div>
            </form>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        label="Age"
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                    >
                    <MenuItem value="Bags">Bags</MenuItem>
                    <MenuItem value="Shoes">Shoes</MenuItem>
                    <MenuItem value="Pants">Pants</MenuItem>
                    <MenuItem value="Tops">Tops</MenuItem>
                </Select>
                </FormControl>

            <FormGroup>
                <FormLabel id="checkbox-group-label">Causes</FormLabel>
                <FormControlLabel control={<Checkbox onChange={() => onCauseToggle("Vegan")}/>} label="Vegan" />
                <FormControlLabel control={<Checkbox onChange={() => onCauseToggle("Low carbon footpring")}/>} label="Low carbon footprint" />
                <FormControlLabel control={<Checkbox onChange={() => onCauseToggle("Made with recycled materials")}/>} label="Made with recycled materials" />
                <FormControlLabel control={<Checkbox onChange={() => onCauseToggle("Made in the USA")}/>} label="Made in the USA" />
                <FormControlLabel control={<Checkbox onChange={() => onCauseToggle("Fair labor practices")}/>} label="Fair labor practices" />
                <FormControlLabel control={<Checkbox onChange={() => onCauseToggle("Charitable donations")}/>} label="Charitable donations" />
                <FormControlLabel control={<Checkbox onChange={() => onCauseToggle("Women-owned")}/>} label="Women-owned" />
                <FormControlLabel control={<Checkbox onChange={() => onCauseToggle("Minority-owned")}/>} label="Minority-owned" />
                <div>
      </div>
            </FormGroup>
        </div>
    )
};

export default FilterBar;