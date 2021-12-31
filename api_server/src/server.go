package main

import (
	get_methods "api_server/src/packages"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	//echoインスタンスの生成
	e := echo.New()

	//CORSを用いる
	e.Use(middleware.CORS())

	//URIの記述
	e.GET("/hello", get_methods.Greet())

	//サーバをポート番号1323で起動
	e.Logger.Fatal(e.Start(":1323"))
}