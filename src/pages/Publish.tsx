import { Appbar } from "../components/AppBar";

export const Publish = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center w-full mt-10">
        <div className="max-w-screen-lg w-full">
          <input
            type="text"
            className="w-full outline-none h-14 text-base font-normal bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Title"
          />
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

function TextEditor() {
  return (
    <form>
      <div className="w-full mb-4 border border-gray-300 rounded focus:ring-blue-500 mt-2">
        <div className="flex items-center justify-between border-b">
          <div className=" py-2 bg-white rounded-b-lg w-full">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              id="editor"
              rows={8}
              className="appearance-none outline-none block w-full pl-3 text-sm text-gray-800 bg-white rounded-lg"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
        >
          Publish post
        </button>
      </div>
    </form>
  );
}
