/* --------------------------------------------------
   IntelliSys Hub JS - SPA Router & Google Drive API
   -------------------------------------------------- */

// 1. Comprehensive Curriculum Database (الأعوام الدراسية ومساقات التخصص)
const CURRICULUM_DATABASE = {
  level1: {
    name: "المستوى الأول (السنة الأولى)",
    semesters: {
      sem1: {
        name: "الفصل الدراسي الأول",
        courses: [
          { code: "ITCS1313", name: "رياضيات منفصلة", hours: 3 },
          { code: "ARAB1206", name: "اللغة العربية 1", hours: 2 },
          { code: "ENGS1202", name: "الرسم الهندسي", hours: 2 },
          { code: "ITCS1312", name: "أساسيات البرمجة", hours: 3 },
          { code: "MATH1411", name: "تفاضل وتكامل 1", hours: 4 },
          { code: "PHYS1301", name: "فيزياء للهندسة", hours: 3 }
        ]
      },
      sem2: {
        name: "الفصل الدراسي الثاني",
        courses: [
          { code: "ENGS1305", name: "تصميم المنطق الرقمي", hours: 3 },
          { code: "ENGS2302", name: "دوائر كهربائية", hours: 3 },
          { code: "ITCS1315", name: "لغة برمجة 1", hours: 3 },
          { code: "ENGL1207", name: "اللغة الانجليزية 1", hours: 2 },
          { code: "CHEM1304", name: "كيمياء للهندسة", hours: 3 },
          { code: "MATH1412", name: "تفاضل وتكامل 2", hours: 4 }
        ]
      }
    }
  },
  level2: {
    name: "المستوى الثاني (السنة الثانية)",
    semesters: {
      sem1: {
        name: "الفصل الدراسي الأول",
        courses: [
          { code: "ENGS1303", name: "دوائر إلكترونية", hours: 3 },
          { code: "ENGS2301", name: "رياضيات للهندسة", hours: 3 },
          { code: "ENGS2303", name: "لغة برمجة متقدمة", hours: 3 },
          { code: "ENGS2305", name: "تنظيم وعمارة الحاسوب", hours: 3 },
          { code: "ITCS2321", name: "تراكيب البيانات وتحليل الخوارزميات", hours: 3 },
          { code: "HIST1201", name: "القضية الفلسطينية", hours: 2 }
        ]
      },
      sem2: {
        name: "الفصل الدراسي الثاني",
        courses: [
          { code: "ENGS2304", name: "دوائر كهربائية وإلكترونية متقدمة", hours: 3 },
          { code: "ENGS2306", name: "نظم التشغيل للأنظمة الذكية", hours: 3 },
          { code: "ENGS2307", name: "الذكاء الاصطناعي", hours: 3 },
          { code: "ENGS2308", name: "علم البيانات", hours: 3 },
          { code: "ITCS2322", name: "نظم قواعد البيانات", hours: 3 },
          { code: "ISLM1201", name: "القرآن الكريم", hours: 2 },
          { code: "MATH2305", name: "نظرية الاحصاء والاحتمالات", hours: 3 }
        ]
      }
    }
  },
  level3: {
    name: "المستوى الثالث (السنة الثالثة)",
    semesters: {
      sem1: {
        name: "الفصل الدراسي الأول",
        courses: [
          { code: "ENGS3302", name: "معالجة الأنماط", hours: 3 },
          { code: "ENGS3304", name: "برمجة وتطوير الويب 1", hours: 3 },
          { code: "ENGS3307", name: "هندسة برمجيات", hours: 3 },
          { code: "ENGS3308", name: "أنظمة الاتصالات والاشارات الرقمية", hours: 3 },
          { code: "ITNM2312", name: "شبكات الحاسوب وتراسل البيانات", hours: 3 },
          { code: "ENGS3316", name: "برمجة وتطوير الويب 2", hours: 3 },
          { code: "ISLM1204", name: "العقيدة الاسلامية", hours: 2 }
        ]
      },
      sem2: {
        name: "الفصل الدراسي الثاني",
        courses: [
          { code: "ENGS3200", name: "التدريب ميداني", hours: 2 },
          { code: "ENGS3301", name: "برمجة الهواتف الذكية 1", hours: 3 },
          { code: "ENGS3303", name: "التعلم الآلي", hours: 3 },
          { code: "ENGS3305", name: "الاتصالات اللاسلكية", hours: 3 },
          { code: "ENGS3306", name: "أنظمة التحكم الآلي", hours: 3 },
          { code: "ITNM3319", name: "أمن البيانات والانظمة المحوسبة", hours: 3 },
          { code: "ENGS3315", name: "برمجة الهواتف الذكية 2", hours: 3 },
          { code: "ITCS1201", name: "الحاسوب والإنترنت", hours: 2 }
        ]
      }
    }
  },
  level4: {
    name: "المستوى الرابع (السنة الرابعة)",
    semesters: {
      sem1: {
        name: "الفصل الدراسي الأول",
        courses: [
          { code: "ENGS4305", name: "برمجة الأنظمة المتضمنة", hours: 3 },
          { code: "ENGS4315", name: "التعلم العميق", hours: 3 },
          { code: "ENGS4323", name: "مشروع التخرج 1", hours: 3 },
          { code: "ENGS4318", name: "معالجة اللغات الطبيعية", hours: 3 },
          { code: "ENGS4325", name: "انترنت الأشياء", hours: 3 },
          { code: "ITNM4313", name: "الأنظمة الموزعة والسحابية", hours: 3 },
          { code: "ITNM4321", name: "الأمن السيبراني", hours: 3 }
        ]
      },
      sem2: {
        name: "الفصل الدراسي الثاني",
        courses: [
          { code: "ENGS4207", name: "ريادة الأعمال الهندسية", hours: 2 },
          { code: "ENGS4316", name: "تنقيب البيانات وتحليلها", hours: 3 },
          { code: "ENGS4324", name: "مشروع التخرج 2", hours: 3 },
          { code: "ENGS4307", name: "روبوت", hours: 3 },
          { code: "ENGS4326", name: "الانظمة والمدن الذكية", hours: 3 }
        ]
      }
    }
  }
};


// 3. Application State (إدارة حالة التطبيق)
const AppState = {
  config: null,
  activeView: "home",
  currentCourseCode: null,
  currentFolderId: null,
  navigationHistory: ["home"], // For back button functionality (page navigation)
  explorerFolderPath: [], // For folder navigation within explorer (separate from page history)
  searchQuery: "",
  activeCategory: "level1",
  availableCourseFiles: [], // Cache of files in current course
  googleDriveFoldersMap: {} // Store resolved names and IDs
};

