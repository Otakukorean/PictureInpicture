const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to the users

async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('error ' , error);
    }
}

button.addEventListener('click' , async () => {
    //  disable
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();

    //reset
    button.disabled = false;
});

// on load

selectMediaStream() ;
