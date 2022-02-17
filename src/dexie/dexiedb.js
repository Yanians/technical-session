import Dexie from 'dexie';

 const dbconstructor = (dbName,dbStore) => {
     const db = new Dexie(dbName);
         
             db.version(2).stores(dbStore);
             db.open().catch((error)=>{
                    console.log('dexie line 8 :',error.stack||error);
             });
           return db;	
}

export const dbAdminUser = dbconstructor('Admin',{admin:`++id, firstname, lastname, address, contact, email, position, image, password`});

export const dbClientUser = dbconstructor('Client',{
	                                                  client:`++id, firstname, lastname, address ,company, email, contact, position, image, password `,
                                                    purchase:`++id, firstname, lastname,address,email, contact,amount,cardname,creditcard, date,time,password,timesince,isConfirmedPurchase, *devices`,
                                                    comments:`++id, ref, name,password, image, comment,userIdentityFirstName,userIdentityLastName`,
                                                       reply:`++id, ref, name, image, text`,
                                                    maintenance:`++id, types, devices, date, contact, address, statement`,   
                                                    issue:`++id, types, date, company, technician, issue`,
                                                    temporarysave:`refId`,
                                                    message:'messageCount',
                                                    });

export const dbManagementUser = dbconstructor('Management',{management:`++id, firstname, lastname, address, contact, email, position, image, password`});

export const dbTechUser = dbconstructor('Technical',{technical:`++id, firstname, lastname, address, contact, email, position, image, password`});

export const dbPost = dbconstructor('Post',{
                                           postcomment:`++id, date, title, post, file, company, type, *identity`,
                                           jsonpost:`id,title,type,company,dated,file,identity,post`
                                       });

export const dbRegister = dbconstructor('Register',{register:`++id, fullname, Address, cellno, company, email, password, position, confirm`});

export const OnetimeSave = dbconstructor('Onetimesave',{items:`firstname, lastname, address, company, email, contact, position, image, password`});

export const OnetimeLogin = dbconstructor('Onetimelogin',{items:`firstname, lastname, address, company, email, contact, position, image, password`});

export default dbconstructor;
