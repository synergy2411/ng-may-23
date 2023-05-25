const demoPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes");
      //   reject(new Error("Somethign went wrong!"));
    }, 2000);
  });
};

const consumePRomise = async () => {
  let result = await demoPromise();
  console.log("RESULT : ", result);
};

//   const consumePRomise = () => {
//     demoPromise()
//       .then((response) => console.log("REPSONSE : ", response))
//       .catch((err) => console.error(err));
//   };

consumePRomise();
