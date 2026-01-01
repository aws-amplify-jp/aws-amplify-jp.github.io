# Amplify Japan User Group ウェブサイト

## 開発ガイド

1. `npm install` を実行して依存パッケージをダウンロード
2. `npm start` を実行して http://localhost:8000 でサーバーを実行
3. `npm run lint` を実行して linter を実行

## セキュリティに関する注意事項

現在、Gatsby 5.15.0の依存関係に含まれる`@parcel/reporter-dev-server`に既知の脆弱性（GHSA-qm9p-f9j5-w83w、moderate）が存在しますが、以下の理由により本番環境への影響はありません：

- この脆弱性は開発サーバー（dev server）のみに影響します
- 本番ビルド（`gatsby build`）には影響しません  
- Parcel側での修正がまだリリースされていないため、現時点では修正不可能です
- `.npmrc`で`audit-level=high`を設定し、moderate以下の脆弱性を警告レベルから除外しています

その他のhigh/critical脆弱性は`npm overrides`機能により修正済みです。
