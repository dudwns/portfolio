import Link from "next/link";
import Image from "next/image";
const HeaderTitle = () => {
  return (
    <ul className="flex gap-4 text-gray-400">
      <li className="cursor-pointer hover:text-white">
        <Link href="https://github.com/dudwns">
          <Image
            src="/images/github.svg"
            alt="github"
            width={20}
            height={20}
            className="w-6 h-6 invert-75 hover:invert-100"
          />
        </Link>
      </li>
      <li className="cursor-pointer hover:text-white">
        <Link href="https://velog.io/@dudwns/posts">
          <Image
            src="/images/velog.svg"
            alt="velog"
            width={20}
            height={20}
            className="w-6 h-6 invert-75 hover:invert-100"
          />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderTitle;
