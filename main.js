// $(document).ready(function(){

    //page load code
    // $('body').toggleClass('loading')

   function Jukebox(){
    this.playlist = [
    "MP3s/1_Anything_(Remix).mp3",
    "MP3s/2_Everyone_Falls_in_Love_Sometime.mp3",
    "MP3s/3_Chi_Chi_Man.mp3",
    "MP3s/4_Poison.mp3",
    "MP3s/5_Flava_In_Ya_Ear_(Remix).mp3",
    "MP3s/6_Deport_Them.mp3",
    "MP3s/7_Treat_'Em_Right.mp3",
    "MP3s/8_The_Things_You_Do_(Remix).mp3",
    "MP3s/9_Every_Little_Thing_I_Do.mp3",
    "MP3s/10_Hey_Mr_DJ.mp3",
    "MP3s/11_Rich_Girl.mp3",
    "MP3s/12_Murder_She_Wrote.mp3"
    ];

    this.display = [
    "SWV — Anything (Remix)",
    "Tanto Metro & Devonte — Everyone Falls in Love Sometime",
    "TOK — Chi Chi Man",
    "Bell Biv Devoe — Poison",
    "Craig Mack — Flava In Ya Ear (Remix)",
    "Sean Paul — Deport Them",
    "Chubb Rock — Treat 'Em Right",
    "Gina Thompson — The Things You Do (Remix)",
    "Soul For Real — Every Little Thing I Do",
    "Zhane — Hey Mr DJ",
    "Louchie Lou & Michie One — Rich_Girl",
    "Chaka Demus & Pliers — Murder She Wrote"
    ];

    this.myList = document.getElementById('mylist');
    this.nextButton = document.getElementById('next');
    this.current = document.getElementById('playing');
    this.src = this.current.getAttribute('src');
    this.index = this.playlist.indexOf(this.src);
    this.nowPlaying = document.getElementById('nowPlaying')
  }


Jukebox.prototype.play_song = function(){
  var _this = this;
    this.myList.addEventListener('change', function(){

      _this.current.setAttribute('src', _this.myList.value)

      _this.src = _this.current.getAttribute('src');

      _this.index = _this.playlist.indexOf(_this.src);

      _this.current.play();

      _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
    });
}


Jukebox.prototype.nextSong = function(){
  var _this = this;
  var nextButton = document.getElementById('next');
    this.nextButton.addEventListener('click', function(){
      if (_this.myList.value == "") {
        _this.current.setAttribute('src', _this.playlist[0]);
        _this.current.play();
        _this.src = _this.current.getAttribute('src');
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      } else if (_this.index < 12) {
        _this.index +=1;
        _this.current.setAttribute('src', _this.playlist[_this.index]);
        _this.current.play();
        _this.src = _this.current.getAttribute('src');
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      } else if (_this.index == 11) {
        _this.index = 0; 
        _this.current.setAttribute('src', _this.playlist[_this.index]);
        _this.current.play();
        _this.src = _this.current.getAttribute('src');
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      };

    });
};

Jukebox.prototype.previousSong = function(){
  var _this = this;
  var backButton = document.getElementById('back');
    backButton.addEventListener('click', function(){
      if(_this.myList.value == ""){
        _this.current.setAttribute('src', _this.playlist[11]);
        _this.current.play();
        _this.src = _this.current.getAttribute('src', _this.myList.value);
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      } else if (_this.index > 0 && _this.index < 12) {
        _this.index -= 1;
        _this.current.setAttribute('src', _this.playlist[_this.index]);
        _this.current.play();
        _this.src = _this.current.getAttribute('src');
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      } else if (_this.index == 0){
        _this.index = 11;
        _this.current.setAttribute('src', _this.playlist[_this.index]);
        _this.current.play();
        _this.src = _this.current.getAttribute('src');
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      };
    });
};

Jukebox.prototype.stopSong = function(){
  var _this = this;
  var stopButton = document.getElementById('stop');
    stopButton.addEventListener('click', function(){
      _this.current.pause();
    });
};

Jukebox.prototype.pauseSong = function(){
  var _this = this;
  var pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', function(){
      _this.current.pause();
    });
};

Jukebox.prototype.songPlay = function(){
  var _this = this;
  var playButton = document.getElementById('play');
    playButton.addEventListener('click', function(){
      if(_this.myList.value == ""){
        _this.current.setAttribute('src', _this.playlist[0]);
        _this.current.play();
        _this.src = _this.current.getAttribute('src');
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      } else {
        _this.current.play();
        _this.src = _this.current.getAttribute('src');
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      }
    });
};

Jukebox.prototype.randomSong = function(){
  var _this = this;
  var randomButton = document.getElementById('random');
    randomButton.addEventListener('click', function(){
      var newArray = [];
      if(_this.myList.value == ""){
        _this.current = _this.playlist[Math.floor(Math.random() * 12)].play();
        _this.src = _this.current.getAttribute('src', _this.myList.value);
        _this.index = _this.playlist.indexOf(_this.src);
        newArray.push(_this.index);
      } else if(_this.index == 12){
        _this.index = 0
        _this.current = _this.playlist[0].play()
        _this.src = _this.current.getAttribute('src');
        _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
      } else {
        for(i = 0; i < newArray.length; i++){
          if(_this.index == i) {
            _this.index += 1 
          } else {
            _this.current = _this.playlist[_this.index].play();
            _this.src = _this.current.getAttribute('src');
            _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
          }
        }
      }
    });
};


Jukebox.prototype.autoNext = function(){
  var _this = this;
    this.current.addEventListener('ended', function(){
      _this.index = _this.playlist.indexOf(_this.src);
        if(_this.index < 11) {
          _this.index += 1
          _this.current.setAttribute('src', _this.playlist[_this.index]);
          _this.current.play();
          _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
        } else if(_this.index == 11){
          _this.index = 0
          _this.current.setAttribute('src', _this.playlist[_this.index]);
          _this.current.play();
          _this.nowPlaying.innerHTML = "<h4 id'info_display'>" + _this.display[_this.index] + "</h4>"
        };
    });
};

var mixTape = new Jukebox()
mixTape.play_song()
mixTape.songPlay()
mixTape.nextSong()
mixTape.previousSong()
mixTape.pauseSong()
mixTape.stopSong()
mixTape.randomSong()
mixTape.autoNext()

// });














