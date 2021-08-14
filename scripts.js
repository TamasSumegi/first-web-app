/* javascript for first-web-app*/
const imagesdata = [
{photo:"images/raspberries-3454504_640.jpg", title:"Málna", description:"Szép, érett málnaszemek"},
{photo:"images/cows-2641195_640.jpg", title:"Tehenek", description:"Tehenek az alpesi legelőn"},
{photo:"images/animal-3729821_640.jpg", title:"Őz", description:"Kíváncsi őzike"},
{photo:"images/sunflowers-3792914_640.jpg", title:"Napraforgók", description:"Napraforgótenger"},
{photo:"images/roses-3189198_640.jpg", title:"Rózsák", description:"Rózsavirágzatok"},
{photo:"images/swan-2270980_640.jpg", title:"Hatyú", description:"Hattyú a vízen"},
{photo:"images/parrot-3695678_640.jpg", title:"Papagáj", description:"Nagy kék arapapagáj"},
{photo:"images/owl-50267_640.jpg", title:"Bagoly", description:"Erdei fülesbagoly portréja szemből"},
{photo:"images/lion-3260558_640.jpg", title:"Oroszlán", description:"Nagycica"},
{photo:"images/honey-bee-6506809_640.jpg", title:"Méh", description:"Mézelő méh begyűjtés közben"},
{photo:"images/elephant-3832516_640.jpg", title:"Elefánt", description:"Magányos elefánt"},
{photo:"images/tasmanian-devil-6479685_640.jpg", title:"Tasmán ördög", description:"Tasmán ördög szemből"},
{photo:"images/bald-eagle-6481346_640.jpg", title:"Sas", description:"Fehér fejkű halászsas (rétisas)"}
];

let currentPhoto = 1;
$('#photo').attr('src', imagesdata[currentPhoto].photo);
$("#photoTitle").text(imagesdata[currentPhoto].title);
$("#phototext").text(imagesdata[currentPhoto].description);

let loadPhoto = (photoNumber) => {
$('#photo').attr('src', imagesdata[photoNumber].photo);
$("#photoTitle").text(imagesdata[photoNumber].title);
$("#phototext").text(imagesdata[photoNumber].description);
}
loadPhoto(currentPhoto);

$('#button1').click(() => {
  if (currentPhoto>0)
  {currentPhoto--;}
  else
  {currentPhoto=(imagesdata.length)-1}
  loadPhoto(currentPhoto);
})

$('#button2').click(() => {
  if (currentPhoto<imagesdata.length)
  {currentPhoto++;}
  else
  {currentPhoto=0}
  loadPhoto(currentPhoto);
})

imagesdata.foreach((item, index) => {
  $('#ThumbNailContainer').append(`<div class=box data-index="${index}"></div>`)
    $('.box').click((event) => {
      let indexClicked = $(event.target).attr('data-index');
      let numberIndex = parseInt(indexClicked);
    })
  })