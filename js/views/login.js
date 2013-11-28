var app = app || {};

app.LoginView = Backbone.View.extend({

    template: _.template($('#login').html()),

    events: {
        "click input:button": "check"
    },

    check: function () {
        var username = $(this.el).find("input:text").val();
        app.state.check(username);
    },

    render: function () {
        this.$el.html(this.template(app.state.toJSON()));
        return this;
    }
});
