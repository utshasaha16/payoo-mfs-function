document
  .getElementById("cash-out-btn")
    .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out-amount');
    const pinNumber = getInputFieldValueById('input-cash-out-pin')
    // console.log('added a cash out btn', cashOut, pinNumber);

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed cash out....DGM');
    }
  });
