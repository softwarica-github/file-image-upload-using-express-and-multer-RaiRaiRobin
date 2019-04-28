$(document).ready(function(){
	$('#UploadForm').submit(function(e){
		e.preventDefault();
		var mydata = {
			// key			value
			UploadPhoto : $('#UploadPhoto')[0].files[0]
		}
		var formdata = new FormData();
		for(key in	 mydata){
			formdata.append(key,mydata[key]);
		}
		$.ajax({
			url: 'http://localhost:3000/UploadPhoto',
			method : 'post',
			contentType : false,
			processData: false,
			data : formdata,
			dataType: 'json',
			success : function(result,status){
				alert('Uploaded successfully');
				$('#UploadPhoto').val('');
				$('#output').removeAttr('src');
				$('#output').css('border','');
			},
			error : function(jqXHR,status){
				alert('Upload failed');
			}
		});

	});
});



// show photo
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
	$('#output').css({'border': '5px solid black', 'border-radius': '5px'});
}



