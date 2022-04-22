import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function MollyItemForm ({ item, causes, user, onSubmitItem, onDeleteItem, setErrors }) {
    //(customers.Hannah || {}).email
    console.log("item in form:",item)
    let oldCauses = [];
    if (item.causes) oldCauses = item.causes.map((cause)=>cause.name);

    const [itemData, setItemData] = React.useState(item)
    const [stringCauses, setStringCauses] = React.useState(oldCauses)

    function handleCauseChange (
        event: React.MouseEvent<HTMLElement>,
        newStringCauses: string[],
    ) {
        setStringCauses(newStringCauses);
    }

  const handleChange = (prop: keyOf) => (event) => {
    setItemData({...itemData, [prop]: event.target.value})
    console.log(prop, event.target.value)
  };

//stack overflow code snippet
// handleSelectChange = ({target: {name,value}}) => { 
//     console.log(name);
//     console.log(value); 
//     this.setState({ 
//       serviceRequest: { 
//         selectedService: value 
//       } 
//     }); 
//   }

    function handleDeleteClick() {
        fetch(`/items/${item.id}`, {
            method: "DELETE",
          }).then((r) => {
            if (r.ok) {
                onDeleteItem(item);
            } else {
                r.json().then((err) => setErrors(err.errors));
              }
          });
    }

    function addNewItemCauses(newCauses,itemData) {
        newCauses.forEach((cause)=>{
            
            console.log("new caauses",cause)
            fetch(`/item_causes`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "cause_id": cause.id,
                    "item_id": itemData.id
                })
            }).then((r) => {
                if (r.ok) {
                console.log("r:", r)
                r.json().then((item) => {
                    console.log("added causes item",item)
                    setItemData(item)
                })
                } else {
                r.json().then((err) => setErrors(err.errors));
                }
            })
        })
    }

    function delOldItemCauses(delCauses,itemData) {
        delCauses.forEach((cause)=>{
            console.log("old causes",cause)
            fetch(`/item_causes/${cause.id}/${itemData.id}`, {
                method: "DELETE",
              }).then((r) => {
                if (r.ok) {
                    r.json().then((item) => {
                        console.log("item in delete",item)
                        setItemData(item)
                    })
                } else {
                    r.json().then((err) => setErrors(err.errors));
                  }
              });
        })
    }

    function patchItem(itemData,newCauses,delCauses) {
        fetch(`/items/${itemData.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData)
        }).then((r) => {
            if (r.ok) {
                r.json().then((newItem) => {
                    setItemData(newItem)
                    if (newCauses.length > 0) {
                        addNewItemCauses(newCauses,itemData)
                    }
                    if (delCauses.length > 0) {
                        delOldItemCauses(delCauses,itemData)
                    }
                })

            } else {
                r.json().then((err) => setErrors(err.errors));
                }
        });
    }
    function postItem(itemData,newCauses,delCauses) {
        itemData.user_id = user.id;
        fetch(`/items`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData)
        }).then((r) => {
            if (r.ok) {
            console.log("r:", r)
            r.json().then((newItem) => {
                setItemData(newItem)
                if (newCauses.length > 0) {
                    addNewItemCauses(newCauses,newItem)
                }
            })
            } else {
            r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        let actionVerb = ""
        const newCauseStrings = stringCauses.filter((cause) => !oldCauses.includes(cause))
        const delCauseStrings = oldCauses.filter((cause) => !stringCauses.includes(cause))
        const newCauses = newCauseStrings.map((name) => causes.find((cause) => cause.name === name) )
        const delCauses = delCauseStrings.map((name) => causes.find((cause) => cause.name === name) )
        if (itemData.id) {
            actionVerb="patch"
            patchItem(itemData,newCauses,delCauses)
        } else {
            actionVerb="post"
            postItem(itemData,newCauses,delCauses)
        }
        onSubmitItem(itemData,actionVerb)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
            required
            id="name"
            label="Name"
            defaultValue={itemData.name}
            sx={{ m: 1, width: '20ch' }}
            onChange={handleChange("name")}
            />
            <TextField
            required
            id="image"
            label="imageURL"
            defaultValue={itemData.image}
            sx={{ m: 1, width: '25ch' }}
            onChange={handleChange("image")}
            />
            <TextField
            required
            id="price"
            label="Price"
            defaultValue={itemData.price}
            sx={{ m: 1, width: '10ch' }}
            InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            onChange={handleChange("price")}
            />
            <FormControl sx={{ m: 1, width: '20ch' }}>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={itemData.gender}
                    onChange={handleChange("gender")}
                >
                    <FormControlLabel value="Women" control={<Radio />} label="Women" />
                    <FormControlLabel value="Men" control={<Radio />} label="Men" />
                </RadioGroup>
            </FormControl>
            <FormControl sx={{ m: 1, width: '15ch' }}>
                <InputLabel id="category-label">Category:</InputLabel>
                <Select
                labelId="category"
                id="category"
                value={itemData.category}
                label="category-label"
                onChange={handleChange("category")}
                >
                <MenuItem value="Bags">Bags</MenuItem>
                <MenuItem value="Pants">Pants</MenuItem>
                <MenuItem value="Shoes">Shoes</MenuItem>
                <MenuItem value="Tops">Tops</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: '15ch' }}>
                <InputLabel id="condition-label">Condition:</InputLabel>
                <Select
                labelId="condition-label"
                id="condition"
                value={itemData.condition}
                label="condition-label"
                onChange={handleChange("condition")}
                >
                <MenuItem value="new">New</MenuItem>
                <MenuItem value="like-new">Like New</MenuItem>
                <MenuItem value="good">good</MenuItem>
                <MenuItem value="fair">fair</MenuItem>
                </Select>
            </FormControl>
            <TextField
            id="description"
            label="Description:"
            multiline
            rows={4}
            sx={{ m: 1, width: '20ch' }}
            defaultValue={itemData.description}
            onChange={handleChange("description")}
            />
            {/* <InputLabel varient="h4">Causes:</Typography> */}
            <InputLabel htmlFor='causes'>Causes:</InputLabel>
            <ToggleButtonGroup id="causes" color="primary" value={stringCauses} onChange={handleCauseChange} >
                {causes.map((cause) => (
                    <ToggleButton key={cause.id} value={cause.name} sx={{ m: 1, width: '15ch' }}>{cause.name}</ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Button type="submit" variant="outlined">Submit</Button>
            <Button varient="outlined" onClick={handleDeleteClick}>Delete</Button>
        </form>
    )
}