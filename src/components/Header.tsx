import { FaRegUser } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex  justify-center  shadow-md p-2 rounded-sm">
      <div className="flex justify-between items-center w-175">
        {/* Logo */}
        <div className="text-3xl text-blue-600 font-bold">Z</div>
        {/* icon User */}
        <div className="bg-blue-500 p-4 rounded-full text-white cursor-pointer flex justify-center items-center">
          <FaRegUser />
        </div>
      </div>
    </div>
  );
}
