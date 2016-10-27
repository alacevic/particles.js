/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');


  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  pJS.Texas = "m 573.98015,536.93549 -4.65902,-17.56842 0,3.30015 4.65902,14.26827 z m -1.06769,-30.86607 -3.30015,6.21204 -0.38825,2.03833 3.6884,-8.25037 z m 2.6207,-4.56196 3.10602,-4.07666 -2.23245,1.35889 -0.87357,2.71777 z m 10.96814,-9.90044 -7.27974,3.78546 2.03833,-0.38825 5.24141,-3.39721 z m 0.97063,-1.35889 2.03832,-1.65007 -0.7765,0.19413 -1.26182,1.45594 z m -115.11686,-162.87191 -0.67944,-0.0971 -3.30015,91.0452 -19.2185,-0.87357 -30.76901,-1.74713 -12.32701,-0.87357 2.42658,4.75609 0.0971,0.0971 10.48282,10.48281 6.01791,7.08561 7.95917,5.92085 5.62967,10.28869 2.13538,10.77401 4.56197,3.00895 3.59134,3.97959 5.14434,1.8442 7.47386,4.75609 3.39721,1.26183 4.65903,-4.65903 1.45595,-4.95022 2.42658,-4.7561 7.57092,-3.00895 2.91189,1.45594 8.44449,0.67945 7.66799,4.75609 5.24141,0.97063 -1.45595,2.71777 3.00896,1.94126 2.81483,3.39721 0.58238,3.59133 1.8442,2.42658 4.27077,10.28869 4.27078,3.59134 3.30015,5.43553 4.17371,4.27078 1.8442,0.58238 1.55301,11.06519 4.56197,2.52365 0.19412,3.49427 1.16476,-0.29119 7.95918,9.70631 3.97959,0.87357 5.04728,3.00896 7.76505,0 5.62966,3.10601 6.69735,-1.45594 -3.00895,-2.81483 -2.71777,-8.1533 -1.06769,-7.08561 -1.55301,-2.32952 0.67944,-4.75609 -2.03833,-0.19413 -2.71777,-4.4649 3.10602,3.30015 3.59134,-1.26182 1.94126,-5.14435 -3.88252,-5.24141 5.82378,0.67944 2.71777,-4.17371 -0.38825,-1.45595 2.42658,-3.20308 -0.58238,2.81483 2.71777,-2.13539 -1.0677,-3.78546 3.49427,1.8442 4.46491,-2.52364 -4.36784,-4.56197 2.71776,1.0677 5.04729,0.29119 6.60029,-1.45595 7.3768,-4.95022 4.4649,-3.6884 0.67944,-2.71777 2.71777,-2.81483 -1.45595,-4.65903 0.29119,-2.91189 4.85316,-2.13539 -0.38826,5.14435 2.9119,0 -3.20308,2.71776 12.90939,-6.79441 2.13539,-0.0971 1.35888,-6.21204 0.38826,0 1.45594,-3.59133 0.67944,-11.0652 0.87357,-4.4649 -2.52364,-7.95918 -3.10602,-5.43553 -0.0971,-2.62071 -3.20309,-4.4649 -1.94126,-18.73318 -0.0971,-2.32952 -0.19413,-2.42658 -0.58238,-8.54155 -5.82378,0.19413 -1.45595,-1.55301 -0.29119,-0.0971 -0.0971,0 -3.78546,-0.67944 -4.36784,-2.81483 -4.85316,-2.03832 -9.12393,2.6207 -2.42658,-0.58238 -3.00896,1.16476 -3.6884,3.00895 -9.90044,-4.65902 -3.10601,4.27077 -4.56197,-1.65007 -4.85316,-3.10602 -2.6207,2.23245 -2.52364,0.0971 0,-1.84419 -6.79442,-3.20309 -2.71777,1.26182 -1.35888,-1.55301 -7.47386,-0.7765 -5.72673,-5.24141 -0.87356,1.74714 -4.17372,-0.19413 -3.88252,-3.6884 -1.74714,-5.82379 -0.29119,-33.19558 -24.84816,-0.29119 -23.48927,-0.58238 -0.58238,0 z";

  pJS.Vermont="m 923.01913,132.86173 -4.36784,-15.91836 0.77651,-5.82378 0,-6.30911 -1.0677,-5.047278 4.17372,-5.532598 0.19413,-1.747136 -2.32952,-8.735681 -1.26182,0.485316 -5.33847,1.941262 -5.24141,2.038326 -12.03583,4.36784 -0.67944,0.194126 4.36784,10.191633 1.45595,9.60924 5.14434,8.05624 4.85316,15.91835 0.19413,-0.0971 0.7765,-0.29119 2.23245,-0.67944 1.94126,-0.67944 5.5326,-1.65007 0.67944,-0.29119 0,0 z";

  pJS.Nevada="m 294.82662,295.8307 10.09457,-62.79983 5.14434,-31.44846 0.58238,-3.10601 -2.81483,-0.48532 -10.96813,-2.03833 -27.46887,-5.43553 -2.71776,-0.58238 -2.71777,-0.58238 -13.6859,-3.00895 -24.55697,-5.82379 -2.71777,-0.67944 -0.87357,3.68839 -13.20058,56.00542 11.45345,16.50074 11.8417,16.40366 20.96563,30.08957 15.04479,21.15976 7.76505,10.38575 2.52364,3.39721 0,-0.29119 1.55301,-3.30014 0.0971,-15.43304 4.27078,-3.59133 3.39721,3.00895 2.23245,0.0971 4.27078,-18.83025 0,-0.19413 0.48531,-3.10602 z";

  pJS.Colorado="m 489.6323,255.54951 0.38826,-19.02437 -4.65903,-0.19413 -23.6834,-0.87357 -2.32952,-0.0971 -1.94126,-0.0971 -28.82775,-1.8442 -19.2185,-1.55301 -23.97459,-2.32952 -2.32951,-0.29119 -0.29119,2.52365 -5.24141,50.56988 -1.8442,17.66549 -0.7765,7.66799 -0.19413,2.52364 3.00896,0.29119 48.91981,4.27077 21.54801,1.35889 21.45095,0.97063 3.10602,0.0971 1.94126,0.0971 4.07665,0.0971 1.94127,0.0971 6.11497,0.19413 1.55301,0 0,-1.94127 1.0677,-51.34639 0.0971,-5.72672 0,-1.8442 0.0971,-1.26182 z";

  pJS.California = "m 206.01387,363.77489 0.38825,2.13539 0,0.38825 -0.38825,-2.52364 z m -14.26828,-8.34743 0.67944,1.45595 0.38825,-0.0971 -1.06769,-1.35888 z m 16.98604,-0.29119 0.29119,2.52364 1.74714,1.26182 -2.03833,-3.78546 z m -11.74463,-13.78296 -1.0677,-0.29119 0.87357,0.38825 0.19413,-0.0971 z m -10.77401,-2.9119 -2.6207,1.55301 0.67944,0.67945 1.94126,-2.23246 z m -5.04728,-1.8442 -0.19413,0.77651 0.87357,0.19413 -0.67944,-0.97064 z m 8.54155,1.94127 4.27078,2.42658 0.77651,-0.67945 -5.04729,-1.74713 z m -33.09852,-85.51261 -0.0971,0.0971 0.0971,-0.0971 0,0 z m 10.38575,0.48531 -0.0971,-0.29119 0,0.38826 0.0971,-0.0971 z m 56.00542,-73.6709 -3.78546,-0.97064 -41.54301,-11.45344 -15.43304,-4.65903 0,0.38825 -0.87357,9.60925 -4.07665,11.35638 -6.79442,8.44449 -0.19412,4.27078 3.30014,5.92085 1.65008,7.76505 -2.32952,6.3091 0.38825,6.30911 -1.16475,2.6207 3.97958,8.63862 2.52364,3.30015 -0.19412,9.41512 6.01791,5.72672 3.49427,-5.82378 3.78547,3.00895 1.45594,-1.35888 -5.24141,0.97063 -0.0971,4.95022 1.0677,6.21204 -2.9119,-2.81483 -1.65007,-3.78546 -0.48532,5.2414 1.35889,10.38576 5.43553,6.69735 -3.59133,4.65903 0.58237,5.92085 3.88253,6.01792 6.79442,18.63612 2.13539,1.16475 -0.67945,12.9094 1.0677,1.55301 14.55947,5.24141 4.4649,4.75609 1.55301,3.10602 4.27078,2.42658 4.65903,0.87357 1.94126,5.33847 3.88252,1.8442 5.82379,6.89148 5.43554,9.02687 -0.38826,8.34743 3.00896,3.97958 39.69882,3.88253 0,0 3.49427,-0.19413 1.55301,-4.27077 -3.00896,-2.23246 0.0971,-7.0856 1.74713,-0.38826 3.49427,-8.54155 2.13539,-3.97959 5.43554,-3.20308 -3.00896,-4.07665 -3.39721,-9.12394 0.19413,-2.42657 0,-0.0971 -2.52364,-3.39721 -7.76505,-10.38575 -15.04479,-21.15976 -20.96563,-30.08957 -11.8417,-16.40366 -11.45345,-16.50074 13.20058,-56.00542 0.87357,-3.68839 z";

  pJS.WorldSimple = "M335.5,424.33l-.83,16.33-46.83,54.5-1,16.83-7.67,13-15,.33.17-56.5L273,426l-.83-14.17-31-32.17V358.83l9-12.17V331.33l-18.58-.83L212,309l-36.67.17L121,236l-1.17-52.83-4-12.17-7.33-12.83-9.5-10-9.5-7.83-12.67-4.5-61.67-.17v-11l-3-4H3.67L0,118,.17,95.83l5,.33,3.67-1.83,3.83-3.17,2-4.33.5-21.17L45.83,66,70.17,77.83l10.5,3,52,.5,12.67,9.83,41-.5,30-17,23.5,7.17.33,29.83h-35l-.5,30.17,1,7.33,4.67,6.83,5.5,3.33,4.67,2.83,14.33-.17-.17,24.67,10.17.17-.17-59.5,20-.67L275,134.83l-.17,11,13.67.17,6.17,5.17.33,12.17,20.33,10.83-1.17,4.33-11,11.5L288,189.83l.17,24.5-46.5,49.33,3.17,8.5-.67,9.67-3.5.83L238,276l-2-10.5-35,.5-3,2.5-3.33,4.5.5,21.17,3.17,5.83,10.33-.33,7.5-9.17,4.83.33,11.5,16.67.83,11.67,5.33,6.33,65.67,1.17,10.33,9.17,4,7.17,4.67,6.83,7,6.17,37.83-.17,6,6.83v17.5L360.5,394.33,360.33,423Zm240,3.67-.33-13.67,14.5-12.67v-40l25.08-32-.58-4.5H598.5l-42.33-53h15l34.67,40.08L644.17,292l-12-11-16.33-1.33-9.67-13.5h9.67l8,9.08,35,.42,30,53.33,6,.33,4.67-9.67.33-8.67,25.67-21.33,3,1.67,4.33-.33,4,2.33,3.83,5.33V310l9.92.33.58,20,18.33,17-.67-6.33-10-11,1.33-14,10.67,10,12.33.33.33-11-11.33-13,1.67-8.33,3.33-2.83h17.67l10.33-4.75,7.67-10.08-.67-45,10-.83,4.33,1.5,3.17,4.67v14.5h8.83l-.67-18.25,32-35.92.67-39.33,1.33-5.67,4.33-4.33,7.33-2.33,31.67,1.33-.67,40,6.67-1,68-77.33,15.67-.67L1004.5,96,964.83,67l-125-1.67L811.83,41l-16.33.33L795.17,7l-9-6.33L754.83,0l-.33,16-16.67,1.33L611.17,94.67l-18.33,1-7.33-5.33L575.83,76l-10.67-9.67L539.5,65l-54,71.67.67,9,14.83.5,4.17,4.17-1,12.67,15.33.33,1.33-39,11-18.33,12.67.67-12,17.67L530.83,167l-4,7-35.67-1.67-22.5,24.33v20.67l-17.42,1-3.42,5.33-.67,18.5h21.67l3.67-3.25,1-8.58,25.33-16,21.67,20,2.67-5.33-9.25-8.21-.08-6.87,22.33,21.25h10.67l11.33,8.92,14.33.25.33,13.67-68-1-3-4-1.33-8-22,.67-7.33,5L454.83,252l-29.67,38.33-1.33,25,25.33,25.33,54.33-.33,2,63,12,19.67-1,38,35.94-.67,4.88-3.33,2.42-3.33v-12Z";

  pJS.WorldSimpleFull = "M335.5,475.67,334.67,492l-46.83,54.5-1,16.83-7.67,13-15,.33.17-56.5L273,477.33l-.83-14.17-31-32.17V410.17l9-12.17V382.67l-18.58-.83L212,360.33l-36.67.17L121,287.33l-1.17-52.83-4-12.17L108.5,209.5l-9.5-10-9.5-7.83-12.67-4.5L15.17,187V176l-3-4H3.67L0,169.33l.17-22.17,5,.33,3.67-1.83,3.83-3.17,2-4.33.5-21.17,30.67.33,24.33,11.83,10.5,3,52,.5,12.67,9.83,41-.5,30-17,23.5,7.17.33,29.83h-35l-.5,30.17,1,7.33,4.67,6.83,5.5,3.33,4.67,2.83,14.33-.17L234.67,237l10.17.17-.17-59.5,20-.67L275,186.17l-.17,11,13.67.17,6.17,5.17.33,12.17,20.33,10.83-1.17,4.33-11,11.5L288,241.17l.17,24.5L241.67,315l3.17,8.5-.67,9.67-3.5.83L238,327.33l-2-10.5-35,.5-3,2.5-3.33,4.5.5,21.17,3.17,5.83,10.33-.33,7.5-9.17,4.83.33,11.5,16.67.83,11.67,5.33,6.33L304.33,378l10.33,9.17,4,7.17,4.67,6.83,7,6.17,37.83-.17,6,6.83v17.5L360.5,445.67l-.17,28.67Zm240,3.67-.33-13.67L589.67,453V413l25.08-32-.58-4.5H598.5l-42.33-53h15l34.67,40.08,38.33-20.25-12-11L615.83,331l-9.67-13.5h9.67l8,9.08,35,.42,30,53.33,6,.33L699.5,371l.33-8.67L725.5,341l3,1.67,4.33-.33,4,2.33,3.83,5.33v11.33l9.92.33.58,20,18.33,17-.67-6.33-10-11,1.33-14,10.67,10,12.33.33.33-11-11.33-13,1.67-8.33,3.33-2.83h17.67l10.33-4.75,7.67-10.08-.67-45,10-.83,4.33,1.5,3.17,4.67v14.5h8.83l-.67-18.25,32-35.92L870.5,209l1.33-5.67,4.33-4.33,7.33-2.33L915.17,198l-.67,40,6.67-1,68-77.33,15.67-.67-.33-11.67-39.67-29-125-1.67-28-24.33-16.33.33-.33-34.33-9-6.33-31.33-.67-.33,16-16.67,1.33L611.17,146l-18.33,1-7.33-5.33-9.67-14.33-10.67-9.67-25.67-1.33L485.5,188l.67,9,14.83.5,4.17,4.17-1,12.67,15.33.33,1.33-39,11-18.33,12.67.67-12,17.67-1.67,42.67-4,7-35.67-1.67L468.67,248v20.67l-17.42,1L447.83,275l-.67,18.5h21.67l3.67-3.25,1-8.58,25.33-16,21.67,20,2.67-5.33-9.25-8.21-.08-6.87,22.33,21.25h10.67l11.33,8.92,14.33.25.33,13.67-68-1-3-4-1.33-8-22,.67-7.33,5-16.33,1.33-29.67,38.33-1.33,25L449.16,392l54.33-.33,2,63,12,19.67-1,38,35.94-.67,4.88-3.33,2.42-3.33V493ZM784,485.74l34.42-.83L830.77,498h16.74l8.78-18.23V467.35l-16.16-11.43-1.91-8.45L836.07,441h-2.32l-.31,11.85L817.56,443l-10.23-1L784,462.21ZM356.95,149.57l-.17-17.25,34.32-26.66v-50L405,28.31l-20.91-.7V7.4L381.34,3,377.85.43H343V15.07l-2.35,3-3.22,2.61H317.92l.52,31.8L294,51.83l.52,23.52,6.79,7.5,16.89,1.23,14.28,33.47-.72,28.09,4.83,3.92Z";

  pJS.America = "M335.5,358.67,334.67,375l-46.83,54.5-1,16.83-7.67,13-15,.33.17-56.5L273,360.33l-.83-14.17-31-32.17V293.17l9-12.17V265.67l-18.58-.83L212,243.33l-36.67.17L121,170.33l-1.17-52.83-4-12.17L108.5,92.5,99,82.5l-9.5-7.83-12.67-4.5L15.17,70V59l-3-4H3.67L0,52.33.17,30.17l5,.33,3.67-1.83,3.83-3.17,2-4.33L15.17,0,45.83.33,70.17,12.17l10.5,3,52,.5,12.67,9.83,41-.5,30-17,23.5,7.17L240.17,45h-35l-.5,30.17,1,7.33,4.67,6.83,5.5,3.33,4.67,2.83,14.33-.17L234.67,120l10.17.17-.17-59.5,20-.67L275,69.17l-.17,11,13.67.17,6.17,5.17L295,97.67l20.33,10.83-1.17,4.33-11,11.5L288,124.17l.17,24.5L241.67,198l3.17,8.5-.67,9.67-3.5.83L238,210.33l-2-10.5-35,.5-3,2.5-3.33,4.5.5,21.17,3.17,5.83,10.33-.33,7.5-9.17,4.83.33,11.5,16.67.83,11.67,5.33,6.33L304.33,261l10.33,9.17,4,7.17,4.67,6.83,7,6.17,37.83-.17,6,6.83v17.5L360.5,328.67l-.17,28.67Z";
  
  pJS.Asia = "M151.67,428l-.33-13.67,14.5-12.67v-40l25.08-32-.58-4.5H174.67l-42.33-53h15L182,312.25,220.34,292l-12-11L192,279.67l-9.67-13.5H192l8,9.08,35,.42L265,329l6,.33,4.67-9.67L276,311l25.67-21.33,3,1.67L309,291l4,2.33,3.83,5.33V310l9.92 .33 .58,20,18.33,17L345,341l -10 -11, 1.33 -14 L347,326 l 12.33.33.33 -11 -11.33 -13 L 350,294 l3.33 -2.83H371l10.33-4.75L389,276.33l-.67-45,10-.83,4.33,1.5,3.17,4.67v14.5h8.83L414,232.92,446,197l.67-39.33L448,152l4.33-4.33,7.33-2.33,31.67,1.33-.67,40,6.67-1,68-77.33,15.67-.67L580.67,96,541,67,416,65.33,388,41 l -16.33 .33 L 371.34,7l-9-6.33L331,0l-.33,16L314,17.33,187.34,94.67l-18.33,1-7.33-5.33L152,76l-10.67-9.67L115.67,65l-54,71.67 .67,9,14.83 .5,4.17,4.17-1,12.67,15.33 .33,1.33-39L108,106l12.67 .67-12,17.67L107,167l-4,7-35.67-1.67-22.5,24.33v20.67l-17.42,1L24,223.67l-.67,18.5H45l3.67-3.25,1-8.58,25.33-16,21.67,20L99.34,229l-9.25-8.21L90,213.92l22.33,21.25H123l11.33,8.92,14.33 .25L149,258l-68-1-3-4-1.33-8-22,.67-7.33,5L31,252,1.33,290.33,0,315.33l25.33,25.33,54.33-.33,2,63,12,19.67-1,38,35.94-.67,4.88-3.33,2.42-3.33v-12Z";
  
  pJS.SimpleSquare = "M10 10 H 90 V 90 H 10 L 10 10";

  pJS.TestSegment = "M151.67,428l-.33-13.67,14.5-12.67v-40l25.08-32-.58-4.5H174.67l-42.33-53h15L182,312.25,220.34,292l-12-11L192,279.67l-9.67-13.5H192l8,9.08,35,.42L265,329l6,.33,4.67-9.67L276,311l25.67-21.33,3,1.67L309,291l4,2.33,3.83,5.33V310l9.92.33.58,20,18.33,17L345,341l-10-11,1.33-14L347,326l12.33.33.33-11-11.33-13L350,294l3.33-2.83H371l10.33-4.75L389,276.33l-.67-45,10-.83,4.33,1.5,3.17,4.67v14.5h8.83L414,232.92,446,197l.67-39.33z";

