/**
 * Created by kuo zi on 2015/10/30.
 */
if (Users.find({name: "admin"}).count() == 0) {
    Users.insert({name: "admin", pwd: "info2015"});
}
if (Users.find({name: "徐文超"}).count() == 0) {
    Users.insert({name: "徐文超"});
}
if (Users.find({name: "晓雪"}).count() == 0) {
    Users.insert({name: "晓雪"});
}
if (Users.find({name: "黄继奎"}).count() == 0) {
    Users.insert({name: "黄继奎"});
}
if (Users.find({name: "邸永志"}).count() == 0) {
    Users.insert({name: "邸永志"});
}
if (Users.find({name: "钱前"}).count() == 0) {
    Users.insert({name: "钱前"});
}
if (Users.find({name: "马三"}).count() == 0) {
    Users.insert({name: "马三"});
}
if (Users.find({name: "佟媛媛"}).count() == 0) {
    Users.insert({name: "佟媛媛"});
}

