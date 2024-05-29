import type { BrewEntry, BrewsItem, UserInfo } from "@/types/brews";
import {
  DeveloperPersonalityType,
  type DeveloperType,
  type PersonalitySummary,
  type Statistic,
} from "@/types/personality";

type isValidBrewfileProps = {
  checkUserInfo?: boolean;
  checkPackageData?: boolean;
  checkPersonalitySummary?: boolean;
  checkDate?: boolean;
};

export default function isValidBrewfile(
  data: any,
  options: isValidBrewfileProps = {}
) {
  const defaultOptions: isValidBrewfileProps = {
    checkUserInfo: true,
    checkPackageData: true,
    checkPersonalitySummary: true,
    checkDate: true,
  };
  options = { ...defaultOptions, ...options };

  if (options?.checkPackageData && !isValidPackageData(data.data)) {
    return false;
  }

  if (options?.checkUserInfo && !isValidUserInfo(data.userInfo)) {
    return false;
  }

  if (
    options?.checkPersonalitySummary &&
    !isValidPersonalitySummary(data.personalitySummary)
  ) {
    return false;
  }

  if (options?.checkDate && !isValidDate(data.date)) {
    return false;
  }

  return true;
}

const isValidDate = (date: any): date is BrewsItem["date"] => {
  if (!date || typeof date !== "string" || !Date.parse(date)) {
    return false;
  }
  return true;
};

const isValidUserInfo = (data: any): data is UserInfo => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, imageUrl, profileUrl, isFeatured } = data;

  return (
    typeof username === "string" &&
    typeof imageUrl === "string" &&
    typeof profileUrl === "string" &&
    typeof isFeatured === "boolean"
  );
};

const isValidPackageData = (data: any): data is BrewEntry[] => {
  if (!Array.isArray(data) || data.length === 0) {
    return false;
  }

  return data.every((obj) => {
    // Check if the object has exactly two keys: 'name' and 'packageManager'
    const keys = Object.keys(obj);
    if (
      keys.length !== 2 ||
      !keys.includes("name") ||
      !keys.includes("packageManager")
    ) {
      return false;
    }

    // Check if 'name' and 'packageManager' are strings
    if (
      typeof obj.name !== "string" ||
      typeof obj.packageManager !== "string"
    ) {
      return false;
    }

    return true;
  });
};

const isValidPersonalitySummary = (data: any): data is PersonalitySummary => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const {
    title,
    description,
    percentileSimilarToType,
    hashtags,
    friendsWith,
    mostPopularPackage,
    relevantStat,
    totalPackagesUploaded,
    totalPackagesUploadedComparitive,
    developerType,
    last_generated,
  } = data;

  return (
    Object.values(DeveloperPersonalityType).includes(title) &&
    typeof description === "string" &&
    typeof percentileSimilarToType === "string" &&
    Array.isArray(hashtags) &&
    hashtags.every((tag: any) => typeof tag === "string") &&
    Array.isArray(friendsWith) &&
    friendsWith.every((friend: any) =>
      Object.values(DeveloperPersonalityType).includes(friend)
    ) &&
    typeof mostPopularPackage === "string" &&
    isValidStatistic(relevantStat) &&
    typeof totalPackagesUploaded === "number" &&
    typeof totalPackagesUploadedComparitive === "number" &&
    isValidDeveloperType(developerType) &&
    (typeof last_generated === "number" || last_generated === undefined)
  );
};

const isValidStatistic = (stat: any): stat is Statistic => {
  return (
    typeof stat === "object" &&
    typeof stat.title === "string" &&
    typeof stat.content === "string"
  );
};

const isValidDeveloperType = (devType: any): devType is DeveloperType => {
  return (
    typeof devType === "object" &&
    typeof devType.fractionBackend === "string" &&
    typeof devType.fractionFrontend === "string" &&
    typeof devType.fractionDevOps === "string" &&
    typeof devType.fractionSecurity === "string" &&
    typeof devType.fractionData === "string" &&
    typeof devType.fractionGeneral === "string"
  );
};
