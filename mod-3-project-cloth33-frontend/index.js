const hostURL = "http://localhost:3000/";
const defaultElementStyle = "flex";

const navBar = document.getElementById("nav-buttons");
const newClothingDiv = document.getElementById("new-item");
const itemForm = document.getElementById("item-form");

const mainPageContent = document.getElementById("main-page-content");

let userId = 0;
const loginForm = document.getElementById("login-form");
const newUserForm = document.getElementById("new-user-form");
const nameInput = document.getElementById("log-input");
const createButton = document.getElementById("create-button");
const itemAddButton = document.getElementById("item-button");
const itemCounter = document.getElementById("item-counter");

const spanErrorCreate = document.getElementById("span-error-create");
const spanErrorItems = document.getElementById("span-error-items");
const spanErrorLogin = document.getElementById("span-error-login");

let formOn = false; // use this to toggle the form on and off on the toggleForm function

document.addEventListener("DOMContentLoaded", () => {
  hideElement(newClothingDiv, false);
  hideElement(navBar, false);
  newUserForm.addEventListener("submit", event => {
    event.preventDefault();
    createUser(newUserForm.username.value, newUserForm);
  });

  loginForm.addEventListener("submit", event => {
    event.preventDefault();
    loginUser(nameInput.value);
  });

  const loginUser = username => {
    if(username != ""){
    fetch(`${hostURL}login/${username}`)
      .then(resp => resp.json())
      .then(userInfo => {
        if (userInfo.error) {
          console.error(userInfo , " error from fetch");
          loginUserHandler(userInfo.error);
        } else {
          userId = userInfo["id"];
          unrenderMPC();
          makeToggler();

          hideElement(newClothingDiv, true);
          renderNewItems(userInfo.items.reverse(), false);
          hideElement(navBar, true);
          itemCounter.innerHTML = userInfo["items"].length;
        }
      })
      .catch(err => {console.log(err , " got caught")} );
    }

      else{
          loginUserHandler("Error with Credentials")
      }
  };

  const loginUserHandler = error => {
        console.dir(error + " , is the error")
        spanErrorLogin.innerText = error;
  };

  document.getElementById("clothes").addEventListener("click", () => {
    unrenderMPC();
    formOn = false;
    createClothesViewer();
  });

  document.getElementById("outfits").addEventListener("click", () => {
    unrenderMPC();
    formOn = false;
    createOutfitViewer();
  });

  document.getElementById("outfit-creator").addEventListener("click", () => {
    unrenderMPC();
    formOn = false;
    createOutfitCreator();
  });
});

// Create a user from the landing page
const createUser = (name, newUserForm) => {
    if(name !== "")
{  fetch(hostURL + "users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: { username: name }
    })
  })
    .then(resp => {
      return resp.json();
    })
    .then(user => {
      if (user.error) {
        console.error(user.error); //  username already exists
        createUserErrorHandler(user.error);
      } else {
        userId = user["id"]; // user successfully created
        hideElement(newUserForm, false);

        unrenderMPC(); // repeat code, will refactor later
        makeToggler();

        hideElement(newClothingDiv, true);
        hideElement(navBar, true);
        itemCounter.innerHTML = 0;
      }
    });}
    else{
        createUserErrorHandler("Name Cannot Be Blank")
    }
};

const createUserErrorHandler = error => {
  spanErrorCreate.innerText = error;
};

// load closet / clothes manager to ADD , VIEW , and , DELETE CLOTHES
const renderNewItems = (items, prependItems, parentElement = null) => {
  for (const item of items) {
    createItemElements(item, prependItems, parentElement);
  }
};

// appends after a specific element if called as an arg
const createItemElements = (
  item,
  prependItem = false,
  parentElement = null,
  appendAfter = false
) => {
  if (parentElement == null) parentElement = mainPageContent;
  let itemDiv = document.createElement("span");
  itemDiv.className = "card w-25 mx-2 mb-3 mt-3 pt-2 d-inline-flex";
  let itemNameH3 = document.createElement("h4");
  itemNameH3.innerText = item.name;

  let itemImage = document.createElement("img");
  itemImage.className = "item-avatar text-center col";
  itemImage.src = item.img_url;

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "btn btn-purple mx-2 mt-1 mb-2 text-white";

  deleteButton.addEventListener("click", event => {
    fetch(`${hostURL}items/${item.id}`, {
      method: "DELETE"
    }).then(() => {
      event.target.parentNode.remove();
      let count = parseInt(itemCounter.innerText, 10);
      count--;
      itemCounter.innerHTML = count;
    });
  });
  itemDiv.append(itemNameH3, itemImage, deleteButton);

  if (appendAfter) parentElement.after(itemDiv);
  else
    prependItem
      ? parentElement.prepend(itemDiv)
      : parentElement.append(itemDiv);
};