// --------------------------------------------------
// Core Startup & Config Load (بدء تشغيل التطبيق وقراءة الإعدادات)
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  setupEventListeners();
  setupGlobalSearch();
  setupHeaderScrollBehavior();
  
  try {
    const response = await fetch("config.json");
    if (!response.ok) throw new Error("Failed to load config.json");
    AppState.config = await response.json();
  } catch (error) {
    console.warn("Could not read config.json, running in default fallback demo mode", error);
    // Use fallback local state config
    AppState.config = {
      googleDriveApiKey: "",
      demoMode: true,
      courses: {
        "ITCS1313": { "folderId": "1a_mock_discrete_math_folder_id", "tips": "الرياضيات المنفصلة هي لغة التفكير المنطقي للحاسوب. ركز جداً على المنطق ونظرية المجموعات." },
        "ITCS1312": { "folderId": "1d_mock_fundamentals_programming_folder_id", "tips": "أساسيات البرمجة تحتاج تطبيقاً عملياً مستمراً. اكتب الكود بيدك ولا تنسى حل المسائل البرمجية." },
        "MATH1411": { "folderId": "1e_mock_calculus_1_folder_id", "tips": "تفاضل وتكامل 1 هو حجر الأساس للرياضيات الهندسية. ركز على النهايات والمشتقات والتكاملات." },
        "PHYS1301": { "folderId": "1f_mock_physics_eng_folder_id", "tips": "الفيزياء الهندسية تركز على الميكانيكا والحركة. يوصى بمشاهدة شرح قنوات يوتيوب وحل مسائل الكتاب." }
      }
    };
  }

  // Populate active courses dropdown in toolbar
  populateCoursesDropdown();

  // Render Dashboard
  renderDashboard();

  // Prepare home page and explorer interactions
  setupHomePageActions();

  // Initial Router Check
  handleNavigationFromHash();
});

// --------------------------------------------------
// Theme Switcher & Persistence (التحكم بالوضع الداكن والفاتح)
// --------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  }
}

// --------------------------------------------------
// Global Search Setup (خانة البحث العامة في الـ Header)
// --------------------------------------------------
function setupGlobalSearch() {
  const globalSearchInput = document.getElementById("globalSearchInput");
  const clearGlobalSearchBtn = document.getElementById("clearGlobalSearchBtn");
  const searchResultsDropdown = document.getElementById("searchResultsDropdown");
  const searchResultsList = document.getElementById("searchResultsList");

  if (!globalSearchInput) return;

  globalSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    clearGlobalSearchBtn.style.display = query ? "flex" : "none";

    if (query.length > 0) {
      // Show search results dropdown
      const allCourses = getAllCourseEntries();
      const filteredCourses = allCourses.filter(course => {
        return course.name.toLowerCase().includes(query.toLowerCase())
          || course.code.toLowerCase().includes(query.toLowerCase());
      }).slice(0, 8); // Limit to 8 results

      if (filteredCourses.length > 0) {
        searchResultsList.innerHTML = "";
        filteredCourses.forEach(course => {
          const resultItem = document.createElement("div");
          resultItem.className = `search-result-item ${course.available ? "available" : "unavailable"}`;
          resultItem.innerHTML = `
            <div class="result-icon">
              <i class="fa-solid ${course.available ? "fa-check-circle" : "fa-lock"}"></i>
            </div>
            <div class="result-content">
              <div class="result-name">${course.name}</div>
              <div class="result-code">${course.code} • ${course.levelName}</div>
            </div>
          `;
          if (course.available) {
            resultItem.style.cursor = "pointer";
            resultItem.addEventListener("click", () => {
              loadCourseInExplorer(course.code);
              globalSearchInput.value = "";
              clearGlobalSearchBtn.style.display = "none";
              searchResultsDropdown.style.display = "none";
            });
          }
          searchResultsList.appendChild(resultItem);
        });
        searchResultsDropdown.style.display = "block";
      } else {
        searchResultsList.innerHTML = `<div class="search-no-results">لا توجد نتائج</div>`;
        searchResultsDropdown.style.display = "block";
      }
    } else {
      searchResultsDropdown.style.display = "none";
    }

    // If in explorer and course selected, apply file search
    if (AppState.activeView === "explorer" && AppState.currentCourseCode) {
      AppState.searchQuery = query.toLowerCase();
      applyFiltersAndSearch();
    }
    // If in home, apply course search
    else if (AppState.activeView === "home") {
      document.getElementById("homeSearchInput").value = query;
      renderHomeCoursesList();
    }
  });

  clearGlobalSearchBtn.addEventListener("click", () => {
    globalSearchInput.value = "";
    clearGlobalSearchBtn.style.display = "none";
    searchResultsDropdown.style.display = "none";
    
    if (AppState.activeView === "explorer" && AppState.currentCourseCode) {
      AppState.searchQuery = "";
      applyFiltersAndSearch();
    } else if (AppState.activeView === "home") {
      document.getElementById("homeSearchInput").value = "";
      renderHomeCoursesList();
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search-wrapper")) {
      searchResultsDropdown.style.display = "none";
    }
  });
}

// --------------------------------------------------
// Header Scroll Behavior (تصغير Header عند التمرير على الجوال)
// --------------------------------------------------
function setupHeaderScrollBehavior() {
  const header = document.getElementById("appHeader");
  let lastScrollTop = 0;
  let scrollTimeout;

  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) return;

    clearTimeout(scrollTimeout);
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scrolling down
      header.classList.add("compact");
    } else {
      // Scrolling up
      header.classList.remove("compact");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    scrollTimeout = setTimeout(() => {
      header.classList.remove("compact");
    }, 2000);
  });
}

function toggleTheme() {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }
}

// --------------------------------------------------
// Responsive Sidebar Logic (أدوات التحكم بالقائمة الجانبية المتقدمة)
// --------------------------------------------------
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebarBtn");
  const toggleIcon = toggleBtn.querySelector(".toggle-icon");
  
  if (window.innerWidth <= 768) {
    // Mobile Drawer style toggle
    sidebar.classList.toggle("active-mobile");
  } else {
    // Desktop collapsible style toggle
    const isCollapsed = sidebar.classList.toggle("collapsed");
    // Rotate icon when toggling
    if (isCollapsed) {
      toggleIcon.style.transform = "rotate(180deg)";
    } else {
      toggleIcon.style.transform = "rotate(0deg)";
    }
  }
}

// Add Back Button Handler
function setupBackButton() {
  const backBtn = document.getElementById("backBtn");
  if (!backBtn) return;
  
  backBtn.addEventListener("click", () => {
    goBack();
  });
}

