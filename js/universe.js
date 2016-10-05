$(document).ready(function() {

    $("#timer1").animate({opacity: '0'}, 6000)
    $("#timer2").animate({opacity: '0'}, 6000)

    function hideText() {
        $("#timer1").css({display: "none"});
        $("#timer2").css({display: "none"});
    }

    setTimeout(hideText,6000);

  //onClick add Black Hole
    $('#spacefield').click(function(ev){

    //random Size selector for each case
    var randomSizeBlackHole = Math.floor(Math.random() * (80 - 75 + 1)) + 75;   

    //random Color selector for Black Hole, low value
    var rBH = Math.round((Math.random() * 30) + 0);
    var gBH = Math.round((Math.random() * 30) + 0);
    var bBH = Math.round((Math.random() * 30) + 0);

    //add Black Hole to html
    $("body").append(     
      $('<div></div>')
      .addClass("blackhole")
      .addClass("hvr-pulse-shrink")
      .css({
        position: 'absolute',
        top: ev.pageY + 'px',
        left: ev.pageX + 'px',
        "-moz-border-radius" : "50%",
        "-webkit-border-radius" : "50%",
        "border-radius" : "50%",
        width: randomSizeBlackHole + "px",
        height: randomSizeBlackHole + "px",
        opacity: '0.8',
        background: "RGB(" + rBH + "," + bBH + "," + bBH + ")",
              })
      );  

    $('.blackhole').mouseover(function(){
      var audio = new Audio('audio/Atmosphere-06.wav');
      audio.play();
    });


    // });



//onClick add galaxy
$('.blackhole').click(function(ev){

    var randomSizeGalaxy = Math.floor(Math.random() * (70 - 65 + 1)) + 65; 

    //random Color selector for Galaxy, blue bias
    var rG = Math.round((Math.random() * 176) + 0);
    var gG = Math.round((Math.random() * 206) + 0);
    var bG = Math.round((Math.random() * 255) + 128);

    var offsetGalaxyX = Math.floor(Math.random() * 160) + 20;  
    var offsetGalaxyY = Math.floor(Math.random() * 160) + 20;  
    var plusOrMinusGalaxyX = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinusGalaxyY = Math.random() < 0.5 ? -1 : 1;

    //add Galaxy to html
      $("body").append(     
        $('<div></div>')
                .addClass("galaxy")
                .addClass("hvr-pulse-grow")
            .css({
                position: 'absolute',
                top: ev.pageY + offsetGalaxyY*plusOrMinusGalaxyY +'px',
                left: ev.pageX + offsetGalaxyX*plusOrMinusGalaxyX + 'px',
                "-moz-border-radius" : "50%",
                "-webkit-border-radius" : "50%",
                "border-radius" : "50%",
                width: randomSizeGalaxy + "px",
                height: randomSizeGalaxy + "px",
                opacity: '0.8',
                background: "RGB(" + rG + "," + gG + "," + bG + ")"
            })

      );  

    $('.galaxy').mouseover(function(){
      var audio = new Audio('audio/Oneshot-15.wav');
      audio.play();
    });


  //onClick add Nebula
  $('.galaxy').click(function(ev){

      var randomSizeNebula = Math.floor(Math.random() * (60 - 55 + 1)) + 55;

    //random Color selector for Nebula, green bias
    var rN = Math.round((Math.random() * 204) + 0);
    var gN = Math.round((Math.random() * 255) + 102);
    var bN = Math.round((Math.random() * 204) + 0);

    var offsetNebulaX = Math.floor(Math.random() * 200) + 80;  
    var offsetNebulaY = Math.floor(Math.random() * 200) + 80;  
    var plusOrMinusNebulaX = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinusNebulaY = Math.random() < 0.5 ? -1 : 1;

      //add Nebula to html
        $("body").append(     
          $('<div></div>')
                  .addClass("nebula")
                  .addClass("hvr-pulse-grow")
              .css({
                  position: 'absolute',
                  top: ev.pageY + offsetNebulaY*plusOrMinusNebulaY +'px',
                  left: ev.pageX + offsetNebulaX*plusOrMinusNebulaX + 'px',
                  "-moz-border-radius" : "50%",
                  "-webkit-border-radius" : "50%",
                  "border-radius" : "50%",
                  width: randomSizeNebula + "px",
                  height: randomSizeNebula + "px",
                  opacity: '0.8',
                  background: "RGB(" + rN + "," + gN + "," + bN + ")"
              })

        );  

      $('.nebula').mouseover(function(){
        var audio = new Audio('audio/Atmosphere-10.wav');
        audio.play();
      });

    //onClick add Star
    $('.nebula').click(function(ev){

      var randomSizeStar = Math.floor(Math.random() * (50 - 45 + 1)) + 45;

      //random Color selector for Star, yellow bias
      var rS = Math.round((Math.random() * 255) + 204);
      var gS = Math.round((Math.random() * 255) + 100);
      var bS = Math.round((Math.random() * 240) + 0);

      var offsetStarX = Math.floor(Math.random() * 180) + 80;  
      var offsetStarY = Math.floor(Math.random() * 180) + 80;  
      var plusOrMinusStarX = Math.random() < 0.5 ? -1 : 1;
      var plusOrMinusStarY = Math.random() < 0.5 ? -1 : 1;

        //add Star to html
          $("body").append(     
            $('<div></div>')
                    .addClass("star")
                .css({
                    position: 'absolute',
                    top: ev.pageY + offsetStarY*plusOrMinusStarY +'px',
                    left: ev.pageX + offsetStarX*plusOrMinusStarX + 'px',
                    "-moz-border-radius" : "50%",
                    "-webkit-border-radius" : "50%",
                    "border-radius" : "50%",
                    width: randomSizeStar + "px",
                    height: randomSizeStar + "px",
                    opacity: '0.8',
                    background: "RGB(" + rS + "," + gS + "," + bS + ")"
                })

          );  

        $('.star').mouseover(function(){
          var audio = new Audio('audio/Movement-36.wav');
          audio.play();
        });


      //onClick add Planet
      $('.star').click(function(ev){

        var randomSizePlanet = Math.floor(Math.random() * (40 - 35 + 1)) + 35;

        //random Color selector for Planet, med value
        var rP = Math.round((Math.random() * 255) + 0);
        var gP = Math.round((Math.random() * 255) + 0);
        var bP = Math.round((Math.random() * 255) + 0);

        var offsetPlanetX = Math.floor(Math.random() * 280) + 80;  
        var offsetPlanetY = Math.floor(Math.random() * 280) + 80;  
        var plusOrMinusPlanetX = Math.random() < 0.5 ? -1 : 1;
        var plusOrMinusPlanetY = Math.random() < 0.5 ? -1 : 1;

          //add Planet to html
            $("body").append(     
              $('<div></div>')
                      .addClass("planet")
                      .addClass("hvr-wobble-horizontal")
                  .css({
                      position: 'absolute',
                      top: ev.pageY + offsetPlanetY*plusOrMinusPlanetY +'px',
                      left: ev.pageX + offsetPlanetX*plusOrMinusPlanetX + 'px',
                      "-moz-border-radius" : "50%",
                      "-webkit-border-radius" : "50%",
                      "border-radius" : "50%",
                      width: randomSizePlanet + "px",
                      height: randomSizePlanet + "px",
                      opacity: '0.8',
                      background: "RGB(" + rP + "," + gP + "," + bP + ")"
                  })

            );  

          $('.planet').mouseover(function(){
            var audio = new Audio('audio/Atmosphere-13.wav');
            audio.play();
          });

        //onClick add Moon
        $('.planet').click(function(ev){

          var randomSizeMoon = Math.floor(Math.random() * (30 - 25 + 1)) + 25;

          //random Color selector for Moon, grey bias
          var M = Math.round((Math.random() * 255) + 40);
          var rM = Math.round((Math.random() * 20) + -20) + M;
          var gM = Math.round((Math.random() * 20) + -20) + M;
          var bM = Math.round((Math.random() * 20) + -20) + M;

          var offsetMoonX = Math.floor(Math.random() * 160) + 30;  
          var offsetMoonY = Math.floor(Math.random() * 160) + 30;  
          var plusOrMinusMoonX = Math.random() < 0.5 ? -1 : 1;
          var plusOrMinusMoonY = Math.random() < 0.5 ? -1 : 1;

            //add Moon to html
              $("body").append(     
                $('<div></div>')
                        .addClass("moon")
                        .addClass("hvr-bob")
                    .css({
                        position: 'absolute',
                        top: ev.pageY + offsetMoonY*plusOrMinusMoonY +'px',
                        left: ev.pageX + offsetMoonX*plusOrMinusMoonX + 'px',
                        "-moz-border-radius" : "50%",
                        "-webkit-border-radius" : "50%",
                        "border-radius" : "50%",
                        width: randomSizeMoon + "px",
                        height: randomSizeMoon + "px",
                        opacity: '0.8',
                        background: "RGB(" + rM + "," + gM + "," + bM + ")"
                    })

              );  

            $('.moon').mouseover(function(){
              var audio = new Audio('audio/Movement-09.wav');
              audio.play();
            });

          //onClick add Asteroid
          $('.moon').click(function(ev){

          var randomSizeAsteroid = Math.floor(Math.random() * (20 - 15 + 1)) + 15;

          //random Color selector for Asteroid, red bias
          var rA = Math.round((Math.random() * 255) + 128);
          var gA = Math.round((Math.random() * 204) + 0);
          var bA = Math.round((Math.random() * 204) + 0);

          var offsetAsteroidX = Math.floor(Math.random() * 160) + 50;  
          var offsetAsteroidY = Math.floor(Math.random() * 160) + 50;  
          var plusOrMinusAsteroidX = Math.random() < 0.5 ? -1 : 1;
          var plusOrMinusAsteroidY = Math.random() < 0.5 ? -1 : 1;

              //add Asteroid to html
                $("body").append(     
                  $('<div></div>')
                          .addClass("asteroid")
                          .addClass("hvr-buzz")
                      .css({
                          position: 'absolute',
                          top: ev.pageY + offsetAsteroidY*plusOrMinusAsteroidY +'px',
                          left: ev.pageX + offsetAsteroidX*plusOrMinusAsteroidX + 'px',
                          "-moz-border-radius" : "50%",
                          "-webkit-border-radius" : "50%",
                          "border-radius" : "50%",
                          width: randomSizeAsteroid + "px",
                          height: randomSizeAsteroid + "px",
                          opacity: '0.8',
                          background: "RGB(" + rA + "," + gA + "," + bA + ")"
                      })

                );  

              $('.asteroid').mouseover(function(){
                var audio = new Audio('audio/Movement-11.wav');
                audio.play();
              });

            //onClick add Comet
            $('.asteroid').click(function(ev){

            var randomSizeComet = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

            //random Color selector for Comet, high value
            var rC = Math.round((Math.random() * 255) + 153);
            var gC = Math.round((Math.random() * 255) + 153);
            var bC = Math.round((Math.random() * 255) + 153);

            var offsetCometX = Math.floor(Math.random() * 400) + 200;  
            var offsetCometY = Math.floor(Math.random() * 400) + 200;  
            var plusOrMinusCometX = Math.random() < 0.5 ? -1 : 1;
            var plusOrMinusCometY = Math.random() < 0.5 ? -1 : 1; 

                //add Comet to html
                  $("body").append(     
                    $('<div></div>')
                            .addClass("comet")
                            .addClass("hvr-wobble-skew")
                        .css({
                            position: 'absolute',
                            top: ev.pageY + offsetCometY*plusOrMinusCometY +'px',
                            left: ev.pageX + offsetCometX*plusOrMinusCometX + 'px',
                            "-moz-border-radius" : "50%",
                            "-webkit-border-radius" : "50%",
                            "border-radius" : "50%",
                            width: randomSizeComet + "px",
                            height: randomSizeComet + "px",
                            opacity: '0.8',
                            background: "RGB(" + rC + "," + gC + "," + bC + ")"
                        })

                  );  

                $('.comet').mouseover(function(){
                  var audio = new Audio('audio/Oneshot-17.wav');
                  audio.play();

                  var dWidth = $(document).width() - 10, // 10 = image width
                      dHeight = $(document).height() - 10, // 10 = image height
                      nextX = Math.floor(Math.random() * dWidth),
                      nextY = Math.floor(Math.random() * dHeight);
                  $(this).animate({ left: nextX + 'px', top: nextY + 'px' });

                });

              }); //close bracket for adding comet

            }); //close bracket for adding asteroid

          }); //close bracket for adding moon

        }); //close bracket for adding planet

      }); //close bracket for adding star

    }); //close bracket for adding nebula

  }); //close bracket for adding galaxy

});  //close bracket for adding black hole

$('#infobtn').click(function(){
    $('#info').toggle();
});

  // //add random audio class
  //   function randomIntFromInterval(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  //   }

  //   //Black Hole
  //   var a = randomIntFromInterval(1, 11);
  //   var mySound1;
  //   switch (a) {
  //     case 1:
  //       mySound1 = "a0";
  //       break;
  //     case 2:
  //       mySound1 = "bb0";
  //       break;
  //     case 3:
  //       mySound1 = "b0";
  //       break;
  //     case 4:
  //       mySound1 = "c1";
  //       break;
  //     case 5:
  //       mySound1 = "db1";
  //       break;
  //     case 6:
  //       mySound1 = "d1";
  //       break;
  //     case 7:
  //       mySound1 = "eb1";
  //       break;
  //     case 8:
  //       mySound1 = "e1";
  //       break;
  //     case 9:
  //       mySound1 = "f1";
  //       break;
  //     case 10:
  //       mySound1 = "gb1";
  //       break;
  //     case 11:
  //       mySound1 = "g1";
  //       break;
  //   };

    //Galaxy
  //   var b = randomIntFromInterval(1, 11);
  //   var mySound2;
  //   switch (b) {
  //     case 1:
  //       mySound2 = "ab1";
  //       break;
  //     case 2:
  //       mySound2 = "a1";
  //       break;
  //     case 3:
  //       mySound2 = "bb1";
  //       break;
  //     case 4:
  //       mySound2 = "b1";
  //       break;
  //     case 5:
  //       mySound2 = "c2";
  //       break;
  //     case 6:
  //       mySound2 = "db2";
  //       break;
  //     case 7:
  //       mySound2 = "d1";
  //       break;
  //     case 8:
  //       mySound2 = "eb1";
  //       break;
  //     case 9:
  //       mySound2 = "e1";
  //       break;
  //     case 10:
  //       mySound2 = "f1";
  //       break;
  //     case 11:
  //       mySound2 = "gb1";
  //       break;
  //   };



});










