
import * as React from "react";

import PropTypes from 'prop-types';

import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";

// import Toolbar from "@mui/material/Toolbar";

import Paper from "@mui/material/Paper";

// import IconButton from "@mui/material/IconButton";

// import EditSharpIcon from '@mui/icons-material/EditSharp';

import EditIcon from '@mui/icons-material/Edit';

// import CancelIcon from '@mui/icons-material/Close';

import DeleteIcon from '@mui/icons-material/DeleteOutlined';

// import SaveIcon from '@mui/icons-material/Save';

import Swal from 'sweetalert2';

import  { createTheme }  from '@mui/material/styles';

import  { makeStyles } from '@mui/styles';

import Typography from "@mui/material/Typography";

import  { connect  } from 'react-redux';

import PersonAddIcon from "@mui/icons-material/PersonAdd";

import  { Form } from '../index';

import { 
    DataGrid,
    GridCellParams,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridActionsCellItem,
    GridToolbarDensitySelector,
 } from "@mui/x-data-grid";

// import { GridCellParams } from "@mui/x-data-grid";

// import { GridToolbarContainer } from "@mui/x-data-grid";

// import { GridToolbarFilterButton } from "@mui/x-data-grid";

// import { GridActionsCellItem } from "@mui/x-data-grid";

// import GridToolbarDensitySelector from "@mui/x-data-grid";

import { GetAll, Update, GetDetail, Create, Delete } from '../redux';

import *as W from '../../lib';

import { userTableLayout } from '../index';

import { CustomerDataService } from '../httpservice';

const Title = W.AbstractGlobal(Typography);

const Ib = W.AbstractGlobal(Button);

const CellItem = W.AbstractGlobal(GridActionsCellItem);

const defaultTheme = createTheme();

const useStyle = makeStyles(theme=>{

const border = theme.palette.type === 'dark' ? "1px solid green" :"#212121";

const borderRadius = theme.palette.type === 'dark' ? "inherit" :"inherit";

const color = theme.palette.type === 'dark' ? '#f5f5f5' :'#212121';

	  return {
		  	root:{
		  		'& .MuiDataGrid-row, .MuiDataGrid-main':{
		  			border,
		  			color,
		  			borderRadius,
		  		},
		  	},

        actions:{
            color: theme.palette.text.secondary,
        },

         btnSize:{
        fontSize:'12px',
           [theme.breakpoints.up('md')]:{
              fontSize:'45px',
           },
         },
	  }
},{defaultTheme},);

