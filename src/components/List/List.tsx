"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Meta } from "@/types/api";

export interface CardComponentProps<T> {
  item: T;
  index: number;
  onClick: (item: T) => void;
}

interface ListProps<T> {
  cardComponent: React.ComponentType<CardComponentProps<T>>;
  isLoading: boolean;
  meta?: Meta;
  getKey: (item: T) => string | number;
  perPage?: number;
  data: T[];
  renderLoader?: (rows: number) => React.ReactNode;
  onCardClick: (item: T) => void;
  onPageChange: (page: number) => void
}

const INITIAL_PAGE = 1

const List = <T,>({ 
  cardComponent: CardComponent,
  meta,
  isLoading,
  perPage = 6,
  data = [],
  getKey,
  onCardClick,
  onPageChange,
}: ListProps<T>) => {

  const handlePreviousPage = () => {
    if (meta)  onPageChange(Math.max(meta.current_page - 1, INITIAL_PAGE))
  };

  const handleNextPage = () => {
    if (meta) onPageChange(Math.min(meta.current_page + 1, meta.total_pages));
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        {isLoading
          ? <ListLoader rows={perPage} />
          : data?.map((item, index) => (
              <CardComponent 
                key={getKey(item)}
                item={item}
                index={index} 
                onClick={() => onCardClick(item)}
              />
            ))
        }
      </div>
      {meta && (
        <div className="flex w-full justify-center gap-2 mt-4 self-center items-center">
          <Button
            variant="outline"
            onClick={handlePreviousPage}
            disabled={meta.current_page === 1}
          >
            <ChevronLeft />
          </Button>
          <p>{meta.current_page} de {meta.total_pages}</p>
          <Button
            variant="outline"
            onClick={handleNextPage}
            disabled={meta.current_page === meta.total_pages}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

interface ListLoaderProps {
  rows: number;
}

const ListLoader: React.FC<ListLoaderProps> = ({ rows }) => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton key={index} className="w-full h-[70px]" />
      ))}
    </div>
  );
};

export default List;
