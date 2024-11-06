import { PiSpinnerBallFill } from "react-icons/pi";

const MiniSpinner = ({ variant, customWidth, customPadding }) => {
  return (
    <div className={`flex justify-center px-${customPadding} items-center`}>
      <PiSpinnerBallFill
        className={`animate-spin text-2xl text-${variant}-800`}
      />
    </div>
  );
};

export default MiniSpinner;
