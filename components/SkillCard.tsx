interface SkillCardProps {
  skillName: string;
  proficiency: string;
  icon?: string;
}

export default function SkillCard({ skillName, proficiency, icon }: SkillCardProps) {
  return (
    <div className="card hover-lift">
      <div className="flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div>
          <h3 className="heading-4">{skillName}</h3>
          <p className="text-muted text-sm">{proficiency}</p>
        </div>
      </div>
    </div>
  );
}
