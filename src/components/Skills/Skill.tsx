import { ReactElement } from 'react';
import { SkillBox } from './style';

type SkillProps = {
  icon?: ReactElement;
};

export function Skill({ icon }: SkillProps) {
  return (
    <>
      <SkillBox>{icon}</SkillBox>
    </>
  );
}
