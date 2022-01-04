const radio = {
    stations:[
        {
            name: 'k104',
            songs:[{
                title: 'baby on baby',
                artist: 'dababy'
            },
            {
                title: 'song1',
                artist: 'test'
            }
            ]
        },
        {
            name: '97.9 the beat',
            songs:[{
                title: 'music',
                artist: 'artist'
            }
            ]
        }
    ],
    random() {
        const radioIndex = Math.floor(Math.random() * radio.stations.length)
        const songsIndex =  Math.floor(Math.random() * radio.stations[radioIndex].songs.length)
        return radio.stations[radioIndex].songs[songsIndex];
        
    }
} 
    const playSong = radio.random();
    console.log("Now Playing: " + playSong.title +  " by "  + playSong.artist)
// const stations = [
    
// ]

// for (let i = 0; i < 2; i++) {
//     stations[i] = new Radio();


// stations[0].name = 'Mark'
// stations[0].songs = ['tea']
// stations[1].name = 'Steph'
// stations[1].songs = 'whatever'
// }