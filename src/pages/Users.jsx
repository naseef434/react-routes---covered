import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import "./users.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

export default function Users() {
  const [searchparams, setSearchparams] = useSearchParams();
  const navigate = useNavigate()
  const [age, setAge] = React.useState("");
  console.log("age : ", age);
  
  const handleChange = (event) => {
    setAge(event.target.value);
    setSearchparams({
      class: event.target.value,
      hello:"naseef"
    });
  }; 

  const [data, setdata] = useState([]);
  const cls = searchparams.get("class");
 
  useEffect(() => {
    fetchApi();
  }, [cls]);

  const fetchApi = async () => {
    const results = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setdata(results?.data);
  };

  return (
    <div className="page users">
      {/* <div className="options">
        <div>select id</div>
        <div>
          <select>
            {data?.map((item)=>(
            

            <option value={item.id}>{item.id}</option>
            ))}
          </select>
        </div>
      </div> */}
      <Box sx={{ maxWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {data?.map((val) => (
              <MenuItem value={val.id}>{val.id}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {data
        ?.filter((itm) => {
          if (!cls) {
            return true;
          }
          return cls == itm.id;
        })
        .map((itm, key) => (
          <div className="users-item" onClick={()=>{navigate(`/details/${itm.id}`,{
            state : {
              data :itm, 
            }
          })}}>
            <div className="title">
              {itm.name}
            </div>
            <div className="discription">{itm.website}</div>
            <div className="discription">{itm.email}</div>
            <div className="discription">{itm.id}</div>
          </div>
        ))}
    </div>
  );
}
