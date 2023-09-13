// product images
import product_1 from '~/assets/img/shop/product/product_1.png';
import product_2 from '~/assets/img/shop/product/product_2.png';
import product_3 from '~/assets/img/shop/product/product_3.png';
import product_4 from '~/assets/img/shop/product/product_4.png';
import product_5 from '~/assets/img/shop/product/product_5.png';
import product_6 from '~/assets/img/shop/product/product_6.png';
import product_7 from '~/assets/img/shop/product/product_7.png';
import product_8 from '~/assets/img/shop/product/product_8.png';
import product_9 from '~/assets/img/shop/product/product_9.png';
import product_10 from '~/assets/img/shop/product/product_10.png';
import product_11 from '~/assets/img/shop/product/product_11.png';
import product_12 from '~/assets/img/shop/product/product_12.png';
import product_13 from '~/assets/img/shop/product/product_13.png';
import product_14 from '~/assets/img/shop/product/product_14.png';
import product_15 from '~/assets/img/shop/product/product_15.png';
import product_16 from '~/assets/img/shop/product/product_16.png';
import product_17 from '~/assets/img/shop/product/product_17.png';
import product_18 from '~/assets/img/shop/product/product_18.png';
import product_19 from '~/assets/img/shop/product/product_19.png';
import product_20 from '~/assets/img/shop/product/product_20.png';
import product_21 from '~/assets/img/shop/product/product_21.png';
import product_22 from '~/assets/img/shop/product/product_22.png';
import product_23 from '~/assets/img/shop/product/product_23.png';
// user images
import user_1 from '~/assets/img/blog/comments/avater-1.png';
import user_2 from '~/assets/img/blog/comments/avater-2.png';
import user_3 from '~/assets/img/blog/comments/avater-3.png';
// banner img
import banner_img_1 from '~/assets/img/shop/banner/banner-big-1.jpg';
import banner_img_2 from '~/assets/img/shop/banner/banner-big-2.jpg';
// product big
import product_big_img from '~/assets/img/shop/product/product-big-1.jpg';
import product_big_img_2 from '~/assets/img/shop/product/product-big-3.jpg';
import product_big_img_3 from '~/assets/img/shop/product/fashion/fashion-b2.webp';
import product_big_img_4 from '~/assets/img/shop/product/fashion/fashion-b1.webp';

