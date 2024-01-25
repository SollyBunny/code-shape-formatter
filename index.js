#!/bin/env node

const code = `
/* test
*/
/* test */
// program to implement stack data structure
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);
`

const s = 40;
let mask = "";
for (let y = 0; y < s / 2; ++y) {
    for (let x = 0; x < s; ++x) {
        const dis = Math.sqrt((x - (s / 2)) ** 2 + (y * 2 - (s / 2)) ** 2);
        mask += dis < 2 * s && dis > 0.5 * s ? " " : "#";
    }
    mask += '\n';
}

const format = require("./format.js");
const out = format.format(format.JS, code, mask);

console.log(JSON.stringify(out));