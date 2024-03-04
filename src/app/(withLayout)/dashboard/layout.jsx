import Footer from "@/app/components/Shared/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen"> {children}</div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
