let resEle = document.querySelector(".result");
let BtnEle = document.querySelector(".Btn");
let pushBtnEle = document.querySelector(".pushBtn");
let popBtnEle = document.querySelector(".popBtn");
let peekEle = document.querySelector(".peekbtn");
let isEmptyEle= document.querySelector(".isEmptybtn");

class Stack {
    constructor() {
        this.items = [];
        this.top = 0;
    }
}

//operations of stack

//PUSH
Stack.prototype.push = function (ele) {
    this.items[this.top] = ele;
    this.top += 1;
};

//POP
Stack.prototype.pop = function () {
    if (this.top === 0) {
        return "Underflow: no more elements to delete";
    }
    
        tempNum = this.items[this.top - 1];
        this.top -= 1;
        return tempNum;
  
};

//PEEK
Stack.prototype.peek = function () {
    let num = this.items[this.top - 1]
    return num;
}

//isEMPTY
Stack.prototype.isEmpty = function () {
    return this.top == 0
}

//DISPLAY
Stack.prototype.display = function () {
    if (this.top == 0) {
        return "Stack is empty";
    }
    for (let i = 0; i < this.top; i++) {
        resEle.innerHTML += this.items[i] + " , ";
     }
    
};

//INSTANCE OF STACK
let stack1 = new Stack();


//EVENTLISTENERS

BtnEle.addEventListener("click", () => {
    resEle.innerHTML = "";
    stack1.display();
});


pushBtnEle.addEventListener("click", () => {
    let ele = document.querySelector(".stackPush").value;
    resEle.innerHTML = ele + " is pushed to the stack";
    stack1.push(ele);
});


popBtnEle.addEventListener("click", () => {
    resEle.innerHTML = stack1.pop() + " is popped from the stack";
});


peekEle.addEventListener("click", () => {
    resEle.innerHTML = stack1.peek() + " is the top element";
});


isEmptyEle.addEventListener("click", () => {
    resEle.innerHTML = (stack1.isEmpty() == true ? 'stack is empty' : 'stack is not empty');
});