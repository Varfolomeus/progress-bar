let q= document.querySelector('.b-1');
let r= document.querySelector('.b-2');
let s= document.querySelector('.lab-1');
let t= document.querySelector('.lab-2');

(function (){
    let a=0;
q.onclick = ()=>{
    a++;
    s.innerHTML=a;
    // console.log(a);
}
})();

(function (){
        let a=0;
r.onclick = ()=>{
        a++;
        t.innerHTML=a;
        m=0
        // console.log(a);
        fibnum = fib(a) + " - Fibonacci sequence number # " + a + " operations performed " + m;
        document.getElementById("demo").innerHTML = "The value is: " + fibnum;
    }
})();

