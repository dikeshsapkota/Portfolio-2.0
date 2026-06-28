import {
  House,
  User,
  Code2,
  FolderGit2,
  Mail,
} from "lucide-react";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a href="#home" className="active">
        <House size={24} />
      </a>

      <a href="#about">
        <User size={24} />
      </a>

      <a href="#skills">
        <Code2 size={24} />
      </a>

      <a href="#projects">
        <FolderGit2 size={24} />
      </a>

      <a href="#contact">
        <Mail size={24} />
      </a>
    </nav>
  );
}

export default BottomNav;