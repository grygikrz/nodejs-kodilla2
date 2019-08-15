function getTimeCon(time) {
  var timeH = (time / 60) / 60;
  var timeM = (time - (Math.floor(timeH) * 3600)) / 60;
  var timeS = time - ((Math.floor(timeH) * 3600) + (Math.floor(timeM) * 60));

  if (timeH >= 1){

    return timeH.toFixed(0)+'godz '+timeM.toFixed(0)+'min '+timeS.toFixed(0)+'sek';

  }

  if (timeH < 1 && time > 59){

    return timeM.toFixed(0)+'min '+timeS.toFixed(0)+'sek';

  }

  if(time < 60 && timeM < 1){

    return timeS.toFixed(0)+'sek';

  }

}

exports.conv = getTimeCon;
