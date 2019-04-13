calculateTip = function() {
    hideCalculatedTip();

    let billAmount = enterBillAmount();
    let serviceType = enterServiceType();
    let peopleNumber = enterPeopleNumber();

    if(billAmount === null || serviceType === null || peopleNumber === null){
        return;
    }
    
    let tipAmount = ((billAmount * serviceType)/(peopleNumber*100)).toFixed(2);

    displayTip(tipAmount);
    

}

enterBillAmount = function() {

    let bills = document.getElementsByClassName('input-bill');

    if(bills[0].value == "" || isNaN(bills[0].value)){
        alert("please enter a number.");
        return null;
    }else{
        return bills[0].value;
    }

}

enterServiceType = function() {

    let service = document.getElementById('service');
    if(service.value == ""){
        alert("please choose an option.");
        return null;
    }else{
        return service.value;
    }

}

enterPeopleNumber = function() {
    let people = document.getElementsByClassName('input-people');

    if(people[0].value == "" || isNaN(people[0].value) || parseInt(people[0].value) == 0){
        alert("please enter a number.");
        return null;
    }else{
        return people[0].value;
    }
}

displayTip = function(tipAmount){
    
    let tipDiv = document.getElementById('tip');
    
    tipDiv.innerText = tipAmount;
    if(tipDiv.parentNode.classList.contains('hide')){
        tipDiv.parentNode.classList.remove('hide');
    }

}

hideCalculatedTip = function(){
    let tipDiv = document.getElementById('tip');

    if(!tipDiv.parentNode.classList.contains('hide')){
        tipDiv.parentNode.classList.add('hide');
    }
}