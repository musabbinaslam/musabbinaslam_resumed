const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm font-mono">
          &copy; {currentYear} Musab bin Aslam. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Built with <span className="text-primary"></span> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
