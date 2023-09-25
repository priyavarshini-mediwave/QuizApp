const quiz = {
  //categories
  categories: [
    {
      id: 1,
      name: "ComputerScience",
      value: "computer",
    },

    {
      id: 2,
      name: "Geology",
      value: "geology",
    },
  ],

  questions: [
    {
      id: "101",
      question: "Who is the father of Computer?",
      options: [
        { id: "111", answer: "Charles Babbage", isCorrect: true },
        { id: "112", answer: "Dennis Ritchie", isCorrect: false },
        { id: "113", answer: "Guido Van Russom", isCorrect: false },
        { id: "114", answer: "Bjane Stroustrup", isCorrect: false },
      ],

      category: 1,
    },
    {
      id: "102",
      question: "Who founded C++?",
      options: [
        { id: "121", answer: "Charles Babbage", isCorrect: false },
        { id: "122", answer: "Dennis Ritchie", isCorrect: false },
        { id: "123", answer: "Guido Van Russom", isCorrect: false },
        { id: "124", answer: "Bjarne Stroustrup", isCorrect: true },
      ],

      category: 1,
    },
    {
      id: "103",
      question: "Which is a OOPs language?",
      options: [
        { id: "131", answer: "HTML", isCorrect: false },
        { id: "132", answer: "C", isCorrect: false },
        { id: "133", answer: "Basic", isCorrect: false },
        { id: "134", answer: "Js", isCorrect: true },
      ],
      category: 1,
    },
    {
      id: "104",
      question: "Which is the highest peak? ",
      options: [
        { id: "141", answer: "Mt.Everest", isCorrect: true },
        { id: "142", answer: "Mt.Sanas", isCorrect: false },
        { id: "143", answer: "Mt.Alps", isCorrect: false },
        { id: "144", answer: "Mt.Kangchenjunga", isCorrect: false },
      ],

      category: 2,
    },
    {
      id: "105",
      question: "Which is the outer most layer of the earth?",
      options: [
        { id: "151", answer: "Mantle", isCorrect: false },
        { id: "152", answer: "Crust", isCorrect: true },
        { id: "153", answer: "Core", isCorrect: false },
        { id: "154", answer: "InnerCore", isCorrect: false },
      ],

      // options: ["Mantle", "Crust", "Core", "InnerCore"],
      // Crtanswer: "Crust",
      category: 2,
    },
    {
      id: "106",
      question: "What is the thin layer of gases that surrounds the Earth?",
      options: [
        { id: "161", answer: "Lithosphere", isCorrect: true },
        { id: "162", answer: "Hydrosphere", isCorrect: false },
        { id: "163", answer: "Atmosphere", isCorrect: true },
        { id: "164", answer: "Biosphere", isCorrect: false },
      ],
      // options: ["Lithosphere", "Hydrosphere", "Atmosphere", "Biosphere"],
      // Crtanswer: "Atmosphere",
      category: 2,
    },
  ],
};
function appendtoselectInput() {
  for (i = 0; i < quiz.categories.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", quiz.categories[i].value);
    option.innerText = quiz.categories[i].name;
    const selectInput = document.querySelector("#category-input");
    selectInput.appendChild(option);
  }
}
appendtoselectInput();
function loadfromLocal(selectedValue) {
  setLocalStorageItem("selectedCategory", selectedValue);
  let selectedValueIndex = quiz.categories.findIndex(
    (item) => item.value == selectedValue
  );
  let selectedId = quiz.categories[selectedValueIndex].id;

  form.style.display = "none";
  const appWrap = document.querySelector("#app-wrap");
  appWrap.style.display = "block";
  const app = document.createElement("div");
  app.setAttribute("id", "app");
  const buttonsdiv = document.createElement("div");
  buttonsdiv.setAttribute("class", "buttonsdiv");
  buttonsdiv.setAttribute("id", "buttonsdiv");
  appWrap.appendChild(app);
  appWrap.appendChild(buttonsdiv);
  appendtoButtonsdiv();
  buttonsdiv.style.display = "block";
  console.log(selectedId);
  updateUI(selectedId);
}
form = document.querySelector("#choose-category-form");
const btnproceed = document.querySelector("#proceed-btn");
btnproceed.addEventListener("click", function (e) {
  e.preventDefault();
  const selectInput = document.querySelector("#category-input");
  let selectedValue = selectInput.value;
  loadfromLocal(selectedValue);
});

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
    alert("Submitting...");
  });

  buttonsdiv.appendChild(buttonback);
  buttonsdiv.appendChild(buttonsubmit);
}

function updateUI(selectedId) {
  clearapp();
  //favMovies.filter((movie) => movie.id != movieId)
  const questions = quiz.questions.filter(
    (item) => item.category == selectedId
  );
  console.log(questions);
  for (let i of questions) {
    const choose = makeChoosediv(i);
    appendtoapp(choose);
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

    // radiobtn.value = item.options[i].answer;
    radiobtn.value = item.options[i].id;

    const radioname = document.createTextNode(item.options[i].answer);
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

    console.log("sel", selected);
    //console.log(selected.value);
    // const checkAnswer = item.options[i];
    // console.log(checkAnswer);
    console.log("hi");

    if (selected) {
      const choosenAnswer = selected.value;
      const answerIndex = item["options"].findIndex(
        (item) => item.id === choosenAnswer
      );
      const crtansId = item.options.findIndex((ans) => ans.isCorrect === true);
      const crtansname = item.options[crtansId].answer;
      if (item["options"][answerIndex].isCorrect) {
        correctAnsShow(crtansname, `${item["id"]}`, "green");
      } else {
        correctAnsShow(crtansname, `${item["id"]}`, "red");
      }
    } else {
      //const choosenAnswer = selected.value;
      const answerIndex = item["options"].findIndex(
        (item) => item.isCorrect === true
      );
      const crtansId = item.options.findIndex((ans) => ans.isCorrect === true);
      const crtansname = item.options[crtansId].answer;
      correctAnsShow(crtansname, `${item["id"]}`, "orange");
    }
  });
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
function Moveback() {
  const appWrap = document.querySelector("#app-wrap");
  appWrap.style.display = "none";
  const buttonsdiv = document.querySelector("#buttonsdiv");
  buttonsdiv.style.display = "none";
  setLocalStorageItem("selectedCategory", "");
  form = document.querySelector("#choose-category-form");
  form.style.display = "block";
}

function appendtoapp(choose) {
  const app = document.querySelector("#app");
  app.appendChild(choose);
}

// Function to set data in localStorage
function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true; // Data successfully stored
  } catch (error) {
    console.error("Error storing data in localStorage:", error);
    return false; // Failed to store data
  }
}
// Function to get data from localStorage
function getLocalStorageItem(key) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error("Error retrieving data from localStorage:", error);
    return null;
  }
}
window.addEventListener("load", function () {
  const storedCategory = getLocalStorageItem("selectedCategory");
  if (storedCategory) {
    // const selectInput = document.querySelector("#category-input");
    // selectInput.value = storedCategory;
    // // Also, you might want to trigger the event as if the user had clicked "proceed" again
    // document.getElementById("proceed-btn").click();
    loadfromLocal(storedCategory);
  }
});
