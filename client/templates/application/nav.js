/**
 * Created by kuo zi on 2015/11/2.
 */
Template.nav.helpers({
    name: function () {
        return Session.get("name");
    },
    flag: function () {
        return {
            name_not_null: Session.get("name") || null,
            name_is_null: !(Session.get("name") || null)

        }
    }
});