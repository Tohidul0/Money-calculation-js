

// --------value & innerText to float convert function--------------------------

function giveDigit(value){
    
   
    const valueFloat = parseFloat(value);
    return valueFloat;
}

//---------

//--------------global variable--------------------
var balance = 0;

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
    let dis = document.getElementById('hide');
    dis.style.display = 'none';


    if(incomeBalance >= totalExpence){
        number = document.getElementById('totalEx');
        number.innerText= totalExpence;

        // its varible globally use-------------------
        balance = incomeBalance - totalExpence;
        number = document.getElementById('bal');
        number.innerText= balance;
    
    }
    else{
    
        dis.style.display = 'block';
    }


    

    
    
    



})


// save balanceee------------------
 

document.getElementById('save').addEventListener('click', function(){
    let saving = document.getElementById('saveinput');
    saving = saving.value;
    const savePercent = giveDigit(saving);
    console.log(savePercent);

    // saving balance------------------------------
    const savingBalance = (savePercent/100) * balance;
    console.log(savingBalance);


    // -----after save account have this balance---------
    const finalBalance = balance - savingBalance;
    console.log(finalBalance);



    //------displaypart-----------------------
    let  number = document.getElementById("savingper");
    number.innerText= savingBalance;



    // -----finalBalance---------------------------
     number = document.getElementById("finalBal");
     number.innerText= finalBalance;

 })