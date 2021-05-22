const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow( //color.
        figlet.textSync(
            'Tip Calculator App', //mesage.
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){ //table.
    const {mount} = model
    const {tip_in_percent} = model
    const {tip} = model
    const {total} = model
    return [
        {"Bill Amount": mount,"Tip (%)": tip_in_percent,"Tip": tip,
        "Total": total}, 
    ]
}

function inputForm(model){
    const {input1} = model
    const {input2} = model
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'number',
            message: 'Bill Amount?',
            default: input1,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Enter a integer greater or equal than 0.'
                }
            }
        },
        {
            name: 'input2',
            type: 'number',
            message: 'Tip %?',
            default: input2,
            validate: function(value){
                if(value >= 0 && value <= 100){
                    return true
                } else {
                    return 'Enter a integer greater or equal than 0, and lower'
                    +'or equal than 100.'
                }
            }
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