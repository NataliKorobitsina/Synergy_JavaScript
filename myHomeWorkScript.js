function createDiv() {
	let div = document.createElement('div');
	div.className = "post-wrap";
	let div2 = document.createElement('div');
	div2.className = "post-item";
	let div3 = document.createElement('div');
	div3.className = "post-item-wrap";
	let a = document.createElement('a');
	a.className = "post-link";
	let h3 = document.createElement('h3');
	h3.className = "post-title";
	h3.innerHTML = "My new div";
	let p = document.createElement('p');
	p.className = "post-content";
	p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel arcupurus. Duis egestas purus et ex interdum lobortis.Quisque nec magna viverra, interdum dolor at, congueaugue. Quisque sed interdum augue, a lacinia nulla.Sed risus nibh, vestibulum eu nisi eu, imperdiet temporquam.";
	document.getElementById("main").appendChild(div);
	document.getElementsByClassName("post-wrap")[0].appendChild(div2);
	document.getElementsByClassName("post-item")[0].appendChild(div3);
	document.getElementsByClassName("post-item-wrap")[0].appendChild(a);
	document.getElementsByClassName("post-link")[0].appendChild(h3);
	document.getElementsByClassName("post-title")[0].appendChild(p);
}