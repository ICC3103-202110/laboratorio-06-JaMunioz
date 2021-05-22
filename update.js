function setTipp(amount,tip){
    if ((((amount*tip)/100) % 1) == 0){ //for know if is integer or float.
        return ((amount*tip)/100)
    }
    else{
        if (((((amount*tip)/100)*10) % 1) == 0){
            return ((amount*tip)/100).toFixed(1)//Round number to 1 decimal
        }
        else{
            return ((amount*tip)/100).toFixed(2)//Round number to 2 decimal
        }
    }
}
function setTotall(amount,tip){
    if (((amount+((amount*tip)/100)) % 1) == 0){
        return (amount+((amount*tip)/100))
    }
    else{
        if ((((amount+((amount*tip)/100))*10) % 1) == 0){
            return (amount+((amount*tip)/100)).toFixed(1)
        }
        else{
            return (amount+((amount*tip)/100)).toFixed(2)
        }  
    }
}

function update(input1,input2,model){
    const setTip = setTipp(input1,input2)
    const setTotal = setTotall(input1,input2)
    if (input2%1 == 0){
        value = input2
    }
    else{
        if ((input2*10)%1 == 0){
            value = input2.toFixed(1)
        }
        else{
            value = input2.toFixed(2)
        }
    }
    return {
        ...model,
        input1: input1,
        input2: input2,
        mount: '$'+input1,
        tip_in_percent: value+'%',
        tip: '$'+setTip,
        total: '$'+setTotal,
    }
}

module.exports = {
    update
}
