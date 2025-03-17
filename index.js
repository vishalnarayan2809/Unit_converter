const  length = document.getElementById("length-conversion")
const volume = document.getElementById("volume-conversion")
const mass = document.getElementById("mass-conversion")
const convert_btn = document.getElementById("convert")
let feet = 0
let meters = 0 
let gallon = 0 
let liter = 0 
let pounds = 0
let kilos = 0 


convert()

convert_btn.addEventListener("click", convert)

function convert() {
    let userval = document.getElementById("number").value
    length_convert(userval)
    volume_convert(userval)
    mass_convert(userval)
    length.innerText = `${userval} meters = ${feet} feet | ${userval} feet = ${meters} meters` 
    volume.innerText = `${userval} liters = ${gallon} gallons | ${userval} gallons = ${liter} liters` 
    mass.innerText = `${userval} kg = ${pounds} lb | ${userval} lb = ${kilos} kg` 
}


function length_convert(value){
     feet = value / 3.281
     meters = value * 3.281
    feet = feet.toFixed(3)
    meters = meters.toFixed(3)
}

function volume_convert(value){
     gallon = value * 0.264
     liter = value / 0.264
    liter = liter.toFixed(3)
    kilogram = gallon.toFixed(3)
}

function mass_convert(value){
     pounds = value * 2.204
     kilos = value / 2.204
    kilos = kilos.toFixed(3)
    pounds = pounds.toFixed(3)
}




