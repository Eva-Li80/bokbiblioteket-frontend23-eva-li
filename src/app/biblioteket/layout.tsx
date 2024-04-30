import Header from "../ui/Header";
import Navbar from "../ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Navbar/>
      <div>{children}</div>
    </div>
  );
}
