import PropTypes from "prop-types";

const FeatureCard = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="h-[350px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4 text-right">
          <button
            className="text-blue-700 hover:text-blue-500"
            onClick={onClick}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeatureCard;
