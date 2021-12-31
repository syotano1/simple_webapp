package get_methods

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func Greet() echo.HandlerFunc{
	return func(c echo.Context) error {
		name := c.QueryParam("name")
		if (name == ""){
			return c.JSON(http.StatusOK, "name is empty")
		}
        return c.JSON(http.StatusOK, "Mr." + name + " Hello.World!!")
    }
}