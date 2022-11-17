var ENDPOINT = 'https://askai.aiclub.world/44860347-27ad-447d-a983-8f1fb96e9311';
acne_dropdown()
prediction.onclick = function () {
  age = agetext.value;
  gender1 = genderdd.value;
  skintype = skincaredd.value;
  bothers1 = concerndd.value;
  acne_breakouts1 = acnedd.value;
  skin_care_routine = skindd.value;
  photos1 = photosdd.value;
  water1 = waterdd.value;
  sleep1 = sleeptext.value;
  stress1 = stressdd.value;
  diet1 = dietdd.value;
  screentime1 = screentimedd.value;
  skin_product = productsdd.value;
  makeup1 = makeupdd.value;
  remove_makeup1 = makeupremovaldd.value;
  live = localitydd.value;

  makePredictionMood()

}
function makePredictionMood() {
  var dataMood = `{"Age":"${age}","Gender":"${gender1}","Skin_type":"${skintype}","bothers":"${bothers1}","acne_breakouts":"${acne_breakouts1}","skincareroutine":"${skin_care_routine}","photos":"${photos1}","water":"${water1}","sleep":"${sleep1}","stress":"${stress1}","diet":"${diet1}","screen_time":"${screentime1}","products":"${skin_product}","makeup":"${makeup1}","remove_makeup":"${remove_makeup1}","location":"${live}"}`;
  /*
 var dataMood ={Age:age,Gender:gender1,Skin_type:skintype,bothers:bothers1,acne_breakouts:acne_breakouts1,skincareroutine:skin_care_routine,photos:photos1,water:water1,sleep:sleep1,stress:stress1,diet:diet1,screen_time:screentime1,products:skin_product,makeup:makeup1,remove_makeup:remove_makeup,location:live};*/
  return fetch(ENDPOINT, {
    method: 'POST',
    body: dataMood,
  })
    .then(res => res.json())
    .then(response => JSON.parse(response.body))
    .then(function (data) {
      console.log("processMoodPrediction: ", data);
      console.log(age)
      var predictedLabel = data["predicted_label"]
      valuePrediction.innerHTML = predictedLabel;
    })
    .catch(err => console.log('err', err));
};

function acne_dropdown() {
  var concern2 = document.getElementById("concerndd");
  var acne2 = document.getElementById("abc");
  acne2.style.display = concern2.value == "Acne breakouts" ? "block" : "none";
}
function makeout_dropdown() {
  var makeup2 = document.getElementById("makeupdd");
  var makeup_removal2 = document.getElementById("pqr");
  makeup_removal2.style.display = makeup2.value == "Yes" ? "block" : "none";
}   