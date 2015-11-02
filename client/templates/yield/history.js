/**
 * Created by kuo zi on 2015/10/30.
 */
Template.history.helpers({
    allcharts:function(){
        return Charts.find({},{sort:{time:-1}});
    }
});