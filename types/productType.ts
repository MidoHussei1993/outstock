
interface ProductType {
  id:number,
  img:string,
  trending?:boolean,
  topRated?:boolean,
  bestSeller?:boolean,
  new?:boolean,
  banner?:boolean,
  banner_img?:string,
  sale_of_per?:number,
  related_images?:string[],
  thumb_img?:string,
  big_img?:string,
  parentCategory:string,
  category:string,
  brand:string,
  title:string,
  price:number,
  old_price?:number,
  rating:number,
  quantity:number,
  orderQuantity?:number,
  sm_desc:string,
  sizes?:string[],
  colors:string[],
  weight?:number,
  dimension?:string,
  reviews?:{
    img:string,
    name:string,
    time:string,
    rating:number,
    children?:boolean,
  }[],
  details:{
    details_text:string,
    details_list?:string[],
    details_text_2?:string,
  }
}

export default ProductType;