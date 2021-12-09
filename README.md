# ai-intern-frontend-react-scaffold

CA 1Day Youth Boot Camp フロントエンド　ハンズオンの叩きリポジトリです

## ディレクトリ構成

```
.
├── README.md
├── course
│   ├── react-only
│   └── react-typescript
├── package.json
└── yarn.lock
```

`course`ディレクトリにハンズオン用のファイルを格納しています。

yarn workspace を使って似非 monorepo 化しています。カレントディレクトリで以下を実行すれば依存モジュールがインストールできます。

```shell
yarn install
```

### `course`ディレクトリーの中身

- `react-only`
  - `react`、`react-dom`、`webpack`、`webpack-cli`、`webpack-dev-server`で構成された最小限の React プロジェクトです。
- `react-typescript`
  - 上記の構成に加え、TypeScript を導入している React プロジェクトです。
