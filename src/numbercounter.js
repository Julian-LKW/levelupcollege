let upto = 0;
let counts = setInterval(updated, 10);

function updated() {
    let count = document.getElementById("MyNumber");
    count.innerHTML = ++upto;
    if (upto === 274) {
        clearInterval(counts);
    };
}


let upto2 = 0;
let counts2 = setInterval(updated2, 35);

function updated2() {
    let count2 = document.getElementById("MyNumber2");
        count2.innerHTML = ++upto2;
    if (upto2 === 77) {
        clearInterval (counts2);
    };
};
