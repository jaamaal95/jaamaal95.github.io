import { PostDataType } from '@/types';

export const ALL_POSTS = [
  {
    title: 'Understanding Swift Sets: Tips, Examples, and an iOS App Tutorial',
    date: '2024-07-05',
    readingTime: '4',
    summary:
      'Sets are a fundamental data structure in Swift, providing a powerful way to store unique elements. They offer fast membership checks, fast lookup, and an efficient way to remove duplicates.',
    url: 'https://medium.com/gitconnected/understanding-swift-sets-tips-examples-and-an-ios-app-tutorial-27711d96da92',
    tag: ['Swift', 'Sets', 'Tutorial'],
  },
  {
    title: 'Harnessing the Potential of Swift Enums to Build Better iOS Apps',
    date: '2024-07-01',
    readingTime: '7',
    summary:
      "Enumerations, commonly known as enums, are Swift's powerful and flexible feature. They allow you to define a common type of value that can be assigned to a variable, passed as an argument, and returned from a function. This article explores how enums can be used to build better iOS apps.",
    url: 'https://medium.com/gitconnected/harnessing-the-potential-of-swift-enums-to-build-better-ios-apps-5b398a840e1f',
    tag: ['Swift', 'Enums'],
  },
  {
    title: 'Building a Simple Tap Gesture Element in SwiftUI',
    date: '2024-05-11',
    readingTime: '2',
    summary:
      'Creating a simple tap gesture in SwiftUI is quite straightforward. Here’s a basic example of how you can add a tap gesture to a text view in SwiftUI.',
    url: 'https://jaamaalxyz.medium.com/building-a-simple-tap-gesture-element-in-swiftui-969812199f08',
    tag: ['SwiftUI', 'Gestures', 'Tutorial'],
  },
  {
    title: 'Stay Connected: Showing Offline Alert in React Native & Expo App',
    date: '2024-03-24',
    readingTime: '4',
    summary:
      'In the mobile-first world, ensuring that users have a seamless experience even when they’re offline is crucial. An offline alert is a common feature that allows users to stay connected to the app even when they’re offline. This article explores how to create an offline alert in React Native & Expo app.',
    url: 'https://jaamaalxyz.medium.com/stay-connected-showing-offline-alert-in-react-native-expo-app-33841404fc18',
    tag: ['React Native', 'Expo', 'Offline', 'Alert', 'Tutorial'],
  },
  {
    title:
      'Data Fetching Libraries for Building a Better React Native & Expo App',
    date: '2024-02-26',
    readingTime: '11',
    summary:
      'Data fetching is an essential part of mobile app development, as it allows us to communicate with external sources, such as APIs, databases, or other data sources. In this article, we explore various data fetching libraries that can be used to build a better React Native & Expo app.',
    url: 'https://levelup.gitconnected.com/data-fetching-libraries-for-building-a-better-react-native-expo-app-54f77f6457be',
    tag: [
      'React Native',
      'Expo',
      'Data Fetching',
      'Fetch API',
      'Axios',
      'Apollo Client',
      'GraphQL',
      'React Query',
      'swr',
      'tRPC',
    ],
  },
  {
    title:
      'Exploring State Management Libraries for Building React Native & Expo App',
    date: '2024-02-12',
    readingTime: '8',
    summary:
      'State management is a crucial aspect of any application development, especially for complex and dynamic apps that need to share data between screens. In this article, we explore various state management libraries that can be used to build a better React Native & Expo app.',
    url: 'https://levelup.gitconnected.com/exploring-state-management-libraries-for-building-react-native-expo-app-025865b055fc',
    tag: [
      'React Native',
      'Expo',
      'State Management',
      'Redux',
      'MobX',
      'React Context API',
      'Zustand',
      'React Query',
    ],
  },
  {
    title: 'Types Harmony in a React Native & Expo App',
    date: '2024-02-02',
    readingTime: '7',
    summary:
      'Types are a way of describing the shape and behavior of data in our code. They can help us avoid common errors, such as passing the wrong type of data, and improve the readability of our code. In this article, we explore how types can be used to build a better React Native & Expo app.',
    url: 'https://jaamaalxyz.medium.com/types-harmony-in-a-react-native-expo-app-f3fb046d41b1',
    tag: ['React Native', 'Expo', 'TypeScript', 'Flow'],
  },
  {
    title:
      'A Hands-on Guide to Creating React Native and Expo Apps with Basic Components',
    date: '2024-01-26',
    readingTime: '6',
    summary:
      'React Native and Expo are two popular tools for building mobile apps. In this article, we explore how to create React Native and Expo apps with basic components.',
    url: 'https://levelup.gitconnected.com/a-hands-on-guide-to-creating-react-native-expo-apps-with-basic-components-586aac60ef76',
    tag: ['React Native', 'Expo', 'Basic Components', 'Tutorial'],
  },
  {
    title: 'Crafting Visually Appealing and Accessible Forms with HTML & CSS',
    date: '2023-12-22',
    readingTime: '6',
    summary:
      'Forms are a crucial component of web development, allowing users to interact with websites. Creating forms that are not only visually appealing but also accessible is an important part of web development. In this article, we explore how to create forms that are visually appealing and accessible using HTML & CSS.',
    url: 'https://medium.com/devsorigin/crafting-visually-appealing-and-accessible-forms-with-html-css-19970e0b5b19',
    tag: ['HTML', 'CSS', 'Forms', 'Tutorial'],
  },
  {
    title:
      'Bringing Your App Idea to Life: A Beginner’s Guide to Mobile App Development',
    date: '2023-12-14',
    readingTime: '4',
    summary:
      'Ever dreamed of turning your brilliant app idea into a reality? Well, guess what? You’re not alone! Mobile app development has become an essential part of our daily lives. In this article, we explore how to start your journey in mobile app development.',
    url: 'https://medium.com/devsorigin/intro-to-mobile-app-development-planning-to-publishing-f03969cbf680',
    tag: [
      'Android',
      'iOS',
      'React Native',
      'Mobile App Development',
      'Tutorial',
    ],
  },
  {
    title:
      'Crafting Accessible and Animated Buttons in React Native and Expo App',
    date: 'Dec 7, 2023-12-07',
    readingTime: '12',
    summary:
      'Button plays an important role in creating user-friendly interfaces. In this article, we explore how to create accessible and animated buttons in React Native and Expo app.',
    url: 'https://medium.com/devsorigin/crafting-accessible-and-animated-buttons-in-react-native-and-expo-app-a2633311c3bb',
    tag: ['React Native', 'Expo', 'Buttons', 'Tutorial'],
  },
  {
    title:
      'Building Your First Mobile App with React Native and Expo: A Comprehensive Guide',
    date: '2023-12-03',
    readingTime: '5',
    summary:
      'The landscape of mobile app development is evolving, and React Native and Expo are becoming increasingly popular tools in the industry. In this article, we explore how to build your first mobile app with React Native and Expo.',
    url: 'https://medium.com/devsorigin/building-your-first-mobile-app-with-react-native-and-expo-a-comprehensive-guide-249d2a61a265',
    tag: ['React Native', 'Expo', 'Tutorial'],
  },
  {
    title:
      'CSS Box Model Mastery: Crafting Intuitive User Interfaces Across Devices',
    date: '2023-12-02',
    readingTime: '6',
    summary:
      'The CSS box model is a fundamental concept in web development that defines the structure and layout of HTML elements. It comprises the width, height, padding, margin, and border of an element. In this article, we explore how to create intuitive user interfaces across devices using CSS box model.',
    url: 'https://medium.com/devsorigin/css-box-model-mastery-crafting-intuitive-user-interfaces-across-devices-bb5ebbd3661e',
    tag: ['CSS', 'Box Model', 'Tutorial'],
  },
  {
    title: 'Introduction to Swift: A Modern and Expressive Journey',
    date: '2023-11-30',
    readingTime: '4',
    summary:
      'Welcome to the vibrant world of Swift! Developed by Apple in 2014, Swift is not just a programming language; it is a companion on your everyday development journey.',
    url: 'https://medium.com/devsorigin/introduction-to-swift-a-modern-and-expressive-journey-8fa981017762',
    tag: ['Swift', 'Tutorial'],
  },
  {
    title:
      'Unlocking iOS Magic: A Beginner’s Guide to Swift Programming and Setting Up Your Development…',
    date: 'Nov 29, 2023-11-29',
    readingTime: '5',
    summary:
      'Swift programming is the key to creating magical applications for Apple devices and beyond. In this article, we explore how to get started with Swift programming and set up your development environment.',
    url: 'https://medium.com/devsorigin/unlocking-ios-magic-a-beginners-guide-to-swift-programming-and-setting-up-your-development-dddc901d62ee',
    tag: ['Swift', 'iOS', 'Tutorial'],
  },
  {
    title:
      'How to effectively utilize AI to master Semantic HTML for developing SEO-friendly web applications',
    date: '2023-11-05',
    readingTime: '6',
    summary:
      'Semantic HTML is a fundamental concept in web development. In this article, we will explore how to effectively utilize AI to master Semantic HTML for developing SEO-friendly web applications.',
    url: 'https://medium.com/devsorigin/how-to-effectively-utilize-ai-to-master-semantic-html-for-developing-seo-friendly-web-applications-3d7c1c51af1d',
    tag: ['HTML', 'Tutorial', 'SEO', 'AI', 'Web Development'],
  },
  {
    title:
      'Unleashing Your Web Development Potential in the Age of AI: Start from HTML and CSS',
    date: '2023-10-03',
    readingTime: '5',
    summary:
      'HTML and CSS are two of the most fundamental building blocks of the internet. HTML, which stands for HyperText Markup Language, is the standard markup language for creating web pages. CSS, which stands for Cascading Style Sheets, is the language that allows you to style your web pages.',
    url: 'https://medium.com/devsorigin/unleashing-your-web-development-potential-in-the-age-of-ai-start-from-html-and-css-768393c06eb6',
    tag: ['HTML', 'CSS', 'AI', 'Tutorial', 'Web Development'],
  },
  {
    title:
      'Best books for improving productivity and self-improvement from an Islamic perspective',
    date: '2023-08-30',
    readingTime: '3',
    summary:
      "Productivity books have become increasingly popular in today's fast-paced world.With so many demands on our time and attention, people are frequently seeking out the best books for improving productivity and self-improvement.",
    url: 'https://medium.com/muslimchecklist/best-books-for-improving-productivity-and-self-improvement-from-an-islamic-perspective-eb28ecadf1c6',
    tag: ['Productivity', 'Self Improvement', 'Book Review', 'Islam'],
  },
  {
    title: 'Become a React Native Mobile Application Developer',
    date: '2023-08-13',
    readingTime: '12',
    summary:
      'React Native is one of the most popular mobile development tools. In this article, we will explore how to become a React Native mobile application developer.',
    url: 'https://medium.com/devsorigin/become-a-react-native-mobile-application-developer-ca47f40ef7c3',
    tag: ['React Native', 'Expo', 'Mobile App Development', 'Roadmap'],
  },
  {
    title: 'Book Review: Love for Imperfect Things',
    date: '2023-08-12',
    readingTime: '4',
    summary: 'Life is a series of imperfect things. - H. P. Lovecraft',
    url: 'https://jaamaalxyz.medium.com/book-review-love-for-imperfect-things-ee715350c685',
    tag: ['Self Help', 'Self Improvement', 'Book Review'],
  },
  {
    title: 'Book Review: Deep Work',
    date: '2023-06-26',
    readingTime: '2',
    summary:
      'One of the most valuable skills in our economy is becoming increasingly rare.',
    url: 'https://jaamaalxyz.medium.com/book-review-deep-work-15e3395aa30c',
    tag: ['Self Help', 'Productivity', 'Book Review'],
  },
  {
    title: 'How to Generate PDF from html in React Native',
    date: '2022-09-07',
    readingTime: '5',
    summary:
      'Generating PDF based on different transaction is an important part of any retail applications. today we are going to show you how to generate PDF from html in React Native.',
    url: 'https://dev.to/jaamaalxyz/how-to-generate-pdf-from-html-in-react-native-oj0',
    tag: ['React Native', 'PDF', 'Tutorial'],
  },
  {
    title: 'Intro to SQL: Basic',
    date: '2022-09-07',
    readingTime: '3',
    summary:
      'SQL, short for Structured Query Language, is your gateway to relational databases.  It lets you create and manage data stored in tables in your database.',
    url: 'https://dev.to/jaamaalxyz/sql-basics-part-1-4n9m',
    tag: ['SQL', 'Database', 'Tutorial'],
  },
  {
    title: 'Create, Insert, Retrieve Data in SQL',
    date: '2021-08-31',
    readingTime: '3',
    summary:
      'SQL lets you manage data in three key steps: Create tables defining data structure, insert new records with values, and retrieve data from the database.',
    url: 'https://dev.to/jaamaalxyz/sql-basic-part-4-3di1',
    tag: ['SQL', 'Database', 'Tutorial'],
  },
  {
    title: 'Main Components of a Computer Systems',
    date: '2021-06-15',
    readingTime: '3',
    summary:
      'In the world of computers, hardware is the physical parts and software are the instructions that make the computer work properly.',
    url: 'https://dev.to/jaamaalxyz/main-components-of-a-computer-systems-3j4g',
    tag: ['Computer', 'Hardware', 'Software', 'System', 'Programming'],
  },
  {
    title: 'Filtering Data with SQL',
    date: '2020-12-22',
    readingTime: '5',
    summary:
      'SQL lets you filter data using the WHERE clause. This clause specifies conditions that rows must meet to be included in the results. You can filter based on equality, inequality, and more.',
    url: 'https://dev.to/jaamaalxyz/filtering-data-with-sql-3gp1',
    tag: ['SQL', 'Database', 'Filtering', 'Tutorial'],
  },
  {
    title: 'Basic Programming Terminology',
    date: '2020-06-10',
    readingTime: '2',
    summary:
      'Learn the lingo: an algorithm is the step-by-step plan, while a program is the actual code written in a specific programming language.',
    url: 'https://dev.to/jaamaalxyz/basic-programming-terminology-1gd3',
    tag: ['Programming', 'Terminology', 'Vocabulary'],
  },

  {
    title: '25 Common Frontend Developer Interview Q&A',
    date: '2019-01-08',
    readingTime: '8',
    summary:
      'Here is a list of 25 common frontend developer interview questions and answers that will help you prepare for your next interview.',
    url: 'https://dev.to/jaamaalxyz/25-common-frontend-developer-interview-qa-593d',
    tag: ['Interview', 'Q&A', 'Frontend', 'JavaScript'],
  },
  {
    title: 'Different types of Functions in JavaScript',
    date: '2018-11-03',
    readingTime: '6',
    summary:
      'JavaScript offers a toolbox of functions! Regular functions are your workhorses, arrow functions provide a shorthand for quick tasks and make your code more concise.',
    url: 'https://dev.to/jaamaalxyz/different-type-of-function-in-javascript-364l',
    tag: ['JavaScript', 'Functions', 'Tutorial'],
  },
];

export const LATEST_POSTS = ALL_POSTS.slice(0, 5);

export const TAGS = [
  ...new Set<string>(ALL_POSTS.map((post: PostDataType) => post.tag).flat()),
];
