import HeaderList from "./HeaderList";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <nav className="p-4 flex justify-between items-center fixed w-full z-10 text-lg">
      <HeaderTitle />
      <HeaderList />
    </nav>
  );
};

export default Header;
