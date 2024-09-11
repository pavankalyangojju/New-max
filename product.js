//  HEADER  SECTION
document.querySelector("#button").addEventListener("click", go);
function go() {
  window.location.href = "product.html";
}
function togglepop() {
  document.querySelector("#popup-1").classList.toggle("yes");
}
document.querySelector("#popcontinue").addEventListener("click", popcont);

function popcont() {
  // window.location.href="signin.html"
}

function popfunct() {
  document.getElementById("twopop").classList.toggle("value");
  alert(
    " USe code for 03351 for verifying your mobile number with Maxfashion.com. OTP is valid for 5 minutes(s) "
  );
}

document.querySelector("#inputform").addEventListener("click", inputfunction);
var box5 = document.querySelector("#inputnumber5").value;
box5 = 3;
function inputfunction(event) {
  event.preventDefault();
  var box1 = document.querySelector("#inputnumber1").value;
  var box2 = document.querySelector("#inputnumber2").value;
  var box3 = document.querySelector("#inputnumber3").value;
  var box4 = document.querySelector("#inputnumber4").value;
  var box5 = document.querySelector("#inputnumber5").value;

  if (box1 == 0 && box2 == 3 && box3 == 3 && box4 == 5 && box5 == 1) {
    window.location.href = "product.html";
  }
}

var addevent = document.getElementById("prodPageAE");
addevent.addEventListener("click", function () {
  window.location.href = "index.html";
});

//  SORTING SECTION

//  PRODUCT DISPLAY SECTION

