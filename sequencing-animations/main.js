const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");
const alice4 = document.querySelector("#alice4");
const alice5 = document.querySelector("#alice5");
const alice6 = document.querySelector("#alice6");

// callback hell
// const first = alice1.animate(aliceTumbling, aliceTiming);
// first.onfinish = () => {
//   const second = alice2.animate(aliceTumbling, aliceTiming);
//   second.onfinish = () => {
//     const third = alice3.animate(aliceTumbling, aliceTiming);
//     third.onfinish = () => alice4.animate(aliceTumbling, aliceTiming);
//   };
// };

// promise chain
// alice1.animate(aliceTumbling, aliceTiming).onfinish = () =>
//   (alice2.animate(aliceTumbling, aliceTiming).onfinish = () =>
//     (alice3.animate(aliceTumbling, aliceTiming).onfinish = () =>
//       alice4.animate(aliceTumbling, aliceTiming)));

// async and await
(async () => {
  let first = await alice1.animate(aliceTumbling, aliceTiming);
  first.onfinish = async () => {
    let second = await alice2.animate(aliceTumbling, aliceTiming);
    second.onfinish = async () => {
      let third = await alice3.animate(aliceTumbling, aliceTiming);
      third.onfinish = async () => {
        let forth = await alice4.animate(aliceTumbling, aliceTiming);
        forth.onfinish = async () => {
          let fifth = await alice5.animate(aliceTumbling, aliceTiming);
          fifth.onfinish = async () => {
            await alice6.animate(aliceTumbling, aliceTiming);
          };
        };
      };
    };
  };
})();
