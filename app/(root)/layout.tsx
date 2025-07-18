import Navbar from '@/components/shared/navbar/Navbar';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="">
      <Navbar />
      {children}

      {/* <Footer /> */}
    </div>
  );
};

export default layout;
