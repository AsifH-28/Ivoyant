self.onmessage = function (event) {
    const result = heavyComputation(event.data);
    self.postMessage(result);
  };
  
  function heavyComputation(data) {
    let sum = 0;
    for (let i = 0; i < data; i++) {
      sum += i;
    }
    return sum;
  }
  