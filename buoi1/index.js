//BÀI 1
const users = [
  { firstName: "Susan", lastName: "Steward" },
   { firstName: "Daniel", lastName: "Longbottom" },
   { firstName: "Jacob", lastName: "Black" },
 ];
 let use = users.map((item) => {
   let fullName = item.firstName + item.lastName;
   return fullName;
 });

//BÀI 2
const creatures = [
   { name: "Shark", habitat: "Ocean" },
  { name: "Whale", habitat: "Ocean" },
   { name: "Lion", habitat: "Savanna" },
   { name: "Monkey", habitat: "Jungle" },
 ];
 let sea = creatures.filter((item) => item.habitat === "Ocean");
