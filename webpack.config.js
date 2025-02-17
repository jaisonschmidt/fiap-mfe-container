const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        mfe1: "mfe1@http://localhost:4173/remoteEntry.js",
        mfe2: "mfe2@http://localhost:4174/remoteEntry.js",
      },
    }),
  ],
};
