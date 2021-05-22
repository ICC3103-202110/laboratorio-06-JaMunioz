function update(input1,input2,input3,model){
    return {
        ...model,
        input1: input1,
        input2: input2,
        input3: input3,
        mount: input1,
        tip_in_percent: input2,
        tip: input3,
    }
}

module.exports = {
    update
}
