var app = app || {};

app.ItemView = Backbone.View.extend({
    tagName: 'tr',

    template: _.template($('#item').html()),
    editTemplate: _.template($('#itemEdit').html()),

    events: {
        "click #remove": "deleteItem",
        "click #edit": "editItem",
        "click #save": "saveItem"
    },

    deleteItem: function () {
        console.log('deleted');
        this.model.destroy();
        this.remove();
    },

    editItem: function () {
        console.log('editing');
        this.$el.html(this.editTemplate(this.model.toJSON()));
    },

    saveItem: function () {
        console.log('saved');
        this.model.save({
            id: $('input.id').val(),
            date: new Date(),
            name: $('input.name').val(),
            description: $('input.description').val()
        });
    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
