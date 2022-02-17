import { dbClientUser } from '../../dexie';

import { useLiveQuery as Live } from 'dexie-react-hooks';

export default class DexieService{

	 async registereddata(){
	 	const data  = Live(()=> await dbClientUser.client.toArray().then((result)=>{
                       return this.data = result;
	 	}),[]);
	 }

	 
}