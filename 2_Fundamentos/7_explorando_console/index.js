//mais de um valor
const x = 10
const y = 'sidney'
const z = [1,2]

console.log(x, y, z)

//contagem de impressões
console.count(`o valor de x é ${x}, contagem`)
console.count(`o valor de x é ${x}, contagem`)
console.count(`o valor de x é ${x}, contagem`)
console.count(`o valor de x é ${x}, contagem`)
console.count(`o valor de x é ${x}, contagem`)
console.count(`o valor de x é ${x}, contagem`)

//variavel entre strigs
console.log("O nome dele é %s, ele é programador",y)

//limpar o console
setTimeout(() => {
    console.clear()
}, 2000);