# NEXT JS BLOG

next.js + TypeScript で構築したブログ。
記事は mdx で書ける。

ブログサイト: <https://ok-log.net/>

## ライブラリ

- styled-components
- eslint
- prettier

## 環境構築手順

依存関係

```依存関係
yarn
```

ローカルで動かす

```ローカルで動かす
yarn dev
```

ビルド

```ビルド
yarn build
```

## 記事投稿

- /src/pages/articles 配下に mdx ファイルを作成
`yarn create-post`
- meta に {title, date, description, tagas[]} を含める

## scaffdog によるファイルの雛形自動生成

- 記事ページ `yarn create-post`
- Page `yarn create-page`
- Component `yarn create-component`

## デプロイ

- vercelと連携されているため、masterブランチの更新時にデプロイされる
