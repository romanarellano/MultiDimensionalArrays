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

      // else if(arguments)
    },


    generate_2d : function (num1) {
     
      var arr=[];
      element=new Array(3);
      for(var i=0;i<3;i++){
    
          for(var j=0;j<3;j++){
              arr[j]=(Math.floor(Math.random()*2));
                
          }
          element[i]=arr;
      }
          return element;


    }
  
};