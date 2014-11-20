// Basic Model
var StatesModel = Backbone.Model.extend({});

var StatesCollection = Backbone.Collection.extend({
	model : StatesModel,
	initialize : function () {
		// call reset when fetching
		this.fetch({reset : true});
	},
	url : './data/states.json',
	parse : function (resp) {
		return resp;
	}
});

 