import * as React from "react"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const EditorNavbar = (props) => {
    
    const handleChangeFontSize = (event) => {
        props.setFontSize(event.target.value);
    };
    const handleChangeLanguage = (event) => {
        props.setLanguage(event.target.value);
    };
    const handleResetClick = (event) => {
        event.preventDefault();
        props.setReset(true);
    }

    return (
        //ask for language only options are java python and c++
        <div className="editor-navbar">
            <span className="iconhover" onClick={handleResetClick}>
            <RestartAltIcon />
            </span>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <Select
                    value={props.fontSize}
                    onChange={handleChangeFontSize}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value={15}>
                    <em>15px</em>
                </MenuItem>
                <MenuItem value={17}>17px</MenuItem>
                <MenuItem value={20}>20px</MenuItem>
                <MenuItem value={30}>30px</MenuItem>
                </Select>
                
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <Select
                    value={props.language}
                    onChange={handleChangeLanguage}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value="cpp">
                    <em>CPP</em>
                </MenuItem>
                <MenuItem value="java">Java</MenuItem>
                <MenuItem value="py">Python</MenuItem>
                <MenuItem value="Javascript">Javascript</MenuItem>
                </Select>
                
            </FormControl>
            
        </div>
    )   
}

export default EditorNavbar;