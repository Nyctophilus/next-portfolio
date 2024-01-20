const ProjectTag = ({ name, isSelected, setTag }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  const handleTagChange = () => {
    setTag(name);
  };

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer capitalize`}
      onClick={handleTagChange}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
