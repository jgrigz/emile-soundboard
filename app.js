const sounds = [
    "Ha Ha Ha! Let's do it!",
    "Oh yeah!",
    "Get some!",
    "Ready to Rock!",
    "Laugh",
    "Got eyes on a tango!"
];

sounds.forEach((sound) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn)
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}