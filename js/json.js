$(document).ready(function() {
	//load the json
	$.ajax ({
			type:"GET",
			dataType: "JSON",
			url: "data/bmj.json",
			success: processJSON
			});

	function processJSON(data) {
		$.each(data.articles, function (index) {
			//Set variables
			var title = data.articles[index].title;
			
			//Build the article list 
			$('#titles').append('<li data-toggle="modal" data-target="#myModal" index="'+ index +'"><a href="#">' + title + '</a></li>');
			
			//pull out the relevant data on click
			$('li').click(function(){
				var index = $(this).attr('index');
				var articleTitle= data.articles[index].title;
				var articleBody= data.articles[index].content;
				var datePublished = data.articles[index].date_published;
				var uniqueId = data.articles[index]._id;
				
				//check to see if date has been set
				if(datePublished  === undefined ) {
					$('.date').hide();		
				}
				else {
				$('.date').show();
				}
				//populate the modal
				$('#myModalLabel').html(articleTitle);
				$('.modal-body').html(articleBody);
				$('.date').html('Date published:'+ datePublished);
				$('.uniqueId').html('Article ref:'+ uniqueId);
				
			});
			
		}
		
	)};
	
});



		
