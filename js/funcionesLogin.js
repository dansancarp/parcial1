function login()
{
	var miDni = $("#dni").val();	
	if(!(parseInt(miDni)>1000000&&parseInt(miDni)<99000000))
	{
		alert("INGRESE DNI VALIDO");
		return;
	}

	var miAjax= $.ajax({
		method:"post",
		url:"nexo.php",
		data:{
			queHago:"login",
			dni:miDni
		}
	});
	miAjax.done(function(resultado){
		$("#principal").html("<h2>Bienvenido al sistema de votacion</h2>");
	});
}