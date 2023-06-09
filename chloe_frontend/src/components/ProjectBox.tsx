import rebikeImg from "../img/rebike_home.png";

export default function ProjectBox() {
  return (
    <div className="w-80 flex flex-col justify-center mx-3 my-5 font-sans rounded-xl bg-white">
      <div className="flex flex-col font-sans justify-items-center">
        <img className="rounded-lg" alt="" src={rebikeImg} />
        <div className="space-y-2 px-2 pt-4 pb-2">
          <div className="text-lg c text-violet-800">"reBike" Frontend</div>
          <div className="text-sm px-2">
            Web platform rebike, analysis daily waste type by AI model and
            separate
          </div>
          <div className="text-sm px-2 pb-2">
            Managed a project schedule by agile methodology and tools as a team
            leader
          </div>
          <button className="text-xs w-full py-2 border-2 rounded-lg hover:border-violet-800">
            <a
              className="text-center font-medium text-gray-600"
              href="https://github.com/chloe1129"
            >
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
