$(document).ready(function () 
  {
    let queryParams = getUrlQueryParams();
    let seasonNumber = Number( queryParams[0].substring(queryParams[0].indexOf("=") + 1) );
    let chaptersRange = seasonsChapters.get(seasonNumber);

    if (!seasonNumber || !chaptersRange) 
      $(location).attr('href', 'https://mirmolandia.blogspot.com/');
    
    let season = getSeason(seasonNumber);
    let seasonChapters = getSeasonChapters(chaptersRange);

    displaySeason(season);
    displayPage(1, seasonNumber, seasonChapters); 

    addPageEvent(1, seasonNumber, seasonChapters);
    addPageEvent(2, seasonNumber, seasonChapters);
    addPageEvent(3, seasonNumber, seasonChapters);

  });

  function getSeason(seasonNumber)
  {
    return seasons.find( s => s.id === seasonNumber);
  }

  function getSeasonChapters(chaptersRange)
  {
    return chapters.filter( c => c.id >= chaptersRange.start && 
                                c.id <= chaptersRange.end);
  }

  function displaySeason(season)
    {
      $(".contenedor-detalles-temporada .imagen-temporada").css("background-image", "url('" + season.imageUrl + "')");
      $(".detalles-temporada .nombre").html("<img src='https://1.bp.blogspot.com/--Wwma2lq4wA/X9wJk1acYNI/AAAAAAAAAYw/y70ElM6pyXErKZrjNXTgGzeV8UWiDbkKgCNcBGAsYHQ/s30/mirmoElemento.png'>"
        + " " + season.title + " " +
        "<img src='https://1.bp.blogspot.com/--Wwma2lq4wA/X9wJk1acYNI/AAAAAAAAAYw/y70ElM6pyXErKZrjNXTgGzeV8UWiDbkKgCNcBGAsYHQ/s30/mirmoElemento.png'>");
      $(".detalles-temporada .descripcion").html(season.desc);

      $(".imagen-temporada #arrowLeft").click(function () 
      {
        if (season.id > 1)
          $(location).attr('href', 'https://mirmolandia.blogspot.com/p/temporada.html?t=' + (season.id - 1) );
      });

      $(".imagen-temporada #arrowRight").click(function () 
      {
        if (season.id < 4)
          $(location).attr('href', 'https://mirmolandia.blogspot.com/p/temporada.html?t=' + (season.id + 1) );
      });

      if (season.id === 2 || season.id === 3) 
      {
        $(".imagen-temporada #arrowLeft").show();
        $(".imagen-temporada #arrowRight").show();
      }

      if (season.id === 1)
        $(".imagen-temporada #arrowLeft").hide();
      if (season.id === 4)
        $(".imagen-temporada #arrowRight").hide();
    }

  function addPageEvent(numPage, seasonNumber, seasonChapters)
    {
      $("div#page"+numPage).click(function () 
      {
        if (!($(this).hasClass("active"))) 
        {
          displayPage(numPage, seasonNumber, seasonChapters)
          $(this).toggleClass("active").siblings().removeClass("active");
        }
      });
    }

  function displayChapters(chaptersToDisplay, season) 
    {
      const urlImgMurumo = "https://1.bp.blogspot.com/-jz-MgoL1kOc/X-zhvvB0SWI/AAAAAAAAAZk/D9vdTRQNm8MzdPMJ_gBfhg6wiGz8G1gQQCNcBGAsYHQ/s182/murumo_ico.png";
      const urlImgMirumo = "https://1.bp.blogspot.com/-jmhWbvvLS_E/X-zluzxUyYI/AAAAAAAAAaA/RUGAvrB11EAlhseG8s2TeJoTM2ECkx3PQCNcBGAsYHQ/s182/mirumo_ico.png";

      for (let chapter of chaptersToDisplay) 
      {
        $(".row-episodios").append(" <div class= 'episodio'> " +
          "<div class= 'episodio-miniatura'>" +
          "<img src = ' " + getImageUrl(chapter, season) + "'  width='100%' height=auto; />" +
          "<a href=" + "'https://mirmolandia.blogspot.com/p/episodio.html?e=" + chapter.id + "' target='_blank'><img class = 'boton-play' src='https://firebasestorage.googleapis.com/v0/b/mirmolandia.appspot.com/o/Recursos%2Fboton-play.svg?alt=media' '></a>" +
          "</div>" +
          "<div class = 'episodio-detalles'>" +
          "<div class= 'titulo'> " + "<img src='" + urlImgMurumo + "'/>" + chapter.title + "<img src='" + urlImgMirumo + "'/>" + "</div>" +
          "<div class= 'fecha'> " + chapter.date + "</div>" +
          "<div class= 'descripcion'> " + chapter.desc + "</div>" +
          "</div>" +
          "<div class= 'num-episodio'> " + chapter.id + "</div>");
      }
    }

  function displayPage(numPag, seasonNumber, seasonChapters) 
    {
      $(".episodio").remove();
      $(".row-episodios").scrollTop(0);

      if (seasonNumber === 1) 
      {
        $("div#page1").show();
        $("div#page2").show();
        $("div#page3").show();

        if (numPag === 1) 
          displayChapters(seasonChapters.slice(0,26), seasonNumber);
        
        else if (numPag === 2) 
          displayChapters(seasonChapters.slice(26,52), seasonNumber);

        else if (numPag === 3)
          displayChapters(seasonChapters.slice(52,78), seasonNumber);
      }

      else if (seasonNumber === 2) 
      {
        $("div#page1").hide();
        $("div#page2").hide();
        $("div#page3").hide();
        displayChapters(seasonChapters, seasonNumber);
      }

      else if (seasonNumber === 3) 
      {
        $("div#page3").hide();

        if (numPag === 1) 
          displayChapters(seasonChapters.slice(0,24), seasonNumber);

        else if (numPag === 2) 
          displayChapters(seasonChapters.slice(24,48), seasonNumber);
      }

      else if (seasonNumber === 4) 
      {
        $("div#page1").hide();
        $("div#page2").hide();
        $("div#page3").hide();
        displayChapters(seasonChapters, seasonNumber);
      }
    }