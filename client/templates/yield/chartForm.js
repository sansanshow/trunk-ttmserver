/**
 * Created by kuo zi on 2015/10/29.
 */
Template.chartForm.helpers({
    charts: function () {
        var my_charts = Charts.find({}, {sort: {time: -1}, limit: 15}).fetch();
        my_charts.sort(function (a, b) {
            return a.time > b.time ? 1 : -1;
        });
        return my_charts;
    },
    users: function () {
        return Users.find();
    },
    flag: function () {
        return {
            name_is_admin: Session.get("name") == "admin"
        };
    }
});
Template.chartForm.events({
    "click #send": function (e) {
        e.preventDefault();
        if (Session.get('name') != null) {
            if ($("#content").val() != "") {
                var chart = {
                    name: Session.get('name'),
                    time: new Date(),
                    content: $("#content").val()
                };
                Charts.insert(chart);
                $("#pwd").val("");
                $("#content").val("");
            } else {
                alert("内容为空！");
            }
        } else {
            alert("请登录！");
            Router.go("/login");
        }
    }
})
;