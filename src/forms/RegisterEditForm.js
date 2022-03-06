import React from 'react';
import Button from '../components/Button';
import * as Yup from "yup";
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';

const FormSchema = Yup.object(
    {
        email: Yup.string().email("Must be a valid email format").required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        password: Yup.string().required()
    }
)

export default function RegisterForm({user}) {

    const initialValues ={
        email: user?.email ?? '',
        firstName: user?.firstName ?? '',
        lastName: user?.lastName ?? '',
        password: ""
    }
    
    const handleSubmit=(values, resetForm)=>{
        if (!user){
            console.log('Registering user')
        }else{
            console.log('Editing user profile')
        }
        console.log(values)
        resetForm(initialValues);
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize: true
    })

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="email"
            name="email"
            type="text"
            fullWidth
            sx={{mb:2, mt:2}}
            label="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
            id="firstName"
            name="firstName"
            type="text"
            fullWidth
            sx={{mb:2, mt:2}}
            label="firstName"
            placeholder="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
            id="lastName"
            name="lastName"
            type="text"
            fullWidth
            sx={{mb:2, mt:2}}
            label="lastName"
            placeholder="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
            id="password"
            name="password"
            type="password"
            fullWidth
            sx={{mb:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" sx={{width:"100%"}}>Submit</Button>

    </form>
  )
}