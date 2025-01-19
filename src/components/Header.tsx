import Avatar from "../assets/avatar.png";

const Header = () => {
  return (
    <header className="w-full px-4 py-2 sm:px-6">
      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="text-right">
            <span className="text-gray-700 font-bold text-sm sm:text-base">Hi, Username</span>
            <div className="text-xs sm:text-sm text-blue-500">Credits Left : 300</div>
          </div>
          <img
            src={Avatar}
            alt="User"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
