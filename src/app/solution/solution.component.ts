
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-solution',
//    imports: [CommonModule],
//   templateUrl: './solution.component.html',
//   styleUrls: ['./solution.component.scss']
// })
// export class SolutionComponent {
//   // Section titles and content
//   heroTitle = 'Our Solutions 📡';
//   challengesTitle = 'Transforming Challenges into Opportunities';
//   challengesDescription = 'Discover how our innovative solutions tackle your business challenges with efficiency and precision. Each solution is designed to optimize performance, streamline operations, and enhance user experience, ensuring sustainable growth.';
//   problemIntroTitle = 'Problem Identification';
//   userProblemTitle = 'Users Problems Title Here';
//   userProblemDescription = 'Lorem ipsum dolor sit amet consectetur. Nullam mollis odio velit consequat et. Diam vel senectus dictumst viverra metus in. Id tellus sapien eu blandit.';

//   // Problems List
//   problems: string[] = ['Problem #1', 'Problem #2', 'Problem #3'];

//   // Solutions Grid
//   solutions = [
//     {
//       title: 'AI-Powered Automation',
//       description: 'Automate repetitive tasks, reduce errors, and improve efficiency with our AI-driven workflows.'
//     },
//     {
//       title: 'Secure Cloud Integration',
//       description: 'Store and access data securely from anywhere with our cloud-based solutions.'
//     },
//     {
//       title: 'Customer Engagement Tools',
//       description: 'Boost client interaction with smart chatbots, real-time analytics, and personalized user experiences.'
//     },
//     {
//       title: 'Business Intelligence & Insights',
//       description: 'Make data-driven decisions with advanced analytics and intuitive dashboards tailored to your needs.'
//     },
//     {
//       title: 'Secure Cloud Integration',
//       description: 'Store and access data securely from anywhere with our cloud-based solutions.'
//     },
//     {
//       title: 'Customer Engagement Tools',
//       description: 'Boost client interaction with smart chatbots, real-time analytics, and personalized user experiences.'
//     }
//   ];

//   // Tabs for expertise section
//   expertiseTabs: string[] = [
//     'Digital Marketing',
//     'Custom Software Development',
//     'UI/UX & Branding Services',
//     'IT Consulting & Support',
//     'Cybersecurity & Data Protection'
//   ];
//   selectedTabIndex = 0;

//   // Expertise cards (dummy data)
//   expertiseItems = [
//     {
//       title: 'Digital Marketing Solutions',
//       description: 'Helping businesses grow through targeted social media campaigns, SEO, and PPC advertising.'
//     },
//     {
//       title: 'SEO & Content Marketing',
//       description: 'Boost website visibility with strategic keyword optimization and high-quality content that drives organic traffic.'
//     },
//     {
//       title: 'Ads & Performance Marketing',
//       description: 'Drive rapid business growth with targeted ads on Google, Facebook, and other platforms to maximize ROI.'
//     }
//   ];

//   // Stats section
//   stats = [
//     { value: '150+', label: 'Clients Served' },
//     { value: '50+', label: 'Successful Projects' },
//     { value: '25+', label: 'Industries Covered' },
//     { value: '50+ countries', label: 'Global Reach' }
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent {
  navDropdownOpen = false;

  problems = [
    'Problem #1',
    'Problem #2',
    'Problem #3'
  ];

  solutionCards = [
    {
      number: 1,
      title: 'AI-Powered Automation',
      desc: 'Automate repetitive tasks, reduce errors, and improve efficiency with our AI-driven workflows.'
    },
    {
      number: 2,
      title: 'Secure Cloud Integration',
      desc: 'Store and access data securely from anywhere with our cloud-based solutions.'
    },
    {
      number: 3,
      title: 'Customer Engagement Tools',
      desc: 'Boost client interaction with smart chatbots, real-time analytics, and personalized user experiences.'
    },
    {
      number: 4,
      title: 'Business Intelligence & Insights',
      desc: 'Make data-driven decisions with advanced analysis and intuitive dashboards tailored to your needs.'
    },
    {
      number: 5,
      title: 'Secure Cloud Integration',
      desc: 'Store and access data securely from anywhere with our cloud-based solutions.'
    },
    {
      number: 6,
      title: 'Customer Engagement Tools',
      desc: 'Boost client interaction with smart chatbots, real-time analytics, and personalized user experiences.'
    }
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
      desc: 'Helping businesses grow through targeted social media campaigns, SEO, and PPC advertising.',
      link: '#'
    },
    {
      title: 'SEO & Content Marketing',
      desc: 'Boost website visibility with strategic keyword optimization and high-quality content that drives organic traffic.',
      link: '#'
    },
    {
      title: 'Ads & Performance Marketing',
      desc: 'Drive rapid business growth with targeted ads on Google, Facebook, and other platforms to maximize ROI.',
      link: '#'
    }
  ];

  stats = [
    { value: '150+', label: 'Clients Served' },
    { value: '50+', label: 'Successful Projects' },
    { value: '25+', label: 'Industries Covered' },
    { value: '50+', label: 'Global Reach' }
  ];
}