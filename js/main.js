let Message = document.getElementById("MessageBox");
let Btn = document.getElementById("CloseBtn");
let ChemicalElements =[
    [
    {
      "name": "Hydrogen",
      "electrons": 1,
      "phase": "Gas"
    },
    {
        "name": "Helum",
        "electrons": 2,
        "phase": "Gas"
    },
    {
        "name": "Lithium",
        "electrons": 3,
        "phase": "Solid"
    }
]
]

function Close(){
    Message.style.display = "none"
}

function Open(id) {
    Message.style.display = "block"
    console.log(id)
    
}
for (el in ChemicalElements) {
    console.log(el.name)
    
}