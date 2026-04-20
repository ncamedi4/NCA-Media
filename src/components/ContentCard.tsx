import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { ArrowRight, Link as LinkIcon, Check } from '@phosphor-icons/react';
import { PrimaryButton } from '@/src/components/Layout';

interface ContentCardProps {
  icon?: React.ElementType | React.ReactNode;
  title: string;
  desc: string;
  className?: string;
  linkText?: string;
  onClick?: () => void;
}

export const ContentCard = ({ icon, title, desc, className, linkText, onClick }: ContentCardProps) => {
  return (
    <div 
      className={cn("relative h-full border border-foreground/5 bg-background p-8 transition-all duration-300 flex flex-col group shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 rounded-md", className)}
      onClick={onClick}
    >
      {icon && (
        <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground mb-6 rounded-2xl">
          {React.isValidElement(icon) ? icon : React.createElement(icon as React.ElementType, { weight: "duotone", className: "w-6 h-6" })}
        </div>
      )}
      <h3 className="text-foreground text-2xl font-bold mb-4 pr-8">
        {title}
      </h3>
      <p className="text-foreground/70 text-base leading-relaxed mb-6 flex-grow">
        {desc}
      </p>
    </div>
  );
};
