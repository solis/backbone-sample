var app = app || {};

var AppRouter = Backbone.Router.extend({
    routes: {
        "(/)(login)": "index",
        "home(/)": "home",
        "items(/)": "items",
        "item/:id(/)": "show",
        "error(/)": "error"
    },

    items: function () {
        app.state.check();
        var itemView = new app.ItemListView({collection: app.Items});
        itemView.render();
        $('#content').html(itemView.el);
        app.Items.fetch();
    },

    show:function (id) {
        var item = new app.Item({id:id});
        var itemView = new app.ItemView({model:item});
        $('#table').html(itemView.render().el);
        item.fetch({
            success:function () {
                itemView.render()
            },
            fail:function () {
                $('body').text("ERROR. ITEM NOT FOUND.")
            }
        });
    },

    index: function () {
        app.state.set({ state: "login" });
        var loginView = new app.LoginView();
        $('#content').html(loginView.render().el);
    },

    error: function () {
        app.state.set({ state: "error" });
        var errorView = new app.ErrorView();
        $('#content').html(errorView.render().el);
    },

    home: function () {
        console.log(app.state);
        if (app.state.check()) {
            app.state.set({state: "home"});
            var homeView = new app.HomeView();
            $('#content').html(homeView.render().el);
        }
    }
});