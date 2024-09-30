import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1:"Experienced PHP developer with 6 years of hands-on experience in crafting efficient web applications. ",
    line2:"Proficient in Laravel and Symfony for backend development, complemented by expertise in React.js for dynamic and interactive frontend experiences.",
    line3:"Strong problem-solving skills and a commitment to delivering high-quality solutions within project timelines. Passionate about leveraging technology to drive innovation and create impactful solutions."
  }
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5 " id="about">
      <div className="md:w-1/2">
        <img alt="about me" src={AboutImg} />
      </div>
      <div className="py-5 md:w-1/2 flex  justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5 text-xl text-white">{config.line1}</p>
            <p className="pb-5 text-xl text-white">{config.line2}</p> 
            <p className="pb-5 text-xl text-white">{config.line3}</p>          
        </div>
      </div>
    </section>
  );
}
