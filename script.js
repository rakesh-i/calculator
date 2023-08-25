const disp = document.querySelector('.val');

let res = "123+123";
let a = [];
let cur = "";
function concat(e){
    if(e=='*'||e=='-'||e=='+'||e=='/'||e=='%'){
        if(cur=='*'||cur=='-'||cur=='+'||cur=='/'||cur=='%'){
            a.pop();
            a.push(e);
            cur = e;
            disp.innerHTML = a.join("");
        }
        else if(cur!=''){
            cur = e;
            a.push(e);
            disp.innerHTML = a.join("");
        }
    }
    else{
        cur = e;
        a.push(e);
        disp.innerHTML = a.join("");
    }
    
}

function allclear(){
    a = [];
    cur = "";
    disp.innerHTML="";
}

function del(){
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
    console.log(s);
    a = Array.from(s);
    console.log(a);
    disp.innerHTML = result;
}