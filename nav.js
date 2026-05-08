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
    <summary>📐 词形变化（话题1-25）</summary>
    <div class="dropdown-menu">
        <a href="morphology-topic1.html" class="${currentPage === 'morphology-topic1.html' ? 'active' : ''}">📘 话题1</a>
        <a href="morphology-topic2.html" class="${currentPage === 'morphology-topic2.html' ? 'active' : ''}">📘 话题2</a>
        <a href="morphology-topic3.html" class="${currentPage === 'morphology-topic3.html' ? 'active' : ''}">📘 话题3</a>
        <a href="morphology-topic4.html" class="${currentPage === 'morphology-topic4.html' ? 'active' : ''}">📘 话题4</a>
        <a href="morphology-topic5.html" class="${currentPage === 'morphology-topic5.html' ? 'active' : ''}">📘 话题5</a>
        <a href="morphology-topic6.html" class="${currentPage === 'morphology-topic6.html' ? 'active' : ''}">📘 话题6</a>
        <a href="morphology-topic7.html" class="${currentPage === 'morphology-topic7.html' ? 'active' : ''}">📘 话题7</a>
        <a href="morphology-topic8.html" class="${currentPage === 'morphology-topic8.html' ? 'active' : ''}">📘 话题8</a>
        <a href="morphology-topic9.html" class="${currentPage === 'morphology-topic9.html' ? 'active' : ''}">📘 话题9</a>
        <a href="morphology-topic10.html" class="${currentPage === 'morphology-topic10.html' ? 'active' : ''}">📘 话题10</a>
        <a href="morphology-topic11.html" class="${currentPage === 'morphology-topic11.html' ? 'active' : ''}">📘 话题11</a>
        <a href="morphology-topic12.html" class="${currentPage === 'morphology-topic12.html' ? 'active' : ''}">📘 话题12</a>
        <a href="morphology-topic13.html" class="${currentPage === 'morphology-topic13.html' ? 'active' : ''}">📘 话题13</a>
        <a href="morphology-topic14.html" class="${currentPage === 'morphology-topic14.html' ? 'active' : ''}">📘 话题14</a>
        <a href="morphology-topic15.html" class="${currentPage === 'morphology-topic15.html' ? 'active' : ''}">📘 话题15</a>
        <a href="morphology-topic16-17.html" class="${currentPage === 'morphology-topic16-17.html' ? 'active' : ''}">📘 话题16-17</a>
        <a href="morphology-topic18.html" class="${currentPage === 'morphology-topic18.html' ? 'active' : ''}">📘 话题18</a>
        <a href="morphology-topic19.html" class="${currentPage === 'morphology-topic19.html' ? 'active' : ''}">📘 话题19</a>
        <a href="morphology-topic20.html" class="${currentPage === 'morphology-topic20.html' ? 'active' : ''}">📘 话题20</a>
        <a href="morphology-topic21.html" class="${currentPage === 'morphology-topic21.html' ? 'active' : ''}">📘 话题21</a>
        <a href="morphology-topic22-23.html" class="${currentPage === 'morphology-topic22-23.html' ? 'active' : ''}">📘 话题22-23</a>
        <a href="morphology-topic24.html" class="${currentPage === 'morphology-topic24.html' ? 'active' : ''}">📘 话题24</a>
        <a href="morphology-topic25.html" class="${currentPage === 'morphology-topic25.html' ? 'active' : ''}">📘 话题25</a>
    </div>
</details>

             <!-- 新增短语专题下拉菜单 -->
            <details class="dropdown">
                <summary>📝 短语专题</summary>
                <div class="dropdown-menu">
                    <a href="phrases-topic1.html" class="${currentPage === 'phrases-topic1-3.html' ? 'active' : ''}">🔤 话题1短语</a>
                    <a href="phrases-topic2.html" class="${currentPage === 'phrases-topic4-6.html' ? 'active' : ''}">🔤 话题2短语</a>
                    <a href="phrases-topic3.html" class="${currentPage === 'phrases-topic7-9.html' ? 'active' : ''}">🔤 话题3短语</a>
                    <a href="phrases-verb.html" class="${currentPage === 'phrases-verb.html' ? 'active' : ''}">🔤 动词短语</a>
                    <a href="phrases-prep.html" class="${currentPage === 'phrases-prep.html' ? 'active' : ''}">📍 介词短语</a>
                    <a href="phrases-noun.html" class="${currentPage === 'phrases-noun.html' ? 'active' : ''}">📦 名词短语</a>
                    <a href="phrases-adj.html" class="${currentPage === 'phrases-adj.html' ? 'active' : ''}">🎨 形容词短语</a>
            </div>
        </details>
        
                     <!-- 新增句子专题下拉菜单 -->
            <details class="dropdown">
                <summary>📝 句子专题</summary>
                <div class="dropdown-menu">
                    <a href="sentences-topic1.html" class="${currentPage === 'phrases-topic1-3.html' ? 'active' : ''}">🔤 话题1句子</a>
                    <a href="sentences-topic2.html" class="${currentPage === 'phrases-topic4-6.html' ? 'active' : ''}">🔤 话题2句子</a>
                    <a href="sentences-topic3.html" class="${currentPage === 'phrases-topic7-9.html' ? 'active' : ''}">🔤 话题3句子</a>                   
            </div>
        </details>
        </nav>
    `;

    navContainer.innerHTML = navHTML;
});
