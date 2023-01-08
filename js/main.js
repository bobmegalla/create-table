let rowInputs = document.getElementById("rows")
let colsInputs = document.getElementById("cols")
let btn = document.querySelector("button")

btn.addEventListener('click',createTable )

function createTable (){
    let body = document.body
    let table = document.createElement("table")

    for (var i =0; i < rowInputs.value;i++) {
        let tr = document.createElement("tr")
        table.appendChild(tr)
        for(var j = 0 ; j < +colsInputs.value;j++){
        let td = document.createElement("td")
        let txt = document.createTextNode("item")
        td.appendChild(txt)
        tr.appendChild(td)
        }
    }
        body.appendChild(table)
}