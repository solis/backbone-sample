var app = app || {};

$(function (){
    app.Users = new UserCollection([
        { Name: "admin" },
        { Name: "test" },
        { Name: "user" }
    ]);
    app.state = new AppState();
    app.Items = new ItemCollection();
    app.Router = new AppRouter();
    Backbone.history.start();
});
