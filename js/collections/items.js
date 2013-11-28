var app = app || {};

var ItemCollection = Backbone.Collection.extend({
    model: app.Item,
    localStorage:new Backbone.LocalStorage("ItemList")
});

