import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./feature.css";

const BlogFeatured = () => {
  const featuredPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
      title: "How Predictive Analytics is Transforming eCommerce Logistics",
      excerpt:
        "Discover how AI-driven analytics empower sellers to reduce costs, improve delivery speed, and eliminate shipping inefficiencies.",
      author: "By Deepak Sharma",
      date: "Feb 18, 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1000&q=80",
      title: "Top 5 Strategies to Reduce RTO in 2026",
      excerpt:
        "Learn the proven techniques logistics experts use to cut Return-to-Origin losses and enhance customer experience.",
      author: "By Rahul Verma",
      date: "Feb 12, 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1000&q=80",
      title: "The Future of Fulfillment: Automation and Smart Warehousing",
      excerpt:
        "Explore how robotics, AI, and real-time inventory systems are revolutionizing the logistics and fulfillment landscape.",
      author: "By Priya Singh",
      date: "Feb 5, 2026",
    },
  ];

  return (
    <section className="blog-featured-section">
      <div className="container d-flex flex-column">
        {/* SECTION HEADER */}
        <motion.h2
          className="featured-heading text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured & Trending Articles
        </motion.h2>

        <div className="row justify-content-center">
          {featuredPosts.map((post, index) => (
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="blog-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="blog-img-wrap">
                  <img src={post.image} alt={post.title} className="blog-img" />
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{post.author}</span> • <span>{post.date}</span>
                  </div>
                  <button className="read-more-btn">Read More →</button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
