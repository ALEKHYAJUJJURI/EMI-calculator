let amountEle = document.getElementById('amountRange');
    let yearsEle = document.getElementById('yearsRange');
    let interestRateEle = document.getElementById('interestRate');
    console.log(typeof(amountEle.value))
    console.log(typeof(yearsEle.value))
    console.log(typeof(interestRateEle.value))
    console.log(parseInt(amountEle.value))
function CalculateClick(){
    let p = document.getElementById('msg');
    if(amountEle.value==='' || interestRateEle.value ==='' || yearsEle.value===''){
        p.innerHTML = "please enter valid details".fontcolor('red')
    }
   
    else{
        let P = parseInt(amountEle.value);
    let R = parseFloat(interestRateEle.value)/12/100;
    let n = parseInt(yearsEle.value)*12; 
    
    let result = P*R*Math.pow(1+R,n)/(Math.pow(1+R,n)-1)
    p.innerHTML = `Your Every Month Interest will be <b class="text-danger"> &#8377 ${Math.round(result).toLocaleString()}</b> for ${n} months`
    }
}