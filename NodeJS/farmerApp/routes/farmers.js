exports.getlist=function (req,res){
    req.getConnection(function(err,connection){
        var query=connection.query("Select * from farmer",function(err,rows){
            if(err) throw err;
            res.render('getfarmers',{page_title:"Farmer Details",data:rows});
        })
    })
}
exports.add = function(req, res){
    res.render('add_farmer',{page_title:"Add Farmers - Node.js"});
  };
exports.addlist=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        var data={
            name    : input.name,               dno     : input.dno,          street  : input.street,
            village :input.village,             mandal  :input.mandal,        district:input.district,
            state   :input.state,               email   : input.email,        phone   : input.phone,
            cropland:input.cropland,            crop    : input.crop,         tartcrop:input.startcrop,            endcrop :input.endcrop,
            invstamount:input.invstamount,     fnlamount:input.fnlamount,
            yesno:input.yesno
        }
        var query=connection.query('insert into farmer set ?',data,function(err,rows){
            if(err) throw err;
            res.redirect('/');
        })
    })
}
exports.searchpost=function(req, res){ 
      var input=JSON.parse(JSON.stringify(req.body));  
    req.getConnection(function(err,connection){
        var inputs=input.searchname;      
    connection.query(`SELECT * FROM farmer WHERE name LIKE '%inputs'`,
    function(err, rows,fields){
      if(err) throw err;
      
      res.render('getbyname',{page_title:"Farmer Details",data:rows})
    });
  });
}
exports.searchget=function(req, res){ 
    var input=JSON.parse(JSON.stringify(req.body));
    var inputs=[req.body.searchname];
        req.getConnection(function(err,connection){
    connection.query(`SELECT * FROM farmer WHERE name LIKE '%inputs'`,
    function(err, rows,fields){
      if(err) {
    console.log(err);  
    };
    res.render('namesearch',{page_title:"Farmer Details",data:rows})
    });
})
}