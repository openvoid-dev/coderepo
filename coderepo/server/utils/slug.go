package utils

import (
	"github.com/gosimple/slug"
)

func CreateSlug(text string) string {
	slugifiedText := slug.Make(text)

	return slugifiedText
}
