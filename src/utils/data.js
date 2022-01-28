let data = new Date();
let dia = data.getDate();           
let mes = data.getMonth();          
let ano4 = data.getFullYear();       
let hora = data.getHours();          
let min = data.getMinutes();        
let seg = data.getSeconds();       

export const dataAtual = dia + '/' + (mes + 1) + '/' + ano4;
export const horaAtual = hora + ':' + min + ':' + seg;
