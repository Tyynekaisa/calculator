function add(a: number, b: number): number {
  return a + b
}

function subtract(a: number, b: number): number {
  return a - b
}

function multiply(a: number, b: number): number {
  return a * b
}

function divide(a: number, b: number): number | string {
  if (b === 0) {
    return "Error: Division by zero"
  }
  return roundResult(a / b)
}

function modulus(a: number, b: number): number | string {
  if (b === 0) {
    return "Error: Division by zero"
  }
  return a % b
}

function sine(a: number): number {
    return roundResult(Math.sin(a))
}

function cosine(a: number): number {
    return roundResult(Math.cos(a))
}

function tangent(a: number): number {
    return roundResult(Math.tan(a))
}

function roundResult(value: number, decimals = 8): number {
    return parseFloat(value.toFixed(decimals))
}

export { add, subtract, multiply, divide, modulus, sine, cosine, tangent }

