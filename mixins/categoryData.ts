import CategoryType from "~/types/categoryType";
import cate_img_1 from "~/assets/img/shop/banner/banner-sm-1.jpg";
import cate_img_2 from "~/assets/img/shop/banner/banner-sm-2.jpg";
import cate_img_3 from "~/assets/img/shop/banner/banner-sm-3.jpg";
import cate_img_4 from "~/assets/img/shop/banner/02/banner-1.webp";
import cate_img_5 from "~/assets/img/shop/banner/02/banner-2.webp";
import cate_img_6 from "~/assets/img/shop/banner/02/banner-3.webp";

export default {
  data() {
    return {
      categoryData:[
        {
          id: 1,
          img: cate_img_1,
          parentTitle: "Lighting & Chair",
          children:['Lighting','Chair']
        },
        {
          id: 2,
          img: cate_img_2,
          parentTitle: "Decoration & Accessories",
          children:['Decoration','Accessories']
        },
        {
          id: 3,
          img: cate_img_3,
          parentTitle: "Clothing & Oil",
          children:['Clothing','Oil']
        },
        {
          id: 4,
          img: cate_img_4, 
          parentTitle: "FASHION FOR MEN’S",
          children:['Shirt'],
          smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        },
        {
          id: 5,
          img: cate_img_5, 
          parentTitle: "FASHION FOR WOMEN’S",
          children:['Shoes'],
          smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        },
        {
          id: 6,
          img: cate_img_6, 
          parentTitle: "FASHION FOR MEN’S",
          children:['Shirt'],
          smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        },
      ] as CategoryType []
    }
  },
}