// Question 1
export {};
// function fetchGreeting() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello, world!");
//     }, 3000);
//   });
// }
// fetchGreeting().then((greeting) => console.log(greeting));
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Question 2
// function simulateTask(): void {
//   console.log("Task started");
//   setTimeout(() => {
//     console.log("Task completed");
//   }, 1000);
// }
// simulateTask();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Question 3
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 1000);
//   });
// }
// fetchData().then((message) => console.log(message));
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Question 4
// function fetchWithError(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Data fetch failed!");
//       }
//     }, 1000);
//   });
// }
// fetchWithError()
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error));
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Question 5
// function fetchData(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 1000);
//   });
// }
// function processData(data: string): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Processing complete: ${data}`);
//     }, 1000);
//   });
// }
// function executeSequentially(): void {
//   fetchData()
//     .then((data) => {
//       console.log(data);
//       return processData(data);
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
// executeSequentially();
