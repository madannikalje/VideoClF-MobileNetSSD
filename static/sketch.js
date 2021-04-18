var video;
var h1;
var model;
var label = '';

function onReady() {
    console.log('ModelReady')
    model.predict(onResult)
}

function onResult(error, pred) {

    if (error) {
        console.error(error);
        console.log()
    } else {
        console.log(pred[0]['label'])
        label = pred[0]['label']
        model.predict()
        model.predict(onResult)
    }
}




function setup() {
    createCanvas(700, 500)
    video = createCapture(VIDEO)
    h1 = createElement("h1")
    video.hide();
    model = ml5.imageClassifier('MobileNet', video, onReady)

}

function draw() {
    image(video, 0, 0)
    fill(0);
    rect(0, height - 50, width, 50)
    textSize(20)
    fill(255, 255, 255)
    text(label, 0, height - 20)
}