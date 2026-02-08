import { ToDoKanbanTaskCard, type KanbanTask } from './KanbanTaskCard';
import { ToDoTopBar } from './TopBar';
import { TODO_MESSAGES } from '../messages';

type TaskStatus = '未着手' | '進行中' | '完了';

type BoardTask = KanbanTask;

type Column = {
  id: string;
  status: TaskStatus;
  count: number;
  tasks: BoardTask[];
};

export const ToDoKanbanBoardView = () => {
  const columns: Column[] = [
    {
      id: 'todo',
      status: '未着手',
      count: 1,
      tasks: [
        {
          id: 'k1',
          groupLabel: 'Shopping',
          groupPillClassName: 'bg-green-100 text-green-700',
          title: '牛乳を買う',
          description: '帰りにスーパーに寄る。',
          dueLabel: '02/07',
        },
      ],
    },
    {
      id: 'doing',
      status: '進行中',
      count: 1,
      tasks: [
        {
          id: 'k2',
          groupLabel: 'Work',
          groupPillClassName: 'bg-blue-100 text-blue-700',
          title: 'プロジェクト資料の作成',
          description: '来週の会議で使用するプレゼン資料を完成させる。',
          dueLabel: '02/10',
        },
      ],
    },
    {
      id: 'done',
      status: '完了',
      count: 1,
      tasks: [
        {
          id: 'k3',
          groupLabel: 'Health',
          groupPillClassName: 'bg-pink-100 text-pink-700',
          title: 'ジムでトレーニング',
          description: '新しいトレーニングメニューを試す。',
          dueLabel: '02/05',
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <ToDoTopBar />

      <div className="px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{TODO_MESSAGES.screen.kanbanBoard}</h1>
          <p className="mt-2 text-gray-500">3 {TODO_MESSAGES.message.taskCountsFound}</p>
        </div>

        <div className="flex gap-10 overflow-x-auto pb-6">
          {columns.map((column) => (
            <section key={column.id} className="min-w-[360px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl font-semibold text-gray-900">{column.status}</div>
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-semibold">
                  {column.count}
                </div>
              </div>

              <div className="space-y-6">
                {column.tasks.map((task) => (
                  <ToDoKanbanTaskCard key={task.id} task={task} />
                ))}

                <button
                  type="button"
                  className="w-full h-14 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 font-semibold"
                >
                  + {TODO_MESSAGES.button.add}
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
