const path = require("path")

module.exports = {
	entry: "./src/index.js",
	output: {
	filename: "bundle.js",
	path: path.resolve(__dirname, "./dist")
	},
	mode: "none",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            }
        ]
    }
};