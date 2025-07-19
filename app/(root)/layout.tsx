import CookieConsent from '@/components/shared/CookieConsent';
import Navbar from '@/components/shared/navbar/Navbar';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="">
      <Navbar />
      {/* <ScrollContext> */}
      {children}
      <CookieConsent />
      {/* </ScrollContext> */}
    </div>
  );
};

export default layout;
