import React from "react";
import { LANGUAGES } from "./constants";

interface HeaderProps {
  language: string;
  example: string;
  examples: Array<string>;
  handleExampleChanged: (example: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  example,
  examples,
  handleExampleChanged,
}) => {
  const homeUrl = `https://github.com/xinminlabs/node-query-javascript`;

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = event.target.value;
    window.location.href = `/${language}`;
  };

  const handleExampleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const example = event.target.value;
    handleExampleChanged(example);
  };

  return (
    <nav className="bg-neutral-800 text-white shadow">
      <div className="px-5 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            className="flex items-center"
            href={homeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Github</span>
          </a>
          <div>
            <span>Languages:&nbsp;&nbsp;</span>
            <select
              value={language}
              className="px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none"
              onChange={handleLanguageChange}
            >
              {LANGUAGES.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </select>
            <span className="ml-5">Examples:&nbsp;&nbsp;</span>
            <select
              value={example}
              className="px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none"
              onChange={handleExampleChange}
            >
              {examples.map((example) => (
                <option key={example}>{example}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};
