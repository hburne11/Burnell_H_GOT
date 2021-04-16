(() => {
  console.log('fired');

  // variables at the top
  const sigils = document.querySelector('#navList'),
        banner = document.querySelector('#houseImages'),
        lightBox = document.querySelector(".lightbox"),
        houseName = document.querySelector('h1'),
        houseDescription = document.querySelector('.house-info');

  // adding house info using arrays -> this is what you would do for FIP as well
  const houseInfo = [
    ['Stark', `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`], // houseInfo[0][0] -> gets the first index of the subarray (the house name)

    ['Baratheon', `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.

House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`], // houseInfo[1][1] -> gets the second index of the subarray (the house description)

    ['Lannister', `this is the house's description`],
    ['Tully', `this is the house's description`],
    ['Greyjoy', `this is the house's description`],
    ['Arryn', `this is the house's description`]
  ];

  function animateBanner(event) {


    if (event.target.className.includes('sigilContainer')) {
      let multiplier = event.target.dataset.offset,
        offset = 600;
      // 0, 600, 1200, 1800
      banner.style.right = `${multiplier * offset}px`;

      //debugger;


    }
  }

  function popLightBox(event) {

    if (event.target.className.includes('sigilContainer')) {
      lightBox.classList.add('show-lightbox');
      lightBox.querySelector('video').play();

    }

      })
    }
  }

  // sigils.addEventListener('click', animateBanner);
  sigils.addEventListener('click', popLightBox);
  sigils.addEventListener('click', animateBanner);

})();
