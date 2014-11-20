var GreetingView = Backbone.View.extend({
	events : {
		"click h2" : "sayGreeting"
	},
	template : _.template("<h2>Movie Name: </h2> <%= name %>"),
	render : function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	sayGreeting : function () {
		alert(this.model.get('greeting'));
	}
});

var newGreeting = new GreetingView({model : greeting});