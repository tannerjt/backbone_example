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
		var imageView = new StateImageView({
			model : this.collection.get($(evt.target).attr('id'))
		});
		imageView.render();
	},
	template : _.template("<li id='<%= cid %>' ><%= name %></li>"),
	render : function () {
		var content = "";
		_.each(this.collection.models, function (state) {
			var s = state.toJSON();
			s['cid'] = state.cid;
			content += this.template(s);
		}, this);
		this.$el.html(content);
		return this;
	}
});

var StateImageView = Backbone.View.extend({
	el : "#imageView",
	template : _.template("<img src='./data/images/<%= image.image_name %>'>"),
	render : function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
})

