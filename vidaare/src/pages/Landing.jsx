import { useState } from "react";
import Header from "../components/header/Header";
import FeatureCard from "../components/features/FeatureCard";
import Feature1 from "../assets/images/LandingPage/LandingPage_Feature1.png";
import Feature2 from "../assets/images/LandingPage/LandingPage_Feature2.png";
import Feature3 from "../assets/images/LandingPage/LandingPage_Feature3.png";
import Footer from "../components/footer/Footer";
import EmailModal from "../components/modals/EmailModal";
import FeatureModal from "../components/modals/FeatureModal";

export default function Landing() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      title: "Go Live from One Platform",
      description:
        "Seamlessly broadcast live across multiple social media platforms. With Vidaare, you can go live on Facebook, Instagram, YouTube, LinkedIn, TikTok, and Twitter all at once. This feature ensures that your audience across different platforms can engage with your live content in real time, maximizing your reach and impact without the hassle of managing multiple streams.",
      imageUrl: Feature1,
    },
    {
      title: "Post Videos to Other Social Media Platforms",
      description:
        "Effortlessly share your videos on various social networks. Vidaare allows you to upload your video once and distribute it to multiple platforms, including Facebook, Instagram, YouTube, LinkedIn, TikTok, and Twitter. This saves you time and ensures that your content maintains consistency and quality across all your social media channels.",
      imageUrl: Feature2,
    },
    {
      title: "Trailer Creator for Youtube",
      description:
        "Easily create engaging trailers for your YouTube channel. Vidaare provides a user-friendly interface to design and edit captivating trailers that highlight your best content. This feature helps you attract more viewers and subscribers by giving them a sneak peek of what your channel offers, increasing your channel’s visibility and engagement.",
      imageUrl: Feature3,
    },
  ];

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setIsFeatureModalOpen(true);
  };

  // Function to only display description to first two lines
  const truncateDescription = (description) => {
    const lines = description.split(". ");
    return lines.slice(0, 1).join(". ") + ".";
  };
  return (
    <>
      <div className="w-screen h-screen bg-landing-bg bg-cover bg-center flex flex-col justify-between">
        <Header/>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center items-start text-white h-screen ">
          <hr className="w-24 border-8 mb-4 sm:w-18 " />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-left">
            Amplify your content,
            <br />maximize your reach
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Schedule, track and post your videos across all platforms in one
            place, and watch your content royalty grow!
          </p>
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className="bg-transparent text-white mt-8 px-4 py-2 rounded border border-white hover:text-slate-500 md:w-[150px] md:mt-6 lg:mt-8"
          >
            Learn More
          </button>
          {/* Email Modal */}
          <EmailModal
            isOpen={isEmailModalOpen}
            onClose={() => setIsEmailModalOpen(false)}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 font-bold">
        <h1 className="text-3xl md:text-4xl">Features</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-evenly gap-8 mt-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={truncateDescription(feature.description)}
              imageUrl={feature.imageUrl}
              onClick={() => handleFeatureClick(feature)}
            />
          ))}
        </div>
        {/* Feature Modal */}
        <FeatureModal
          isOpen={isFeatureModalOpen}
          onClose={() => setIsFeatureModalOpen(false)}
          feature={selectedFeature}
        />
      </div>
      <Footer />
    </>
  );
}
