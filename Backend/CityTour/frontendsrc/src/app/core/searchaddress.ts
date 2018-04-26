/*
 function AddressComplete_Interactive_AutoComplete_v1_00(Key, SearchTerm, Location, LocationAccuracy, Country, LanguagePreference) {
  $.getJSON("http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/AutoComplete/v1.00/json3.ws?callback=?",
    {
      Key: Key,
      SearchTerm: SearchTerm,
      Location: Location,
      LocationAccuracy: LocationAccuracy,
      Country: Country,
      LanguagePreference: LanguagePreference
    },
    function (data) {
      // Test for an error
      if (data.Items.length == 1 && typeof (data.Items[0].Error) != "undefined") {
        // Show the error message
        alert(data.Items[0].Description);
      }
      else {
        // Check if there were any items found
        if (data.Items.length == 0)
          alert("Sorry, there were no results");
        else {
          // PUT YOUR CODE HERE
          //FYI: The output is a JS object (e.g. data.Items[0].Id), the keys being:
          //Id
          //Text
          //Highlight
          //Description
          //IsRetrievable
        }
      }
    });
}
*/
/*function AddressComplete_Interactive_Find_v2_10Begin(Key, SearchTerm, LastId, SearchFor, Country, LanguagePreference, MaxSuggestions, MaxResults) {
  var script = document.createElement("script"),
    head = document.getElementsByTagName("head")[0],
    url = "http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws?";

  // Build the query string
  url += "&Key=" + encodeURIComponent(Key);
  url += "&SearchTerm=" + encodeURIComponent(SearchTerm);
  url += "&LastId=" + encodeURIComponent(LastId);
  url += "&SearchFor=" + encodeURIComponent(SearchFor);
  url += "&Country=" + encodeURIComponent(Country);
  url += "&LanguagePreference=" + encodeURIComponent(LanguagePreference);
  url += "&MaxSuggestions=" + encodeURIComponent(MaxSuggestions);
  url += "&MaxResults=" + encodeURIComponent(MaxResults);
  url += "&callback=AddressComplete_Interactive_Find_v2_10End";

  script.src = url;

  // Make the request
  script.onload = script.onreadystatechange = function () {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
      script.onload = script.onreadystatechange = null;
      if (head && script.parentNode)
        head.removeChild(script);
    }
  }

  head.insertBefore(script, head.firstChild);
}

function AddressComplete_Interactive_Find_v2_10End(response) {
  // Test for an error
  if (response.Items.length == 1 && typeof (response.Items[0].Error) != "undefined") {
    // Show the error message
    alert(response.Items[0].Description);
  }
  else {
    // Check if there were any items found
    if (response.Items.length == 0)
      alert("Sorry, there were no results");
    else {
      // PUT YOUR CODE HERE
      //FYI: The output is an array of key value pairs (e.g. response.Items[0].Id), the keys being:
      //Id
      //Text
      //Highlight
      //Cursor
      //Description
      //Next
    }
  }
}
*/


