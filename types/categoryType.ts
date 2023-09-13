interface CategoryType {
  id:number,
  img?:string,
  parentTitle:string,
  children?:string[],
  smDesc?:string,
}

export default CategoryType;