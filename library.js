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
             },
  printPlaylists: function () {
       var printList = "";
       var listCount = 0;
       for(var playlist in this.playlists){
               printList += (`${playlist}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`);
               listCount += 1;
               if(listCount < Object.keys(this.playlists).length){
                      printList+= "\n";
               }
       }
       return printList;
       },
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks : function () {
       var printList = "";
       var listCount = 0;
       for (var track in this.tracks){
              printList += (`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
              listCount += 1;
              if(listCount < Object.keys(this.tracks).length){
                     printList+= "\n";
              }
       }
       return printList;
  },
  printPlaylist : function(playlistId) {
       var printList =  "";
       var listCount = 0;  
       printList += (`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks \n`);
       for (var track in this.playlists[playlistId].tracks){
              listCount +=1;
              var trackId = this.playlists[playlistId].tracks[track];
              printList += (`${trackId}: ${this.tracks[trackId].name} by ${this.tracks[trackId].artist} (${this.tracks[trackId].album})`);
              if(listCount < this.playlists[playlistId].tracks.length){
                     printList += "\n";
              }
       }
       return printList;
       },
  addTrackToPlaylist : function(trackId, playlistId) {
              if(Object.keys(this.tracks).includes(trackId) && Object.keys(this.playlists).includes(playlistId) ){
                     this.playlists[playlistId].tracks.push(trackId);
              } else{
                     console.log("Track or playlist does not exist. Try again.");
              }
              return;
       },
// generates a unique id
// (use this for addTrack and addPlaylist)

   uid : function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     },
// adds a track to the library
   addTrack : function (name, artist, album) {
       var newId = this.uid();
       this.tracks[newId] = {id: newId,
       name: name,
       artist: artist,
       album: album 
       };

   },
// adds a playlist to the library

   addPlaylist : function(name) {
       var newId = this.uid();
       this.playlists[newId] = {id: newId,
       name: name,
       tracks: []
       };
   },
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults : function(query) {
       query = query.toLowerCase();
       var matchingTracks = [];
       var printLine = "";
       for (var track in this.tracks){
              var trackName = `${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`;
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
       });
       return printLine;
   }
};


