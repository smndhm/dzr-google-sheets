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
  var typeId = type || '';
  typeId = typeId.trim().toLowerCase();
  
//SEARCH Call
  var searchURL = 'https://api.deezer.com/search' + ( types.indexOf(typeId) !== -1 ? '/' + typeId : '' ) + '?q=' + encodeURIComponent( searchTerm );  
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

/**
 * Get data from Deezer ID
 *
 * @deezer_id {integer} Deezer ID
 * @type {string} type ID (album, artist, playlist, podcast, radio, track, user, upc).
 * @responseKey {string} Select response (link, nb_fan, nb_album, etc... default: id).
 * @return Deezer data
 * @customfunction
 */
function DZR_ID(deezer_id, type, responseKey) {
  
//Deezer ID
  var deezerId = parseInt(deezer_id) || 0;
  
  if ( deezerId === 0 ) throw "No Deezer Id";

//Type ID
  var types = ['album', 'artist', 'playlist', 'podcast', 'radio', 'track', 'user', 'upc'];
  var typeId = type || '';
  typeId = typeId.trim().toLowerCase();
  
  if ( typeId === '' ) throw "You must define a Deezer ID (album, artist, playlist, podcast, radio, track, user, UPC).";
  else if ( types.indexOf(typeId) === -1 ) throw "Wrong type ID (album, artist, playlist, podcast, radio, track, user, UPC).";
  
//SEARCH Call
  var searchURL = 'https://api.deezer.com/' + ( typeId === 'upc' ? 'album/upc:' : typeId + '/' ) + deezer_id;  
  var jsonText = UrlFetchApp.fetch(searchURL).getContentText();
  
//RESPONSE
  try {
    
    var json = JSON.parse(jsonText);
    
    if ( json.error ) throw json.error.message;
    
    var response = json[responseKey] || json['title'] || json['name'];
    
    return JSON.stringify(response).replace(/\"/g, "");
    
  } catch (e) {
    
    throw e;
    
  }
  
}

function test_dzr_search () {
  return DZR_SEARCH('Lartiste');
};

function test_dzr_search () {
  return DZR_ID(559269722);
};
