const prowlarr = document.getElementById("prowlarr");
prowlarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:9696/","_self"))});

const sonarr = document.getElementById("sonarr");
sonarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:8989/","_self"))});

const radarr = document.getElementById("radarr");
radarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:7878/","_self"))});

const lidarr = document.getElementById("lidarr");
lidarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:8686/","_self"))});

const readarr = document.getElementById("readarr");
readarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:8787/","_self"))});