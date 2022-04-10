import Image from "next/image";
import { howItWorks } from "data";
import { HowItWorks as HowItWorksType } from "types";

export const HowItWorks = () => {
  return (
    <section id="how-it-works">
      {howItWorks.map(
        ({ title, image, isReversed, description, Icon }: HowItWorksType) => (
          <article
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              isReversed ? "grid-flow-row-dense" : ""
            }`}
            key={title}
          >
            <figure
              className={`overflow-hidden w-full h-40 sm:h-50 xxl:h-70 xxxl:h-80 relative ${
                isReversed ? "sm:col-start-2" : ""
              }`}
            >
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="flex items-center justify-center px-3 py-10 xs:py-10 xs:px-10 bg-light">
              <div className="w-full text-center xs:text-left xs:max-w-25">
                <div className="flex justify-center w-full xs:justify-start">
                  <Icon />
                </div>
                <h3 className="mb-1 font-medium text-md">{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </article>
        )
      )}
    </section>
  );
};
