document.getElementById('card-1-donate').addEventListener('click', function(){
   
    const fundC1 = getTextFieldValueById('card-1-fund');
    
    const addMoneyC1 = getInputFieldValueById('card-1-input');

    const userBalance = getTextFieldValueById('user-balance');
    
    //console.log(fundC1, addMoneyC1, userBalance);

    if(userBalance >= addMoneyC1){

       const currentFund = fundC1 + addMoneyC1;
       const currentBalance = userBalance - addMoneyC1;

       document.getElementById('card-1-fund').innerText = currentFund;
       document.getElementById('user-balance').innerText = currentBalance;

       //transaction history
       const now = new Date();
       const cardTitle = getTextFieldById('card1title');
       const h2 = document.createElement('h2');
       h2.innerText = `Donated BDT ${addMoneyC1} for ${cardTitle}`;
       const p = document.createElement('p');
       p.innerText = `${now}`
       const div = document.createElement('div');
       console.log(now);

       div.appendChild(h2);
       div.appendChild(p);
       
       
       document.getElementById('history-container').appendChild(div);
    }
    else{
        alert('Insufficient Balance!')
    }
})

document.getElementById('card-2-donate').addEventListener('click', function(){
   
    const fundC2 = getTextFieldValueById('card-2-fund');
    
    const addMoneyC2 = getInputFieldValueById('card-2-input');

    const userBalance = getTextFieldValueById('user-balance');
    
    //console.log(fundC1, addMoneyC1, userBalance);

    if(userBalance >= addMoneyC2){

       const currentFund = fundC2 + addMoneyC2;
       const currentBalance = userBalance - addMoneyC2;

       document.getElementById('card-2-fund').innerText = currentFund;
       document.getElementById('user-balance').innerText = currentBalance;

        //transaction history
        const now = new Date();
        const cardTitle = getTextFieldById('card2title');
        const h2 = document.createElement('h2');
        h2.innerText = `Donated BDT ${addMoneyC2} for ${cardTitle}`;
        const p = document.createElement('p');
        p.innerText = `${now}`
        const div = document.createElement('div');
        console.log(now);
 
        div.appendChild(h2);
        div.appendChild(p);
        
        
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert('Insufficient Balance!')
    }
})

document.getElementById('card-3-donate').addEventListener('click', function(){
   
    const fundC3 = getTextFieldValueById('card-3-fund');
    
    const addMoneyC3 = getInputFieldValueById('card-3-input');

    const userBalance = getTextFieldValueById('user-balance');
    
    //console.log(fundC1, addMoneyC1, userBalance);

    if(userBalance >= addMoneyC3){

       const currentFund = fundC3 + addMoneyC3;
       const currentBalance = userBalance - addMoneyC3;

       document.getElementById('card-3-fund').innerText = currentFund;
       document.getElementById('user-balance').innerText = currentBalance;

        //transaction history
        const now = new Date();
        const cardTitle = getTextFieldById('card3title');
        const h2 = document.createElement('h2');
        h2.innerText = `Donated BDT ${addMoneyC3} for ${cardTitle}`;
        const p = document.createElement('p');
        p.innerText = `${now}`
        const div = document.createElement('div');
        console.log(now);
 
        div.appendChild(h2);
        div.appendChild(p);
        
        
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert('Insufficient Balance!')
    }
})