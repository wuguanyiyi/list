export const product = [
  {
    "ProductNumber": "P001",
    "ProductName": "iPhone 14",
    "Amount": 0,
    "Price": 45000,
    "ProductType": "3C"
  },
  {
    "ProductNumber": "P002",
    "ProductName": "SamSung A52",
    "Amount": 10,
    "Price": 23000,
    "ProductType": "3C"
  },
  {
    "ProductNumber": "P003",
    "ProductName": "SamSung S20",
    "Amount": 15,
    "Price": 35200,
    "ProductType": "3C"
  },
  {
    "ProductNumber": "P004",
    "ProductName": "青森頻果原汁",
    "Amount": 100,
    "Price": 370,
    "ProductType": "飲料"
  },
  {
    "ProductNumber": "P005",
    "ProductName": "綠茶(瓶裝)",
    "Amount": 1000,
    "Price": 25,
    "ProductType": "飲料"
  },
  {
    "ProductNumber": "P006",
    "ProductName": "辛拉麵(袋裝)",
    "Amount": 1000,
    "Price": 50,
    "ProductType": "食品"
  },
  {
    "ProductNumber": "P007",
    "ProductName": "台酒麻油雞泡麵(碗裝)",
    "Amount": 5000,
    "Price": 53,
    "ProductType": "食品"
  },
  {
    "ProductNumber": "P008",
    "ProductName": "台酒花雕雞泡麵(碗裝)",
    "Amount": 10000,
    "Price": 53,
    "ProductType": "食品"
  },
  {
    "ProductNumber": "P009",
    "ProductName": "台酒酸菜牛肉泡麵(碗裝)",
    "Amount": 12000,
    "Price": 53,
    "ProductType": "食品"
  },
  {
    "ProductNumber": "P010",
    "ProductName": "滿漢大餐珍味牛肉麵(碗裝)",
    "Amount": 25080,
    "Price": 53,
    "ProductType": "食品"
  },
  {
    "ProductNumber": "P011",
    "ProductName": "烏龍茶(瓶裝)",
    "Amount": 10000,
    "Price": 35,
    "ProductType": "飲料"
  },
  {
    "ProductNumber": "P012",
    "ProductName": "錫蘭奶茶(瓶裝)",
    "Amount": 0,
    "Price": 20,
    "ProductType": "飲料"
  },
  {
    "ProductNumber": "P013",
    "ProductName": "紅茶(瓶裝)",
    "Amount": 1230,
    "Price": 25,
    "ProductType": "飲料"
  },
  {
    "ProductNumber": "P014",
    "ProductName": "台酒花雕雞泡麵(碗裝)",
    "Amount": 10000,
    "Price": 53,
    "ProductType": "食品"
  },
  {
    "ProductNumber": "P015",
    "ProductName": "台酒花雕雞泡麵(袋裝)",
    "Amount": 250000,
    "Price": 45,
    "ProductType": "食品"
  },
  {
    "ProductNumber": "P016",
    "ProductName": "iPad Pro",
    "Amount": 1000,
    "Price": 53420,
    "ProductType": "3C"
  },
  {
    "ProductNumber": "P017",
    "ProductName": "筆記型電腦",
    "Amount": 1235,
    "Price": 33023,
    "ProductType": "3C"
  }
];





/**/
// // 透過檢查 HTML template 元素屬性的存在與否，以測試瀏覽器是否支援它
// if ('content' in document.createElement('template')) {

//   // 使用現有 HTML tbody、行以及模板，來實例化表格
//   var t = document.querySelector('#productrow'),
//   td = t.content.querySelectorAll("td");
//   td[0].textContent = "1235646565";
//   td[1].textContent = "Stuff";

//   // 複製新的行並將其插至表格
//   var tb = document.querySelector("tbody");
//   var clone = document.importNode(t.content, true);
//   tb.appendChild(clone);

//   // 複製新的行
//   td[0].textContent = "0384928528";
//   td[1].textContent = "Acme Kidney Beans";

//   // 複製新的行並將其插至表格
//   var clone2 = document.importNode(t.content, true);
//   tb.appendChild(clone2);

// } else {
//   // 因為 HTML template 不被支援，所以要用其他方法在表格增加新行
// }
