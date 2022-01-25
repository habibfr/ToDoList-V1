const express = require('express');
const bodyParser = require('body-parser');
// const ejs = require('ejs');

const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();

app.set('view engine', 'ejs');

const day = "";
const items = ["Buy Food","Cook Food", "Eat Food"];
const workItems = ["Gaming", "Watching", "Sleeping"];

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));


app.get("/", function(req, res){
	const day = date.getDate();

	res.render('list', {
		listTitle: day,
		newListItems: items

	});
});

app.post("/",function(req, res){
	// console.log(req.body)

	const item = req.body.newItem;
	if(req.body.list === 'Work'){
		workItems.push(item);
		res.redirect("/work")
	}else{
		items.push(item);
		res.redirect("/");
	}
	// res.render('list',{todol: apa});

});


app.get("/work", function(req, res){
	res.render('list', {
		listTitle: "Work List", 
		newListItems: workItems
	})
})

app.get("/about", function(req, res){
	res.render('about');
})





app.listen(3000, function(){
	console.log("Server running on port 3000!");
});




	// switch(currentDay){
	// 	case 0:
	// 		day = "Sunday";
	// 		break;

	// 	case 1:
	// 		day = "Monday";
	// 		break;

	// 	case 2:
	// 		day = "Tuesday";
	// 		break;

	// 	case 3:
	// 		day = "Wednesday";
	// 		break;

	// 	case 4:
	// 		day = "Thursday";
	// 		break;

	// 	case 5:
	// 		day = "Friday";
	// 		break;

	// 	case 6:
	// 		day = "Saturday";
	// 		break;
	// 	default:
	// 	consle.log("Error, current day is equal " + currentDay);
	// }
