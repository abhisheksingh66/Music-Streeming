console.log('welcome')
let songIndex=0
let audioElement=new Audio('song/1.mp3') 
let myProgressBar=document.getElementById('myProgressBar')
let masterPlay=document.getElementById('masterPlay')
let gif=document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('songItem'))
let masterSongname=document.getElementById('masterSongName')



let songs=[
    {songName:'Bhole',filePath:'song/1.mp3',coverPath:'img/1.jpg'},
    {songName:'Tere Bajjon',filePath:'song/2.mp3',coverPath:'img/2.jpg'},
    {songName:'Kesariyo Rang',filePath:'song/3.mp3',coverPath:'img/3.jpg'},
    {songName:'Manike',filePath:'song/4.mp3',coverPath:'img/4.jpg'},
    {songName:'Dhoka',filePath:'song/5.mp3',coverPath:'img/5.jpg'},
    {songName:'Maan Meri Jaan',filePath:'song/6.mp3',coverPath:'img/6.jpg'},
    {songName:'O Bedardiya',filePath:'song/7.mp3',coverPath:'img/7.jpg'},
    {songName:'Teri Seva Karunga',filePath:'song/8.mp3',coverPath:'img/8.jpg'},
    {songName:'Ratan Lambiyan',filePath:'song/9.mp3',coverPath:'img/9.jpg'},   
     {songName:'Dill Galati Kar baitha Hai',filePath:'song/10.mp3',coverPath:'img/10.jpg'}

]

songItem.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})

// audioElement.play()
// handle play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress
})

myProgressBar.addEventListener('input',()=>{
    audioElement.currentTime= (myProgressBar.value * audioElement.duration/100)
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

            element.classList.remove('fa-pause-circle')
            element.classList.add('fa-play-circle')

    
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    //  console.log(e.target)
     makeAllPlays()
     songIndex=parseInt(e.target.id)
     
     e.target.classList.remove('fa-play-circle')
     e.target.classList.add('fa-pause-circle')
    //  audioElement.src='song/2.mp3'
     audioElement.src=`song/${songIndex +1 }.mp3`
     masterSongname.innerText=songs[songIndex ].songName
     audioElement.currentTime=0

     audioElement.play()
gif.style.opacity=1
     masterPlay.classList.remove('fa-play-circle')
     masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0

    }
    else{

        songIndex+=1
    }
    
     audioElement.src=`song/${songIndex +1}.mp3`
     masterSongname.innerText=songs[songIndex].songName
     audioElement.currentTime=0
     audioElement.play()
     masterPlay.classList.remove('fa-play-circle')
     masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('preivious').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0

    }
    else{

        songIndex-=1
    }
    
     audioElement.src=`song/${songIndex +1}.mp3`
     masterSongname.innerText=songs[songIndex].songName
     audioElement.currentTime=0
     audioElement.play()
     masterPlay.classList.remove('fa-play-circle')
     masterPlay.classList.add('fa-pause-circle')
})
