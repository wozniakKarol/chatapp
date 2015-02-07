Meteor.methods( {
	addMessage : function (newMessage) {

			if (newMessage.userName == "") {
				throw new Meteor.Error(413, "Missing login! You should write your login!");
			}
			if (newMessage.message == "") {
				throw new Meteor.Error(413, "Missing message! You should write message!");
			}
			var id = Messages.insert(newMessage);
			var cursor = Messages.find();
			if (cursor.count() > 30) {
				var oldestMessage = Messages.findOne();
				Messages.remove(oldestMessage);
			}
			return id;
	}
});