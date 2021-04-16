function saturdayFun(activity= "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(workThing="go to the office") {
    return (`This Monday, I will ${workThing}.`)
}

function wrapAdjective(flair = "*"){
    return function(compliment = "special"){
        return (`You are ${flair}${compliment}${flair}!`)
    }
}

const Calculator = {
    add: function(x, y){
        return (x + y)
    },
    subtract: function(x, y){
        return (x - y)
    },
    multiply: function(x, y){
        return (x * y)
    },
    divide: function(x, y){
        return (x / y)
    }
}

function actionApplyer(start, array){
    for (let i = 0; i < array.length; i++) {
      start = array[i](start)
    }
    return start
}