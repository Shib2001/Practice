// i want to create a bank account 
// and want to know how much the balance is there 
// and i want to deposit money 
// and i want to withdraw money
// using closures 



function createBankAccount(intialBalance=0){
let balance = intialBalance;

  return { 
 
  getBalance(){
   return balance;
  },

   deposit(amount){
   if(amount>0) balance += amount;
},
  withdraw(amount){ 
   if(amount >0 && amount <= balance ) balance -= amount;
}

  }

}


// usage here 

const account= createBankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(account.getBalance());
