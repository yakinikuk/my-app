import { CalendarIcon } from '../../../shared/ui/icon';
import { PencilIconButton, TrashIconButton } from '../../../shared/ui/component';

export type KanbanTask = {
  id: string;
  groupLabel: string;
  groupPillClassName: string;
  title: string;
  description: string;
  dueLabel: string;
};

export const ToDoKanbanTaskCard = ({ task }: { task: KanbanTask }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-start justify-between gap-4">
        <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${task.groupPillClassName}`}>
          {task.groupLabel}
        </span>
        <PencilIconButton aria-label="編集" />
      </div>

      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-900">{task.title}</div>
        <div className="mt-2 text-gray-500 leading-relaxed">{task.description}</div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-gray-500">
        <div className="flex items-center gap-2 font-semibold">
          <CalendarIcon className="text-gray-400" />
          {task.dueLabel}
        </div>
        <TrashIconButton aria-label="削除" />
      </div>
    </div>
  );
};