var dataOfProduct = [
  {
    proudimg:
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014008002-OffWhite-WHITE-1000014008002_01-2100.jpg",
    produPrice: "599",
    prodDesc: "MAX Textured Round Neck Sweatshirt",
    productcolor: "pink",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "Max300",
    productDiscount: "40",

    productsize: "M",
  },
  {
    proudimg:
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013971395-Brown-BROWN-1000013971395_01-2100.jpg",
    produPrice: "999",
    prodDesc: "MAX Solid Hooded Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "Max300",
    productDiscount: "10",
    productsize: "S",
  },
  {
    proudimg:
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014219430-Green-LIGHTGREEN-1000014219430_01-2100.jpg",
    produPrice: "1999",
    prodDesc: "MAX Solid Full Sleeves Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "sale",
    productDiscount: "40",
    productsize: "L",
  },
  {
    proudimg:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfFeQKL8WCkHEhjhx8amQ_wqxb16jY77PS3b1yI3sgsqQNL53E7EP4VqHEJnIdcufWlVDx3PiF_EMfz-zkYAIhqE6Ue9x8ckUeACmnUxc&usqp=CAE",
    produPrice: "799",
    prodDesc: "MAX Textured Ribbed Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "color blocked",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "sale",
    productDiscount: "40",
    productsize: "XL",
  },
  {
    proudimg:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIAzpVZLxKTeFxhbwf6WEAB2ufdQ6hQKe5X2xyY8bDrH2pxhpO6g6XH6lKzwtnNGLXt--kSWDYHlxjY0Jk9ykwYOdc-dCV&usqp=CAE",
    produPrice: "999",
    prodDesc: "MAX Textured Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "M",
  },
  {
    proudimg:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRh5B79N3HrUd74gSVUkiDqzomxOhU2A2BBiKMoiAIubjSFowxdBV8U7kELfdjHaG1iRPdW3qGCYW5VZyoSdHPhIVJF2tDPe3D_mMIOXj4PFzj0UFxuD0xM&usqp=CAE",
    produPrice: "699",
    prodDesc: "MAX Textured Mock Collar Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "textured",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "S",
  },
  {
    proudimg:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSA52lUMZnAYQdGLNDbTRQn2xoHDyKQGe0K4jpz-1X2sVdIgRwK9nJsw8fQ1s6M5qmGW9iKnFxpM5XVLjc6ei5yq2EaDP47iQ0EHXg4vKtS&usqp=CAE",
    produPrice: "599",
    prodDesc: "MAX Printed Round Neck Fit Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "60",
    productsize: "L",
  },
  {
    proudimg:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRotg2YeM7pabBrweI9Y53dzk9E6VJxuDgm2IXsWi2S1c2sOEKiyhIbY65UR8LIJM7xupps2JNqSR8xlIrc9rTTvbnr9YoEHm7DQeQ412AM&usqp=CAE",
    produPrice: "599",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "Hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "20",
    productsize: "XL",
  },

  {
    proudimg:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1_PKPPyYtA-chp3RCJtuflD5vv-Rp0_COCjMF1Di309WyzWQ4Uy3NYOUbFvxj7fF2gnVAdFXj65JzGFlGIl51aZ0BO74pjsERHYwYjJ17&usqp=CAE",
    produPrice: "999",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "jacquard",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "70",
    productsize: "M",
  },

  {
    proudimg:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcuaXscsNAfOqvhn_98iE8o1WSmQKGE1SEzCuLDng1UxY702Q9J5ROzMd8muHHUj973jXt-0d4ireTDuOTQpy3uzGj9ffXr6Q0a9Mi_xjHjY2wWKLplhPaGQ&usqp=CAE",
    produPrice: "449",
    prodDesc: "MAX Printed Round Sweatshirt",
    productcolor: "green",
    producttype: "hoddie",
    productdesgine: "jacquard",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "80",
    productsize: "S",
  },
  {
    proudimg:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSX7KsFQzAt3xCLtvkeJ6MhCWGimgXdgko9RipLaXw-0s4GR_niVI-R2DmkUu9_-Ad8PHV0glPo-SVic64fmagoDw3gxx83K9QaBEwlle-8&usqp=CAE",
    produPrice: "450",
    prodDesc: "MAX Printed Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "Max300",
    productDiscount: "50",
    productsize: "L",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010605412-Purple-Purple-1000010605412-9222021_01-2100.jpg",
    produPrice: "999",
    prodDesc: "MAX Textured Hooded Zip Sweatshirt",
    productcolor: "purple",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "Max300",
    productDiscount: "60",
    productsize: "XL",
  },
  {
    proudimg:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkZth43zELXcJjPrEQQtMrtgW9PMX9qFJaCzesJeFjWnVJ4Lu6ZWd5UkzSqWa8yyS3jmZWpYeQBZk4FZaWRwShWnjw17a_0dtHrDjNSs7J&usqp=CAE",
    produPrice: "999",
    prodDesc: "MAX Embellished Round Neck Sweatshirt",
    productcolor: "pink",
    producttype: "hoodie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "M",
  },
  {
    proudimg:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwx45VfabrXhB3T6cq05LgyVdyByL6VdNzinPZavmdWiwkRMk-7QVtax0CyCNITeu33IyRmHh0nlyNgHpIYZ7LLRs1sJdoUDkzAYQKa5pMDQAgCPDZ5oDJfg&usqp=CAE",
    produPrice: "1000",
    prodDesc: "MAX Printed Full Sleeves Sweatshirt",
    productcolor: "white",
    producttype: "hoodie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "S",
  },
  {
    proudimg:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROncqwpOXrf6bXMOcTVNZP1pk3b336mAhwS3kIsrqsib8naWfdriVdWOyvV8sZNQz_V7Pi7SeG-X00Ig6YOp-yCnj3nr_gfzC244hxxig0gvcbFuZhwwZm&usqp=CAE",
    produPrice: "350",
    prodDesc: "MAX Typgraphic Full Sleeves Sweatshirt",
    productcolor: "pink",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "L",
  },
  {
    proudimg:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvq20WQHCJPG-lZ7XbQ8njsr8a4QyJaop2lKYb7k3-2_YGep0hasgWz1B11E_DPF1A6ODxYgg2nVidCvrRA11fbwTqZWeR4R8EyaO2P64&usqp=CAE",
    produPrice: "475",
    prodDesc: "MAX Solid Full Sleeves Sweatshirt",
    productcolor: "yellow",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "XXL",
  },
  {
    proudimg:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgasBASqKw8_xpkswQo8Kge2OQcH1XqNRZgd3GESd4RChiCFe8Aie6XiE9iSv_KmRLivs-PdbpVPJycvWim0G4347uoeidsZ1NHSNZZxq8&usqp=CAE",
    produPrice: "599",
    prodDesc: "MAX Printed regular fit Sweatshirt",
    productcolor: "White",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "M",
  },
  {
    proudimg:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiv8MneYNlXNbfH35Ahz6sXM-Dm9NGe64HL40qEtKDbRFWMIZoRK6-LQhVHCG1IUXixtXPfXbFqtun0uZgimSZZtSj4WcQu9wxLl0YZXiP&usqp=CAE",
    produPrice: "449",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "white",
    producttype: "front open",
    productdesgine: "printed",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "S",
  },
  {
    proudimg:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFiufdRMlOLOhzw1l5KG_daznqGzgx-c6VwpQtLfprhVx8fbvwCeG10vJWHIaPgVmYxQjMo4ljysZmClV2INRy6uvRS4IxcoWR0aapypE&usqp=CAE",
    produPrice: "699",
    prodDesc: "MAX Colorblocked High-Neck Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "L",
  },
  {
    proudimg:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTARECwjDA8N0RJsk4RPV2kqB7ggc3oyH7_qJDBaspckX6MgtfnSvtwDcoA1J6lxPLLNOi5N0urstzRjdpRtVTfVUJ-l4rYzTBd_DFT45NW&usqp=CAE",
    produPrice: "899",
    prodDesc: "MAX Solid Hooded Sweatshirt",
    productcolor: "white",
    producttype: "front open",
    productdesgine: "texture",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "XXL",
  },

  //  FOOTER SECTION
];
displayItems(dataOfProduct);
var mybasketarray = JSON.parse(localStorage.getItem("storecarts")) || [];
console.log(mybasketarray);

