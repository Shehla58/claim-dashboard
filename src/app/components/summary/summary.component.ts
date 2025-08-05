// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-summary',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './summary.component.html',
//   styleUrls: ['./summary.component.scss']
// })
// export class SummaryComponent {
//   navDropdownOpen = false;

//   platforms = [
//     {
//       name: 'Omana',
//       title: 'Omanaa Digital Governance',
//       desc: 'Omanaa is a comprehensive digital governance platform designed to streamline business operations and ensure compliance with industry standards.',
//       image: 'assets/images/summaryimg.png',
//       stats: [
//         { label: 'Users', value: '100K+' },
//         { label: 'Sites', value: '50+' },
//         { label: 'KYC', value: 'AI Automation' }
//       ],
//       cta: 'Get Started',
//       links: ['#', '#', '#']
//     },
//     {
//       name: 'Minutes',
//       title: 'Minutes - AI Powered Meetings',
//       desc: 'Minutes leverages AI to automate meeting notes, action items, and follow-ups for efficient business collaboration.',
//       image: 'assets/images/summaryimg.png',
//       stats: [
//         { label: 'Topics', value: '150+' },
//         { label: 'Sites', value: '30+' },
//         { label: 'KYC', value: 'AI Automation' }
//       ],
//       cta: 'Get Started',
//       links: ['#', '#', '#']
//     },
//     {
//       name: 'Lexpert',
//       title: 'Lexpert Law Firm Management',
//       desc: 'Lexpert is an advanced law firm management platform with AI-powered analytics and secure document handling.',
//       image: 'assets/images/summaryimg.png',
//       stats: [
//         { label: 'Users', value: '80K+' },
//         { label: 'Sites', value: '40+' },
//         { label: 'KYC', value: 'AI Automation' }
//       ],
//       cta: 'Get Started',
//       links: ['#', '#', '#']
//     },
//     {
//       name: 'Tahakom',
//       title: 'Tahakom',
//       desc: 'Tahakom provides robust business automation tools for compliance and operational efficiency.',
//       image: 'assets/images/summaryimg.png',
//       stats: [
//         { label: 'Users', value: '50K+' },
//         { label: 'Sites', value: '20+' },
//         { label: 'KYC', value: 'AI Automation' }
//       ],
//       cta: 'Get Started',
//       links: ['#', '#', '#']
//     },
//     {
//       name: 'Muwasat',
//       title: 'Muwasat - AI Powered Business Automation',
//       desc: 'Muwasat delivers AI-powered automation for business processes, improving speed and accuracy.',
//       image: 'assets/images/summaryimg.png',
//       stats: [
//         { label: 'Users', value: '90K+' },
//         { label: 'Sites', value: '35+' },
//         { label: 'KYC', value: 'AI Automation' }
//       ],
//       cta: 'Get Started',
//       links: ['#', '#', '#']
//     },
//     {
//       name: 'Musajid',
//       title: 'Musajid - AI Powered Business Automation',
//       desc: 'Musajid automates business workflows with advanced AI, ensuring seamless integration and management.',
//       image: 'assets/images/summaryimg.png',
//       stats: [
//         { label: 'Users', value: '95K+' },
//         { label: 'Sites', value: '40+' },
//         { label: 'KYC', value: 'AI Automation' }
//       ],
//       cta: 'Get Started',
//       links: ['#', '#', '#']
//     },
//     {
//       name: 'Muheisin',
//       title: 'Muheisin - AI Powered Business Automation',
//       desc: 'Muheisin offers AI-driven solutions for business automation, enhancing productivity and compliance.',
//       image: 'assets/images/summaryimg.png',
//       stats: [
//         { label: 'Users', value: '70K+' },
//         { label: 'Sites', value: '30+' },
//         { label: 'KYC', value: 'AI Automation' }
//       ],
//       cta: 'Get Started',
//       links: ['#', '#', '#']
//     },
//     {
//       name: 'Jazeem',
//       title: 'Jazeem Digital Governance',
//       desc: 'Jazeem is a digital governance platform focused on secure, scalable, and efficient business management.',
//       image: 'assets/images/summaryimg.png',
//       stats: [
//         { label: 'Users', value: '50K+' },
//         { label: 'Sites', value: '15+' },
//         { label: 'KYC', value: 'AI Automation' }
//       ],
//       cta: 'Get Started',
//       links: ['#', '#', '#']
//     }
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  navDropdownOpen = false;

  platforms = [
    {
      name: 'Omana',
      title: 'Omanaa Digital Governance',
      desc: 'Omanaa is a comprehensive digital governance platform designed to streamline business operations and ensure compliance with industry standards.',
      image: 'assets/images/summaryimg.png',
      stats: [
        { label: 'Users', value: '500K+' },
        { label: 'Sites', value: '50+' },
        { label: 'KYC', value: 'AI Automation' }
      ],
      cta: 'Get Started',
      links: [
        { icon: 'assets/images/linkedin.svg', url: '#' },
        { icon: 'assets/images/summaryimg.png', url: '#' }
      ]
    },
    {
      name: 'Minutes',
      title: 'Minutes - AI Powered Meetings',
      desc: 'Minutes leverages AI to automate meeting notes, action items, and follow-ups for efficient business collaboration.',
      image: 'assets/images/summaryimg.png',
      stats: [
        { label: 'Topics', value: '150+' },
        { label: 'Sites', value: '30+' },
        { label: 'KYC', value: 'AI Automation' }
      ],
      cta: 'Get Started',
      links: [
        { icon: 'assets/images/linkedin.svg', url: '#' },
        { icon: 'assets/images/share.svg', url: '#' }
      ]
    },
    {
      name: 'Lexpert',
      title: 'Lexpert Law Firm Management',
      desc: 'Lexpert is an advanced law firm management platform with AI-powered analytics and secure document handling.',
      image: 'assets/images/summaryimg.png',
      stats: [
        { label: 'Users', value: '500K+' },
        { label: 'Sites', value: '40+' },
        { label: 'KYC', value: 'AI Automation' }
      ],
      cta: 'Get Started',
      links: [
        { icon: 'assets/images/linkedin.svg', url: '#' },
        { icon: 'assets/images/share.svg', url: '#' }
      ]
    },
    {
      name: 'Tahakom',
      title: 'Tahakom',
      desc: 'Tahakom provides robust business automation tools for compliance and operational efficiency.',
      image: 'assets/images/summaryimg.png',
      stats: [
        { label: 'Users', value: '500K+' },
        { label: 'Sites', value: '20+' },
        { label: 'KYC', value: 'AI Automation' }
      ],
      cta: 'Get Started',
      links: [
        { icon: 'assets/images/linkedin.svg', url: '#' },
        { icon: 'assets/images/share.svg', url: '#' }
      ]
    },
    {
      name: 'Muwasat',
      title: 'Muwasat - AI Powered Business Automation',
      desc: 'Muwasat delivers AI-powered automation for business processes, improving speed and accuracy.',
      image: 'assets/images/summaryimg.png',
      stats: [
        { label: 'Users', value: '500K+' },
        { label: 'Sites', value: '35+' },
        { label: 'KYC', value: 'AI Automation' }
      ],
      cta: 'Get Started',
      links: [
        { icon: 'assets/images/linkedin.svg', url: '#' },
        { icon: 'assets/images/share.svg', url: '#' }
      ]
    },
    {
      name: 'Musajid',
      title: 'Musajid - AI Powered Business Automation',
      desc: 'Musajid automates business workflows with advanced AI, ensuring seamless integration and management.',
      image: 'assets/images/summaryimg.png',
      stats: [
        { label: 'Users', value: '500K+' },
        { label: 'Sites', value: '40+' },
        { label: 'KYC', value: 'AI Automation' }
      ],
      cta: 'Get Started',
      links: [
        { icon: 'assets/images/linkedin.svg', url: '#' },
        { icon: 'assets/images/share.svg', url: '#' }
      ]
    },
    {
      name: 'Muheisin',
      title: 'Muheisin - AI Powered Business Automation',
      desc: 'Muheisin offers AI-driven solutions for business automation, enhancing productivity and compliance.',
      image: 'assets/images/summaryimg.png',
      stats: [
        { label: 'Users', value: '500K+' },
        { label: 'Sites', value: '30+' },
        { label: 'KYC', value: 'AI Automation' }
      ],
      cta: 'Get Started',
      links: [
        { icon: 'assets/images/linkedin.svg', url: '#' },
        { icon: 'assets/images/share.svg', url: '#' }
      ]
    },
    {
      name: 'Jazeem',
      title: 'Jazeem Digital Governance',
      desc: 'Jazeem is a digital governance platform focused on secure, scalable, and efficient business management.',
      image: 'assets/images/summaryimg.png',
      stats: [
        { label: 'Users', value: '500K+' },
        { label: 'Sites', value: '15+' },
        { label: 'KYC', value: 'AI Automation' }
      ],
      cta: 'Get Started',
      links: [
        { icon: 'assets/images/linkedin.svg', url: '#' },
        { icon: 'assets/images/share.svg', url: '#' }
      ]
    }
  ];
 }