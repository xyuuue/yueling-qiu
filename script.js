const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const siteHeader = document.querySelector("[data-header]");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
const allAnchorLinks = document.querySelectorAll("a[href^='#']");
const languageButtons = document.querySelectorAll("[data-language]");
let currentLanguage = localStorage.getItem("portfolio-language") || "en";

const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.apps": "Apps",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.resume": "Download Resume",
    "hero.hello": "Hello, I'm",
    "hero.title": "Master's student in Applied Data Analytics | Data Analyst Candidate",
    "hero.summary": "Turning data into clear insights and business value with analytics, machine learning, app building, and bilingual communication.",
    "hero.viewProjects": "View Projects",
    "hero.downloadResume": "Download Resume",
    "hero.contactMe": "Contact Me",
    "profile.summary": "Analytics workflows and practical apps",
    "dashboard.title": "Capability Overview",
    "dashboard.data": "Data Analysis",
    "dashboard.dataTools": "Python · SQL · R",
    "dashboard.ml": "ML Modeling",
    "dashboard.mlTools": "Classify · Evaluate",
    "dashboard.reporting": "BI & Reporting",
    "dashboard.reportingTools": "Tableau · Dashboards",
    "dashboard.communication": "Data Comm",
    "dashboard.communicationTools": "EN · 中文 · Docs",
    "dashboard.workflow": "Analytics Workflow",
    "dashboard.clean": "Clean",
    "dashboard.explore": "Explore",
    "dashboard.model": "Model",
    "dashboard.evaluate": "Evaluate",
    "dashboard.communicate": "Report",
    "dashboard.roleFit": "Role Fit",
    "dashboard.roleDataAnalyst": "Data Analyst",
    "dashboard.roleBusiness": "Business Analyst",
    "dashboard.roleAssociate": "Analytics Associate",
    "dashboard.toolCoverage": "Tool Coverage",
    "dashboard.toolProgramming": "Code",
    "dashboard.toolSql": "SQL",
    "dashboard.toolViz": "Viz",
    "dashboard.toolML": "ML",
    "dashboard.toolReporting": "Reports",
    "dashboard.toolProduct": "Product",
    "trait.dataTitle": "Data Driven",
    "trait.dataBody": "Find patterns and solve real problems.",
    "trait.dataStatus": "Patterns and model evidence guide my decisions.",
    "trait.insightTitle": "Insight Focused",
    "trait.insightBody": "Transform data into actionable insights.",
    "trait.insightStatus": "I focus on outputs that become clear next steps.",
    "trait.businessTitle": "Business Minded",
    "trait.businessBody": "Communicate clearly and create impact.",
    "trait.businessStatus": "I translate technical work into business communication.",
    "about.kicker": "About Me",
    "about.heading": "Analytical training with practical product execution.",
    "about.body": "I am a Master's student in Applied Data Analytics at Boston University. With a mathematics background from UC Davis and hands-on analytics training, I enjoy turning complex data into meaningful insights that support data-driven decisions. My internship experience strengthened my ability to translate technical content into clear business communication and support cross-functional collaboration.",
    "about.languages": "Mandarin + English",
    "about.interests": "Career Interests",
    "about.role1": "Data Analyst",
    "about.role2": "Business Data Analyst",
    "about.role3": "Analytics Associate",
    "about.strengths": "Strengths",
    "about.strengthBody": "Analytical thinking, data communication, bilingual communication, collaboration, and problem solving.",
    "projects.kicker": "Featured Projects",
    "projects.heading": "Selected analytics projects spanning machine learning, database design, and decision-ready reporting.",
    "projects.viewApps": "View app projects",
    "projectCard.housingTitle": "American Housing Survey Classification Analysis",
    "projectCard.housingBody": "Evaluated 36 machine learning pipeline combinations for minority-class prediction reliability.",
    "projectCard.databaseTitle": "Stress, Sleep, and Study Tracker Database Project",
    "projectCard.databaseBody": "Designed a normalized Oracle relational database for personal performance analysis.",
    "projectCard.recipeTitle": "Recipe Review Rating Classification",
    "projectCard.recipeBody": "Analyzed 18,182 recipe reviews and compared five ML models for high-rating prediction.",
    "projectCard.stockTitle": "Quantitative Stock Prediction & Strategy Optimization",
    "projectCard.stockBody": "Engineered predictive features from five years of QCOM market data.",
    "projectDetail.methods": "Methods",
    "projectDetail.evaluation": "Evaluation",
    "projectDetail.value": "Value",
    "projectDetail.problem": "Problem",
    "projectDetail.workflow": "Workflow",
    "projectDetail.demonstrates": "What it demonstrates",
    "apps.kicker": "Product / App Projects",
    "apps.heading": "Personal apps showing product execution, local app workflows, and data-informed product thinking.",
    "skills.kicker": "Skills",
    "skills.heading": "A complete skills view, from analysis tools to modeling methods, reporting software, AI workflows, and app-building tools.",
    "toolbox.kicker": "Technical Toolbox",
    "toolbox.heading": "A fuller view of the skills, methods, and software I use across analytics work.",
    "toolbox.body": "Hover over the moving rows to slow them down and scan each tool clearly.",
    "skillButton.data": "Data Analysis",
    "skillButton.ml": "Machine Learning",
    "skillButton.viz": "Visualization & Reporting",
    "skillButton.product": "Product & App",
    "skillButton.communication": "Communication",
    "experience.kicker": "Experience",
    "experience.title": "Technical Translator & Project Support Intern",
    "experience.company": "Shenzhen Aival Data Technology Co. Ltd. | Jul 2024 - Aug 2024",
    "experience.b1": "Translated and standardized technical documentation and UI content for a big data platform.",
    "experience.b2": "Supported cross-functional coordination across project stakeholders and technical-material delivery under deadline.",
    "experience.b3": "Created a client-facing presentation on AI-driven productivity solutions.",
    "education.kicker": "Education & Certifications",
    "education.bu": "Master of Applied Data Analytics | Sep 2025 - Present",
    "education.uc": "Bachelor of Mathematics | Sep 2021 - Jun 2025",
    "education.googleDataTitle": "Google Data Analytics Certificate",
    "education.googleData": "Grow with Google career certificate",
    "education.googleAiTitle": "Google AI Essentials Certificate",
    "education.googleAi": "Grow with Google AI essentials course",
    "contact.kicker": "Let's Connect",
    "contact.heading": "Open to data analyst opportunities.",
    "contact.body": "I would love to connect and explore how I can contribute to your team.",
    "contact.emailTitle": "Email",
    "contact.linkedinTitle": "LinkedIn Profile",
    "contact.githubTitle": "GitHub Profile",
    "contact.githubBody": "Explore my code, project repos, and app-building work.",
    "contact.resume": "Download Resume",
    "footer.backTop": "Back to top"
  },
  zh: {
    "nav.about": "关于我",
    "nav.projects": "项目",
    "nav.apps": "应用",
    "nav.skills": "技能",
    "nav.experience": "经历",
    "nav.education": "教育",
    "nav.contact": "联系",
    "nav.resume": "下载简历",
    "hero.hello": "你好，我是",
    "hero.title": "应用数据分析硕士研究生 | 数据分析岗位候选人",
    "hero.summary": "我用数据分析、机器学习、应用开发和双语沟通，把复杂信息转化为清晰洞察和业务价值。",
    "hero.viewProjects": "查看项目",
    "hero.downloadResume": "下载简历",
    "hero.contactMe": "联系我",
    "profile.summary": "数据分析流程与实用应用",
    "dashboard.title": "能力画像",
    "dashboard.data": "数据分析",
    "dashboard.dataTools": "Python · SQL · R",
    "dashboard.ml": "ML 建模",
    "dashboard.mlTools": "分类 · 评估",
    "dashboard.reporting": "BI 与报告",
    "dashboard.reportingTools": "Tableau · 仪表盘",
    "dashboard.communication": "数据沟通",
    "dashboard.communicationTools": "英文 · 中文 · 文档",
    "dashboard.workflow": "分析流程",
    "dashboard.clean": "清洗",
    "dashboard.explore": "探索",
    "dashboard.model": "建模",
    "dashboard.evaluate": "评估",
    "dashboard.communicate": "报告",
    "dashboard.roleFit": "岗位适配",
    "dashboard.roleDataAnalyst": "数据分析",
    "dashboard.roleBusiness": "业务分析",
    "dashboard.roleAssociate": "分析助理岗位",
    "dashboard.toolCoverage": "工具覆盖",
    "dashboard.toolProgramming": "代码",
    "dashboard.toolSql": "SQL",
    "dashboard.toolViz": "图表",
    "dashboard.toolML": "机器学习",
    "dashboard.toolReporting": "报告",
    "dashboard.toolProduct": "产品",
    "trait.dataTitle": "数据驱动",
    "trait.dataBody": "发现模式并解决实际问题。",
    "trait.dataStatus": "我用模型证据和数据模式支持判断。",
    "trait.insightTitle": "洞察导向",
    "trait.insightBody": "把数据转化为可行动的结论。",
    "trait.insightStatus": "我关注能转化为下一步行动的分析输出。",
    "trait.businessTitle": "业务表达",
    "trait.businessBody": "清晰沟通并创造影响。",
    "trait.businessStatus": "我能把技术工作转化为业务沟通。",
    "about.kicker": "关于我",
    "about.heading": "数据分析训练与实际产品执行力。",
    "about.body": "我目前是 Boston University 应用数据分析硕士研究生。本科就读于 UC Davis 数学专业，并接受了数据分析与机器学习项目训练。我喜欢把复杂数据转化为能支持决策的清晰洞察。我的实习经历也提升了我把技术内容转化为清晰商业表达、并支持跨职能协作的能力。",
    "about.languages": "中文 + 英文",
    "about.interests": "求职方向",
    "about.role1": "数据分析师",
    "about.role2": "业务数据分析师",
    "about.role3": "分析助理岗位",
    "about.strengths": "优势",
    "about.strengthBody": "分析思维、数据沟通、双语沟通、协作能力和问题解决。",
    "projects.kicker": "精选项目",
    "projects.heading": "覆盖机器学习、数据库设计和决策报告的数据分析项目。",
    "projects.viewApps": "查看应用项目",
    "projectCard.housingTitle": "American Housing Survey 分类分析",
    "projectCard.housingBody": "评估 36 种机器学习流程组合，提高 minority-class 预测可靠性。",
    "projectCard.databaseTitle": "Stress, Sleep, and Study Tracker 数据库项目",
    "projectCard.databaseBody": "设计规范化 Oracle 关系型数据库，用于个人表现分析。",
    "projectCard.recipeTitle": "Recipe Review 评分分类",
    "projectCard.recipeBody": "分析 18,182 条 recipe reviews，并比较 5 个机器学习模型。",
    "projectCard.stockTitle": "量化股票预测与策略优化",
    "projectCard.stockBody": "基于 5 年 QCOM 市场数据构建预测特征。",
    "projectDetail.methods": "方法",
    "projectDetail.evaluation": "评估",
    "projectDetail.value": "价值",
    "projectDetail.problem": "问题",
    "projectDetail.workflow": "工作流程",
    "projectDetail.demonstrates": "展示能力",
    "apps.kicker": "产品 / 应用项目",
    "apps.heading": "个人应用项目展示产品执行力、本地应用流程和数据驱动的产品思考。",
    "skills.kicker": "技能",
    "skills.heading": "完整展示我的数据分析工具、建模方法、报告软件、AI 工作流和应用开发工具。",
    "toolbox.kicker": "技术工具箱",
    "toolbox.heading": "更完整地展示我在数据分析工作中使用的技能、方法和软件。",
    "toolbox.body": "鼠标悬停在移动行上可以减速，方便你逐项查看。",
    "skillButton.data": "数据分析",
    "skillButton.ml": "机器学习",
    "skillButton.viz": "可视化与报告",
    "skillButton.product": "产品与应用",
    "skillButton.communication": "沟通能力",
    "experience.kicker": "经历",
    "experience.title": "技术翻译 / 项目支持实习生",
    "experience.company": "Shenzhen Aival Data Technology Co. Ltd. | 2024 年 7 月 - 2024 年 8 月",
    "experience.b1": "为大数据平台翻译并标准化技术文档和 UI 内容。",
    "experience.b2": "支持项目相关方之间的跨职能协调，并在截止日期前交付技术材料。",
    "experience.b3": "制作面向客户的 AI 驱动生产力解决方案演示。",
    "education.kicker": "教育与证书",
    "education.bu": "应用数据分析硕士 | 2025 年 9 月至今",
    "education.uc": "数学学士 | 2021 年 9 月 - 2025 年 6 月",
    "education.googleDataTitle": "Google Data Analytics Certificate",
    "education.googleData": "Grow with Google 职业证书",
    "education.googleAiTitle": "Google AI Essentials Certificate",
    "education.googleAi": "Grow with Google AI 基础课程",
    "contact.kicker": "联系我",
    "contact.heading": "正在寻找数据分析相关机会。",
    "contact.body": "我希望与团队交流，探索我可以贡献的方向。",
    "contact.emailTitle": "邮箱",
    "contact.linkedinTitle": "LinkedIn 主页",
    "contact.githubTitle": "GitHub 主页",
    "contact.githubBody": "查看我的代码、项目仓库和应用开发作品。",
    "contact.resume": "下载简历",
    "footer.backTop": "回到顶部"
  }
};

