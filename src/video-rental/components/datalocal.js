// import *as React from 'react';


// const defaultTheme = createTheme();

// const useStyles = makeStyles(
//   (theme) => ({
//     actions: {
//       color: theme.palette.text.secondary,
//     },
//     textPrimary: {
//       color: theme.palette.text.primary,
//     },
//   }),
//   { defaultTheme },
// );

// const apiRef = useGridApiRef();

//  const handleRowEditStart = (params, event) => {
//     event.defaultMuiPrevented = true;
//   };

//   const handleRowEditStop = (params, event) => {
//     event.defaultMuiPrevented = true;
//   };

//   const handleEditClick = (id) => (event) => {
//     const {apiRef } = useGridApiRef();
//     event.stopPropagation();

//     apiRef.current.setRowMode(id, 'edit');
//   };

//   const handleSaveClick = (id) => (event) => {
//     // const {apiRef } = useGridApiRef();
//     event.stopPropagation();
//     apiRef.current.commitRowChange(id);
//     apiRef.current.setRowMode(id, 'view');

//     const row = apiRef.current.getRow(id);
//     apiRef.current.updateRows([{ ...row, isNew: false }]);
//   };

//   const handleDeleteClick = (id) => (event) => {
//     // const {apiRef } = useGridApiRef();
//     event.stopPropagation();
//     apiRef.current.updateRows([{ id, _action: 'delete' }]);
//   };

//   const handleCancelClick = (id) => (event) => {
//     // const {apiRef } = useGridApiRef();
//     event.stopPropagation();
//     apiRef.current.setRowMode(id, 'view');

//     const row = apiRef.current.getRow(id);
//     if (row.isNew) {
//       apiRef.current.updateRows([{ id, _action: 'delete' }]);
//     }
//   };

// export const columns = [

//   { 
//     field: "id", 
//     headerName:"ID", 
//     editable:false,
//     width: 90
//   },
//   {
//     field: "firstname",
//     headerName: "First name",
//     width: 150,
//     editable: true
//   },
//   {
//     field: "lastname",
//     headerName: "Last name",
//     width: 150,
//     editable: true
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     width: 150,
//     editable: true
//   },
//   {
//     field: "address",
//     headerName: "Present Address.",
//     width: 150,
//     editable: true
//   },
//   {
//     field: "contact",
//     headerName: "Contact no.",
//     width: 150,
//     editable: true
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true
//   },
//   {
//     field: "gender",
//     headerName: "Gender",
//     width: 150,
//     editable: true
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, "firstname") || ""} ${
//         params.getValue(params.id, "lastname") || ""
//       }`
//   },
//   {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       // cellClassName: classes.actions,
//       getActions: ({ id }) => {

//         const {apiRef } = useGridApiRef();

//         const isInEditMode = apiRef.current.getRowMode(id) === 'edit';

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               onClick={handleSaveClick(id)}
//               color="primary"
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className={classes.textPrimary}
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className={classes.textPrimary}
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
// ];

// export const rows = [
//   { 
//   	id: 1, 
//   	lastName: "Snow", 
//   	firstName: "Jon", 
//   	age: 35,
//   	email: "yan19891989000@gmail.com",
//   	contact:'09979162314', 
//   	address: "Bucana Davao City"
//   },
//   { 
//   	id: 2, 
//   	lastName: "Lannister", 
//   	firstName: "Cersei", 
//   	age: 42,
//   	email: "yan19891989000@gmail.com",
//   	contact:'09979162314', 
//   	address: "Bucana Davao City"
//   },
//   { 
//   	id: 3, 
//   	lastName: "Lannister", 
//   	firstName: "Jaime", 
//   	age: 45,
//   	email: "yan19891989000@gmail.com",
//   	contact:'09979162314', 
//   	address: "Bucana Davao City"
//   },
//   { 
//   	id: 4, 
//   	lastName: "Stark", 
//   	firstName: "Arya", 
//   	age: 16,
//   	email: "yan19891989000@gmail.com",
//   	contact:'09979162314', 
//   	address: "Bucana Davao City"
//   },
//   { 
//   	id: 5, 
//   	lastName: "Targaryen", 
//   	firstName: "Daenerys", 
//   	age: 30,
//   	email: "yan19891989000@gmail.com",
//   	contact:'09979162314', 
//   	address: "Bucana Davao City"
//   }
// ];


