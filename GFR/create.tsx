import React from "react";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormControl } from "@mui/material";
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import FormHelperText from '@mui/material/FormHelperText';

const Create: React.FC = () => {
    const validationSchema = Yup.object({
        lower: Yup.string().required('Required'),
        upper: Yup.string().required('Required'),
        nv1: Yup.string().required('Required'),
        nv2: Yup.string().required('Required'),
        nv3: Yup.string().required('Required'),
        nv4: Yup.string().required('Required'),
        nv5: Yup.string().required('Required'),
        pv1: Yup.string().required('Required'),
        pv2: Yup.string().required('Required'),
        pv3: Yup.string().required('Required'),
        pv4: Yup.string().required('Required'),
        pv5: Yup.string().required('Required'),
        kv1: Yup.string().required('Required'),
        kv2: Yup.string().required('Required'),
        kv3: Yup.string().required('Required'),
        kv4: Yup.string().required('Required'),
        kv5: Yup.string().required('Required'),
        cv1: Yup.string().required('Required'),
        cv2: Yup.string().required('Required'),
        cv3: Yup.string().required('Required'),
        cv4: Yup.string().required('Required'),
        cv5: Yup.string().required('Required'),
        nv1Unit: Yup.string().required('Required'),
        pv1Unit: Yup.string().required('Required'),
        kv1Unit: Yup.string().required('Required'),
        cv1Unit: Yup.string().required('Required'),
        cropcategory: Yup.string().required('Required'),
        crop: Yup.string().required('Required'),
        cropseason: Yup.string().required('Required'),
        duration: Yup.string().required('Required'),
        irrigated: Yup.string().required('Required'),
        SoilType: Yup.string().required('Required'),
        Time: Yup.string().required('Required'),
        refUnit: Yup.string().required('Required'),
        modeFerti: Yup.string().required('Required'),
        remarks: Yup.string().required('Required'),

    })

    return (
        <div>
            <h2>Crop details</h2>
            <Formik
                initialValues={{
                    lower: '', upper: '', nv1Unit: '', pv1Unit: '', kv1Unit: '', cv1Unit: '',
                    cropcategory: '', crop: '', cropseason: '', duration: '', irrigated: '', SoilType: '', Time: '', refUnit: '',
                    nv1: '', nv2: '', nv3: '', nv4: '', nv5: '',
                    pv1: '', pv2: '', pv3: '', pv4: '', pv5: '',
                    kv1: '', kv2: '', kv3: '', kv4: '', kv5: '',
                    cv1: '', cv2: '', cv3: '', cv4: '', cv5: '',
                    modeFerti: '', remarks: ''
                }}
                validationSchema={validationSchema}
                onSubmit={values => 
                    {
                        let nu: any=[
                            {'N': {
                                'medValue': values.nv1,
                                'unit': values.nv1Unit,
                                Range: {
                                    'vl': values.nv2,
                                    'l': values.nv3,
                                    'h': values.nv4,
                                    'vh': values.nv5
                                }
                            }},
                            {'P': {
                                'medValue': values.pv1,
                                'unit': values.pv1Unit,
                                Range: {
                                    'vl': values.pv2,
                                    'l': values.pv3,
                                    'h': values.pv4,
                                    'vh': values.pv5
                                }
                            }},
                            {'K': {
                                'medValue': values.kv1,
                                'unit': values.kv1Unit,
                                Range: {
                                    'vl': values.kv2,
                                    'l': values.kv3,
                                    'h': values.kv4,
                                    'vh': values.kv5
                                }
                            }},
                            {'FYM': {
                                'medValue': values.cv1,
                                'unit': values.cv1Unit,
                                Range: {
                                    'vl': values.cv2,
                                    'l': values.cv3,
                                    'h': values.cv4,
                                    'vh': values.cv5
                                }
                            }}
                        ]

                        let refYield:any = {'lower': values.lower, 'upper': values.upper, 'unit': values.refUnit}
                        
                        let data:any = Object.assign({}, values)
                        let info={
                            Soiltype: values.SoilType,
                            Time: values.Time,
                            Yield: refYield,
                            crop: values.crop,
                            cropcategory: values.cropcategory,
                            cropseason: values.cropseason,
                            duration: values.duration,
                            msf: values.modeFerti,
                            nutrients: nu,
                            remarks: values.remarks,
                            typeofFarming: values.irrigated
                        }
                        
                        // data=Object.assign(data, {
                        //     Soiltype: values.SoilType,
                        //     Time: values.Time,
                        //     Yield: refYield,
                        //     crop: values.crop,
                        //     cropcategory: values.cropcategory,
                        //     cropseason: values.cropseason,
                        //     duration: values.duration,
                        //     msf: values.modeFerti,
                        //     nutrients: nu,
                        //     remarks: values.remarks,
                        //     typeofFarming: values.irrigated
                        // })
                        console.log('final', info)}}
            >

                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container rowSpacing={1} style={{ padding: 10 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} md={6}><FormControl fullWidth>
                                <InputLabel id='hi'>Select crop cropcategory</InputLabel>
                                <Select label="Select crop cropcategory"
                                    error={touched.cropcategory && errors.cropcategory ? true : false} name='cropcategory' value={values.cropcategory} onChange={handleChange} onBlur={handleBlur}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                {touched.cropcategory && errors.cropcategory ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                            </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6}><FormControl fullWidth>
                                <InputLabel id='h'>Select Crop</InputLabel>
                                <Select label="Select Crop" error={touched.crop && errors.crop ? true : false} name='crop' value={values.crop} onChange={handleChange} onBlur={handleBlur}>
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                                {touched.crop && errors.crop ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                            </FormControl></Grid>



                            <Grid item xs={12} md={6}><FormControl fullWidth>
                                <InputLabel>Select Crop cropSeason</InputLabel>
                                <Select label="Select Crop cropSeason" error={touched.cropseason && errors.cropseason ? true : false} name='cropseason' value={values.cropseason} onChange={handleChange} onBlur={handleBlur}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                                {touched.cropseason && errors.cropseason ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                            </FormControl></Grid>

                            <Grid item xs={12} md={6}><FormControl fullWidth>
                                <InputLabel>Duration</InputLabel>
                                <Select label="Duration" error={touched.duration && errors.duration ? true : false} name='duration' value={values.duration} onChange={handleChange} onBlur={handleBlur}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                                {touched.duration && errors.duration ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                            </FormControl></Grid><br />

                            <Grid item xs={12} md={6}><FormControl fullWidth>
                                <InputLabel>Irrigated/Rainfed</InputLabel>
                                <Select label="Irrigated/Rainfed" error={touched.irrigated && errors.irrigated ? true : false} name='irrigated' value={values.irrigated} onChange={handleChange} onBlur={handleBlur}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                                {touched.irrigated && errors.irrigated ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                            </FormControl></Grid>

                            <Grid item xs={12} md={6}><FormControl fullWidth>
                                <InputLabel>Select Soil Type</InputLabel>
                                <Select label="Select Soil Type" error={touched.SoilType && errors.SoilType ? true : false} name='SoilType' value={values.SoilType} onChange={handleChange} onBlur={handleBlur}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                                {touched.SoilType && errors.SoilType ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                            </FormControl></Grid>

                            <Grid item xs={12} md={6}><FormControl fullWidth>
                                <InputLabel>Select Time of Application</InputLabel>
                                <Select label="Select Time of Application" error={touched.Time && errors.Time ? true : false} name='Time' value={values.Time} onChange={handleChange} onBlur={handleBlur}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                                {touched.Time && errors.Time ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                            </FormControl></Grid><br />

                            <Grid item md={12}>
                                <h2>Reference Yield</h2>
                            </Grid>
                            <Grid item xs={12} md={6}><TextField error={touched.lower && errors.lower ? true : false} fullWidth id="outlined-basic" label="Lower" variant="outlined" name='lower' value={values.lower} onChange={handleChange} onBlur={handleBlur} helperText={touched.lower && errors.lower} /></Grid>

                            <Grid item xs={12} md={6}><TextField error={touched.upper && errors.upper ? true : false} fullWidth id="outlined-basic" label="Upper" variant="outlined" name='upper' value={values.upper} onChange={handleChange} onBlur={handleBlur} helperText={touched.upper && errors.upper} /></Grid>
                            <Grid item xs={12} md={6}><FormControl fullWidth>
                                <InputLabel>Unit</InputLabel>
                                <Select label="RefUnit" error={touched.refUnit && errors.refUnit ? true : false} name='refUnit' value={values.refUnit} onChange={handleChange} onBlur={handleBlur}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                                {touched.refUnit && errors.refUnit ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                            </FormControl></Grid><br /><br />
                        </Grid>

                        <h2>General Recommended Dose</h2>

                        <Grid container rowSpacing={1} style={{ padding: 10 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            
                            
                            <br />

                            <Grid container rowSpacing={1} style={{ padding: 10 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                               <Grid item xs={12} md={6}>
                                  
                                    <TextField id="outlined-basic" label="Nitrogen Medium Value" fullWidth error={touched.nv1 && errors.nv1 ? true : false} variant="outlined" name='nv1' value={values.nv1} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv1 && errors.nv1} />
                                </Grid>
                               <Grid item xs={12} md={6}>
                                    <FormControl sx={{ minWidth: 120, marginLeft: 1 }}>
                                        <InputLabel>Unit</InputLabel>
                                        <Select label="unit" style={{ width: "5.5em" }} error={touched.nv1Unit && errors.nv1Unit ? true : false} name='nv1Unit' value={values.nv1Unit} onChange={handleChange} onBlur={handleBlur}>
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                        </Select>
                                        {touched.nv1Unit && errors.nv1Unit ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                                    </FormControl>
                                </Grid>

                               <Grid item xs={12} md={6}>
                               
                                    <TextField id="outlined-basic" label="K2O Medium Value" fullWidth error={touched.pv1 && errors.pv1 ? true : false} variant="outlined" name='pv1' value={values.pv1} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv1 && errors.pv1} />
                                </Grid>
                               <Grid item xs={12} md={6}>
                                    <FormControl sx={{ minWidth: 120, marginLeft: 1 }}>
                                        <InputLabel>Unit</InputLabel>
                                        <Select label="unit" style={{ width: "5.5em" }} error={touched.pv1Unit && errors.pv1Unit ? true : false} name='pv1Unit' value={values.pv1Unit} onChange={handleChange} onBlur={handleBlur}>
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                        </Select>
                                        {touched.pv1Unit && errors.pv1Unit ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                                    </FormControl>
                                </Grid>

                               <Grid item xs={12} md={6}>
                               
                                    <TextField id="outlined-basic" label="FYM/Compost Medium Value" fullWidth error={touched.kv1 && errors.kv1 ? true : false} variant="outlined" name='kv1' value={values.kv1} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv1 && errors.kv1} />
                                </Grid>
                               <Grid item xs={12} md={6}>
                                    <FormControl sx={{ minWidth: 120, marginLeft: 1 }}>
                                        <InputLabel>Unit</InputLabel>
                                        <Select label="unit" style={{ width: "5.5em" }} error={touched.kv1Unit && errors.kv1Unit ? true : false} name='kv1Unit' value={values.kv1Unit} onChange={handleChange} onBlur={handleBlur}>
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                        </Select>
                                        {touched.kv1Unit && errors.kv1Unit ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                                    </FormControl>
                                </Grid>

                               <Grid item xs={12} md={6}>
                                    <TextField id="outlined-basic" label="Phosphorus Medium Value" fullWidth error={touched.cv1 && errors.cv1 ? true : false} variant="outlined" name='cv1' value={values.cv1} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv1 && errors.cv1} />
                                </Grid>
                               <Grid item xs={12} md={6}>
                                    <FormControl sx={{ minWidth: 120, marginLeft: 1 }}>
                                        <InputLabel>Unit</InputLabel>
                                        <Select label="unit" style={{ width: "5.5em" }} error={touched.cv1Unit && errors.cv1Unit ? true : false} name='cv1Unit' value={values.cv1Unit} onChange={handleChange} onBlur={handleBlur}>
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                        </Select>
                                        {touched.cv1Unit && errors.cv1Unit ? <FormHelperText style={{ color: "red" }}>Required</FormHelperText> : null}
                                    </FormControl>
                                </Grid></Grid>
                            <hr />

                            <Grid container rowSpacing={1} style={{ padding: 10 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {/* <h2>Nitrogen</h2> */}
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth  label="Nitrogen Very Low Value" variant="outlined" error={touched.nv2 && errors.nv2 ? true : false} name='nv2' value={values.nv2} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv2 && errors.nv2} /></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic"fullWidth  label="Nitrogen Low Value" variant="outlined" error={touched.nv3 && errors.nv3 ? true : false} name='nv3' value={values.nv3} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv3 && errors.nv3} /></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic"fullWidth  label="Nitrogen Very High Value" variant="outlined" error={touched.nv4 && errors.nv4 ? true : false} name='nv4' value={values.nv4} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv4 && errors.nv4} /></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic"fullWidth  label="Nitrogen High Value" variant="outlined" error={touched.nv5 && errors.nv5 ? true : false} name='nv5' value={values.nv5} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv5 && errors.nv5} /></Grid>
                               {/* <h2>K2O</h2> */}
                               <Grid item xs={12} md={6}><TextField id="outlined-basic"fullWidth  label="K2O Very Low Value" variant="outlined" error={touched.kv2 && errors.kv2 ? true : false} name='kv2' value={values.kv2} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv2 && errors.kv2} /></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="K2O Low Value" variant="outlined" error={touched.kv3 && errors.kv3 ? true : false} name='kv3' value={values.kv3} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv3 && errors.kv3} /></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="K2O Very High Value" variant="outlined" error={touched.kv4 && errors.kv4 ? true : false} name='kv4' value={values.kv4} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv4 && errors.kv4} /></Grid>
                                <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="K2O High Value" variant="outlined" error={touched.kv5 && errors.kv5 ? true : false} name='kv5' value={values.kv5} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv5 && errors.kv5} /></Grid>

                                {/* <h2>FYM/Compost</h2> */}
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="FYM/Compost Very Low Value" variant="outlined" error={touched.cv2 && errors.cv2 ? true : false} name='cv2' value={values.cv2} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv2 && errors.cv2} /></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="FYM/Compost Low Value" variant="outlined" error={touched.cv3 && errors.cv3 ? true : false} name='cv3' value={values.cv3} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv3 && errors.cv3} /></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="FYM/Compost Very High Value" variant="outlined" error={touched.cv4 && errors.cv4 ? true : false} name='cv4' value={values.cv4} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv4 && errors.cv4} /></Grid>
                                <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="FYM/Compost High Value" variant="outlined" error={touched.cv5 && errors.cv5 ? true : false} name='cv5' value={values.cv5} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv5 && errors.cv5} /></Grid>
                                {/* <h2>Phosphorus</h2> */}
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="Phosphorus Very Low Value" variant="outlined" error={touched.pv2 && errors.pv2 ? true : false} name='pv2' value={values.pv2} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv2 && errors.pv2} /></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="Phosphorus Low Value" variant="outlined" error={touched.pv5 && errors.pv5 ? true : false} name='pv3' value={values.pv3} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv3 && errors.pv3}/></Grid>
                               <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="Phosphorus High Value" variant="outlined" error={touched.kv5 && errors.kv5 ? true : false} name='pv4' value={values.pv4} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv4 && errors.pv4} /></Grid>
                                <Grid item xs={12} md={6}><TextField id="outlined-basic" fullWidth label="Phosphorus Very High Value" variant="outlined" error={touched.cv5 && errors.cv5 ? true : false} name='pv5' value={values.pv5} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv5 && errors.pv5} /></Grid>

                                <Grid item xs={12} md={6}><TextField fullWidth label="Mode and Schedule of fertilizer application" rows="4" error={touched.modeFerti && errors.modeFerti ? true : false} name='modeFerti' value={values.modeFerti} onChange={handleChange} onBlur={handleBlur} helperText={touched.modeFerti && errors.modeFerti} /></Grid><br />

                                <Grid item xs={12} md={6}><TextField fullWidth label="Remarks/Tips" rows="4" error={touched.remarks && errors.remarks ? true : false} name='remarks' value={values.remarks} onChange={handleChange} onBlur={handleBlur} helperText={touched.remarks && errors.remarks} /></Grid><br />

                                <Grid container justifyContent="center" style={{marginTop:'1em'}}>
                                    <Button variant="contained" type='submit'>Submit</Button></Grid>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Create