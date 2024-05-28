A = [100, 100, 100, -10] 
B=[180, -50, -25, -25]
D = ["2020−12−31", "2020−12−22", "2020−12−03", "2020−12−29"]

function solution (wala){
let sum = wala.reduce(
  (a, b) => { return a + b}, 0)
console.log(sum)
let months=12
let negativecount=0
for(let i=0;i<wala.length;i++){
    console.log(wala[i])
    if (wala[i]<0){
       negativecount +=wala[i] 
    }
}if (negativecount<=-100){
    months -=1
}
console.log(months)
let finalAmount= sum -(5*months)
console.log(finalAmount)
return 
}
solution(B)


