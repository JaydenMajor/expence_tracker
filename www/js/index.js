//Index.js
var running = false;
var writeString = "";

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
		alert('Photo Error: ' +message);
	},
	startFS: function(string){
		writeString = string;
		if(running){
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, failFS);
		}
	},
	gotFS: function(fileSystem) {
        fileSystem.root.getFile("expenses.json", {create: true, exclusive: false}, gotFileEntry, failFS);
    },
	failFS:function(evt) {
		alert(evt.target.error.code);
    },
	gotFileEntry: function(fileEntry) {
        fileEntry.file(gotFile, failFS);
		fileEntry.createWriter(gotFileWriter, failFS);
    },
    gotFile: function(file){
       alert('Get File');
    },
	gotFileWriter: function(){
		 writer.write(writeString);
	}
};