const t = (key) => translations[currentLanguage]?.[key] || translations.en[key] || key;

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });
}

const applyLanguage = (language) => {
  currentLanguage = translations[language] ? language : "en";
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  localStorage.setItem("portfolio-language", currentLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === currentLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });

  const activeTrait = document.querySelector(".trait-card.is-active");
  if (activeTrait && traitStatus) {
    traitStatus.textContent = t(activeTrait.dataset.traitKey);
  }

  const activeProject = document.querySelector(".project-card.is-active")?.dataset.project || "housing";
  updateProject(activeProject);

  const activeApp = document.querySelector("[data-app].is-active")?.dataset.app || "slacker";
  updateApp(activeApp);

  const activeSkill = document.querySelector("[data-skill].is-active")?.dataset.skill || "data";
  updateSkill(activeSkill);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

allAnchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    const headerHeight = siteHeader?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    history.pushState(null, "", targetId);

    siteNav?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
});

const scrollToCurrentHash = () => {
  if (!location.hash) return;

  const target = document.querySelector(location.hash);
  if (!target) return;

  const headerHeight = siteHeader?.offsetHeight ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
  window.scrollTo({ top: Math.max(top, 0), behavior: "auto" });
  window.setTimeout(setActiveNav, 0);
};

window.addEventListener("load", () => {
  window.setTimeout(scrollToCurrentHash, 0);
});

