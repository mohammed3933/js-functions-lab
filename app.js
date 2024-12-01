const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}

const isAdult = (age) => {
  return age >= 18 ? 'Adult' : 'Minor'
}

const isCharAVowel = (char) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return vowels.includes(char.toLowerCase())
}

const generateEmail = (name, domain) => {
  return `${name}@${domain}`
}

const greetUser = (name, timeOfDay) => {
  return `Good ${timeOfDay}, ${name}!`
}
const maxOfThree = (a, b, c) => {
  return Math.max(a, b, c)
}
const calculateTip = (billAmount, tipPercentage) => {
  return (billAmount * tipPercentage) / 100
}

const convertTemperature = (temperature, scale) => {
  if (scale === 'C') {
    return (temperature * 9) / 5 + 32
  } else if (scale === 'F') {
    return ((temperature - 32) * 5) / 9
  } else {
    return 'Invalid scale'
  }
}

const basicCalculator = (num1, num2, operation) => {
  switch (operation) {
    case 'add':
      return num1 + num2
    case 'subtract':
      return num1 - num2
    case 'multiply':
      return num1 * num2
    case 'divide':
      return num1 / num2
    default:
      return 'Invalid operation'
  }
}
