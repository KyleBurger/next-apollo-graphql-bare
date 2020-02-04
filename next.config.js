const withOptimizedImages = require("next-optimized-images");
const { parsed: localEnv } = require("dotenv").config();

module.exports = withOptimizedImages({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.module.rules.push({
      test: /\.(png|jpg|webp|woff|woff2|eot|ttf|gif|svg)(\?[a-z0-9=.]+)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 1,
            fallback: require.resolve("file-loader"),
            publicPath: "/_next/static/images/",
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "graphql-tag/loader"
        }
      ]
    });

    return config;
  },
  env: {
    // YOUR ENV PATHS HERE
  }
});
