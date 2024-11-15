import { Button } from "./ui/button";

const FooterPage = () => {
  const socialMedias = [
    { id: 0, photo: "/fb-logo.svg", title: "Facebook" },
    { id: 1, photo: "/ig-logo.svg", title: "Instagram" },
    { id: 2, photo: "/x-logo.svg", title: "X" },
  ];

  return (
    <section className="pb-4">
      <div className="bg-[#1B1B1E] p-4 rounded-b-[32px]">
        <div className="border-b border-[#2D2D30] pb-4">
          <h4 className="text-3xl text-white font-medium mb-6">
            Gain Excellence with the Best POS Solutions
          </h4>
          <div className="flex flex-col gap-4">
            <p className="text-base text-[#C2C2C2]">
              Using our app in business, especially in the restaurant industry,
              has many advantages. Here are some of them:
            </p>
            <div className="inline-flex p-2 bg-[#232329] border border-border-2 rounded-full mb-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full text-sm text-white p-1 outline-none bg-transparent"
              />
              <Button>Search</Button>
            </div>
          </div>
        </div>
        <div className="pt-4 flex flex-col gap-6">
          <div>
            <div className="w-20 mb-2">
              <img src="/coca-white-logo.svg" alt="Coca logo" />
            </div>
            <p className="text-white/70 text-sm">
              &copy; 2023 Coca, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="text-white flex flex-col gap-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Resource</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="inline-flex w-max items-center gap-4 p-2 rounded-full bg-[#232329]">
              {socialMedias?.map((socialMedia) => (
                <li key={socialMedia?.id}>
                  <img
                    src={socialMedia?.photo}
                    className="h-6"
                    alt={socialMedia?.title}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPage;