pJS.WorldOrg = "M386.33,508.33l-.83,16.33-46.83,54.5-1,16.83L330,609l-15,.33.17-56.5L323.83,510,323,495.83l-31-32.17V442.83l9-12.17V415.33l-18.58-.83L262.83,393l-36.67.17L171.83,320l-1.17-52.83-4-12.17-7.33-12.83-9.5-10-9.5-7.83-12.67-4.5L66,219.67v-11l-3-4H54.5L50.83,202,51,179.83l5,.33,3.67-1.83,3.83-3.17,2-4.33.5-21.17,30.67.33L121,161.83l10.5,3,52,.5,12.67,9.83,41-.5,30-17,23.5,7.17.33,29.83H256l-.5,30.17,1,7.33,4.67,6.83,5.5,3.33,4.67,2.83,14.33-.17-.17,24.67,10.17.17-.17-59.5,20-.67,10.33,9.17-.17,11,13.67.17,6.17,5.17.33,12.17,20.33,10.83L365,262.5,354,274l-15.17-.17.17,24.5-46.5,49.33,3.17,8.5-.67,9.67-3.5.83L288.83,360l-2-10.5-35,.5-3,2.5L245.5,357l.5,21.17,3.17,5.83,10.33-.33,7.5-9.17,4.83.33,11.5,16.67.83,11.67,5.33,6.33,65.67,1.17,10.33,9.17,4,7.17,4.67,6.83,7,6.17,37.83-.17,6,6.83v17.5l-13.67,14.17L411.17,507ZM0,156.67v54l16-18.5,15,.5-.5-13ZM626.33,512,626,498.33l14.5-12.67v-40l25.08-32-.58-4.5H649.33l-42.33-53h15l34.67,40.08L695,376l-12-11-16.33-1.33L657,350.17h9.67l8,9.08,35,.42,30,53.33,6,.33,4.67-9.67.33-8.67,25.67-21.33,3,1.67,4.33-.33,4,2.33,3.83,5.33V394l9.92.33.58,20,18.33,17-.67-6.33-10-11L811,400l10.67,10,12.33.33.33-11-11.33-13,1.67-8.33,3.33-2.83h17.67L856,370.42l7.67-10.08-.67-45,10-.83,4.33,1.5,3.17,4.67v14.5h8.83l-.67-18.25,32-35.92.67-39.33,1.33-5.67,4.33-4.33,7.33-2.33L966,230.67l-.67,40,6.67-1,68-77.33,15.67-.67-.33-11.67-39.67-29-125-1.67-28-24.33-16.33.33L846,91l-9-6.33L805.67,84l-.33,16-16.67,1.33L662,178.67l-18.33,1-7.33-5.33L626.67,160,616,150.33,590.33,149l-54,71.67.67,9,14.83.5,4.17,4.17L555,247l15.33.33,1.33-39,11-18.33,12.67.67-12,17.67L581.67,251l-4,7L542,256.33l-22.5,24.33v20.67l-17.42,1-3.42,5.33-.67,18.5h21.67l3.67-3.25,1-8.58,25.33-16,21.67,20L574,313l-9.25-8.21-.08-6.87L587,319.17h10.67L609,328.08l14.33.25.33,13.67-68-1-3-4-1.33-8-22,.67-7.33,5L505.67,336,476,374.33l-1.33,25L500,424.67l54.33-.33,2,63,12,19.67-1,38,35.94-.67,4.88-3.33,2.42-3.33v-12ZM514.42,269.58l10.13-.71L524,256.11l-15.85-20.44H505l-.5,14.83-5.33-.5-5.33,4.67.33,12.33,8.67.67,3-10.83,1.75-1.75,3.25-.75,2.83,7.67ZM850.5,540.67l51.94-1.25L921,559.17h25.25l13.25-27.5V512.92l-24.37-17.25-2.87-12.75L929,473.17h-3.5L925,491l-24-14.87-15.44-1.5-35.12,30.5ZM797,421.33l-.42,15.08,24.54,23.21,3.88.54v-11.5Zm46.33,28.17,12.33.17,5.67-24.83-4.17-4.67-26.5,14Zm78.83,15.33,24.17-.67L923,445l-20.83.17Zm-4.92-126.29,19.13-18.75-.31-31.19L933,285.54l-6.5-.37-.75,29.5L902,339Zm172.5-188.37.25,18.5v2.75l-3.87,4.75-7.12,3.5h-4.75l1,22.5,3,2.5,8.25.75,3,3,.5,11.25h10v-69Zm-744,60.5-.5-45.25L302,125.67H283.5l-8,6-.5,8.77L314.73,175l2,24.06,12.47,11.13Zm65.25,4-.25-24.75L460,151.67V79.92l20-39.25-30-1v-29l-4-6.25L441,.67H391v21l-3.37,4.25L383,29.67H355l.75,45.63-35-.87.75,33.75,9.75,10.76,24.24,1.77,20.48,48-1,40.31,6.94,5.63Zm45-29v20l17.5.5,11.5-13v-3.5l-2.5-4.5ZM307.3,35.33l4.3-9L319.54,19l5.88-3.67L345,13.67V.67L281,0l-3.29,5-2.34,2.66.33,26.66-20.34.32.32,42,17.64,18.29,31.6-.75Zm-13.8,78.5,4.5-9.5-26.83.83L256.5,90.67,236.17,90l-.33,9.33L249.5,114.5Zm-50.17,31.83L262.67,127l-16.5-.5-3.5,2.67Zm-19.67-31.75,2.25-2.79,0-16.15L201,94.33V80.67l-15.17-.5-.67,24,7.67.83,9,9.5Zm12.67-32.5,14.08-.21L241.5,61.67H227ZM232,164.83l-.33-24-2.17-4.75-5-4.42-4.5-1.5L198,129l-10-9.33H165.5l.13,20.08,36.63,24.08Z"

