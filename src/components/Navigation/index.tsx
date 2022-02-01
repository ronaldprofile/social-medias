import { LinkItem } from "../LinkItem";

export function Navigation() {
  return (
    <nav className="w-full mt-5">
      <ul className="flex flex-col items-center text-center">
        <LinkItem
          href="https://www.instagram.com/iamronaldtomaz"
          className="bg-pink-600"
        >
          Instagram
        </LinkItem>
        <LinkItem
          href="https://www.linkedin.com/in/ronald-tomaz/"
          className="bg-sky-500"
        >
          Linkedin
        </LinkItem>
        <LinkItem
          href="https://github.com/ronaldprofile"
          className="bg-gray-800"
        >
          Github
        </LinkItem>
        <LinkItem
          href="https://twitter.com/ronaldtomaz_"
          className="bg-cyan-500"
        >
          Twitter
        </LinkItem>
        <LinkItem
          href="https://app.rocketseat.com.br/me/ronald-tomaz"
          className="bg-purple-700"
        >
          Rocketseat
        </LinkItem>
      </ul>
    </nav>
  );
}
