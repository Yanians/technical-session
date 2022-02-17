import axios from 'axios';

const http = axios.create({
	baseURL:'http://localhost:8081/api',
	mode:'cors',
	headers:{
		'Content-type':'application/json; charset=UTF-8'
	}
})

export default http;