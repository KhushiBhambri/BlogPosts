import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({PostperPage,setppp}) {

  const handleChange = (event) => {
    setppp(event.target.value);
  };

  return (
    <div className="dropbxi">
      <FormControl sx={{ m: 1, minWidth: 80 }}  className="dropbxii">
        <InputLabel id="demo-simple-select-autowidth-label" style={{textAlign:"center"}}>Posts / Page</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={PostperPage}
          onChange={handleChange}
          autoWidth
          label="PostperPage"
          className="dropbx"
        >
          {/* <MenuItem value=""><em>None</em></MenuItem> */}
          {/* <MenuItem value={5}>5/Page</MenuItem> */}
          <MenuItem value={10}>10/Page</MenuItem>
          <MenuItem value={15}>15/Page</MenuItem>
          <MenuItem value={20}>20/Page</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}