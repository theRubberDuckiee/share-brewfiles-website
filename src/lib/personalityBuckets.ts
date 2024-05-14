import { DeveloperPersonalityType } from "@/types/personality";

export const personalityBuckets = {
    [DeveloperPersonalityType.RetroDeveloper]: {
        "description": "The Retro Developer is a nostalgic soul who finds joy in the simplicity of old-school technologies. With a love for vintage hardware and classic programming languages, they harken back to a time when computing was less complex.",
        "friendsWith": ["The Traditionalist"],
        "hashtags": ["customization", "old-school"]
    },
    [DeveloperPersonalityType.Traditionalist]: {
        "description": "The Traditionalist Developer is rooted in the foundational principles of coding. They value stability and reliability, preferring tried-and-true methods over the latest trends.",
        "friendsWith": [],
        "hashtags": ["no-nonsense", "old-school", "established"]
    },
    [DeveloperPersonalityType.General]: {
        "description": "The Generalist Developer is a versatile individual who thrives on tackling a wide range of tasks. They have a broad skill set that spans various domains of software development, and often wear multiple hats in their career.",
        "friendsWith": [],
        "hashtags": ["adaptable", "general-knowledge"]
    },
    [DeveloperPersonalityType.Wallflower]: {
        "description": "The Wallflower Developer is the unsung hero of the tech world, blending seamlessly into any team and consistently delivering solid work without seeking the spotlight. They may not be the loudest in team meetings, but their work speaks volumes about their dedication and reliability.",
        "friendsWith": [DeveloperPersonalityType.Traditionalist, DeveloperPersonalityType.MarieKondo],
        "hashtags": ["silent-but-deadly", "quiet-coder", "lowkey"]
    },
    [DeveloperPersonalityType.AI]: {
        "description": "The AI explorer is on a quest to unravel the mysteries of data and transform it into intelligent insights. They are curious, good at dissecting complex problems, and innovative.",
        "friendsWith": [DeveloperPersonalityType.Trailblazer, DeveloperPersonalityType.CrazyScientist],
        "hashtags": ["aiwhiz", "devinIRL"]
    },
    [DeveloperPersonalityType.Architect]: {
        "description": "The Architect Developer is a visionary creator with an eye for the big picture. They thrive on designing robust, scalable systems that stand the test of time.",
        "friendsWith": [DeveloperPersonalityType.BobTheBuilder, DeveloperPersonalityType.Pragamatist],
        "hashtags": ["systemdesigns"]
    },
    [DeveloperPersonalityType.Trailblazer]: {
        "description": "The Trailblazer Developer has an adventurous spirit that leads them off the beaten path. They seeks out innovative tools that others may overlook, are not afraid to take risks, and capitalize on emerging trends before they hit the mainstream.",
        "friendsWith": [DeveloperPersonalityType.CrazyScientist],
        "hastags": ["break-the-mold", "innovation", "pioneer"]
    },
    [DeveloperPersonalityType.CrazyScientist]: {
        "description": "The Crazy Scientist Developer is a bustling hive of experimentation, tinkering with a plethora of cutting-edge technologies. While some may see their unconventional approach as, well, crazy, they thrive on the thrill of discovery and solving complex problems in ingenious ways.",
        "friendsWith": [DeveloperPersonalityType.Trailblazer],
        "hashtags": ["chaotic-coder", "experimental", "innovation"],
    },
    [DeveloperPersonalityType.BobTheBuilder]: {
        "description": "The Bob-The-Builder Developer is the backbone of any project, adept at constructing systems that functional, scalable, and resilient. They are good at turning ambitious visions into tangible realities, and work hard to ensure that every component fits together seamlessly.",
        "friendsWith": [],
        "hashtags": ["devops", "infra", "frameworks"]
    },
    [DeveloperPersonalityType.MarieKondo]: {
        "description": "The Marie Kondo Developer believes in keeping their toolbox clean and tidy, opting for only the essential tools needed to get the job done efficiently. This approach saves takes and fosters a sense of clarity in their work.",
        "friendsWith": [],
        "hashtags": ["code-that-sparks-joy", "clean-code", "tidy"]
    },
    [DeveloperPersonalityType.Artist]: {
        "description": "The Artist Developer approaches coding as a form of artistic expression. They have a keen eye for design and attention, often enjoying the process of customizing user interfaces to have more aethestic experiences with applications.",
        "friendsWith": [],
        "hashtags": ["visual-code", "aesthetic", "design-driven"]
    },
    [DeveloperPersonalityType.Security]: {
        "description": "",
        "friendsWith": [],
        "hashtags": [""]
    },
    [DeveloperPersonalityType.Rookie]: {
        "description": "",
        "friendsWith": [DeveloperPersonalityType.Wallflower, DeveloperPersonalityType.Trailblazer],
        "hashtags": ["new-kid-on-the-block", "learning-to-code", "junior-dev"]
    },
    [DeveloperPersonalityType.Pragamatist]: {
        "description": "",
        "friendsWith": [DeveloperPersonalityType.BobTheBuilder],
        "hashtags": ["no-nonsense", "practical", "down-to-earth"]
    },

}