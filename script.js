class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  }

const disp = document.querySelector('.val');
const stack = new Stack();
let res = "123+123";
let a = [];
let cur = "";
let dotflag = 0;
function concat(e){
    // console.log(e,cur);
    if(e=='*'||e=='-'||e=='+'||e=='/'||e=='%'){
        if(cur=='*'||cur=='-'||cur=='+'||cur=='/'||cur=='%'){
            console.log(e);
            a.pop();
            a.push(e);
            cur = e;
            disp.innerHTML = a.join("");
        }
        else if(cur!==''){
            dotflag = 0;
            cur = e;
            a.push(e);
            disp.innerHTML = a.join("");
        }
    }
    else{
        if(cur=='.'&&e=='.'||dotflag==1&&e=='.'){
            disp.innerHTML = a.join("");
            dotflag = 1;
        }
        else{
            cur = e;
            a.push(e);
            disp.innerHTML = a.join("");
        }
        
    }
    
}

function allclear(){
    stack.clear();
    a = [];
    cur = "";
    disp.innerHTML="";
}

function del(){
    if(cur==="("||cur===")"){
        if(cur===")"){
            stack.push("(");
        }
        else{
            stack.pop();
        }
    }
    a.pop();
    let n = a.length;
    if(n<=1){
        cur = "";
    }
    else{
        cur = a[a.length-1];
    }
    disp.innerHTML = a.join("");
}

function equal(){
    let s = a.join("");
    let result = eval(s);
    s = result.toString();
    // console.log(s);
    a = Array.from(s);
    // console.log(a);
    disp.innerHTML = result;
}

function brakets(){
    if(stack.isEmpty()||cur==="("){
        stack.push('(');
        a.push('(');
        cur = '(';
        disp.innerHTML = a.join("");
    }
    if(cur!=='('&&!stack.isEmpty()){
        stack.pop();
        a.push(')');
        cur = ')';
        disp.innerHTML = a.join("");
    }
}

document.addEventListener('keydown', function(event){
    console.log(event.key);
    if(event.key==='1'||event.key==='2'||event.key==='3'||event.key==='4'||event.key==='5'||event.key==='6'||event.key==='7'||event.key==='8'||event.key==='9'||event.key==='0'||event.key==='+'||event.key==='-'||event.key==='/'||event.key==='*'||event.key==='.'){
        concat(event.key);
    }
    if(event.key==='Backspace'){
        del();
    }
    if(event.key ==='Enter'){
        equal();
    }
})