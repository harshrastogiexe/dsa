class Stack<T> {
  private stack: T[] = [];
  private _top = -1;

  get top() {
    if (this._top === -1) return;
    return this.stack[this._top];
  }

  get size() {
    return this._top + 1;
  }

  private increaseTop() {
    this._top++;
  }
  private decreaseTop() {
    this._top--;
  }

  push(data: T) {
    this.stack.push(data);
    this.increaseTop();
  }

  pop() {
    if (this._top === -1) return;
    const data = this.stack.pop();
    this.decreaseTop();
    return data;
  }

  isEmpty() {
    return this._top === -1;
  }
}

function balacingSymbols(str: string) {
  const char = new Map<string, string>();
  char.set('{', '}');
  char.set('(', ')');
  char.set('[', ']');
  char.set(']', '[');
  char.set(')', '(');
  char.set('}', '{');

  const stack = new Stack<string>();

  for (const character of str) {
    switch (character) {
      case '{':
      case '(':
      case '[': {
        stack.push(character);
        break;
      }
      case '}':
      case ')':
      case ']': {
        if (stack.size === 0) return false;
        if (stack.top === char.get(character)) stack.pop();
        break;
      }
    }
  }
  return stack.isEmpty() ? true : false;
}

function precendence(val: string): number {
  switch (val) {
    case '^':
      return 3;
    case '*':
    case '/':
      return 2;
    case '+':
    case '-':
      return 1;
    default:
      return 0;
  }
}

function infixToPostfix(str: string) {
  const stack = new Stack<string>();
  let expression = '';

  for (let character of str)
    if (/[A-Z]/.test(character)) expression += character;
    else if (character === '(') stack.push(character);
    else if (character === ')') {
      while (!stack.isEmpty() && stack.top !== '(') expression += stack.pop();
      stack.pop();
    } else {
      while (!stack.isEmpty() && precendence(stack.top!) >= precendence(character))
        expression += stack.pop();
      stack.push(character);
    }

  while (!stack.isEmpty()) expression += stack.pop();

  return expression;
}

function infixToPrefix(str: string) {
  const reversingStack = new Stack<string>();
  for (let character of str) reversingStack.push(character);
  let reveseStr = '';
  while (!reversingStack.isEmpty()) {
    let topData = reversingStack.pop();
    if (topData === '(') topData = ')';
    else if (topData === ')') topData = '(';
    reveseStr += topData;
  }
  const expression = infixToPostfix(reveseStr);
  return expression.split('').reverse().join('');
}

console.log(infixToPrefix('A*B+C/D'));

function evaluatePostfix(str: string, data: { [key: string]: number }) {
  const expression = infixToPostfix(str);
  const stack = new Stack<number>();
  for (let character of expression) {
    if (/[A-Z]/.test(character)) stack.push(data[character] || 0);
    else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = +eval(`${operand1}${character}${operand2}`);
      stack.push(result);
    }
  }
  return stack.top;
}
