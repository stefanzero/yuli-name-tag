"use strict";

// Airtable Data

const traineesUrl = "https://api.airtable.com/v0/appYhupTrQTaKrYSM/Trainees?view=Grid%20view";

const programLeaderURL = "https://api.airtable.com/v0/appYhupTrQTaKrYSM/Program%20leaders?view=Grid%20view";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer patcfYwoAsbXE25FJ.59ca26a3811ad1ec9cc1804153bdfd5ff54e09828a8f27a6e62d93ebb83e8f60`,
  },
};

async function getAllStudentsRecords() {
  let getResultElement = document.getElementById("js-students-name-tag");

  await fetch(
    traineesUrl,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      
      getResultElement.innerHTML = "";

      let newHTML = "";

      for (let i = 0; i < data.records.length; i++) {
        let name = data.records[i].fields["Name"]
        let info = data.records[i].fields["Description"]
        let openTo = data.records[i].fields["OpenTo"]
        let linkedln = data.records[i].fields["Linkedin"]
        let pic = data.records[i].fields["Headshots"]?.[0]?.url || "";

        newHTML += `
          <div class="student-name-tag">
            <img src="name-tag.png" class="name-tag">
            <div class="student-info">
              <img src="${pic}" class="headshot">
              <h5>${name}</h5>
              <span class="open-to-badge">Open to: ${openTo}</span>
              <p class="highlight">${info}</p>
              <a href="${linkedln}" target="_blank" class="linkedin">
                <h5>Linked</h5>
                <img src="linkedin.png" alt="LinkedIn Icon">
              </a>
            </div>
          </div>
        `;

      }
      getResultElement.innerHTML = newHTML;
  });
}
getAllStudentsRecords();


// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("js-teachers-name-tag");

  await fetch(
    programLeaderURL,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      
      getResultElement.innerHTML = "";

      let newHTML = "";

      for (let i = 0; i < data.records.length; i++) {
        let name = data.records[i].fields["Name"]
        let occupation = data.records[i].fields["Occupation"]
        let info = data.records[i].fields["SmallDescription"]
        let pic = data.records[i].fields["Headshots"]?.[0]?.url || "";

        newHTML += `
          <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div class="teacher-name-tag card p-3 text-center">
              <img src="${pic}" class="teacher-headshot card-img-top mx-auto">
              <div class="card-body teacher-card-body">
                <h5 class="teacher-name card-title">${name}</h5>
                <p class="teacher-title text-muted">${occupation}</p>
                <p class="teacher-info card-text">${info}</p>
              </div>
            </div>
          </div>
        `;

      }
      getResultElement.innerHTML = newHTML;
  });
}
getAllRecords();
