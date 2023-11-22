import React from "react";

function Clients() {
  return (
    <section className="container mx-auto py-8">
      <div className="flex justify-center flex-wrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src="/assets/images/content/logo-adobe.png"
            alt="adobe"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src="/assets/images/content/logo-ikea.png"
            alt="ikea"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src="/assets/images/content/logo-herman-miller.png"
            alt="herman-miller"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src="/assets/images/content/logo-miele.png"
            alt="miele"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients;
