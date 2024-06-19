"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ImageIcon } from "lucide-react";
import { useRef, useState } from "react";

const PostForm = () => {
  const { user } = useUser();

  const ref = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLElement>(null);

  const [preview, setpreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HtmlInputElement>) => {
    const file = event.target.files?.(0);
    if (file) {
      setpreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <form ref={ref} action="">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={user?.imageUrl} />

            <AvatarFallback>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <input
            type="text"
            placeholder="Start writing a post"
            className="flex-1 outline-none rounded-full py-3 px-4 border"
            name="postInput"
          />

          <input
            ref={fileInputRef}
            type="file"
            onChange={handleImageChange}
            name="image"
            accept="image/*"
            hidden
          />
          <button type="submit" hidden>
            Post
          </button>
        </div>
        {/* Preview conditional check */}
        {preview && (
          <div className="mt-3">
            <img src={preview} alt="preview" className="w-full object-cover" />
          </div>
        )}

        <div>
          <Button
            type="button"
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            <ImageIcon className="mr-2 " size={16} color="currentColor" />
            Add
          </Button>

          {/* ADD A REMOVE PREVIEW Button */}
        </div>
      </form>
    </div>
  );
};

export default PostForm;
