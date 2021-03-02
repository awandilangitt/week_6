const getNumber = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 1000); // Delay for 1 seconds
    });
  };
  
  const calcNumber = () => {
    return getNumber().then((number) => {
      return number ** 2;
    });
  };
  
  const oddEven = () => {
    calcNumber().then((number) => {
      const result = number % 2 == 0 ? "genap" : "ganjil";
      console.log(`bilangan ${number} itu bilangan ${result}`);
    });
  };
  
  oddEven();
  
  