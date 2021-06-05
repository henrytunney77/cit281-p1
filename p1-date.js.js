/*
CIT 281 Project 1
Name: Henry
*/
const day = new Date();
const days =["Monday", "Tuesday","Wednesday","Thursday","Friday", "Saturday", "Sunday"];
const currentday= day.getDay();
console.log(days[currentday-1]);