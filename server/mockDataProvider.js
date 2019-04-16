const cities = [
  { title: "London, UK", id: "london" },
  { title: "Berlin, Germany", id: "berlin" },
  { title: "St. Petersburg, Russia", id: "petersburg" }
];

const jobOpeningsByCity = {
  london: ["Lead UX Designer", "Chief Financial Officer"],
  berlin: [
    "Customer Relations Manager",
    "Robotics Technician",
    "Embedded Systems Engineer"
  ],
  petersburg: [
    "Frontend Developer",
    "Senior C++ Developer",
    "Product Design Intern"
  ]
};

module.exports = {
  getCities() {
    return cities;
  },

  getJobOpenings(city) {
    return jobOpeningsByCity[city.id] || [];
  }
};