const productData = [
  {
    id: 1,
    img: product_1,
    trending:true,
    banner:true,
    related_images: [
      product_1,
      product_2,
      product_3
    ],
    thumb_img: product_3,
    banner_img:banner_img_1,
    parentCategory:'Decoration & Accessories',
    category: 'Accessories',
    brand: 'Sony',
    title: 'Wooden container Bowl',
    price: 96,
    old_price: 120,
    rating: 3,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Yellow', 'Blue', 'White','Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 2,
    img: product_2,
    trending:true,
    related_images: [
      product_2,
      product_3,
      product_4
    ],
    thumb_img: product_5,
    parentCategory:'Lighting & Chair',
    category: 'Chair',
    brand: 'Sony',
    title: 'Euvira Rocking Chair',
    price: 90,
    old_price: 110,
    rating: 4,
    quantity:5,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'L'],
    colors: ['White','Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 3,
    img: product_3,
    trending:true,
    banner:true,
    related_images: [
      product_3,
      product_4,
      product_5
    ],
    thumb_img: product_1,
    banner_img:banner_img_2,
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Panasonic',
    title: 'Set of 2 baskets',
    price: 230,
    old_price: 250,
    rating: 5,
    quantity:7,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Orange','Green'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 4,
    img: product_4,
    trending:true,
    sale_of_per:8,
    new:true,
    related_images: [
      product_4,
      product_5,
      product_6
    ],
    thumb_img: product_2,
    parentCategory:'Lighting & Chair',
    category: 'Lighting',
    brand: 'Panasonic',
    title: 'Tailored Fit Mesh-Panel',
    price: 67,
    old_price: 80,
    rating: 4,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'M'],
    colors: ['Black','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 5,
    img: product_5,
    trending:true,
    related_images: [
      product_5,
      product_6,
      product_7
    ],
    thumb_img: product_8,
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Apple',
    title: 'Rosmo Namino',
    price: 180,
    old_price: 200,
    rating: 3.5,
    quantity:10,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 6,
    img: product_6,
    trending:true,
    related_images: [
      product_6,
      product_7,
      product_8
    ],
    thumb_img: product_1,
    parentCategory:'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: 'Bottle With Wooden Cork',
    price: 270,
    old_price: 290,
    rating: 3,
    quantity:11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 7,
    img: product_7,
    trending:true,
    new:true,
    related_images: [
      product_7,
      product_8,
      product_9
    ],
    thumb_img: product_6,
    parentCategory:'Clothing & Oil',
    category: 'Oil',
    brand: 'Apple',
    title: 'Hauteville Plywood Chair',
    price: 320,
    old_price: 325,
    rating: 4,
    quantity:15,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Black','Green'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 8,
    img: product_8,
    trending:true,
    related_images: [
      product_8,
      product_9,
      product_10
    ],
    thumb_img: product_4,
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Samsung',
    title: 'Juicy Pendant Lamp',
    price: 350,
    old_price: 380,
    rating: 4,
    quantity:4,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Black','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 9,
    img: product_9,
    sale_of_per:12,
    related_images: [
      product_9,
      product_10,
      product_11
    ],
    thumb_img: product_7,
    parentCategory:'Lighting & Chair',
    category: 'Chair',
    brand: 'Samsung',
    title: 'Big sale canvas basket',
    price: 400,
    rating: 4,
    quantity:3,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'L'],
    colors: ['Gray','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 10,
    img: product_10,
    sale_of_per:25,
    related_images: [
      product_10,
      product_11,
      product_12
    ],
    thumb_img: product_8,
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Apple',
    title: "Haggar Men's Heather",
    price: 420,
    rating: 4,
    quantity:6,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL'],
    colors: ['Gray','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 11,
    img: product_11,
    trending:true,
    sale_of_per:16,
    related_images: [
      product_11,
      product_12,
      product_13
    ],
    thumb_img: product_9,
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Sony',
    title: "Cotton Twill Suit",
    price: 450,
    rating: 4,
    quantity:7,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M', 'XXL'],
    colors: ['Red','Orange'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 12,
    img: product_12,
    sale_of_per:8,
    new:true,
    related_images: [
      product_12,
      product_13,
      product_14
    ],
    thumb_img: product_10,
    parentCategory:'Decoration & Accessories',
    category: 'Accessories',
    brand: 'Panasonic',
    title: "Big sale canvas basket",
    price: 480,
    rating: 4,
    quantity:9,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL'],
    colors: ['Green','Orange'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 13,
    img: product_13,
    sale_of_per:14,
    trending:true,
    related_images: [
      product_13,
      product_14,
      product_15
    ],
    thumb_img: product_11,
    parentCategory:'Lighting & Chair',
    category: 'Lighting',
    brand: 'Panasonic',
    title: "Adrianna Papell Women's",
    price: 370,
    rating: 3,
    quantity:11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'M'],
    colors: ['White','Orange'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 14,
    img: product_14,
    sale_of_per:20,
    bestSeller:true,
    related_images: [
      product_14,
      product_15,
      product_16
    ],
    thumb_img: product_13,
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Sony',
    title: "Calvin Klein Women's",
    price: 269,
    rating: 5,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL'],
    colors: ['White','Black'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 15,
    img: product_15,
    trending:true,
    sale_of_per:30,
    related_images: [
      product_15,
      product_16,
      product_17
    ],
    thumb_img: product_13,
    big_img:product_big_img,
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    sale_of_per:10,
    brand: 'Apple',
    title: "Creative Design <br>Juicy Pendant Lamp",
    price: 180,
    rating: 5,
    quantity:10,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL','XXL'],
    colors: ['White','Black'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 16,
    img: product_16,
    sale_of_per:13,
    related_images: [
      product_16,
      product_17,
      product_18
    ],
    thumb_img: product_13,
    parentCategory:'Lighting & Chair',
    category: 'Lighting',
    brand: 'Samsung',
    title: "Eunice coffee table",
    price: 300,
    rating: 3,
    quantity:12,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL'],
    colors: ['Green','Orange'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 17,
    img: product_17,
    topRated:true,
    bestSeller:true,
    related_images: [
      product_17,
      product_18,
      product_19
    ],
    thumb_img: product_15,
    big_img:product_big_img_3,
    parentCategory:'Decoration & Accessories',
    category: 'Accessories',
    sale_of_per:8,
    topRated:true,
    brand: 'Samsung',
    title: "Euvira Rocking Chair",
    price: 450,
    rating: 3,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','XL'],
    colors: ['Cyan-blue','Pink','Yellow'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 18,
    img: product_18,
    topRated:true,
    bestSeller:true,
    related_images: [
      product_18,
      product_19,
      product_20
    ],
    thumb_img: product_16,
    big_img:product_big_img_4,
    sale_of_per:5,
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Sony',
    title: "Micro Eslabon Wall Clock",
    price: 420,
    rating: 3,
    quantity:5,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','L','S'],
    colors: ['Cyan-blue','Pink','Yellow'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 19,
    img: product_19,
    topRated:true,
    bestSeller:true,
    related_images: [
      product_19,
      product_20,
      product_21
    ],
    thumb_img: product_17,
    parentCategory:'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: "Micro Eslabon Fashion",
    price: 200,
    rating: 3,
    quantity:6,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','S'],
    colors: ['Cyan-blue','Pink','Green'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 20,
    img: product_20,
    topRated:true,
    bestSeller:true,
    related_images: [
      product_20,
      product_21,
      product_22
    ],
    thumb_img: product_18,
    sale_of_per:8,
    parentCategory:'Clothing & Oil',
    category:'Oil',
    brand: 'Apple',
    title: "Panasonic Eslabon Oil",
    price: 149,
    rating: 4,
    quantity:6,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL','S'],
    colors: ['Hue','Pink','Green'],
    weight: .30,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 21,
    img: product_21,
    trending:true,
    topRated:true,
    related_images: [
      product_21,
      product_22,
      product_23
    ],
    thumb_img: product_16,
    big_img:product_big_img_2,
    parentCategory:'FASHION FOR WOMEN’S',
    category: 'Shoes',
    sale_of_per:10,
    brand: 'Apple',
    title: "Big Sale <br> Canvas Basket",
    price: 150,
    rating: 5,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL','XXL','S'],
    colors: ['White','Black'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 22,
    img: product_22,
    trending:true,
    topRated:true,
    related_images: [
      product_22,
      product_23,
      product_21
    ],
    thumb_img: product_19,
    parentCategory:'FASHION FOR WOMEN’S',
    category: 'Shoes',
    brand: 'Apple',
    title: 'Bottle With Wooden Cork',
    price: 99,
    rating: 5,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','S'],
    colors: ['Pink','Black'],
    weight: .30,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 23,
    img: product_23,
    bestSeller:true,
    related_images: [
      product_23,
      product_21,
      product_20
    ],
    thumb_img: product_11,
    parentCategory:'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: 'Bottle With Wooden Cork',
    price: 99,
    rating: 5,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','S','XL'],
    colors: ['Pink','Black'],
    weight: .30,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: user_1,
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
      },
      {
        img: user_2,
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        children: true,
      },
      {
        img: user_3,
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
]

export default productData;