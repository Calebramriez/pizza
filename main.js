name_array=["cheese pizza","pepper ony pizza" ,"pineapple pizza"];
function submit(){
    var name1=document.getElementById("student1").value;
    
    name_array.push(name1);
   
    document.getElementById("display_name").innerHTML=name_array;
   
    
}
