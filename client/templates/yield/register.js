/**
 * Created by kuo zi on 2015/10/30.
 */
Template.register.events({
    "submit form": function (e) {
        e.preventDefault();
        if ($("#name").val() != "" && $("#pwd").val() != "") {
            if (Users.find({name: $("#name").val()}).fetch().length != 0) {
                if (!Users.find({name: $("#name").val()}).fetch()[0].pwd) {
                    var finduser = Users.find({name: $("#name").val()}).fetch()[0];
                    finduser.pwd = $("#pwd").val();
                    Users.remove({_id: finduser._id});
                    var res = Users.insert({name: finduser.name, pwd: finduser.pwd});
                    if (res !=null) {
                        Router.go("/login");
                    }
                } else {
                    alert("请勿重新注册！");
                }
            } else {
                alert("请使用真实姓名或联系管理员kuo zi！");
            }

        }
    }
});