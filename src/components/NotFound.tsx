import { Link } from "react-router";

import { Heading } from "./Heading";

export function NotFound() {
  return (
    <section>
      <Heading>Not found</Heading>
      <p className="text-lg">
        There's nothing at this address.{" "}
        <Link to="/main" className="text-fuchsia-400 underline">
          Back to your character
        </Link>
      </p>
    </section>
  );
}
