/* javascript for first-web-app*/
const imagesdata =[ {   photo: "images/raspberries-3454504_640.jpg",   title: "Málna",   description: "Szép, érett málnaszemek"},
{photo: "cows-2641195_640.jpg", title: "Tehenek", description: "Tehenek az alpesi legelőn"},
{photo: "animal-3729821_640.jpg", title: "Őz", description: "Kíváncsi őzike"},
{photo: "sunflowers-3792914_640.jpg", title: "Napraforgók", description: "Napraforgótenger"},
{photo: "roses-3189198_640.jpg", title: "Rózsák", description: "Rózsavirágzatok"},
{photo: "swan-2270980_640.jpg", title: "Hatyú", description: "Hattyú a vízen"},
{photo: "parrot-3695678_640.jpg", title: "Papagáj", description: "Nagy kék arapapagáj"},
{photo: "owl-50267_640.jpg", title: "Bagoly", description: "Erdei fülesbagoly portréja szemből"},
{photo: "lion-3260558_640.jpg", title: "Oroszlán", description: "Nagycica"},
{photo: "honey-bee-6506809_640.jpg", title: "Méh", description: "Mézelő méh begyűjtés közben"},
{photo: "elephant-3832516_640.jpg", title: "Elefánt", description: "Magányos elefánt"},
{photo: "tasmanian-devil-6479685_640.jpg", title: "Tasmán ördög", description: "Tasmán ördög szemből"},
{photo: "bald-eagle-6481346_640.jpg", title: "Sas", description: "Fehér fejkű halászsas (rétisas)"}
];

var currentPhoto = 0;
$('#photo').attr('src', imagesData[currentPhoto].photo);
$("#photoTitle").text(imagesData[currentPhoto].title);
$("#phototext").text(imagesData[currentPhoto].description);

