function hexToRgb() {
    var hex=document.getElementById("text1").value
    console.log(hex)
    console.log(document.getElementById("block-1").style.backgroundColor)
    document.getElementById("block-1").style.backgroundColor=hex

  }