export type HeaderAction = {
  form?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: 'submit' | 'button';
};

export type StatusLabel = {
  label: string;
  variant?: 'green' | 'red';
};
