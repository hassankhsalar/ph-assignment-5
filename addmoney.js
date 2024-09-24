document.getElementById('card-1-donate').addEventListener('click', function(){
   
    const fundC1 = document.getElementById('card-1-fund').innerText;
    const fundC1Number = parseInt(fundC1);
   
    const addMoneyC1 = document.getElementById('card-1-input').value;
    const addMoneyC1Number = parseInt(addMoneyC1);

    const userBalance = document.getElementById('user-balance').innerText;
    const userBalanceNumber = parseInt(userBalance);
    //console.log(addMoneyC1, userBalance);

    if(userBalanceNumber >= addMoneyC1Number){

       const currentFund = fundC1Number + addMoneyC1Number;
       const currentBalance = userBalanceNumber - addMoneyC1Number;

       document.getElementById('card-1-fund').innerText = currentFund;
       document.getElementById('user-balance').innerText = currentBalance;
    }
    else{
        alert('Insufficient Balance!')
    }
})