var str = "Ah12354#$%1.8"
var arr = str.split('');
let lowercase = []
let Uppercase = []
let number = []
let spclcharacter = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 'a' && arr[i] <= 'z')
        lowercase.push(arr[i])
    else if (arr[i] >= 'A' && arr[i] <= 'Z')
        Uppercase.push(arr[i])
    else if (arr[i] >= '0' && arr[i] <= '9')
        number.push(arr[i])
    else
        spclcharacter.push(arr[i])
}
console.log(Uppercase)
console.log(spclcharacter);
console.log(number);
console.log(lowercase);