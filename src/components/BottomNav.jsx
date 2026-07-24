import {
  House,
  User,
  Code2,
  FolderGit2,
  Mail,
} from "lucide-react";

const navItems = [
  ["home", House, "Home"],
  ["about", User, "About"],
  ["skills", Code2, "Skills"],
  ["projects", FolderGit2, "Projects"],
  ["contact", Mail, "Contact"],
];

function BottomNav({ currentPage }) {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {navItems.map(([page, Icon, label]) => (
        <a
          href={page === "home" ? "#/" : `#/${page}`}
          className={currentPage === page ? "active" : ""}
          aria-label={label}
          aria-current={currentPage === page ? "page" : undefined}
          key={page}
        >
          <Icon size={24} />
        </a>
      ))}
    </nav>
  );
}

export default BottomNav;