itemForm.addEventListener("submit", event => {
  event.preventDefault();
  addNewItem(mainPageContent.children[0], true);
  itemForm.img.value = "";
  itemForm.name.value = "";
  itemForm.category.value = "";
});
const addNewItem = (parentNode = null, appendAfter = false) => {
  let formData = {
    name: itemForm.name.value,
    category: itemForm.category.value,
    img_url: itemForm.img.value,
    user_id: userId
  };
  fetch(hostURL + "items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(resp => resp.json())
    .then(item => {
      if (item.error) {
        createItemErrorHandler(item.error);
      } else {
        createItemElements(item, true, parentNode, appendAfter);

        let count = parseInt(itemCounter.innerText, 10);
        count++;
        itemCounter.innerHTML = count;
      }
    });
};

const createItemErrorHandler = error => {
  if (userId === 0) {
    let itemErrorSpan = document.createElement("span");
    itemErrorSpan.innerHTML = error;
    mainPageContent.prepend(itemErrorSpan);
    console.log(error, "<== From the Error Handler");

    window.addEventListener("click", () => {
        mainPageContent.removeChild(itemErrorSpan);
      });
  }

  else{
    let errorModal = document.createElement("div");
    errorModal.id = "error-modal"
    errorModal.classList.add("modal");
    
    let errorText = document.createElement("modal-title");
    errorText.innerText = error;
    errorModal.appendChild(errorText)

    mainPageContent.prepend(errorModal);


    window.addEventListener("click", () => {
        mainPageContent.removeChild(errorModal);
      });
  }

};

window.addEventListener("click", () => {
  spanErrorCreate.innerText = "";
  spanErrorLogin.innerText = "";
});

function hideElement(htmlElement, makeVisible) {
  if (makeVisible) htmlElement.style.display = defaultElementStyle;
  else htmlElement.style.display = "none";
}

function unrenderMPC() {
  while (mainPageContent.firstChild) {
    mainPageContent.removeChild(mainPageContent.firstChild);
  }
}

// Create the Outfit-Viewer Page
function createOutfitViewer() {
  let viewPanel = document.createElement("div");
  mainPageContent.appendChild(viewPanel);

  fetch(`http://localhost:3000/users/${userId}`)
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      // this loop will get the individual outfit from the object
      for (let i = 0; i < json["outfits"].length; i++) {
        let outfitElements = json["outfits"][i]["items"];
        let outfitId = json["outfits"][i]["id"];

        let holder = document.createElement("span");
        holder.className = "card container m-3 w-25 d-inline-flex";

        let subDiv = document.createElement("div");
        subDiv.className = "row p-3";
        holder.appendChild(subDiv);
        mainPageContent.appendChild(holder);

        // this loop does things with the outfit element that we get from the first loop
        for (let j = 0; j < outfitElements.length; j++) {
          let img = document.createElement("img");
          img.src = outfitElements[j]["img_url"];
          img.className = "col";
          subDiv.appendChild(img);
        }

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete!";
        deleteButton.className = "col btn btn-purple text-gw px-5"; // OI
        deleteButton.addEventListener("click", () => {
          fetch(`${hostURL}outfits/${outfitId}`, {
            method: "DELETE"
          }).then(() => {
            holder.parentElement.removeChild(holder);
          });
        });

        if (json["outfits"][i]["items"].length == 0)
          fetch(hostURL + `outfits/${outfitId}`, {
            method: "DELETE"
          }).then(() => {
            mainPageContent.removeChild(holder);
          });

        let titleDiv = document.createElement("div");
        titleDiv.className = "row mb-3 mt-1 mx-5";
        titleDiv.appendChild(deleteButton);

        holder.appendChild(titleDiv);
      }
    });
}

// Create Clothing-Viewer Page
function createClothesViewer() {
  mainPageContent.appendChild(newClothingDiv);
  hideElement(newClothingDiv, false);
  makeToggler();

  fetch(`${hostURL}users/${userId}`)
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      if (json["items"].length > 0) {
        renderNewItems(json.items.reverse());
        itemCounter.innerHTML = json["items"].length;
      }
    });
}

