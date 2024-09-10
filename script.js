
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


const result = sendNotification("farhan34@yahoo.com")
console.log(result);

