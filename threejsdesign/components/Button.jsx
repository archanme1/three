const CustomButton = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className="bg-red-400">
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default CustomButton;
