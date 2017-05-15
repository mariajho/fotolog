function agregaPosteo() {
	var containerPosteos = documentElementById("contenedor-posteos");
	var nombreFF = documento.getElementById("nombre").value;
	var contenidoFF = documentElementById("cajaṕosteos").value;
	var nuevoPost = documentElementById("div");
	var contenedorNombre =document.createElement("strong");
	var contenedorPost = document.createElement("p");
	var separacion = document.createElement("hr");
	var parrafCorazon = documentElement('p');
	var i = document.createElement('i');

	parrafCorazon.appendChild(i);
	parrafCorazon.setAttribute("class", "corazon");
	i.setAttribute("class", "fa fa-heart");
	i.setAttribute("arial-hidden", "true");

	var nodoNombre = document.createTextNode(nombreFF + " escribio: ");
	var nodoPosteo = document.createTextNode(contenidoFF);

	contenedorNombre.appendChild(nodoNombre);
	contenedor.Post.appendChild(nodoPosteo);
	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);
	nuevoPost.appendChild(separacion);

	i.addEventListener("click", function(){
		i.classList.toggle('rojo');
	});

	nuevoPost.setAttribute("class", "posteo");
	containerPosteos.appendChild(nuevoPost);
	documentElementById("nombre").value = "";
	documentElementById("cajaposteos").value = "";



}