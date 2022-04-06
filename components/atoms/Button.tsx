import { ButtonProps } from "types";

export const Button = ({ type, children }: ButtonProps) => {
  const classes = {
    submit:
      "px-3 py-1 text-white rounded-10 bg-primary border-1 text-normal border-primary hover:bg-primary-dark active:bg-primary-darker hover:border-primary-dark active:border-primary-darker",
    icon: "p-1 bg-primary rounded-1 hover:bg-primary-dark active:bg-primary-darker hover:border-primary-dark active:border-primary-darker",
    outline:
      "px-3 py-1 bg-transparent rounded-10 border-1 text-normal border-primary text-primary hover:border-primary-dark active:border-primary-darker hover:text-primary-dark active:text-primary-darker",
  };
  return <button className={classes[type]}>{children}</button>;
};
