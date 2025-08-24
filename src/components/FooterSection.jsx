import { Link } from "react-router-dom";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const FooterSection = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="text-left">
          <h3 className="text-md font-semibold mb-4 ">Resources</h3>
          <ul className="flex flex-col space-y-2">
            {resourcesLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-neutral-300 hover:text-white w-max"
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-md font-semibold mb-4 ">Platform</h3>
          <ul className="flex flex-col space-y-2">
            {platformLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-neutral-300 hover:text-white w-max"
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="flex flex-col space-y-2">
            {communityLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-neutral-300 hover:text-white w-max"
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
