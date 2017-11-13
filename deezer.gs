/**
 * Search the corresponding Deezer ID
 *
 * @search {string} Search term.
 * @type {string} Search type (album, artist, playlist, podcast, radio, track, user).
 * @responseKey {string} Select response (link, nb_fan, nb_album, etc... default: id).
 * @return Deezer data
 * @customfunction
 */
function DZR_SEARCH(search, type, responseKey) {
  
//SEARCH Term
  var searchTerm = search + '' || '';
  searchTerm = searchTerm.trim();

  if ( searchTerm === '' ) throw "Empty search term.";

//SEARCH Type  
  var types = ['album', 'artist', 'playlist', 'podcast', 'radio', 'track', 'user'];
  var searchType = type || '';
  searchType = searchType.trim().toLowerCase();
  
//SEARCH Call
  var searchURL = 'https://api.deezer.com/search' + ( types.indexOf(searchType) !== -1 ? '/' + searchType : '' ) + '?q=' + encodeURIComponent( searchTerm );  
  var jsonText = UrlFetchApp.fetch(searchURL).getContentText();
  
//RESPONSE
  try {
    
    var json = JSON.parse(jsonText);
    
    if ( json.total === 0 ) throw "No result for: " + searchTerm;
    else if ( json.error ) throw json.error.message;
    
    var response = json.data[0][responseKey] || json.data[0]['id'];
    
    return JSON.stringify(response).replace(/\"/g, "");
    
  } catch (e) {
    
    throw e;
    
  }
  
}

function test_dzr_search () {
  return DZR_SEARCH('Lartiste');
};
