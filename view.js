const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow( //color.
        figlet.textSync(
            'Unit Converter App', //mesage.
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){ //table.
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {"leftValue": leftValue,"leftUnit": leftUnit,"rightValue": rightValue,
        "rightUnit": rightUnit}, 
    ]
}

function inputForm(model){
    const {input2} = model
    const {input3} = model
    const {input4} = model
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: 'Left temperature is a source?',
            default: 'Y/n',
            validate: function(value){
                if(value == 'y' || value == 'n'){
                    return true
                } else {
                    return 'Plis enter "y" for confirm, or "n" for deny'
                }
            },
        },
        {
            name: 'input2',
            type: 'number',
            message: 'Temperature value to convert?',
            default: input2,
        },
        {
            name: 'input3',
            type: 'list',
            message: 'From?',
            default: input3,
            choices: ['Celsius', 'Fahrenheit','Kelvin']
        },
        {
            name: 'input4',
            type: 'list',
            message: 'To?',
            default: input4,
            choices: ['Celsius', 'Fahrenheit','Kelvin']
        },
    ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}