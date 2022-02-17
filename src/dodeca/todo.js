import PropTypes from 'prop-types';

import * as React from 'react';

import { useSelector } from 'react-redux';

import *as R from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import SaveIcon from '@mui/icons-material/Save';

import CancelIcon from '@mui/icons-material/Close';

import EditIcon from '@mui/icons-material/Edit';

import *as action from './redux';

import { initialState } from './data';

import *as M from '../lib';

const Button = M.Buttonui;

const CellItem = M.AbstractListItem(R.GridActionsCellItem);

CellItem.propTypes = {
  instagram:PropTypes.bool,
  youtube:PropTypes.bool,
};

function CustomToolbar() {
  return (
    <R.GridToolbarContainer>
      <R.GridToolbarFilterButton />
      <R.GridToolbarDensitySelector />
    </R.GridToolbarContainer>
  );
}

function Todo() {

      const sRef = R.useGridApiRef();
      const rowContent = useSelector((state=>state.Storage));
      const [state, setState ] = React.useState({
        checkboxSelection:true,
      });

      const { checkboxSelection } = state;

      React.useEffect(()=>{
        action.store.dispatch(action.LoadItem(initialState))
      },[]);

  const handleClick = () => {
    const id = Math.random(10).toString().slice(2,5);
    const prices = Math.random(2*8).toString().slice(4,6)+".00";
    const qty = Math.random(12).toString().slice(5,7);
    const objects = {id,name:'',price:prices,qty:qty};
    action.store.dispatch(action.CreateItem(objects));
    sRef.current.updateRows([{id,name:'',price:prices,qty:qty}]);
    sRef.current.setRowMode(id, 'edit');
    setTimeout(() => {
      sRef.current.scrollToIndexes({
        rowIndex: sRef.current.getRowsCount() + 1,
      });
      sRef.current.setCellFocus(id, 'name');
         
    },[500]);
  };

  const  EditToolbar=(props)=> {
     return (
       <R.GridToolbarContainer>
          <M.O sx={{p:2}}>
           <Button facebook sIcon={<AddIcon />} sx={{p:2}} contained onClick={handleClick} name={'ADD TO LIST'} />
           </M.O> 
           <M.O sx={{p:2}}>
              <CustomToolbar />
           </M.O> 
       </R.GridToolbarContainer>
     );
   }

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();
    // Wait for the validation to run
    const isValid = await sRef.current.commitRowChange(id);
    if (isValid) {
        sRef.current.setRowMode(id, 'view');
      const row = sRef.current.getRow(id);
      console.log(row)
      action.store.dispatch(action.UpdateItem(row));
      sRef.current.updateRows([{ ...row, isNew: false }]);
      // handleCellFocusOut(id,event)
    }
  };

  const handleCancelClick = (id) => (event) => {
    event.stopPropagation();
    sRef.current.setRowMode(id, 'view');

    const row = sRef.current.getRow(id);
    if (row.isNew) {
        sRef.current.updateRows([{ id, _action: 'save' }]);
    }
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    console.log(sRef.current)
    sRef.current.setRowMode(id, 'edit');
    sRef.current.setCellFocus(id, 'name');
  };

  const handleDeleteClick= id => event =>{
       event.stopPropagation();           
         action.store.dispatch(action.DeleteItem(id));
        //  sRef.current.updateRows([{ id, _action: 'delete' }]);

};  

const handleCellFocusOut = (params, event) => {
         event.defaultMuiPrevented = true;
};

const handleRowEditStart = (params, event) => {
  event.defaultMuiPrevented = true;
};

const handleRowEditStop = (params, event) => {
  event.defaultMuiPrevented = true;
};

const handleSelection=(params)=>{
   console.log(params);
}

const columns = [
  { 
     field: "id", 
     headerName:"#", 
     width: 70,
     disableClickEventBubbling: true,
     renderCell: (params) => { // this following method is a hack from x-data-grid-pro
         sRef.current = params.api;
         return null;
       },
       editable:false,
   },
   {
     field: "name",
     headerName: "Name list",
     width: 100,
     disableClickEventBubbling: true,
     renderCell: (params) => {
         sRef.current = params.api;
         return null;
       },
     editable: true,

   },
   {
     field: "price",
     headerName: "prices",
     width: 100,
    //  disableClickEventBubbling: true,
     renderCell: (params) => {
         sRef.current = params.api;
         return null;
       },
     editable: false
   },
   {
     field: "qty",
     headerName: "Quantity",
     width: 100,
     disableClickEventBubbling: true,
     renderCell: (params) => {
         sRef.current = params.api;
         return null;
       },
     editable: false
   },
   {
     field: 'actions',
     type: 'actions',
     headerName: 'Management',
     setClassName: "actions",
     width:100,
     getActions: ({ id }) => {
       const referencesName = sRef.current.getRowMode(id) === 'edit';
         if(referencesName){
          return [
            <CellItem
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(id)}
            instagram
          />,
          <CellItem
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            youtube
          />
           ]
          
        }else{
          return [
            <CellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              instagram
            />,
             <CellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            youtube
            /> 
          ]
      }   
     },
 },
];

  return (
    <div style={{ width: '100%' }}>     
      <div style={{ height: 400 }}>
        <R.DataGrid
        rows={rowContent}
           columns={columns}
           
           editMode="row"
           apiRef={sRef}
           checkboxSelection
           onSelectionModelChange={(selection)=>{
             console.log(selection)
             setState({
               ...state,
               checkboxSelection:!checkboxSelection,
             })
           }}
           rowsPerPageOptions={[5,10,25]} 
           onCellFocusOut={handleCellFocusOut}
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            components={{
                Toolbar:EditToolbar,
              }}
              cmponentProps={{
                Toolbar:{sRef},
              }}
         />
      </div>
    </div>
  );
}

export default Todo;