class NewStack {
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(x){
        // Add new element to the empty queue
        this.q2.push(x);

        // Move all elements from q1 to q2 so x is at the front
        while (this.q1.length > 0){
            this.q2.push(this.q1.shift())
        }

        // Swap references
        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
    }

    pop(){
        return this.q1.shift();
    }

    top(){
        return this.q1[0];
    }

    empty(){
        return this.q1.length === 0;
    }
}

// FIX: Name the instance something different (like 'myStack')
const myStack = new NewStack();
myStack.push(1);    
myStack.push(2);    
console.log(myStack.top());   // Returns 2
console.log(myStack.pop());   // Returns 2
console.log(myStack.empty()); // Returns false