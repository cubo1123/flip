function flip() {
    return Math.random() >= 0.5;
  }
  
  function randomNumber(n) {
    if(n === undefined) throw new Error("n is required");
    if(n <= 0) throw new Error("n must be greater than 0");
    if(n > 1000000) throw new Error("n must be lower than 1,000,000");
    
    if(n === 1) return 0;

    var max = n-1;
    var k = max.toString(2).length;
    var r;
    do {
      r = parseInt(randomBinary(k), 2);
    } while (r > max);
    return r;
  }

  function randomBinary(m){
    binary = "";
    for (var i=0; i<m; i++) {
      binary+= flip()? "1" : "0";
    }
    return binary;
  }
  
  console.log(randomNumber(1000000))