import { loadingIcon } from "../module/image_logo";

function Loading({ value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        width: "100%",
        height: "100%",
      }}
    >
      <img alt="Loading" width="60" height="60" src={loadingIcon} />
      {value}%
    </div>
  );
}

function ShowError({ err }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {err}
    </div>
  );
}

export { Loading, ShowError };
