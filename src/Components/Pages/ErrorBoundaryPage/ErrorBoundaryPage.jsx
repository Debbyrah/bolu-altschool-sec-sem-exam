import "./errorboundarypage.css";

export default function ErrorBoundary({ error, resetErrorBoundary }) {
  return (
    <section className="Error_message">
      <p
        style={{
          color: "red",
          fontWeight: "bolder",
          fontSize: "xx-large",
          marginTop: "20px",
        }}
      >
         OOps........Something went wrong!!!
      </p>

      <button className="btn_error" onClick={resetErrorBoundary}>
        Go back Home
      </button>
    </section>
  );
}
