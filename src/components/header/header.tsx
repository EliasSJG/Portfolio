import "./_header.scss";
type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header>
      <h2>{title}</h2>

      <div>
        <a href="">Hem</a>
        <a href="">Projekt</a>
        <a href="">Skills</a>
        <a href="">Om Mig</a>
        <a href="">Min Resa</a>
      </div>
    </header>
  );
}
export default Header;
