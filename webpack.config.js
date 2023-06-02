const { resolve } = require('node:path');

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "inline-source-map" : false,
  entry: "./src/index.tsx",
  output: {
    path: resolve(__dirname, "src/nocms-public/static"),
    filename: "./bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
    ]
  },
  watchOptions: {
    ignored: ["**/node_modules", "src/nocms-public/lib", "src/nocms-private"],
  }
};
