(function() {
	var browserSync = require('browser-sync').create(),
	browserSyncServer = {
		server: './',
    	files: [
    		'./index.html',
    		'./assets/**/*.*'
    	]
  	};

  	browserSync.init(browserSyncServer);
})();
