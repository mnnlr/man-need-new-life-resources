const LanguageData = [
    {
        id: 0,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'JavaScript',
        text: 'JavaScript is a versatile and widely-used programming language that is primarily used to add interactivity to web pages. It is a client-side scripting language, meaning it runs on the user’s browser rather than on the server, allowing for dynamic and interactive web experiences. JavaScript can be used to create animations, validate forms, build games, and much more. It is also commonly used in conjunction with HTML and CSS to create modern and responsive web applications. JavaScript is known for its flexibility and ease of use, making it an essential skill for web developers.',
        cost:1000
    },
    {
        id: 1,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'React Js',
        text: "React.js is a JavaScript library developed by Facebook for building user interfaces, focusing on creating dynamic and interactive web applications with reusable UI components. It employs a component-based architecture, where the UI is broken down into small, self-contained units called components, each responsible for rendering a specific part of the user interface. React.js utilizes a virtual DOM (Document Object Model) to efficiently update the UI by only re-rendering components that have changed, resulting in improved performance and responsiveness. One of React's key features is its declarative nature, allowing developers to describe how the UI should look at any given time, and React takes care of updating the DOM to match this description.",
        cost:2000
    },
    {
        id: 2,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'Express Js',
        text: ' Express.js is a minimalist and flexible web application framework for Node.js, designed to simplify the process of building web applications and APIs. It provides a robust set of features for handling HTTP requests and responses, routing, middleware integration, and more, while maintaining a lightweight and unopinionated structure. Express.js allows developers to quickly set up server-side routes and define endpoint behaviors using intuitive syntax and conventions. Its middleware system enables the execution of functions before, after, or during the handling of HTTP requests, facilitating tasks such as authentication, logging, and error handling.',
        cost:1500
    },
    {
        id: 3,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'HTML',
        text: 'HTML, or HyperText Markup Language, is the standard markup language for creating and structuring web pages and web applications. It provides a set of tags and elements that define the structure and content of a webpage, including headings, paragraphs, links, images, forms, and more. HTML works in conjunction with other web technologies like CSS Cascading Style Sheets and JavaScript to create visually appealing and interactive web experiences.',
        cost:500
    },
    {
        id: 4,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'Node Js',
        text: "Node.js is a runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and provides a platform for building scalable and high-performance network applications. Node.js is particularly well-suited for building server-side applications, such as web servers, APIs, and real-time applications, due to its non-blocking, event-driven architecture ",
        cost:2500
    },
    {
        id: 5,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'CSS',
        text: ' CSS, or Cascading Style Sheets, is the design language of the web, allowing developers to control the presentation and layout of HTML elements across web pages. Unlike HTML, which defines the structure and content of a webpage, CSS focuses solely on styling, providing a way to customize the appearance of elements such as text, colors, fonts, spacing, and positioning. By using CSS rules, which consist of selectors targeting specific HTML elements and declarations defining their styles, developers can achieve consistent and visually appealing designs throughout a website. CSS enables the separation of content from presentation, promoting cleaner and more maintainable code.',
        cost:750
    },
    {
        id: 6,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'MongoDB',
        text: 'MongoDB is a popular open-source NoSQL database that stores data in flexible, JSON-like documents. It is designed to provide high performance, high availability, and easy scalability, making it an ideal choice for modern web applications. MongoDB uses a flexible schema, allowing developers to create and update records without having to define a strict structure upfront. It also supports powerful querying and indexing capabilities, enabling efficient data retrieval and analysis. MongoDB is commonly used in conjunction with Node.js, Express.js, and other technologies to build scalable and data-intensive applications.',
        cost:3000
    },
    {
        id:7,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'Angular Js',
        text: 'AngularJS is a JavaScript-based open-source front-end web application framework maintained by Google. It is designed to simplify the development and testing of single-page applications by providing a framework for client-side model-view-controller (MVC) and model-view-viewmodel (MVVM) architectures. AngularJS extends HTML with additional attributes and directives, allowing developers to create dynamic and interactive web applications with minimal code. It also provides built-in features for data binding, dependency injection, and routing, making it a powerful tool for building modern web applications.',
        cost:4000
    },
    {
        id: 8,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'Vue Js',
        text: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning developers can integrate Vue.js into existing projects and scale it up as needed. Vue.js provides a simple and flexible API for building interactive web applications, with a focus on the view layer. It features reactive data binding, composable components, and a virtual DOM for efficient rendering. Vue.js is known for its ease of use, performance, and versatility, making it a popular choice for developers building modern web applications.',
        cost:3500
    },
    {
        id: 9,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'Linux',
        text: 'Linux is an open-source operating system kernel that serves as the foundation for a variety of Unix-like operating systems. It is known for its stability, security, and flexibility, making it a popular choice for servers, embedded systems, and other computing environments. Linux distributions, or "distros," combine the Linux kernel with additional software and tools to create complete operating systems that can be installed on desktops, laptops, and servers. Linux is highly customizable and supports a wide range of software applications, making it a versatile platform for developers and users alike.',
        cost:5000
    },
    {
        id: 10,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'Apache',
        text: 'Apache is a popular open-source web server software that powers a large percentage of websites on the internet. It is known for its reliability, performance, and scalability, making it a preferred choice for hosting websites and web applications. Apache provides a robust set of features for serving static and dynamic content, handling HTTP requests, and supporting various programming languages and technologies. It also offers extensive configuration options and modules for customizing and extending its functionality. Apache is widely used in conjunction with other software, such as PHP, MySQL, and WordPress, to create powerful and feature-rich web environments.',
        cost:6000
    },
    {
        id: 11,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'MySQL',
        text: 'MySQL is an open-source relational database management system (RDBMS) that is widely used for storing and managing structured data. It is known for its reliability, performance, and scalability, making it a popular choice for web applications and other data-driven projects. MySQL uses a client-server architecture, where the database server handles data storage, retrieval, and manipulation, while client applications interact with the server using SQL queries. MySQL supports a wide range of features, including transactions, indexing, replication, and security, making it a versatile and powerful database solution.',
        cost:7000
    },
    {
        id: 12,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'PHP',
        text: 'PHP is a server-side scripting language designed for web development, but also used as a general-purpose programming language. It is known for its simplicity, flexibility, and ease of integration with other technologies, making it a popular choice for building dynamic and interactive web applications. PHP is commonly used to create dynamic web pages, process form data, interact with databases, and perform server-side tasks. It can be embedded within HTML code or run as a standalone script, providing developers with the flexibility to create a wide range of web applications.',
        cost:900       
    },
    {
        id: 13,
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388',
        title: 'Windows OS',
        text: 'Windows is a series of operating systems developed by Microsoft that are designed for personal computers, servers, and other computing devices. It is known for its user-friendly interface, broad compatibility with software and hardware, and extensive range of features and applications. Windows operating systems are widely used in homes, businesses, and educational institutions around the world, providing a familiar and reliable computing environment for users. Windows offers a range of editions and versions, each tailored to different user needs and preferences.',
        cost:2500
    }

]

export default LanguageData