interface TitleProps {
  text: string;
  classes?: string;
}

export function Title({ text, classes }: TitleProps) {
  return (
    <h3
      className={`animate-text py-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary-focus to-primary-focus ${classes}`}
    >
      {text}
    </h3>
  );
}
