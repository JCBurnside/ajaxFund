Array.prototype.toString=function(){
	let out="["
	this.forEach((element)=>{
		out+=element.toString()+",";
	})
	return out.substr(0,out.length-1)+"]";
}
var data;
$(()=>{
	$.ajax(new AJAXRequest("GET","https://swapi.co/api/people",(response)=>{
		console.log(response);
		data=response.results;
		console.log(data)
	},
	(error)=>{
		console.log("I HAVE ERRORED")
		console.log(error);
	}))
});
function AJAXRequest(type="GET",URL='',success=function(_){console.log(_)},error=function(_){console.log(_);console.log("REQUEST HAS ERROED",URL)}){
	this.type=type;
	this.url=URL;
	if(!success||!typeof(success)=="function")success=function(_){}
	this.success=success;
	if(!error||!typeof(success)=="function")error=function(_){}
	this.error=error;
};