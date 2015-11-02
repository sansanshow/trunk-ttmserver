/**
 * Created by kuo zi on 2015/10/29.
 */
Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: 'loading',
    waitOn: function () {
        return Meteor.subscribe('charts');
    }
});

Router.route("/", {name: "chartForm"});
Router.route("/login", {
    name: "login", waitOn: function () {
        Session.set("name", null);
    }
});
Router.route("/register", {name: "register"});
Router.route("/history", {name: "history"});
Router.route("/user", {name: "user"});