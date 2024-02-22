function SimpleInterest(principalAmount, annualInterest, time) {
    return new Promise((resolve, reject) => {
        if (principalAmount <= 0 || annualInterest <= 0 || time <= 0) {
            reject(new Error('Invalid input'));
        }

        const interest = (principalAmount * annualInterest * time) / 100;
        resolve(principalAmount + interest);
    });
}

function CompoundInterest(principalAmount, annualInterest, time) {
    return new Promise((resolve, reject) => {
        if (principalAmount <= 0 || annualInterest <= 0 || time <= 0) {
            reject(new Error('Invalid input'));
        }

        const amount = principalAmount * Math.pow((1 + annualInterest / 100), time);
        resolve(amount);
    });
}

module.exports = { SimpleInterest, CompoundInterest };

(async () => {
    try {
        const initialPrincipal = 1000;
        const annualInterestRate = 5; 
        const timePeriodInYears = 2; 

        let simpleInterestAmount = await SimpleInterest(initialPrincipal, annualInterestRate, timePeriodInYears);
        console.log("Simple Interest = ", simpleInterestAmount);

        let compoundInterestAmount = await CompoundInterest(initialPrincipal, annualInterestRate, timePeriodInYears);
        console.log("Compound Interest = ", compoundInterestAmount);
    } catch (error) {
        console.error('Error occurred during interest calculation:', error.message);
    }
})();
