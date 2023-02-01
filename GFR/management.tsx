import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
const Div=styled(Box)(({theme})=>({
    marginTop:10,
    padding:10
    }))




const Management:React.FC=()=>{
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    
    const columns: GridColDef[] = [
  
        { field: 'category_name', headerName: 'Category Name', width: 150 },
        {
          field: 'crop_type',
          headerName: 'Crop',
          width: 150,
          editable: false,
        },
        {
          field: 'sl_no',
          headerName: 'Sl No.',
          type:'number',
          width: 80,
          editable: false,
        },
        {
          field: 'variety',
          headerName: 'Variety',
          width: 110,
          editable: false,
        },
        {
          field: 'soil',
          headerName: 'Soil',
          width: 100,
          editable: false,
        },
        {
          field: 'crop_season',
          headerName: 'Crop Season',
          width: 150,
          editable: false,
        },
        {
          field: 'duration',
          headerName: 'Duration',
          width: 130,
          editable: false,
        },
        {
          field: 'district',
          headerName: 'District Name',
          width: 150,
          editable: false,
        },
        {
          field: 'water',
          headerName: 'Irrigated/Rainfed',
          width: 150,
          editable: false,
        },
        {
          field: 'nutrients',
          headerName: 'Nutrients/Ratings',
          width: 150,
          editable: false,
        },
        {
          field: 'nitrogen',
          headerName: 'Nitrogen(kg/ha)',
          width: 150,
          editable: false,
        },
        {
          field: 'phosphorus',
          headerName: 'Phosphorus(kg/ha)',
          width: 150,
          editable: false,
        },
        {
          field: 'potassium',
          headerName: 'Potassium(kg/ha)',
          width: 150,
          editable: false,
        },
        {
          field: 'compost',
          headerName: 'Fym/Compost(MT)',
          width: 150,
          editable: false,
        },
        {
          field: 'id',
          headerName: 'Action',
          width: 140,
          renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
              >
                Click
              </Button>
            );
          }
      
        },
      
      ];
      const history=useNavigate()
      const [statelist, setstatelist] = React.useState<any>([]);
      const [districtlist, setdistrictlist] = React.useState<any>([]);
      const [name,setname]=React.useState()
      const [state,setstate]=React.useState()
      const [district,setdistrict]=React.useState()

      React.useEffect(() => {
        const states: any = [];
    
        State.getStatesOfCountry("IN").map((data) => {
            // console.log(data)
          states.push({name:data.name,code:data.isoCode});
        });
        setstatelist(states);
      },[])
      const getDistrict=(data:any)=>{
        const districts:any=[]
        // console.log(data)
        City.getCitiesOfState("IN",data.code).map((info)=>{
            // console.log(info)
            districts.push(info.name)
        })
        setdistrictlist(districts)
      } 


      let rows = []

      let loaddata=""
    return (
        <>
        <h1 style={{marginLeft:'0.6em'}}>General Fertilizer Recommendation</h1>
    <Grid container spacing={2} style={{marginLeft:1}}>

  <Grid item xs={12} md={3}  >
  <TextField id="outlined-basic2"  fullWidth label="Name" variant="outlined"  onChange={(e:any)=>setname(e.target.value)} />
  </Grid>
  <Grid item xs={12} md={3}  >
      <Autocomplete
      onChange={(event:any, value:any) => {
        setstate(value.name)
        getDistrict(value)
        
      }}
      value={state}
      disablePortal
      getOptionLabel={(option:any) => option.name}
      id="region"
      options={statelist ? statelist : []}
      renderInput={(params) => (
        <TextField {...params} label="State" />
      )}    />
  </Grid>
  <Grid item xs={12} md={3}  >
  <Autocomplete
      onChange={(event:any, value:any) => setdistrict(value)}
      value={district}
      disablePortal
      id="district"
      getOptionLabel={(option:any) => option}
      options={districtlist ? districtlist : []}
      renderInput={(params) => (
        <TextField {...params} label="District" />
      )}    />
  </Grid>

</Grid>
<div style={{marginRight:11,marginTop:9,display:'flex',justifyContent:'flex-end'}}>
<Button color='primary'  variant="contained" onClick={()=>{ history("/app/gfr/create");}} >Create</Button>
</div>
        <Div sx={{ height: 400, width: '100%' }}>
        {loaddata && <p>Loading ...</p>}
             {!loaddata && (
                <DataGrid
                rows={[]}
                columns={columns}
                pageSize={rowsPerPage}
                rowsPerPageOptions={[5, 10, 20, 30, 40, 50, 100]}
                pagination
                onPageSizeChange={(e) => setRowsPerPage(e)}
                rowHeight={52}
                autoHeight={true}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: false }}
              />
             )}
           </Div>
           </>
      );
}

export default Management