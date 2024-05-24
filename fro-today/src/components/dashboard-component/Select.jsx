import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Select } from "@mui/material";
import {MenuItem} from "@mui/material";

const SelectItem = ({title='choose role',wantStanderd=true,required,items,value,setValue,MinWidth=180,DefaultValue}) => {

    const handleChange = (event) => {
            setValue(event.target.value);
      };
    
    return(
        <FormControl variant={wantStanderd&&"standard"} required={required} sx={{minWidth:MinWidth }}>
            <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={value}
                defaultValue={DefaultValue}
                onChange={handleChange}
                label="choose role"
            >
            
            {items.map(({value,name})=><MenuItem value={value}>{name}</MenuItem>)}
            
            </Select>
        </FormControl>
    )
} 

export default SelectItem;