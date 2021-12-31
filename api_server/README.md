# echo での CORS の設定

SPA を構成するために、フロントエンド側（Angular）から、echo に通信を飛ばすときには、cors の設定が必要

server.run に以下のコマンドを追加

```
e.Use(middleware.CORS())
```

して、terminal 上で

```
go get -u github.com/labstack/echo/v4/middleware
```

を叩く（順番は適当なので空気読んで）

# echo の注意点

- src の更新を反映させるには
  ```
  `go run <src名>`
  ```
  をもう一度叩く必要がある

# 自作 package の導入

[こちら](https://qiita.com/tkj06/items/a5f79417935100045650)を参照のこと

内容を噛み砕くと

- import での package の指定を相対パスではなく、`go init <module名>`で指定した`<module名>`からのパスにする
