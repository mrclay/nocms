const path = require( 'node:path' );
const { CKEditorTranslationsPlugin } = require( '@ckeditor/ckeditor5-dev-translations' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "inline-source-map" : false,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "src/nocms-public/static"),
    filename: "./bundle.js"
  },
  plugins: [
    new CKEditorTranslationsPlugin( {
      // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
      language: 'en'
    } )
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        use: [ 'raw-loader' ]
      },
      {
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
              attributes: {
                'data-cke': true
              }
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: styles.getPostCssConfig( {
                themeImporter: {
                  themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                },
                minify: true
              } )
            }
          }
        ]
      },
    ]
  },
  watchOptions: {
    ignored: ["**/node_modules", "src/nocms-public/lib", "src/nocms-private"],
  }
};
