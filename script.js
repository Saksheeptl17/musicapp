console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItems'));

let songs = [
    { songName: "Players", FilePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Wolves", FilePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Calm Down", FilePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Ykwim", FilePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Iginte", FilePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "2002", FilePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Offshore", FilePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "No Mercy", FilePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Gasolina", FilePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Diamond", FilePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    getElementsByTagName("img")[0].src=songs[i].filePath;
})

//audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100) ;
    myProgressBar.value= progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
