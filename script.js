var expression = "";
function numbers(number)
{
    var num=document.getElementById(number);
    var textbox =document.getElementById("screen")
    var display=num.innerText;
    expression =expression+display;
    textbox.value=expression;
}

function operators(op)
{
    var oper=document.getElementById(op).innerText;
    expression=expression+ " " + oper + " ";
    var textbox =document.getElementById("screen");
    textbox.value=expression;
}

function calculate()
{
    var result = eval(expression);
    var textbox =document.getElementById("screen");
    textbox.value=result;
    expression ="";
}

function clearscreen()
{
    var textbox =document.getElementById("screen");
    textbox.value="";
    expression="";
}

