import fs from "fs";

// Specify the path to your questions.json file
const filePath = "path/to/your/submissions.json";

// Read and parse the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    const submissions = JSON.parse(data);
    console.log("Parsed JSON data:", submissions);

    // Now you can work with the 'submissions' JavaScript object
    // For example, you can access specific submissions like: submissions[0], submissions[1], etc.
  } catch (parseError) {
    console.error("Error parsing JSON data:", parseError);
  }
});

export default submissions;
