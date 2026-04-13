// nav.js - 自动生成导航栏
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('nav-placeholder');
    if (!navContainer) return;

    // 获取当前页面的文件名（用于高亮 active）
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 导航栏 HTML（注意链接路径要写正确）
    const navHTML = `
        <nav class="site-nav">
            <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">🏠 首页-不规则动词</a>
            <a href="nonfinite-verbs.html" class="${currentPage === 'nonfinite-verbs.html' ? 'active' : ''}">📖 非谓语动词搭配</a>
            <details class="dropdown" ${currentPage.startsWith('verbs') ? 'open' : ''}>
                <summary>📚 动词列表（1-416） </summary>
                <div class="dropdown-menu">
                    <a href="verbs1-40.html" class="${currentPage === 'verbs1-40.html' ? 'active' : ''}">📘 动词 1-40</a>
                    <a href="verbs41-80.html" class="${currentPage === 'verbs41-80.html' ? 'active' : ''}">📘 动词 41-80</a>
                    <a href="verbs81-130.html" class="${currentPage === 'verbs81-130.html' ? 'active' : ''}">📘 动词 81-130</a>
                    <a href="verbs131-181.html" class="${currentPage === 'verbs131-181.html' ? 'active' : ''}">📘 动词 131-181</a>
                    <a href="verbs181-231.html" class="${currentPage === 'verbs181-231.html' ? 'active' : ''}">📘 动词 181-231</a>
                    <a href="verbs232-282.html" class="${currentPage === 'verbs232-282.html' ? 'active' : ''}">📘 动词 232-282</a>
                    <a href="verbs282-332.html" class="${currentPage === 'verbs282-332.html' ? 'active' : ''}">📘 动词 282-332</a>
                    <a href="verbs333-383.html" class="${currentPage === 'verbs333-383.html' ? 'active' : ''}">📘 动词 333-383</a>
                    <a href="verbs383-416.html" class="${currentPage === 'verbs383-416.html' ? 'active' : ''}">📘 动词 383-416</a>
                </div>
            </details>

             <!-- 新增词形变化下拉菜单 -->
            <details class="dropdown">
                <summary>📐 词形变化</summary>
                <div class="dropdown-menu">
                    <a href="morphology-topic1-3" class="${currentPage === 'morphology-topic1-3' ? 'active' : ''}">🔤 话题1-3词形变化</a>
                    <a href="morphology-topic4-6" class="${currentPage === 'morphology-topic4-6' ? 'active' : ''}">🔤 话题4-6词形变化</a>
                    <a href="morphology-topic7-9" class="${currentPage === 'morphology-topic7-9' ? 'active' : ''}">🔤 话题7-9词形变化</a>
                    <a href="noun-plurals.html" class="${currentPage === 'noun-plurals.html' ? 'active' : ''}">🔤 名词复数</a>
                    <a href="adj-compare.html" class="${currentPage === 'adj-compare.html' ? 'active' : ''}">📊 形容词比较级</a>
                </div>
            </details>

             <!-- 新增短语专题下拉菜单 -->
            <details class="dropdown">
                <summary>📝 短语专题</summary>
                <div class="dropdown-menu">
                    <a href="phrases-topic1-3.html" class="${currentPage === 'phrases-topic1-3.html' ? 'active' : ''}">🔤 话题1-3短语</a>
                    <a href="phrases-topic4-6.html" class="${currentPage === 'phrases-topic4-6.html' ? 'active' : ''}">🔤 话题4-6短语</a>
                    <a href="phrases-topic7-9.html" class="${currentPage === 'phrases-topic7-9.html' ? 'active' : ''}">🔤 话题7-9短语</a>
                    <a href="phrases-verb.html" class="${currentPage === 'phrases-verb.html' ? 'active' : ''}">🔤 动词短语</a>
                    <a href="phrases-prep.html" class="${currentPage === 'phrases-prep.html' ? 'active' : ''}">📍 介词短语</a>
                    <a href="phrases-noun.html" class="${currentPage === 'phrases-noun.html' ? 'active' : ''}">📦 名词短语</a>
                    <a href="phrases-adj.html" class="${currentPage === 'phrases-adj.html' ? 'active' : ''}">🎨 形容词短语</a>
            </div>
        </details>
        </nav>
    `;

    navContainer.innerHTML = navHTML;
});
