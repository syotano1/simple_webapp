# echo での CORS の設定

SPA を構成するために、フロントエンド側（Angular）から、echo に通信を飛ばすときには、cors の設定が必要

server.run に以下のコマンドを追加

`e.Use(middleware.CORS())`

して、terminal 上で

`go get -u github.com/labstack/echo/v4/middleware`

を叩く（順番は適当なので空気読んで）

# echo の注意点

- src の更新を反映させるには`go run <src名>`をもう一度叩く必要がある
