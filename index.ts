// import {countries} from "./countries.json"

function entryCount() {
  const acount = prompt("Count number ...");
  const country = acount?.slice(0,3)
  console.log( country );
  if (acount == null) {
    return { error: "Please provide a valid count number" };
  } else if (acount.length > 34) {
    return {
      error: "Revise your count number, it s not correct ",
    };
  }

  // if (acount[0-1] == countries){
  //   return countries
  // } 
}

entryCount();
