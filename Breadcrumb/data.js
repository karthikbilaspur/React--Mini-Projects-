
const data = [
    {
      id: "1",
      question: "What are breadcrumbs?",
      answer:
        "Breadcrumbs form a design pattern that satisfies the users' needs by representing each visited level in the site hierarchy with a link, allowing users to jump to a particular page of contents or options instantly.",
    },
    {
      id: "2",
      question: "What are they used for?",
      answer:
        "Breadcrumbs typically appear horizontally across the top of a Web page, often below title bars or headers. They provide links back to each previous page the user navigated through to get to the current page or—in hierarchical site structures—the parent pages of the current one..",
    },
    {
      id: "3",
      question: "Breadcrumbs as creast of bread",
      answer:
        "The left breadcrumbs all over the table. Heat the oil in a heavy-bottomed pan over a medium heat.",
    }
  ];
  
  const breadcrumbs = document.querySelector(".breadcrumb");
  
  function createBreadcrumbsData() {
    breadcrumbs.innerHTML = data
      .map(
        (dataItem) => `
      <div class="breadcrumbs_item">
      <div class="breadcrumbs_menu">
      <h3>${dataItem.question}</h3>
      <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div class="breadcrumbs_content">
      <p>${dataItem.answer}</p>
      </div>
      </div>
      `
      )
      .join(" ");
  }
  
  create();
  
  const getBreadcrumbsTitles = document.querySelectorAll(".breadcrumb_title");
  
  console.log("====================================");
  console.log(getBreadcrumbsTitles);
  console.log("====================================");
  
  getBreadcrumbsTitles.forEach((currentItem) => {
    currentItem.addEventListener("click", (event) => {
      if (currentItem.classList.contains("active")) {
        currentItem.classList.remove("active");
      } else {
        let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
  
        getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
          currentActiveItem.classList.remove("active");
        });
  
        currentItem.classList.add("active");
      }
    });
  });
