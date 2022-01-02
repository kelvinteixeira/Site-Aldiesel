let data = new Date();
let dia = data.getDate();           // 1-31
// let dia_sem = data.getDay();            // 0-6 (zero=domingo)
let mes = data.getMonth();          // 0-11 (zero=janeiro)
// let ano2 = data.getYear();           // 2 dígitos
let ano4 = data.getFullYear();       // 4 dígitos
let hora = data.getHours();          // 0-23
let min = data.getMinutes();        // 0-59
let seg = data.getSeconds();        // 0-59
// let mseg = data.getMilliseconds();   // 0-999
// let tz = data.getTimezoneOffset(); // em minutos

export const str_data = dia + '/' + (mes + 1) + '/' + ano4;
export const str_hora = hora + ':' + min + ':' + seg;