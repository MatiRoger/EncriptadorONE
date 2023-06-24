let text = document.getElementById("user-input");
let textResult= document.querySelector(".result p");
let noResult= document.querySelector(".no-result");
let result=  document.querySelector(".result");

text.addEventListener('input', function() {
	var filtteredText = this.value.replace(/[^a-z\s]/g, '');
	this.value = filtteredText;
});

function encriptar(){
		let input = text.value;
		let output = '';
    for(let i = 0;i<input.length;i++){
      switch(input.charAt(i)){
				case 'e': output+='enter';
				break;
				case 'i': output+= 'imes';
				break;
				case 'a': output+= 'ai';
				break;
				case 'o': output+='ober';
				break;
				case 'u': output+='ufat';
				break;
				default: output+= input.charAt(i);
				break;
			}
    }
		textResult.textContent=output;
		noResult.classList.add("d-none");
		result.classList.add("d-flex");
}

function desencriptar(){
	let input = text.value;
	let output = "";
	let i=0;
	while(i<input.length){
		if(input.substring(i,i+5)==="enter"){
			output+="e";
			i+=5;
		}else if(input.substring(i,i+4)==="imes"){
			output+="i";
			i+=4;
			}else if(input.substring(i,i+2)==="ai"){
				output+="a";
				i+=2;
			}else if(input.substring(i,i+4)==="ober"){
				output+="o";
				i+=4;
			}else if(input.substring(i,i+4)==="ufat"){
				output+="u";
				i+=4;
			}else {
				output+=input.charAt(i);
				i++;
			}
		}
		textResult.textContent=output;
		noResult.classList.add("d-none");
		result.classList.add("d-flex");
}
function copy() {
	navigator.clipboard.writeText(textResult.textContent);
}
document.getElementById("encode-button").addEventListener('click',encriptar);
document.getElementById("decode-button").addEventListener('click',desencriptar);
document.getElementById("copy-button").addEventListener('click',copy);

