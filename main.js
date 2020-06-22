//Display the Value
function d(val) {
    document.getElementById("result").value += val; 
}

//Function that clear the value(clr function must be same name with the call)
function clr() {
    document.getElementById("result").value = " ";
}

//Function Solve the Data Value
function solve() {
    let data = document.getElementById("result").value;
    let res = eval(data);
    document.getElementById("result").value = res;
}