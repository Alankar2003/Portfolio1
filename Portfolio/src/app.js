import React, { useState, useEffect } from 'react';

// Importing lucide-react for icons
import { Mail, Phone, Instagram, Linkedin, Github, ExternalLink, GraduationCap, Briefcase, Award, Lightbulb, ChevronRight } from 'lucide-react';

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('home'); // State to track active section for navigation
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Effect to update active section based on scroll position - simple version
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'skills', 'portfolio', 'certifications']; // Removed 'contact'
      let currentActive = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is in the viewport (or close to the top)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Main container with a light gray background matching the screenshots
    <div className="min-h-screen bg-[#E0E0E0] font-inter text-gray-800">
      {/* Navigation Bar - Simple fixed nav for now, focusing on content replication */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md bg-opacity-95 backdrop-blur-sm hidden">
        {/* This navigation is hidden for now to prioritize the screenshot layout.
            You can uncomment and adapt the previous navigation component if you want a top nav bar. */}
      </nav>

      {/* Main Content Area */}
      <main className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Home/About Me Section - Replicating image_1a47e0.png */}
        <section id="home" className="flex flex-col lg:flex-row bg-[#C0C0C0] rounded-xl shadow-lg overflow-hidden mb-8 p-6 lg:p-0">
          {/* Left Column: Profile Picture & Contact Info */}
          <div className="lg:w-1/3 flex flex-col items-center justify-center p-6 lg:p-10 text-center bg-white rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
            <img
              src="https://drive.google.com/file/d/1KzZ-Xwc8DR3okK2JAXikC1-oqyR_3C3k/view?usp=sharing" // REPLACE THIS WITH YOUR IMAGE URL
              alt="Alankar Gondikar"
              className="w-44 h-44 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/180x180/667EEA/FFFFFF?text=Alankar"; }}
            />
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Alankar Gondikar</h1>
            <p className="text-lg text-gray-700 mb-6">MBA'26 | Digital Marketing</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-gray-700">
                <Mail className="w-6 h-6 mr-3 text-gray-600" />
                <a href="mailto:alankargondikar2003@gmail.com" className="hover:underline">alankargondikar2003@gmail.com</a>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Mail className="w-6 h-6 mr-3 text-gray-600" />
                <a href="mailto:alankar.gondikar_2026@woxsen.edu.in" className="hover:underline">alankar.gondikar_2026@woxsen.edu.in</a>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Phone className="w-6 h-6 mr-3 text-gray-600" />
                <span>+91 9505553286</span>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1UyVA-bvNLnnKnxmvggq3HBb2A5E8MXrC/view?usp=sharing" // REPLACE THIS WITH YOUR RESUME URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-md transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Right Column: Bio and Social Links */}
          <div className="lg:w-2/3 p-6 lg:p-10 flex flex-col justify-between text-gray-800">
            <div className="flex justify-end mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold mr-4">Get Social</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                  <Instagram className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                  <Linkedin className="w-7 h-7" />
                </a>
                {/* Added GitHub as per suggestion */}
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                  <Github className="w-7 h-7" />
                </a>
              </div>
            </div>

            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">Hi!</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I'm Alankar Gondikar, an MBA candidate at Woxsen University. As a <span className="font-bold">Digital Marketing Intern</span> at Adroit Infoactive Services, I built and
              deployed a WhatsApp chatbot to streamline client communication, audited websites and social media channels to uncover UX and SEO
              opportunities, and delivered actionable insights that boosted engagement and improved conversion rates. My academic projects
              include launching "ArbiQ," a self-built brand where I designed the website and set up Google Ads campaigns, reflect my ability to blend
              creative storytelling with analytical rigor. Certified in HubSpot <span className="font-bold">Inbound Marketing</span> and <span className="font-bold">IBM Artificial Intelligence</span>, I thrive at the
              intersection of traditional strategy and AI-driven innovation. As <span className="font-bold">Social
              Media & Content Head</span> for <span className="font-bold">CrowdCore</span> (Marketing Club) at Woxsen, I
              lead content initiatives that amplify brand visibility and foster
              community engagement. Fluent in <span className="font-bold">English, Hindi, Telugu, and
              Marathi</span>, I'm committed to leveraging my diverse skill set and
              collaborative spirit to drive measurable growth—and I'd love to
              connect to explore how we can work together.
            </p>
          </div>
        </section>

        {/* Education Section - Replicating image_1a47bb.png */}
        <section id="education" className="bg-[#C0C0C0] rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education</h2>
          <div className="flex flex-col md:flex-row justify-between items-center relative py-4">
            {/* Horizontal line for timeline on desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-400 z-0 mx-16"></div>

            {/* Education Items */}
            <EducationItem
              logo="https://placehold.co/100x100/1A237E/FFFFFF?text=AV" // Placeholder for Amrita Vidyalayam
              title="High School"
              institution="Amrita Vidyalayam CBSE"
              years="2007-2019"
            />
            <ChevronRight className="hidden md:block w-8 h-8 text-gray-600 z-10 mx-4" />
            <EducationItem
              logo="https://placehold.co/100x100/4CAF50/FFFFFF?text=CMS" // Placeholder for CMS
              title="Intermediate - CEC"
              institution="CMS Commerce Junior College TSBIE"
              years="2019-2021"
            />
            <ChevronRight className="hidden md:block w-8 h-8 text-gray-600 z-10 mx-4" />
            <EducationItem
              logo="https://placehold.co/100x100/FFC107/333333?text=Badruka" // Placeholder for Badruka
              title="UG - B.Com (Hons.)"
              institution="Badruka College of Commerce Osmania University"
              years="2021-2024"
            />
            <ChevronRight className="hidden md:block w-8 h-8 text-gray-600 z-10 mx-4" />
            <EducationItem
              logo="https://placehold.co/100x100/7B1FA2/FFFFFF?text=WU" // Placeholder for Woxsen
              title="PG - MBA"
              institution="Woxsen School of Business Woxsen University"
              years="2024-2026"
            />
          </div>
        </section>

        {/* Experience & Involvements Section - Replicating image_1a477b.png */}
        <section id="experience" className="bg-[#C0C0C0] rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <h2 className="text-4xl font-bold text-center text-gray-900">Experience</h2>
            <h2 className="text-4xl font-bold text-center text-gray-900">Involvements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExperienceCard
              logo="https://placehold.co/80x80/3F51B5/FFFFFF?text=AD" // Placeholder for Adroit
              title="Digital Marketing Intern"
              company="Adroit Infoactive Solutions"
              duration="2nd June 2025 – 2nd August 2025"
              location="Hyderabad, Telangana, India"
            />
            <ExperienceCard
              logo="https://placehold.co/80x80/F44336/FFFFFF?text=PRME" // Placeholder for PRME
              title="Mentee"
              company="PRME Mentorship Programme"
              duration="May 2025 – July 2025"
              isInvolvement={true}
            />
            <ExperienceCard
              logo="https://placehold.co/80x80/2196F3/FFFFFF?text=WU" // Placeholder for Woxsen Sports
              title="Sports Coordinator"
              company="Woxsen University Sports Academy"
              duration="Part Time August 2024 - October 2024"
              location="Hyderabad, Telangana, India"
            />
            <ExperienceCard
              logo="https://placehold.co/80x80/FF9800/FFFFFF?text=CC" // Placeholder for CrowdCore
              title="Social Media & Content Head"
              company="CrowdCore (Woxsen University Marketing Club)"
              duration="March 2025 - Present"
              isInvolvement={true}
            />
          </div>
        </section>

        {/* Skills Section - Added as per suggestion */}
        <section id="skills" className="bg-[#C0C0C0] rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard title="Digital Marketing" skills={['SEO/SEM', 'Content Marketing', 'Social Media Marketing', 'Email Marketing', 'Google Ads', 'Analytics']} />
            <SkillCard title="Tools & Platforms" skills={['HubSpot', 'Canva', 'Google Analytics', 'Google Search Console', 'Meta Business Suite', 'MS Office']} />
            <SkillCard title="Soft Skills" skills={['Communication', 'Teamwork', 'Problem-Solving', 'Creativity', 'Adaptability', 'Leadership']} />
          </div>
        </section>

        {/* Portfolio Section (Projects) - Replicating image_1a4479.jpg, image_1a443d.png, image_1a43e2.jpg */}
        <section id="portfolio" className="bg-[#C0C0C0] rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Portfolio</h2>

          {/* Starbucks Project */}
          <ProjectDetail
            title="Starbucks: Seasonal & Sustainability Campaigns (Concept Pitch)"
            description="Conceptual project for academic purposes. Starbucks is a registered trademark of Starbucks Corporation. All assets used under fair use for education."
            sections={[
              {
                heading: "The Challenge",
                content: (
                  <>
                    <p className="mb-4">Starbucks needed to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Drive summer sales for new seasonal beverages.</li>
                      <li>Strengthen brand loyalty through sustainability initiatives.</li>
                      <li>Engage Gen Z/millennials on social media.</li>
                    </ul>
                  </>
                ),
                image: "https://placehold.co/300x200/A78BFA/FFFFFF?text=Cups", // Placeholder for cups image
                imageDescription: "Starbucks introducing a limited-edition reusable cup with nature-inspired patterns to promote sustainability.",
                sideImage: "https://placehold.co/200x150/8B5CF6/FFFFFF?text=UGC+Collage", // Placeholder for UGC collage
                sideImageDescription: "A UGC contest ad post - A collage of customer-submitted photos"
              },
              {
                heading: "The Solution",
                content: (
                  <>
                    <p className="mb-4"><span className="font-semibold">Summer Sip Fest:</span></p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>A UGC-driven Instagram/X campaign promoting Mango Watermelon Refreshers & Iced Coconut Lattes through limited-time offers, influencer collabs, and vibrant visual storytelling.</li>
                    </ul>
                    <p className="mt-4 mb-4"><span className="font-semibold">Green Starbucks Challenge:</span></p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>A year-round sustainability initiative using educational content, reusable cup rewards, and NGO partnerships to support Starbucks’ 2030 carbon-neutral goals.</li>
                    </ul>
                  </>
                ),
                image: "https://placehold.co/300x200/EC4899/FFFFFF?text=Drinks", // Placeholder for drinks image
                imageDescription: "Instagram carousel introducing new drinks. CTA encouraged UGC with #SummerSipFest",
                sideImage: "https://placehold.co/200x150/10B981/FFFFFF?text=Frappe", // Placeholder for Frappe image
                sideImageDescription: "" // No specific description in the screenshot
              },
              {
                heading: "Impact & Engagement", // This heading is implied from the content
                content: (
                  <>
                    <div className="flex flex-col md:flex-row items-start md:space-x-8 mb-8">
                      <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                          src="https://placehold.co/300x300/3B82F6/FFFFFF?text=Testimonial" // Placeholder for customer testimonial
                          alt="Customer Testimonial"
                          className="rounded-lg shadow-md mb-2 w-full"
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/3B82F6/FFFFFF?text=Testimonial"; }}
                        />
                        <p className="text-sm text-gray-600">Starbucks shares a customer testimonial post made by a loyal customer holding the recently launched Limited Edition reusable cup at a park. Caption: "Join @adelinepalmerston – 50 Cups Saved and Counting!"</p>
                      </div>
                      <div className="md:w-1/2">
                        <img
                          src="https://placehold.co/400x250/60A5FA/FFFFFF?text=Infographic" // Placeholder for infographic
                          alt="Infographic"
                          className="rounded-lg shadow-md mb-2 w-full"
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/60A5FA/FFFFFF?text=Infographic"; }}
                        />
                        <p className="text-sm text-gray-600">An X (Twitter) and a LinkedIn post about a minimalist graphic showing "How 1 Reusable Cup Reduces Waste" with icons (e.g., trees, landfills). To increase awareness about the positive impact reusable cups have on the environment. Caption: Every Cup Counts – Your Impact with Reusables</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:space-x-8">
                      <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                          src="https://placehold.co/300x200/93C5FD/FFFFFF?text=Poll" // Placeholder for poll image
                          alt="Instagram Story Poll"
                          className="rounded-lg shadow-md mb-2 w-full"
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/93C5FD/FFFFFF?text=Poll"; }}
                        />
                        <p className="text-sm text-gray-600">Starbucks posts an interactive Instagram Story-style poll. Caption: Take the Pledge – Vote Now!</p>
                      </div>
                      <div className="md:w-1/2 flex items-center justify-center">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-md transform hover:scale-105">
                          View the entire project
                        </a>
                      </div>
                    </div>
                  </>
                ),
                image: null, // No main image for this section in the screenshot
                imageDescription: null,
                sideImage: null,
                sideImageDescription: null
              }
            ]}
          />
          {/* Add more ProjectDetail components for other projects if you have them */}
        </section>

        {/* Certifications Section - Replicating image_1a43bf.png */}
        <section id="certifications" className="bg-[#C0C0C0] rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CertificationCard
              logo="https://placehold.co/80x80/FF7A59/FFFFFF?text=HS" // Placeholder for HubSpot
              title="Inbound Marketing"
              issuer="HubSpot Academy"
              credentialLink="#"
            />
            <CertificationCard
              logo="https://placehold.co/80x80/006699/FFFFFF?text=IBM" // Placeholder for IBM
              title="Introduction to Data Analytics"
              issuer="IBM via. Coursera"
              credentialLink="#"
            />
            <CertificationCard
              logo="https://placehold.co/80x80/800080/FFFFFF?text=UVA" // Placeholder for UVA
              title="Design Thinking for Innovation"
              issuer="University of Virginia via. Coursera"
              credentialLink="#"
            />
            <CertificationCard
              logo="https://placehold.co/80x80/4B0082/FFFFFF?text=NU" // Placeholder for Northwestern
              title="Leadership Communication: Storytelling"
              issuer="Northwestern University via. Coursera"
              credentialLink="#"
            />
            <CertificationCard
              logo="https://placehold.co/80x80/006699/FFFFFF?text=IBM" // Placeholder for IBM
              title="Introduction to Artificial Intelligence (AI)"
              issuer="IBM via. Coursera"
              credentialLink="#"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center mt-8">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Alankar Gondikar. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Designed with inspiration from Canva, Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