function goBack() {
  if (AppState.navigationHistory.length > 1) {
    AppState.navigationHistory.pop(); // Remove current
    const previousView = AppState.navigationHistory[AppState.navigationHistory.length - 1];
    navigateToView(previousView, { clearCourse: true, skipHistory: true });
  } else if (AppState.currentCourseCode) {
    // If in explorer with course, go back to explorer list
    AppState.currentCourseCode = null;
    updateExplorerDisplay();
  }
}

function updateBackButtonVisibility() {
  const backBtn = document.getElementById("backBtn");
  if (!backBtn) return;
  
  const showBack = AppState.navigationHistory.length > 1 || AppState.currentCourseCode;
  backBtn.style.display = showBack ? "inline-flex" : "none";
}

// --------------------------------------------------
// Router Navigation System (محرك التنقل وحالة الصفحات)
// --------------------------------------------------
function setupEventListeners() {
  // Sidebar Toggle
  document.getElementById("toggleSidebarBtn").addEventListener("click", toggleSidebar);
  document.getElementById("mobileMenuBtn").addEventListener("click", toggleSidebar);
  
  // Theme Toggle
  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);

  // Back Button
  setupBackButton();

  // Sidebar Menu buttons
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(nav => nav.classList.remove("active"));
      item.classList.add("active");
      
      const targetView = item.getAttribute("data-view");
      navigateToView(targetView);
      
      // Close mobile sidebar if clicked
      const sidebar = document.getElementById("sidebar");
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active-mobile");
      }
    });
  });

  // Breadcrumbs Base node click
  document.querySelectorAll(".breadcrumb-item[data-target]").forEach(node => {
    node.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToView(node.getAttribute("data-target"));
    });
  });

  // Course Selector Dropdown in Toolbar
  const courseDropdown = document.getElementById("courseSelectDropdown");
  if (courseDropdown) {
    courseDropdown.addEventListener("change", (e) => {
      const courseCode = e.target.value;
      if (courseCode) {
        loadCourseInExplorer(courseCode);
      }
    });
  }

  // Category Quick Filter buttons
  const catTabs = document.querySelectorAll(".category-tab");
  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      AppState.activeCategory = tab.getAttribute("data-type");
      applyFiltersAndSearch();
    });
  });

  // File Search bar filtering
  const searchInput = document.getElementById("fileSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.trim().toLowerCase();
      
      if (AppState.searchQuery.length > 0) {
        clearBtn.style.display = "flex";
      } else {
        clearBtn.style.display = "none";
      }

      if (AppState.currentCourseCode) {
        applyFiltersAndSearch();
      } else {
        renderExplorerCourseBrowser();
      }
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      AppState.searchQuery = "";
      clearBtn.style.display = "none";
      if (AppState.currentCourseCode) {
        applyFiltersAndSearch();
      } else {
        renderExplorerCourseBrowser();
      }
      searchInput.focus();
    });
  }

  // Inline Preview Modal Controls
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const previewModal = document.getElementById("previewModal");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }
  if (previewModal) {
    previewModal.addEventListener("click", (e) => {
      if (e.target.id === "previewModal") {
        closeModal();
      }
    });
  }

  // Hash-based router listener (for back/forward buttons support)
  window.addEventListener("hashchange", handleNavigationFromHash);
}

function navigateToView(viewName, options = {}) {
  AppState.activeView = viewName;

  if (viewName === "explorer" && options.clearCourse !== false) {
    AppState.currentCourseCode = null;
  }
  
  // Add to history only if not skipping history
  if (!options.skipHistory && !AppState.navigationHistory.includes(viewName)) {
    AppState.navigationHistory.push(viewName);
  }
  
  // Hide all screens
  const sections = document.querySelectorAll(".view-section");
  sections.forEach(section => section.classList.remove("active"));
  
  // Show target screen
  const targetSection = document.getElementById(`view-${viewName}`);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  // Sync sidebar active status
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    if (item.getAttribute("data-view") === viewName) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Update hash
  window.location.hash = `#/${viewName}`;
  
  updateExplorerDisplay();
  updateBackButtonVisibility();
  
  // Scroll to top of viewport
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleNavigationFromHash() {
  const hash = window.location.hash || "#/home";
  
  if (hash.startsWith("#/explorer/course/")) {
    const courseCode = hash.replace("#/explorer/course/", "");
    // Only load if it's different from currently loaded course
    if (AppState.currentCourseCode !== courseCode) {
      loadCourseInExplorer(courseCode);
    }
  } else {
    const viewName = hash.replace("#/", "");
    if (["home", "dashboard", "explorer", "contacts"].includes(viewName)) {
      navigateToView(viewName);
    } else {
      navigateToView("home");
    }
  }
}

// --------------------------------------------------
// Populate Data lists & Dropdowns (تعبئة القوائم وعناصر الاختيار)
// --------------------------------------------------
function populateCoursesDropdown() {
  const dropdown = document.getElementById("courseSelectDropdown");
  dropdown.innerHTML = '<option value="disabled selected">-- اختر مادة لتصفح ملفاتها --</option>';
  
  Object.keys(CURRICULUM_DATABASE).forEach(levelKey => {
    const semesters = CURRICULUM_DATABASE[levelKey].semesters;
    Object.keys(semesters).forEach(semKey => {
      semesters[semKey].courses.forEach(course => {
        const isAvailable = AppState.config && AppState.config.courses && AppState.config.courses[course.code];
        const option = document.createElement("option");
        option.value = course.code;
        option.textContent = `${course.name} (${course.code})${isAvailable ? "" : " - غير متوفر"}`;
        if (!isAvailable) {
          option.disabled = true;
        }
        dropdown.appendChild(option);
      });
    });
  });
}

function getAllCourseEntries() {
  const entries = [];
  Object.keys(CURRICULUM_DATABASE).forEach(levelKey => {
    const levelData = CURRICULUM_DATABASE[levelKey];
    Object.keys(levelData.semesters).forEach(semKey => {
      const semData = levelData.semesters[semKey];
      semData.courses.forEach(course => {
        entries.push({
          code: course.code,
          name: course.name,
          hours: course.hours,
          levelKey,
          levelName: levelData.name,
          semesterKey: semKey,
          semesterName: semData.name,
          available: AppState.config && AppState.config.courses && AppState.config.courses[course.code]
        });
      });
    });
  });
  return entries;
}

function renderHomeCoursesList() {
  const container = document.getElementById("homeCoursesResults");
  const query = document.getElementById("homeSearchInput").value.trim().toLowerCase();
  const levelFilter = document.getElementById("homeLevelFilter").value;
  const sortBy = document.getElementById("homeSortSelect").value;

  let courses = getAllCourseEntries();

  if (levelFilter !== "all") {
    courses = courses.filter(course => course.levelKey === levelFilter);
  }

  if (query) {
    courses = courses.filter(course => {
      return course.name.toLowerCase().includes(query)
        || course.code.toLowerCase().includes(query)
        || course.levelName.toLowerCase().includes(query)
        || course.semesterName.toLowerCase().includes(query);
    });
  }

  if (sortBy === "name") {
    courses.sort((a, b) => a.name.localeCompare(b.name, "ar"));
  } else if (sortBy === "level") {
    courses.sort((a, b) => {
      const levelOrder = ["level1", "level2", "level3", "level4"];
      const delta = levelOrder.indexOf(a.levelKey) - levelOrder.indexOf(b.levelKey);
      return delta !== 0 ? delta : a.name.localeCompare(b.name, "ar");
    });
  } else {
    courses.sort((a, b) => {
      const levelOrder = ["level1", "level2", "level3", "level4"];
      const delta = levelOrder.indexOf(a.levelKey) - levelOrder.indexOf(b.levelKey);
      if (delta !== 0) return delta;
      if (a.semesterKey !== b.semesterKey) return a.semesterKey.localeCompare(b.semesterKey);
      return a.name.localeCompare(b.name, "ar");
    });
  }

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass state-icon-huge"></i>
        <h4 class="state-title">لا يوجد مساق مطابق</h4>
        <p class="state-subtitle">حاول تعديل مصطلح البحث أو اختيار سنة أخرى.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";
  courses.forEach(course => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `course-search-card ${course.available ? "active-course" : "locked-course"}`;
    card.innerHTML = `
      <div class="course-search-card-main">
        <div>
          <span class="course-code-tag">${course.code}</span>
          <h4>${course.name}</h4>
          <p>${course.levelName} - ${course.semesterName}</p>
        </div>
        <span class="course-hours-badge-small">${course.hours} ساعات</span>
      </div>
      <div class="course-search-card-foot">
        <span>${course.available ? "متاح في المستكشف" : "غير متوفر حالياً"}</span>
      </div>
    `;

    if (course.available) {
      card.addEventListener("click", () => loadCourseInExplorer(course.code));
    }
    container.appendChild(card);
  });
}

