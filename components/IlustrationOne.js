export default function IlustrationOne({ image, title, dec }) {
    return (
        <div className="md:w-4/12 w-12/12 py-6">
          <div className="flex flex-col text-center  mx-2">
            <img src={image} className="w-8/12 mx-auto" />
            <p className="DM-Sans text-lg text-blue-900o">{title}</p>
            <p className="text-black/60 tracking-wide mt-4 text-base w-8/12 mx-auto">{dec}</p>
          </div>
        </div>
    );
}