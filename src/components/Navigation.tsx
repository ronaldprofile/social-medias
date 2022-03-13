import { LinkItem } from "./LinkItem";

export function Navigation() {
  return (
    <nav className="w-full mt-5">
      <ul className="flex flex-col items-center text-center">
        <LinkItem
          href="https://www.instagram.com/iamronaldtomaz"
          className="bg-pink-600 hover:bg-transparent hover:border-pink-600"
        >
          Instagram
        </LinkItem>

        <LinkItem
          href="https://www.linkedin.com/in/ronald-tomaz/"
          className="bg-sky-500 hover:bg-transparent hover:border-sky-500"
          customDelay={1}
        >
          Linkedin
        </LinkItem>

        <LinkItem
          href="https://github.com/ronaldprofile"
          className="bg-gray-800 hover:bg-transparent hover:border-gray-800"
          customDelay={2}
        >
          Github
        </LinkItem>

        <LinkItem
          href="https://twitter.com/ronaldtomaz_"
          className="bg-cyan-500 hover:bg-transparent hover:border-cyan-500"
          customDelay={3}
        >
          Twitter
        </LinkItem>

        <LinkItem
          href="https://app.rocketseat.com.br/me/ronald-tomaz"
          className="bg-purple-700 hover:bg-transparent hover:border-purple-700"
          customDelay={4}
        >
          Rocketseat
        </LinkItem>
      </ul>
    </nav>
  );
}
