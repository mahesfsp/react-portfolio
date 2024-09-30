import ResumeImg from "../assets/resume.jpg";
import ResumePdf from "../assets/Node_TypeScript.pdf";

export default function Resume() {
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="resume">
      <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
        <img className="w-[300px]" alt="about me" src={ResumeImg} />
      </div>
      <div className="py-5 md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5 text-xl text-white">
            You can view my resume{" "}
            <a
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              href={ResumePdf}
              download="MaheswariMarimuthuFullstack6years.pdf"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
