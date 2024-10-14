function  generatemultiplication () {
    alert (this)
let inputvalue = document.getElementById("input_number")
    console.log (document.getElementById("inout_number"))
    console.log 
    let inputresult = document.getElementById("result")

    for (let i = 0 ; i <=10 ; i++) {
        let result = inputvalue * 1
        console.log (`${inputvalue} x ${i} = ${result}`)
        inputresult.innerHTML = `${inputvalue} x ${i} = ${result} <br>` 
    }
}