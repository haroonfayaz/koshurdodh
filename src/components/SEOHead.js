import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title = "Koshur Dodh - Fresh Dairy Products from Kashmir Valley",
  description = "Premium fresh milk, dairy products delivered daily in Srinagar. 100% pure, farm-fresh milk from Kashmir valley farms. Order now for home delivery.",
  keywords = "fresh milk Srinagar, dairy products Kashmir, milk delivery, pure milk, Kashmir dairy, home delivery milk, organic milk",
  image = "/logo192.png",
  url = "https://koshurdodh.com",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Koshur Dodh" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Koshur Dodh",
          description:
            "Fresh dairy products delivery service in Srinagar, Kashmir",
          url: "https://koshurdodh.com",
          telephone: "+91-6005141549",
          email: "Koshurdodh@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ninety feet road, near Moomin steels, Illahibagh",
            addressLocality: "Srinagar",
            addressRegion: "Jammu and Kashmir",
            postalCode: "190020",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "34.0837",
            longitude: "74.7973",
          },
          openingHours: "Mo-Su 06:00-20:00",
          priceRange: "₹₹",
          servesCuisine: "Dairy Products",
          serviceArea: {
            "@type": "City",
            name: "Srinagar",
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
