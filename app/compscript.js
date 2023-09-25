Computer = [
  {
    id: 1,
    question: "Who is the father of the Computer?",
    options: [
      "Bjarne Stroustrup",
      "Charles Babbage",
      "Guido Van Rossum",
      "Vasco Da Gama",
    ],
    answer: "Charles Babbage",
  },
  {
    id: 2,
    question: "Who invented C++?",
    options: [
      "Bjarne Stroustrup",
      "Charles Babbage",
      "Guido Van Rossum",
      "Vasco Da Gama",
    ],
    answer: "Bjarne Stroustrup",
  },
  {
    id: 3,
    question: "Choose the OOPs language.",
    options: ["HTML", "C", "Basic", "JS"],
    answer: "JS",
  },
];

const Geology = [
  {
    id: "104",
    question: "Which is the highest peak? ",
    options: ["Mt.Everest", "Mt.Sanas", "Mt.Alps", "Mt.Kangchenjunga"],
    Crtanswer: "Mt.Everest",
    category: 2,
  },
  {
    id: "105",
    question: "Which is the outer most layer of the earth?",
    options: ["Mantle", "Crust", "Core", "InnerCore"],
    Crtanswer: "Crust",
    category: 2,
  },
  {
    id: "106",
    question: "What is the thin layer of gases that surrounds the Earth?",
    options: ["Lithosphere", "Hydrosphere", "Atmosphere", "Biosphere"],
    Crtanswer: "Atmosphere",
    category: 2,
  },
];
const questionCollection = {
  Computer,
  Geology,
};

const urlParams = new URLSearchParams(window.location.search);
const myType = urlParams.get("type");
console.log(questionCollection[myType]);
const subjectarray = questionCollection[myType];

//for (let mcq of questionCollection[myType])

function updateUI() {
  clearapp();
  for (let item of subjectarray) {
    console.log(item);
    const choose = makeChoosediv(item);
    appendtoapp(choose);
    //appendtoapp(buttonback);
    appendtoapp(buttonsdiv);
  }
}
function clearapp() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
}
function makeChoosediv(item) {
  const div = document.createElement("div");
  div.setAttribute("class", "choosediv");
  div.setAttribute("id", `div-${item.id}`);

  const ques = document.createElement("h3");
  ques.innerText = item.question;
  div.appendChild(ques);

  for (i = 0; i < item.options.length; i++) {
    const radiobtn = document.createElement("input");
    radiobtn.setAttribute("type", "radio");
    radiobtn.setAttribute("name", `ans-${item.id}`);

    radiobtn.value = item.options[i];

    const radioname = document.createTextNode(item.options[i]);
    div.appendChild(radiobtn);
    div.appendChild(radioname);
  }
  const resultdiv = document.createElement("div");
  resultdiv.setAttribute("class", "resultdiv");
  resultdiv.setAttribute("id", `resultdiv${i}`);
  resultdiv.innerText = "result";
  div.appendChild(resultdiv);
  return div;
}
const buttonback = document.createElement("button");
buttonback.setAttribute("type", "submit");
buttonback.setAttribute("class", "buttonback");
buttonback.setAttribute("id", "buttonback");
buttonback.innerText = "Back";
buttonback.addEventListener("click", function () {
  Moveback();
});

const buttonsubmit = document.createElement("button");
buttonsubmit.setAttribute("type", "submit");
buttonsubmit.setAttribute("class", "buttonsubmit");
buttonsubmit.setAttribute("id", "buttonsubmit");
buttonsubmit.innerText = "Submit";
buttonsubmit.addEventListener("click", function (e) {
  e.preventDefault();
  checkAnswer();
  compareAnswers();
});
const buttonsdiv = document.createElement("div");
buttonsdiv.setAttribute("class", "buttonsdiv");
buttonsdiv.setAttribute("id", "buttonsdiv");
buttonsdiv.appendChild(buttonback);
buttonsdiv.appendChild(buttonsubmit);

function checkAnswer() {
  //alert("check for answers");
  for (i = 0; i < subjectarray.length; i++) {
    let crtans = document.createElement("p");
    crtans.setAttribute("class", "crtans");
    crtans.setAttribute("id", `crtans-${i}`);
    crtans.innerText = subjectarray[i].answer;
    console.log(crtans);
    appendtoapp(crtans);
  }
}

function Moveback() {
  console.log("back called");
  //   history.back();
  //location.replace("/index.html");
}

function appendtoapp(choose) {
  const app = document.querySelector("#app");
  app.appendChild(choose);
}

// function compareAnswers() {
//   //alert("compareAnswers");
//   const selectedanswers = [];
//   for (i = 0; i < subjectarray.length; i++) {
//     let selctedid = `ans-${i}`;
//     let selected = document.querySelector("#selctedid").value;
//     selectedanswers.push(selected);
//   }
//   console.log(selectedanswers);
// }

updateUI();
