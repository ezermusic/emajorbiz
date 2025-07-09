/* Base Styles */
body {
font-family: 'Open Sans', sans-serif;
color: #333;
line-height: 1.6;
margin: 0;
padding: 0;
background-color: #FFFFFF;
}

a {
text-decoration: none;
color: #084B83;
transition: color 0.3s ease;
}

a:hover {
color: #4FB3E8;
}

h1, h2, h3 {
font-family: 'Montserrat', sans-serif;
color: #084B83;
margin-top: 1.5em;
margin-bottom: 0.5em;
}

/* Header Styles */
header {
background-color: #F5F5F5;
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ddd;
}

.logo a {
font-size: 1.5rem;
font-weight: bold;
}

nav.desktop-nav ul {
list-style: none;
padding: 0;
margin: 0;
display: flex;
}

nav.desktop-nav ul li {
margin-left: 1.5rem;
}

nav.desktop-nav ul li a {
color: #333;
padding: 0.5rem 0;
position: relative;
overflow: hidden; /* For underline animation */
}

nav.desktop-nav ul li a.active {
color: #084B83;
font-size: 1.1rem; /* Size increase /
animation: blink 1s infinite alternate; / Blinking effect */
}

nav.desktop-nav ul li a.active::before {
content: '';
position: absolute;
left: 0;
bottom: -2px;
width: 100%;
height: 2px;
background-color: #4FB3E8; /* Underline color /
transform: scaleX(1); / Initial state of underline */
transition: transform 0.3s ease;
}

nav.desktop-nav ul li a:not(.active)::before {
content: '';
position: absolute;
left: 0;
bottom: -2px;
width: 100%;
height: 2px;
background-color: #4FB3E8; /* Underline color /
transform: scaleX(0); / Initially hidden */
transition: transform 0.3s ease;
}

nav.desktop-nav ul li a:hover::before {
transform: scaleX(1);
}

@keyframes blink {
from { opacity: 1; }
to { opacity: 0.7; }
}

.search-bar {
display: flex;
}

.search-bar input {
padding: 0.5rem;
border: 1px solid #ccc;
border-radius: 5px 0 0 5px;
}

.search-bar button {
background-color: #084B83;
color: white;
border: none;
padding: 0.5rem 1rem;
border-radius: 0 5px 5px 0;
cursor: pointer;
transition: background-color 0.3s ease;
}

.search-bar button:hover {
background-color: 1  #4FB3E8;
}   
 1. 
github.com
github.com

.social-icons a {
font-size: 1.2rem;
margin-left: 0.8rem;
color: #555;
}

.social-icons a:hover {
color: #084B83;
}

.mobile-nav-toggle {
display: none;
flex-direction: column;
cursor: pointer;
}

.mobile-nav-toggle .bar {
width: 25px;
height: 3px;
background-color: #333;
margin: 3px 0;
transition: transform 0.3s ease;
}

nav.mobile-nav {
display: none;
position: absolute;
top: 100%;
left: 0;
width: 100%;
background-color: #F5F5F5;
border-bottom: 1px solid #ddd;
z-index: 10;
padding: 1rem;
}

nav.mobile-nav ul {
list-style: none;
padding: 0;
margin: 0;
}

nav.mobile-nav ul li {
margin-bottom: 1rem;
}

nav.mobile-nav ul li a {
display: block;
padding: 0.7rem 0;
color: #333;
border-bottom: 1px solid #eee;
}

nav.mobile-nav ul li a.active {
color: #084B83;
font-weight: bold;
}

.mobile-search-bar {
margin-top: 1rem;
display: flex;
}

.mobile-search-bar input {
flex-grow: 1;
padding: 0.7rem;
border: 1px solid #ccc;
border-radius: 5px 0 0 5px;
}

.mobile-search-bar button {
background-color: #084B83;
color: white;
border: none;
padding: 0.7rem 1rem;
border-radius: 0 5px 5px 0;
cursor: pointer;
transition: background-color 0.3s ease;
}

