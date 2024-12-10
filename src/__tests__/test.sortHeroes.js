import sortHeroesByHealth from '../sortHeroes';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
    expect(sortedHeroes).not.toBe([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should return empty array when input is empty', () => {
    const heroes = [];
    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).toEqual([]);
  });

  test('should handle single hero', () => {
    const heroes = [{ name: 'маг', health: 50 }];
    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).toEqual([{ name: 'маг', health: 50 }]);
  });
});
