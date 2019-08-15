const experience_list = [
  {
    title: "Linux command Shell",
    company: "IIT Kharagpur",
    type: "Academic Project",
    start_year: "2018",
    start_month: "Jan",
    end_year: "2018",
    end_month: "Apr",
    description: [],

    keywords: ["C++"],
    important_points: ["Developed a linux command shell"]
  }
];

function getExperiences() {
  experience_list.map((exp, key) => {
    exp["key"] = key;
    return exp;
  });

  return experience_list;
}

module.exports = {
  experiences: getExperiences()
};
