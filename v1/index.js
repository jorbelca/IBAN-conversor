// function entryCount async:any () {
//   const acount = prompt("Count number ...");

//   if (acount == null) {
//     return { error: "Please provide a valid count number" };
//   } else if (acount.length > 34) {
//     return {
//       error: "Revise your count number, it s not correct ",
//     };
//   }

//   const response = await fetch(`https://api.ibanapi.com/v1/validate/${acount}?api_key=f702d1232b4f78d65c0e5a73cbbe32808024a19e`)

//   console.log(response)
//  return response
// }

// entryCount();

const acount = prompt("IBAN number ...")

// HI HA QUE FER UNA PETICIO GET

const response = await fetch(
  `https://openiban.com/validate/${acount}?getBIC=true&validateBankCode=true`,
  { method: "GET", headers: { Accept: "application/json" } }
)

// const final = await response.data.json()
console.log(response)
