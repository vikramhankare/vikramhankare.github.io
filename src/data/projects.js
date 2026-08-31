export const projects = [
  {
    number: "01",
    title: "Optimized Document Clustering - Mtech",

    description: [
      "Designed and implemented a **novel document clustering framework combining Modified K-Means with Multi-objective Black Hole Optimization (DC-MOHBHO)** to improve clustering quality for high-dimensional text datasets.",

      "Built a complete **NLP preprocessing pipeline** incorporating **tokenization, stop-word removal, TF-IDF vectorization, and PCA-based dimensionality reduction** to generate optimized feature representations.",

      "Enhanced the traditional K-Means algorithm using **MaxMin centroid initialization, cosine similarity**, and adaptive cluster selection based on the average of the **Elbow Method and Silhouette Score**.",

      "Formulated a **multi-objective fitness function** that simultaneously optimized **Purity Index and Silhouette Score**, enabling the **Black Hole Optimization** algorithm to search for high-quality clustering solutions.",

      "Evaluated the proposed model on **five benchmark datasets including News20, Reuters, Doc50, Iris, and Wine**, demonstrating consistent improvements over conventional K-Means and multiple metaheuristic clustering approaches.",

      "Achieved **superior clustering performance** across benchmark datasets by outperforming **K-Means++, PSO, GA, and Firefly-based** clustering techniques in both external (**Purity**) and internal (**Silhouette**) evaluation metrics.",
    ],

    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "PCA",
      "K-Means",
      "Black Hole Optimization",
      "NumPy",
      "Scikit-learn",
    ],

    github: null,
    live: null,
  },

  {
    number: "02",
    title: "CommerceSphere - Backend",

    description: [
      "Architected and developed a **scalable microservices-based E-Commerce platform** with **secure authentication, authorization, product catalog, payment gateway integration, service discovery, and notification services**.",

      "Deployed and managed the platform on **AWS Elastic Beanstalk**, integrating **Amazon RDS** for reliable data persistence and **CloudWatch** for application logging and performance monitoring.",

      "Engineered an **event-driven email notification service using Apache Kafka**, enabling asynchronous communication and improving scalability across distributed services.",

      "Reduced API response latency from approximately **500 ms to 20 ms** by implementing **Redis-based caching** for high-frequency static data, significantly improving application performance.",
    ],

    technologies: [
      "Spring Boot",
      "MySQL",
      "AWS",
      "Spring Cloud",
      "Hibernate",
      "Redis",
      "Razor and Stripe Payment Gateway",
      "JUnit",
      "Kafka",
    ],

    github: null,
    live: null,
  },
];