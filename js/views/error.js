var app = app || {};

app.ErrorView = Backbone.View.extend({

    template: _.template($('#error').html()),

    render: function () {
        this.$el.html(this.template(app.state.toJSON()));
        return this;
    }
});

