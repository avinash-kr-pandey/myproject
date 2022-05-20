import {firebaseOperations} from "./firebaseOperation.js"; 
window.addEventListener('load',bindEvents);
function bindEvents(){
document.querySelector('#server').addEventListener('click',serverData);
}
function serverData(){
    let student = document.querySelector('#student').value;
    let father = document.querySelector('#father').value;
    let date = document.querySelector('#date').value;
    let mother = document.querySelector('#mother').value;
    let addhar = document.querySelector('#addhar').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let address = document.querySelector('#address').value;
    let pin = document.querySelector('#pin').value;
    let national = document.querySelector('#national').value;
    let Object={};
    Object.student = student;
    Object.father = father;
    Object.date = date;
    Object.mother = mother;
    Object.email = email;
    Object.phone = phone;
    Object.addhar = addhar;
    Object.address = address;
    Object.pin = pin;
    Object.national = national;
    firebaseOperations.add(Object);
}