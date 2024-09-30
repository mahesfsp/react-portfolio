import websiteimg1 from "../assets/website-blog.jpg";
import websiteimg2 from "../assets/ecommerce-websites.jpg";
import websiteimg3 from "../assets/food-ecommerce.jpg";

export default function Projects() {
  return (
    <section className="flex py-20 px-5 text-white bg-primary justify-center">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects           
          </h1>
          <p>These are some of my best project</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img className="h-[200px] w-[500px]" alt="webiteimage" src={websiteimg1} />
            <div className="project-desc">
              <p className="text-center px-5 py-5 ">
                Ecommerce build with mern stack
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" alt="webiteimage1" src={websiteimg2} />
            <div className="project-desc">
              <p className="text-center px-5 py-5 ">
                Ecommerce build with mern stack
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" alt="webiteimage2" src={websiteimg3} />
            <div className="project-desc">
              <p className="text-center px-5 py-5 ">
                Ecommerce build with mern stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
