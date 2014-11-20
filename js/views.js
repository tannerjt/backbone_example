var StatesView = Backbone.View.extend({
	tagName : "ul",
	events : {
		"click li" : "showStateImage"
	},
	initialize : function () {
		// when collection is reset, rerender the view
		// this will fix async issues
		this.collection.on('reset', this.render, this);
	},
	showStateImage : function (evt) {
		alert('click');
	},
	template : _.template("<li><%= name %></li>"),
	render : function () {
		var content = "";
		_.each(this.collection.models, function (state) {
			content += this.template(state.toJSON());
		}, this);
		this.$el.html(content);
		return this;
	}
});

var listView = new StatesView({ collection : states });