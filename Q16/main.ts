//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guestArr: string[] = ["Asad" ,"Ikram", "Arslan", "Hamza",  "Mehran"]
let canNotAttend: string = "Arslan"
let newGuest: string = "abdullah"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//guestArr.map((item) => (
   // console.log(`Dear ${item}, I Found A Bigger Dinner Table`)
//));

let guestbegin: string = "hassan";
guestArr.unshift(guestbegin)
console.log (guestArr)
let middleguest: string = "rehan";
let middleindex = guestArr.length/2
guestArr.splice(middleindex,0,middleguest)
console.log(guestArr)

guestArr.push("usman")
console.log(guestArr)

