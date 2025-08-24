import { FaBars } from "react-icons/fa";

interface MobileMenuButtonProps {
  onToggle: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onToggle }) => {
  return (
    <div className="md:hidden">
      <button onClick={onToggle} className="p-2 focus:outline-none text-white">
        <FaBars size={28} />
      </button>
    </div>
  );
};

export default MobileMenuButton;
