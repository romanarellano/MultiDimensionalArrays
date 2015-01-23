module.exports = {
        
          

       //count the number of 1's in the single array
        
        count : function(array){

              
            var ones=  array.filter(function(each_one){

                  return each_one==true;

              });

            return ones.length;





        }





};
