export type UnitType = {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  cost: number;
  count: number;
  damage: number;
  attackAbility: object;
  level: number;
  levelBonus: number;
  levelCost: number;
  levelCostMultiplier: number;
  hp: number;
};

export type EnemyUnitType = {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  count: number;
  damage: number;
  hp: number;
  bounty: number;
};
