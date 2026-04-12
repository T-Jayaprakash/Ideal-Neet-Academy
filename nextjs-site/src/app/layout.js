import "./globals.css";

export const metadata = {
  title: "Ideal NEET Academy | Best NEET Coaching Centre in Trichy",
  description:
    "Ideal NEET Academy in Trichy offers the best NEET coaching for Class 11, 12, and repeaters. Get expert faculty, high-quality material, and proven results. Enroll now for NEET 2025!",
  keywords:
    "NEET coaching Trichy, Best NEET Academy Tiruchirappalli, NEET repeaters coaching Trichy, top neet coaching in tamil nadu, Ideal NEET Academy Trichy, NEET 2025 preparation",
  openGraph: {
    title: "Best NEET Coaching in Trichy | Ideal NEET Academy",
    description:
      "Join Ideal NEET Academy for expert guidance and results that speak. Start your medical journey today.",
    type: "website",
    url: "https://idealneetacademy.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://idealneetacademy.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ideal NEET Academy",
              description:
                "Trichy's Most Trusted NEET Coaching Academy in Tamil Nadu.",
              image: "https://idealneetacademy.com/images/neet_logo.jpeg",
              "@id": "https://idealneetacademy.com/",
              url: "https://idealneetacademy.com/",
              telephone: "+91 7358603244",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "3rd floor, Bharath Shopping Mall, EVR Rd, opp. to GH, Puthur, Tennur",
                addressLocality: "Tiruchirappalli",
                addressRegion: "TN",
                postalCode: "620017",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.8282,
                longitude: 78.6868,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.facebook.com/IdealNEETAcademy",
                "https://www.instagram.com/IdealNEETAcademy",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
