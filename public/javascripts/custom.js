
$(document).ready(function(){
	$('#UploadForm').submit(function(e){
		e.preventDefault();

		var mydata = {
			// key				value
			UploadPhoto : $('#UploadPhoto')[0].files[0]
		}
		var formdata = new FormData();

		for(key in mydata){
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
			}
		});
	});
});



// show photo
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};


function showimages(){
var folder = "../images";
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("#showimages").append( "<img class='imagess img-thumbnail' src='"+ folder + val +"'>" );
            }
        });
    }, error(data){
            	console.log(data);
            } 
});
}