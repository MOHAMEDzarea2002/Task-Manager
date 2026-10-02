import { FaRegUser } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex  justify-center  shadow-md p-2 rounded-sm">
      <div className="flex justify-between items-center w-175">
        {/* Logo */}
        <img src="/src/assets/logo (2).svg" alt="Logo" className="w-32 h-12 text-blue-600 font-bold"/>
        {/* icon User */}
        <div className="bg-blue-500 p-4 rounded-full text-white cursor-pointer flex justify-center items-center">
          <FaRegUser />
        </div>
      </div>
    </div>
  );
}
