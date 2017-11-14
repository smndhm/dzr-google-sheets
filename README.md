# Deezer search ID formula for Google Sheets
Easily get a Deezer ID

## Exemples

### Simple, Basique

`=DZR_SEARCH("Orelsan")` will return the first result ID: [414838212](https://www.deezer.com/artist/414838212)
But the result can be an artist, track, or album ID.

### Closer
`=DZR_SEARCH("The Chainsmokers"; "artist")` will return the first **artist** ID: [4104927](https://www.deezer.com/artist/4104927)

The second input can be one of the following : `['album', 'artist', 'playlist', 'podcast', 'radio', 'track', 'user']`.

### I Know What You Want
`=DZR_SEARCH("Busta Rhymes"; "artist"; "link")` will return the **link** of the Deezer **artist** page: [https://www.deezer.com/artist/796](https://www.deezer.com/artist/796)

For more details look at the [Deezer Search API](https://developers.deezer.com/api/search).
