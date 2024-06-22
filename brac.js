function fact(num){
    const stack = [];
    for(let i=0;i<str.length;i++) {
        if(str[i]==='(') {
            stack.push(str[i]);
        }else if( str[i]===')'){
            if(stack.length === 0) {
                return "mismatch";
            } else {
                stack.pop();
            }
        }
    }
    return stack.length === 0? "brac matched": "mismatch";
    

}

console.log(bracket("hello()()"));
