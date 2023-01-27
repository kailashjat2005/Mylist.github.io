
var namelist=["kailash","rajesh","suman","anshu","Apeksha","ravi"];
function searchfunction()
{
    var userinput = document.getElementById("textbutton").value;
    
    result='no';
    for(i=0;i<= namelist.length;i++)
    {
     if(namelist[i]==userinput){
        result='yes';
        break;
     }
     };

   
     {
        if(result=='yes')
        {
          document.getElementById("printname").innerHTML="<h3> <span  style='color:green' class=grand>congratulations!</span> This Name is Listed";
         
        }
        else 
         {
          document.getElementById("printname").innerHTML="<h3> <span style='color:red'class=grand> sorry!</span> This name is not  Included";
         }
     }
    
       
    
}
