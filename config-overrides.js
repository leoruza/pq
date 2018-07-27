const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
	config = rewireLess.withLoaderOptions({
		javascriptEnabled: true,
		modifyVars: { 
			'@primary-color': '#8ac8ce',
			'@secundary-color': '#efb090',
			'@text-color-secondary': '#efb090'
		},
	})(config, env);
	return config;
};