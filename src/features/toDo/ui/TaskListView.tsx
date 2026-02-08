import { TODO_MESSAGES } from '../messages';
import { ToDoTaskListItem, type TaskListItemTask } from './TaskListItem';
import { ToDoTopBar } from './TopBar';

type Task = TaskListItemTask;

type TaskGroup = {
  id: string;
  label: string;
  dotClassName: string;
  countLabel: string;
  tasks: Task[];
};

export const ToDoTaskListView = () => {
  const groups: TaskGroup[] = [
    {
      id: 'work',
      label: 'Work',
      dotClassName: 'bg-blue-200',
      countLabel: '1件',
      tasks: [
        {
          id: 't1',
          title: 'プロジェクト資料の作成',
          dueLabel: '02/10 10:00',
          status: '進行中',
        },
      ],
    },
    {
      id: 'shopping',
      label: 'Shopping',
      dotClassName: 'bg-green-200',
      countLabel: '1件',
      tasks: [
        {
          id: 't2',
          title: '牛乳を買う',
          dueLabel: '02/07 18:00',
          status: '完了',
        },
      ],
    },
  ];

  const taskCount = groups.reduce((sum, group) => sum + group.tasks.length, 0);

  return (
    <div className="bg-gray-50">
      <ToDoTopBar />

      <div className="px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{TODO_MESSAGES.screen.taskList}</h1>
          <p className="mt-2 text-gray-500">
            {taskCount} {TODO_MESSAGES.message.taskCountsFound}
          </p>
        </div>

        <div className="space-y-10">
          {groups.map((group) => (
            <section key={group.id}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-3 h-3 rounded-full ${group.dotClassName}`} aria-hidden="true" />
                <div className="text-2xl font-semibold text-gray-900">{group.label}</div>
                <div className="text-gray-400 font-semibold ml-2">{group.countLabel}</div>
              </div>

              <div className="space-y-4">
                {group.tasks.map((task) => (
                  <ToDoTaskListItem key={task.id} task={task} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
