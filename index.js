function scuberGreetingForFeet(x){
  if (x <=400){
  return ("This one is on me!")

  }
  else if(x <= 2000){
    let price = "twenty bucks.";
    return ("That will be twenty bucks.");
  }
  else if (x >=2000){
    let price = "thirty bucks.";
    return ("I will gladly take your thirty bucks.");   
  }
    return ('No can do.');
  
  // Write your code here!
}

function ternaryCheckCity(city){
  if (city==="NYC"){
    return ("Ok, sounds good.");
  }
  else if (city !== "NYC"){
    return ("No go.");
  }
  // Write your code here!
}

function switchOnCharmFromTip(trip){
  if (trip==='generous'){  
    return ('Thank you so much.');
  }
  else if (trip==='not as generous'){
    return ('Thank you.');
  }
  else{
    let outPut = "Bye.";
    return (outPut);
    
  }

  // Write your code here!
} 