function makeToggler() {
  let itemToggle = document.createElement("p");
  itemToggle.innerHTML = "Add New Clothing";
  itemToggle.className = "form-toggle text-right mr-2";

  mainPageContent.appendChild(itemToggle);
  mainPageContent.appendChild(document.createElement("br"));

  function toggleForm() {
    if (formOn == false) {
      hideElement(newClothingDiv, true);
      itemToggle.after(newClothingDiv);
      itemToggle.innerHTML = "Close";
    } else {
      hideElement(newClothingDiv, false);
      itemToggle.innerHTML = "Add New Clothing";
    }

    formOn = !formOn;
  }

  itemToggle.addEventListener("click", () => {
    toggleForm();
  });

  newClothingDiv.addEventListener("submit", () => {
    formOn = true;
    toggleForm();
  });
}

// Outfit Creator Page
function createOutfitCreator() {
  let outfitDiv = document.createElement("div");
  outfitDiv.id = "outfit-div";
  outfitDiv.className = "mt-4 mb-5 ";
  mainPageContent.appendChild(outfitDiv);

  let clothingDiv = document.createElement("div");
  clothingDiv.id = "clothing-div";
  clothingDiv.className = "bg-gw p-2";
  clothingDiv.appendChild(document.createElement("hr"));
  mainPageContent.appendChild(clothingDiv);

  // one big purple line
  let myHeader = document.createElement("header");
  myHeader.className = "seperator-bar card border-0 pt-2";
  let title = document.createElement("p");
  title.innerHTML = "Your Collection";
  title.className = "text-gw text-center mb-2";
  myHeader.appendChild(title);
  // thus ends the purple line

  clothingDiv.appendChild(myHeader);

  let currentOutfit = [];

  fetch(`${hostURL}users/${userId}`)
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      if (json["items"].length > 0) {
        json.items.forEach(item => {
          let itemDiv = document.createElement("span");
          itemDiv.id = item["id"];
          itemDiv.className = "card m-2 w-25 row d-inline-flex";

          let itemNameH3 = document.createElement("h4");
          itemNameH3.innerText = item.name;
          itemNameH3.className = "text-center mt-1";

          let itemImage = document.createElement("img");
          itemImage.className = "item-avatar text-center col mb-2 mt-2";
          itemImage.src = item.img_url;

          let myBtn = document.createElement("button");
          myBtn.innerHTML = "Add To Outfit";
          myBtn.className = "btn btn-purple text-gw";

          itemDiv.append(itemNameH3, itemImage, myBtn);
          clothingDiv.append(itemDiv);

          myBtn.addEventListener("click", () => {
            if (itemDiv.parentNode.id == outfitDiv.id) {
              clothingDiv.prepend(itemDiv);
              myBtn.innerHTML = "Add To Outfit";
              for (let i = 0; i < currentOutfit.length; i++) {
                if (item == currentOutfit[i]) {
                  currentOutfit = currentOutfit.splice(i, 1);
                }
              }
            } else if (outfitDiv.childNodes.length < 7) {
              myBtn.innerHTML = "Remove";
              outfitDiv.append(itemDiv);
              currentOutfit.push(item);
            }
          });
        });

        let saveButton = document.createElement("button");
        saveButton.className = "btn btn-purple b-block text-gw";
        saveButton.innerHTML = "Save";
        outfitDiv.appendChild(saveButton);
        outfitDiv.appendChild(document.createElement("br"));
        saveButton.addEventListener("click", () => {
          fetch(hostURL + "outfits", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              user_id: userId,
              items: currentOutfit
            })
          })
            .then(resp => {
              return resp.json();
            })
            .catch(err => {
              console.log(err);
            });
        });
      } else {
        outfitP = document.createElement("p");
        outfitP.innerHTML = "No Clothing in Wardrobe";
        outfitP.className = "mt-5 mb-3";

        clothingP = document.createElement("p");
        clothingP.innerHTML = "Add Clothing to your Wardrobe to make an Outfit";
        clothingP.className = "mt-3 mb-3";

        outfitDiv.appendChild(outfitP);
        clothingDiv.appendChild(clothingP);
      }

      clothingDiv.appendChild(document.createElement("hr"));
    })
    .catch(err => {
      console.log(err);
    });
}
