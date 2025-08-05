// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-press-release-page',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './press-release.component.html',
//   styleUrls: ['./press-release.component.scss']
// })
// export class PressReleaseComponent {
//   pressReleases = [
//     {
//       title: 'Company Achieves Major Milestone',
//       date: 'June 10, 2024',
//       image: 'assets/images/press1.jpg',
//       summary: 'We are excited to announce a major milestone in our company’s journey...',
//       link: '#'
//     },
//     {
//       title: 'New Product Launch',
//       date: 'May 22, 2024',
//       image: 'assets/images/press2.jpg',
//       summary: 'Introducing our latest product that will revolutionize the industry...',
//       link: '#'
//     }
//     // Add more press releases as needed
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-press-release-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.scss']
})
export class PressReleaseComponent {
  // Main featured press release
  featured = {
    location: 'Riyadh, Saudi Arabia',
    image: 'assets/images/image-5.png',
    title: 'Strategic Alliances & Industry Collaborations',
    time: '2 hours ago',
    author: 'Miral'
  };

  // Latest press releases (sidebar)
  latest = [
    {
      image: 'assets/images/pimg1.png',
      title: 'New Fintech Partnership for Secure Transaction',
      time: '30 Minutes Ago',
      author: 'Jahangir Hussain'
    },
    {
      image: 'assets/images/pimg2.png',
      title: 'Teaming Up with Leading AI Firms',
      time: '30 Minutes Ago',
      author: 'Jahangir Hussain'
    },
    {
      image: 'assets/images/pimg3.png',
      title: 'Strategic Alliances & Industry Collaborations',
      time: '30 Minutes Ago',
      author: 'Jahangir Hussain'
    },
    {
      image: 'assets/images/pimg1.png',
      title: 'New Fintech Partnership for Secure Transaction',
      time: '30 Minutes Ago',
      author: 'Jahangir Hussain'
    }
  ];

  // Cards grid (12 cards)
  cards = Array.from({ length: 12 }).map((_, i) => ({
    image: `assets/images/pimg${(i % 3) + 1}.png`,
    title: 'Strategic Alliances & Industry Collaborations',
    desc: 'Building strong partnerships to drive innovation and industry growth.',
    author: 'Hayat',
    date: 'March 02/2025',
    avatar: 'assets/images/saudi.png'
  }));

  // Pagination
  pages = [1, 2, 3, 4, 5];
  currentPage = 1;
}