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
  const toggleForm = (e) => {
    const photoForm = document.querySelector(".photo-form-container");
    if (photoForm.className === "photo-form-container") {
      photoForm.className = "photo-form-container hidden";
    } else {
      photoForm.className = "photo-form-container";
    }
  };

  const showButton = document.querySelector(".photo-show-button");
  showButton.addEventListener("click", toggleForm);

  const addPhoto = (e) => {
    e.preventDefault();

    const urlInput = document.querySelector(".photo-url-input");
    const photoUrl = urlInput.value;
    urlInput.textContent = "";

    const newPhoto = document.createElement("img");
    newPhoto.src = photoUrl;

    const newPhotoLi = document.createElement("li");
    newPhotoLi.appendChild(newPhoto);

    const dogPhotos = document.querySelector(".dog-photos");
    dogPhotos.appendChild(newPhotoLi);
  }

  const submitPhotoBtn = document.querySelector(".photo-url-submit");
  submitPhotoBtn.addEventListener("click", addPhoto);

});
