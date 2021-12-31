package get_methods

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func Greet() echo.HandlerFunc{
	return func(c echo.Context) error {
        return c.JSON(http.StatusOK, "Hello.World!!")
    }
}