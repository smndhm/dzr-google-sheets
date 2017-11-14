# Deezer search ID Custom Function in Google Sheets

Easily get a Deezer ID in Google Sheets.

## Exemples

### Simple, Basique

`=DZR_SEARCH("Orelsan")` will return the first result ID: [414838212](https://www.deezer.com/artist/414838212)

But we don't know what the ID is. it can be an album, an artist, a playlist, a podcast, a radio, a track, or a user...

### Closer

`=DZR_SEARCH("The Chainsmokers"; "artist")` will return the first **artist** ID: [4104927](https://www.deezer.com/artist/4104927)

The second input can be one of the following : `['album', 'artist', 'playlist', 'podcast', 'radio', 'track', 'user']`.

### I Know What You Want

`=DZR_SEARCH("Busta Rhymes"; "artist"; "link")` will return the **link** of the Deezer **artist** page: [https://www.deezer.com/artist/796](https://www.deezer.com/artist/796)

For more details look at the [Deezer Search API](https://developers.deezer.com/api/search).

## Creating a custom function

Check [Google tutorial](https://developers.google.com/apps-script/guides/sheets/functions#creating_a_custom_function).
