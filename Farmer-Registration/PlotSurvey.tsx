import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field } from "formik";
import { Alert, Autocomplete, Button, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Radio, RadioGroup, Select, Snackbar, Stack } from '@mui/material';
import * as Yup from 'yup';
import { redirect, useNavigate,useParams } from "react-router-dom";
// import { Country, State, City } from "country-state-city";

// import Createfarmertraining from "../../graphql/mutations/CreateFarmerTraining";
// import {CreateFarmerTraining,CreateFarmerTrainingVariables} from "../../graphql/mutations/__generated__/CreateFarmerTraining"

// import { ApolloError, useMutation, useQuery } from "@apollo/client";


const PlotSurvey:React.FC=()=>{

    const history=useNavigate()
    const validationSchema=Yup.object({
        location: Yup.string().required('Required'),
        surveyNum: Yup.string().required('Required'),
        soilClr: Yup.string().required('Required'),
        soilType: Yup.string().required('Required'),
        area: Yup.string().required('Required'),
        curCrop: Yup.string().required('Required'),
        qrCode: Yup.string().required('Required'),
        plotImg: Yup.string().required('Required'),
        prevCrop: Yup.string().required('Required'),
        stoniness: Yup.string().required('Required'),
        slopping: Yup.string().required('Required'),
        drainage: Yup.string().required('Required'),
        waterSource: Yup.string().required('Required'),
        waterCap: Yup.string().required('Required'),
        elecFarm: Yup.string().required('Required'),
        elecPhase: Yup.string().required('Required'),
        irrigPump: Yup.string().required('Required'),
        pumpSize: Yup.string().required('Required'),
        dtConnec: Yup.string().required('Required'),
        prevYield: Yup.string().required('Required'),
        targetYield: Yup.string().required('Required'),
        yieldPrice: Yup.string().required('Required'),
        manureQuantity: Yup.string().required('Required'),
        prevFerti: Yup.string().required('Required')
    })
  
    return(
        <>
       <Box sx={{ width: '100%'}}>
        <h1>Farmer Registration</h1>
             
    <Formik 
    initialValues={{
        location: '',Yup.string().required('Required')
        surveyNum: '',
        soilClr: '',
        soilType: '',
        area: '',
        curCrop: '',
        qrCode: '',
        plotImg: '',
        prevCrop: '',
        stoniness: '',
        slopping: '',
        drainage: '',
        waterSource: '',
        waterCap: '',
        elecFarm: '',
        elecPhase: '',
        irrigPump: '',
        pumpSize: '',
        dtConnec: '',
        prevYield: '',
        targetYield: '',
        yieldPrice: '',
        manureQuantity: '',
        prevFerti: ''
    }}
   
    // validationSchema={validationSchema}
    onSubmit={values => console.log('final',values)}
    >
     {formik => (
         <Form onSubmit={formik.handleSubmit} style={{width:"100%"}}>
     <Grid container rowSpacing={1} style={{padding:10 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    
    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="name"
      onChange={(e:any)=>{
        formik.setFieldValue("name",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.name}
      helperText={formik.errors.name}
      error={ formik.errors.name ? true : false}
    label="Name" variant="outlined"
    />
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="phNumber"
      onChange={(e:any)=>{
        formik.setFieldValue("phNumber",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.phNumber}
      helperText={formik.errors.phNumber}
      error={ formik.errors.phNumber ? true : false}
      label="Phone Number*" variant="outlined"
    />
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="email"
      onChange={(e:any)=>{
        formik.setFieldValue("email",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      helperText={formik.errors.email}
      error={ formik.errors.email ? true : false}
       label="Email" variant="outlined"
    />
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="adhaar"
      onChange={(e:any)=>{
        formik.setFieldValue("adhaar",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.adhaar}
      helperText={formik.errors.adhaar}
      error={ formik.errors.adhaar ? true : false}
      label="Adhaar" variant="outlined"
    />
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="Language">Language</InputLabel>
        <Select
            labelId="Language"
            id="language"
            value={formik.values.language}
            label="Language"
            onChange={(e:any)=>{
                formik.setFieldValue("language",e.target.value)
            }}
        >
        <MenuItem value={1}>English</MenuItem>
        <MenuItem value={0}>Kannada</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    {/* <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="location"
      onChange={(e:any)=>{
        formik.setFieldValue("location",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.location}
      helperText={formik.errors.location}
      error={ formik.errors.location ? true : false}
      label="Location" variant="outlined"
    />
    </Grid> */}

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="address"
      onChange={(e:any)=>{
        formik.setFieldValue("address",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.address}
      helperText={formik.errors.address}
      error={ formik.errors.address ? true : false}
      label="Address" variant="outlined"
    />
    </Grid>
</Grid>


    <Grid>
    <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:10}}>
    <Button color='primary'  variant="contained" type="submit" disabled={formik.isSubmitting || !formik.dirty}>Submit</Button>
    </div>
    </Grid>
    </Form>

    )}
    </Formik> 
    
    {/* <Snackbar
            style={{ height: "100%" }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={msgOpen}
            autoHideDuration={1000}>
            <Alert onClose={handleClose} severity={msgstatus}>
              {msgalter}
            </Alert>
          </Snackbar> */}
</Box>
        </>
    )
}

export default FarmerRegistration