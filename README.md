# Amplify Japan User Group ウェブサイト

## 開発ガイド

1. `npm install` を実行して依存パッケージをダウンロード
2. `npm start` を実行して local でサーバーを実行
3. `npm run lint` を実行して linter を実行

### GitHub Access Token

コントリビューターのコンテンツを作成するために GitHub API を使用します。`npm start`を繰り返すと GitHub API のレート制限に該当して API 呼び出しが制限される場合があります。
その場合、[個人アクセストークンを使用する](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token)
に従いアクセストークンを発行して以下のように `GITHUB_TOKEN` 環境変数で指定して実行してください。

```sh
GITHUB_TOKEN=<personal access token> npm start
```
