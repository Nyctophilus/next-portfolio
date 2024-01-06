import { useEffect, useRef, useState } from "react";

const usePreview = () => {
  const [preview, setPreview] = useState({ isPreview: false, src: "" });
  const openPreview = (cert) => {
    setPreview({
      isPreview: true,
      src: cert,
    });
  };

  const closePreview = (cert) => {
    setPreview({
      isPreview: false,
      src: "",
    });
  };

  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setPreview((prev) => (prev.isPreview = false));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return { preview, openPreview, closePreview, wrapperRef };
};
export default usePreview;
