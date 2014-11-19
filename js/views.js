var GreetingView = Backbone.View.extend({
	render : function () {
		this.$el.html(this.model.get('name'));
		return this;
	}
});

var newGreeting = new GreetingView({model : greeting});