
let playpause = document.getElementById("playpause");
let ccnn = document.getElementById("ccnn");
let sound = document.getElementById("sound");
let next = document.getElementById("next");
let last = document.getElementById("last");
let headpic = document.getElementById("headpic");
let num = 0;
let path;
let musiclist = ["匆匆那年", "郭峰-甘心情愿", "那英-默", "陪你度过漫长岁月", "我和我的祖国"];
let musictitle = document.getElementById("musictitle");



playpause.onclick = function () {
    if (ccnn.paused == 1) {
        ccnn.play();
        playpause.className = "zanting";
        headpic.style.animation = "turnaround 10s linear infinite";
    }
    else {
        ccnn.pause();
        playpause.className = "bofang";
        // headpic.style.animationPlayState = "paused";
        headpic.style.animation = "none";
    }
}
sound.onchange = function () {
    ccnn.volume = sound.value;
}
next.onclick = function () {
    if (num < 4) { num++; }
    else { num = 0 };
    ccnn.src = "audio/" + musiclist[num] + ".mp3";
    ccnn.play();
    musictitle.innerHTML = musiclist[num];
    path = "images/" + num + ".jpg";
    headpic.style.backgroundImage = "url(" + path + ")";
}
last.onclick = function () {
    if (num > 0) { num--; }
    else { num = 4 };
    ccnn.src = "audio/" + musiclist[num] + ".mp3";
    ccnn.play();
    musictitle.innerHTML = musiclist[num];
    path = "images/" + num + ".jpg";
    headpic.style.backgroundImage = "url(" + path + ")";
}
