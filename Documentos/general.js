$(document).ready(function() 
{
  $("#upIcon").hide();
});

$(window).scroll(function() 
{
  let windscroll = $(this).scrollTop();

  if (windscroll > 200)
    $("#upIcon").show(500);
  else
    $("#upIcon").hide(500);

});

function getUrlQueryParams() 
{
  let queryParams = {}, param;
  let params = window.location.search.substring(1).split("&");
  
  for(let i = 0; i < params.length; i++)
  {
      param = params[i].split('=');
      queryParams[param[0]]=param[1];
  }
  return params;
}   
