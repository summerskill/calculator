/*
Class Assignment - Interface Web School: 08.2016.
*/
function calculate(input){
     var result = "";
      
    try{
        input = input.replace(" ", "").replace("--", "+");
        result = eval(input).toString();
        var decimalPos = result.indexOf(".");
        if (decimalPos > 0 && result.length > 11){
            result = result.substring(0, decimalPos);
        }else if (decimalPos > 0 ){
            result = result.substring(0, decimalPos) + result.substring(decimalPos, 11-decimalPos);
        }
    }catch(e){
        console.log(e);
        result = "ERROR";
    }
    return result;
}



$(".calculatorNumber, .calculatorOperator").on("click","", function(){
 //or $(".calculatorNumber, .calculatorOperator").click(function(){})
    
   var clicked = $(this).text();
   if($("#calcText").text()  == 0){
    $("#calcText").text(clicked);  
}
    else
{
   var currentText = $("#calcText").text();
   var newText = currentText + clicked;
    $("#calcText").text(newText);
   };
    
    
 });
    
$(".calculatorClear").click(function(){
    $("#calcText").text(0);
    
    
});

$(".calculatorEquals").click(function(){
    var result = calculate($("#calcText").text());
    $("#calcText").text(result);
});







