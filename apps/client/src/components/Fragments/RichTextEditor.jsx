import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderlineExtension from "@tiptap/extension-underline";
import LinkExtension from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";
import PlaceholderExtension from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import {
  Bold,
  Italic,
  Underline,
  Link,
  Image,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Undo2,
  Redo2,
  Quote,
  Code,
  Code2,
  Minus,
  Type,
  Strikethrough,
} from "lucide-react";

export default function RichTextEditor({ value, onChange, darkMode }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      UnderlineExtension,
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: darkMode
            ? "text-blue-400 hover:text-blue-300 underline"
            : "text-blue-600 hover:text-blue-500 underline",
        },
      }),
      ImageExtension.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg",
        },
      }),
      PlaceholderExtension.configure({
        placeholder: "Mulai menulis artikel Anda...",
      }),
      CharacterCount.configure({}),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: `prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none ${
          darkMode
            ? "prose-invert prose-headings:text-gray-100 prose-p:text-gray-200 prose-strong:text-gray-100 prose-code:text-gray-100 prose-pre:bg-gray-800 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600"
            : "prose-gray prose-headings:text-gray-900 prose-p:text-gray-700"
        }`,
      },
    },
  });

  if (!editor) return null;

  const handleLinkClick = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Masukkan URL:", previousUrl || "");

    if (url === null) return;

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const handleImageClick = () => {
    const url = window.prompt("Masukkan URL gambar:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const handleHeadingClick = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  const toolbarClass = `flex flex-wrap items-center gap-1 p-3 border-b transition-colors ${
    darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
  }`;

  const editorClass = `min-h-[400px] p-6 transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent ${
    darkMode
      ? "bg-gray-900 border-gray-700 text-gray-100"
      : "bg-white border-gray-200 text-gray-900"
  }`;

  const bubbleMenuClass = `flex gap-1 p-2 rounded-lg shadow-xl border backdrop-blur-sm ${
    darkMode ? "bg-gray-800/95 border-gray-600" : "bg-white/95 border-gray-200"
  }`;

  return (
    <div
      className={`editor-container rounded-lg border overflow-hidden shadow-lg ${
        darkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      {/* Floating Context Menu */}
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className={bubbleMenuClass}
        >
          <EditorButton
            editor={editor}
            command="toggleBold"
            icon={<Bold className="w-4 h-4" />}
            isActive="bold"
            darkMode={darkMode}
            tooltip="Bold"
          />
          <EditorButton
            editor={editor}
            command="toggleItalic"
            icon={<Italic className="w-4 h-4" />}
            isActive="italic"
            darkMode={darkMode}
            tooltip="Italic"
          />
          <EditorButton
            editor={editor}
            command="toggleUnderline"
            icon={<Underline className="w-4 h-4" />}
            isActive="underline"
            darkMode={darkMode}
            tooltip="Underline"
          />
          <EditorButton
            editor={editor}
            command="toggleStrike"
            icon={<Strikethrough className="w-4 h-4" />}
            isActive="strike"
            darkMode={darkMode}
            tooltip="Strikethrough"
          />
          <div
            className={`w-px h-6 mx-1 ${
              darkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          ></div>
          <EditorButton
            editor={editor}
            icon={<Link className="w-4 h-4" />}
            isActive="link"
            darkMode={darkMode}
            tooltip="Link"
            onClick={handleLinkClick}
          />
        </BubbleMenu>
      )}

      {/* Main Toolbar */}
      <div className={toolbarClass}>
        {/* Undo/Redo */}
        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            command="undo"
            icon={<Undo2 className="w-4 h-4" />}
            tooltip="Undo (Ctrl+Z)"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="redo"
            icon={<Redo2 className="w-4 h-4" />}
            tooltip="Redo (Ctrl+Shift+Z)"
            darkMode={darkMode}
          />
        </div>

        <div
          className={`w-px h-6 mx-2 ${
            darkMode ? "bg-gray-600" : "bg-gray-300"
          }`}
        ></div>

        {/* Text Formatting */}
        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            command="toggleBold"
            icon={<Bold className="w-4 h-4" />}
            isActive="bold"
            tooltip="Bold (Ctrl+B)"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="toggleItalic"
            icon={<Italic className="w-4 h-4" />}
            isActive="italic"
            tooltip="Italic (Ctrl+I)"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="toggleUnderline"
            icon={<Underline className="w-4 h-4" />}
            isActive="underline"
            tooltip="Underline (Ctrl+U)"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="toggleStrike"
            icon={<Strikethrough className="w-4 h-4" />}
            isActive="strike"
            tooltip="Strikethrough"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="toggleCode"
            icon={<Code className="w-4 h-4" />}
            isActive="code"
            tooltip="Inline Code"
            darkMode={darkMode}
          />
        </div>

        <div
          className={`w-px h-6 mx-2 ${
            darkMode ? "bg-gray-600" : "bg-gray-300"
          }`}
        ></div>

        {/* Headings */}
        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            icon={<Heading1 className="w-4 h-4" />}
            isActive="heading"
            checkArgs={{ level: 1 }}
            tooltip="Heading 1"
            darkMode={darkMode}
            onClick={() => handleHeadingClick(1)}
          />
          <EditorButton
            editor={editor}
            icon={<Heading2 className="w-4 h-4" />}
            isActive="heading"
            checkArgs={{ level: 2 }}
            tooltip="Heading 2"
            darkMode={darkMode}
            onClick={() => handleHeadingClick(2)}
          />
          <EditorButton
            editor={editor}
            icon={<Heading3 className="w-4 h-4" />}
            isActive="heading"
            checkArgs={{ level: 3 }}
            tooltip="Heading 3"
            darkMode={darkMode}
            onClick={() => handleHeadingClick(3)}
          />
        </div>

        <div
          className={`w-px h-6 mx-2 ${
            darkMode ? "bg-gray-600" : "bg-gray-300"
          }`}
        ></div>

        {/* Lists and Blocks */}
        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            command="toggleBulletList"
            icon={<List className="w-4 h-4" />}
            isActive="bulletList"
            tooltip="Bullet List"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="toggleOrderedList"
            icon={<ListOrdered className="w-4 h-4" />}
            isActive="orderedList"
            tooltip="Numbered List"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="toggleBlockquote"
            icon={<Quote className="w-4 h-4" />}
            isActive="blockquote"
            tooltip="Quote"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="toggleCodeBlock"
            icon={<Code2 className="w-4 h-4" />}
            isActive="codeBlock"
            tooltip="Code Block"
            darkMode={darkMode}
          />
          <EditorButton
            editor={editor}
            command="setHorizontalRule"
            icon={<Minus className="w-4 h-4" />}
            tooltip="Horizontal Rule"
            darkMode={darkMode}
          />
        </div>

        <div
          className={`w-px h-6 mx-2 ${
            darkMode ? "bg-gray-600" : "bg-gray-300"
          }`}
        ></div>

        {/* Insert Elements */}
        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            icon={<Link className="w-4 h-4" />}
            isActive="link"
            tooltip="Insert Link"
            darkMode={darkMode}
            onClick={handleLinkClick}
          />
          <EditorButton
            editor={editor}
            icon={<Image className="w-4 h-4" />}
            tooltip="Insert Image"
            darkMode={darkMode}
            onClick={handleImageClick}
          />
        </div>

        <div className="flex-1"></div>

        {/* Clear Content */}
        <EditorButton
          editor={editor}
          command="clearContent"
          icon={<Type className="w-4 h-4" />}
          tooltip="Clear All Content"
          darkMode={darkMode}
        />
      </div>

      {/* Editor Area */}
      <div className={editorClass}>
        <EditorContent editor={editor} />
      </div>

      {/* Status Bar */}
      <div
        className={`flex justify-between items-center px-4 py-2 text-sm border-t ${
          darkMode
            ? "bg-gray-800 border-gray-700 text-gray-400"
            : "bg-gray-50 border-gray-200 text-gray-500"
        }`}
      >
        <div className="flex items-center gap-4">
          {editor?.storage.characterCount && (
            <div className="text-sm text-gray-500 mt-2">
              {editor.storage.characterCount.characters()} characters •{" "}
              {editor.storage.characterCount.words()} words
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`text-sm hover:underline transition-colors ${
              darkMode ? "hover:text-gray-200" : "hover:text-gray-700"
            }`}
            onClick={() => editor.chain().focus().clearContent().run()}
          >
            Clear All
          </button>
          <span>•</span>
          <span className="text-xs font-medium">TipTap Editor</span>
        </div>
      </div>
    </div>
  );
}

function EditorButton({
  editor,
  command,
  icon,
  isActive,
  checkArgs,
  tooltip,
  onClick,
  darkMode = false,
  args,
}) {
  const active = isActive ? editor?.isActive(isActive, checkArgs) : false;
  const defaultOnClick = () => {
    if (args) {
      editor?.chain().focus()[command](args).run();
    } else {
      editor?.chain().focus()[command]?.().run();
    }
  };

  const baseClass = `p-2 rounded-md transition-all duration-200 relative group disabled:opacity-50 disabled:cursor-not-allowed ${
    darkMode
      ? "hover:bg-gray-700 text-gray-300 hover:text-gray-100"
      : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
  }`;

  const activeClass = darkMode
    ? "bg-blue-600 text-white shadow-lg"
    : "bg-blue-100 text-blue-600 shadow-sm";

  return (
    <button
      type="button"
      onClick={onClick || defaultOnClick}
      className={`${baseClass} ${active ? activeClass : ""}`}
      title={tooltip}
      disabled={
        command && editor && !editor.can().chain().focus()[command]?.().run()
      }
    >
      {icon}
      {tooltip && (
        <span
          className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 ${
            darkMode
              ? "bg-gray-900 text-gray-100 border border-gray-700"
              : "bg-gray-800 text-white"
          }`}
        >
          {tooltip}
        </span>
      )}
    </button>
  );
}
