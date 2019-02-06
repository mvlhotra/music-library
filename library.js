var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
       var printList = "";
       var listCount = 0;
       for(var playlist in library.playlists){
               printList += (`${playlist}: ${library.playlists[playlist].name} - ${library.playlists[playlist].tracks.length} tracks`);
               listCount += 1;
               if(listCount < Object.keys(library.playlists).length){
                      printList+= "\n";
               }
       }
       return printList;
};


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
       var printList = "";
       var listCount = 0;
       for (var track in library.tracks){
              printList += (`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
              listCount += 1;
              if(listCount < Object.keys(library.tracks).length){
                     printList+= "\n";
              }
       }
       return printList;
};

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
       var printList =  "";
       var listCount = 0;  
       printList += (`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks \n`);
       for (var track in library.playlists[playlistId].tracks){
              listCount +=1;
              var trackId = library.playlists[playlistId].tracks[track];
              printList += (`${trackId}: ${library.tracks[trackId].name} by ${library.tracks[trackId].artist} (${library.tracks[trackId].album})`);
              if(listCount < library.playlists[playlistId].tracks.length){
                     printList += "\n";
              }
       }
       return printList;
};

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
       if(Object.keys(library.tracks).includes(trackId) && Object.keys(library.playlists).includes(playlistId) ){
              library.playlists[playlistId].tracks.push(trackId);
       } else{
              console.log("Track or playlist does not exist. Try again.");
       }
       return;
};



// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

var addTrack = function (name, artist, album) {
       var newId = uid();
       library.tracks[newId] = {id: newId,
       name: name,
       artist: artist,
       album: album 
       };

};

// adds a playlist to the library

var addPlaylist = function (name) {
       var newId = uid();
       library.playlists[newId] = {id: newId,
       name: name,
       tracks: []
       };
};

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
       query = query.toLowerCase();
       var matchingTracks = [];
       var printLine = "";
       for (var track in library.tracks){
              var trackName = `${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`;
              var trackLower = trackName.toLowerCase();
              if (trackLower.search(query) !== -1){
                     matchingTracks.push(trackName);
              }
       }
       matchingTracks.forEach(function(track,i){
              printLine += matchingTracks[i];
              if(i < matchingTracks.length-1){
                     printLine += "\n";
              }
       })
       return printLine;


};

console.log(printSearchResults("od"));