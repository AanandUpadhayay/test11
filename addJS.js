    addNumber = () =>
    {
        let n1= document.getElementById("num1").value;
        let n2= document.getElementById("num2").value;
        let res= parseInt(n1) +parseInt(n2);
        document.getElementById("sum").innerHTML= res;
    }