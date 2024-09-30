import websiteimg1 from "../assets/website-blog.jpg";
import websiteimg2 from "../assets/ecommerce-websites.jpg";
import websiteimg3 from "../assets/food-ecommerce.jpg";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteimg1,
        description: "Chowkti : Orchestrated, and oversaw the complete frontend and backend development of a daily wage worker-hirer marketplace, leveraging Angular, React Native, Laravel, Nest JS, MySQL, and AWS technologies, resulting in a user base of over 50K users.",
        link: "https://chowkti.com/",
      },
      {
        image: websiteimg2,
        description: "Artiner is a platform for all the artist to display, promote and sale their art works to their art lover.I was associated with Artiner product development team as Technical Lead, as a lead developer my primary role is to deliver productive output by translating business requirement to development.",
        link: "https://www.artiner.com/",
      },
      {
        image: websiteimg3,
        description: "IDFC FIRST BANK :Facilitated on-field lead generation for managers and sales officers with the IDFC FIRST BANK - SO APP, streamlining attendance tracking and leave management for enhanced operational efficiency.",
        link: "https://www.idfcfirstbank.com/",
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
