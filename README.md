# NEXT JS BLOG

next.js + TypeScript で構築したブログ。
記事は mdx で書ける。

## ライブラリ

- styled-components
- eslint
- prettier

## 環境構築手順

依存関係

```依存関係
npm install
```

ローカルで動かす

```ローカルで動かす
npm run dev
```

ビルド

```ビルド
npm run build
```

## 記事投稿

- /src/pages/articles 配下に mdx ファイルを作成
- meta に {title, date, description, tagas[]} を含める
