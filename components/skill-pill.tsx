export const SkillPill = ({ skill }: { skill: string }) => {
  return (
    <div className="flex center items-center justify-center bg-zinc-900 py-1 px-3 rounded-md">
      <span className="text-white text-xs font-semibold">{skill}</span>
    </div>
  );
};
