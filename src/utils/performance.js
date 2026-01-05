// Performance monitoring utilities

export const measurePerformance = () => {
  if ("performance" in window) {
    // Measure page load time
    window.addEventListener("load", () => {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);

      // Send to analytics if needed
      if (window.gtag) {
        window.gtag("event", "page_load_time", {
          event_category: "Performance",
          event_label: "Load Time",
          value: loadTime,
        });
      }
    });

    // Measure First Contentful Paint
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === "first-contentful-paint") {
            console.log(`First Contentful Paint: ${entry.startTime}ms`);
          }
        }
      });
      observer.observe({ entryTypes: ["paint"] });
    }
  }
};

// Lazy loading utility for images
export const lazyLoadImages = () => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Web Vitals measurement
export const measureWebVitals = () => {
  if ("web-vitals" in window) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};
