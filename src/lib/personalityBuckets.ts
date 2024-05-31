import { DeveloperPersonalityType } from "@/types/personality";

export const personalityBuckets = {
    [DeveloperPersonalityType.Retro]: {
        "description": "The Retro Developer is a nostalgic soul who finds joy in the simplicity of old-school technologies. With a love for vintage hardware and classic programming languages, they harken back to a time when computing was less complex.",
        "friendsWith": [DeveloperPersonalityType.Traditionalist, DeveloperPersonalityType.Artist],
        "hashtags": ["customization", "old-school"]
    },
    [DeveloperPersonalityType.Traditionalist]: {
        "description": "The Traditionalist Developer is rooted in the foundational principles of coding. They value stability and reliability, preferring tried-and-true methods over the latest trends.",
        "friendsWith": [DeveloperPersonalityType.Retro, DeveloperPersonalityType.Pragamatist],
        "hashtags": ["no-nonsense", "old-school", "established"]
    },
    [DeveloperPersonalityType.Wallflower]: {
        "description": "The Wallflower Developer is the unsung hero of the tech world, blending seamlessly into any team and consistently delivering solid work without seeking the spotlight. They may not be the loudest in team meetings, but their work speaks volumes about their dedication and reliability.",
        "friendsWith": [DeveloperPersonalityType.Traditionalist, DeveloperPersonalityType.MarieKondo],
        "hashtags": ["silent-but-deadly", "quiet-coder", "lowkey"]
    },
    [DeveloperPersonalityType.AI]: {
        "description": "The AI explorer is on a quest to unravel the mysteries of data and transform it into intelligent insights. They are curious, good at dissecting complex problems, and innovative.",
        "friendsWith": [DeveloperPersonalityType.Trailblazer, DeveloperPersonalityType.CrazyScientist],
        "hashtags": ["ai-whiz", "devin.ai-IRL"]
    },
    [DeveloperPersonalityType.Architect]: {
        "description": "The Architect Developer is a visionary creator with an eye for the big picture. They thrive on designing robust, scalable systems that stand the test of time.",
        "friendsWith": [DeveloperPersonalityType.BobTheBuilder, DeveloperPersonalityType.Pragamatist],
        "hashtags": ["systemdesigns", "code-infrastructure"]
    },
    [DeveloperPersonalityType.Trailblazer]: {
        "description": "The Trailblazer Developer has an adventurous spirit that leads them off the beaten path. They seeks out innovative tools that others may overlook, are not afraid to take risks, and capitalize on emerging trends before they hit the mainstream.",
        "friendsWith": [DeveloperPersonalityType.CrazyScientist, DeveloperPersonalityType.AI],
        "hashtags": ["break-the-mold", "innovation", "pioneer"]
    },
    [DeveloperPersonalityType.CrazyScientist]: {
        "description": "The Crazy Scientist Developer is a bustling hive of experimentation, tinkering with a plethora of cutting-edge technologies. While some may see their unconventional approach as, well, crazy, they thrive on the thrill of discovery and solving complex problems in ingenious ways.",
        "friendsWith": [DeveloperPersonalityType.Trailblazer, DeveloperPersonalityType.AI],
        "hashtags": ["chaotic-coder", "experimental", "innovation"],
    },
    [DeveloperPersonalityType.BobTheBuilder]: {
        "description": "The Bob-The-Builder Developer is the backbone of any project, adept at constructing systems that functional, scalable, and resilient. They are good at turning ambitious visions into tangible realities, and work hard to ensure that every component fits together seamlessly.",
        "friendsWith": [DeveloperPersonalityType.Architect, DeveloperPersonalityType.Pragamatist],
        "hashtags": ["devops", "infra", "frameworks"]
    },
    [DeveloperPersonalityType.MarieKondo]: {
        "description": "The Marie Kondo Developer believes in keeping their toolbox clean and tidy, opting for only the essential tools needed to get the job done efficiently. This approach saves takes and fosters a sense of clarity in their work.",
        "friendsWith": [DeveloperPersonalityType.Pragamatist, DeveloperPersonalityType.Traditionalist],
        "hashtags": ["code-that-sparks-joy", "clean-code", "tidy"]
    },
    [DeveloperPersonalityType.Artist]: {
        "description": "The Artist Developer approaches coding as a form of artistic expression. They have a keen eye for design and attention, often enjoying the process of customizing user interfaces to have more aethestic experiences with applications.",
        "friendsWith": [DeveloperPersonalityType.Trendy, DeveloperPersonalityType.Trendy],
        "hashtags": ["visual-code", "aesthetic", "design-driven"]
    },
    [DeveloperPersonalityType.Security]: {
        "description": "The Security Developer has a vigilant eye and a strategic mindset. They are adept at analyzing risks and responding quickly to crisis situations. They have high integrity and enjoy collaborating closely with teams across different organizations. ",
        "friendsWith": [DeveloperPersonalityType.Architect, DeveloperPersonalityType.BobTheBuilder],
        "hashtags": ["guardian-angel", "robust", "no-vulnerabilities"]
    },
    [DeveloperPersonalityType.Minimalist]: {
        "description": "The Minimalist Developer is eager to learn and explore. As they navigate through projects, they eagerly absorb knowledge and seek guidance from coworkers. Their enthusiasm drive them to overcome obstacles and steadily improve their skills.",
        "friendsWith": [DeveloperPersonalityType.Wallflower, DeveloperPersonalityType.Trailblazer],
        "hashtags": ["clean", "less-is-more"]
    },
    [DeveloperPersonalityType.Pragamatist]: {
        "description": "The Pragmatist Developer is grounded and a practical problem solver. Rather than chasing the latest trends, they focus on addressing real-world needs. While they appreciate innovation, they are cautious about adopting new technologies unless they offer clear benefits.",
        "friendsWith": [DeveloperPersonalityType.BobTheBuilder, DeveloperPersonalityType.Architect],
        "hashtags": ["no-nonsense", "practical", "down-to-earth"]
    },
    [DeveloperPersonalityType.GoldenRetriever]: {
        "description": "The Golden Retriever Developer is known for friendly demeanor, eagerness to please, and unwavering commitment to teamwork. They foster strong relationships with colleagues and stakeholders alike. Their work is characterized by attention to detail and a can-do attitude.",
        "friendsWith": [DeveloperPersonalityType.BobTheBuilder, DeveloperPersonalityType.Minimalist],
        "hashtags": ["woofer", "loyal", "sociable"]
    },
    [DeveloperPersonalityType.Trendy]: {
        "description": "The Trendy Developer has a good pulse on industry trends. They are aware of the latest technologies, frameworks, and design trends. Their code reflects a flair for the contemporary and incorporate sleek designs and features.",
        "friendsWith": [DeveloperPersonalityType.GoldenRetriever, DeveloperPersonalityType.Artist],
        "hashtags": ["new-frontiers", "digital-innovator", "the-future"]
    },
}