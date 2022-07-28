const n = document.getElementById("n");
const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.addEventListener("click",() => {
    if(n.value%2 == 0) {
        res.innerHTML = `O número ${n.value} é par`;
    }else {
        res.innerHTML = `O número ${n.value} é ímpar`;
    }
});