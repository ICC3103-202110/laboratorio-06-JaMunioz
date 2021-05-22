function setLeftValue(input1,input2,input3,input4){
    if (input1 == 'y'){
        return input2
    }
    else{
        if (input3 == input4) {
            return input2
        } else {
            return "tranformacion respectiva"
        }
    }
}

function setLeftUnit(input1,input3,input4){
    if (input1 == 'y'){
        return input3
    }
    else{
        return input4
    }
}

function setRightValue(input1,input2,input3,input4){
    if (input1 == 'y'){
        if (input3 == input4) {
            return input2
        } else {
            return "tranformacion respectiva"
        }
    }
    else{
        return input2
    }
}

function setRightUnit(input1,input3,input4){
    if (input1 == 'y'){
        return input4
    }
    else{
        return input3
    }
}

function update(input1,input2,input3,input4,model){
    return {
        ...model,
        input1: input1,
        input2: input2,
        input3: input3,
        input4: input4,
        leftValue: setLeftValue(input1,input2,input3,input4),
        leftUnit: setLeftUnit(input1,input3,input4),
        rightValue: setRightValue(input1,input2,input3,input4),
        rightUnit: setRightUnit(input1,input3,input4),
    }
}

module.exports = {
    update
}
