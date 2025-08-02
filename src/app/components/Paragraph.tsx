import React, { FC } from 'react';

type ParagraphProps = {
  className?: string;
};

const Paragraph: FC<ParagraphProps> = ({ className }) => {
  return (
    <p className={`text-sm text-white ${className || ''}`}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid repellat fugiat fuga exercitationem modi. Exercitationem commodi id sequi quod, assumenda tenetur reiciendis nesciunt dolor rem quasi voluptatem facere doloribus autem.
    </p>
  );
};

export default Paragraph;
