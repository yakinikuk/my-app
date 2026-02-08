import type React from 'react';

import { PencilIcon } from '../icon';

type Props = Omit<React.ComponentPropsWithoutRef<'button'>, 'children'> & {
  iconClassName?: string;
};

export const PencilIconButton = ({
  type = 'button',
  className,
  iconClassName,
  ...props
}: Props) => {
  const baseClassName =
    'w-9 h-9 rounded-xl border border-gray-100 text-gray-500 flex items-center justify-center';

  return (
    <button
      type={type}
      className={className ? `${baseClassName} ${className}` : baseClassName}
      {...props}
    >
      <PencilIcon className={iconClassName} />
    </button>
  );
};
