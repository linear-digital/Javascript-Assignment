
//  Tax Calculator

function calculateTax(income, expense) {
    if (income < 0 || income <= expense) {
        return "Invalid Input"
    }
    const result = income - expense
    const tax = result * .20
    return tax
}

//  Tax Calculator
// const tax = calculateTax(-5000, 2000)
// console.log(tax);

function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email"
    }
    else {
        const result = email.split("@")
        const username = result[0]
        const domain = result[1]

        return username + " " + "sent you an email from" + " " + domain
    }
}


// const result = sendNotification("farhan34@yahoo.com")
// console.log(result);


function checkDigitsInName(text) {

    if (/[!@#$%^&*(),.?":{}|<>]/g.test(text)) {
        return "Invalid Input"
    }
    if (/\d/.test(text)) {
        return true
    }
    else {
        return false
    }
}



// const result = checkDigitsInName('["Raj"]')
// console.log(result);

function calculateFinalScore(value) {
    if (typeof value !== "object") {
        return "Invalid Input"
    }
    else if (value.testScore > 50 || value.schoolGrade > 30) {
        return "Invalid Input"
    }

    const totalScore = value.testScore + value.schoolGrade
    if (value.isFFamily) {
        const total = totalScore + 20
        return total >= 80
    }
    else {
        return totalScore >= 80
    }

}

// const result = calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : true  }

// )
// console.log(result);

function waitingTime(arrayInput, serial) {
    if (arrayInput.length > serial) {
        return "Invalid Serial"
    }
    else {
        let total = 0
        for (let index = 0; index < arrayInput.length; index++) {
            total += arrayInput[index]
        }
        const avarage = Math.round(total / arrayInput.length)
        const remaining = (serial - 1) - arrayInput.length

        const output = avarage * remaining
        return output
    }
}

const result = waitingTime([3, 5, 7, 11, 6 ], 10)

console.log(result);