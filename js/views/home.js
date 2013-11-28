var app = app || {};

app.HomeView = Backbone.View.extend({

    template: _.template($('#home').html()),

    events: {
        "click button.logout": "logout"
    },

    logout: function () {
        app.state.logout();
    },

    render: function () {
        this.$el.html(this.template(app.state.toJSON()));
        return this;
    }
});
