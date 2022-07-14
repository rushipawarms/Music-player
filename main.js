let playPauseButton=document.querySelector("#masterPlay");
let masterSong=document.querySelector('#masterSong');
let audioElement=new Audio('songs/1.mp3');
let progressBar=document.querySelector("#myProgressBar")
let gif=document.querySelector("#gif")
let songItems=document.querySelectorAll(".songItem");
let songItemPlay=document.querySelectorAll(".songItemPlay");
let previous=document.querySelector("#previous");
let next=document.querySelector("#next");
let songIndex=1;
console.log(previous);
console.log(next)

let songs=[{songName:"song 1",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{songName:"song 2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{songName:"song 3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{songName:"song 4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{songName:"song 5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
{songName:"song 6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
{songName:"song 7",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
{songName:"song 8",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
{songName:"song 9",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},]

let makeAllPause=()=>{
    songItemPlay.forEach((Element,i)=>{
        Element.src="play-solid.svg"
    })
}

songItems.forEach((Element,i)=>{
   Element.getElementsByTagName("img")[0].src=songs[i].coverPath
   Element.getElementsByClassName("songListPlay")[0].innerText=songs[i].songName
    
})

playPauseButton.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<0)
    {
        audioElement.play();
        playPauseButton.src="circle-pause-solid.svg";
        gif.style.opacity=1;
        for(let i=1;i<=songItemPlay.length;i++)
        {
            if(i==songIndex)
            {
                songItemPlay[i-1].src="circle-pause-solid.svg"
            }
        }
        masterSong.innerText=songs[songIndex-1].songName
       
    }
    else{
        audioElement.pause();
        playPauseButton.src="play-solid.svg";
        gif.style.opacity=0;
        makeAllPause()
    }
})
audioElement.addEventListener("timeupdate",()=>{
    
    let progressPercentage=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value=progressPercentage
    if(progressPercentage==100)
    {
        audioElement.pause();
        playPauseButton.src="play-solid.svg";
        gif.style.opacity=0;
        makeAllPause()
    }
})
progressBar.addEventListener("change",()=>{
   
    audioElement.currentTime=(progressBar.value * audioElement.duration)/100;
})

songItemPlay.forEach((Element,i)=>{
    Element.addEventListener("click",(e)=>{
        if(audioElement.paused || audioElement.currentTime<0)
    {
        makeAllPause();
        songIndex=parseInt( e.target.id);
        e.target.src="circle-pause-solid.svg"
       audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        playPauseButton.src="circle-pause-solid.svg";
        gif.style.opacity=1;
        console.log(masterSong)
        masterSong.innerText=songs[songIndex-1].songName
    }
    else{
        if(e.target.id==songIndex)
        {
            audioElement.pause();
            playPauseButton.src="play-solid.svg";
            gif.style.opacity=0;
            makeAllPause()
        }
        else{
            makeAllPause();
        songIndex=parseInt( e.target.id);
        e.target.src="circle-pause-solid.svg"
       audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        playPauseButton.src="circle-pause-solid.svg";
        gif.style.opacity=1;
        console.log(masterSong)
        masterSong.innerText=songs[songIndex-1].songName
        }
    }
    })
})

previous.addEventListener("click",()=>{
    console.log("previous");
    if(songIndex<=1)
    {
        songIndex=9;
    }
    else{
        songIndex=songIndex-1;
    }
    console.log(songIndex);
    audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        playPauseButton.src="circle-pause-solid.svg";
        gif.style.opacity=1;
        makeAllPause()
        for(let i=1;i<=songItemPlay.length;i++)
        {
            if(i==songIndex)
            {
                songItemPlay[i-1].src="circle-pause-solid.svg"
            }
        }
        masterSong.innerText=songs[songIndex-1].songName

})

next.addEventListener("click",()=>{

    console.log("next");
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{
        songIndex=songIndex+1;
    }
    console.log(songIndex);
    audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        playPauseButton.src="circle-pause-solid.svg";
        gif.style.opacity=1;
        makeAllPause()
        for(let i=1;i<=songItemPlay.length;i++)
        {
            if(i==songIndex)
            {
                songItemPlay[i-1].src="circle-pause-solid.svg"
            }
        }
        masterSong.innerText=songs[songIndex-1].songName

})

