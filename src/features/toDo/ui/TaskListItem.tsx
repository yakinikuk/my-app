import { PencilIconButton, TrashIconButton } from '../../../shared/ui/component';
import { CalendarIcon } from '../../../shared/ui/icon';

export type TaskStatus = '未着手' | '進行中' | '完了';

export type TaskListItemTask = {
  id: string;
  title: string;
  dueLabel: string;
  status: TaskStatus;
};

const statusPillClassName = (status: TaskStatus) => {
  switch (status) {
    case '進行中':
      return 'bg-blue-100 text-blue-700';
    case '未着手':
      return 'bg-gray-100 text-gray-700';
    case '完了':
      return 'bg-green-100 text-green-700';
  }
};

export const ToDoTaskListItem = ({ task }: { task: TaskListItemTask }) => {
  const isCompleted = task.status === '完了';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 flex items-center gap-4">
      <div
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
          isCompleted ? 'border-green-500 bg-green-500' : 'border-gray-200 bg-white'
        }`}
        aria-hidden="true"
      >
        {isCompleted && (
          <svg viewBox="0 0 16 12" className="w-4 h-3 text-white" fill="none" aria-hidden="true">
            <path d="M1 6.5L5.5 11L15 1" stroke="currentColor" strokeWidth="2" />
          </svg>
        )}
      </div>

      <div className="flex-1">
        <div className="text-xl font-semibold text-gray-900">{task.title}</div>
        <div className="mt-2 flex items-center gap-3 text-gray-500">
          <span className="inline-flex items-center gap-2">
            <CalendarIcon className="text-gray-400" />
            <span className="font-semibold">{task.dueLabel}</span>
          </span>
          <span
            className={`px-3 py-1 rounded-lg text-sm font-semibold ${statusPillClassName(task.status)}`}
          >
            {task.status}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <PencilIconButton aria-label="編集" />
        <TrashIconButton aria-label="削除" />
      </div>
    </div>
  );
};
