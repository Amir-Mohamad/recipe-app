module.exports = {
	images: {
		domains: ["www.pexels.com"],
	},
	future: {
		webpack5: true,
	},
	webpack: function (config, options) {
		config.experiments = {};
		return config;
	},
};
