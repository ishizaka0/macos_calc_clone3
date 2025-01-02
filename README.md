# macos_calc_clone3

## 概要
このプログラムは、シンプルな計算機アプリケーションです。ViteとReactを使用して構築されており、基本的な四則演算（加算、減算、乗算、除算）をサポートしています。デザインは、macOSの電卓に似せています。

## Demo
- https://macos-calc-clone3.vercel.app/

## フローチャート
```mermaid
graph TD
    A[開始] --> B{入力};
    B -- 数値 --> C[数値格納];
    B -- 演算子 --> D[演算子格納];
    C --> E{次の入力?};
    D --> E;
    E -- 数値 --> C;
    E -- 演算子 --> D;
    E -- "=" --> F[計算実行];
    F --> G[結果表示];
    G --> H[終了];
```

## シーケンス図
```mermaid
sequenceDiagram
    participant User
    participant App
    User->>App: 数値または演算子を入力
    App->>App: 入力を処理
    App->>App: 計算を実行 (必要な場合)
    App->>User: 結果を表示