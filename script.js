// const imgWrappers = document.querySelectorAll(".img--group div");
// const hero = document.querySelector(".hero-section");
// const heroWidth = hero.offsetWidth;
// const maxSpread = heroWidth / 2 - 400 / 2;

// window.addEventListener("scroll", () => {
//     //   const maxOffset = 300;
//     //   const scrollSpeed = 0.5;
//   const scrollY = window.scrollY;
//   const spreadUnit = 0.25;

//   imgWrappers.forEach((div, i) => {
//     // let depth = (i % 4) + 1; // 1 to 4
//     // let direction = i < 4 ? -1 : 1;
//     // let offset = Math.min(scrollY * scrollSpeed, maxOffset);

//     // Clamp to maxSpread * depth
//     // offset = Math.min(offset, maxOffset * depth);

//     // if (i < 4) {
//     //   div.style.transform = `translateX(-${offset}px)`;
//     // } else {
//     //   div.style.transform = `translateX(${offset}px)`;
//     // }

//     // div.style.transform = `translateX(${direction * offset}px)`;
//     const isLeftGroup = i < 4;
//     const positionIndex = isLeftGroup ? 3 - i : i - 4; // 0 to 3
//     const direction = isLeftGroup ? -1 : 1;

//     let tx = scrollY * spreadUnit * (positionIndex + 1);

//     tx = Math.min(tx, maxSpread - positionIndex * 30);

//     div.style.transform = `matrix(1, 0, 0, 1, ${direction * tx}, 0)`;

//   });
// });

const imgWrappers = document.querySelectorAll(".img--group div");
const hero = document.querySelector(".hero-section");

const heroWidth = hero.offsetWidth;
const maxSpread = heroWidth / 2 - 100 / 2;
const spreadUnit = 0.4;

// Scroll handler 
function handleScroll() {
  const scrollY = window.scrollY;

  const outermostTx = scrollY * spreadUnit * 4;
  const maxTx = maxSpread;

  const clampedTx = Math.min(outermostTx, maxTx);

  imgWrappers.forEach((div, i) => {
    const isLeftGroup = i < 5;
    const positionIndex = isLeftGroup ? 3 - i : i - 5;
    const direction = isLeftGroup ? -1 : 1;

    let tx = clampedTx * ((positionIndex + 1) / 5);
    tx = Math.min(tx, maxSpread - positionIndex * 20);

    div.style.transform = `matrix(1, 0, 0, 1, ${direction * tx}, 0)`;
  });
}

// Observe the hero section
const observer = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
      //   observer.unobserve(entry.target);
    }
  },
  {
    rootMargin: '-100px 0px',
    threshold: 0.2,
  }
);

observer.observe(hero);
