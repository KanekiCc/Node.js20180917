//加载mongodb模块
var mongodb = require("mongodb").MongoClient;
//链接数据库
var url = "mongodb://localhost:27017"
mongodb.connect(url,function(err,db) {
    var dbBase = db.db("test")
    //链接集合查询数据
    //dbBase.collection("demo1").insert({"name": "ff", "age": 6},function(err,data){
    //    console.log("插入成功");
    //    //关闭数据库
    //    db.close()
    //})
    //dbBase.collection("demo1").remove({"name":"ff","age":6},function(err,data){
    //    console.log("删除成功");
    //    db.close()
    //})
    //dbBase.collection("demo1").update({"name":"ff","age":6},{$set:{"name":"ff","age":6}},function(err,data){
    //    console.log("更新成功");
    //    db.close()
    //})
    dbBase.collection("demo1").find().toArray(function(err,data){
        console.log(data);
        db.close()
    })
})
