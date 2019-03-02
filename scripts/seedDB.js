const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roomdirections"
);

const roomSeed = [
	{
		destination: "Room_32",
		map: "https://i.imgur.com/QXHSWtC.png",
		dirOne: "Turn left at the first set of doors down the hallway",
		dirTwo: "Walk down the stairs ",
		dirThree: "Your destination is the first door on the left"
	},
	{
		destination: "Men’s_restroom",
		map: "https://i.imgur.com/9nbfEGv.png",
		dirOne: "Turn left at the first set of doors down the hallway",
		dirTwo: "Your destination is the first door on the right"
	},
	{
		destination: "Women’s_restroom",
		map: "https://i.imgur.com/L4qSar6.png",
		dirOne: "Turn left at the first set of doors down the hallway",
		dirTwo: "Take a right inside the doors",
		dirThree: "Your destination is left of the stairs at the end of the hallway"
	},
	{
		destination: "Room_83",
		map: "https://i.imgur.com/TMexXIA.png",
		dirOne: "Turn left at the second set of doors down the hallway",
		dirTwo: "Your destination is inside the door on the right"
	},
	{
		destination: "Vending_machines",
		map: "https://i.imgur.com/hOQwy0Y.png",
		dirOne: "Turn left at the second set of doors down the hallway",
		dirTwo: "Walk down the ramp inside the doors",
		dirThree: "Your destination is on the right"
	},
	{
		destination: "Room_62",
		map: "https://i.imgur.com/mrKilXT.png",
		dirOne: "Turn left at the second set of doors down the hallway",
		dirTwo: "Walk down the ramp inside the doors",
		dirThree: "Your destination is on the right"
	},
	{
		destination: "Room_55",
		map: "https://i.imgur.com/NPDDwV3.png",
		dirOne: "Turn left at the second set of doors down the hallway",
		dirTwo: "Walk down the ramp inside the doors",
		dirThree: "Continue down the hallway",
		dirFour: "Your destination is the last door on the right"
	},
	{
		destination: "Room_52",
		map: "https://i.imgur.com/vRGyvUA.png",
		dirOne: "Turn left at the second set of doors down the hallway",
		dirTwo: "Walk down the ramp inside the doors",
		dirThree: "Continue down the hallway",
		dirFour: "Your destination is the last door on the left"
	},
	{
		destination: "Room_42A",
		map: "https://i.imgur.com/vhuWuIg.png",
		dirOne: "Turn left at the first set of doors down the hallway",
		dirTwo: "Walk down the stairs and continue down the hallway",
		dirThree: "Turn left at the end of the hallway ",
		dirFour: "Your destination is the first door on the left"
	},
	{
		destination: "Room_42B",
		map: "https://i.imgur.com/eMtMew0.png",
		dirOne: "Turn left at the first set of doors down the hallway",
		dirTwo: "Walk down the stairs and continue down the hallway",
		dirThree: "Turn left at the end of the hallway ",
		dirFour: "Your destination is at the end of the hallway"
	},
	{
		destination: "Room_77",
		map: "https://i.imgur.com/XD3qygk.png",
		dirOne: "Turn left at the second set of doors down the hallway",
		dirTwo: "Your destination is directly right inside the door"
	}
];

db.Room
	.remove({})
	.then(() => db.Room.collection.insertMany(roomSeed))
	.then(data => {
		console.log(data.result);
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});