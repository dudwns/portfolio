export const fetchUsedLanguages = async () => {
  const langStats: Record<string, number> = {};

  const headers = {
    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  };

  const response = await fetch(`https://api.github.com/users/dudwns/repos`, {
    headers,
  });

  const repos = await response.json();

  for (const repo of repos) {
    const langRes = await fetch(repo.languages_url, { headers });
    const langs: Record<string, number> = await langRes.json();
    for (const [lang, lines] of Object.entries(langs)) {
      langStats[lang] = (langStats[lang] || 0) + lines;
    }
  }

  const totalLines = Object.values(langStats).reduce((a, b) => a + b, 0);

  const sortedLanguages = Object.entries(langStats)
    .map(([lang, lines]) => ({
      lang,
      percentage: (lines / totalLines) * 100,
    }))
    .sort((a, b) => b.percentage - a.percentage);

  const chartData = {
    labels: sortedLanguages.map((lang) => lang.lang),
    datasets: [
      {
        label: "사용 비율 (%)",
        data: sortedLanguages.map((item) => item.percentage),
        backgroundColor: ["#36a2eb", "#ffce56", "#ff6384", "#9966ff"],
      },
    ],
  };

  return chartData;
};
