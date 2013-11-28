var app = app || {};

var UserCollection = Backbone.Collection.extend({
    model: app.UserNameModel,

    checkUser: function (username) {
        var findResult = this.find(function (user) {
            return user.get("Name") === username
        });
        return findResult !== undefined;
    }
});

