import axios from 'axios';

export default axios.create({
	 baseURL: "http://localhost/php/api",
	 headers:{
	 	"Access-Control-Allowed-Method" : "POST, GET, OPTIONS, PUT, DELETE",
	 	 "Access-Control-Allow-Headers" : "Content-Type, X-Auth-Token, Origin, Authorization",
	 	             "X-Requested-With" : "XMLHttpRequest",
	 	                 "Content-type" : "application/json; charset=utf-8",
	 	                "Cache-Control" : "no-store, no-cache",
	 	                       "Accept" : "application/json"
	 }
	 
	});
