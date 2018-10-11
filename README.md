# Deezer Custom Functions for Google Sheets

## DZR_SEARCH

Use search to get a Deezer ID (and more).

### Exemples

#### Simple, Basique

`=DZR_SEARCH("Orelsan")` will return the first result ID: [414838212](https://www.deezer.com/artist/414838212).

But we don't know what the ID is. it can be an album, an artist, a playlist, a podcast, a radio, a track, or a user...

#### Closer

`=DZR_SEARCH("The Chainsmokers"; "artist")` will return the first **artist** ID: [4104927](https://www.deezer.com/artist/4104927).

The second input can be one of the following : `['album', 'artist', 'playlist', 'podcast', 'radio', 'track', 'user']`.

#### I Know What You Want

`=DZR_SEARCH("Busta Rhymes"; "artist"; "link")` will return the **link** of the Deezer **artist** page: [https://www.deezer.com/artist/796](https://www.deezer.com/artist/796).

For more details look at the [Deezer Search API](https://developers.deezer.com/api/search).

## DZR_ID

Get Deezer data from a Deezer ID. Return by default the `title` or `name` parameter.

### Exemples

Two parameters are mandotory: The Deezer ID and its type.

`=DZR_ID(1205152; "album")` will return [Numbers Ones](https://www.deezer.com/album/1205152).

Adding a third parameter will return the requested parameter.

`=DZR_ID(558841172; "title", "explicit_lyrics")` will return [true](https://www.deezer.com/title/558841172).

## Creating a custom function

Check [Google tutorial](https://developers.google.com/apps-script/guides/sheets/functions#creating_a_custom_function).
