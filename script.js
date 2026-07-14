const cart = [
  { name: "Pen", price: 20, qty: 2 },
  { name: "Book", price: 120, qty: 3 },
  { name: "Bag", price: 900, qty: 1 },
];

// let totalPrice = 0;
// let totalQty = 0;
// cart.forEach((item) => {
//   totalPrice += parseInt(item.price);
//   totalQty += parseInt(item.qty);
// });

// const totalPrice = cart.reduce((total, item) => {
//   return total + item.price * item.qty;
// }, 0);

// console.log(totalPrice);
// console.log(totalQty);


// let total = {
//     price:10
// }

// total[salary] = 20

// console.log(total)

// const result =cart.reduce((acc,curr) =>{
//     acc.totalPrice +=curr.price;
//     acc.totalQty += curr.qty
//     return acc;
// },{totalPrice:0,totalQty:0})

// console.log(result)

// const account = {
//   balance: 1000,
//   deposit(amount) {
//     this.balance+=amount
//   },
//   withdraw(amount) {
//     if(this.balance>amount){
//         console.log(`withdraw successfull. withdrawal amount: ${amount}, New balance: ${this.balance - amount}`)
//         this.balance -=amount
//     }else{
//         console.error("your balance is low.")
//     }
//   },
//   checkBalance() {
//     return this.balance
//   }
// };
// account.deposit(1000)
// account.withdraw(1500)
// console.log(account.checkBalance())


const str = "javascript is fun javascript is awesome"

const frequntlyCount = str.split(" ").reduce((acc,curr) =>{
    if(acc[curr]){
        acc[curr]+=1
    }else{
        acc[curr] = 1;
    }
    return acc
},{})

console.log(frequntlyCount)