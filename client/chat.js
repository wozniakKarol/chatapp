Messages = new Meteor.Collection("messages");

Template.chatTemplate.messages = function() {
	return Messages.find();
};

Template.chatTemplate.events = {
	'submit' : function(e, tmpl) {
			e.preventDefault();

			var newMessage = {
				userName : tmpl.find("#userName").value,
				message : tmpl.find("#chatInput").value
			};

			tmpl.find("#chatInput").value = "";

			Meteor.call(
				"addMessage",
				newMessage,
				function (err, result) {
					if (err) {
						alert("Not send! " + err.reason);
					}
				}
			);
	}
};
