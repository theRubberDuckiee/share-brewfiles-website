type Props = {
  title: string;
  url: string;
};

export default async function jsonLDGenerator({ title, url }: Props) {
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${title}",
      "url": "${url}"
      }
    </script>`;
}
