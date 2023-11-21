

// --------value & innerText to float convert function--------------------------

function giveDigit(value){
    
   
    const valueFloat = parseFloat(value);
    return valueFloat;
}

//---------

document.getElementById('cal').addEventListener('click', function(){
    let number = document.getElementById('income');
    let floatNumber = number.value;
    const incomeBalance = giveDigit(floatNumber);
    console.log(incomeBalance);



    number = document.getElementById('food');
    floatNumber = number.value;
    const foodBalance = giveDigit(floatNumber);
    console.log(foodBalance);
    


    number = document.getElementById('rent');
    floatNumber = number.value;
    const rentBalance = giveDigit(floatNumber);
    console.log(rentBalance);
    


    number = document.getElementById('cloth');
    floatNumber = number.value;
    const clothBalance = giveDigit(floatNumber);
    console.log(clothBalance);
    

    //  ------------Total eaxpence-----------------
    const totalExpence = foodBalance + rentBalance + clothBalance;


    if(incomeBalance >= totalExpence){
        number = document.getElementById('totalEx');
    number.innerText= totalExpence;

    const balance = incomeBalance - totalExpence;
    number = document.getElementById('bal');
    number.innerText= balance;
    
    }
    else{
        let= dis = document.getElementById('hide');
        dis.style.display = 'block';
    }


    

    
    
    



})


// save balanceee------------------
number = document.getElementById('save');
    number = number.value;
    const saveBalance = giveDigit(number);

