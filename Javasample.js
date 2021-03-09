var x=new XMLHttpRequest();
	x.open("GET", "http://danml.com/wave2.gif", true);
	x.responseType = 'blob';
	x.onload=function(e){download(x.response, "dlBinAjax.gif", "image/gif" ); }
	x.send();