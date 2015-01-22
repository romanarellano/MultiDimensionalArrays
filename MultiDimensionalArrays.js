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


    generate_2d : function(num1,num2) {
     
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

      else 
           for(var n=0;n<num1;n++){
    
          for(var o=0;o<num2;o++){
              arr[o]=(Math.floor(Math.random()*2));
                
          }
          element[n]=arr;
      }
          return element;
  },

      generate_3d: function(num1,num2,num3){



   element=[];
   nested1=[];
   nested2=[];
 
for(var i=0;i<num1;i++){
   
          for(var j=0;j<num2;j++){
             
            element=[];
             
              for(var k=0;k<num3;k++){
                  
                  element[k]=Math.floor(Math.random()*2);
              }
                nested1[j]=element;
                
          }
          nested2.push(nested1);
      }
    return nested2;

      }


};