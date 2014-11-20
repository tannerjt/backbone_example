// Basic Model
var StatesModel = Backbone.Model.extend({});
var StatesCollection = Backbone.Collection.extend({
	model : StatesModel,
	url : './data/states.json',
	parse : function (resp) {
		return resp;
	}
});
var states = new StatesCollection();
states.fetch();