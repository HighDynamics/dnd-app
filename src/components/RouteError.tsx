import { Link, Navigate, useRouteError } from "react-router";

import { ApiError } from "../store/api";
import { NotFound } from "./NotFound";
import { PageMessage } from "./PageMessage";

export function RouteError() {
  const error = useRouteError();

  if (error instanceof ApiError && error.status === 404) return <NotFound />;
  if (error instanceof ApiError && error.status === 401) {
    return <Navigate to="/login" replace />;
  }

  return (
    <PageMessage title="Something went wrong">
      <p>{error instanceof Error ? error.message : "Unknown error"}</p>
      <Link to="/" className="text-fuchsia-400 underline">
        Back to your character
      </Link>
    </PageMessage>
  );
}