function DataTable(props){

  const { apiRef } = props;

  const classes = userTableLayout();

  const r = useStyle();

  const [rows, setRows] = React.useState([]);
     
  const [ userId, setUserId ] = React.useState(0);

  const [ fname, setFname ] = React.useState('');

  const [lname, setLname ] = React.useState('');

  const [email, setEmail ] = React.useState('');

  const [address, setAddress ] = React.useState('');

  const [contact, setContact ] = React.useState('');

  const [age, setAge ] = React.useState('');

  const [gender, setGender ] = React.useState('');

  const [dis, setDis ] = React.useState(false);

  const [dos, setDos ] = React.useState(true);

  React.useEffect(()=>{
      return ()=>{
        return;
      }
  },[ fname, lname, email, address, contact, age, gender,rows, ]);

  React.useEffect(()=>{
   const asynchronous= async () => {
       await props.GetAll().then(result=>{
         setRows(result.data);
       });
   }
   asynchronous();    
  },[]);

  async function handleFirstname(e){
    const value = await e.target.value;
          if(value.length === 0){
            setFname('');
          }else{
            setFname(value);  
          }
  };

  async function handleLastname(e){

    const value = await e.target.value;

         if(value.length === 0){
                   setLname('');
         }else{
           setLname(value);
         }
  };

   async function handleEmail(e){
          
    const value = await e.target.value;
    
         if(value.length === 0){
              setEmail('');
         }else{
           setEmail(value);
         }
  };

   async function handleAddress(e){
      const value = await e.target.value;
         if(value.length === 0){
              setAddress('');
         }else{
           setAddress(value);
         }
  };

   async function handleContact(e){
      const value = await e.target.value;
          if(value.length === 0){
              setContact('');
         }else{
           setContact(value);
         }
  };

   async function handleAge(e){
      const value = await e.target.value;
          if(value.length === 0){
              setAge('');
         }else{
           setAge(value);
         }
  };

   async function handleGender(e){
      const value = await e.target.value;
          if(value.length === 0){
              setGender('');
         }else{
           setGender(value);
         }
  };

  let timerInterval  
  const handleEditClick = id => async event => {

              event.stopPropagation();    
        const ids = parseInt(id);
            await Swal.fire({
                      html:'Wait...<b></b>',
                      width:150,
                      height:70,
                      timer:400,
                      background: '#fff url(/images/trees.png)',
                      timerProgressBar:false,
                      showConfirmButton:false,
                      backdrop:`
                        rgba(1,0,123,0.3)
                        url("../video-rental/images/1.jpg")
                        left top
                        no-repeat
                      `,
                      didOpen:(e)=>{
                         Swal.showLoading()
                         timerInterval = setInterval(() => {
                            const content = Swal.getContainer()
                            if (content) {
                              const b = content.querySelector('b')
                              if (b) {
                                b.textContent = Swal.getTimerLeft()
                              }
                            }
                          }, 100)
                      },
                       willClose: () => {
                          clearInterval(timerInterval)
                       }
            }).then(()=>{
               setDis(true);
               setDos(false);        
            })

            await props.GetDetail(ids).then(response=>{
                       const { firstname, lastname, email, address, contact, age, gender,} = response.data.data;
                       setFname(firstname);
                       setLname(lastname);
                       setEmail(email);
                       setContact(contact);
                       setAddress(address);
                       setAge(age);
                       setGender(gender);
                       setUserId(ids);
            })
  };
     
  const handleDeleteClick = id => event => {
    event.stopPropagation();
    Swal.fire({
      title:'Delete ?',
      icon:'warning',
      html:'<strong>You cannot REVERT this!</strong>',
      confirmButtonText: '<i class="fa fa-thumbs-up">Delete</i>!',
      showDenyButton:true,
      showConfirmButton:true,
      denyButtonText:`Don't Delete`,
      focusConfirm:false,
      showCancelButton:false,
      showCloseButton:true,
    }).then(async result=>{
         if(result.isConfirmed){
            const i = parseInt(id);
            const fullname = await props.GetDetail(i).then(response=>{
                const { firstname, lastname } = response;
               const fullname = firstname+" "+lastname;
                return fullname;
            });
             Swal.fire({
              position:'top-end',
              height:'50px',
              marginLeft:'150px',
              title:`${fullname} has been deleted!`,
              showConfirmButton:false,
              icon:'success',
              timer:1200,
             }
              ).then(result=>{
                setTimeout(()=>{
                props.Delete(id).then(()=>{
                         props.GetAll().then(result=>{
                           setRows(result.data);
                         })
                })
              },500)
              });
         }else if(result.isDenied){
            Swal.fire({
              title:'Nothing deleted',
              'icon':'info',
              timer:1100});
         }
    })
  };

  async function handleUpdate(e){
         e.preventDefault();
    const data = { firstname:fname,lastname:lname,email,address,contact, age, gender };
        await props.Update(userId, data).then(async ()=>{
              await props.GetAll().then(result=>{
                console.log(result);
                   setRows(result.data);
              });
        });

         setTimeout(()=>{setDis(false)},500);
         setDos(true);
 }

   function createBtn(){

           setDis(true);
           setDos(false);
           setUserId(0);
           return [
             setFname(''),
             setLname(''),
             setEmail(''),
             setAddress(''),
             setContact(''),
             setAge(''),
             setGender('')
           ];           
    };

  const handleCreate = e => {
       e.preventDefault();
  if(fname !== "" && lname !== "" && email !== "" && address !== "" && contact !== "" && age !== "" && gender !== ""){

        Swal.fire({
                width:90,
                showConfirmButton:false,
                timer:1200,
                didOpen:(e)=>{
                   Swal.showLoading()
                },
        }).then( result => {
          const datas = {firstname:fname,lastname:lname,email,address,contact,age,gender};
            props.Create(datas);
             if(result.dismiss === Swal.DismissReason.timer){
                Swal.fire({
                    position:'top-end',
                    title:'<b>SUCCESS</b>',
                    html:'<strong>created successfully</strong>',
                    icon:'success',
                    showConfirmButton:false,
                    timer:1500,
                }).then(result=>{
                     props.GetAll().then(response=>{
                        setRows(response.data);
                     })
                      setDos(true);
                    setDis(false);
                      return [
                         setFname(''),
                         setLname(''),
                         setEmail(''),
                         setAddress(''),
                         setContact(''),
                         setAge(''),
                         setGender('')
                       ];   
                });
             }
        });

 }else{
    Swal.fire({
      title:'<h2>Oops!</h2>',
      html:'<strong>Please check empty field!</strong>',
      icon:'error',
      showConfirmButton:false,
      timer:1500,
    }).then(()=>{
         setDis(true);
         setDos(false);
    });
  }
  
}
    
  function handleCancel(e){
      setTimeout(()=>{setDis(false)
       return [
             setFname(''),
             setLname(''),
             setEmail(''),
             setAddress(''),
             setContact(''),
             setAge(''),
             setGender('')
           ];   
        },500)
      setDos(true);
  }

 function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

function EditToolbar(props) {
  const { apiRef } = props;
}

EditToolbar.propTypes = {
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
};

const columns = [

  { 
    field: "id", 
    headerName:"ID", 
    editable:false,
    width: 70
  },
  {
    field: "firstname",
    headerName: "First name",
    width: 100,
    editable: false
  },
  {
    field: "lastname",
    headerName: "Last name",
    width: 100,
    editable: false
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
    editable: false
  },
  {
    field: "address",
    headerName: "Present Address.",
    width: 100,
    editable: false
  },
  {
    field: "contact",
    headerName: "Contact no.",
    width: 100,
    editable: false
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 70,
    editable: false
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 70,
    editable: false
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstname") || ""} ${
        params.getValue(params.id, "lastname") || ""
      }`
  },
  {
      field: 'actions',
      type: 'actions',
      headerName: 'Management',
      width: 100,
      cellClassName: r.actions,
      getActions: ({ id }) => {
        if (id) {
          return [
              <CellItem
            icon={<EditIcon />}
            label="Edit"
            className={classes.textPrimary}
            onClick={handleEditClick(id)}
            instagram
          />,
          <CellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            youtube
          />,
          ];
        }
      },
    },
];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Paper className={classes.content}>
        <div className={classes.toolbar}>
          <Title adlib uppercase messenger bold shadow1grey noWrap normaltext div h5 xs={{flexGrow:1,display:{xs:'none',sm:'block'}}} textContent={'Customer Record'} />    
          <Ib onClick={e=>createBtn(e)} whatsapp bold color="inherit" startIcon={<PersonAddIcon />} size="small" variant="outlined" textContent={'new customer'} />
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid className={r.root} 
              columns={columns} 
              rows={rows}
              rowsPerPageOptions={[25, 50, 100]} 
              rowHeight={30} 
              components={{
                Toolbar:CustomToolbar, EditToolbar,
              }}
              componentsProps={{
                toolbar:{ apiRef }
              }}

        onCellDoubleClick={(params, event) => {
              event.stopPropagation();
              const {id,firstname,lastname,email,address,contact,age,gender} = params.row;
              const ids = parseInt(id);
                  setFname(firstname);
                       setLname(lastname);
                       setEmail(email);
                       setContact(contact);
                       setAddress(address);
                       setAge(age);
                       setGender(gender);
                       setUserId(ids);
            setDis(true);
            setDos(false);
        }}
      />
      </div>
      </Paper>
          <Form dis={dis} dos={dos} userId={userId} fname={fname} lname={lname} email={email} address={address} contact={contact} age={age} gender={gender}
                handleFirstname={e=>handleFirstname(e)}
                handleLastname={e=>handleLastname(e)}
                handleEmail={e=>handleEmail(e)}
                handleAddress={e=>handleAddress(e)}
                handleContact={e=>handleContact(e)}
                handleAge={e=>handleAge(e)}
                handleGender={e=>handleGender(e)}
                onClick={e=> userId === 0 ? handleCreate(e) : handleUpdate(e)}
                handleCancel={e=>handleCancel(e)}
           />
    </div>
  );
}

const mapStateToProps=state=>{
   return {
      getall:state.getall,
      update:state.update,
      detail:state.detail,
      create:state.create,
      delete:state.delete,
   }
}
  export default connect( mapStateToProps,{ GetAll, Update, GetDetail, Create, Delete })(DataTable);

// export default connect(mapStateToProps,{GetAll, Update, GetDetail})(DataTable);


/*
  
 _Oct 22, 2021_ *******************************************************************************

  - [DataGrid] Remove the `state` prop and use the `initialState` prop (#2848) @flaviendelangle

  Note that `initialState` only allows the `preferencePanel`, `filter.filterModel` and `sort.sortModel` keys.
  To fully control the state, use the the feature's model prop and change callback (e.g. `filterModel` and `onFilterModelChange`).

  ```diff
  <DataGrid
  -  state={{
  +  initialState={{
      preferencePanel: {
        open: true,
        openedPanelValue: GridPreferencePanelsValue.filters,
      },
    }}
  />

  - [DataGrid] Remove unused event listeners and redundant DOM attributes on `GridCell` and `GridRow` (#2810) @m4theushw

  The following props were removed. If you depend on them, use `componentsProps.row` and `componentsProps.cell` to pass custom props to the row or cell.

  - `onCellBlur`
  - `onCellOver`
  - `onCellOut`
  - `onCellEnter`
  - `onCellLeave`
  - `onRowOver`
  - `onRowOut`
  - `onRowEnter`
  - `onRowLeave`

  +<DataGrid
  +  componentsProps={{
  +    row: { onMouseOver: handleRowOver },
  +  }}
  +/>


  The `data-editable` attribute was removed from the cell element. Use the `.MuiDataGrid-cell--editable` CSS class.

  The `data-mode` attribute was removed from the cell element. Use the `.MuiDataGrid-cell--editing` CSS class.

  +const rootProps = useGridRootProps();

   +import type {} from '@mui/x-data-grid/themeAugmentation';

     <DataGrid
  +  onCellEditStart={...}
  +  onCellEditStop={...}
   />

  +apiRef.current.setEditRowsModel({
  +  ...oldModel,
  +  [id]: {
  +    ...oldModel[id],
  +    [field]: { ...oldModel[id][field], error: true },
  +  },
  +});

   - The `width` property of the columns is no longer updated with the actual width of of the column. Use the new `computedWidth` property in the callbacks instead.

  ```diff
  const columns: GridColDef = [
    {
    field: "name",
    width: 100,
    renderCell: ({ value, colDef }) => {
    - console.log(colDef.width!)
    + console.log(colDef.computedWidth)
      return value
    }
  ]

  _July 31, 2021_ *********************************************************************************

    - The `onEditCellChange` prop was renamed to `onEditCellPropsChange`.
    - The `onEditCellChangeCommitted` prop was renamed to `onCellEditCommit`.
    - The `onEditRowModelChange` prop was removed. Use the new `onEditRowsModelChange` prop.

    ```diff
    -onEditRowModelChange?: (params: GridEditRowModelParams)
    +onEditRowsModelChange?: (editRowsModel: GridEditRowsModel)

    ```

  - The `cellEditPropsChange` event was renamed to `editCellPropsChange`.
  - The `cellEditPropsChangeCommitted` event was renamed to `cellEditCommit`.
  - The `cellValueChange` event was removed. Listen to `cellEditCommit` to detect when the value is committed.
  - The `editRowModelChange` event was renamed to `editRowsModelChange`.


_July 21, 2021_******************************************************************************

+const filterState = apiRef.current.state.filter;

// Normalize the controlled prop signature:

   <DataGrid
  +  onSortModelChange={(model: GridSortModel) => setSortModel(model)}
   />

   - [DataGrid] Improve the editing API (#1955) @m4theushw

  - The `props` key in the first argument of `commitCellChange` was removed to promote the use of the value already stored in the state.
    To update the value in the state, call `setEditCellProps` before.

    ```diff
    -apiRef.current.commitCellChange({ id: 1, field: 'name', props: { value: 'Ana' } });
    +apiRef.current.setEditCellProps({ id: 1, field: 'name', props: { value: 'Ana' } });
    +apiRef.current.commitCellChange({ id: 1, field: 'name' });
    ```

  - Calling `commitCellChange` in a cell in view mode will throw an error. Make sure to first enter the edit mode.

    ```diff
    +apiRef.current.setCellMode(1, 'name', 'edit');
    apiRef.current.commitCellChange({ id: 1, field: 'name' });
    ```

  - The `setCellValue` was removed from the API. Use `commitCellChange` or `updateRows` in place.

    ```diff
    -apiRef.current.setCellValue({ id: 1, field: 'name', value: 'Ana' });
    +apiRef.current.updateRows([{ id: 1, name: 'Ana' }]);
    ```

    or

    ```diff
    -apiRef.current.setCellValue({ id: 1, field: 'name', value: 'Ana' });
    +apiRef.current.setCellMode(1, 'name', 'edit');
    +apiRef.current.setEditCellProps({ id: 1, field: 'name', props: { value: 'Ana' } });
    +apiRef.current.commitCellChange({ id: 1, field: 'name' });
    ```

  - The `getEditCellProps` was removed because `getEditCellPropsParams` offers the same functionality.

    ```diff
    -const props = apiRef.current.getEditCellProps(1, 'name');
    +const { props } = apiRef.current.getEditCellPropsParams(1, 'name');
    ```

    **Note**: This method will now throw an error if the cell is in view mode.

- [DataGrid] Implement useControlState hook, and add control state on selectionModel (#1823) @dtassone

  Normalize the controlled prop signature:

  ```diff
   <DataGrid
  -  onSelectionModelChange={(params: GridSelectionModelChangeParams) => setSelectionModel(params.model)}
  +  onSelectionModelChange={(model: GridSelectionModel) => setSelectionModel(model)}
   />
  ```

  Replace `onRowSelected` with the existing API:

  ```diff
   <DataGrid
  -  onRowSelected={(params: GridRowSelectedParams) =>  }
  +  onSelectionModelChange={(model: GridSelectionModel) => }
   />

    _Dec 2, 2020_ ***********************************************************

  These changes simplify the API and avoid confusion between `RowData` and `RowModel`.
  Now we only have RowModel which is a flat object containing an id and the row data. It is the same object as the items of the `rows` prop array.

  The API to change update the rows using apiRef has changed:

  ```diff
  -apiRef.current.updateRowData()
  +apiRef.current.updateRows()
  ```

  ```diff
  -apiRef.current.setRowModels()
  +apiRef.current.setRows()
  ```

  `apiRef.current.updateRowModels` has been removed, please use `apiRef.current.updateRows`.


*/

/*
 
{
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: classes.actions,
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === 'edit';

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className={classes.textPrimary}
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className={classes.textPrimary}
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },

*/




















