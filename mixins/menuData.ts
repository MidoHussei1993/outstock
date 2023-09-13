import menuType from "~/types/menuType";

export default {
  data() {
    return {
      menuData: [
        // {
        //   link: '/',
        //   title: 'Home',
        //   hasDropdown: true,
        //   megamenu: false,
        //   dropdownItems: [
        //     { link: '/', title: 'Home Style 1' },
        //     { link: '/home-2', title: 'Home Style 2' },
        //     { link: '/home-3', title: 'Home Style 3' },
        //     { link: '/home-4', title: 'Home Style 4' },
        //     { link: '/home-5', title: 'Home Style 5' },
        //     { link: '/home-6', title: 'Home Style 6' },
        //     { link: '/home-7', title: 'Home Style 7' },
        //   ]
        // },
        // {
        //   link: '/shop',
        //   title: 'Shop',
        //   hasDropdown: true,
        //   megamenu: true,
        //   dropdownItems: [
        //     {
        //       link: '/shop',
        //       title: 'Shop Pages',
        //       dropdownMenu: [
        //         { link: '/shop', title: 'Standard Shop Page' },
        //         { link: '/shop-right', title: 'Shop Right Sidebar' },
        //         { link: '/shop-4-col', title: 'Shop 4 Column' },
        //         { link: '/shop-3-col', title: 'Shop 3 Column' },
        //         { link: '/shop', title: 'Shop Page' },
        //         { link: '/shop', title: 'Shop Page' },
        //         { link: '/shop', title: 'Shop Infinity' },
        //       ]
        //     },
        //     {
        //       link: '/shop',
        //       title: 'Products Pages',
        //       dropdownMenu: [
        //         { link: '/product-details', title: 'Product Details' },
        //         { link: '/product-details', title: 'Product Page V2' },
        //         { link: '/product-details', title: 'Product Page V3' },
        //         { link: '/product-details', title: 'Product Page V4' },
        //         { link: '/product-details', title: 'Simple Product' },
        //         { link: '/product-details', title: 'Variable Product' },
        //         { link: '/product-details', title: 'External Product' },
        //       ]
        //     },
        //     {
        //       link: '/shop',
        //       title: 'Other Shop Pages',
        //       dropdownMenu: [
        //         { link: '/wishlist', title: 'Wishlist' },
        //         { link: '/compare', title: 'Compare' },
        //         { link: '/cart', title: 'Shopping Cart' },
        //         { link: '/checkout', title: 'Checkout' },
        //         { link: '/register', title: 'Register' },
        //         { link: '/login', title: 'Login' },
        //       ]
        //     },
        //   ]
        // },
        // {
        //   link: '/blog',
        //   title: 'Blog',
        //   hasDropdown: true,
        //   megamenu: false,
        //   dropdownItems: [
        //     { link: '/blog', title: 'Blog' },
        //     { link: '/blog-left-sidebar', title: 'Blog Left Sidebar' },
        //     { link: '/blog-no-sidebar', title: 'Blog No Sidebar' },
        //     { link: '/blog-2-col', title: 'Blog 2 Column' },
        //     { link: '/blog-2-col-mas', title: 'Blog 2 Column Masonary' },
        //     { link: '/blog-3-col', title: 'Blog 3 Column' },
        //     { link: '/blog-details', title: 'Blog Details' },
        //   ]
        // },
        {
          link: "/shop",
          title: "Pages",
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: "/wishlist", title: "Wishlist" },
            { link: "/cart", title: "Shopping Cart" },
            { link: "/checkout", title: "Checkout" },
            { link: "/account", title: "Account" },
            { link: "/register", title: "Register" },
            { link: "/login", title: "Login" },
            { link: "/404", title: "Error 404" },
          ],
        },
        {
          link: "/contact",
          title: "Contact",
        },
      ] as menuType[],
    };
  },
};