function renderExplorerCourseBrowser() {
  const browserList = document.getElementById("explorerCourseList");
  const query = AppState.searchQuery.trim().toLowerCase();
  let courses = getAllCourseEntries();

  if (query) {
    courses = courses.filter(course => {
      return course.name.toLowerCase().includes(query)
        || course.code.toLowerCase().includes(query)
        || course.levelName.toLowerCase().includes(query)
        || course.semesterName.toLowerCase().includes(query);
    });
  }

  courses.sort((a, b) => {
    const levelOrder = ["level1", "level2", "level3", "level4"];
    const delta = levelOrder.indexOf(a.levelKey) - levelOrder.indexOf(b.levelKey);
    if (delta !== 0) return delta;
    if (a.semesterKey !== b.semesterKey) return a.semesterKey.localeCompare(b.semesterKey);
    return a.name.localeCompare(b.name, "ar");
  });

  if (courses.length === 0) {
    browserList.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-ban state-icon-huge"></i>
        <h4 class="state-title">غير موجود</h4>
        <p class="state-subtitle">لم يتم العثور على مساق مطابق لاسم البحث.</p>
      </div>
    `;
    return;
  }

  browserList.innerHTML = "";
  courses.forEach(course => {
    const courseCard = document.createElement("button");
    courseCard.type = "button";
    courseCard.className = `course-browser-card ${course.available ? "active-course" : "locked-course"}`;
    courseCard.innerHTML = `
      <div class="course-browser-card-meta">
        <div>
          <span class="course-code-tag">${course.code}</span>
          <h4>${course.name}</h4>
          <small>${course.levelName} - ${course.semesterName}</small>
        </div>
        <span class="course-status-badge">${course.available ? "افتح المستكشف" : "غير متوفر"}</span>
      </div>
    `;
    if (course.available) {
      courseCard.addEventListener("click", () => loadCourseInExplorer(course.code));
    }
    browserList.appendChild(courseCard);
  });
}

function setupHomePageActions() {
  const homeSearchInput = document.getElementById("homeSearchInput");
  const homeSortSelect = document.getElementById("homeSortSelect");
  const homeLevelFilter = document.getElementById("homeLevelFilter");
  const quickButtons = document.querySelectorAll(".quick-link-btn");

  if (homeSearchInput) {
    homeSearchInput.addEventListener("input", () => renderHomeCoursesList());
  }
  if (homeSortSelect) {
    homeSortSelect.addEventListener("change", () => renderHomeCoursesList());
  }
  if (homeLevelFilter) {
    homeLevelFilter.addEventListener("change", () => renderHomeCoursesList());
  }

  quickButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetView = button.dataset.targetView;
      const targetLevel = button.dataset.level;
      const targetSemester = button.dataset.semester;

      if (targetView === "dashboard") {
        navigateToView("dashboard");
        if (targetLevel) {
          const levelRow = document.getElementById(`level-${targetLevel}`);
          if (levelRow) {
            levelRow.classList.remove("collapsed");
            levelRow.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
        if (targetSemester) {
          const semSection = Array.from(document.querySelectorAll(".semester-column")).find(column => column.textContent.includes(targetSemester === "sem1" ? "الفصل الدراسي الأول" : "الفصل الدراسي الثاني"));
          if (semSection) {
            semSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      } else {
        navigateToView(targetView);
      }
    });
  });

  renderHomeCoursesList();
}

function updateExplorerDisplay() {
  const browserWrapper = document.getElementById("explorerCourseBrowser");
  const toolbar = document.getElementById("explorerToolbar");
  const categoryTabs = document.getElementById("categoryTabs");
  const filesWrapper = document.getElementById("explorerFilesWrapper");
  const courseHeader = document.getElementById("courseHeaderBanner");
  const peerAdvice = document.getElementById("peerAdviceCard");
  const searchInput = document.getElementById("fileSearchInput");

  const hasCourseSelected = Boolean(AppState.currentCourseCode);

  browserWrapper.style.display = hasCourseSelected ? "none" : "block";
  toolbar.style.display = "flex";
  categoryTabs.style.display = hasCourseSelected ? "flex" : "none";
  filesWrapper.style.display = hasCourseSelected ? "block" : "none";
  courseHeader.style.display = hasCourseSelected ? "flex" : "none";
  peerAdvice.style.display = hasCourseSelected ? "flex" : "none";

  if (searchInput) {
    searchInput.placeholder = hasCourseSelected ? "ابحث عن ملف باسمه..." : "ابحث عن مساق بالاسم...";
  }

  if (hasCourseSelected) {
    applyFiltersAndSearch();
  } else {
    renderExplorerCourseBrowser();
  }
}

// --------------------------------------------------
// Render Dashboard Study Plan (بناء الخطة الدراسية التفاعلية)
// --------------------------------------------------
function renderDashboard() {
  const levelsGrid = document.getElementById("levelsGrid");
  levelsGrid.innerHTML = ""; // Clear loader

  Object.keys(CURRICULUM_DATABASE).forEach((levelKey, index) => {
    const levelData = CURRICULUM_DATABASE[levelKey];
    
    // Create level card container
    const levelRow = document.createElement("div");
    levelRow.className = `level-row ${index > 0 ? "collapsed" : ""}`; // Expand Level 1 by default
    levelRow.id = `level-${levelKey}`;

    // Level Header details
    const levelHeader = document.createElement("div");
    levelHeader.className = "level-row-header";
    levelHeader.addEventListener("click", () => {
      levelRow.classList.toggle("collapsed");
    });

    levelHeader.innerHTML = `
      <div class="level-title-wrapper">
        <div class="level-number-badge">${index + 1}</div>
        <h3 class="level-title-text">${levelData.name}</h3>
      </div>
      <div class="level-collapse-icon"><i class="fa-solid fa-chevron-down"></i></div>
    `;

    // Level body containing two semesters
    const levelBody = document.createElement("div");
    levelBody.className = "level-row-body";

    // Semester 1 & 2
    Object.keys(levelData.semesters).forEach(semKey => {
      const semData = levelData.semesters[semKey];
      
      const semColumn = document.createElement("div");
      semColumn.className = "semester-column";
      
      semColumn.innerHTML = `
        <h4 class="semester-title">
          <i class="fa-solid fa-calendar-day"></i>
          <span>${semData.name}</span>
        </h4>
      `;

      const coursesGridList = document.createElement("div");
      coursesGridList.className = "courses-grid-list";

      semData.courses.forEach(course => {
        const isCourseActive = AppState.config && AppState.config.courses && AppState.config.courses[course.code];
        const courseCard = document.createElement("a");
        
        if (isCourseActive) {
          courseCard.className = "course-card active-course";
          courseCard.href = `#/explorer/course/${course.code}`;
          
          courseCard.innerHTML = `
            <div class="course-info-group">
              <span class="course-code-tag">${course.code}</span>
              <span class="course-name-label">${course.name}</span>
              <span class="course-hours-badge-small">${course.hours} ساعات</span>
            </div>
            <div class="course-card-actions">
              <span class="action-status-badge">عرض الملفات</span>
              <i class="fa-solid fa-arrow-left-long course-card-arrow"></i>
            </div>
          `;
          
          courseCard.addEventListener("click", (e) => {
            e.preventDefault();
            loadCourseInExplorer(course.code);
          });
        } else {
          // Locked Course Card
          courseCard.className = "course-card locked-course tooltip-container";
          courseCard.innerHTML = `
            <div class="course-info-group">
              <span class="course-code-tag">${course.code}</span>
              <span class="course-name-label">${course.name}</span>
              <span class="course-hours-badge-small">${course.hours} ساعات</span>
            </div>
            <div class="course-card-actions">
              <span class="action-status-badge"><i class="fa-solid fa-lock"></i></span>
            </div>
            <span class="tooltip-text">سيتم توفير المساق فور دراستها وتحديثها.</span>
          `;
        }
        coursesGridList.appendChild(courseCard);
      });

      semColumn.appendChild(coursesGridList);
      levelBody.appendChild(semColumn);
    });

    levelRow.appendChild(levelHeader);
    levelRow.appendChild(levelBody);
    levelsGrid.appendChild(levelRow);
  });
}

