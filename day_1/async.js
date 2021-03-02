const getNumber = () => {
    setTimeout(() => {
      return 10;
    }, 1000);
  };
  
  const calcNumber = () => {
    const number = getNumber();
    console.log(number);
    console.log(number ** 2);
  };
  
  calcNumber();