function displayItems(product) {
  document.querySelector("#allProduct").textContent = "";

  var count = document.querySelector("#countProduct");
  var ProductTotal = product.length;
  count.textContent = ProductTotal + " " + "Products";

  product.map(function (ele) {
    var appenddiv = document.querySelector("#allProduct");
    var productDiv = document.createElement("div");
    productDiv.setAttribute("id", "productDivSpecific");

    var productImg = document.createElement("img");
    productImg.setAttribute("id", "hovering");
    productImg.setAttribute("src", ele.proudimg);

    var proudprice = document.createElement("h2");
    proudprice.textContent = ele.produPrice;

    var prouddescription = document.createElement("p");
    prouddescription.setAttribute("id", "proddesc");
    prouddescription.textContent = ele.prodDesc;

    //   var bottomdiv = document.createElement("div");
    //   productDiv.setAttribute("id", "bottondiv");

    var productbutton = document.createElement("button");
    productbutton.setAttribute("id", "buttonproduct");
    productbutton.textContent = "ADD TO BASKET";

    productbutton.addEventListener("click", gotocarts);

    function gotocarts() {
      console.log("here");
      mybasketarray.push(ele);
      localStorage.setItem("storecarts", JSON.stringify(mybasketarray));
      document.querySelector(".basketvalue").textContent = mybasketarray.length;
    }

    productDiv.append(productImg, proudprice, prouddescription, productbutton);
    appenddiv.append(productDiv);
  });
}
console.log(mybasketarray);

//  FOOTER SECTION
//  FOOTER SECTION

//  FOOTER SECTION

// Vineeth part
function typesort() {
  var sortedarr = [];
  var type = document.querySelector("#type").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (type == dataOfProduct[i].producttype) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function designarr() {
  var sortedarr = [];
  var type = document.querySelector("#design").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (type == dataOfProduct[i].productdesgine) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  console.log("here");
  displayItems(sortedarr);
}

function colorarr() {
  var sortedarr = [];
  var color = document.querySelector("#color").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (color == dataOfProduct[i].productcolor) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function sleevearr() {
  var sortedarr = [];
  var sleeve = document.querySelector("#sleeve").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (sleeve == dataOfProduct[i].productSleveLength) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function browsearr() {
  var sortedarr = [];
  var browse = document.querySelector("#browse").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].Browse) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function promotionsarr() {
  var sortedarr = [];
  var browse = document.querySelector("#promotions").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].productpromotions) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}
