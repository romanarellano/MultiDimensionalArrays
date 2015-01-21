module.exports = {

  generate_1d : function (num,num1) {
  var arr=[];
    if(num===undefined){
      for(var i=0;i<3;i++){

        
          arr[i]=Math.round(Math.random()); 

        
      }
        return arr;
    }
   else if(arguments.length===1) {
     if(typeof num === 'string'){
        return [];
     }
      for(var k=0;k<num;k++)
          arr[k]=Math.round(Math.random());
        return  arr;
      }

     
    },


    generate_2d : function(num1) {
     
      var arr=[];
      element=new Array(num1);

      if(num1===undefined){

         for(var i=0;i<3;i++){
    
          for(var j=0;j<3;j++){
              arr[j]=(Math.floor(Math.random()*2));
                
          }
          element[i]=arr;
      }
          return element;

}
      else if(arguments.length===1){
      for(var m=0;m<num1;m++){
    
          for(var k=0;k<3;k++){
              arr[k]=(Math.floor(Math.random()*2));
                
          }
          element[m]=arr;
      }
          return element;
      }
  }
};