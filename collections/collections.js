/**
 * Created by kuo zi on 2015/10/29.
 */
Charts = new Mongo.Collection("charts");
Users = new Mongo.Collection("Users");

Charts.allow({
    insert: function () {
        return true;
    }
});

Users.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove:function(){
        return true;
    }
});