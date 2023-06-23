function encriptar(){
    let input = prompt().toLowerCase();
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
		return output;
}

function desencriptar(){
	let input = prompt().toLowerCase();
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
		return output;
}
