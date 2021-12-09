const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // エントリーポイント
  entry: "./src/index.jsx",
  // js/jsxファイルをwebpackで取り扱うため、バンドル処理前にBabelのローダーを使ってモジュール化
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "bundle.js",
    publicPath: "/",
  },
  // import 文で .js や .jsx ファイルを解決する設定
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  // プラグインの指定
  plugins: [
    // HtmlWebpackPlugin プラグインのインスタンスを生成（指定）
    // webpackでバンドルされたJavaScriptを表示するHTMLを自動的に生成する
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
