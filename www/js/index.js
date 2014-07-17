//Index.js
var running = false;
var version = "0.1";

var app = {
	initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
	onDeviceReady: function() {
		running = true;
    },
	takePhoto: function(){
		if(running){
			 navigator.camera.getPicture(takePhotoSuccess, takePhotoError, { quality: 50, destinationType : Camera.DestinationType.DATA_URL, sourceType : Camera.PictureSourceType.CAMERA, allowEdit : true, encodingType: Camera.EncodingType.JPEG,});
		}
	},
	takePhotoSuccess: function(imageURI){
		var smallImage = document.getElementById('smallImage');
		smallImage.style.display = 'block';
		smallImage.src = "data:image/jpeg;base64," + imageData;
	},
	takePhotoError: function(){
		// alert('Photo Error: ' +message);
	}
};