.mobile-social-icons {
margin-top: 1rem;
display: flex;
justify-content: center;
}

.mobile-social-icons a {
font-size: 1.5rem;
margin: 0 0.5rem;
color: #555;
}

/* Footer Styles (Basic) */
footer {
background-color: #084B83;
color: #fff;
padding: 2rem;
text-align: center;
}

.footer-logo {
font-size: 1.5rem;
font-weight: bold;
margin-bottom: 1rem;
}

.quick-links ul, .contact-info ul {
list-style: none;
padding: 0;
margin: 0;
}

.quick-links a, .contact-info a {
color: #fff;
}

.copyright, .privacy-terms {
margin-top: 1rem;
font-size: 0.8rem;
}

/* Responsive Design */
@media (max-width: 767px) {
nav.desktop-nav, .search-bar, .social-icons {
display: none;
}
.mobile-nav-toggle {
display: flex;
}
header {
justify-content: space-between;
}
.logo a {
font-size: 1.2rem;
}
}

/* Scroll Animations (Example - more would be added) */
.fade-in {
opacity: 0;
transition: opacity 0.5s ease-in-out;
}

.fade-in.active {
opacity: 1;
}

/* Hover Effects (Example - more would be added) */
.post-card {
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card:hover {
transform: translateY(-5px);
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
2. blog-style.css (Specific Styles for the Blog Post Template):

This file would contain styles unique to the blog post layout.

.blog-post {
padding: 2rem;
max-width: 960px;
margin: 2rem auto;
background-color: #fff;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.blog-post .hero {
text-align: center;
margin-bottom: 2rem;
}

.blog-post .hero h1 {
margin-bottom: 0.5rem;
}

.blog-post .hero .meta {
color: #777;
font-size: 0.9rem;
margin-bottom: 1rem;
}

.blog-post .embedded-video {
position: relative;
width: 100%;
padding-bottom: 56.25%; /* 16:9 aspect ratio */
overflow: hidden;
margin-bottom: 1.5rem;
}

.blog-post .embedded-video iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;
}

.blog-post .article-content h2,
.blog-post .article-content h3 {
margin-top: 2rem;
}

.blog-post .article-content ul {
list-style: disc;
margin-left: 1.5rem;
margin-bottom: 1rem;
}

.blog-post .article-content li {
margin-bottom: 0.5rem;
}

.blog-post .related-posts {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 1rem;
margin-top: 2rem;
}

.blog-post .related-posts .post-card {
border: 1px solid #eee;
border-radius: 5px;
overflow: hidden;
}

.blog-post .related-posts .post-card a {
display: block;
padding: 1rem;
color: #333;
}

.blog-post .related-posts .post-card img {
width: 100%;
height: auto;
display: block;
margin-bottom: 0.5rem;
}

.blog-post .comment-section {
margin-top: 3rem;
padding-top: 2rem;
border-top: 1px solid #eee;
}

/* Responsive adjustments for blog post */
@media (max-width: 767px) {
.blog-post {
padding: 1rem;
margin: 1rem;
}
.blog-post .related-posts {
grid-template-columns: 1fr;
}
}
3. script.js (JavaScript Functionality):

This file would handle dynamic behaviors, such as mobile navigation, scroll animations, and potentially navigation highlighting.

document.addEventListener('DOMContentLoaded', function() {
// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileNavToggle && mobileNav) {
    mobileNavToggle.addEventListener('click', function() {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
        this.classList.toggle('open'); // Optional: Add class for animated toggle
    });
}

// Navigation Highlighting (Conceptual - would need to be more dynamic based on current page)
const navLinks = document.querySelectorAll('nav.desktop-nav a');
const currentPage = window.location.pathname.split('/').pop(); // Get the last part of the URL

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// Scroll Animations (Basic Example)
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the element is visible
});

fadeElements.forEach((el) => observer.observe(el));

// More JavaScript functionality would be added here for other interactions
});