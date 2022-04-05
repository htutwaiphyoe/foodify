import Image from "next/image";
import { howItWorks } from "data";
import { HowItWorks as HowItWorksType } from "types";

export const HowItWorks = () => {
  return (
    <section>
      {howItWorks.map(
        ({ title, image, isReversed, description, Icon }: HowItWorksType) => (
          <article
            className={`grid grid-cols-2 ${
              isReversed ? "grid-flow-row-dense" : ""
            }`}
            key={title}
          >
            <figure
              className={`overflow-hidden w-72 h-50 ${
                isReversed ? "col-start-2" : ""
              }`}
            >
              <Image
                src={image}
                alt={title}
                width={1000}
                height={780}
                className="object-cover"
              />
            </figure>
            <div className="flex items-center justify-center bg-light">
              <div className="max-w-25">
                <Icon />
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
