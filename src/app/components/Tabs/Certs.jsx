"use client";

import { motion } from "framer-motion";
import cert_advWeb from "../../../../public/images/certificates/advancedWebFWD.webp";
import cert_gans from "../../../../public/images/certificates/CERTIFICATE_GANS.webp";
import cert_proWeb from "../../../../public/images/certificates/fwd-proweb.webp";
import cert_git from "../../../../public/images/certificates/githubProfile.webp";
import cert_hmtcss from "../../../../public/images/certificates/html&css.webp";
import cert_js from "../../../../public/images/certificates/js.webp";
import cert_mdJs from "../../../../public/images/certificates/modern-js.webp";
import cert_reactFwd from "../../../../public/images/certificates/react-fwd.webp";
import Image from "next/image";
import usePreview from "@/app/hooks/usePreview";
import Backdrop from "../Backdrop";

const certs = [
  cert_advWeb,
  cert_gans,
  cert_proWeb,
  cert_git,
  cert_hmtcss,
  cert_js,
  cert_mdJs,
  cert_reactFwd,
];

const Certs = () => {
  const { preview, openPreview, closePreview, wrapperRef } = usePreview();

  return (
    <motion.ul layout className="flex flex-wrap gap-2">
      <>
        {certs.map((cert, i) => (
          <motion.figure
            key={i + cert}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <Image
              src={cert}
              width={60}
              height={60}
              alt={cert.src}
              loading={"lazy"}
              className="h-[100%]"
              onClick={() => openPreview(cert)}
            />
          </motion.figure>
        ))}

        {preview.isPreview && (
          <>
            <motion.figure
              style={{ overflow: "hidden" }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ height: 0, opacity: 0 }}
              key={"container"}
              className="fixed left-[2%] top-[15dvh] z-[100]"
              ref={wrapperRef}
            >
              <Image
                src={preview.src}
                width={500}
                height={500}
                alt={preview.src}
                loading={"lazy"}
                onClick={closePreview}
              />
            </motion.figure>
            <Backdrop onClick={closePreview} />
          </>
        )}
      </>
    </motion.ul>
  );
};
export default Certs;
