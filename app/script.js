subjects = [
  { value: "Computer", name: "ComputerScience" },
  { value: "Geology", name: "Geology" },
];
const selectInput = document.querySelector("#category-input");
for (i = 0; i < subjects.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("id", `sub${i}`);
  option.setAttribute("value", subjects[i].value);
  option.innerText = subjects[i].name;
  selectInput.appendChild(option);
}

form = document.querySelector("#choose-category-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var selectedValue = selectInput.value;
  //   window.location.href = `question.html?type=${selectedValue}`;
  //window.location.href = `question?type=${selectedValue}`;
  form.style.display = "none";
  const appWrap = document.querySelector("#app-wrap");
  appWrap.style.display = "block";
  const app = document.querySelector("#app");
  const buttonsdiv = document.createElement("div");
  buttonsdiv.setAttribute("class", "buttonsdiv");
  buttonsdiv.setAttribute("id", "buttonsdiv");
  buttonsdiv.style.display = "block";
  appWrap.appendChild(app);
  appWrap.appendChild(buttonsdiv);
  appendtoButtonsdiv();

  updateUI(selectedValue);
});

const Computer = [
  {
    id: 101,
    question: "Who is the father of the Computer?",
    options: [
      "Bjarne Stroustrup",
      "Charles Babbage",
      "Guido Van Rossum",
      "Vasco Da Gama",
    ],
    Crtanswer: "Charles Babbage",
    category: 1,
  },
  {
    id: 102,
    question: "Who invented C++?",
    options: [
      "Bjarne Stroustrup",
      "Charles Babbage",
      "Guido Van Rossum",
      "Vasco Da Gama",
    ],
    Crtanswer: "Bjarne Stroustrup",
    category: 1,
  },
  {
    id: 103,
    question: "Choose the OOPs language.",
    options: ["HTML", "C", "Basic", "JS"],
    Crtanswer: "JS",
    category: 1,
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
  Computer: Computer,
  Geology: Geology,
};

function updateUI(sub) {
  clearapp();
  for (let item of questionCollection[sub]) {
    console.log(item);

    const choose = makeChoosediv(item);
    appendtoapp(choose);
    //appendtoapp(buttonback);
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
  resultdiv.setAttribute("id", `resultdiv${item.id}`);
  resultdiv.innerText = "result";
  div.appendChild(resultdiv);

  const submitBtn = document.querySelector("#buttonSubmit");

  submitBtn.addEventListener("click", function () {
    // let selectedname = `ans-${item.id}`;
    //console.log(selectedname);
    const selected = document.querySelector(
      `input[name="ans-${item.id}"]:checked`
    );
    console.log(1);
    console.log(selected);
    //console.log(selected.value);
    const checkAnswer = item.Crtanswer;
    console.log(checkAnswer);
    console.log("hi");
    if (selected) {
      const selectedAnswer = selected.value;
      console.log(selectedAnswer);
      if (checkAnswer == selectedAnswer) {
        correctAnsShow(checkAnswer, `${item["id"]}`, "green");
      } else {
        correctAnsShow(checkAnswer, `${item["id"]}`, "red");
      }
    } else {
      console.log("else!");
      console.log(selected);
      correctAnsShow(checkAnswer, `${item["id"]}`, "orange");
    }
  });
  // findNotAnswering(`result-${mcq["id"]}`);
  return div;
}
function correctAnsShow(ans, resultId, add) {
  const divId = `#div-${resultId}`;
  const divClass = "border-" + add;
  const div = document.querySelector(divId);
  div.classList.add(divClass);
  const selector = `#resultdiv${resultId}`;
  console.log(selector);
  const result = document.querySelector(selector);
  result.innerHTML = "Ans: " + ans;
  result.classList.add(add);
}

function appendtoButtonsdiv() {
  const buttonsdiv = document.querySelector("#buttonsdiv");

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
  buttonsubmit.setAttribute("id", "buttonSubmit");
  buttonsubmit.innerText = "Submit";

  buttonsubmit.addEventListener("click", function (e) {
    alert("hi");
  });

  buttonsdiv.appendChild(buttonback);
  buttonsdiv.appendChild(buttonsubmit);
}

// function checkAnswer(sub) {
//   //alert("check for answers");
//   for (i = 0; i < questionCollection[sub].length; i++) {
//     let crtans = document.createElement("p");
//     crtans.setAttribute("class", "crtans");
//     crtans.setAttribute("id", `crtans-${i}`);
//     crtans.innerText = questionCollection[sub].Crtanswer;
//     console.log(crtans);
//     appendtoapp(crtans);
//   }
// }

function Moveback() {
  const appWrap = document.querySelector("#app-wrap");
  appWrap.style.display = "none";
  const buttonsdiv = document.querySelector("#buttonsdiv");
  buttonsdiv.style.display = "none";
  form = document.querySelector("#choose-category-form");
  form.style.display = "block";
}

function appendtoapp(choose) {
  const app = document.querySelector("#app");
  app.appendChild(choose);
}
