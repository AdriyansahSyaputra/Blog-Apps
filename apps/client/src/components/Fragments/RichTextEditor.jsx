
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  Image as ImageIcon,
  List,
  Heading2,
  AlignLeft,
  Undo2,
  Redo2,
  Pilcrow,
  Quote,
  Code,
  Minus,
} from "lucide-react";

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Placeholder.configure({
        placeholder: "Mulai menulis artikel Anda...",
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  if (!editor) return null;

  return (
    <div className="editor-container group">
      {/* Floating Context Menu */}
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="flex gap-1 p-1 bg-gray-800 rounded-lg shadow-lg"
        >
          <EditorButton
            editor={editor}
            command="toggleBold"
            icon={<Bold className="w-4 h-4 text-white" />}
            isActive="bold"
          />
          <EditorButton
            editor={editor}
            command="toggleItalic"
            icon={<Italic className="w-4 h-4 text-white" />}
            isActive="italic"
          />
          <EditorButton
            editor={editor}
            command="toggleLink"
            icon={<LinkIcon className="w-4 h-4 text-white" />}
            isActive="link"
          />
        </BubbleMenu>
      )}

      {/* Main Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-white border border-gray-200 rounded-t-lg shadow-sm">
        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            command="undo"
            icon={<Undo2 className="w-4 h-4" />}
            tooltip="Undo (Ctrl+Z)"
          />
          <EditorButton
            editor={editor}
            command="redo"
            icon={<Redo2 className="w-4 h-4" />}
            tooltip="Redo (Ctrl+Shift+Z)"
          />
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1"></div>

        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            command="toggleBold"
            icon={<Bold className="w-4 h-4" />}
            isActive="bold"
            tooltip="Bold (Ctrl+B)"
          />
          <EditorButton
            editor={editor}
            command="toggleItalic"
            icon={<Italic className="w-4 h-4" />}
            isActive="italic"
            tooltip="Italic (Ctrl+I)"
          />
          <EditorButton
            editor={editor}
            command="toggleUnderline"
            icon={<Underline className="w-4 h-4" />}
            isActive="underline"
            tooltip="Underline (Ctrl+U)"
          />
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1"></div>

        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            command="toggleHeading"
            args={{ level: 2 }}
            icon={<Heading2 className="w-4 h-4" />}
            isActive="heading"
            checkArgs={{ level: 2 }}
            tooltip="Heading 2"
          />
          <EditorButton
            editor={editor}
            command="toggleBulletList"
            icon={<List className="w-4 h-4" />}
            isActive="bulletList"
            tooltip="Bullet List"
          />
          <EditorButton
            editor={editor}
            command="toggleCode"
            icon={<Code className="w-4 h-4" />}
            isActive="code"
            tooltip="Code"
          />
          <EditorButton
            editor={editor}
            command="toggleBlockquote"
            icon={<Quote className="w-4 h-4" />}
            isActive="blockquote"
            tooltip="Quote"
          />
          <EditorButton
            editor={editor}
            command="setHorizontalRule"
            icon={<Minus className="w-4 h-4" />}
            tooltip="Divider"
          />
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1"></div>

        <div className="flex gap-1">
          <EditorButton
            editor={editor}
            command="setLink"
            icon={<LinkIcon className="w-4 h-4" />}
            isActive="link"
            tooltip="Insert Link"
            onClick={() => {
              const previousUrl = editor.getAttributes("link").href;
              const url = prompt("URL", previousUrl);
              if (url === null) return;
              if (url === "") {
                editor
                  .chain()
                  .focus()
                  .extendMarkRange("link")
                  .unsetLink()
                  .run();
                return;
              }
              editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: url })
                .run();
            }}
          />
          <EditorButton
            editor={editor}
            command="setImage"
            icon={<ImageIcon className="w-4 h-4" />}
            tooltip="Insert Image"
            onClick={() => {
              const url = prompt("Enter the URL of the image:");
              if (url) editor.chain().focus().setImage({ src: url }).run();
            }}
          />
        </div>
      </div>

      {/* Editor Area */}
      <div className="min-h-[300px] border border-t-0 border-gray-200 rounded-b-lg p-4 prose max-w-none bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
        <EditorContent editor={editor} />
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center mt-1 px-2 text-xs text-gray-500">
        <div>{editor.getCharacterCount()} characters</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hover:text-gray-700"
            onClick={() => editor.chain().focus().clearContent().run()}
          >
            Clear
          </button>
          <span>•</span>
          <span>TipTap</span>
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
}) {
  const active = isActive ? editor?.isActive(isActive, checkArgs) : false;
  const defaultOnClick = () => editor?.chain().focus()[command]().run();

  return (
    <button
      type="button"
      onClick={onClick || defaultOnClick}
      className={`p-2 rounded-md hover:bg-gray-100 transition-colors relative ${
        active
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:text-gray-900"
      }`}
      data-tooltip={tooltip}
    >
      {icon}
      {tooltip && (
        <span className="tooltip absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs bg-gray-800 text-white rounded whitespace-nowrap">
          {tooltip}
        </span>
      )}
    </button>
  );
}
