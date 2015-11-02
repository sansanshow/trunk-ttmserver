/**
 * Created by kuo zi on 2015/10/30.
 */
Template.login.helpers({
    "cleanUser": function () {
        Session.set("name", null);
    }
});
Template.login.events({
    "submit form": function (e) {
        e.preventDefault();
        if ($("#name").val() != "" && $("#pwd").val() != "") {
            var user = {
                name: $("#name").val(),
                pwd: $("#pwd").val()
            };
            var res = Users.find({name: $("#name").val(), pwd: $("#pwd").val()}).count();
            if (res == 1) {
                Session.set("name", $("#name").val());
                Router.go("/");
            } else {
                alert("用户名或密码错误！");
            }
        } else {
            alert("用户名或密码为空！");
        }
    }
});