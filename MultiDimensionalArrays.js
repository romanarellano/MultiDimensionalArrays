module.exports = {

  generate_1d : function (num,num1) {
  var arr=[];

    //num parameter does not exist
    if(num===undefined){
      for(var i=0;i<3;i++){

        
        arr[i]=Math.round(Math.random()); 

        
      }
        return arr;
    }
   //if num argument is a string return []
   //else create array with num elements with 1 and 0's
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
      /*if num1 undefined, create nested array with 3 elements for inner
       *array and outer array.
      */
      if(num1===undefined){

         for(var i=0;i<3;i++){
    
            for(var j=0;j<3;j++){
              arr[j]=(Math.floor(Math.random()*2));
                
            }
          element[i]=arr;
         }
          
          return element;

      }
      //if num1 exists, create outer array with num1 elements and inner
      //array with a 3 element length.
      else if(arguments.length===1){
          for(var m=0;m<num1;m++){
    
            for(var k=0;k<3;k++){
              arr[k]=(Math.floor(Math.random()*2));
                
            }
          element[m]=arr;
          }
          
          return element;
      }
      //if num1 and num2 are given, create num1 number of outer array elements
      //and num2 number of inner array elements.
      else 
          for(var n=0;n<num1;n++){
    
            for(var o=0;o<num2;o++){
              arr[o]=(Math.floor(Math.random()*2));
                
          }
          element[n]=arr;
          }
          
          return element;
  },
      /*create 3 scopes of arrays:
      * outer array = num1 elements
      * middle array = num2 elements
      * inner array = num3 elements.
      */
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