import fs from "fs";

// Specify the path to your questions.json file
const filePath = "path/to/your/questions.json";

// Read and parse the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    const questions = JSON.parse(data);
    console.log("Parsed JSON data:", questions);

    // Now you can work with the 'questions' JavaScript object
    // For example, you can access specific questions like: questions[0], questions[1], etc.
  } catch (parseError) {
    console.error("Error parsing JSON data:", parseError);
  }
});

export default questions;
