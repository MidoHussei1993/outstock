// type 
import BlogType from '~~/types/blogType';
// images
import blog_1 from '~/assets/img/blog/blog-1.jpg';
import blog_2 from '~/assets/img/blog/blog-2.jpg';
import blog_3 from '~/assets/img/blog/blog-3.jpg';
import blog_4 from '~/assets/img/blog/2/blog-01.webp';
import blog_5 from '~/assets/img/blog/2/blog-02.webp';
import blog_6 from '~/assets/img/blog/2/blog-03.webp';
import blog_7 from '~/assets/img/blog/2/blog-04.webp';
import blog_8 from '~/assets/img/blog/2/blog-05.webp';
import blog_9 from '~/assets/img/blog/2/blog-06.webp';
import blog_10 from '~/assets/img/blog/blog-big-2.jpg';
import blog_11 from '~/assets/img/blog/blog-big-3.jpg';
import blog_12 from '~/assets/img/blog/blog-big-4.jpg';
import blog_13 from '~/assets/img/blog/blog-big-5.jpg';
import blog_14 from '~/assets/img/blog/blog-big-6.jpg';
import blog_15 from '~/assets/img/blog/blog-big-7.jpg';
import blog_16 from '~/assets/img/blog/blog-4.jpg';
import blog_17 from '~/assets/img/blog/blog-5.jpg';
import blog_18 from '~/assets/img/blog/masonary/blog-ms-2.jpg';
import blog_19 from '~/assets/img/blog/masonary/blog-ms-4.jpg';
import blog_20 from '~/assets/img/blog/masonary/blog-ms-1.jpg';
import blog_21 from '~/assets/img/blog/masonary/blog-ms-3.jpg';


export default {
  data() {
    return {
      blogData:[
        // blog home
        {
          id:1,
          img:blog_1,
          title:'Anteposuerit litterarum formas.',
          author:'Shahnewaz Sakil',
          date:'September 14, 2023',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home',
        },
        {
          id:2,
          img:blog_2,
          title:'Hanging fruit to identify',
          author:'Naim Ahmed',
          date:'November 14, 2022',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home',
        },
        {
          id:3,
          img:blog_3,
          title:'The information highway will',
          author:'John Smith',
          date:'January 14, 2023',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home',
        },
        {
          id:4,
          img:blog_2,
          title:'Hanging fruit to identify',
          author:'Mamun Ahmed',
          date:'December 14, 2022',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home',
        },
        // blog 2
        {
          id:5,
          img:blog_4,
          title:'Amy Schumer Doesn’t Care',
          author:'Theme_pure Admin',
          date:'February 7, 2022',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home-7',
        },
        {
          id:6,
          img:blog_5,
          title:'How to choose right jeans?',
          author:'Theme_pure Admin',
          date:'February 15, 2022',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home-7',
        },
        {
          id:7,
          img:blog_6,
          title:'Fashion T-shirts - the main',
          author:'Theme_pure Admin',
          date:'February 16, 2022',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home-7',
        },
        {
          id:8,
          img:blog_7,
          title:'Fashion coats 2022: key trends',
          author:'Theme_pure Admin',
          date:'March 16, 2022',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home-7',
        },
        {
          id:9,
          img:blog_8,
          title:'Boots - novelties of this s.',
          author:'Theme_pure Admin',
          date:'March 10, 2022',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home-7',
        },
        {
          id:10,
          img:blog_9,
          title:'Choose your best shirt',
          author:'Theme_pure Admin',
          date:'March 18, 2022',
          desc:'Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
          blog:'home-7',
        },
        // blog standard
        {
          id:11,
          img:blog_10,
          title:'Anteposuerit litterarum formas.',
          author:'John Smith',
          date:'September 14, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-standard'
        },
        {
          id:12,
          img:blog_11,
          title:'Hanging fruit to identify a ballpark',
          author:'Naim Ahmed',
          date:'November 15, 2022',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-standard'
        },
        {
          id:13,
          img:blog_12,
          title:'The information highway will close',
          author:'Mamun Ahmed',
          date:'December 16, 2022',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-standard'
        },
        {
          id:14,
          img:blog_13,
          title:'Value added activity to beta',
          author:'Salim Rana',
          date:'January 16, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-standard'
        },
        {
          id:15,
          img:blog_14,
          title:'Ballpark value added activity',
          author:'Matiour Rahman',
          date:'January 22, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-standard'
        },
        {
          id:16,
          img:blog_15,
          title:'Immersion along the information',
          author:'Farhan',
          date:'January 25, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-standard'
        },
        {
          id:17,
          img:blog_16,
          title:'Low hanging fruit to identify',
          author:'Jamil',
          date:'March 08, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-standard'
        },
        {
          id:18,
          img:blog_17,
          title:'The digital divide with',
          author:'Belal',
          date:'February 08, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-standard'
        },
        // blog masonry
        {
          id:19,
          img:blog_2,
          title:'Hanging fruit to identify',
          author:'Naim Ahmed',
          date:'November 14, 2022',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-masonry'
        },
        {
          id:20,
          img:blog_18,
          title:'Hanging fruit to identify a ballpark',
          author:'Samrat',
          date:'January 28, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-masonry'
        },
        {
          id:21,
          img:blog_19,
          title:'Additional clickthroughs from DevOps',
          author:'John Doe',
          date:'January 20, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-masonry'
        },
        {
          id:22,
          img:blog_20,
          title:'Override the digital divide with',
          author:'Steve Smith',
          date:'February 20, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-masonry'
        },
        {
          id:23,
          img:blog_21,
          title:'Ballpark value added activity',
          author:'Smith Doe',
          date:'February 15, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-masonry'
        },
        {
          id:24,
          img:blog_13,
          title:'Immersion along the information',
          author:'John Doe',
          date:'February 10, 2023',
          desc:'A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the',
          blog:'blog-masonry'
        },
      ] as BlogType[]
    }
  },
}