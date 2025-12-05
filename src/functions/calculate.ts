import { add, subtract, multiply, divide, modulus, sine, cosine, tangent } from './calculations'

export default function calculate(a: number, b: number, operator: string): number | string {
    switch (operator) {
        case '+': return add(a, b)
        case '-': return subtract(a, b)
        case '*': return multiply(a, b)
        case '/': return divide(a, b)
        case '%': return modulus(a, b)
        case 'sin': return sine(a)
        case 'cos': return cosine(a)
        case 'tan': return tangent(a)
        default: throw new Error(`Unknown operator: ${operator}`)
    }
}