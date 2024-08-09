import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function EmailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const resetMessages = () => {
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    console.log("Form submitted, email:", email); // Debugging

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log("Sending POST request:", `${apiUrl}/user`); // Debugging
      const response = await axios.post(`${apiUrl}/user`, {
        email,
      });

      console.log("Response received:", response); //Debugging

      setSuccess(true);
      setEmail("");
      console.log("Email submitted:", response.data);
    } catch (err) {
      console.error("Error occurred:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      resetMessages();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-transparent p-8 md:p-10 rounded-lg shadow-lg w-11/12 max-w-lg backdrop-filter backdrop-blur-lg bg-opacity-80">
        <button
          className="text-black text-3xl hover:text-gray-700 absolute top-2 right-2"
          onClick={() => {
            resetMessages();
            onClose();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              color="white"
            />
          </svg>
        </button>

        <h2 className="text-white mb-6 text-center text-2xl">
          Subscribe to get the latest updates.
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4">Email submitted successfully!</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-transparent text-white px-12 py-2 rounded border border-white hover:text-gray-500"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

EmailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