const sections = [...document.querySelectorAll("main section[id], .bottom-grid article[id]")];

const updateHeaderProgress = () => {
  if (!siteHeader) return;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  siteHeader.style.setProperty("--scroll-progress", `${Math.min(Math.max(progress, 0), 100)}%`);
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
};

const setActiveNav = () => {
  const y = window.scrollY + 120;
  let activeId = "about";

  sections.forEach((section) => {
    if (section.offsetTop <= y) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });

  updateHeaderProgress();
};

window.addEventListener("scroll", setActiveNav, { passive: true });
window.addEventListener("resize", updateHeaderProgress);
setActiveNav();
if (location.hash) {
  window.setTimeout(scrollToCurrentHash, 80);
}

const glowTargets = document.querySelectorAll(
  ".button, .project-card, .trait-card, .about-card, .mini-profile-card, .app-showcase, .toolbox-panel, .skill-detail, .experience-card, .education-card, .contact-card, .contact-nav-link"
);

glowTargets.forEach((target) => {
  target.addEventListener("pointermove", (event) => {
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    target.style.setProperty("--mx", `${x}%`);
    target.style.setProperty("--my", `${y}%`);
  });
});

const reactBitsSurfaces = document.querySelectorAll(
  ".project-card, .trait-card, .about-card, .mini-profile-card, .app-showcase, .toolbox-panel, .skill-detail, .experience-card, .education-card, .contact-card"
);
const canRunReactBitsTilt = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

reactBitsSurfaces.forEach((surface) => {
  surface.classList.add("reactbits-spotlight", "reactbits-tilt");

  if (!canRunReactBitsTilt) return;

  surface.addEventListener("pointermove", (event) => {
    const rect = surface.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    surface.style.setProperty("--tilt-x", `${x * 5.5}deg`);
    surface.style.setProperty("--tilt-y", `${y * -4.5}deg`);
  });

  surface.addEventListener("pointerleave", () => {
    surface.style.setProperty("--tilt-x", "0deg");
    surface.style.setProperty("--tilt-y", "0deg");
  });
});

const replaySwapAnimation = (element) => {
  if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  element.classList.remove("is-swapping");
  void element.offsetWidth;
  element.classList.add("is-swapping");
  window.setTimeout(() => element.classList.remove("is-swapping"), 280);
};

const tiltPanel = document.querySelector("[data-tilt-panel]");
const laptopDashboard = document.querySelector(".laptop-dashboard");

if (tiltPanel && laptopDashboard) {
  tiltPanel.addEventListener("pointermove", (event) => {
    const rect = tiltPanel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    laptopDashboard.style.setProperty("--tilt-x", `${x * 7}deg`);
    laptopDashboard.style.setProperty("--tilt-y", `${y * -5}deg`);
  });

  tiltPanel.addEventListener("pointerleave", () => {
    laptopDashboard.style.setProperty("--tilt-x", "0deg");
    laptopDashboard.style.setProperty("--tilt-y", "0deg");
  });
}

const traitCards = document.querySelectorAll("[data-trait-key]");
const traitStatus = document.querySelector("[data-trait-status]");

traitCards.forEach((card) => {
  card.addEventListener("click", () => {
    traitCards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
    if (traitStatus) traitStatus.textContent = t(card.dataset.traitKey);
  });
});