function discountarr() {
  var sortedarr = [];
  var browse = document.querySelector("#discount").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].productDiscount) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function pricesortchange() {
  var priceaftersortedarray = [];
  var browse = document.querySelector("#pricepurpose").value;

  if (browse == "high") {
    dataOfProduct.sort((a, b) => b.produPrice - a.produPrice);
    displayItems(dataOfProduct);
  }
  if (browse == "low") {
    dataOfProduct.sort((a, b) => a.produPrice - b.produPrice);
    displayItems(dataOfProduct);
  }
  console.log(dataOfProduct);
}

document.querySelector(".b").addEventListener("click", basketgo);

function basketgo() {
  window.location.href = "cart.html";
}

// hovering by srinidhi

//TOPS..............................
function functionTodisplay() {
  document.querySelector(".mainDivgrid").style.display = "block";
  document.querySelector(".mainDivgrid").style.display = "flex";
}

function functionNotdisplay() {
  document.querySelector(".mainDivgrid").style.display = "none";
}

//BOTTOMS.............................
function functionTodisplay1() {
  document.querySelector(".mainDivgridT").style.display = "block";
  document.querySelector(".mainDivgridT").style.display = "flex";
}

function functionNotdisplay1() {
  document.querySelector(".mainDivgridT").style.display = "none";
}

//JUMPSUITS.................................

function functionTodisplay2() {
  document.querySelector(".mainDivgridTh").style.display = "block";
  document.querySelector(".mainDivgridTh").style.display = "flex";
}

function functionNotdisplay2() {
  document.querySelector(".mainDivgridTh").style.display = "none";
}

// SLEEPWEAR..............................

function functionTodisplay3() {
  document.querySelector(".mainDivgridf").style.display = "block";
  document.querySelector(".mainDivgridf").style.display = "flex";
}

function functionNotdisplay3() {
  document.querySelector(".mainDivgridf").style.display = "none";
}

//INDIAN WEAR..................
function functionTodisplay4() {
  document.querySelector(".mainDivgridfi").style.display = "block";
  document.querySelector(".mainDivgridfi").style.display = "flex";
}

function functionNotdisplay4() {
  document.querySelector(".mainDivgridfi").style.display = "none";
}

//sports wear

function functionTodisplay5() {
  document.querySelector(".mainDivgrids").style.display = "block";
  document.querySelector(".mainDivgrids").style.display = "flex";
}

function functionNotdisplay5() {
  document.querySelector(".mainDivgrids").style.display = "none";
}

//Lingeri

function functionTodisplay6() {
  document.querySelector(".mainDivgridse").style.display = "block";
  document.querySelector(".mainDivgridse").style.display = "flex";
}

function functionNotdisplay6() {
  document.querySelector(".mainDivgridse").style.display = "none";
}
//accessoreis

function functionTodisplay7() {
  document.querySelector(".mainDivgrid1").style.display = "block";
  document.querySelector(".mainDivgrid1").style.display = "flex";
}

function functionNotdisplay7() {
  document.querySelector(".mainDivgrid1").style.display = "none";
}

// footwear
function functionTodisplay8() {
  document.querySelector(".mainDivgrid2").style.display = "block";
  document.querySelector(".mainDivgrid2").style.display = "flex";
}

function functionNotdisplay8() {
  document.querySelector(".mainDivgrid2").style.display = "none";
}

// winter

function functionTodisplay9() {
  document.querySelector(".mainDivgrid3").style.display = "block";
  document.querySelector(".mainDivgrid3").style.display = "flex";
}

function functionNotdisplay9() {
  document.querySelector(".mainDivgrid3").style.display = "none";
}
// more
function functionTodisplay0() {
  document.querySelector(".mainDivgrid4").style.display = "block";
  document.querySelector(".mainDivgrid4").style.display = "flex";
}

function functionNotdisplay0() {
  document.querySelector(".mainDivgrid4").style.display = "none";
}
// NEW THINGS

document.querySelector(".basketvalue").textContent = mybasketarray.length;
document.querySelector(".b").style.cursor = "pointer";

// hovering end by srinidhi
