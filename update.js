function setLeftValue(input1,input2,input3,input4){
    if (input1 == 'y'){
        return input2
    }
    else{
        if (input3 == input4) {
            return input2
        } else {
            if (input3 == 'Celsius'){
                if (input4 == 'Kelvin'){
                    return input2+273.15 
                } 
                else{ //input4 ==  'Fahrenheit'
                    return (input2*9/5)+32 
                }
            } 
            else{
                if (input3 == 'Kelvin'){
                    if (input4 == 'Celsius'){
                        return input2-273.15  
                    } 
                    else{ //input4 ==  'Fahrenheit'
                        return ((input2/273.15)*9/5) +32
                    }
                } 
                else { //input3 ==  'Fahrenheit'
                    if (input4 == 'Celsius'){
                        return (input2-32) *5/9 
                    } 
                    else{ //input4 ==  'Kelvin'
                        return ((input2-32)*5/9) + 273.15
                    }
                }
            }
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
        if (input3 == input4){
            return input2
        }
        else{
            if (input3 == 'Celsius'){
                if (input4 == 'Kelvin'){
                    return input2+273.15
                } 
                else{ //input4 ==  'Fahrenheit'
                    return (input2*9/5)+32
                }
            } 
            else{
                if (input3 == 'Kelvin'){
                    if (input4 == 'Celsius'){
                        return input2-273.15 
                    } 
                    else{ //input4 ==  'Fahrenheit'
                        return ((input2/273.15)*9/5) +32
                    }
                } 
                else { //input3 ==  'Fahrenheit'
                    if (input4 == 'Celsius'){
                        return (input2-32) *5/9
                    } 
                    else{ //input4 ==  'Kelvin'
                        return ((input2-32)*5/9) + 273.15
                    }
                }
            }
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
