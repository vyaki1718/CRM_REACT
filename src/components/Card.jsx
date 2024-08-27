
function Card({children, borderColor="border-error", dividerColor="bg-gray-100", fontColor="text-white", background="bg-primary",  textTitle="Card", quantity=50, status=50}) {
  return (
    <>
      <div className={`hover:scale-110 transition-all ease-out duration-300 w-64 h-44 border-b-4 ${borderColor} ${background} rounded-md flex flex-col justify-center items-center py-2`}>
        <div className="text-primary-content text-xl mb-2">
        {children} <span>{textTitle}</span>
        </div>
        <div className={`divider h-0.5 ${dividerColor} m-4 rounded-sm`}></div>
        <div className="flex justify-around items-center gap-4 mt-2">
          <div className={`text-7xl ${fontColor}`}>{quantity}</div>
          <div
            className={`radial-progress ${fontColor} text-2xl`}
            style={{ "--value": status }}
            role="progressbar"
          >
            {status}%
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
