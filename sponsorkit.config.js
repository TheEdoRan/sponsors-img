import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
	// Providers configs
	github: {
		login: "TheEdoRan",
		type: "user",
	},
	renderer: "tiers", // or 'circles'
	formats: ["svg", "png"],
	tiers: [
		// Past sponsors, currently only supports GitHub
		{
			title: "Past Sponsors",
			monthlyDollars: -1,
			preset: tierPresets.xs,
		},
		// Default tier
		{
			title: "Supporters",
			preset: tierPresets.base,
		},
		{
			title: "Backers",
			monthlyDollars: 10,
			preset: tierPresets.medium,
		},
		{
			title: "Enthusiasts (Bronze)",
			monthlyDollars: 25,
			preset: tierPresets.large,
		},
		{
			title: "Advocates (Silver)",
			monthlyDollars: 100,
			preset: tierPresets.xl,
		},
		{
			title: "Patrons (Gold)",
			monthlyDollars: 250,
			preset: tierPresets.xl,
		},
	],
});
