document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('clicked add money button');

        const addMoney = getInputFieldValueById('input-amount');
        const pinNumber = getInputFieldValueById('input-pin');
        
        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('failed to add money');
        }
    });