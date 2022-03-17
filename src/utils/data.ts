let date = new Date();
let day = date.getDate();           
let month = date.getMonth();          
let year = date.getFullYear();       
let hour = date.getHours();          
let min = date.getMinutes();        
let seg = date.getSeconds();       

export const currentDate = day + '/' + (month + 1) + '/' + year;
export const currentHour = hour + ':' + min + ':' + seg;
