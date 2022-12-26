const btnEl = document.querySelector("#btn")
const emojiName = document.querySelector("#emoji-name");

const emoji = [];

async function emojiFetch() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=ac1afe182595bceda591ea016375bfc462ede028")

    data = await response.json()


    for (i=0; i<1000; i++) {
        emoji.push({
          emojiChar: data[i].character,
          emojiCode: data[i].unicodeName
        })
    }

}

emojiFetch();



btnEl.addEventListener("click", () => {
    const randomEl = Math.floor(Math.random() * emoji.length)
    btnEl.innerText = emoji[randomEl].emojiChar;
    emojiName.innerText = emoji[randomEl].emojiCode
    
})