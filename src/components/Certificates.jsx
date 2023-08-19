import certificates from "../data/certificate-data";
import { FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { motion } from "framer-motion";

export default function CertificateList() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, ease: "easeInOut" }}
      className="flex flex-col items-center mt-8 lg:min-h-screen"
    >
      <h2 className="text-2xl font-bold mb-4">Certificates and Awards</h2>
      <main className="sm:grid grid-cols-2">
        {certificates.map((certificate, index) => (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            key={index}
            className="max-w-lg mx-4 border cursor-pointer border-gray-300 rounded-lg p-4 mb-4 shadow-md"
          >
            <section className="flex gap-1">
              <FaAward className="mt-1" />
              <h3 className="text-lg font-semibold">{certificate.title}</h3>
            </section>
            <p className="text-gray-600 text-sm mt-2">
              {certificate.description}
            </p>
            <p className="text-blue-500 text-sm mt-2">
              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Issued by {certificate.issuingOrganization} on{" "}
              {certificate.issued}
            </p>
          </motion.div>
        ))}
      </main>
      <section>
        <p className="text-lg text-center text-yellow-500 mt-3 sm:text-2xl font-thin sm:w-96 lg:text-4xl lg:mt-14">
          Ready to see my expertise in action? Explore my portfolio to witness
          how I turn vision into reality. Let's bring your project to life
          together!
        </p>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-500 p-1 rounded flex gap-1 justify-center w-52 m-4 mx-auto"
        >
          <AiOutlineFundProjectionScreen className="mt-1 text-3xl" />
          <Link to="/projects">View Projects</Link>
        </motion.button>
      </section>
    </motion.div>
  );
}
