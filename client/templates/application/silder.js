/**
 * Created by kuo zi on 2015/10/30.
 */
Template.silder.helpers({
    users: function () {
        return Users.find();
    },
    nameIs: function () {
        return Session.get("name") == 'admin';
    }
});