// function fetchData() {
//     return new Promise((resolve, reject) => {

//         const success = false;
//         if(success) {
//             resolve("성공");
//         } else {
//             reject("실패");
//         }
//     })
// }

//     fetchData()
//         .then((response) => {
//             console.log(response);
// })
//         .catch((error) => {
//             console.log(error);
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response1 => response1.json())
//   .then(json => console.log(json))
//   .then(() => fetch('https://jsonplaceholder.typicode.com/todos/2'))
//   .then(response2 => response2.json())
//   .then(json => console.log(json))
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("작업 끝!")
//   })

async function makeRequest() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log('jsonResponse1', jsonResponse1);

        const response2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const jsonResponse2 = await response2.json();
        console.log('jsonResponse2', jsonResponse2);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("작업 끝!")

    }
}

makeRequest();
