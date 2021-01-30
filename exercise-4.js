function clicked_on(){
    var value = document.getElementById('input').value;
    console.log(value)
    var value1=value.length;
    console.log(value1)
    console.log( document.getElementById("demo").value)

    document.getElementById("demo").innerHTML= value1;


}