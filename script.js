const company = {
  name: "TechNova Solutions",
  headquarters: "Tbilisi",
  departments: {
    development: {
      manager: "Nino Beridze",
      teams: [
        {
          teamName: "Frontend",
          members: [
            {
              name: "Nika",
              role: "Developer",
              salary: 2000,
              projects: ["Website Redesign", "Landing Page"],
            },
            {
              name: "Ana",
              role: "Intern",
              salary: 800,
              projects: ["Landing Page"],
            },
          ],
        },
        {
          teamName: "Backend",
          members: [
            {
              name: "Luka",
              role: "Developer",
              salary: 2200,
              projects: ["API System", "Database Migration"],
            },
            {
              name: "Mariam",
              role: "Lead Developer",
              salary: 3000,
              projects: ["API System"],
            },
          ],
        },
      ],
    },
    marketing: {
      manager: "Giorgi Mchedlidze",
      teams: [
        {
          teamName: "Digital Marketing",
          members: [
            {
              name: "Dato",
              role: "SEO Specialist",
              salary: 1500,
              projects: ["Google Ads", "SEO Audit"],
            },
            {
              name: "Salome",
              role: "Content Creator",
              salary: 1300,
              projects: ["Blog Posts", "Email Campaign"],
            },
          ],
        },
      ],
    },
  },
};

// company name uppercase
console.log(company.name.toUpperCase());

// headquarters lowercase
console.log(company.headquarters.toLowerCase());

// loop through departments (for...in)
for (const depKey in company.departments) {
  const dep = company.departments[depKey];

  console.log(depKey.toUpperCase());
  console.log(dep.manager);

  //  loop through teams (for)
  for (let a = 0; a < dep.teams.length; a++) {
    const team = dep.teams[a];
    console.log(team.teamName.toUpperCase());

    // loop through members
    for (let b = 0; b < team.members.length; b++) {
      const member = team.members[b];

      console.log(member.name.toUpperCase());
      console.log(member.role.toLowerCase());

      const salaryStatus = member.salary >= 2000 ? "High Salary" : "Low Salary";
      console.log(salaryStatus);

      // loop through projects
      for (let c = 0; c < member.projects.length; c++) {
        console.log(member.projects[c]);
      }
    }
  }
}
