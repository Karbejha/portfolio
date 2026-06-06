"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const AchievementsSection = ({ content }) => {
  return (
    <section
      className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      aria-label={content.ariaLabel}
    >
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {content.items.map((achievement) => (
          <div
            key={achievement.metric}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value, 10)}
                locale={content.locale}
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
