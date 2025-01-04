import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-[400px] flex justify-center items-center">
          <div className="bg-[#2c2c6c] rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={avatar1}
                  alt="Avatar 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-white">John Doe</p>
                <p className="text-sm text-white">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-lg italic text-white">
              "This team delivered outstanding work! They really understood our vision and exceeded expectations in every aspect."
            </p>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full h-[400px] flex justify-center items-center">
          <div className="bg-[#2c2c6c] rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={avatar2}
                  alt="Avatar 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-white">Jane Smith</p>
                <p className="text-sm text-white">Lead Designer, Creatify</p>
              </div>
            </div>
            <p className="text-lg italic text-white">
              "An amazing experience! Their attention to detail and creativity took our project to the next level."
            </p>
          </div>
        </div>

        <div id="item3" className="carousel-item w-full h-[400px] flex justify-center items-center">
          <div className="bg-[#2c2c6c] rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={avatar3}
                  alt="Avatar 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-white">Michael Brown</p>
                <p className="text-sm text-white">Marketing Director, BrandForce</p>
              </div>
            </div>
            <p className="text-lg italic text-white">
              "Professional, timely, and communicative. Their work has helped us improve our branding and reach new heights."
            </p>
          </div>
        </div>

        <div id="item4" className="carousel-item w-full h-[400px] flex justify-center items-center">
          <div className="bg-[#2c2c6c] rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={avatar4}
                  alt="Avatar 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-white">Emily Davis</p>
                <p className="text-sm text-white">Product Manager, InnovateX</p>
              </div>
            </div>
            <p className="text-lg italic text-white">
              "Fantastic service! They always deliver results ahead of schedule, and their innovation sets them apart from the rest."
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs text-white">
          1
        </a>
        <a href="#item2" className="btn btn-xs text-white">
          2
        </a>
        <a href="#item3" className="btn btn-xs text-white">
          3
        </a>
        <a href="#item4" className="btn btn-xs text-white">
          4
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
