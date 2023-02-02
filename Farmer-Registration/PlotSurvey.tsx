import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { Formik, Form, Field } from "formik";
import { Alert, Autocomplete, Button, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Radio, RadioGroup, Select, InputAdornment,  Snackbar, Stack } from '@mui/material';
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
        soilColor: Yup.string().required('Required'),
        soilType: Yup.string().required('Required'),
        area: Yup.string().required('Required'),
        currCrop: Yup.string().required('Required'),
        qrCode: Yup.string().required('Required'),
        plotImg: Yup.string().required('Required'),
        prevCrop: Yup.string().required('Required'),
        stoniness: Yup.string().required('Required'),
        landslopping: Yup.string().required('Required'),
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
        // prevFerti: Yup.string().required('Required')
    })
  
    return(
        <>
       <Box sx={{ width: '100%'}}>
        <h1>Farmer Registration</h1>
             
    <Formik 
    initialValues={{
        location: '',
        surveyNum: '',
        soilColor: '',
        soilType: '',
        area: '',
        currCrop: '',
        qrCode: '',
        plotImg: '',
        prevCrop: '',
        stoniness: '',
        landslopping: '',
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
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="surveyNum"
      onChange={(e:any)=>{
        formik.setFieldValue("surveyNum",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.surveyNum}
      helperText={formik.errors.surveyNum}
      error={ formik.errors.surveyNum ? true : false}
      label="Survey Number" variant="outlined"
    />
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="SoilColor">Soil Colour</InputLabel>
        <Select
            labelId="SoilColor"
            id="soilColor"
            value={formik.values.soilColor}
            label="SoilColor"
            onChange={(e:any)=>{
                formik.setFieldValue("soilColor",e.target.value)
            }}
        >
        <MenuItem value={1}>colour1</MenuItem>
        <MenuItem value={0}>colour2</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="SoilType">Soil Type</InputLabel>
        <Select
            labelId="SoilType"
            id="soilType"
            value={formik.values.soilType}
            label="SoilType"
            onChange={(e:any)=>{
                formik.setFieldValue("soilType",e.target.value)
            }}
        >
        <MenuItem value={1}>SoilType 1</MenuItem>
        <MenuItem value={0}>SoilType 2</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="area"
      onChange={(e:any)=>{
        formik.setFieldValue("area",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.area}
      helperText={formik.errors.area}
      error={ formik.errors.area ? true : false}
       label="Area" variant="outlined"
    />
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="CurrCrop">Current Crop</InputLabel>
        <Select
            labelId="CurrCrop"
            id="currCrop"
            value={formik.values.currCrop}
            label="currCrop"
            onChange={(e:any)=>{
                formik.setFieldValue("currCrop",e.target.value)
            }}
        >
        <MenuItem value={1}>Current Crop 1</MenuItem>
        <MenuItem value={0}>Current Crop 2</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="qrCode"
      onChange={(e:any)=>{
        formik.setFieldValue("qrCode",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.qrCode}
      helperText={formik.errors.qrCode}
      error={ formik.errors.qrCode ? true : false}
      label="QR Code" variant="outlined"
    />
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="plotImg"
      onChange={(e:any)=>{
        formik.setFieldValue("plotImg",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.plotImg}
      helperText={formik.errors.plotImg}
      error={ formik.errors.plotImg ? true : false}
      label="Plot Image" variant="outlined"
    />
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="PrevCrop">Previous Crop</InputLabel>
        <Select
            labelId="PrevCrop"
            id="prevCrop"
            value={formik.values.prevCrop}
            label="prevCrop"
            onChange={(e:any)=>{
                formik.setFieldValue("prevCrop",e.target.value)
            }}
        >
        <MenuItem value={1}>Previous Crop 1</MenuItem>
        <MenuItem value={0}>Previous Crop 2</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl>
      <FormLabel id="demo">Stoniness</FormLabel>
      <RadioGroup
        row
        name="stoniness"
        value={formik.values.stoniness}
        onChange={(e:any)=>{
          formik.setFieldValue("stoniness",e.target.value)
      }}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
      </RadioGroup>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl>
      <FormLabel id="demo">Land Sloping</FormLabel>
      <RadioGroup
        row
        name="landslopping"
        value={formik.values.landslopping}
        onChange={(e:any)=>{
          formik.setFieldValue("landslopping",e.target.value)
      }}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
      </RadioGroup>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="Drainage">Drainage</InputLabel>
        <Select
            labelId="Drainage"
            id="drainage"
            value={formik.values.drainage}
            label="drainage"
            onChange={(e:any)=>{
                formik.setFieldValue("drainage",e.target.value)
            }}
        >
        <MenuItem value={1}>Drainage 1</MenuItem>
        <MenuItem value={0}>Drainage 2</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="WaterSource">Water Source</InputLabel>
        <Select
            labelId="WaterSource"
            id="waterSource"
            value={formik.values.waterSource}
            label="waterSource"
            onChange={(e:any)=>{
                formik.setFieldValue("waterSource",e.target.value)
            }}
        >
        <MenuItem value={1}>Water Source 1</MenuItem>
        <MenuItem value={0}>Water Source 2</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="WaterCap">Water Source Capacity</InputLabel>
        <Select
            labelId="WaterCap"
            id="waterCap"
            value={formik.values.waterCap}
            label="waterCap"
            onChange={(e:any)=>{
                formik.setFieldValue("waterCap",e.target.value)
            }}
        >
        <MenuItem value={1}>Water Capacity 1</MenuItem>
        <MenuItem value={0}>Water Capacity 2</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl>
      <FormLabel id="demo">Electricity Connection At Farm</FormLabel>
      <RadioGroup
        row
        name="elecFarm"
        value={formik.values.elecFarm}
        onChange={(e:any)=>{
          formik.setFieldValue("elecFarm",e.target.value)
      }}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl>
      <FormLabel id="demo">Electricity Phase</FormLabel>
      <RadioGroup
        row
        name="elecPhase"
        value={formik.values.elecPhase}
        onChange={(e:any)=>{
          formik.setFieldValue("elecPhase",e.target.value)
      }}
      >
        <FormControlLabel value="1 Phase" control={<Radio />} label="1 Phase" />
        <FormControlLabel value="3 Phase" control={<Radio />} label="3 Phase" />
      </RadioGroup>
    </FormControl>
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl>
      <FormLabel id="demo">Irrigation Pump</FormLabel>
      <RadioGroup
        row
        name="irrigPump"
        value={formik.values.irrigPump}
        onChange={(e:any)=>{
          formik.setFieldValue("irrigPump",e.target.value)
      }}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="number"
      name="pumpSize"
      onChange={(e:any)=>{
        formik.setFieldValue("pumpSize",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.pumpSize}
      helperText={formik.errors.pumpSize}
      error={ formik.errors.pumpSize ? true : false}
      label="Pump Size in HP" variant="outlined"
    />
    </Grid>

    <Grid  item xs={12} md={6}>
    <FormControl fullWidth>
    <InputLabel id="DtConnec">DT Connection</InputLabel>
        <Select
            labelId="DtConnec"
            id="dtConnec"
            value={formik.values.dtConnec}
            label="dtConnec"
            onChange={(e:any)=>{
                formik.setFieldValue("dtConnec",e.target.value)
            }}
        >
        <MenuItem value={1}>DT Connection 1</MenuItem>
        <MenuItem value={0}>DT Connection 2</MenuItem>
        </Select>
    </FormControl>
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="number"
      name="prevYield"
      onChange={(e:any)=>{
        formik.setFieldValue("prevYield",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.prevYield}
      helperText={formik.errors.prevYield}
      error={ formik.errors.prevYield ? true : false}
      label="Previous Yield" variant="outlined"
    />
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="targetYield"
      onChange={(e:any)=>{
        formik.setFieldValue("targetYield",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.targetYield}
      helperText={formik.errors.targetYield}
      error={ formik.errors.targetYield ? true : false}
      label="Target Yield" variant="outlined"
    />
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="number"
      name="yieldPrice"
      onChange={(e:any)=>{
        formik.setFieldValue("yieldPrice",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.yieldPrice}
      helperText={formik.errors.yieldPrice}
      error={ formik.errors.yieldPrice ? true : false}
      label="Previous yield price(INR/Quintal) " variant="outlined"
      InputProps={{
        startAdornment: 
        <InputAdornment position="start">₹</InputAdornment>,
    }}
    />
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="text"
      name="manureQuantity"
      onChange={(e:any)=>{
        formik.setFieldValue("manureQuantity",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.manureQuantity}
      helperText={formik.errors.manureQuantity}
      error={ formik.errors.manureQuantity ? true : false}
      label="How many trollies of manure were added to the plot in the previous season? " variant="outlined"
    />
    </Grid>

    <Grid item xs={12} md={6}>
    <Field
      fullWidth
      component={TextField}
      type="number"
      name="prevFerti"
      onChange={(e:any)=>{
        formik.setFieldValue("prevFerti",e.target.value)
      }}
      onBlur={formik.handleBlur}
      value={formik.values.prevFerti}
      helperText={formik.errors.prevFerti}
      error={ formik.errors.prevFerti ? true : false}
      label="Fertilizer applied in previous season(Optional)" variant="outlined"
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

export default PlotSurvey