const projectContent = {
  en: {
    housing: {
      type: "Machine Learning",
      date: "Feb 2026 - May 2026",
      title: "American Housing Survey Classification Analysis",
      caption: "Dashboard-style overview of the dataset, model pipeline, balancing approach, and evaluation evidence.",
      icon: "ML",
      boardKicker: "Project Dashboard",
      boardTitle: "Classification Evidence Board",
      visualTitle: "Evidence Map",
      signals: ["Survey Data", "Balancing", "Classifiers", "Confusion Matrix"],
      chart: [58, 72, 86, 68, 94],
      problem: "Predict disability status in a large-scale housing survey dataset while improving minority-class reliability.",
      problemDetail: "The project focuses on a classification setting where standard accuracy can hide weak performance on the smaller class.",
      methods: "Built and evaluated 36 machine learning pipeline combinations across four balancing methods and nine classifiers.",
      evaluation: "Used recall, TPR, precision, F1-score, and confusion-matrix analysis to compare model behavior.",
      value: "Improved minority-class prediction reliability with transparent model comparison evidence.",
      metrics: [
        ["36", "Pipeline combinations"],
        ["4", "Balancing methods"],
        ["9", "Classifier families"]
      ],
      workflow: [
        "Cleaned survey data and prepared model-ready features.",
        "Tested balancing strategies for imbalanced classification.",
        "Benchmarked classifier families through repeatable pipelines.",
        "Compared results with metrics that emphasize minority-class reliability."
      ],
      outcomes: [
        "Structured machine learning experimentation.",
        "Evaluation beyond headline accuracy.",
        "Clear communication of model tradeoffs and reliability."
      ],
      tags: ["Python", "scikit-learn", "Imbalanced Data", "36 Pipelines"]
    },
    database: {
      type: "Database Design",
      date: "Mar 2026 - Apr 2026",
      title: "Stress, Sleep, and Study Tracker Database Project",
      caption: "Database-focused overview showing connected tables, wellness signals, study sessions, and SQL operations.",
      icon: "DB",
      boardKicker: "Project Dashboard",
      boardTitle: "Relational Design Board",
      visualTitle: "Schema Map",
      signals: ["Users", "Sleep", "Stress", "Study Sessions"],
      chart: [66, 82, 74, 90, 76],
      problem: "Integrate sleep, stress, and study activity data for personal performance analysis.",
      problemDetail: "The project turns wellness and study activity into a relational structure that can support reliable querying and future analytics.",
      methods: "Designed and implemented a normalized Oracle relational database with ERDs, schemas, PK/FK constraints, and lookup tables.",
      evaluation: "Validated database behavior with triggers, stored procedures, transactions, and indexes.",
      value: "Turned personal performance tracking into structured data that can support reliable SQL analysis and reporting.",
      metrics: [
        ["Oracle", "Relational database"],
        ["PK/FK", "Integrity constraints"],
        ["SQL", "Triggers and procedures"]
      ],
      workflow: [
        "Modeled users, sleep records, stress records, study sessions, activities, and goals.",
        "Normalized entities and relationships to reduce duplication.",
        "Implemented constraints, triggers, stored procedures, transactions, and indexes.",
        "Prepared the structure for dashboard-style insights and reporting."
      ],
      outcomes: [
        "Relational data modeling and ERD communication.",
        "SQL implementation with data integrity controls.",
        "A data foundation that inspired the upcoming StudySprout app."
      ],
      tags: ["Oracle", "SQL", "ERD", "Normalization"]
    },
    recipe: {
      type: "Classification",
      date: "Sep 2025 - Dec 2025",
      title: "Recipe Review Rating Classification",
      caption: "Recipe review overview showing dataset context, high-rating target, feature engineering, and model comparison.",
      icon: "CL",
      boardKicker: "Project Dashboard",
      boardTitle: "Rating Prediction Board",
      visualTitle: "Feature Signal Map",
      signals: ["Reviews", "Ratings", "Text Features", "Model Compare"],
      chart: [70, 88, 76, 64, 82],
      problem: "Predict high ratings from 18,182 recipe reviews using user behavior, metadata, and text-related features.",
      problemDetail: "The project frames recipe review prediction as a practical classification task for identifying reviews likely to receive high ratings.",
      methods: "Analyzed review data, engineered predictive features, and compared five machine learning models.",
      evaluation: "Compared model performance with classification metrics and feature-driven review of predictive signals.",
      value: "Connected behavioral and text-related signals with rating prediction for a practical recommendation-style use case.",
      metrics: [
        ["18,182", "Recipe reviews"],
        ["5", "ML models compared"],
        ["Text + metadata", "Feature inputs"]
      ],
      workflow: [
        "Cleaned review data and prepared the high-rating classification target.",
        "Engineered user behavior, metadata, and text-related features.",
        "Compared five machine learning models on the classification task.",
        "Summarized which features and models best supported rating prediction."
      ],
      outcomes: [
        "Applied classification to a real review dataset.",
        "Feature engineering across behavioral and text-related signals.",
        "Model comparison for recommendation-style analysis."
      ],
      tags: ["Python", "18,182 Reviews", "Feature Engineering", "Model Comparison"]
    },
    stock: {
      type: "Prediction",
      date: "Sep 2025 - Dec 2025",
      title: "Quantitative Stock Prediction & Strategy Optimization",
      caption: "Market prediction overview showing feature engineering, model benchmarking, and strategy-oriented evaluation.",
      icon: "TS",
      boardKicker: "Project Dashboard",
      boardTitle: "Market Signal Board",
      visualTitle: "Strategy Signal Map",
      signals: ["Returns", "Moving Avg", "Volatility", "Trend Signal"],
      chart: [54, 69, 77, 86, 96],
      problem: "Predict weekly stock movement and optimize strategy decisions from five years of QCOM market data.",
      problemDetail: "The project translates historical price behavior into model-ready features for weekly trend prediction.",
      methods: "Engineered returns, moving averages, and rolling volatility, then benchmarked KNN, Logistic Regression, Naive Bayes, LDA/QDA, SVM, and tree-based models.",
      evaluation: "Compared accuracy, classification metrics, and weekly trend prediction behavior.",
      value: "Translated historical market data into model-ready features for strategy-oriented analysis.",
      metrics: [
        ["5 yrs", "QCOM market data"],
        ["Weekly", "Trend prediction"],
        ["ML", "Model benchmarking"]
      ],
      workflow: [
        "Collected and prepared historical QCOM market data.",
        "Engineered returns, moving-average, and rolling-volatility features.",
        "Benchmarked multiple classifier families for weekly trend prediction.",
        "Connected model outputs to strategy-oriented decision analysis."
      ],
      outcomes: [
        "Time-aware feature engineering for market data.",
        "Model comparison across multiple classifier families.",
        "Decision-focused framing for predictive analytics."
      ],
      tags: ["QCOM", "5 Years Data", "Benchmarking", "Strategy Analysis"]
    }
  },
  zh: {
    housing: {
      type: "机器学习",
      date: "2026 年 2 月 - 2026 年 5 月",
      title: "American Housing Survey 分类分析",
      caption: "以 dashboard 风格展示数据集、建模流程、数据平衡和模型评估证据。",
      icon: "ML",
      boardKicker: "项目仪表盘",
      boardTitle: "分类证据面板",
      visualTitle: "证据地图",
      signals: ["调查数据", "数据平衡", "分类器", "混淆矩阵"],
      chart: [58, 72, 86, 68, 94],
      problem: "使用大规模住房调查数据预测 disability status，并提升 minority-class 预测可靠性。",
      problemDetail: "这个项目关注分类任务中容易被整体 accuracy 掩盖的 minority-class 预测表现。",
      methods: "构建并评估 4 种平衡方法和 9 个分类器组成的 36 种机器学习流程。",
      evaluation: "Recall、TPR、precision、F1-score 和 confusion matrix 分析。",
      value: "通过透明的模型比较证据提升 minority-class 预测可靠性。",
      metrics: [
        ["36", "机器学习流程组合"],
        ["4", "数据平衡方法"],
        ["9", "分类器类别"]
      ],
      workflow: [
        "清洗调查数据，并准备可用于建模的特征。",
        "测试用于 imbalanced classification 的数据平衡策略。",
        "通过可复现的 pipeline 比较不同分类器。",
        "用更关注 minority-class 的指标比较模型可靠性。"
      ],
      outcomes: [
        "结构化机器学习实验能力。",
        "不只依赖 headline accuracy 的模型评估能力。",
        "清晰表达模型取舍和可靠性的能力。"
      ],
      tags: ["Python", "scikit-learn", "Imbalanced Data", "36 Pipelines"]
    },
    database: {
      type: "数据库设计",
      date: "2026 年 3 月 - 2026 年 4 月",
      title: "Stress, Sleep, and Study Tracker 数据库项目",
      caption: "展示关系型表结构、睡眠压力学习数据、SQL 操作和洞察输出的数据库概览。",
      icon: "DB",
      boardKicker: "项目仪表盘",
      boardTitle: "关系型设计面板",
      visualTitle: "Schema 地图",
      signals: ["用户", "睡眠", "压力", "学习记录"],
      chart: [66, 82, 74, 90, 76],
      problem: "整合 sleep、stress 和 study activity 数据，用于个人表现分析。",
      problemDetail: "这个项目把健康状态和学习活动转化为关系型数据结构，方便后续查询、分析和报告。",
      methods: "设计并实现规范化 Oracle 关系型数据库，包括 ERD、schema、PK/FK constraints 和 lookup tables。",
      evaluation: "通过 triggers、stored procedures、transactions 和 indexes 完善数据库行为。",
      value: "把个人表现追踪转化为可分析、可报告的结构化数据。",
      metrics: [
        ["Oracle", "关系型数据库"],
        ["PK/FK", "完整性约束"],
        ["SQL", "触发器与存储过程"]
      ],
      workflow: [
        "建模 users、sleep records、stress records、study sessions、activities 和 goals。",
        "规范化实体与关系，减少数据重复。",
        "实现 constraints、triggers、stored procedures、transactions 和 indexes。",
        "为 dashboard-style insights 和后续报告准备数据基础。"
      ],
      outcomes: [
        "关系型数据建模和 ERD 表达能力。",
        "具有数据完整性控制的 SQL 实现能力。",
        "这个项目也启发了正在开发中的 StudySprout 应用。"
      ],
      tags: ["Oracle", "SQL", "ERD", "Normalization"]
    },
    recipe: {
      type: "分类",
      date: "2025 年 9 月 - 2025 年 12 月",
      title: "Recipe Review 评分分类",
      caption: "展示 review 数据、high-rating 目标定义、特征工程和模型比较的项目概览。",
      icon: "CL",
      boardKicker: "项目仪表盘",
      boardTitle: "评分预测面板",
      visualTitle: "特征信号地图",
      signals: ["评论", "评分", "文本特征", "模型比较"],
      chart: [70, 88, 76, 64, 82],
      problem: "基于 18,182 条 recipe reviews，使用用户行为、元数据和文本相关特征预测高评分。",
      problemDetail: "这个项目把 recipe review prediction 设定为识别高评分评论的实用分类任务。",
      methods: "分析评论数据、构建预测特征，并比较 5 个机器学习模型。",
      evaluation: "分类指标、模型比较和特征工程效果分析。",
      value: "将行为和文本相关信号连接到评分预测，形成推荐场景相关的分析案例。",
      metrics: [
        ["18,182", "Recipe reviews"],
        ["5", "机器学习模型"],
        ["Text + metadata", "特征输入"]
      ],
      workflow: [
        "清洗 review 数据，并准备 high-rating 分类目标。",
        "构建用户行为、元数据和文本相关特征。",
        "比较 5 个机器学习模型在分类任务上的表现。",
        "总结哪些特征和模型更能支持评分预测。"
      ],
      outcomes: [
        "将分类方法应用到真实 review 数据集。",
        "结合行为和文本相关信号进行特征工程。",
        "面向推荐场景的模型比较能力。"
      ],
      tags: ["Python", "18,182 Reviews", "Feature Engineering", "Model Comparison"]
    },
    stock: {
      type: "预测",
      date: "2025 年 9 月 - 2025 年 12 月",
      title: "量化股票预测与策略优化",
      caption: "展示市场数据特征工程、模型基准比较和策略分析的项目概览。",
      icon: "TS",
      boardKicker: "项目仪表盘",
      boardTitle: "市场信号面板",
      visualTitle: "策略信号地图",
      signals: ["收益率", "移动均线", "波动率", "趋势信号"],
      chart: [54, 69, 77, 86, 96],
      problem: "使用 5 年 QCOM 市场数据预测每周股票趋势。",
      problemDetail: "这个项目把历史价格行为转化为可用于每周趋势预测的模型特征。",
      methods: "构建 returns、moving averages 和 rolling volatility 特征，并比较 KNN、Logistic Regression、Naive Bayes、LDA/QDA、SVM 和 tree-based models。",
      evaluation: "Accuracy、classification metrics 和 weekly trend prediction 比较。",
      value: "把历史市场数据转化为可用于策略分析的模型特征。",
      metrics: [
        ["5 yrs", "QCOM 市场数据"],
        ["Weekly", "趋势预测目标"],
        ["ML", "模型基准比较"]
      ],
      workflow: [
        "收集并整理历史 QCOM 市场数据。",
        "构建 returns、moving averages 和 rolling volatility 特征。",
        "比较多个分类器类别在 weekly trend prediction 上的表现。",
        "将模型输出连接到 strategy-oriented decision analysis。"
      ],
      outcomes: [
        "面向市场数据的时间相关特征工程。",
        "跨多个分类器类别的模型比较。",
        "面向决策的预测分析表达能力。"
      ],
      tags: ["QCOM", "5 Years Data", "Benchmarking", "Strategy Analysis"]
    }
  }
};

