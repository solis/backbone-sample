var app = app || {};

app.ItemListView = Backbone.View.extend({
    className: 'page content',

    addTemplate:_.template($('#addForm').html()),

    events:{
        'click #add':'insertItem',
        'click #showForm':'showForm'
    },

    showForm:function (e) {
        $(e.target).hide();
        this.$table.append(this.addTemplate);
    },

    insertItem:function () {
        var newItem = new app.Item({
            id:$('input.id').val(),
            date:new Date(),
            name:$('input.name').val(),
            description:$('input.description').val()
        });
        this.collection.add(newItem);
        newItem.save();
        $("#addLine").remove();
        $("#showForm").show();
    },

    initialize:function () {
        this.$el.append("<table></table>");
        this.$table = $(this.$el).find("table");
        this.$table.append("<td>id</td><td>name</td><td>description</td><td>date</td><td></td>");
        this.collection.on('add', this.addOne, this);
        this.collection.on('reset', this.render, this);
    },

    render:function () {
        this.collection.forEach(this.addOne, this);
        this.$el.append("<button id='showForm'>Add</button>");
    },

    addOne:function (model) {
        var itemView = new app.ItemView({model:model});
        itemView.render();
        this.$table.append(itemView.el);
    }
});