// Helper component for Education Items (circular with text)
const EducationItem = ({ logo, title, institution, years }) => (
  <div className="flex flex-col items-center text-center relative z-10 md:w-1/4 px-2 mb-8 md:mb-0">
    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center mb-4 shadow-md overflow-hidden border-2 border-gray-300">
      <img
        src={logo}
        alt={institution}
        className="w-full h-full object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/CCCCCC/333333?text=Logo"; }}
      />
    </div>
    <p className="text-sm font-semibold text-gray-700 mb-1">{title}</p>
    <p className="text-base font-medium text-gray-900">{institution}</p>
    <p className="text-sm text-gray-600">{years}</p>
  </div>
);

// Helper component for Experience/Involvement Cards
const ExperienceCard = ({ logo, title, company, duration, location, isInvolvement = false }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <img
        src={logo}
        alt={company}
        className="w-16 h-16 rounded-full mr-4 object-cover border border-gray-200"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/CCCCCC/333333?text=Logo"; }}
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">{company}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-2">{duration}</p>
    {location && <p className="text-gray-600">{location}</p>}
  </div>
);

// Helper component for Skill Cards (newly added)
const SkillCard = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
      <Lightbulb className="w-6 h-6 mr-2 text-gray-700" /> {title}
    </h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

// Helper component for Project Detail Sections
const ProjectDetail = ({ title, description, sections }) => (
  <div className="bg-white p-8 rounded-xl shadow-md mb-12">
    <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
    <p className="text-lg text-gray-700 mb-8 text-center">{description}</p>

    {sections.map((section, index) => (
      <div key={index} className="mb-10 last:mb-0 p-6 rounded-lg bg-gray-50 shadow-inner">
        {section.heading && <h4 className="text-2xl font-semibold text-gray-800 mb-6">{section.heading}</h4>}
        <div className="flex flex-col md:flex-row md:space-x-8 items-start">
          <div className="md:w-2/3">
            {section.content}
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex flex-col items-center space-y-6">
            {section.image && (
              <div className="text-center">
                <img
                  src={section.image}
                  alt={section.imageDescription || "Project Image"}
                  className="rounded-lg shadow-md mb-2 w-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Project+Image"; }}
                />
                {section.imageDescription && <p className="text-sm text-gray-600">{section.imageDescription}</p>}
              </div>
            )}
            {section.sideImage && (
              <div className="text-center">
                <img
                  src={section.sideImage}
                  alt={section.sideImageDescription || "Side Project Image"}
                  className="rounded-lg shadow-md mb-2 w-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/CCCCCC/333333?text=Side+Image"; }}
                />
                {section.sideImageDescription && <p className="text-sm text-gray-600">{section.sideImageDescription}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Helper component for Certification Cards
const CertificationCard = ({ logo, title, issuer, credentialLink }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <img
        src={logo}
        alt={issuer}
        className="w-16 h-16 rounded-full mr-4 object-cover border border-gray-200"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/CCCCCC/333333?text=Logo"; }}
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">{issuer}</p>
      </div>
    </div>
    <a
      href={credentialLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
    >
      See Credentials <ExternalLink className="w-4 h-4 ml-1" />
    </a>
  </div>
);

export default App;
