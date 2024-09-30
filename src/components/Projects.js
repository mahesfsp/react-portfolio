import websiteimg1 from "../assets/website-blog.jpg";
import websiteimg2 from "../assets/ecommerce-websites.jpg";
import websiteimg3 from "../assets/food-ecommerce.jpg";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteimg1,
        description: "Ecommerce build with mern stack",
        link: "",
      },
      {
        image: websiteimg2,
        description: "Ecommerce build with mern stack",
        link: "",
      },
      {
        image: websiteimg3,
        description: "Ecommerce build with mern stack",
        link: "",
      },
    ],
  };
  return (
    <section
      className="flex flex-col py-20 px-5 text-white bg-primary justify-center"
      id="projects"
    >
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
          {config.projects.map((project) => (         
           <div className="relative">
              <img
                className="h-[200px] w-[500px]"
                alt="webiteimage"
                src={project.image}
              />
              <div className="project-desc">
                <p className="text-center px-5 py-5 ">{project.description}</p>
                <div className="flex justify-center">
                <a href={project.link} target="_blank" className="btn">View Project</a>
              </div>
              </div>
             
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
