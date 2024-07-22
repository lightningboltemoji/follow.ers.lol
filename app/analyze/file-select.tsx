import { useRef, useState } from "react";

export default function FileSelect(props: { className?: string; parse: (file: File) => Promise<void> }) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<
    undefined | { valid: boolean; user: string; date: string; file: File }
  >();

  async function submit(event: any) {
    if (!selectedFile) {
      return;
    }
    event.preventDefault();
    await props.parse(selectedFile.file);
  }

  function fileChange(event: any) {
    if (!fileInput.current?.files) {
      return;
    }
    const file = fileInput.current.files[0];
    const match = file.name.match(/instagram-(.*)-(\d{4}-\d{2}-\d{2})-.*\.zip/);
    setSelectedFile({ valid: !!match, user: match?.at(1)!, date: match?.at(2)!, file });
  }

  function buttonLabel() {
    if (selectedFile) {
      return selectedFile.valid ? `Export from ${selectedFile.date}` : selectedFile.file.name;
    }
    return "Select export...";
  }

  function buttonTitle() {
    if (!selectedFile) {
      return (
        <>
          If you prefer, <b>turn on Airplane Mode ✈</b> to ensure
          <br />
          your data doesn't leave your phone
        </>
      );
    } else if (selectedFile.valid) {
      return (
        <>
          ✅ <b>Name matches expected format</b>
          <br />
          Looks like {selectedFile.user} from {selectedFile.date}
        </>
      );
    }
    return (
      <>
        ❓️ <b>Unexpected file name</b>
        <br />
        If you haven't renamed it, double check file is correct
      </>
    );
  }

  return (
    <div className={[props.className].join("")}>
      <form
        name="upload"
        onSubmit={submit}
        className="flex items-center bg-transparent rounded-lg outline outline-gray-800"
      >
        <label htmlFor="fileInput" className="min-w-0 flex-grow py-1 pl-3 pr-3">
          <span className="block truncate">{buttonLabel()}</span>
        </label>
        <input className="hidden" type="file" id="fileInput" onChange={fileChange} ref={fileInput} required />
        <button type="submit" className="bg-secondary text-white rounded-r-lg py-3 px-3">
          Analyze
        </button>
      </form>
      <h2 className="mt-2 text-xs text-center h-6">{buttonTitle()}</h2>
    </div>
  );
}
