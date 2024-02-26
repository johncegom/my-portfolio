interface FooterType {
  language?: string;
}

const Footer = ({ language = "English" }: FooterType) => {
  return (
    <footer>
      <div className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-xl text-dancing-script font-semibold">
            {language === "English"
              ? "Powered by Minh Duong"
              : "Thực hiện bởi Minh Dương"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
