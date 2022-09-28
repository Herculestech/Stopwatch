const start = () => {
    milisec.value ++
    setTime = setTimeout("start()", '10')
    if (milisec.value==100){
        milisec.value=0
        sec.value++
    }
    else if (sec.value==60){
        sec.value=0
        min.value++
    }else if (min.value==60) {
        min.value=0
        hour.value++
    }
  }
  const pause = () => {
    clearTimeout (setTime)
  }
  const reset = () => {
    clearInterval (setTime)
    milisec.value=00
    min.value=00
    sec.value=00
    hour.value=00
  }