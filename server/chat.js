Messages = new Meteor.Collection("messages");

Meteor.startup(function() {
	if (Messages.find().count() == 0) {
		Messages.insert({ userName: "Server Message", message: "First message from server"});
	}
});