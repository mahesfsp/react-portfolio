import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2">
        <img alt="about me" src={AboutImg} />
      </div>
      <div className="py-5 md:w-1/2 flex  justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5 text-xl text-white">
            Experienced PHP developer with 6 years of hands-on experience in
            crafting efficient web applications. </p>
            <p className="pb-5 text-xl text-white">Proficient in Laravel and
            Symfony for backend development, complemented by expertise in
            React.js for dynamic and interactive frontend experiences.</p> 
            <p className="pb-5 text-xl text-white">Strong
            problem-solving skills and a commitment to delivering high-quality
            solutions within project timelines. Passionate about leveraging
            technology to drive innovation and create impactful solutions.</p>          
        </div>
      </div>
    </section>
  );
}
