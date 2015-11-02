/**
 * Created by kuo zi on 2015/10/30.
 */
Meteor.publish('charts', function () {
    return Charts.find({}, {sort: {time: -1}, limit: 1000});
});
Meteor.publish('users',function(){
    return Users.find();
});
