import * as React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CollegeFormCompo = () => {
    const navigate = useNavigate();
    const [collegeData, setCollegeData] = React.useState({
        fullName: '',
        acronym: '',
        email: '',
        password: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setCollegeData({ ...collegeData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(collegeData);
        const data={
            "name":collegeData.fullName,
            "email":collegeData.email,
            "password":collegeData.password,
            "collegeacryn":collegeData.acronym
        };
        fetch('http://localhost:8001/api/collegeregister',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            navigate('/daiictpc')
        })
      };

    return(
        <div className='listing-container card-shadow formcontroler'>
        <form onSubmit={handleSubmit} className='flex-center-center'>
            <h1>College Registration</h1>
            <TextField
                label="College Full Name *"
                name="fullName"
                value={collegeData.fullName}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Acronym"
                name="acronym"
                value={collegeData.acronym}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email ID"
                name="email"
                value={collegeData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={collegeData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
        </div>
    );
}

export default CollegeFormCompo;