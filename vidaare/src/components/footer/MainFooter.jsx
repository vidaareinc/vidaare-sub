import { Link } from "react-router-dom";

export default function MainFooter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 bg-transparent text-white ">
      <h6>&copy; All rights reserved. Vidaare</h6>
      <div className="flex flex-row gap-4 mt-4 md:mt-0">
        <Link
          to="/terms-and-conditions"
          className="font-semibold cursor-pointer"
        >
          Terms and Conditions{" "}
        </Link>
        <h6 className="font-semibold">|</h6>
        <Link className="font-semibold cursor-pointer" to="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
