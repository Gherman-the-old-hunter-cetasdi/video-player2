 const $video = document.querySelector("#video")
    const $play = document.querySelector("#play")
    const $pause = document.querySelector("#pause")
    const $backward = document.querySelector("#backward")
    const $forward = document.querySelector("#forward")


    $play .addEventListener("click", hundleplay)
    $pause .addEventListener("click", hundlepause)

    function hundleplay() {
        $video.play()
        $play.hidden = true
        $pause.hidden = false
        console.log("le diste click al boton de play")
    }
    function hundlepause() {
        $video.pause()
        $pause.hidden = true
        $play.hidden = false
        console.log("le diste click al boton de pause")
    }

    $backward.addEventListener("click",hundlebackward)

    function hundlebackward() {
        $video.currentTime = $video.currentTime - 10
        console.log("para atras 10 segundos", $video.currentTime)
    }

    $forward.addEventListener("click",hundleforward)

    function hundleforward() {
        $video.currentTime = $video.currentTime + 10 
        console.log("para adelante 10 segundos", $video.currentTime)
    }

    const $progress = document.querySelector("#progress")
    $video.addEventListener("loadedmetadata", handleloaded)
    $video.addEventListener("timeupdate", handletimeupdate)


    function handleloaded() {
        $progress.max = $video.duration
        console.log("ha cargado mi video", $video.duration)
    }

    function handletimeupdate() {
        $progress.value = $video.currentTime
    }

    $progress.addEventListener("input", handleinput)

    function handleinput() {
        $video.currentTime = $progress.value
        console.log($progress.value)

    }