
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent {
//   navDropdownOpen = false;

//   stats = [
//     { value: '15,000+', label: 'Total Clients' },
//     { value: '500+', label: 'Total Clients' },
//     { value: '90%', label: 'Completion Rate' },
//     { value: '50+', label: 'Total Countries' }
//   ];

//   digitalSolutionsTabs = [
//     'Digital Marketing Solutions',
//     'E-Learning Solutions & Knowledge Base',
//     'LawTech & Knowledge Base',
//     'Cybersecurity & Access Protection'
//   ];
//   selectedDigitalTab = 0;

//   solutions = [
//     {
//       icon: 'assets/images/picon1.png',
//       title: 'Omana - Smart Business Management',
//       desc: 'A robust, all-in-one business management platform for smart operations.',
//       active: false
//     },
//     {
//       icon: 'assets/images/picon2.png',
//       title: 'Muhadir - AI-Powered Analytics',
//       desc: 'AI-driven analytics platform that helps businesses make informed decisions with real-time insights.',
//       active: true
//     },
//     {
//       icon: 'assets/images/picon3.png',
//       title: 'Omana - Smart Business Management',
//       desc: 'Deliver data-driven solutions for business growth and performance.',
//       active: false
//     },
//     {
//       icon: 'assets/images/picon4.png',
//       title: 'Lexpert - Cloud Collaboration Hub',
//       desc: 'A secure, cloud-based platform for seamless team collaboration and project management.',
//       active: false
//     }
//   ];

//   testimonial = {
//     text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque non fermentum vestibulum at fermentum erat. Ut massa dictum quis massa aliquet venenatis.',
//     author: 'Wajjad',
//     role: 'Marketing Manager at Google',
//     avatar: 'assets/images/avatar.jpg'
//   };

//   partners = [
//     'assets/images/picon1.png',
//     'assets/images/picon2.png',
//     'assets/images/picon3.png',
//     'assets/images/picon4.png',
//     'assets/images/picon5.png',
//     'assets/images/picon6.png'
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  navDropdownOpen = false;

  stats = [
    { value: '15,000+', label: 'Total Clients' },
    { value: '500+', label: 'Total Clients' },
    { value: '90%', label: 'Completion Rate' },
    { value: '50+', label: 'Total Countries' }
  ];

  digitalSolutionsTabs = [
    'Digital Marketing',
    'Custom Software Development',
    'UI/UX & Branding Services',
    'IT Consulting & Support',
    'Cybersecurity & Data Protection'
  ];
  selectedDigitalTab = 0;

  digitalCards = [
    {
      title: 'Digital Marketing Solutions',
      desc: 'Higher brand awareness through targeted social media campaigns, SEO, and PPC advertising.',
      link: '#'
    },
    {
      title: 'SEO & Content Marketing',
      desc: 'Boost website visibility with strategic keyword optimization and high-quality content that ranks.',
      link: '#'
    },
    {
      title: 'Ads & Performance Marketing',
      desc: 'Drive Facebook growth with targeted ads on Google, Facebook, and other platforms to maximize ROI.',
      link: '#'
    }
  ];

  solutions = [
    {
      icon: 'assets/images/picon1.png',
      title: 'Omana - Smart Business Management',
      desc: 'A robust, all-in-one business management platform for smart operations.',
      active: false
    },
    {
      icon: 'assets/images/picon4.png',
      title: 'Muhadir - AI-Powered Analytics',
      desc: 'AI-driven analytics platform that helps businesses make informed decisions with real-time insights.',
      active: true
    },
    {
      icon: 'assets/images/picon1.png',
      title: 'Omana - Smart Business Management',
      desc: 'Deliver data-driven solutions for business growth and performance.',
      active: false
    },
    {
      icon: 'assets/images/picon3.png',
      title: 'Lexpert - Cloud Collaboration Hub',
      desc: 'A secure, cloud-based platform for seamless team collaboration and project management.',
      active: false
    }
  ];

  testimonial = {
    text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque non fermentum vestibulum at fermentum erat. Ut massa dictum quis massa aliquet venenatis.',
    author: 'Wajjad',
    role: 'Marketing Manager at Google',
    avatar: 'assets/images/saudi.png'
  };

  partners = [
    'assets/images/picon1.png',
    'assets/images/picon2.png',
    'assets/images/picon3.png',
    'assets/images/picon4.png',
    'assets/images/picon5.png',
    'assets/images/picon1.png'
  ];
}