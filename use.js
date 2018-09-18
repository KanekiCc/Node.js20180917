var db=require("./db")
db.add("test","demo1",{"name":"gg"},function(err,data){
    console.log("插入成功");
});