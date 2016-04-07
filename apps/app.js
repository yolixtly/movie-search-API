console.log('First Application Programming Interface');
$(function(){
    
    /*This grabs the value the User is looking for and 
    also prevents the default event of the Form*/
    $('#search-term').submit(function(event){
      event.preventDefault();
      var queryValue = $('#query').val();
      getRequest(queryValue);
      $('#query').val("");
    });
});

  /*Function to GET the data from the third party Server*/
  function getRequest(searchedTitle){
    var params = {
      s: searchedTitle,
      r: 'json',
    };
    url = 'http://www.omdbapi.com';
    $.getJSON(url, params, function(responseData) {
         var mySearch = responseData.Search;
         showResults(mySearch);
      });
  };

  /*Function to Render/Show the specific Data we are looking for*/
  function showResults(thePropertyToShow){
    var titleList = "";
    $.each(thePropertyToShow, function(index, value){
      titleList += '<p>' + value.Title + '</p>';
      console.log(value.Title);
    });
    $('#search-results').html('');
    $('#search-results').append(titleList);
  };
