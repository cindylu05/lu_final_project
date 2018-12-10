const map = L.map('asiamap').setView([17.929, 15.901], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/cindylu05/cjp96z9ao0dxv2rpk977no97d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHlsdTA1IiwiYSI6ImNqcDBkcXVuczAwMmkzd3BhN202a2NzdjQifQ.mnHvWLTtVmroqrwCTeVsgQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

const jmarker = new L.marker([36.630867, 138.587704]).addTo(map);
const imarker = new L.marker([22.962261, 78.829018]).addTo(map);
const kmarker = new L.marker([0.924594, 37.886420]).addTo(map);
const smarker = new L.marker([41.696375, -3.458142]).addTo(map);
const mmarker = new L.marker([25.336799, -102.815154]).addTo(map);

jmarker.bindPopup('<p><b>Japan</b><br>Scroll down to learn more.</p>');
imarker.bindPopup('<p><b>India</b><br>Scroll down to learn more.</p>');
kmarker.bindPopup('<p><b>Kenya</b><br>Scroll down to learn more.</p>');
smarker.bindPopup('<p><b>Spain</b><br>Scroll down to learn more.</p>');
mmarker.bindPopup('<p><b>Mexico</b><br>Scroll down to learn more.</p>');

$(document).ready(() => {

  function toggle() {
    $('.info').hide();
  };

  toggle();

  $('#kone').click(function() {
    $('#kinfotwo').hide();
    $('#kinfothree').hide();
    $('#kinfoone').toggle();
  });

  $('#ktwo').click(function() {
    $('#kinfoone').hide();
    $('#kinfothree').hide();
    $('#kinfotwo').toggle();
  });

  $('#kthree').click(function() {
    $('#kinfoone').hide();
    $('#kinfotwo').hide();
    $('#kinfothree').toggle();
  });

  $('#sone').click(function() {
    $('#sinfotwo').hide();
    $('#sinfothree').hide();
    $('#sinfoone').toggle();
  });

  $('#stwo').click(function() {
    $('#sinfoone').hide();
    $('#sinfothree').hide();
    $('#sinfotwo').toggle();
  });

  $('#sthree').click(function() {
    $('#sinfoone').hide();
    $('#sinfotwo').hide();
    $('#sinfothree').toggle();
  });

  $('#jone').click(function() {
    $('#jinfotwo').hide();
    $('#jinfothree').hide();
    $('#jinfoone').toggle();
  });

  $('#jtwo').click(function() {
    $('#jinfoone').hide();
    $('#jinfothree').hide();
    $('#jinfotwo').toggle();
  });

  $('#jthree').click(function() {
    $('#jinfoone').hide();
    $('#jinfotwo').hide();
    $('#jinfothree').toggle();
  });

  $('#mone').click(function() {
    $('#minfotwo').hide();
    $('#minfoone').toggle();
  });

  $('#mtwo').click(function() {
    $('#minfoone').hide();
    $('#minfotwo').toggle();
  });

  $('#ione').click(function() {
    $('#iinfotwo').hide();
    $('#iinfoone').toggle();
  });

  $('#itwo').click(function() {
    $('#iinfoone').hide();
    $('#iinfotwo').toggle();
  });

  function hideQuiz() {
    $('form').hide();
    $('#results').hide();
  };

  hideQuiz();

  $('#qopen').click(function() {
    $('form').toggle();
    $('#results').hide();
  });

  $('#choices').click(function() {
    $('#results').show();
  });

});
