export default function ProjectCard(props) {
  return (
    <>
      <div className="lg:w-1/2 group transition-all relative rounded-none  overflow-hidden h-full ">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
          <h2 className="uppercase text-2xl font-[font1] border-2 pt-4 px-5 text-white border-white rounded-full ">
            Veiw More
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 group transition-all relative rounded-none  overflow-hidden h-full ">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
          <h2 className="uppercase text-2xl font-[font1] border-2 pt-4 px-5 text-white border-white rounded-full ">
            Veiw More
          </h2>
        </div>
      </div>
    </>
  );
}
