app.factory("myfactory",logic);
function logic(){
    //console.log("factory loaded..");
    var object={
        calculate1(firstnumber,secondnumber){
            return firstnumber + secondnumber;
        }
         ,
        calculate2(firstnumber,secondnumber){
            return firstnumber - secondnumber;
        },
         
        calculate3(firstnumber,secondnumber){
            return firstnumber * secondnumber;
        }
        ,
         
        calculate4(firstnumber,secondnumber){
            return firstnumber / secondnumber;
        }
    }
    return object;
    

} 
