var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let tipo = [];
//your code here

for(let i = 0;i<mix.length;i++){
tipo[i] = typeof mix[i];
}

console.log(tipo);