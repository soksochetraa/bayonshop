import Link from "next/link";

interface MenuItem {
  name: string;
  path: string;
}

interface MobileMenuItemsProps {
  menuItems: MenuItem[];
  pathname: string;
  onClose: () => void;
}

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({
  menuItems,
  pathname,
  onClose,
}) => {
  return (
    <ul className="flex flex-col space-y-2 mb-4">
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.path}
            onClick={onClose}
            className={`block px-4 py-2 rounded transition-colors ${
              pathname === item.path
                ? "bg-[#7DB800] text-white"
                : "text-white hover:bg-[#7DB800]/30"
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenuItems;
