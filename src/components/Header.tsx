const Header = () => {
  return (
    <header>
      <div className="container m-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl">Minh Duong Portfolio</h1>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Technologies
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  About me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
