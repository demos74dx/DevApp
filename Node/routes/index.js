
/*
 * GET home page.
 */

exports.index = function(req, res){

	var exec = require('child_process').exec;
	exec('vagrant init precise32 http://files.vagrantup.com/precise32.box', function callback(error, stdout, stderr){
		console.log("Bring up Server");
		exec('vagrant up', function callback(error, stdout, stderr){
	    	
	    	exec('vagrant destroy -f', function callback(error, stdout, stderr){
			console.log("Server Destroyed");	    // result
	    	res.render('index', { title: 'Express' });
	});	    	
	    ///res.render('index', { title: 'Express' });
	});
	    // result
	    //res.render('index', { title: 'Express' });
	});
  //res.render('index', { title: 'Express' });
};