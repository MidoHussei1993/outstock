interface menuType {
  link:string,
  title:string,
  hasDropdown?:boolean,
  megamenu?:boolean,
  dropdownItems?:{
    link: string
    title: string,
    dropdownMenu?:{
      link: string
      title: string,
    }[]
  }[],
}

export default menuType;