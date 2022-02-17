
export const initialState = [
    
    {   id:Math.random(10).toString().slice(2,5),
        name:'carrots',
        price:Math.random(10).toString().slice(2,4)+".00",
        qty:12,
    },
    {
       id:Math.random(10).toString().slice(4,7),    
       name:'potato',
       price:Math.random(10).toString().slice(4,6)+".00",
       qty:10,
   },
   {
       id:Math.random(10).toString().slice(2,5),  
       name:'onion',
       price:Math.random(2*8).toString().slice(4,6)+".00",
       qty:8,
   },
];