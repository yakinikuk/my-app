const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

const BellIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PlusIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export const ToDoTopBar = ({ placeholder }: { placeholder?: string }) => {
  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex-1">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </div>
          <input
            className="w-full h-12 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder:text-gray-400 outline-none"
            placeholder={placeholder ?? 'タスクを検索...'}
            readOnly
            aria-label="検索"
          />
        </div>
      </div>

      <button
        type="button"
        className="relative w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-600 flex items-center justify-center"
        aria-label="通知"
      >
        <BellIcon />
        <span
          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        className="h-12 px-5 rounded-2xl bg-blue-600 text-white font-semibold flex items-center gap-2"
        aria-label="新規作成"
      >
        <PlusIcon className="text-white" />
        新規作成
      </button>
    </div>
  );
};