pJS.insert = function(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}
  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }


    //pJS.fn.setParticleTargetShape(pJS.WorldSimpleFull);
    pJS.fn.drawCounter = 0;

  };
  
  pJS.fn.clearParticleTargetShape = function(){
    
    //clear previous destionation coordinates
    //----------------------------------------------
    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];
      p.destX = null;
      p.destY = null;
    }
  }

  ///
  /// returns an array with tokens, each command and number is a token.
  ///
  pJS.fn.tokenizeSvg = function(simpleSvgShape){
    //var res = d.replace(/,/g, " ").replace(/m/g, " m ").replace(/M/g, " M ").replace(/z/g, " z ").replace(/Z/g, " Z ").split(" ");
    var fixedUpPath = simpleSvgShape.replace(/,/g, " ").replace(/m/g, " m ").replace(/M/g, " M ").replace(/-/g, " -");
    fixedUpPath = fixedUpPath.replace(/z/g, " z ").replace(/Z/g, " Z ").replace(/v/g, " v ").replace(/V/g, " V ").replace(/h/g, " h ").replace(/H/g, " H ");
    fixedUpPath = fixedUpPath.replace(/l/g, " l ").replace(/L/g, " L ");
    fixedUpPath = fixedUpPath.replace(/  /g, " ");
    
    //handle special situation:
    //-------------------------------------------------
    //l 12.33.33.33-11-11.33-13 
    //needs to become: l 12.33 .33 .33 -11 -11.33 -13
    var numberStarted = false;
    var decimalStarted = false;
    for (var i=0; i < fixedUpPath.length; i++){

      if (fixedUpPath[i] == '0' || fixedUpPath[i] == '1' || fixedUpPath[i] == '2' || fixedUpPath[i] == '3'
       || fixedUpPath[i] == '4' || fixedUpPath[i] == '5' || fixedUpPath[i] == '6' || fixedUpPath[i] == '7'
        || fixedUpPath[i] == '8' || fixedUpPath[i] == '9'){

          //number encountered
          numberStarted = true;
        }
        else if( fixedUpPath[i] == '.'){
          
          if (numberStarted && decimalStarted){
            //we have to split this because there is an ongoing number and this is a new one!
            fixedUpPath = pJS.insert(fixedUpPath, i, ' ');
            numberStarted = false;
            decimalStarted = false;
          }
          else{
              numberStarted = true;
              decimalStarted = true;
          }
        }
        else if (fixedUpPath[i] == '-'){
          numberStarted = true;
          decimalStarted = false;
        }
        else {
          numberStarted = false;
          decimalStarted = false;
        }
    }

    return fixedUpPath.split(" ");

  }

  pJS.fn.setParticleTargetShape = function(simpleSvgShape, scaleFactor, shiftX, shiftY){
    
    if (scaleFactor === undefined)
      scaleFactor = 1;
    
    if (shiftX === undefined)
      shiftX = 0;
    
    if (shiftY === undefined)
      shiftY = 0;
    

    var res = pJS.fn.tokenizeSvg(simpleSvgShape);
    

    pJS.fn.clearParticleTargetShape();

    

    // set destination points: 
    //----------------------------------------------
    var currentCommand = "";
    var firstParticleInPath = null;

    //loop through target shape array (d parameter taken from a svg file)
    for (var i = 0, iParticle = 0; i < res.length && pJS.particles.array.length > iParticle; )
    {
      
      if (res[i] == 'm' || res[i] == 'M'){
        //M means Move in relative pixels to previous point
        currentCommand = res[i];
        firstParticleInPath = pJS.particles.array[iParticle];
        i++;
      }
      else if (res[i] == 'L' || res[i] == 'l' || res[i] == 'H' || res[i] == 'h' || res[i] == 'V' || res[i] == 'v'){
        currentCommand = res[i];
        i++;
      }
      else if (res[i] == 'z' || res[i] == 'Z'){
        
        i++;
        
        //z means end of path segment, close the loop, link to first point!
        firstParticleInPath.linkTo = pJS.particles.array[iParticle - 1];
        firstParticleInPath = null;

      }
      else if (res[i] != '' && !isNaN(res[i])) {
        
        //if we see a float, it is a point, so we consume two items, x and y.
        //------------------------------------------------------------------------
        
        if (currentCommand == 'm' || currentCommand == 'M' || currentCommand == 'l' || currentCommand == 'L'){
          
          //parse point from res
          var svgPointX = parseFloat(res[i]);
          var svgPointY = parseFloat(res[i + 1]);
          
          //advance our svg path pointer by two because we consumed two items
          i += 2;

          //get a particle
          var p = pJS.particles.array[iParticle];
          
          //add new point to our array:
          svgPointX *= scaleFactor;
          svgPointY *= scaleFactor;

          
          if (currentCommand == 'm' || currentCommand == 'l')
          {
            //if this is a relative point to previous one
            var prevPoint = {"destX": 0, "destY": 0};
            if (iParticle > 0)
              prevPoint = pJS.particles.array[iParticle - 1];
            
            p.destX = svgPointX + prevPoint.destX;
            p.destY = svgPointY + prevPoint.destY;

            //first point whether it is m or M should be treated as an 
            //aboslute position! so we should ofset it if offset is specified.
            if (iParticle == 0)
            {
              p.destX += shiftX;
              p.destY += shiftY;
            }
          }
          else
          {
            //this is an absolute position:
            p.destX = svgPointX + shiftX;
            p.destY = svgPointY + shiftY;
          }
          
          //if line, link this particle to previous one, unless it is the first particle in path.
          if (firstParticleInPath != p && iParticle > 0)
            p.linkTo = pJS.particles.array[iParticle - 1];
          

          //move particle pointer to next item
          iParticle++;

        }
        else if (currentCommand == 'h' || currentCommand == 'H'){

          //the H command takes on argument, which is distance in horizontal direction (from current position)
          prevParticle = pJS.particles.array[iParticle - 1];
          
          //parse horiz distance from res
          var svgHorizDistance = parseFloat(res[i]);
          
          //advance our svg path pointer by two because we consumed two items
          i++;

          //add new point to our array:
          svgHorizDistance *= scaleFactor;

          //get a particle
          var p = pJS.particles.array[iParticle];
          
          //if h then it's relative from previous point', otherwise it's the position on the x axis
          if (currentCommand == 'h')
            p.destX = svgHorizDistance + prevParticle.destX;
          else
            p.destX = svgHorizDistance + shiftX;
          
          //y axis stays the same
          p.destY = prevParticle.destY;
          
          if (firstParticleInPath != p)
            p.linkTo = pJS.particles.array[iParticle - 1];
          
          //move particle pointer to next item
          iParticle++;

        }
        else if (currentCommand == 'v' || currentCommand == 'V'){

          //the V command takes one argument, which is distance in horizontal direction (from current position)
          prevPoint = pJS.particles.array[iParticle - 1];
          
          //parse vertical distance from res
          var svgVerticalDistance = parseFloat(res[i]);
          
          //advance our svg path pointer by two because we consumed two items
          i++;

          //add new point to our array:
          svgVerticalDistance *= scaleFactor;

          //get a particle
          var p = pJS.particles.array[iParticle];
          
          //if h then it's relative from previous point', otherwise it's the position on the x axis
          if (currentCommand == 'v')
            p.destY = svgVerticalDistance + prevPoint.destY;
          else
            p.destY = svgVerticalDistance + shiftY;
          
          //x axis stays the same
          p.destX = prevPoint.destX;
          
          if (firstParticleInPath != p)
            p.linkTo = pJS.particles.array[iParticle - 1];
          
          //move particle pointer to next item
          iParticle++;

        }


      }
      else if(res[i] == '')
      {
        //empty, skip.
        i++;
      }
      else{
        //we do not understand this parameter so we are going to skip it
        //advance our svg path pointer
        alert("unknown svg parameter encountered. this is a very simple svg parser " + 
            "and can understand only m,l,v,h,z commands. this is going to result in a bad path. parameter: " + res[i]);
        i++;
        
      }
    }
  }


  pJS.fn.particlesUpdate = function() {

    
    for (var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      /* move the particle */
      if (pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        
        if (p.destX != null) {
          //if we know the destination, send the particle there
          var dx = p.destX - p.x;
          var dy = p.destY - p.y;
          dx = dx / 200;
          dy = dy / 200;
          
          p.x += dx * ms;
          p.y += dy * ms;
          
          if (p.linkTo != null){
            pJS.fn.interact.linkParticles(p, p.linkTo);
          }
        }
        else{
          //otherwise keep the particle moving in the direction set by default
          p.x += p.vx * ms;
          p.y += p.vy * ms;
        }
      }


      /*pJS.fn.drawCounter++;

      if (pJS.fn.drawCounter == 40000)
      {
        //pJS.fn.setParticleTargetShape(4);
        pJS.fn.setParticleTargetShape(pJS.California, 2, 500, 100);
      }
      */

      /*
      else if (pJS.fn.drawCounter == 230000){
        //pJS.fn.setParticleTargetShape(2);
        pJS.fn.setParticleTargetShape(pJS.Nevada);
      }
      else if (pJS.fn.drawCounter == 280000){
        //pJS.fn.setParticleTargetShape(3);
        pJS.fn.setParticleTargetShape(pJS.Colorado);
      }
      else if (pJS.fn.drawCounter == 380000){
        //pJS.fn.setParticleTargetShape(1);
        pJS.fn.setParticleTargetShape(pJS.Vermont);
      }
      else if (pJS.fn.drawCounter == 480000){
        pJS.fn.setParticleTargetShape(pJS.Texas);
      }
      else if (pJS.fn.drawCounter == 600000){
        pJS.fn.clearParticleTargetShape();
      }
*/

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable) {
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(p.destX == null && (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable)){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};