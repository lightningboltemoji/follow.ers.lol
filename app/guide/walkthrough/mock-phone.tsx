function HomeScreenIcon() {
  return <div className="inline-block m-auto w-[18%] aspect-square rounded-lg bg-gray-500"></div>;
}

function HomeScreenRow() {
  return (
    <div className="flex grow mx-1">
      <HomeScreenIcon />
      <HomeScreenIcon />
      <HomeScreenIcon />
      <HomeScreenIcon />
    </div>
  );
}

export default function MockPhone(props: { step: number }) {
  return (
    <div className="flex-row min-h-[60vh] max-h-[60vh] aspect-[9/19] rounded-[4vh] border-2 border-gray-600 overflow-hidden">
      <div className="flex flex-col min-h-full bg-gray-200">
        <div className="flex grow-[10] text-[1.5vh]">
          <span className="grow basis-1 px-[1vh] m-auto text-center">9:41</span>
          <span className="grow basis-8 bg-black my-3 rounded-full" />
          <div className="flex grow basis-1 px-[1vh] m-auto text-center justify-center">
            {[
              ["signal", "Cellular signal icon"],
              ["wifi", "WiFi icon"],
              ["battery", "Battery charge icon"],
            ].map(([icon, alt]) => (
              <img key={icon} className="grow-0 size-[1.5vh] mr-[0.75vh]" src={`/${icon}.svg`} alt={alt} />
            ))}
          </div>
        </div>
        <div className="flex grow-[75]">
          <div className="flex flex-col grow">
            <HomeScreenRow />
            <HomeScreenRow />
            <HomeScreenRow />
            <HomeScreenRow />
            <HomeScreenRow />
          </div>
        </div>
        <div className="flex grow-[15] bg-gray-400 rounded-[2.5vh] m-[0.5vh] mb-[1vh]">
          <div className="flex grow items-center">
            <HomeScreenRow />
          </div>
        </div>
      </div>
    </div>
  );
}
