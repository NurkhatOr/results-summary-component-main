let categoriesName = document.querySelectorAll(".category");
let points = document.querySelector(".points");
let totalDisplay = document.querySelector(".total-points");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    let totalPointsArray = [];
    let finalResult = 0;

    //THIS LINES CREATE HTML ELEMENTS FOR SUMMARY POINTS
    data.forEach((elements) => {
      points.innerHTML += `
      <div class="summary-points">
      <div class="progress-bar ${elements.category.toLowerCase()} width-animated"></div>
      <img class="icon" src="${elements.icon}" />
      <span class="category ${elements.category.toLowerCase()}-color">${
        elements.category
      }</span>
      <span class="points-scored fw-700"><span class="points-earned">${
        elements.score
      } </span>/ 100</span>
    </div>`;

      //THIS LINES GIVE WIDTH VALUES TO EVERY BAR ACCORDING TO THE SCORES FROM JSON FILE
      document.querySelectorAll(".progress-bar").forEach((el) => {
        if (el.classList.contains(`${elements.category.toLowerCase()}`)) {
          el.style.width = `${elements.score}%`;
        }
      });

      // THIS LINES CALCULATE AND DISPLAY AN AVERAGE SCORE FROM ALL CATEGORIES IN JCON FILE
      totalPointsArray.push(parseInt(`${elements.score}`));
      finalResult += parseInt(`${elements.score}`);
      totalDisplay.innerHTML = Math.round(
        finalResult / totalPointsArray.length
      );
    });
  });
s;
