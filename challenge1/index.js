const mark = {
     firstName: "Mark",
height: 1.69,
mass: 78,
   calculateBMI: function () {
   this.bmi = this.mass / (this.height * this.height);
   return this.bmi;
}
};
  
const john = {
  firstName: "John",

  height: 1.95,
  mass: 92,

  calculateBMI: function () {
  this.bmi = this.mass / (this.height * this.height);
  return this.bmi;
}
};
console.log(mark.calculateBMI());
console.log(john.calculateBMI());
  
  if (mark.bmi > john.bmi) {
    console.log(
      `${mark.firstName}'s BMI (${mark.bmi}) is Greater than ${john.firstName}'s BMI (${john.bmi})`
    );
  } else if (john.bmi > mark.bmi) {
    console.log(
      `${mark.firstName}'s BMI (${john.bmi}) is Greater than ${mark.firstName}'s BMI (${john.bmi})`
    );
  }
  