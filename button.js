document.getElementById('btn0').onclick = action;
document.getElementById('btn1').onclick = action;
document.getElementById('btnClr').onclick = action;
document.getElementById('btnEql').onclick = action;
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;

function action(e){
    var btn = e.target || e.srcElement;

    if(btn.id != 'btnEql' && btn.id != 'btnClr'){
        res.innerHTML += btn.innerHTML;
    }
    else if(btn.id == 'btnClr'){
        res.innerHTML = null;
    }
    else if(btn.id == "btnEql"){
        var numsRegex = /\d+/gm
        var optRegex = /[-+*\/]/gm
        const binaryNums = res.innerHTML.match(numsRegex);
        const operator = res.innerHTML.match(optRegex);

        var num1Asint = parseInt(binaryNums[0],2);
        var num2Asint = parseInt(binaryNums[1],2);


        var intResult = 0;

        if(operator == "+")
            intResult = num1Asint+num2Asint;
        else if(operator == "-")
            intResult = num1Asint-num2Asint;
        else if(operator == "*")
            intResult = num1Asint*num2Asint;
        else{
            intResult = parseInt(binaryNums[0])/parseInt(binaryNums[1]);
            Math.floor(intResult);
            res.innerHTML = intResult;
            return; 
        }
        res.innerHTML = intResult.toString(2);

    }
    
}


