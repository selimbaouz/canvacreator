"use client";

import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";
import React, { useState, useRef, useEffect } from "react";
import { templates } from "@/data";
import Image from "next/image";
import { useSnippetsFiltered } from "@/store/snippetsFiltered";

const Content = () => {
  const [openModels, setOpenModels] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openImagesLinkIndex, setOpenImagesLinkIndex] = useState<number | null>(null);  
  const [selectedModel, setSelectedModel] = useState<string | null>("Models");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("All categories");
  const modelsDropdownRef = useRef<HTMLDivElement>(null);
  const categoriesDropdownRef = useRef<HTMLDivElement>(null);
  const {searchQuery} = useSnippetsFiltered();

  const models = ["Models"];
  const categories = ["All categories", "Website", "Comeup ads", "Etsy ads", "Social media", "Presentation", "Logo", "Carousel", "Cover", "Product design", "CV"];

  const filteredTemplates = templates.filter((template) => {
    const matchCategory =
      selectedCategory === "All categories" || template.category === selectedCategory;
    const matchModel =
      selectedModel === "Models" || template.type === selectedModel;
    const matchSearch =
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
  
    return matchCategory && matchModel && matchSearch;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        modelsDropdownRef.current &&
        !modelsDropdownRef.current.contains(target)
      ) {
        setOpenModels(false);
      }
      if (
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(target)
      ) {
        setOpenCategories(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".template-dropdown")) {
        setOpenImagesLinkIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("w-full space-y-4", "lg:space-y-5")}>
      <h2 className={cn("font-semibold text-xl", "lg:text-3xl")}>All articles</h2>
      <div className={cn("space-y-2", "md:flex md:items-center md:space-y-0 md:gap-2 md:max-w-2xl")}>
        <SearchBar />
        <div className={cn("flex gap-2")}>
            {/* Models */}
            <div className="relative inline-block text-left" ref={modelsDropdownRef}>
            <button
                onClick={() => {
                setOpenModels(!openModels);
                setOpenCategories(false);
                }}
                className={cn("cursor-pointer inline-flex gap-3 items-center justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-white", "lg:text-base")}
            >
                Models
                <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {openModels && (
                <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-transparent shadow-lg ring-1 ring-white/60 ring-opacity-5 z-50">
                {models.map((model) => (
                    <div
                    key={model}
                    onClick={() => {
                      setSelectedModel(model);
                      setOpenModels(false);
                    }}
                    className={cn(
                        "py-3 px-4 flex items-center justify-between cursor-pointer transition-colors",
                        selectedModel === model && "bg-gray-700 rounded-md"
                    )}
                    >
                    <span className="block text-sm">{model}</span>
                    {selectedModel === model && (
                        <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                    )}
                    </div>
                ))}
                </div>
            )}
            </div>

            {/* Categorys */}
            <div className="relative inline-block text-left" ref={categoriesDropdownRef}>
            <button
                onClick={() => {
                setOpenCategories(!openCategories);
                setOpenModels(false);
                }}
                className={cn("cursor-pointer inline-flex gap-3 items-center justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-white", "lg:text-base")}
            >
                Categories
                <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {openCategories && (
                <div className="absolute left-0 mt-2 w-44 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-white/60 ring-opacity-5 z-50">
                {categories.map((category) => (
                    <div
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setOpenCategories(false);
                    }
                    }
                    className={cn(
                        "py-3 px-4 flex items-center justify-between cursor-pointer transition-colors",
                        selectedCategory === category && "bg-primary rounded-md"
                    )}
                    >
                    <span className="block text-sm">{category}</span>
                    </div>
                ))}
                </div>
            )}
            </div>
        </div>
      </div>
      <p className={cn("text-sm text-white/60", "lg:text-lg")}>
        {templates.length} models
      </p>
      <div className="columns-1 gap-4 lg:columns-4 md:columns-2">
        {filteredTemplates.map((data, i) => (
          <div 
            key={i} 
            className="break-inside-avoid mb-4 relative"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenImagesLinkIndex(prev => (prev === i ? null : i));
              }} 
              className={cn("absolute top-3 right-2 bg-background/30 p-1 rounded-lg cursor-pointer", "hover:bg-background/50")}
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>

            {openImagesLinkIndex === i && (
                <div 
                  onMouseDown={() => {
                    window.open(data.canvaLink, "_blank");
                  }}
                  className="absolute right-3 top-14 mt-2 w-auto origin-top-right rounded-md bg-background shadow-lg ring-1 ring-white/60 ring-opacity-5 z-50">
                    <div 
                      className={cn(
                          "py-3 px-4 flex items-center justify-center cursor-pointer transition-colors gap-4",
                          "hover:bg-primary"
                      )}  
                    >
                      {/* <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c35.3 27.6 79.7 44C93.1 416 0 322.9 0 208S93.1 0 208S208s93.1s208s208"/>
                      </svg> */}
                        <span className="block text-sm">Prévisualiser ce modèle</span>
                    </div>
                </div>
            )}
            <Image 
              src={data.imageUrl}
              alt={`Template ${i}`}
              width={1080}
              height={1080}
              className="w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
