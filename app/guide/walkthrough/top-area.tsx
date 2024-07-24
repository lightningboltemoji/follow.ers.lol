import Battery from "@/public/battery.svg";
import Signal from "@/public/signal.svg";
import WiFi from "@/public/wifi.svg";

export default function TopArea(props: { color: string }) {
  return (
    <div className="flex max-h-[5.2vh] min-h-[5.2vh] text-[1.5vh]">
      <span className="grow basis-1 px-[1vh] m-auto text-center" style={{ color: props.color }}>
        9:41
      </span>
      <span className="grow basis-2 bg-black my-[1.5vh] rounded-full" />
      <div className="flex grow basis-1 px-[1vh] m-auto text-center justify-center">
        {[
          [Signal, "Cellular signal icon"],
          [WiFi, "WiFi icon"],
          [Battery, "Battery charge icon"],
        ].map(([Icon, alt]) => (
          <div key={alt} className="flex grow-0 size-[1.5vh] mr-[0.75vh]">
            <Icon style={{ stroke: props.color }} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
