import Hero from "@/components/Hero";
import MyProfile from "@/components/profile/MyProfile";
import NavBar from "@/components/NavBar";
import NavigatingMenu from "@/components/NavigatingMenu";
import Registration from "@/components/Registration";
import UssdAgent from "@/components/UssdShortCut";
import FooterMenu from "@/components/footer/FooterMenu";
import Flag from "@/components/footer/Flag";
import CookieSect from "@/components/footer/Cookie";
import NewsLetter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Registration />
      <UssdAgent />
      <NavigatingMenu />
      <MyProfile />
      <NewsLetter />
      <FooterMenu />
      <Flag />
      <CookieSect />
    </>
  );
}