const projectButtons = document.querySelectorAll("[data-project]");
const projectDetail = document.querySelector("[data-project-detail]");

const renderProjectList = (selector, items) => {
  const list = projectDetail?.querySelector(selector);
  if (!list) return;

  const children = items.map((item) => {
    const element = document.createElement("li");
    element.textContent = item;
    return element;
  });

  list.replaceChildren(...children);
};

const renderProjectMetrics = (metrics) => {
  const container = projectDetail?.querySelector("[data-project-metrics]");
  if (!container) return;

  container.replaceChildren(
    ...metrics.map(([value, label]) => {
      const item = document.createElement("div");
      const strong = document.createElement("strong");
      const span = document.createElement("span");

      strong.textContent = value;
      span.textContent = label;
      item.append(strong, span);

      return item;
    })
  );
};

const renderProjectSignals = (signals) => {
  const container = projectDetail?.querySelector("[data-project-signals]");
  if (!container) return;

  container.replaceChildren(
    ...signals.map((signal) => {
      const item = document.createElement("span");
      item.textContent = signal;
      return item;
    })
  );
};

const renderProjectChart = (values) => {
  const container = projectDetail?.querySelector("[data-project-chart]");
  if (!container) return;

  container.replaceChildren(
    ...values.map((value) => {
      const item = document.createElement("span");
      item.style.setProperty("--bar", `${value}%`);
      return item;
    })
  );
};

