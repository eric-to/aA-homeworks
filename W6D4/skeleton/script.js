document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items
  const addPlaceLi = (e) => {
    e.preventDefault();

    const listInput = document.querySelector(".favorite-input");
    const input = listInput.value;
    listInput.value = "";

    const newLi = document.createElement("li");
    newLi.textContent = input;

    const placeList = document.getElementById("sf-places");
    placeList.appendChild(newLi);
  };

  const addListBtn = document.querySelector(".favorite-submit");
  addListBtn.addEventListener("click", addPlaceLi);


  // adding new photos
});
