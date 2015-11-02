/**
 * Created by kuo zi on 2015/10/30.
 */
Template.user.helpers({
    users: function () {
        if (Session.get("name") && Session.get("name") == "admin") {
            return Users.find();
        } else {
            return null;
        }
    }
});
Template.user.events({
    "click #adduser": function () {
        if ($('#name').val() != "" && Session.get("name") && Session.get("name") == "admin") {
            if (Users.find({name: $('#name').val()}).count() == 0) {
                Users.insert({name: $('#name').val()});
                $('#name').val("");
            }
        } else {
            alert("用户已存在或权限不够！");
        }
    }
});