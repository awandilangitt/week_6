const getNumber = (callback, callback2) => {
    setTimeout(() => {
      return callback(10, callback2);
    }, 1000); // Delay for 1 seconds
  };
  
  const calcNumber = (number, callback) => {
    console.log(number ** 2);
    callback(number ** 2);
  };
  
  const oddEven = (number) => {
    const result = number % 2 == 0 ? "genap" : "ganjil";
    console.log(`bilangan ${number} itu bilangan ${result}`);
  };
  
  getNumber(calcNumber, oddEven);
  