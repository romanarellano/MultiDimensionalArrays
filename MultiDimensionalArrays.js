module.exports = {

  generator : function (num) {
  var arr=[];
    if(num===undefined){
      for(var i=0;i<3;i++){

        for(var j=0;j<3;j++){
          arr[i]=Math.round(Math.random()); 

        }
      }
        return arr;
    }
   else if(arguments.length===1) {
      for(var k=0;k<num;k++)
          arr[k]=Math.round(Math.random());
        return  arr;
      }
    } 
  // if no args are passed return a single array
  // with 3 random boolean values
};