// --------------------------------------------------
// Course Explorer & File System logic (مستكشف المساق ونظام الملفات)
// --------------------------------------------------
function getCourseDetails(courseCode) {
  let matchedCourse = null;
  let matchedLevel = null;
  let matchedSem = null;

  Object.keys(CURRICULUM_DATABASE).forEach(levelKey => {
    const semesters = CURRICULUM_DATABASE[levelKey].semesters;
    Object.keys(semesters).forEach(semKey => {
      const course = semesters[semKey].courses.find(c => c.code === courseCode);
      if (course) {
        matchedCourse = course;
        matchedLevel = CURRICULUM_DATABASE[levelKey].name;
        matchedSem = semesters[semKey].name;
      }
    });
  });

  return { course: matchedCourse, level: matchedLevel, semester: matchedSem };
}

function loadCourseInExplorer(courseCode) {
  const courseDetails = getCourseDetails(courseCode);
  if (!courseDetails.course) {
    navigateToView("dashboard");
    return;
  }

  AppState.currentCourseCode = courseCode;
  AppState.activeCategory = "all";
  AppState.searchQuery = "";
  AppState.explorerFolderPath = []; // Reset folder navigation when loading new course

  // Set dropdown to selected course
  const courseDropdown = document.getElementById("courseSelectDropdown");
  if (courseDropdown) {
    courseDropdown.value = courseCode;
  }

  // Render course banner details
  document.getElementById("explorerCourseCode").textContent = courseCode;
  document.getElementById("explorerCourseName").textContent = courseDetails.course.name;
  document.getElementById("explorerCourseHours").textContent = courseDetails.course.hours;

  // Set peer advice content
  const courseConfig = AppState.config.courses[courseCode];
  const adviceTextElement = document.getElementById("peerAdviceText");
  const adviceCard = document.getElementById("peerAdviceCard");
  
  if (courseConfig && courseConfig.tips) {
    adviceTextElement.textContent = courseConfig.tips;
    adviceCard.style.display = "flex";
  } else {
    adviceCard.style.display = "none";
  }

  // Load root folder
  AppState.currentFolderId = courseConfig.folderId;
  fetchFolderItems(AppState.currentFolderId, courseDetails.course.name);
  
  // Update view hash and navigate
  AppState.activeView = "explorer";
  navigateToView("explorer", { clearCourse: false });
  window.location.hash = `#/explorer/course/${courseCode}`;
  updateBackButtonVisibility();
}

