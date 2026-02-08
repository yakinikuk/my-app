import { useState } from 'react';
import type { TaskStatus } from './TaskListItem';
import { TODO_MESSAGES } from '../messages';

type TaskEditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  task: {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    groupId?: string;
    deadline?: string;
    learned?: string;
  };
  onSave: (task: {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    groupId?: string;
    deadline?: string;
    learned?: string;
  }) => void;
};

export const ToDoTaskEditModal = ({ isOpen, onClose, task, onSave }: TaskEditModalProps) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [status, setStatus] = useState<TaskStatus>(task.status);
  const [groupId, setGroupId] = useState(task.groupId || '');
  const [deadline, setDeadline] = useState(task.deadline || '');
  const [learned, setLearned] = useState(task.learned || '');
  const [titleError, setTitleError] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    // バリデーション
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setTitleError(TODO_MESSAGES.validation.titleRequired);
      return;
    }

    onSave({
      id: task.id,
      title: trimmedTitle,
      description: description.trim() || undefined,
      status,
      groupId: groupId || undefined,
      deadline: deadline || undefined,
      learned: learned.trim() || undefined,
    });
    onClose();
  };

  const handleCancel = () => {
    // フォームをリセット
    setTitle(task.title);
    setDescription(task.description || '');
    setStatus(task.status);
    setGroupId(task.groupId || '');
    setDeadline(task.deadline || '');
    setLearned(task.learned || '');
    setTitleError('');
    onClose();
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (titleError && value.trim()) {
      setTitleError('');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleCancel}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 rounded-t-3xl">
          <h2 className="text-3xl font-bold text-gray-900">{TODO_MESSAGES.screen.taskEdit}</h2>
        </div>

        <div className="px-8 py-6 space-y-6">
          {/* タイトル */}
          <div>
            <label htmlFor="task-title" className="block text-sm font-semibold text-gray-700 mb-2">
              {TODO_MESSAGES.form.title} <span className="text-red-500">*</span>
            </label>
            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                titleError ? 'border-red-500' : 'border-gray-200'
              } text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100`}
              placeholder="タスクのタイトルを入力"
              maxLength={100}
            />
            {titleError && <p className="mt-1 text-sm text-red-500">{titleError}</p>}
          </div>

          {/* 詳細説明 */}
          <div>
            <label
              htmlFor="task-description"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {TODO_MESSAGES.form.description}
            </label>
            <textarea
              id="task-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
              placeholder="詳細説明を入力"
              rows={4}
            />
          </div>

          {/* ステータス */}
          <div>
            <label htmlFor="task-status" className="block text-sm font-semibold text-gray-700 mb-2">
              {TODO_MESSAGES.form.status}
            </label>
            <select
              id="task-status"
              value={status}
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="未着手">{TODO_MESSAGES.status.notStarted}</option>
              <option value="進行中">{TODO_MESSAGES.status.inProgress}</option>
              <option value="完了">{TODO_MESSAGES.status.completed}</option>
              <option value="保存">{TODO_MESSAGES.status.archived}</option>
            </select>
          </div>

          {/* グループ */}
          <div>
            <label htmlFor="task-group" className="block text-sm font-semibold text-gray-700 mb-2">
              {TODO_MESSAGES.form.group}
            </label>
            <select
              id="task-group"
              value={groupId}
              onChange={(e) => setGroupId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">{TODO_MESSAGES.group.none}</option>
              <option value="work">{TODO_MESSAGES.group.work}</option>
              <option value="private">{TODO_MESSAGES.group.private}</option>
              <option value="shopping">{TODO_MESSAGES.group.shopping}</option>
              <option value="health">{TODO_MESSAGES.group.health}</option>
              <option value="other">{TODO_MESSAGES.group.other}</option>
            </select>
          </div>

          {/* 締め切り */}
          <div>
            <label
              htmlFor="task-deadline"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {TODO_MESSAGES.form.deadline}
            </label>
            <input
              id="task-deadline"
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* 学んだこと */}
          <div>
            <label htmlFor="task-learned" className="block text-sm font-semibold text-gray-700 mb-2">
              {TODO_MESSAGES.form.learned}
            </label>
            <textarea
              id="task-learned"
              value={learned}
              onChange={(e) => setLearned(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
              placeholder={TODO_MESSAGES.message.learnedPlaceholder}
              rows={3}
            />
          </div>
        </div>

        {/* アクションボタン */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-8 py-6 rounded-b-3xl flex gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 h-12 px-6 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50"
          >
            {TODO_MESSAGES.button.cancel}
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 h-12 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            {TODO_MESSAGES.button.save}
          </button>
        </div>
      </div>
    </div>
  );
};
