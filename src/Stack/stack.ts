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

function infixToPostfix(str: string) {
  const stack = new Stack();
  let expression = '';

  for (let character of str) {
    if (/[A-Z]/.test(character)) expression += character;
    else if (character === ')') {
      while (!stack.isEmpty() && stack.top !== '(') {
        expression += stack.pop();
      }
      stack.pop();
    } else stack.push(character);
  }

  while (!stack.isEmpty()) expression += stack.pop();

  return expression;
}

const result = infixToPostfix('A*B-(C+D)+E');
console.log({ result });
