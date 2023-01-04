//create objects

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//create function getMyTaxes.call(country, salary) -> number

function getMyTaxes(salary) {
    this.salary=salary;
    const myTaxes = salary * this.tax;
    return myTaxes;
}

const myTaxesUkraine = getMyTaxes.call(ukraine, 20000);
document.writeln(`My taxes is: ${JSON.stringify(myTaxesUkraine)}<br>`);

//create function getMiddleTaxes.call(country) -> number, (tax * middleSalary).

function getMiddleTaxes() {
    const middleTaxes = this.tax*this.middleSalary;
    return middleTaxes;
}

const middleTaxesUA = getMiddleTaxes.call(ukraine);
document.writeln(`Middle taxes for country is: ${JSON.stringify(middleTaxesUA)}<br>`);

// create function getTotalTaxes.call(country) -> number, (tax * middleSalary * vacancies).

function getTotalTaxes() {
    const totalTaxes = this.tax*this.middleSalary*this.vacancies;
    return totalTaxes;
}

const totalTaxesUA = getTotalTaxes.call(ukraine);
document.writeln(`Total taxes for country is: ${JSON.stringify(totalTaxesUA)}<br>`);

// create function getMySalary(country), {salary: number, taxes: number, profit: number }

function getSalaryResult() {
    const salaryValue = Math.floor((Math.random() * 200) + 1500);
    const taxesValue =  salaryValue*this.tax;
    const profitValue = salaryValue-taxesValue;

    const finalSalary= {
        salary: salaryValue,
        taxes: taxesValue,
        profit: profitValue,
    }
console.log(finalSalary);
}
getSalaryResult.call(ukraine);

function getMySalary() {
    setInterval(getSalaryResult.bind(ukraine), 10000);
}

getMySalary();
document.writeln(`Please, check the total salary result in console<br>`);
