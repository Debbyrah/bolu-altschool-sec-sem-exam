import { useNavigate } from "react-router-dom";
import "./error404page.css";

export default function Error404Page() {
  const navigate = useNavigate();

  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center color">Error 404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h3 color">The page you are looking for does not exist 🙄</h3>
                <button
                  className="error-home-btn"
                  onClick={() => navigate("/")}
                >
                  Go Back Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
