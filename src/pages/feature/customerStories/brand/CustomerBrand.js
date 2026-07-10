import React from "react";
import { motion } from "framer-motion";
import "./CustomerBrand.css";

const brands = [
  {
    id: 1,
    name: "Shiv Naresh",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGxi_qXqMTlzA/company-logo_200_200/company-logo_200_200/0/1729491038697/shivnareshind_logo?e=2147483647&v=beta&t=84A2novFS5hTyN-q4THZ1wh1tIKfVDOhuZQJO_8bSCo",
  },
  {
    id: 2,
    name: "Nirvasa",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVN9toAa6W1vF6ipqhiGRFYeuOd1z1-9GJQ&s",
  },
  {
    id: 3,
    name: "the hatke",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHI8_WTiEmPIA/company-logo_200_200/company-logo_200_200/0/1630636854133?e=2147483647&v=beta&t=dJlhHE4yj4rkDGJ18CY2fsEVIH17vqA2ieEgKECKtaA",
  },
  {
    id: 4,
    name: "Evor",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  },
];

const CustomerBrands = () => {
  return (
    <section className="cs-brands-section">
      <motion.div
        className="cs-brands-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Trusted by Leading D2C Brands</h2>
        <p>
          Thousands of ecommerce and retail businesses use our logistics
          intelligence to scale faster and deliver smarter.
        </p>
      </motion.div>

      <div className="cs-brands-container">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.id}
            className="cs-brand-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={brand.logo} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerBrands;
