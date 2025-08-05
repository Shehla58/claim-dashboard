// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-lexpert',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './lexpert.component.html',
//   styleUrls: ['./lexpert.component.scss']
// })
// export class LexpertComponent {
//   stats = [
//     { value: '500K+', label: 'Total Users' },
//     { value: '120K', label: 'Active Monthly Users' },
//     { value: '90%', label: 'Client Satisfaction Rate' },
//     { value: '0.5 Seconds', label: 'Average Response Time' }
//   ];

//   competitors = [
//     { name: 'Lexpert - Performance', values: [95, 92, 90, 98] },
//     { name: 'ABC Competitor - Performance', values: [80, 85, 70, 90] },
//     { name: 'XYZ Competitor - Performance', values: [75, 80, 65, 85] }
//   ];

//   testimonial = {
//     text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque non fermentum vestibulum at fermentum erat. Ut massa dictum quis massa aliquet venenatis.',
//     author: 'Wajjad',
//     role: 'Marketing Manager at Google',
//     avatar: 'assets/images/saudi.png'
//   };
// }


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-lexpert',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './lexpert.component.html',
//   styleUrls: ['./lexpert.component.scss']
// })
// export class LexpertComponent {
//   navDropdownOpen = false;

//   stats = [
//     { value: '500K+', label: 'Total Users' },
//     { value: '120K', label: 'Active Monthly Users' },
//     { value: '90%', label: 'Client Satisfaction Rate' },
//     { value: '0.5 Seconds', label: 'Average Response Time' }
//   ];

//   features = [
//     {
//       icon: 'assets/images/feature1.svg',
//       title: 'AI-Powered Analytics',
//       desc: 'Make informed decisions with real-time insights and predictive analytics.'
//     },
//     {
//       icon: 'assets/images/feature2.svg',
//       title: 'Cloud Collaboration',
//       desc: 'Seamless teamwork and document sharing in a secure environment.'
//     },
//     {
//       icon: 'assets/images/feature3.svg',
//       title: 'Smart Automation',
//       desc: 'Automate repetitive tasks and boost productivity with intelligent workflows.'
//     }
//   ];

//   solutions = [
//     {
//       icon: 'assets/images/sol1.svg',
//       title: 'Lexpert - Cloud Collaboration Hub',
//       desc: 'A secure, cloud-based platform for seamless team collaboration and project management.'
//     },
//     {
//       icon: 'assets/images/sol2.svg',
//       title: 'Omana - Smart Business Management',
//       desc: 'A robust, all-in-one business management platform for smart operations.'
//     },
//     {
//       icon: 'assets/images/sol3.svg',
//       title: 'Muhadir - AI-Powered Analytics',
//       desc: 'AI-driven analytics platform that helps businesses make informed decisions with real-time insights.'
//     }
//   ];

//   testimonial = {
//     text: 'Lexpert transformed our workflow and made collaboration effortless. The analytics and automation features are game-changers!',
//     author: 'Wajjad',
//     role: 'Marketing Manager at Google',
//     avatar: 'assets/images/avatar.jpg'
//   };

//   partners = [
//     'assets/images/partner1.png',
//     'assets/images/partner2.png',
//     'assets/images/partner3.png',
//     'assets/images/partner4.png',
//     'assets/images/partner5.png',
//     'assets/images/partner6.png'
//   ];
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lexpert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lexpert.component.html',
  styleUrls: ['./lexpert.component.scss']
})
export class LexpertComponent {
  navDropdownOpen = false;

  stats = [
    { value: '500K+', label: 'Total Users' },
    { value: '120K', label: 'Active Monthly Users' },
    { value: '90%', label: 'Client Satisfaction Rate' },
    { value: '0.5 Seconds', label: 'Average Response Time' }
  ];

  keyStats = [
    { value: '500K+', label: 'Total Users' },
    { value: '120K', label: 'Active Monthly Users' },
    { value: '90%', label: 'Client Satisfaction Rate' },
    { value: '0.5 Seconds', label: 'Average Response Time' }
  ];

  graph = {
    users: 'assets/images/graph.png',
    retention: 'assets/images/graph1.png'
  };

  whyChoose = [
    'Stability',
    'Efficiency',
    'Security',
    'Scalability'
  ];

  features = [
    {
      icon: 'assets/images/feature1.svg',
      title: 'AI-Powered Analytics',
      desc: 'Make informed decisions with real-time insights and predictive analytics.'
    },
    {
      icon: 'assets/images/feature2.svg',
      title: 'Cloud Collaboration',
      desc: 'Seamless teamwork and document sharing in a secure environment.'
    },
    {
      icon: 'assets/images/feature3.svg',
      title: 'Smart Automation',
      desc: 'Automate repetitive tasks and boost productivity with intelligent workflows.'
    }
  ];

  solutions = [
    {
      icon: 'assets/images/sol1.svg',
      title: 'Lexpert - Cloud Collaboration Hub',
      desc: 'A secure, cloud-based platform for seamless team collaboration and project management.'
    },
    {
      icon: 'assets/images/sol2.svg',
      title: 'Omana - Smart Business Management',
      desc: 'A robust, all-in-one business management platform for smart operations.'
    },
    {
      icon: 'assets/images/sol3.svg',
      title: 'Muhadir - AI-Powered Analytics',
      desc: 'AI-driven analytics platform that helps businesses make informed decisions with real-time insights.'
    }
  ];

  

  testimonial = {
    text: 'Lexpert transformed our workflow and made collaboration effortless. The analytics and automation features are game-changers!',
    author: 'Wajjad',
    role: 'Marketing Manager at Google',
    avatar: 'assets/images/saudi.png'
  };

  // partners = [
  //   'assets/images/picon1.png',
  //   'assets/images/picon2.png',
  //   'assets/images/picon3.png',
  //   'assets/images/partner4.png',
  //   'assets/images/partner5.png',
  //   'assets/images/partner6.png'
  // ];
  
}
