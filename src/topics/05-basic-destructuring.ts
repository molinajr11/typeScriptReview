export {}

interface AudioPlayer {
    audioVolume : number;
    songDuration : number;
    song :string 
    details :Details;
}

interface Details {
    author : string;
    year : number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 2.00,
    song: "One Dance",
    details: {
        author: "",
        year: 0
    }
}

const { song : anotherSong , 
    songDuration:duration,
details} = audioPlayer // anothersong hace referencia al atributo song del objeto

const {author} = details;