// Fetch files from real API or mock fallback
async function fetchFolderItems(folderId, folderName) {
  const listContainer = document.getElementById("explorerItemsList");
  showLoadingInExplorer();

  // Update GDrive folders mapping for breadcrumbs
  AppState.googleDriveFoldersMap[folderId] = folderName;

  // Render dynamic breadcrumbs path
  renderBreadcrumbs(folderId);

  const isDemoMode = AppState.config.demoMode || !AppState.config.googleDriveApiKey || AppState.config.googleDriveApiKey.includes("YourMockApiKey");
  
  if (isDemoMode) {
    // Enable visual warning banner
    document.getElementById("demoAlertBanner").style.display = "flex";
    
    // Simulate API delay for premium feel
    setTimeout(() => {
      const mockItems = MOCK_DRIVE_DATA[folderId] || [];
      AppState.availableCourseFiles = mockItems;
      renderExplorerItems(mockItems);
    }, 450);
  } else {
    document.getElementById("demoAlertBanner").style.display = "none";
    
    try {
      const apiKey = AppState.config.googleDriveApiKey;
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=files(id,name,mimeType,size,modifiedTime)&orderBy=folder,name&key=${apiKey}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error("Google Drive API response was not OK");
      
      const data = await response.json();
      AppState.availableCourseFiles = data.files || [];
      renderExplorerItems(AppState.availableCourseFiles);
    } catch (error) {
      console.error("API error fetching Google Drive files:", error);
      renderErrorState("فشل جلب الملفات من Google Drive", "تأكد من صحة مفتاح الـ API ومجلدات درايف أو تحقق من الاتصال بالإنترنت.");
    }
  }
}

// Render folder hierarchy breadcrumbs path (RTL)
function renderBreadcrumbs(currentFolderId) {
  const nav = document.getElementById("breadcrumbsNav");
  nav.innerHTML = "";

  // Add Dashboard Root link
  const rootLink = document.createElement("a");
  rootLink.className = "breadcrumb-item";
  rootLink.href = "#/dashboard";
  rootLink.textContent = "الرئيسية";
  rootLink.addEventListener("click", (e) => {
    e.preventDefault();
    navigateToView("dashboard");
  });
  nav.appendChild(rootLink);

  // Add Level node info
  const courseDetails = getCourseDetails(AppState.currentCourseCode);
  if (courseDetails.level) {
    addBreadcrumbSeparator(nav);
    const levelNode = document.createElement("span");
    levelNode.className = "breadcrumb-item";
    levelNode.textContent = courseDetails.level;
    nav.appendChild(levelNode);
  }

  // Add Semester node info
  if (courseDetails.semester) {
    addBreadcrumbSeparator(nav);
    const semNode = document.createElement("span");
    semNode.className = "breadcrumb-item";
    semNode.textContent = courseDetails.semester;
    nav.appendChild(semNode);
  }

  // Add Course Node or subfolders
  addBreadcrumbSeparator(nav);
  const courseRootConfig = AppState.config.courses[AppState.currentCourseCode];
  
  if (currentFolderId === courseRootConfig.folderId) {
    const activeNode = document.createElement("span");
    activeNode.className = "breadcrumb-item active";
    activeNode.textContent = courseDetails.course.name;
    nav.appendChild(activeNode);
  } else {
    // We are inside a subfolder, add course root as link
    const courseRootLink = document.createElement("a");
    courseRootLink.className = "breadcrumb-item";
    courseRootLink.href = `#`;
    courseRootLink.textContent = courseDetails.course.name;
    courseRootLink.addEventListener("click", (e) => {
      e.preventDefault();
      AppState.explorerFolderPath = [];
      fetchFolderItems(courseRootConfig.folderId, courseDetails.course.name);
    });
    nav.appendChild(courseRootLink);

    // Build subfolder crumbs trace using explorerFolderPath
    AppState.explorerFolderPath.forEach((historyNode, idx) => {
      addBreadcrumbSeparator(nav);
      
      if (idx === AppState.explorerFolderPath.length - 1) {
        const activeNode = document.createElement("span");
        activeNode.className = "breadcrumb-item active";
        activeNode.textContent = historyNode.name;
        nav.appendChild(activeNode);
      } else {
        const crumbLink = document.createElement("a");
        crumbLink.className = "breadcrumb-item";
        crumbLink.href = `#`;
        crumbLink.textContent = historyNode.name;
        crumbLink.addEventListener("click", (e) => {
          e.preventDefault();
          // Trim history to clicked node
          AppState.explorerFolderPath = AppState.explorerFolderPath.slice(0, idx + 1);
          fetchFolderItems(historyNode.id, historyNode.name);
        });
        nav.appendChild(crumbLink);
      }
    });
  }
}

function addBreadcrumbSeparator(parent) {
  const sep = document.createElement("span");
  sep.className = "breadcrumb-separator";
  sep.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  parent.appendChild(sep);
}

// --------------------------------------------------
// Folder filter checks & empty dir hide logic (التحقق من المجلدات وحجب الفارغ)
// --------------------------------------------------
function checkHomeworksTabVisibility(items) {
  const homeworkTab = document.getElementById("homeworkFilterTab");
  
  // Identify if a "حلول الواجبات والأسئلة" folder exists
  const hwFolder = items.find(item => item.name.trim() === "حلول الواجبات والأسئلة" && item.mimeType === "application/vnd.google-apps.folder");
  
  if (!hwFolder) {
    // Hide homework tab if not present
    homeworkTab.style.display = "none";
    return;
  }

  // Check folder details in mock list or perform check
  const isDemoMode = AppState.config.demoMode || !AppState.config.googleDriveApiKey || AppState.config.googleDriveApiKey.includes("YourMockApiKey");
  
  if (isDemoMode) {
    const folderFiles = MOCK_DRIVE_DATA[hwFolder.id] || [];
    if (folderFiles.length > 0) {
      homeworkTab.style.display = "inline-flex";
    } else {
      homeworkTab.style.display = "none";
    }
  } else {
    // If real API mode, fetch its children count dynamically to hide/show
    const apiKey = AppState.config.googleDriveApiKey;
    const checkUrl = `https://www.googleapis.com/drive/v3/files?q='${hwFolder.id}'+in+parents+and+trashed=false&fields=files(id)&pageSize=1&key=${apiKey}`;
    
    fetch(checkUrl)
      .then(res => res.json())
      .then(data => {
        if (data.files && data.files.length > 0) {
          homeworkTab.style.display = "inline-flex";
        } else {
          homeworkTab.style.display = "none";
        }
      })
      .catch(() => {
        // Fallback hide
        homeworkTab.style.display = "none";
      });
  }
}

