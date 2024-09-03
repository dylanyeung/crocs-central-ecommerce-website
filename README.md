# Fullstack E-Commerce Application

A scalable and secure fullstack e-commerce platform built with modern web technologies, offering a seamless shopping experience for customers and a powerful administrative interface for product management. This project demonstrates expertise in full-stack development with a focus on performance, security, and cloud integration.

## Technology Stack

- **Backend**: Ruby on Rails 7
- **Frontend**: Tailwind CSS for responsive UI
- **Database**: PostgreSQL for reliable relational data management
- **Payments**: Stripe API for secure transactions
- **Realtime Updates**: Hotwire with Turbo and Stimulus for dynamic user interfaces
- **Authentication**: Devise for user and admin security

## AWS and Image Hosting

- **Scalable Media Storage**: Integrated AWS S3 for efficient image hosting, offloading media management from the primary server, ensuring fast access and high availability.
- **Active Storage**: Seamlessly manages file uploads with AWS S3, enhancing scalability and performance for high-traffic demands.

## Deployment and Hosting

- **Hosting**: Deployed on Render for scalable backend and frontend services.
- **CI/CD**: Continuous integration and deployment workflows for automated testing, building, and deployment.

## Key Technical Highlights

- **Turbo-Enhanced Navigation**: Fast page transitions and partial updates with Turbo Drive and Turbo Frames.
- **Stimulus Controllers**: Lightweight, unobtrusive JavaScript for interactive features.
- **Secure Payment Flow**: Robust payment handling with Stripe API integration.
- **Cloud-Optimized Media Management**: Scalable image hosting with AWS S3 to reduce server load and enhance performance.

## Features

### Customer-Facing Storefront

**Home Page Overview**  
The home page features a comprehensive layout with a navigation bar, a welcoming banner, and images showcasing different product categories. The navigation bar provides links to the products page, admin dashboard, and shopping cart, ensuring smooth navigation across the site. The banner welcomes users and sets the tone, while the product categories section helps users easily explore various offerings.

![Navbar, Welcome Banner, and Product Categories](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/home-top.png)

**Interactive Product Pages**  
Select sizes and add items to a persistent, local storage-based cart.

![KFC Crocs Product Page](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/kfc-crocs.png)  
![Jibbitz Product Page](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/jibbitz-page.png)  
![Shopping Cart](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/cart-page.png)

**Secure Checkout**  
Integrated with Stripe for secure payment processing and smooth checkout experience.

![Stripe Checkout](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/stripe-checkout.png)  
![Checkout Success](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/checkout-success.png)

**Order Management**  
Orders are created upon successful payment, with real-time status updates for fulfillment.

![Order Management Page](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/orders.png)

**Customer Testimonials**  
Showcases customer reviews to enhance trust and engagement with the brand.

![Testimonials Screenshot](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/home-mid.png)

**Newsletter Subscription and Footer**  
The footer includes a description of Crocs Central, quick navigation links, and contact details for customer support. Above the footer, there's a section to subscribe to the newsletter for exclusive deals and updates.

![Newsletter Subscription and Footer](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/home-bottom.png)

### Admin Dashboard for Product Management

**Admin Authentication**  
Secure admin panel access with Devise.

![Admin Login Screenshot](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/sign-in.png)

**Performance Dashboard**  
Key performance indicators (KPIs) like daily revenue, total sales, and a weekly revenue graph using `Chart.js`.

![Admin Dashboard Screenshot](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/dashboard.png)

**Product, Categories, and Order Management**  
Manage products with CRUD operations, image uploads, dynamic form validation, and stock management by size. Efficient category management with real-time validation.

![Product Creation](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/new-product.png)  
![Category Creation](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/new-category.png)  
![Stock Created Successfully](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/stock-created.png)

**Enhanced User Experience**  
Product search and pagination for efficient data handling.

![Product Search](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/product-search.png)  
![Product Page](https://raw.githubusercontent.com/dyeung2/ecom-platform/main/app/assets/images/products-page.png)

## Conclusion

This e-commerce platform showcases my skills in building robust, scalable web applications using modern technologies like Ruby on Rails, Hotwire, AWS S3, and Stripe. It highlights my proficiency in full-stack development, cloud integration, and creating user-focused, secure, and performant web applications.
