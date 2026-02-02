import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center space-y-6 p-8 max-w-md">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
            ページが見つかりません
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-lg">
          お探しのページは存在しないか、移動または削除された可能性があります。
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            ホームに戻る
          </Link>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>または、以下をお試しください：</p>
            <ul className="mt-2 space-y-1">
              <li>• URLが正しく入力されているか確認</li>
              <li>• ブラウザの更新ボタンを押す</li>
              <li>• ナビゲーションメニューから移動</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
