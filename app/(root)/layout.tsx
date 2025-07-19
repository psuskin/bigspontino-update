import Navbar from '@/components/shared/navbar/Navbar';
import ScrollContext from '@/components/shared/ScrollContext';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="">
      <Navbar />
      <ScrollContext>{children}</ScrollContext>
    </div>
  );
};

export default layout;
