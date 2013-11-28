var app = app || {};

var AppState = Backbone.Model.extend({
    defaults: {
        username: "",
        state: "login"
    },

    check: function (username) {
        if (this.get('state') === 'login') {
            var find = app.Users.checkUser(username);
            this.set({
                "state": find ? "success" : "error",
                "username": username
            });
        }
        if (this.get("state") === "success") {
            app.Router.navigate("#/home", false);
            return true;
        }
        else if (this.get("state") === "error") {
            app.Router.navigate("#/error", false);
            return false;
        }
        return true;
    },

    logout: function () {
        this.set({
            "state": "login",
            "username": ""
        });
        app.Router.navigate("#/login", false);
    }
});