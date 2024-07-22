import ExtLink from "./ext-link";

export default function FAQ(props: { className?: string }) {
  return (
    <div className={["[&>h1]:font-bold [&>h1]:text-2xl [&>h1:not(:first-child)]:mt-8", props.className].join(" ")}>
      <h1>How does this work?</h1>
      <div>
        <p className="mt-3">
          Instagram allows you to request a machine-readable export of your followers and following. This tool will
          calculate the difference between these two: who doesn't follow back and vice versa.
        </p>
      </div>
      <h1>How do I know you're not saving my data?</h1>
      <div>
        <ul className="mt-3 pl-4 list-disc">
          <li>
            When it's time to share your data, you can turn on <b>Airplane Mode ✈</b> to ensure your data isn't leaving
            your phone.
          </li>
          <li>
            This project is open source, so you can
            <ExtLink href="https://github.com/lightningboltemoji/follow.ers.lol">read the code</ExtLink>!
          </li>
          <li>
            You don't have any way to verify this, but
            <ExtLink href="https://tanner.cecchetti.xyz">I'm</ExtLink> just a normal person that built this for fun.
            There's no secret agenda.
          </li>
        </ul>
      </div>
    </div>
  );
}
