export default function Contact() {
  return (
    <div className="py-12 flex flex-col gap-16">
      <section className="flex items-center mx-auto w-4/5 gap-10">
        <div className="grid gap-2 w-full">
          <h1 className="font-semibold text-primary text-5xl tracking-[1.5px] !leading-[120.833%] uppercase ">
            CONTACT US
          </h1>
          <p className="text-primary font-normal !leading-[ 163.636% ] text-[22px] tracking-[1.5px] ">
            We love catching up with our supporters and want to make speaking to
            us as easy as possible.
          </p>
        </div>
        <div className="w-full rounded-[10px] flex flex-col pt-5 pl-6 pb-16 pr-8 bg-primary text-white">
          <h2 className="text-2xl font-bold !leading-[241.667%]">
            Where you can find us
          </h2>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.6256 10.1256C19.4598 3.29146 30.5402 3.29146 37.3744 10.1256C44.2085 16.9598 44.2085 28.0402 37.3744 34.8744L25 47.2487L12.6256 34.8744C5.79146 28.0402 5.79146 16.9598 12.6256 10.1256ZM25 27.5C27.7614 27.5 30 25.2614 30 22.5C30 19.7386 27.7614 17.5 25 17.5C22.2386 17.5 20 19.7386 20 22.5C20 25.2614 22.2386 27.5 25 27.5Z"
                fill="white"
              />
            </svg>
            <div className="grid gap-2">
              <p className="text-xl font-semibold font-inter">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
              </p>
              <p className="text-xl font-medium font-inter">
                {" "}
                - Hi. My name is Khoa. I am a{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-[10px] shadow-box-sh border w-4/5 mx-auto bg-white p-8">
        <h3
          className="text-[#424242] font-semibold tracking-[1.138px]
         text-[32px] uppercase !leading-[168.312% ]  "
        >
          Feel free to drop message for us
        </h3>
        <form className="flex gap-4">
          <div className="grid grow gap-3">
            <label htmlFor="name">
              {" "}
              <input
                className="py-5 px-4 w-full bg-grey-dark rounded-[4px] border-[0.75px] border-[#0000001A] "
                type="text"
                name="name"
                id="name"
              />
              {""}
            </label>
            <label htmlFor="email">
              {""}
              <input
                className="py-5 px-4 w-full bg-grey-dark rounded-[4px] border-[0.75px] border-[#0000001A] "
                type="email"
                name="email"
                id="email"
              />
            </label>
            <label htmlFor="subject">
              {""}{" "}
              <input
                className="py-5 px-4 w-full bg-grey-dark rounded-[4px] border-[0.75px] border-[#0000001A] "
                type="text"
                name="subject"
                id="subject"
              />
            </label>
            <label htmlFor="input-text">
              {""}
              <textarea
                className="py-5 px-4 w-full bg-grey-dark rounded-[4px] border-[0.75px] border-[#0000001A] "
                name="input-text"
                id="input-text"
                cols={30}
                rows={10}
              ></textarea>
            </label>
          </div>
          <article className="flex flex-col gap-4 rounded-[4px]">
            <div className="bg-primary rounded-lg pl-7 py-7 h-full "></div>
          </article>
        </form>
      </section>
    </div>
  );
}