// Apply quick category tabs & search box filters
function applyFiltersAndSearch() {
  let filtered = [...AppState.availableCourseFiles];
  
  // 1. Hide/remove folders from tab listing if a specific category is active (to show direct files)
  const isBrowsingRoot = AppState.explorerFolderPath.length === 0;
  
  if (AppState.activeCategory !== "all") {
    // Map category tabs to targets
    if (AppState.activeCategory === "chapters") {
      // Find "الشباتر والملخصات" folder contents
      const targetFolder = AppState.availableCourseFiles.find(item => item.name.trim() === "الشباتر والملخصات");
      if (targetFolder) {
        getFolderContentsSync(targetFolder.id);
        return;
      } else {
        filtered = filtered.filter(item => item.name.includes("شابتر") || item.name.includes("ملخص"));
      }
    } 
    else if (AppState.activeCategory === "exams") {
      const targetFolder = AppState.availableCourseFiles.find(item => item.name.trim() === "نماذج اختبارات");
      if (targetFolder) {
        getFolderContentsSync(targetFolder.id);
        return;
      } else {
        filtered = filtered.filter(item => item.name.includes("امتحان") || item.name.includes("نموذج") || item.name.includes("اختبار"));
      }
    } 
    else if (AppState.activeCategory === "homeworks") {
      const targetFolder = AppState.availableCourseFiles.find(item => item.name.trim() === "حلول الواجبات والأسئلة");
      if (targetFolder) {
        getFolderContentsSync(targetFolder.id);
        return;
      } else {
        filtered = filtered.filter(item => item.name.includes("واجب") || item.name.includes("حل"));
      }
    } 
    else if (AppState.activeCategory === "book") {
      // Books are root files with size > 15MB or containing "كتاب"
      filtered = filtered.filter(item => item.mimeType !== "application/vnd.google-apps.folder" && (item.name.includes("كتاب") || item.name.includes("مرجع") || (item.size && item.size > 15 * 1024 * 1024)));
    }
  }

  // 2. Apply Text search
  if (AppState.searchQuery) {
    filtered = filtered.filter(item => item.name.toLowerCase().includes(AppState.searchQuery));
  }

  renderExplorerItems(filtered);
}

// Redirect folder contents loading silently when tab filters are selected
function getFolderContentsSync(subFolderId) {
  const isDemo = AppState.config.demoMode || !AppState.config.googleDriveApiKey || AppState.config.googleDriveApiKey.includes("YourMockApiKey");
  
  if (isDemo) {
    let subItems = MOCK_DRIVE_DATA[subFolderId] || [];
    if (AppState.searchQuery) {
      subItems = subItems.filter(item => item.name.toLowerCase().includes(AppState.searchQuery));
    }
    renderExplorerItems(subItems);
  } else {
    const apiKey = AppState.config.googleDriveApiKey;
    const url = `https://www.googleapis.com/drive/v3/files?q='${subFolderId}'+in+parents+and+trashed=false&fields=files(id,name,mimeType,size,modifiedTime)&orderBy=name&key=${apiKey}`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let subItems = data.files || [];
        if (AppState.searchQuery) {
          subItems = subItems.filter(item => item.name.toLowerCase().includes(AppState.searchQuery));
        }
        renderExplorerItems(subItems);
      })
      .catch(() => {
        renderExplorerItems([]);
      });
  }
}

// --------------------------------------------------
// Explorer rendering utilities (بناء عناصر مستعرض التخزين السحابي)
// --------------------------------------------------
function renderExplorerItems(items) {
  const listContainer = document.getElementById("explorerItemsList");
  listContainer.innerHTML = "";

  // Dynamic Homework filter tab checker (only check at root course folder)
  if (AppState.explorerFolderPath.length === 0 && AppState.activeCategory === "all") {
    checkHomeworksTabVisibility(items);
  }

  // Filter out empty "حلول الواجبات والأسئلة" folder dynamically from root list layout
  let renderList = [...items];
  if (AppState.explorerFolderPath.length === 0) {
    const hwFolder = renderList.find(item => item.name.trim() === "حلول الواجبات والأسئلة" && item.mimeType === "application/vnd.google-apps.folder");
    
    if (hwFolder) {
      const isDemo = AppState.config.demoMode || !AppState.config.googleDriveApiKey || AppState.config.googleDriveApiKey.includes("YourMockApiKey");
      
      if (isDemo) {
        const folderFiles = MOCK_DRIVE_DATA[hwFolder.id] || [];
        if (folderFiles.length === 0) {
          renderList = renderList.filter(item => item.id !== hwFolder.id);
        }
      } else {
        // If the homework filter tab check hid it, hide it here too
        const homeworkTab = document.getElementById("homeworkFilterTab");
        if (homeworkTab.style.display === "none") {
          renderList = renderList.filter(item => item.id !== hwFolder.id);
        }
      }
    }
  }

  if (renderList.length === 0) {
    showEmptyState();
    return;
  }

  // Sort: folders first, then files
  renderList.sort((a, b) => {
    const isFolderA = a.mimeType === "application/vnd.google-apps.folder";
    const isFolderB = b.mimeType === "application/vnd.google-apps.folder";
    if (isFolderA && !isFolderB) return -1;
    if (!isFolderA && isFolderB) return 1;
    return a.name.localeCompare(b.name, "ar");
  });

  renderList.forEach(item => {
    const isFolder = item.mimeType === "application/vnd.google-apps.folder";
    const fileMeta = getFileMetadata(item.name, item.mimeType);
    
    const row = document.createElement("div");
    row.className = "explorer-row-item";
    
    if (isFolder) {
      row.className += " clickable-folder";
      row.addEventListener("click", () => {
        AppState.explorerFolderPath.push({ id: item.id, name: item.name });
        fetchFolderItems(item.id, item.name);
      });
    }

    // Name column details
    const nameCol = document.createElement("div");
    nameCol.className = "col-name";
    nameCol.innerHTML = `
      <div class="file-icon-box ${fileMeta.iconClass}">
        <i class="${fileMeta.icon}"></i>
      </div>
      <span class="item-name-text" title="${item.name}">${item.name}</span>
    `;

    // Size column details
    const sizeCol = document.createElement("div");
    sizeCol.className = "col-size";
    sizeCol.textContent = isFolder ? "---" : formatBytes(item.size);

    // Type column details
    const typeCol = document.createElement("div");
    typeCol.className = "col-type";
    typeCol.textContent = fileMeta.typeName;

    // Actions column details
    const actionsCol = document.createElement("div");
    actionsCol.className = "col-actions";
    
    if (isFolder) {
      actionsCol.innerHTML = `
        <button class="action-circle-btn" title="فتح المجلد">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      `;
    } else {
      // File download and preview options
      const isDemo = AppState.config.demoMode || !AppState.config.googleDriveApiKey || AppState.config.googleDriveApiKey.includes("YourMockApiKey");
      
      const downloadUrl = isDemo 
        ? "#" 
        : `https://docs.google.com/uc?export=download&id=${item.id}`;
      
      const previewBtn = document.createElement("button");
      previewBtn.className = "action-circle-btn";
      previewBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
      previewBtn.title = "معاينة الملف";
      previewBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openPreviewModal(item.id, item.name, downloadUrl);
      });

      const downloadLink = document.createElement("a");
      downloadLink.className = "action-circle-btn";
      downloadLink.href = downloadUrl;
      downloadLink.title = "تحميل الملف";
      if (!isDemo) downloadLink.setAttribute("download", item.name);
      downloadLink.innerHTML = '<i class="fa-solid fa-download"></i>';
      
      if (isDemo) {
        downloadLink.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          alert(`محاكاة تحميل الملف: ${item.name}\n(لتفعيل الروابط الحقيقية، قم بربط حساب جوجل درايف الخاص بك)`);
        });
      } else {
        downloadLink.addEventListener("click", (e) => {
          e.stopPropagation(); // Avoid bubbling trigger row
        });
      }

      actionsCol.appendChild(previewBtn);
      actionsCol.appendChild(downloadLink);
    }

    row.appendChild(nameCol);
    row.appendChild(sizeCol);
    row.appendChild(typeCol);
    row.appendChild(actionsCol);
    listContainer.appendChild(row);
  });
}

