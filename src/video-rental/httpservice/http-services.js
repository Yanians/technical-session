
import http from './http-common';

class CustomerDataService{

   getAll(){
         return http({
          url:'api.php?data=get_customer_data',
          method:'GET',
        })  
   }  

   create(data){

      const { firstname, lastname, email, address, contact, age, gender, } = data;
      
          return http({
            url:'api.php',
            method:'GET',
            params:{
              'data':'add_customer_data',
              firstname,
              lastname,
              email,
              address,
              contact,
              age,
              gender,
            },
      });
   }

   getDetail(id){
        return http.get('api.php?data=get_customer_detail&id='+id);
   }
     
   update(id, data){
      const{firstname, lastname, email, address, contact, age, gender} = data;
       return http({
        url:'api.php',
        method:'GET',
        params:{
           id,
           'data':'update_customer_data',
           firstname,
           lastname,
           email,
           address,
           contact,
           age,
           gender,
        }
      });
   }

   delete(id){
      return http({
          url:'api.php?data=delete_customer_data&id='+id,
          method:'GET',
      });

   }
}

export default new CustomerDataService();





