const links = [
  { href: "/#hero", label: "Home" },
  { href: "/#speakers", label: "Speakers" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#location", label: "Location" },
  { href: "/#nearby", label: "Information" },
  { href: "/#sponsors", label: "Sponsors" }
];

const Navigation = () => (
  <nav className="bg-white sticky top-0 overflow-x-auto z-40 mt-2">
    <div className="p-4 md:p-6">
      {links.map((link, index) => (
        <a
          key={index}
          className="mr-6 font-bold hover:underline"
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </div>
  </nav>
);

export default Navigation;
