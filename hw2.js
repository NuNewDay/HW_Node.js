let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let temp1 = []
x=0
y=1
for(let i=0; i<characters.length; i++) {
    temp1.push(characters[i])
}
temp1[x] = temp1.splice(y, 1, temp1[x])[0]
console.log(temp1.join(""))