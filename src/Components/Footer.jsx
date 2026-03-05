import x from "../assets/x.jpg";
import linked from "../assets/linked.jpg";
import fb from "../assets/fb.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-black text-base-content p-10 mt-16 ">
        <div>
          <h1 className="text-2xl font-bold">e-Ticket System</h1>
          <p>
            We are the pioneer of e-ticketing system in Bangladesh.
            <br />
            we believe the motto'Your trust our service'. <br />
            your one stop solution for online ticketing <br /> Providing
            reliable ticket management since 2023.
          </p>
        </div>
        <nav>
          <h6 className="footer-title">company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Sales</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms And Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex justify-between gap-2">
            <img src={x} alt="X" />
            @e— Ticket System
          </a>
          <a className="link link-hover flex justify-between gap-2 py-3">
            <img src={linked} alt="LinkedIn" />
            @e— Ticket System
          </a>
          <a className="link link-hover flex justify-between gap-2">
            <img src={fb} alt="Facebook" />
            @e— Ticket System
          </a>
        </nav>
      </footer>
      <hr />
      <div className="text-center p-4 bg-black">
        <p>&copy; 2026 e-Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
