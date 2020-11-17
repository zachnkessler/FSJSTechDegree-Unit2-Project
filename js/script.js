/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
Zachary Kessler
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   const studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
        let studentItem = 
        `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
               <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`;
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
   return studentList;
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector(".link-list");
   linkList.innerHTMl = "";
   for (let i = 1; i <= numOfPages; i++) {
      let button = 
      `<li>
         <button type="button">[i]</button>
      </li>`;
      linkList.insertAdjacentHTML("beforeend", button);
      const firstButton = document.querySelector("button");
      firstButton.className = "active";
      linkList.addEventListener("click", (e) => {
         if (e.target.tagName === "BUTTON") {
            
         }
      });
   }
}



// Call functions
showPage(data, 1);