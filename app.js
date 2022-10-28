// deneme

const menu = [
    {
        id:1,
        title: "Menemen ",
        category: "Breakfast",
        price: 25.99,
        img:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvh_RBSUZ2QBt3tpEzMIh0m9sUIfecbNLiQ&usqp=CAU",
        desc: `Turkish egg recipe.`,
          }, 
    {
        id:2,
        title: "Poğaca",
        category: "Breakfast",
        price: 5.99,
        img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UxdRfPp7t2VXQDX1Le7SV7zsZpDwhQqxvQ&usqp=CAU",
        desc: `Turkish pastry product.`,
            }, 
    {
 id:3,
  title: " Börek",
  category: "Lunch",
  price: 10.99,
  img:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_dujpSpBUPwOTSrWLS2Gfq3RStTYDCi7Ng&usqp=CAU",
  desc: `Turkish börek.`,
    }, 
    {
  id:4,
  title: "Gözleme",
  category: "Lunch",
  price: 25.99,
  img:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJLuM-ZXcEXlhcefLEgl_mEIx0wnmQqZUPA&usqp=CAU",
  desc: `Turkish street food.`,
    }, 
    {
 id:4,
  title: "Sarma ",
  category: "Tea-time",
  price: 29.99,
  img:
     "https://img.piri.net/mnresize/840/-/resim/imagecrop/2020/12/07/03/58/resized_7bec4-77beecf1zeytinyagliyapraksarmasi.jpg",
  desc: `Turkish stuffed-grape-leave.`,
    }, 
    {
  id:5,
  title: "Baklava ",
  category: "Tea-time",
  price: 15.99,
  img:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchPU62OvIc-ZxiyxrGhXzNdLus2Len2Q3Fw&usqp=CAU",
  desc: `Turkish delicious.`,
    }, 
    {
        id:6,
        title: "Künefe ",
        category: "Tea-time",
        price: 15.99,
        img:
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGsnPtOxyV9AUVIShEu0-YsCz9WiSkfBCDw&usqp=CAU",
        desc: `Turkish cheese kunefe.`,
          }, 
    {
  id:7,
  title: "Lahmacun ",
  category: "Dinner",
  price: 10.99,
  img:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzmZrTFpQmrXd-pbOjIID6UaD1ngsNGmGaw&usqp=CAU",
  desc: `Turkish cuisine.`,
    }, 
    {
  id:8,
  title: "İskender Kebab ",
  category: "Dinner",
  price: 90.99,
  img:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRNlLFNnfc9uZoRYm22kHhs2JI9wvLnV8DA&usqp=CAU",
  desc: `Bursa iskender kebab.`,
    }, 
    {
  id:9,
  title: "Pideli Köfte ",
  category: "Dinner",
  price: 70.99,
  img:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJw8se7ZlZmNlPqEaI4spqRUOoaUEkIEg84XIx7Rvn06foKE37yA5IE0DKSY_1T6n5l4&usqp=CAU",
  desc: `Bursa meatballs with Pita.`,
    }, 
    {
  id:10,
  title: "Pide ",
  category: "Dinner",
  price: 20.99,
  img:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBekUps4_i0sOuX9RPJ5ts79ienE1zeHCXzw&usqp=CAU",
  desc: `Turkish cuisine .`,
    }, 
    {
  id: 11,
  title: "Turkish Adana kebab ",
  category: "Dinner",
  price: 100.99,
  img:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7IrJI8V46SQ7sCKjHd-PDtsciKMGtXDZug&usqp=CAU",
  desc: `Turkish cuisine adana kebab.`,
    },
    ];

    const section = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-danger btn-item text-dark" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();






