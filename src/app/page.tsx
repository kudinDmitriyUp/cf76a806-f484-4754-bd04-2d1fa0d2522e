"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Building2, Calendar, Crown, Facebook, Instagram, Newspaper, Star, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "about" },
            { name: "Amenities", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxury Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Experience Luxury Beyond Compare"
          description="Discover our world-class amenities, exceptional service, and unforgettable stays at Grand Luxury Hotel"
          tag="5-Star Excellence"
          tagIcon={Award}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "about" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401433859-ymtg9c4u.jpg",
              imageAlt: "Luxury hotel room"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401434583-m6mhisni.jpg",
              imageAlt: "Hotel spa"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401435763-unb0htzn.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401436454-lfjwk4mu.jpg",
              imageAlt: "Luxury pool"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401437151-vwhejzhl.jpg",
              imageAlt: "Elegant lobby"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Grand Luxury Hotel, we redefine hospitality through exceptional service, elegant accommodations, and world-class amenities. Since our founding, we've been dedicated to creating unforgettable experiences that exceed every guest's expectations, making each stay a cherished memory."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Luxury Amenities & Services"
          description="Discover our exceptional range of premium amenities designed to enhance your stay"
          tag="World-Class"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          features={[
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401438885-tkklyhek.jpg",
              imageAlt: "Hotel concierge service",
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our award-winning spa featuring premium treatments and wellness programs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401439627-ktkb9err.jpg",
              imageAlt: "Luxury spa treatments",
              button: {
                text: "Book Treatment",
                href: "contact"
              }
            },
            {
              title: "Fine Dining Experience",
              description: "Savor culinary excellence at our restaurants featuring world-renowned chefs and exquisite international cuisine",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401440357-f0yji2o3.jpg",
              imageAlt: "Fine dining restaurant",
              button: {
                text: "View Menus",
                href: "contact"
              }
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your fitness routine in our fully equipped gym with personal training services available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401441024-xdwtklkm.jpg",
              imageAlt: "Hotel fitness center",
              button: {
                text: "Explore Gym",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Testimonials"
          description="Hear from our satisfied guests who experienced the luxury and excellence of Grand Luxury Hotel"
          tag="5-Star Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechCorp International",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401441829-t0abovex.png",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Manager",
              company: "Global Finance Ltd",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401442586-d9imafor.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "Creative Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401443479-20kq0wqi.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Entrepreneur",
              company: "StartupVentures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401444308-dzbv1ncu.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Travel Blogger",
              company: "Wanderlust Stories",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401445053-d7itdap0.jpg",
              imageAlt: "Lisa Thompson"
            },
            {
              id: "6",
              name: "James Wilson",
              role: "Business Consultant",
              company: "Strategic Partners",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401445846-5e4cqwby.jpg",
              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join executives and professionals from leading companies who choose Grand Luxury Hotel for their business travels"
          tag="Corporate Partners"
          tagIcon={Building2}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401446674-vj5pkeu1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401447516-9wff1s9y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401448208-7yuxkhst.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401448733-thd63aiu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401449260-ukef0wqq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401449743-a7prw6ii.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401450406-bwkcmlt1.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel News & Insights"
          description="Stay updated with the latest news, events, and insider tips from Grand Luxury Hotel"
          tag="Updates"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Wellness",
              title: "New Spa Treatments Now Available",
              excerpt: "Discover our latest collection of rejuvenating spa treatments designed to refresh your body and mind",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401450942-po5ysajd.jpg",
              imageAlt: "Spa treatment room",
              authorName: "Maria Santos",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401441829-t0abovex.png",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Dining",
              title: "Michelin-Star Chef Joins Our Team",
              excerpt: "Welcome our new executive chef who brings world-class culinary expertise to our restaurants",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401451642-iq2nxjp5.jpg",
              imageAlt: "Fine dining experience",
              authorName: "Chef Alessandro",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401442586-d9imafor.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Events",
              title: "Perfect Wedding Venues & Packages",
              excerpt: "Plan your dream wedding with our exclusive packages and stunning venues for your special day",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401452440-dr96vlzd.jpg",
              imageAlt: "Wedding ballroom",
              authorName: "Emma Clarke",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401443479-20kq0wqi.jpg",
              date: "10 Jan 2025"
            },
            {
              id: "4",
              category: "Travel",
              title: "Explore Local Attractions",
              excerpt: "Discover the best attractions and experiences near Grand Luxury Hotel with our insider's guide",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401453237-mufwrg8a.jpg",
              imageAlt: "City attractions",
              authorName: "Local Guide Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401444308-dzbv1ncu.jpg",
              date: "08 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Book Your Luxury Experience"
          description="Ready to experience the ultimate in luxury hospitality? Contact us today to reserve your stay or learn more about our premium amenities and services."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By booking with us, you agree to our reservation terms and cancellation policy."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763401453997-pqxx3nmg.jpg"
          imageAlt="Hotel reception desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Grand Luxury Hotel"
          copyrightText="© 2025 Grand Luxury Hotel. All rights reserved."
          columns={[
            {
              title: "Accommodations",
              items: [
                { label: "Luxury Suites", href: "about" },
                { label: "Executive Rooms", href: "about" },
                { label: "Presidential Suite", href: "about" }
              ]
            },
            {
              title: "Amenities",
              items: [
                { label: "Spa & Wellness", href: "feature" },
                { label: "Fine Dining", href: "feature" },
                { label: "Fitness Center", href: "feature" },
                { label: "Business Center", href: "feature" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "feature" },
                { label: "Room Service", href: "feature" },
                { label: "Valet Parking", href: "feature" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Events", href: "contact" },
                { label: "Guest Services", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/grandluxuryhotel",
              ariaLabel: "Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/grandluxuryhotel",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/grandluxuryhotel",
              ariaLabel: "Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}