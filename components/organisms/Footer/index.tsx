import {
  RiFacebookCircleFill,
  RiMessengerFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between px-8 py-5 bg-secondary">
        <div className="max-w-20">
          <h2 className="mb-2 text-lg font-bold text-primary">Foodify</h2>
          <ul className="flex items-center gap-2">
            <li>
              <RiFacebookCircleFill className="text-3 text-primary" />
            </li>
            <li>
              <RiMessengerFill className="text-3 text-primary" />
            </li>
            <li>
              <RiInstagramFill className="text-3 text-primary" />
            </li>
            <li>
              <RiWhatsappFill className="text-3 text-primary" />
            </li>
          </ul>
        </div>
        <div className="max-w-20">
          <h2 className="mb-2 font-bold text-md ">Contact us</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <p>114C - 108 street, Mandalay, Myanmar</p>
            </li>
            <li>
              <p>hello@foodify.com</p>
            </li>
            <li>
              <p>+959123456789</p>
            </li>
          </ul>
        </div>
        <div className="max-w-20">
          <h2 className="mb-2 font-bold text-md ">Services</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <p>Payments</p>
            </li>
            <li>
              <p>Delivery</p>
            </li>
            <li>
              <p>Cooking chefs</p>
            </li>
          </ul>
        </div>
        <div className="max-w-20">
          <h2 className="mb-2 font-bold text-md ">Open hours</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <p>
                9:00 AM - 9:00 PM <br /> Mon - Fri
              </p>
            </li>
            <li>
              <p>
                8:00 AM - 10:00 PM <br /> Sat - Sun
              </p>
            </li>
          </ul>
        </div>
        <div className="max-w-20">
          <h2 className="mb-2 font-bold text-md ">Resources</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <p>Menu directory</p>
            </li>
            <li>
              <p>Help center</p>
            </li>
            <li>
              <p>Privacy &amp; policy</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-5 text-white bg-primary">
        <p className="font-bold">Copyright @2022 - Foodify</p>
        <p className="font-bold">Designed and Developed by Htut Wai Phyoe</p>
      </div>
    </footer>
  );
};
