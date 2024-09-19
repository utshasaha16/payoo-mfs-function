document.getElementById('feature-add-money-btn')
    .addEventListener('click', function(){
    console.log('clicked by feature add money button');
    showSectionById('add-money-form');
});

document.getElementById('feature-cash-out-btn')
    .addEventListener('click', function(){
        showSectionById('cash-out-form');
    });

document.getElementById('feature-transaction-btn')
    .addEventListener('click', function(){
        showSectionById('transaction-form');
});