const updateProject = (key) => {
  const project = projectContent[currentLanguage]?.[key] || projectContent.en[key];
  if (!project || !projectDetail) return;

  projectButtons.forEach((button) => {
    const active = button.dataset.project === key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  replaySwapAnimation(projectDetail);
  projectDetail.dataset.projectTheme = key;
  projectDetail.querySelector("[data-project-type]").textContent = project.type;
  projectDetail.querySelector("[data-project-date]").textContent = project.date;
  projectDetail.querySelector("[data-project-title]").textContent = project.title;
  projectDetail.querySelector("[data-project-problem]").textContent = project.problem;
  projectDetail.querySelector("[data-project-icon]").textContent = project.icon;
  projectDetail.querySelector("[data-project-board-kicker]").textContent = project.boardKicker;
  projectDetail.querySelector("[data-project-board-title]").textContent = project.boardTitle;
  projectDetail.querySelector("[data-project-problem-detail]").textContent = project.problemDetail;
  projectDetail.querySelector("[data-project-methods]").textContent = project.methods;
  projectDetail.querySelector("[data-project-evaluation]").textContent = project.evaluation;
  projectDetail.querySelector("[data-project-value]").textContent = project.value;
  projectDetail.querySelector("[data-project-caption]").textContent = project.caption;
  projectDetail.querySelector("[data-project-visual-title]").textContent = project.visualTitle;
  renderProjectMetrics(project.metrics);
  renderProjectList("[data-project-workflow]", project.workflow);
  renderProjectList("[data-project-outcomes]", project.outcomes);
  renderProjectSignals(project.signals);
  renderProjectChart(project.chart);
  projectDetail.querySelector("[data-project-tags]").replaceChildren(
    ...project.tags.map((tag) => {
      const item = document.createElement("li");
      item.textContent = tag;
      return item;
    })
  );
};

projectButtons.forEach((button) => {
  button.addEventListener("click", () => updateProject(button.dataset.project));
});

const appContent = {
  en: {
    slacker: {
    stack: "SwiftUI + AppKit + Electron",
    title: "SlackerBuddy",
    icon: "assets/slackerbuddy-app-icon.png",
    secondary: "assets/fufu-slackerbuddy-blink.webp?v=20260528-fufu-position",
    secondaryAlt: "FuFu blinking companion pose",
    positioning: "A desktop companion app that helps users rest, hydrate, and feel less alone while working.",
    bullets: [
      "Desktop pet animations with rest and water reminders.",
      "PetDex support, bilingual settings, and downloadable builds.",
      "Demonstrates product execution, cross-platform packaging, and user-centered design."
    ],
    previewTitle: "Wellness Companion",
    previewStatus: "FuFu is on duty",
    previewItems: [
      ["Rest reminder", "Gentle breaks during focused work."],
      ["Hydration check", "Water reminders without breaking flow."],
      ["PetDex collection", "A small companion layer for motivation."]
    ],
    link: "https://slackerbuddy.vercel.app",
    linkText: "Visit SlackerBuddy website"
    },
    pastepaw: {
    stack: "SwiftUI macOS utility",
    title: "PastePaw",
    icon: "assets/pastepaw-icon.png",
    secondary: "assets/fufu-pastepaw-wave.webp?v=20260528-fufu-position",
    secondaryAlt: "FuFu waving for PastePaw",
    positioning: "A macOS clipboard history tool for saving, searching, pinning, and reusing recent text and images.",
    bullets: [
      "Menu bar access, text and image history, search, pinning, deletion, and retention settings.",
      "Local-only storage with English and Chinese interface support.",
      "Demonstrates desktop productivity design, privacy-aware workflows, and polished small-app UX."
    ],
    previewTitle: "Clipboard Workspace",
    previewStatus: "Local only",
    previewItems: [
      ["Search history", "Find recent text and image clips quickly."],
      ["Pin favorites", "Keep reusable snippets at the top."],
      ["Retention control", "Choose how long clipboard items stay."]
    ],
    link: "https://pastepaw.vercel.app/",
    linkText: "Visit PastePaw website"
    },
    studysprout: {
    stack: "Upcoming app",
    title: "StudySprout",
    icon: "assets/studysprout-icon.png?v=20260528-studysprout-icon",
    secondary: "assets/fufu-studysprout-run.webp?v=20260528-fufu-position",
    secondaryAlt: "FuFu running for StudySprout",
    positioning: "An upcoming study support app inspired by my Stress, Sleep, and Study Tracker Database Project.",
    bullets: [
      "Explores how study activity, stress, and sleep patterns can become practical learning feedback.",
      "Inspired by normalized database design for personal performance analysis.",
      "Currently in development. More details are coming soon."
    ],
    previewTitle: "Study Growth Lab",
    previewStatus: "Coming soon",
    previewItems: [
      ["Study rhythm", "Track learning activity and consistency."],
      ["Wellness context", "Connect stress and sleep patterns with study habits."],
      ["Insight dashboard", "Turn personal data into better planning cues."]
    ],
    link: "",
    linkText: ""
    }
  },
  zh: {
    slacker: {
      stack: "SwiftUI + AppKit + Electron",
      title: "SlackerBuddy",
      icon: "assets/slackerbuddy-app-icon.png",
      secondary: "assets/fufu-slackerbuddy-blink.webp?v=20260528-fufu-position",
      secondaryAlt: "FuFu 眨眼陪伴动作",
      positioning: "一个桌面陪伴应用，帮助用户休息、喝水，并在工作时减少孤独感。",
      bullets: [
        "桌面宠物动画，并支持休息和喝水提醒。",
        "支持 PetDex、双语设置和可下载版本。",
        "展示产品执行力、跨平台打包和以用户为中心的设计。"
      ],
      previewTitle: "工作陪伴面板",
      previewStatus: "FuFu 正在陪伴",
      previewItems: [
        ["休息提醒", "在专注工作中温和提醒休息。"],
        ["喝水提醒", "不打断工作流的补水提示。"],
        ["PetDex 收集", "用陪伴感增加持续使用动力。"]
      ],
      link: "https://slackerbuddy.vercel.app",
      linkText: "访问 SlackerBuddy 网站"
    },
    pastepaw: {
      stack: "SwiftUI macOS 工具",
      title: "PastePaw",
      icon: "assets/pastepaw-icon.png",
      secondary: "assets/fufu-pastepaw-wave.webp?v=20260528-fufu-position",
      secondaryAlt: "FuFu 打招呼动作，呼应 PastePaw",
      positioning: "一个 macOS 剪贴板历史工具，用于保存、搜索、置顶和复用近期复制的文字和图片。",
      bullets: [
        "支持菜单栏入口、文字和图片历史、搜索、置顶、删除和保留时间设置。",
        "本地保存，并支持英文和中文界面。",
        "展示桌面效率工具设计、隐私意识和小型应用 UX 打磨能力。"
      ],
      previewTitle: "剪贴板工作区",
      previewStatus: "仅本地保存",
      previewItems: [
        ["搜索历史", "快速查找近期文字和图片剪贴板内容。"],
        ["置顶常用项", "把常用片段固定在最容易找到的位置。"],
        ["保留时间设置", "控制剪贴板内容保存多久。"]
      ],
      link: "https://pastepaw.vercel.app/",
      linkText: "访问 PastePaw 网站"
    },
    studysprout: {
      stack: "Upcoming app",
      title: "StudySprout",
      icon: "assets/studysprout-icon.png?v=20260528-studysprout-icon",
      secondary: "assets/fufu-studysprout-run.webp?v=20260528-fufu-position",
      secondaryAlt: "FuFu 奔跑动作，呼应 StudySprout",
      positioning: "一个正在开发中的学习支持应用，灵感来自我的 Stress, Sleep, and Study Tracker Database Project。",
      bullets: [
        "探索如何把 study activity、stress 和 sleep patterns 转化为实用的学习反馈。",
        "灵感来自用于个人表现分析的规范化数据库设计。",
        "目前仍在开发中，敬请期待。"
      ],
      previewTitle: "学习成长实验室",
      previewStatus: "敬请期待",
      previewItems: [
        ["学习节奏", "追踪学习活动和持续性。"],
        ["状态关联", "将压力、睡眠和学习习惯联系起来。"],
        ["洞察面板", "把个人数据转化为更好的计划提示。"]
      ],
      link: "",
      linkText: ""
    }
  }
};

const appButtons = document.querySelectorAll("[data-app]");

const updateApp = (key) => {
  const app = appContent[currentLanguage]?.[key] || appContent.en[key];
  if (!app) return;

  appButtons.forEach((button) => {
    const active = button.dataset.app === key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  replaySwapAnimation(document.querySelector(".app-showcase"));
  document.querySelector("[data-app-stack]").textContent = app.stack;
  document.querySelector("[data-app-title]").textContent = app.title;
  document.querySelector("[data-app-positioning]").textContent = app.positioning;
  document.querySelector("[data-app-icon]").src = app.icon;
  document.querySelector("[data-app-icon]").alt = `${app.title} app icon`;
  document.querySelector("[data-app-secondary]").src = app.secondary;
  document.querySelector("[data-app-secondary]").alt = app.secondaryAlt;
  document.querySelector("[data-app-bullets]").innerHTML = app.bullets.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("[data-app-preview-title]").textContent = app.previewTitle;
  document.querySelector("[data-app-preview-status]").textContent = app.previewStatus;

  const previewItems = document.querySelector("[data-app-preview-items]");
  previewItems.replaceChildren(
    ...app.previewItems.map(([title, body]) => {
      const item = document.createElement("li");
      const itemTitle = document.createElement("strong");
      const itemBody = document.createElement("span");

      itemTitle.textContent = title;
      itemBody.textContent = body;
      item.append(itemTitle, itemBody);

      return item;
    })
  );

  const link = document.querySelector("[data-app-link]");
  if (app.link) {
    link.hidden = false;
    link.href = app.link;
    link.textContent = app.linkText;
  } else {
    link.hidden = true;
    link.removeAttribute("href");
    link.textContent = "";
  }
};

appButtons.forEach((button) => {
  button.addEventListener("click", () => updateApp(button.dataset.app));
});

const skillContent = {
  en: {
    data: {
    title: "Data Analysis",
    description: "Python, SQL, R, MATLAB, pandas, data cleaning, feature engineering, EDA, spreadsheets, database queries, and structured reporting.",
    meter: "82%"
    },
    ml: {
    title: "Machine Learning",
    description: "Classification, model evaluation, imbalanced data, Logistic Regression, Decision Tree, Random Forest, KNN, SVM, Naive Bayes, LDA/QDA, and Gradient Boosting.",
    meter: "78%"
    },
    viz: {
    title: "Visualization & Reporting",
    description: "Tableau, dashboards, data visualization, reports, Microsoft Office Suite, Google Workspace, spreadsheets, and decision-ready presentation.",
    meter: "74%"
    },
    product: {
    title: "Product & App",
    description: "SwiftUI, AppKit, Electron, local app workflows, bilingual UX, product packaging, LaTeX documentation, and small utility design.",
    meter: "70%"
    },
    communication: {
    title: "Communication",
    description: "Mandarin, English, technical documentation, technical translation, LLM prompting, LLM evaluation, applied AI workflows, AI presentation, and cross-functional collaboration.",
    meter: "88%"
    }
  },
  zh: {
    data: {
      title: "数据分析",
      description: "Python、SQL、R、MATLAB、pandas、数据清洗、特征工程、EDA、电子表格、数据库查询和结构化报告。",
      meter: "82%"
    },
    ml: {
      title: "机器学习",
      description: "分类、模型评估、imbalanced data、Logistic Regression、Decision Tree、Random Forest、KNN、SVM、Naive Bayes、LDA/QDA 和 Gradient Boosting。",
      meter: "78%"
    },
    viz: {
      title: "可视化与报告",
      description: "Tableau、仪表盘、数据可视化、报告、Microsoft Office Suite、Google Workspace、电子表格和决策型演示。",
      meter: "74%"
    },
    product: {
      title: "产品与应用",
      description: "SwiftUI、AppKit、Electron、本地应用流程、双语 UX、产品打包、LaTeX 文档和小型工具设计。",
      meter: "70%"
    },
    communication: {
      title: "沟通能力",
      description: "中文、英文、技术文档、技术翻译、LLM Prompting、LLM Evaluation、Applied AI Workflows、AI 演示和跨职能协作。",
      meter: "88%"
    }
  }
};

const skillButtons = document.querySelectorAll("[data-skill]");

const updateSkill = (key) => {
  const skill = skillContent[currentLanguage]?.[key] || skillContent.en[key];
  if (!skill) return;

  skillButtons.forEach((button) => {
    const active = button.dataset.skill === key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  replaySwapAnimation(document.querySelector(".skill-detail"));
  document.querySelector("[data-skill-title]").textContent = skill.title;
  document.querySelector("[data-skill-description]").textContent = skill.description;
  document.querySelector("[data-skill-meter]").style.width = skill.meter;
};

skillButtons.forEach((button) => {
  button.addEventListener("click", () => updateSkill(button.dataset.skill));
});

const setupLogoLoop = (root) => {
  const track = root.querySelector(".logoloop__track");
  const sequence = root.querySelector(".logoloop__list");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!track || !sequence || reducedMotion) {
    root.classList.add("logoloop--static");
    return;
  }

  const speed = Number(root.dataset.speed) || 120;
  const direction = root.dataset.direction || "left";
  const hoverSpeed = root.dataset.hoverSpeed === undefined ? 0 : Number(root.dataset.hoverSpeed);
  const isReverse = direction === "right" || direction === "down";
  const targetVelocity = Math.abs(speed) * (isReverse ? -1 : 1) * (speed < 0 ? -1 : 1);
  const hoverVelocity = Math.abs(hoverSpeed) * (isReverse ? -1 : 1) * (hoverSpeed < 0 ? -1 : 1);

  let sequenceWidth = 0;
  let offset = 0;
  let velocity = 0;
  let lastTimestamp = null;
  let isHovered = false;
  let frameId = 0;

  const syncCopies = () => {
    track.querySelectorAll(".logoloop__list[aria-hidden='true']").forEach((list) => list.remove());

    sequenceWidth = Math.ceil(sequence.getBoundingClientRect().width);
    if (!sequenceWidth) return;

    const copiesNeeded = Math.max(2, Math.ceil(root.clientWidth / sequenceWidth) + 2);
    for (let index = 1; index < copiesNeeded; index += 1) {
      const copy = sequence.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      track.appendChild(copy);
    }

    offset = ((offset % sequenceWidth) + sequenceWidth) % sequenceWidth;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
  };

  const animate = (timestamp) => {
    if (lastTimestamp === null) {
      lastTimestamp = timestamp;
    }

    const deltaTime = Math.max(0, timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    const target = isHovered ? hoverVelocity : targetVelocity;
    const easingFactor = 1 - Math.exp(-deltaTime / 0.25);
    velocity += (target - velocity) * easingFactor;

    if (sequenceWidth > 0) {
      offset += velocity * deltaTime;
      offset = ((offset % sequenceWidth) + sequenceWidth) % sequenceWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    }

    frameId = window.requestAnimationFrame(animate);
  };

  root.addEventListener("mouseenter", () => {
    isHovered = true;
  });

  root.addEventListener("mouseleave", () => {
    isHovered = false;
  });

  const resizeObserver = window.ResizeObserver ? new ResizeObserver(syncCopies) : null;
  resizeObserver?.observe(root);
  resizeObserver?.observe(sequence);
  window.addEventListener("resize", syncCopies);

  syncCopies();
  frameId = window.requestAnimationFrame(animate);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
      lastTimestamp = null;
    } else if (!document.hidden && !frameId) {
      frameId = window.requestAnimationFrame(animate);
    }
  });
};

document.querySelectorAll("[data-logo-loop]").forEach(setupLogoLoop);

const revealTargets = document.querySelectorAll(".project-card, .app-showcase, .toolbox-panel, .about-card, .mini-profile-card, .experience-card, .education-card, .contact-card");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((target) => {
  target.style.opacity = "0";
  target.style.transform = "translateY(16px)";
  target.style.transition = "opacity 360ms ease, transform 360ms ease";
  revealObserver.observe(target);
});

document.addEventListener("transitionend", (event) => {
  if (event.target.classList.contains("is-visible")) {
    event.target.style.transform = "";
  }
});

const style = document.createElement("style");
style.textContent = `.is-visible{opacity:1!important;}.is-visible:not(.reactbits-tilt){transform:translateY(0)!important;}`;
document.head.appendChild(style);

const splashCursorCanvas = document.querySelector("[data-splash-cursor]");
const canRunSplashCursor = splashCursorCanvas
  && window.ReactBitsSplashCursor
  && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canRunSplashCursor) {
  const rootStyles = getComputedStyle(document.documentElement);
  window.ReactBitsSplashCursor.init(splashCursorCanvas, {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 720,
    DENSITY_DISSIPATION: 3.8,
    VELOCITY_DISSIPATION: 2.2,
    PRESSURE: 0.12,
    PRESSURE_ITERATIONS: 18,
    CURL: 5,
    SPLAT_RADIUS: 0.11,
    SPLAT_FORCE: 5200,
    SHADING: true,
    RAINBOW_MODE: false,
    COLOR: rootStyles.getPropertyValue("--cursor-splash-primary").trim() || "#0052ff",
    TRANSPARENT: true
  });
}

applyLanguage(currentLanguage);
