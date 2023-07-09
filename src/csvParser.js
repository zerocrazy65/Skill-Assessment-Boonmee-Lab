// import Papa from "papaparse";

// export async function loadCSVData() {
//    const csvFilePath = "./assets/bkk_population_growth.csv";

//    const response = await fetch(csvFilePath, { dataType: "text" });
//    const csvData = await response.text();

//    return new Promise((resolve, reject) => {
//       Papa.parse(csvData, {
//          complete: (result) => {
//             resolve(result.data);
//          },
//          error: (error) => {
//             reject(error);
//          },
//       });
//    });
// }

// const fetchFile = async () => {
//    const response = await fetch("./assets/bkk_population_growth.csv");
//    console.log(response.json());
// };
// fetchFile();

// const file = "./assets/bkk_population_growth.csv";

// fetch(file)
//    .then((response) => response.text())
//    .then((csvData) => {
//       Papa.parse(csvData, {
//          complete: function (results) {
//             console.log("Finished:", results.data);
//          },
//       });
//    })
//    .catch((error) => {
//       console.error("Error loading CSV file:", error);
//    });

//! papaparse
// import Papa from "papaparse";

// Papa.parse(file, {
//    complete: function (results) {
//       console.log("Finished:", results.data);
//    },
// });

// ! csvtojson
// import csvFilePath from "./assets/bkk_population_growth.csv";
// import { csv } from "csvtojson";

// csv()
//    .fromFile(csvFilePath)
//    .then((jsonObj) => {
//       console.log(jsonObj);
//    })
//    .catch((err) => {
//       console.error(err);
//    });
