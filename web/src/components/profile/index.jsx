import axios from 'axios';

import { Formik, Field, Form, useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { baseUrl } from "./../../core"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
});




function Profile() {
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            name: '',
        },
        onSubmit: function (values) {
            
            axios.post(`${baseUrl}/api/v1/profile`, {
                name: values.name
            })
                .then((res) => {
                    console.log("res: ", res.data);
                })
        }
    });
    return (
        <div style={{ margin: "2rem" }}>
            <h1>WellCome To Head-Office</h1>


            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Users Record
        </Typography>
        <Typography variant="body2" color="text.secondary">
        User Name:
        <br></br>
        User CNIC: 
        <br></br>
        User Token#:
        <br></br>
        User Family Members:
        <br></br>
        Daily/one-time/monthly:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accept</Button>
        <Button size="small">Delete</Button>
        <Button size="small">Panding</Button>
      </CardActions>
    </Card>
           

        </div>
    );
}

export default Profile;