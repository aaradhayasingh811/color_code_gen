function work(){
    let a = document.getElementById("red_mark").value ;
    let b = document.getElementById("green_mark").value ;
    let c = document.getElementById("blue_mark").value ;

    console.log(typeof(a));
    console.log(b);
    console.log(c);

    document.getElementById("red_val").innerHTML = a;
    document.getElementById("green_val").innerHTML = b;
    document.getElementById("blue_val").innerHTML = c;

    let k  =parseInt(a);
    let m  =parseInt(b);
    let n  =parseInt(c);

    console.log(typeof(k));
    console.log(m);
    console.log(n);

    document.getElementById('back').style.backgroundColor = 'rgb(' + k + ',' + m + ',' + n + ')';
    document.getElementById('rgb_val').innerHTML =  'rgb(' + k + ',' + m + ',' + n + ')';
    document.getElementById('code_color').innerHTML = rgbToHex(k,m,n);

}

const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
