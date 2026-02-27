import React from "react";

export default function Discount() {
  const styles = {
    bar: {
      width: "100%",
      backgroundColor: "#000",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "8px 10px",
      boxSizing: "border-box",
      fontFamily: "Poppins, sans-serif",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      flexWrap: "nowrap",
      textAlign: "center",
      whiteSpace: "nowrap",
    },
    text: {
      fontSize: "14px",
      margin: 0,
    },
    highlight: {
      color: "#ffcc00",
      fontWeight: 600,
      marginLeft: "4px",
    },
    button: {
      backgroundColor: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "4px",
      padding: "4px 8px",
      fontSize: "12px",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
  };

  const handleClick = () => {
    window.open("/sign-up", "_blank")
  }
  return (
    <>
      {/* Scoped responsive CSS */}
      <style>
        {`
          @media (max-width: 576px) {
            .discount-text-main {
              font-size: 11px !important;
            }
            .discount-btn-main {
              font-size: 10px !important;
              padding: 2px 6px !important;
            }
          }
        `}
      </style>

      <div className="discount-bar-main" style={styles.bar}>
        <div style={styles.content}>
          <p className="discount-text-main" style={styles.text}>
            ⏰ Ends soon — claim your discount with
            <span style={styles.highlight}> SALE24</span>
          </p>
          <button
           
            className="discount-btn-main"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffcc00")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
          >
           <a  href="https://app.shipease.in/sign-up"
            target="_blank" style={{textDecoration:"none", color:"#000"}}> Claim Offer</a>
          </button>
        </div>
      </div>
    </>
  );
}