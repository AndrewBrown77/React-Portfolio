
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. m open to learn and work with any web technology ands.
        </p>

        <br />

        <p className="text-xl">
       this is a test <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Lets discover together how we can make your project convert better!<br /> <br />
        I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;