// --------------------------------------------------
// Utility metadata builders (فرز الأيقونات وتعديل القياسات)
// --------------------------------------------------
function getFileMetadata(name, mimeType) {
  if (mimeType === "application/vnd.google-apps.folder") {
    return { icon: "fa-solid fa-folder", iconClass: "icon-folder", typeName: "مجلد ملفات" };
  }
  
  const ext = name.split(".").pop().toLowerCase();
  
  if (ext === "pdf" || mimeType === "application/pdf") {
    return { icon: "fa-solid fa-file-pdf", iconClass: "icon-pdf", typeName: "مستند PDF" };
  }
  if (["doc", "docx"].includes(ext) || mimeType.includes("word") || mimeType.includes("msword")) {
    return { icon: "fa-solid fa-file-word", iconClass: "icon-word", typeName: "مستند وورد" };
  }
  if (["ppt", "pptx"].includes(ext) || mimeType.includes("presentation") || mimeType.includes("powerpoint")) {
    return { icon: "fa-solid fa-file-powerpoint", iconClass: "icon-pptx", typeName: "عرض تقديمي" };
  }
  
  // Default files
  return { icon: "fa-solid fa-file-lines", iconClass: "icon-other", typeName: "ملف دراسة" };
}

function formatBytes(bytes) {
  if (bytes === undefined || bytes === null || bytes === 0) return "---";
  const k = 1024;
  const dm = 1;
  const sizes = ["بايت", "ك.ب", "م.ب", "ج.ب"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// --------------------------------------------------
// Loader & State Renders (عرض شاشات التحميل والأخطاء)
// --------------------------------------------------
function showLoadingInExplorer() {
  const listContainer = document.getElementById("explorerItemsList");
  listContainer.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>جاري جلب الملفات من مجلد Google Drive...</p>
    </div>
  `;
}

function showEmptyState() {
  const listContainer = document.getElementById("explorerItemsList");
  listContainer.innerHTML = `
    <div class="empty-state">
      <i class="fa-solid fa-folder-open state-icon-huge"></i>
      <h4 class="state-title">المجلد فارغ</h4>
      <p class="state-subtitle">لا توجد ملفات متوفرة في هذا القسم حالياً.</p>
    </div>
  `;
}

function renderErrorState(title, subtitle) {
  const listContainer = document.getElementById("explorerItemsList");
  listContainer.innerHTML = `
    <div class="error-state">
      <i class="fa-solid fa-circle-exclamation state-icon-huge"></i>
      <h4 class="state-title">${title}</h4>
      <p class="state-subtitle">${subtitle}</p>
      <button class="retry-action-btn" onclick="retryFetchCurrentFolder()">إعادة المحاولة <i class="fa-solid fa-rotate-right"></i></button>
    </div>
  `;
}

function retryFetchCurrentFolder() {
  const courseDetails = getCourseDetails(AppState.currentCourseCode);
  fetchFolderItems(AppState.currentFolderId, courseDetails.course.name);
}

// --------------------------------------------------
// Live Inline Preview Modal controls (المعاين الذكي المنبثق)
// --------------------------------------------------
function openPreviewModal(fileId, fileName, downloadUrl) {
  const modal = document.getElementById("previewModal");
  const modalTitle = document.getElementById("modalFileName");
  const modalDownloadBtn = document.getElementById("modalDownloadBtn");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = fileName;
  modalDownloadBtn.href = downloadUrl;
  
  if (AppState.config.demoMode || !AppState.config.googleDriveApiKey || AppState.config.googleDriveApiKey.includes("YourMockApiKey")) {
    // Demo Modal display: simulated pdf view
    modalDownloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`محاكاة تحميل الملف: ${fileName}\n(لتفعيل الروابط الحقيقية، قم بربط حساب جوجل درايف الخاص بك)`);
    });
    
    modalBody.innerHTML = `
      <div class="iframe-placeholder" style="background-color: #1a1a24; color: #fff;">
        <i class="fa-solid fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 12px;"></i>
        <h4 style="font-size: 1.2rem; font-weight: 700;">معاينة تجريبية للمستند</h4>
        <p style="font-size: 0.9rem; opacity: 0.8; max-width: 500px; text-align: center; margin: 0 16px;">
          لقد قمت بفتح معاينة الملف: <strong style="color: var(--accent-primary);">${fileName}</strong>.
          <br>
          في الوضع الحقيقي، سيتم فتح محتويات الملف مباشرة من Google Drive لقراءته فوراً دون مغادرة الموقع.
        </p>
      </div>
    `;
  } else {
    // Real API Model: embed direct drive preview iframe
    const drivePreviewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    modalBody.innerHTML = `
      <iframe src="${drivePreviewUrl}" class="modal-iframe" allow="autoplay" loading="lazy"></iframe>
    `;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable body scroll
}

function closeModal() {
  const modal = document.getElementById("previewModal");
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Enable body scroll
  // Unload iframe
  document.getElementById("modalBody").innerHTML = "";
}
