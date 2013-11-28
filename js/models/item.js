var app = app || {};

app.Item = Backbone.Model.extend({
    defaults:function () {
        return {
            'id':-1,
            'date':new Date(),
            'name':"",
            'description':""
        }
    },
    localStorage:new Backbone.LocalStorage("ItemList")
});