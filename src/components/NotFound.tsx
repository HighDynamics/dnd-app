import { Link } from "react-router";

import { PageMessage } from "./PageMessage";

export function NotFound() {
  return (
    <PageMessage title="Not found">
      There's nothing at this address.{" "}
      <Link to="/" className="text-fuchsia-400 underline">
        Back to your character
      </Link>
    </PageMessage>
  );
}
