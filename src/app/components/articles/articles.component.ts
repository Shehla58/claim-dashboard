

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-articles',
//   standalone: true,
//   templateUrl: './articles.component.html',
//   styleUrls: ['./articles.component.scss'],
//   imports: [CommonModule],
// })
// export class ArticlesComponent {
//   articles = [
//     {
//       title: 'Wajad signs MOU with fintech to drive innovation',
//       description: 'We are excited to announce our new partnership aimed at enhancing digital transformation.',
//       author: 'Hayat • March 02, 2025',
//       image: 'assets/images/image-6.png',
//     },
//     {
//       title: 'How AI is changing finance',
//       description: 'Artificial Intelligence is reshaping how we interact with financial systems.',
//       author: 'Kareem • Feb 21, 2025',
//       image: 'assets/images/image-5.png',
//     },
//     {
//       title: 'New API updates in 2025',
//       description: 'Discover what’s new in our latest developer-friendly release.',
//       author: 'Ranya • Jan 15, 2025',
//       image: 'assets/images/image-4.png',
//     },
//     {
//       title: 'Wajad signs MOU with fintech to drive innovation',
//       description: 'We are excited to announce our new partnership aimed at enhancing digital transformation.',
//       author: 'Hayat • March 02, 2025',
//       image: 'assets/images/image-6.png',
//     },
//     {
//       title: 'How AI is changing finance',
//       description: 'Artificial Intelligence is reshaping how we interact with financial systems.',
//       author: 'Kareem • Feb 21, 2025',
//       image: 'assets/images/image-5.png',
//     },
//     {
//       title: 'New API updates in 2025',
//       description: 'Discover what’s new in our latest developer-friendly release.',
//       author: 'Ranya • Jan 15, 2025',
//       image: 'assets/images/image-4.png',
//     },
//     {
//       title: 'The future of payment security',
//       description: 'Modern encryption standards and what you need to know.',
//       author: 'Adeel • Dec 30, 2024',
//       image: 'assets/images/image-4.png',
//     },
//     {
//       title: 'Scaling your SaaS product',
//       description: 'Strategies for taking your platform from MVP to enterprise-grade.',
//       author: 'Yara • Nov 10, 2024',
//       image: 'assets/images/image-5.png',
//     },
//     {
//       title: 'UX for financial products',
//       description: 'Tips on designing frictionless user experiences in finance.',
//       author: 'Sami • Oct 05, 2024',
//       image: 'assets/images/image-5.png',
//     }
//   ];

//   currentPage = 1;
//   itemsPerPage = 3;

//   // ✅ First 6 articles (2 rows of 3 cards)
//   get firstSixArticles() {
//     return this.articles.slice(0, 6);
//   }

//   // ✅ Paginated remaining articles (from index 6 onward)
//   get paginatedArticles() {
//     const remaining = this.articles.slice(6);
//     const start = (this.currentPage - 1) * this.itemsPerPage;
//     return remaining.slice(start, start + this.itemsPerPage);
//   }

//   // ✅ Total pages only for remaining articles
//   get totalPages(): number[] {
//     const remaining = this.articles.slice(6);
//     return Array.from({ length: Math.ceil(remaining.length / this.itemsPerPage) }, (_, i) => i + 1);
//   }

//   changePage(page: number) {
//     this.currentPage = page;
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  navDropdownOpen = false;

  featured = {
    image: 'assets/images/image-5.png',
    title: 'Teaming Up With Leading AI Firms',
    subtitle: 'AI-Driven Decision Making',
    desc: 'AI is becoming a critical tool for strategic business decisions by analyzing vast amounts of data in real time. With machine learning algorithms, companies can identify patterns, anticipate customer needs, and optimize operations.',
    author: 'Hayat',
    date: 'March 02/2025',
    avatar: 'assets/images/saudi.png'
  };

  cards = [
    {
      image: 'assets/images/pimg1.png',
      title: 'New Fintech Partnership for Secure Transaction',
      desc: 'Expanding our financial technology solutions to enhance security and speed.',
      author: 'Hayat',
      date: 'March 02/2025',
      avatar: 'assets/images/saudi.png',
      arrow: true
    },
    {
      image: 'assets/images/pimg2.png',
      title: 'New Fintech Partnership for Secure Transaction',
      desc: 'Expanding our financial technology solutions to enhance security and speed.',
      author: 'Hayat',
      date: 'March 02/2025',
      avatar: 'assets/images/saudi.png',
      arrow: true
    },
    {
      image: 'assets/images/pimg3.png',
      title: 'New Fintech Partnership for Secure Transaction',
      desc: 'Expanding our financial technology solutions to enhance security and speed.',
      author: 'Hayat',
      date: 'March 02/2025',
      avatar: 'assets/images/saudi.png',
      arrow: true
    },
    // Repeat or add more cards as needed for the grid
  ];

  // For demo, repeat cards to fill the grid (9 cards)
  get cardsGrid() {
    return Array(9).fill(0).map((_, i) => this.cards[i % this.cards.length]);
  }

  pages = [1, 2, 3, 4, 5];
  currentPage = 1;
}
