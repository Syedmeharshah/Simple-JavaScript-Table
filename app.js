function table() {
    let table = document.querySelector(".calculate").value;
    let table1 = document.querySelector(".container");
    let calculate = "";

    if (table){
        
    for (let i = 1; i <= 10; i++) {
        calculate += table + " x " + i + " = " + table * i + " <br> ";
        table1.innerHTML = calculate;
    }
}
else{
    document.querySelector(".container").innerHTML = " Please Enter any table "
}
}
