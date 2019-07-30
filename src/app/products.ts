const customStyle = {
  importFonts: [
    "https://fonts.googleapis.com/css?family=Coiny",
    "https://fonts.googleapis.com/css?family=Coiny|ZCOOL+QingKe+HuangYou"
  ],

  surveyAttributeBar: {
    borderRadius: "4px"
  },
  surveyAttributeBarLabel: {
    color: "black"
  },
  surveyAttributeBarItem: {
    background: "pink"
  },
  surveyAttributeBarItemLabel: {
    color: "pink"
  },
  surveyAttributeBarItemSelected: {
    background: "red !important"
  },
  buttonUpvote: {
    background: "blue"
  },
  buttonDownvote: {
    background: "black"
  },
  buttonSuccess: {
    background: "blue"
  },
  buttonHasMore: {
    background: "black",
    color: "white"
  },
  buttonHasMoreHover: {
    background: "gray"
  },
  recommendationsMainline: {
    stroke: "red"
  },
  recommendationsBaseline: {
    stroke: "white"
  },
  productRateNoteOf: {
    fontSize: "35px"
  },
  starsBackground: {
    fill: "pink"
  },
  starsForeground: {
    fill: "red"
  }
};

export const products = [
  {
    id: 1,
    title: "Produto 1",
    storeId: "619",
    productId: "857789",
    category: "Produtos"
  },
  {
    id: 2,
    title: "Produto 2",
    storeId: "619",
    productId: "844441",
    category: "Produtos"
  },
  {
    id: 3,
    title: "Produto 3",
    storeId: "619",
    productId: "860986",
    category: "Produtos"
  },
  {
    id: 4,
    title: "Produto 4",
    storeId: "619",
    productId: "882013",
    category: "Produtos"
  },
  {
    id: 5,
    title: "Produto 5",
    storeId: "619",
    productId: "833980",
    category: "Produtos"
  },
  {
    id: 6,
    title: "Produto 6",
    storeId: "619",
    productId: "815480",
    category: "Produtos"
  },
  {
    id: 7,
    title: "Perguntas",
    storeId: "1",
    productId: "1",
    category: null
  },
  {
    id: 8,
    title: "Customizado",
    storeId: "619",
    productId: "882013",
    name: "Ruby on Rails Tote",
    photos:
      "https://static.trustvox.com.br/trustvox-store/app/public/spree/products/21/product/ror_tote.jpeg",
    customStyle: customStyle,
    category: null
  },
  {
    id: 9,
    title: "Inexistente",
    storeId: "619",
    productId: "000000",
    category: null
  },
  {
    id: 10,
    title: "Loja Vazia",
    storeId: "6",
    productId: "882013",
    category: null
  }
];

export const getProduct = (productId: any) => {
  return products.find(product => product.id === parseInt(productId));
};
