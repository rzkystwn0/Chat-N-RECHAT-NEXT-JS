export function FiturEmj({ emj, title, dec }) {
  return (
    <div className="flex my-8" >
      <div className="items-start w-4/10">
        <img src={emj} />
      </div>
      <div className="ml-8 w-8/12">
        <p className="DM-Sans font-semibold text-lg tracking-wider">{title}</p>
        <p className="tracking-wide text-black/60 SourceSans text-base lg:w-8/12">{dec}</p>
      </div>
    </div>
  );
}
