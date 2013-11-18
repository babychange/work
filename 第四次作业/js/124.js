window.onload=function(){
	function cx(){	
		var pObj = document;
		var objArr = pObj.getElementsByTagName(tTagName);
		var tRObj = new Array();
		for(var i=0; i<objArr.length; i++){
   		if(objArr[i].className == arguments[0]){
    	tRObj.push(objArr[i]);
   		}
		return tRObj;
		}
	}
}