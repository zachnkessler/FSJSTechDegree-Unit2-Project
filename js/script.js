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
   // loops through the data list and creates a list item for each student
   for (let i = 0; i < list.length; i++) {
      // performs this loop as long as i is between 0 and 8, ensuring there are 9 students per page
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
         // inserts each student list item into the page
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
   // loops through the number of pages and creates a button for each page
   for (let i = 1; i <= numOfPages; i++) {
      let button = 
      `<li>
         <button type="button">${[i]}</button>
      </li>`;
      linkList.insertAdjacentHTML("beforeend", button);
      // signals the current page to the user
      const firstButton = document.querySelector("button");
      firstButton.className = "active";
   }
   // shows new page of students upon button click
   linkList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
         const activeButton = document.querySelector(".active");
         activeButton.className = "";
         const inactiveButton = e.target;
         inactiveButton.className = "active";
         showPage(data, e.target.textContent);
      }
   });
}

// Call functions
showPage(data, 1);
addPagination(data);