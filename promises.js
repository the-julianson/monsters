const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("Suceeded");
    }, 500);
  } else {
      reject("Failed");
  }
});

myPromise.then(resolve => console.log(resolve)).catch(reject => console.log(reject));

// in the first case there is no need for the rejected value since we are just trying to have the time pass out, we know for 
// sure that a some point the timer will run out.



//I can do something with the resolve, chain it with another .then and so on. 

myPromise.then(resolve => resolve + " Heyy qye pasa! ")
.then(resolve => console.log(resolve))
.catch(reject => reject + "here to")
.catch(reject => console.log(reject));