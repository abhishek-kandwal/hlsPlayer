function play_stream(url) {
    var video = document.getElementById('video');
    var m3u8Url = decodeURIComponent(url);

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(m3u8Url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
        document.title = url;
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = m3u8Url;
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
        document.title = url;
    }
}

var url = 'https://b-g-eu-7.feetcdn.com:2223/v3-hls-playback/43daabdfbcdeb0e92f482409e7add6f935246129f31f9a8fe683db5b924831a976d92aa4343e0ee9832a8123306a3da5275bf2e1af1fed748c6ed7eaed80fdfccc426328529c289f76e65a96a40197bbdc0429e6fad7cc5d5ee382a90eaed7a1061d6ad58d20df22e2fd90d005a9d11688d0a1bf111fc0d5ac50bd11e05b05c37920f5c980c0812b414ba905b9aad7c0a250ce38272ff0d5b07e8d8c593f4a57f5a60ff3f53acf1db6c4876a1c52af1c/1080/index.m3u8';
play_stream(url);
