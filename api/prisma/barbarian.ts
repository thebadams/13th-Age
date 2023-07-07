import { Ability, Prisma } from "@prisma/client";

type classInfo = Prisma.ClassCreateInput

const barbarian: classInfo = {
	name: 'Barbarian',
	bonuses: [Ability.Strength, Ability.Constitution],
	classFeatures: {
		createMany: {
			data: [
				{
					name: 'Barbarian Rage',
					description: `Once per day, use a quick action to start raging. A rage lasts until the end of battle, or about 5 minutes.

					While raging, you roll 2d20 to hit with your barbarian melee and thrown weapon attacks instead of 1d20. Use the higher roll for the attack. If you roll a natural 11+ with both dice and your highest attack roll is a hit, the attack is a critical hit!

					Recharge 16+: After a battle in which you rage, roll a d20 and add your Constitution modifier. On a 16+, you can use Barbarian Rage again later in the day.`
				}
			]
		}
	}
}