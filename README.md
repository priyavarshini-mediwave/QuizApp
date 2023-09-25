for(const q of Computer) {
const ip = `input[name="ans-${q.id}"]:checked`
const userAnswer = document.querySelector(ip).value
console.log(userAnswer)

      console.log('is correct ', userAnswer == q['answer'])
    }
