import { useContext } from "react";
import { PageContext } from "@context/PageContext";
import "./Navbar.scss";

function Navbar() {
  const { page, setPage } = useContext(PageContext);

  const isVisible = page === "evaluationFormPage";

  return (
    <nav className="navbar">
      <div className="divider" />
      <div className="contentWrapper">
        <div className="navbar-brand">
          <div className="navbar-logo"></div>
          <div className="navbar-brand-name">
            <h1>OSTİM Teknik Üniversitesi</h1>
            <h2>MYO Akademisyen Ölçüm Formu </h2>
          </div>
        </div>
        <div className={"right-section " + (isVisible ? '' : 'slide-to-right')}>
          <div className="text-container">
            <div className="profile-name">İsim Soyisim</div>

            <div className="return-button"
              onClick={() => { setPage('userInfoFormPage'); }}
            > <span style={{ marginRight: ".5rem" }}>&lt;</span>Kişisel Bilgi Formuna Dön</div>
          </div>
          <div className="profile-icon"></div>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;