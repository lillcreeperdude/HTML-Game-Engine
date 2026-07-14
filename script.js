// connects to the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// draws an image at a spesified point
function imgAt(filePath,xpos,ypos){
    const img = new Image();
    img.src=filePath;

    img.onload = function(){
        ctx.drawImage(img,xpos,ypos);
    }
};

imgAt('assets/1f643.webp')