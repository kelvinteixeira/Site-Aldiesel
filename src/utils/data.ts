let date = new Date();
let day = date.getDate();           
let month = date.getMonth();          
let year = date.getFullYear();       
let hours = date.getHours();          
let minutes = date.getMinutes();        
export const seconds = date.getSeconds();       

export const currentDate = day + '/' + (month + 1) + '/' + year;
export const currentHour = hours + ':' + minutes + ':' + seconds;
