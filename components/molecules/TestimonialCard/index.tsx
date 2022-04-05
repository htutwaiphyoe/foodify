import Image from "next/image";
import { Testimonial } from "types";

export const TestimonialCard = ({
  image,
  name,
  review,
}: Testimonial): JSX.Element => {
  return (
    <div className="max-w-25">
      <figure>
        <Image
          width={60}
          height={60}
          src={image}
          alt={name}
          className="rounded-full"
        />
      </figure>
      <p className="my-2">{review}</p>
      <p>— {name}</p>
    </div>
  );
};
