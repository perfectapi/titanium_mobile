// create table view data object
var data = [
	{title:'Facebook', hasChild:true, test:'../examples/facebook.js'},
	{title:'YQL', hasChild:true, test:'../todo.js'},
	{title:'Twitter', hasChild:true, test:'../examples/twitter.js'},
	{title:'SOAP', hasChild:true, test:'../examples/soap.js'},

];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true})
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
