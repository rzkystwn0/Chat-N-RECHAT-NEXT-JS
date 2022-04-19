export default function TotalDownUser({ image, field, value }) {
  return (
    <div className="w-6/12 xl:w-4/12 flex">
      <div className="w-2/12">
        <img className="items-start" src={image} />
      </div>
      <div className="w-6/12 xl:w-8/12">
        <p className="Inter text-xs text-black/60 mb-2 w-32 ">{field}</p>
        <p className="font-semibold text-2xl Inter">{value}</p>
      </div>
    </div>
  );
}
