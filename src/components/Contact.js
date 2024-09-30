export default function Contact() {
const config ={
  email:'mahesinfotech2012@gmail.com',
  phone:'0503282363'
}

  return (
    <section className="flex flex-col bg-primary px-5 py-30 text-white" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white border-b-4 border-secondary mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5 ">
          If you want to discuss more in detail, Please contact me
        </p>
        <p className="py-2">
          <span className="font-bold">Email:{config.email}</span>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:{config.phone}</span>
        </p>
      </div>
    </section>
  );
}
