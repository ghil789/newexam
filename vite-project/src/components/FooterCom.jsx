import {
  Footer,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-4 border-blue-500">
      {" "}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 mr-5">
            <h1>
              {" "}
              <a
                href="/"
                className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
              >
                {" "}
                <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 rounded-lg text-white">
                  Exam Bank
                </span>
                Computer Scince{" "}
              </a>{" "}
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="ABOUT" />
              <FooterLinkGroup col>
                <FooterLink href="#">
                  This app is done by JU computer scince extention students for
                  industrial practice
                </FooterLink>
                <FooterLink href="#">
                  Attachment place was Jimma Institute of Technology library
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="JIT info" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://ju.edu.et/"
                  target="-blank"
                  rel="noopener norreferrer"
                >
                  jimma university link
                </FooterLink>
                <FooterLink
                  href="https://ju.edu.et/jit/library_service/"
                  target="-blank"
                  rel="noopener norreferrer"
                >
                  jimma university JIT library library service
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="LEGAL" />
              <FooterLinkGroup col>
                <FooterLink href="#">privecy policy</FooterLink>
                <FooterLink href="#">Terms and Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
