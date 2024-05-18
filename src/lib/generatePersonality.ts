import {
  Developer,
  packagePersonalityDictionary,
} from "@/data/labelledBrewfiles";
import type { BrewEntry, Brews, BrewsItem } from "@/types/brews";
import {
  DeveloperPersonalityType,
  type PersonalityPercentageStatistics,
  type PersonalitySummary,
  type PersonalityTotalCountStatistics,
  type Statistic,
} from "@/types/personality";
import { personalityBuckets } from "./personalityBuckets";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export async function generatePersonality(packages: BrewEntry[], id: string) {
  const totalCountStatistics = calculateStatistics(packages);
  const personalityPercentageStatistics = analyzeStats(totalCountStatistics);
  const personalitySummary = await turnStatsIntoPersonality(
    personalityPercentageStatistics,
    packages
  );

  try {
    const response = await fetch(
      "https://www.brewfiles.com/api/updatePersonality",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalitySummary: {
            ...personalitySummary,
            last_generated: Date.now(),
          },
          id: id,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}

function calculateStatistics(
  packages: BrewEntry[]
): PersonalityTotalCountStatistics {
  let totalBackend = 0;
  let totalFrontend = 0;
  let totalDevOps = 0;
  let totalSecurity = 0;
  let totalData = 0;
  let totalGeneral = 0;
  let totalOld = 0;
  let totalCustomization = 0;
  let totalOrganization = 0;
  let totalRecognized = 0;
  let totalPackages = 0;
  let totalPopular = 0;
  let totalSuperPopular = 0;

  totalPackages = packages.length;
  packages.forEach((eachPackage) => {
    const labelledPackage = packagePersonalityDictionary[eachPackage.name];
    if (labelledPackage) {
      totalRecognized += 1;

      switch (labelledPackage.developer) {
        case Developer.Backend:
          totalBackend += 1;
          break;
        case Developer.Frontend:
          totalFrontend += 1;
          break;
        case Developer.Security:
          totalSecurity += 1;
          break;
        case Developer.Devops:
          totalDevOps += 1;
          break;
        case Developer.Data:
          totalData += 1;
          break;
        case Developer.General:
          totalGeneral += 1;
          break;
        default:
      }

      labelledPackage.old ? (totalOld += 1) : totalOld;
      labelledPackage.customization
        ? (totalCustomization += 1)
        : totalCustomization;
      labelledPackage.organization
        ? (totalOrganization += 1)
        : totalOrganization;
      labelledPackage.rank < 300 && labelledPackage.rank > 50
        ? (totalPopular += 1)
        : totalPopular;
      labelledPackage.rank <= 50 ? (totalSuperPopular += 1) : totalSuperPopular;
    }
  });
  const personalityTotalCountStatistics: PersonalityTotalCountStatistics = {
    totalBackend: totalBackend,
    totalFrontend: totalFrontend,
    totalData: totalData,
    totalDevOps: totalDevOps,
    totalSecurity: totalSecurity,
    totalGeneral: totalGeneral,
    totalCustomization: totalCustomization,
    totalOld: totalOld,
    totalOrganization: totalOrganization,
    totalPackages: totalPackages,
    totalPopular: totalPopular,
    totalRecognized: totalRecognized,
    totalSuperPopular: totalSuperPopular,
  };
  return personalityTotalCountStatistics;
}

function analyzeStats(
  totalCountStatistics: PersonalityTotalCountStatistics
): PersonalityPercentageStatistics {
  const fractionBackend =
    totalCountStatistics.totalBackend / totalCountStatistics.totalPackages;
  const fractionFrontend =
    totalCountStatistics.totalFrontend / totalCountStatistics.totalPackages;
  const fractionDevOps =
    totalCountStatistics.totalDevOps / totalCountStatistics.totalPackages;
  const fractionSecurity =
    totalCountStatistics.totalSecurity / totalCountStatistics.totalPackages;
  const fractionData =
    totalCountStatistics.totalData / totalCountStatistics.totalPackages;
  const fractionGeneral =
    totalCountStatistics.totalGeneral / totalCountStatistics.totalPackages;
  const fractionOld =
    totalCountStatistics.totalOld / totalCountStatistics.totalPackages;
  const fractionCustomization =
    totalCountStatistics.totalCustomization /
    totalCountStatistics.totalPackages;
  const fractionOrganization =
    totalCountStatistics.totalOrganization / totalCountStatistics.totalPackages;
  const fractionRecognized =
    totalCountStatistics.totalRecognized / totalCountStatistics.totalPackages;
  const fractionPopular =
    totalCountStatistics.totalPopular / totalCountStatistics.totalPackages;

  const personalityPercentageStatistics: PersonalityPercentageStatistics = {
    fractionBackend: fractionBackend,
    fractionFrontend: fractionFrontend,
    fractionDevOps: fractionDevOps,
    fractionSecurity: fractionSecurity,
    fractionData: fractionData,
    fractionGeneral: fractionGeneral,
    fractionOld: fractionOld,
    fractionCustomization: fractionCustomization,
    fractionOrganization: fractionOrganization,
    fractionRecognized: fractionRecognized,
    fractionPopular: fractionPopular,
    totalPackages: totalCountStatistics.totalPackages,
  };
  return personalityPercentageStatistics;
}

async function turnStatsIntoPersonality(
  personalityPercentageStatistics: PersonalityPercentageStatistics,
  packages: BrewEntry[]
): Promise<PersonalitySummary> {
  let title: DeveloperPersonalityType;
  let description: string;
  let relevantStat: Statistic;
  let hashtags: string[];
  let friendsWith: DeveloperPersonalityType[];
  let percentileSimilarToType: number = 0;
  let totalPackagesUploadedComparitive: number = 0;

  // Initialize the persona as a Wallflower Developer type, then see if we can change the personality based off other criteria
  title = DeveloperPersonalityType.Wallflower;
  description = personalityBuckets[title].description;
  hashtags = personalityBuckets[title].hashtags;
  friendsWith = personalityBuckets[title].friendsWith;
  relevantStat = {
    title: "Popularity Level",
    content: `${convertFractionToPercentage(
      personalityPercentageStatistics.fractionRecognized
    )} match the top 200 most downloaded homebrew packages in the last year.`,
  };

  if (
    personalityPercentageStatistics.fractionOld > 0.6 &&
    personalityPercentageStatistics.fractionCustomization < 0.4
  ) {
    title = DeveloperPersonalityType.Traditionalist;
    description = personalityBuckets[title].description;
    hashtags = personalityBuckets[title].hashtags;
    friendsWith = personalityBuckets[title].friendsWith;
    relevantStat = {
      title: "Traditionalist Level",
      content: `${convertFractionToPercentage(
        personalityPercentageStatistics.fractionOld
      )}% of your packages were released 30 years ago.`,
    };
  }

  if (
    personalityPercentageStatistics.fractionOld > 0.6 &&
    personalityPercentageStatistics.fractionCustomization >= 0.4
  ) {
    title = DeveloperPersonalityType.RetroDeveloper;
    description = personalityBuckets[title].description;
    relevantStat = {
      title: "How Retro?",
      content: `${convertFractionToPercentage(
        personalityPercentageStatistics.fractionOld
      )}% of your packages were released over 30 years ago.`,
    };
  }

  if (
    personalityPercentageStatistics.totalPackages < 25 &&
    personalityPercentageStatistics.fractionOrganization > 0.4
  ) {
    title = DeveloperPersonalityType.MarieKondo;
    description = personalityBuckets[title].description;
    relevantStat = {
      title: "Organization level",
      content: `${personalityPercentageStatistics.fractionOrganization}% of your packages are related to organization.`,
    };
  }

  const allBrews = await getDocs(collection(db, "brewfiles"));

  if (allBrews) {
    let brews: BrewsItem[] = [];
    let personalitySummaries: PersonalitySummary[] = [];
    allBrews.docs.forEach((doc) => {
      const { data, date, userInfo, personalitySummary } = doc.data();
      const brewData = Object.values(data as BrewEntry[]).map((value) => {
        return {
          name: value.name,
          packageManager: value.packageManager,
        };
      });
      brews.push({
        id: doc.id,
        data: brewData,
        date,
        userInfo,
      });
      if (personalitySummary) {
        personalitySummaries.push(personalitySummary);
      }
    });
    percentileSimilarToType = getPercentileSimilarToType(
      title,
      personalitySummaries
    );
    totalPackagesUploadedComparitive = getTotalPackagesUploadedComparitive(
      personalityPercentageStatistics.totalPackages,
      brews
    );
  }
  const personalitySummary: PersonalitySummary = {
    title: title,
    description: description,
    percentileSimilarToType: convertFractionToPercentage(
      percentileSimilarToType
    ),
    hashtags: hashtags,
    friendsWith: friendsWith,
    mostPopularPackage: getMostPopularPackage(packages),
    relevantStat: relevantStat,
    totalPackagesUploaded: personalityPercentageStatistics.totalPackages,
    totalPackagesUploadedComparitive: totalPackagesUploadedComparitive,
    developerType: {
      fractionBackend: convertFractionToPercentage(
        personalityPercentageStatistics.fractionBackend
      ),
      fractionFrontend: convertFractionToPercentage(
        personalityPercentageStatistics.fractionFrontend
      ),
      fractionDevOps: convertFractionToPercentage(
        personalityPercentageStatistics.fractionDevOps
      ),
      fractionSecurity: convertFractionToPercentage(
        personalityPercentageStatistics.fractionSecurity
      ),
      fractionData: convertFractionToPercentage(
        personalityPercentageStatistics.fractionData
      ),
      fractionGeneral: convertFractionToPercentage(
        personalityPercentageStatistics.fractionGeneral
      ),
    },
  };
  return personalitySummary;
}

function getPercentileSimilarToType(
  personalityTitle: string,
  personalitySummaries: PersonalitySummary[]
): number {
  let numSimilarToType = 0;
  let totalPersonalities = 0;
  personalitySummaries.forEach((personality) => {
    if (personality && personality?.title) {
      totalPersonalities += 1;
      if (personality.title == personalityTitle) {
        numSimilarToType += 1;
      }
    }
  });
  if (!totalPersonalities) {
    return 0;
  }
  return numSimilarToType / totalPersonalities;
}

function getTotalPackagesUploadedComparitive(
  packagesUploaded: number,
  allBrewfiles: BrewsItem[]
) {
  const numBrewfiles = allBrewfiles.length;
  let totalNumPackages = 0;
  allBrewfiles.forEach((brew) => {
    totalNumPackages += brew.data.length;
  });
  const averageUploadedPackages = Math.round(totalNumPackages / numBrewfiles);
  return packagesUploaded - averageUploadedPackages;
}

function getMostPopularPackage(packages: BrewEntry[]): string {
  let topRank = Infinity;
  let topRankedPackage = undefined;
  packages.forEach((eachPackage) => {
    const labelledPackage = packagePersonalityDictionary[eachPackage.name];
    if (labelledPackage && labelledPackage.rank < topRank) {
      topRankedPackage = eachPackage.name;
    }
  });
  return topRankedPackage ?? "None.";
}

function convertFractionToPercentage(fraction: number): string {
  if (fraction == 0) {
    return "0.0";
  }
  const percentage = fraction * 100;
  const roundedPercentage = percentage.toFixed(1);
  return roundedPercentage;
}
