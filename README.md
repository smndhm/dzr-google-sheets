# Deezer search ID formula for Google Sheets
Easily get a Deezer ID

## Exemples

### Simple, Basique

`=DZR_SEARCH('Orelsan')` will return the first result ID.
But the result can be an artist, track, or album ID.

### Closer
`=DZR_SEARCH('The Chainsmokers'; 'artist')` will return the first **artist** ID.

The second input can be on of the following : `['album', 'artist', 'playlist', 'podcast', 'radio', 'track', 'user']`.

### I Know What You Want
`=DZR_SEARCH('Busta Rhymes'; 'artist'; 'link')` will return the **link** of the Deezer **artist** page.

For more details look at the [Deezer Search API](https://developers.deezer.com/api/search).
