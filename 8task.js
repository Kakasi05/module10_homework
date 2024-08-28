let user = new Map([

    ["name", "Ivan"],
  
    ["age", "30"],
  
    ["profession", "layer"]
  
  ]);
   console.log(user)
  for (let name of user.keys()) {

    console.log(name); 
  
  }
  user.forEach((value, key) => {
    console.log(`Ключ — ${key}, значение — ${value}`);
});
