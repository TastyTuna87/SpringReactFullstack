import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

export default function Student() {
    const[name, setName] = useState("");
    const[address, setAddress] = useState("");
    const[students, setStudents] = useState([]);
    const paperStyle = {padding: "50px 20px", width: 600, margin:"20px auto"}
    const handleClick = (e)=>{
        const student = {name, address};
        console.log(student);
        fetch("http://localhost:8080/student/add",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body:JSON.stringify(student)
        }).then(() => {
            console.log("New student added")
        })
    };
    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);       
        }
      )
      },[students])

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >   
    <Paper elevation={3} style={paperStyle} >
        <h1 ><u>Add Student</u></h1>
        <div style = {{padding:"5px"}} >
        <TextField id="standard-basic" label="Student Name" variant="standard"
        value={name}
        onChange = {(e) => setName(e.target.value)}
        />
        </div>
        <div style = {{padding:"5px"}}>
        <TextField id="standard-basic" label="Student Address" variant="standard" 
        value={address}
        onChange = {(e) => setAddress(e.target.value)}
        />
        </div>
        <div style = {{paddingTop:"10px"}}>
        <Button variant="contained" onClick={handleClick}>Submit</Button>
        </div>
        <div style = {{padding:"20px auto"}}>
        {name}
        {address}
        </div>
        </Paper>
        <h1>Students</h1>

    <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>
      ))
}


    </Paper>
    </Box>
    
  );
}
