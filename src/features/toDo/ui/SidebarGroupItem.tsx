import { TrashIconButton } from '../../../shared/ui/component';

export type SidebarGroupItemProps = {
  label: string;
  dotClassName: string;
  isActive?: boolean;
  onDelete?: (label: string) => void;
  isDeleteable?: boolean;
};

export const SidebarGroupItem = ({
  label,
  dotClassName,
  isActive = false,
  onDelete,
  isDeleteable = true,
}: SidebarGroupItemProps) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-3 rounded-2xl group ${
        isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
      } font-semibold`}
    >
      {isDeleteable && label !== 'すべて' && onDelete && (
        <TrashIconButton
          onClick={() => onDelete(label)}
          className="shrink-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity border-0 bg-transparent hover:bg-red-50"
          iconClassName="text-gray-400 hover:text-red-500"
          aria-label={`${label}を削除`}
        />
      )}
      <span className={`w-3 h-3 rounded-full ${dotClassName}`} aria-hidden="true" />
      <span className="text-lg flex-1">{label}</span>
    </div>
  );
};
