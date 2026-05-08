// nav.js - 自动生成导航栏及动态页面标题
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('nav-placeholder');
    if (!navContainer) return;

    // 1. 获取当前页面的文件名
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 2. 定义页面标题映射表 (在此处添加或修改页面对应的标题)
    const pageTitles = {
        'index.html': '🏠 首页 - 🧬不规则动词',
        'nonfinite-verbs.html': '🧩 非谓语动词搭配专题',
        'verbs1-40.html': '⚡ 动词列表 1-40',
        'verbs41-80.html': '⚡ 动词列表 41-80',
        'verbs81-130.html': '⚡ 动词列表 81-130',
        'verbs131-181.html': '⚡ 动词列表 131-181',
        'verbs181-231.html': '⚡ 动词列表 181-231',
        'verbs232-282.html': '⚡ 动词列表 232-282',
        'verbs282-332.html': '⚡ 动词列表 282-332',
        'verbs333-383.html': '⚡ 动词列表 333-383',
        'verbs383-416.html': '⚡ 动词列表 383-416',
        'morphology-topic1.html': '✒️ 词形变化 - 话题 1',
        'morphology-topic2.html': '✒️ 词形变化 - 话题 2',
        'morphology-topic3.html': '✒️ 词形变化 - 话题 3',
        'morphology-topic4.html': '✒️ 词形变化 - 话题 4',
        'morphology-topic5.html': '✒️ 词形变化 - 话题 5',
        'morphology-topic6.html': '✒️ 词形变化 - 话题 6',
        'morphology-topic7.html': '✒️ 词形变化 - 话题 7',
        'morphology-topic8.html': '✒️ 词形变化 - 话题 8',
        'morphology-topic9.html': '✒️ 词形变化 - 话题 9',
        'morphology-topic10.html': '✒️ 词形变化 - 话题 10',
        'morphology-topic11.html': '✒️ 词形变化 - 话题 11',
        'morphology-topic12.html': '✒️ 词形变化 - 话题 12',
        'morphology-topic13.html': '✒️ 词形变化 - 话题 13',
        'morphology-topic14.html': '✒️ 词形变化 - 话题 14',
        'morphology-topic15.html': '✒️ 词形变化 - 话题 15',
        'morphology-topic16-17.html': '✒️ 词形变化 - 话题 16-17',
        'morphology-topic18.html': '✒️ 词形变化 - 话题 18',
        'morphology-topic19.html': '✒️ 词形变化 - 话题 19',
        'morphology-topic20.html': '✒️ 词形变化 - 话题 20',
        'morphology-topic21.html': '✒️ 词形变化 - 话题 21',
        'morphology-topic22-23.html': '✒️ 词形变化 - 话题 22-23',
        'morphology-topic24.html': '✒️ 词形变化 - 话题 24',
        'morphology-topic25.html': '✒️ 词形变化 - 话题 25',
        'wordsandphrases-topic1.html': '🏷️ 单词和短语 - 话题 1',
        'wordsandphrases-topic2.html': '🏷️ 单词和短语 - 话题 2',
        'wordsandphrases-topic3.html': '🏷️ 单词和短语 - 话题 3',
        'wordsandphrases-topic4.html': '🏷️ 单词和短语 - 话题 4',
        'wordsandphrases-topic5.html': '🏷️ 单词和短语 - 话题 5',
        'wordsandphrases-topic6.html': '🏷️ 单词和短语 - 话题 6',
        'phrases-verb.html': '🔤 动词短语专题',
        'phrases-prep.html': '📍 介词短语专题',
        'phrases-noun.html': '📦 名词短语专题',
        'phrases-adj.html': '🎨 形容词短语专题',
        'sentences-topic1.html': '📝 话题 1 句子',
        'sentences-topic2.html': '📝 话题 2 句子',
        'sentences-topic3.html': '📝 话题 3 句子'
    };

    // 获取当前页面对应的标题，如果没有匹配到，则默认为空字符串
    const currentTitle = pageTitles[currentPage] || "";

    // 3. 生成导航栏 HTML
    const navHTML = `
        <nav class="site-nav">
            <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">🏠 首页-不规则动词</a>
            <a href="nonfinite-verbs.html" class="${currentPage === 'nonfinite-verbs.html' ? 'active' : ''}">🧩 非谓语动词搭配</a>
            
            <details class="dropdown" ${currentPage.startsWith('verbs') ? 'open' : ''}>
                <summary>📚 动词列表（1-416） </summary>
                <div class="dropdown-menu">
                    <a href="verbs1-40.html" class="${currentPage === 'verbs1-40.html' ? 'active' : ''}">⚡ 动词 1-40</a>
                    <a href="verbs41-80.html" class="${currentPage === 'verbs41-80.html' ? 'active' : ''}">⚡ 动词 41-80</a>
                    <a href="verbs81-130.html" class="${currentPage === 'verbs81-130.html' ? 'active' : ''}">⚡ 动词 81-130</a>
                    <a href="verbs131-181.html" class="${currentPage === 'verbs131-181.html' ? 'active' : ''}">⚡ 动词 131-181</a>
                    <a href="verbs181-231.html" class="${currentPage === 'verbs181-231.html' ? 'active' : ''}">⚡ 动词 181-231</a>
                    <a href="verbs232-282.html" class="${currentPage === 'verbs232-282.html' ? 'active' : ''}">⚡ 动词 232-282</a>
                    <a href="verbs282-332.html" class="${currentPage === 'verbs282-332.html' ? 'active' : ''}">⚡ 动词 282-332</a>
                    <a href="verbs333-383.html" class="${currentPage === 'verbs333-383.html' ? 'active' : ''}">⚡ 动词 333-383</a>
                    <a href="verbs383-416.html" class="${currentPage === 'verbs383-416.html' ? 'active' : ''}">⚡ 动词 383-416</a>
                </div>
            </details>

            <details class="dropdown" ${currentPage.startsWith('morphology') ? 'open' : ''}>
                <summary>📐 词形变化（话题1-25）</summary>
                <div class="dropdown-menu">
                    <a href="morphology-topic1.html" class="${currentPage === 'morphology-topic1.html' ? 'active' : ''}">✒️ 话题1</a>
                    <a href="morphology-topic2.html" class="${currentPage === 'morphology-topic2.html' ? 'active' : ''}">✒️ 话题2</a>
                    <a href="morphology-topic3.html" class="${currentPage === 'morphology-topic3.html' ? 'active' : ''}">✒️ 话题3</a>
                    <a href="morphology-topic4.html" class="${currentPage === 'morphology-topic4.html' ? 'active' : ''}">✒️ 话题4</a>
                    <a href="morphology-topic5.html" class="${currentPage === 'morphology-topic5.html' ? 'active' : ''}">✒️ 话题5</a>
                    <a href="morphology-topic6.html" class="${currentPage === 'morphology-topic6.html' ? 'active' : ''}">✒️ 话题6</a>
                    <a href="morphology-topic7.html" class="${currentPage === 'morphology-topic7.html' ? 'active' : ''}">✒️ 话题7</a>
                    <a href="morphology-topic8.html" class="${currentPage === 'morphology-topic8.html' ? 'active' : ''}">✒️ 话题8</a>
                    <a href="morphology-topic9.html" class="${currentPage === 'morphology-topic9.html' ? 'active' : ''}">✒️ 话题9</a>
                    <a href="morphology-topic10.html" class="${currentPage === 'morphology-topic10.html' ? 'active' : ''}">✒️ 话题10</a>
                    <a href="morphology-topic11.html" class="${currentPage === 'morphology-topic11.html' ? 'active' : ''}">✒️ 话题11</a>
                    <a href="morphology-topic12.html" class="${currentPage === 'morphology-topic12.html' ? 'active' : ''}">✒️ 话题12</a>
                    <a href="morphology-topic13.html" class="${currentPage === 'morphology-topic13.html' ? 'active' : ''}">✒️ 话题13</a>
                    <a href="morphology-topic14.html" class="${currentPage === 'morphology-topic14.html' ? 'active' : ''}">✒️ 话题14</a>
                    <a href="morphology-topic15.html" class="${currentPage === 'morphology-topic15.html' ? 'active' : ''}">✒️ 话题15</a>
                    <a href="morphology-topic16-17.html" class="${currentPage === 'morphology-topic16-17.html' ? 'active' : ''}">✒️ 话题16-17</a>
                    <a href="morphology-topic18.html" class="${currentPage === 'morphology-topic18.html' ? 'active' : ''}">✒️ 话题18</a>
                    <a href="morphology-topic19.html" class="${currentPage === 'morphology-topic19.html' ? 'active' : ''}">✒️ 话题19</a>
                    <a href="morphology-topic20.html" class="${currentPage === 'morphology-topic20.html' ? 'active' : ''}">✒️ 话题20</a>
                    <a href="morphology-topic21.html" class="${currentPage === 'morphology-topic21.html' ? 'active' : ''}">✒️ 话题21</a>
                    <a href="morphology-topic22-23.html" class="${currentPage === 'morphology-topic22-23.html' ? 'active' : ''}">✒️ 话题22-23</a>
                    <a href="morphology-topic24.html" class="${currentPage === 'morphology-topic24.html' ? 'active' : ''}">✒️ 话题24</a>
                    <a href="morphology-topic25.html" class="${currentPage === 'morphology-topic25.html' ? 'active' : ''}">✒️ 话题25</a>
                </div>
            </details>

            <details class="dropdown" ${currentPage.startsWith('phrases') ? 'open' : ''}>
                <summary>📝 单词和短语专题</summary>
                <div class="dropdown-menu">
                    <a href="wordsandphrases-topic1.html" class="${currentPage === 'wordsandphrases-topic1.html' ? 'active' : ''}">🏷️ 话题 1</a>
                    <a href="wordsandphrases-topic2.html" class="${currentPage === 'wordsandphrases-topic2.html' ? 'active' : ''}">🏷️ 话题 2</a>
                    <a href="wordsandphrases-topic3.html" class="${currentPage === 'wordsandphrases-topic3.html' ? 'active' : ''}">🏷️ 话题 3</a>
                    <a href="wordsandphrases-topic4.html" class="${currentPage === 'wordsandphrases-topic4.html' ? 'active' : ''}">🏷️ 话题 4</a>
                    <a href="wordsandphrases-topic5.html" class="${currentPage === 'wordsandphrases-topic5.html' ? 'active' : ''}">🏷️ 话题 5</a>
                    <a href="wordsandphrases-topic6.html" class="${currentPage === 'wordsandphrases-topic6.html' ? 'active' : ''}">🏷️ 话题 6</a>
                    <a href="wordsandphrases-topic7.html" class="${currentPage === 'wordsandphrases-topic1.html' ? 'active' : ''}">🏷️ 话题 7</a>
                    <a href="wordsandphrases-topic8.html" class="${currentPage === 'wordsandphrases-topic2.html' ? 'active' : ''}">🏷️ 话题 8</a>
                    <a href="wordsandphrases-topic9.html" class="${currentPage === 'wordsandphrases-topic3.html' ? 'active' : ''}">🏷️ 话题 9</a>
                    <a href="wordsandphrases-topic10.html" class="${currentPage === 'wordsandphrases-topic4.html' ? 'active' : ''}">🏷️ 话题 10</a>
                    <a href="wordsandphrases-topic11.html" class="${currentPage === 'wordsandphrases-topic5.html' ? 'active' : ''}">🏷️ 话题 11</a>
                    <a href="wordsandphrases-topic12.html" class="${currentPage === 'wordsandphrases-topic6.html' ? 'active' : ''}">🏷️ 话题 12</a>
                    <a href="wordsandphrases-topic13.html" class="${currentPage === 'wordsandphrases-topic1.html' ? 'active' : ''}">🏷️ 话题 13</a>
                    <a href="wordsandphrases-topic14.html" class="${currentPage === 'wordsandphrases-topic2.html' ? 'active' : ''}">🏷️ 话题 14</a>
                    <a href="wordsandphrases-topic15.html" class="${currentPage === 'wordsandphrases-topic3.html' ? 'active' : ''}">🏷️ 话题 15</a>
                    <a href="wordsandphrases-topic16.html" class="${currentPage === 'wordsandphrases-topic4.html' ? 'active' : ''}">🏷️ 话题 16</a>
                    <a href="wordsandphrases-topic17.html" class="${currentPage === 'wordsandphrases-topic5.html' ? 'active' : ''}">🏷️ 话题 17</a>
                    <a href="wordsandphrases-topic18.html" class="${currentPage === 'wordsandphrases-topic6.html' ? 'active' : ''}">🏷️ 话题 18</a>
                    <a href="wordsandphrases-topic19.html" class="${currentPage === 'wordsandphrases-topic1.html' ? 'active' : ''}">🏷️ 话题 19</a>
                    <a href="wordsandphrases-topic20.html" class="${currentPage === 'wordsandphrases-topic2.html' ? 'active' : ''}">🏷️ 话题 20</a>
                    <a href="wordsandphrases-topic21.html" class="${currentPage === 'wordsandphrases-topic3.html' ? 'active' : ''}">🏷️ 话题 21</a>
                    <a href="wordsandphrases-topic22.html" class="${currentPage === 'wordsandphrases-topic4.html' ? 'active' : ''}">🏷️ 话题 22</a>
                    <a href="wordsandphrases-topic23.html" class="${currentPage === 'wordsandphrases-topic5.html' ? 'active' : ''}">🏷️ 话题 23</a>
                    <a href="wordsandphrases-topic24.html" class="${currentPage === 'wordsandphrases-topic6.html' ? 'active' : ''}">🏷️ 话题 24</a>
                    <a href="wordsandphrases-topic25.html" class="${currentPage === 'wordsandphrases-topic1.html' ? 'active' : ''}">🏷️ 话题 25</a>
                    <a href="phrases-verb.html" class="${currentPage === 'phrases-verb.html' ? 'active' : ''}">🔤 动词短语</a>
                    <a href="phrases-prep.html" class="${currentPage === 'phrases-prep.html' ? 'active' : ''}">📍 介词短语</a>
                    <a href="phrases-noun.html" class="${currentPage === 'phrases-noun.html' ? 'active' : ''}">📦 名词短语</a>
                    <a href="phrases-adj.html" class="${currentPage === 'phrases-adj.html' ? 'active' : ''}">🎨 形容词短语</a>
                </div>
            </details>

            <details class="dropdown" ${currentPage.startsWith('sentences') ? 'open' : ''}>
                <summary>📝 句子专题</summary>
                <div class="dropdown-menu">
                    <a href="sentences-topic1.html" class="${currentPage === 'sentences-topic1.html' ? 'active' : ''}">📜 话题1句子</a>
                    <a href="sentences-topic2.html" class="${currentPage === 'sentences-topic2.html' ? 'active' : ''}">📜 话题2句子</a>
                    <a href="sentences-topic3.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题3句子</a>
                    <a href="sentences-topic4.html" class="${currentPage === 'sentences-topic1.html' ? 'active' : ''}">📜 话题4句子</a>
                    <a href="sentences-topic5.html" class="${currentPage === 'sentences-topic2.html' ? 'active' : ''}">📜 话题5句子</a>
                    <a href="sentences-topic6.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题6句子</a>  
                    <a href="sentences-topic7.html" class="${currentPage === 'sentences-topic1.html' ? 'active' : ''}">📜 话题7句子</a>
                    <a href="sentences-topic8.html" class="${currentPage === 'sentences-topic2.html' ? 'active' : ''}">📜 话题8句子</a>
                    <a href="sentences-topic9.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题9句子</a>
                    <a href="sentences-topic10.html" class="${currentPage === 'sentences-topic1.html' ? 'active' : ''}">📜 话题10句子</a>
                    <a href="sentences-topic11.html" class="${currentPage === 'sentences-topic2.html' ? 'active' : ''}">📜 话题11句子</a>
                    <a href="sentences-topic12.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题12句子</a>
                    <a href="sentences-topic13.html" class="${currentPage === 'sentences-topic1.html' ? 'active' : ''}">📜 话题13句子</a>
                    <a href="sentences-topic14.html" class="${currentPage === 'sentences-topic2.html' ? 'active' : ''}">📜 话题14句子</a>
                    <a href="sentences-topic15.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题15句子</a>
                    <a href="sentences-topic16.html" class="${currentPage === 'sentences-topic1.html' ? 'active' : ''}">📜 话题16句子</a>
                    <a href="sentences-topic17.html" class="${currentPage === 'sentences-topic2.html' ? 'active' : ''}">📜 话题17句子</a>
                    <a href="sentences-topic18.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题18句子</a>
                    <a href="sentences-topic19.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题19句子</a>
                    <a href="sentences-topic20.html" class="${currentPage === 'sentences-topic1.html' ? 'active' : ''}">📜 话题20句子</a>
                    <a href="sentences-topic21.html" class="${currentPage === 'sentences-topic2.html' ? 'active' : ''}">📜 话题21句子</a>
                    <a href="sentences-topic22.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题22句子</a>
                    <a href="sentences-topic23.html" class="${currentPage === 'sentences-topic1.html' ? 'active' : ''}">📜 话题23句子</a>
                    <a href="sentences-topic24.html" class="${currentPage === 'sentences-topic2.html' ? 'active' : ''}">📜 话题24句子</a>
                    <a href="sentences-topic25.html" class="${currentPage === 'sentences-topic3.html' ? 'active' : ''}">📜 话题25句子</a> 
                </div>
            </details>
        </nav>
        
        <!-- 这里是自动生成的页面标题部分 -->
        ${currentTitle ? `<div class="page-header"><h1 class="current-page-title">${currentTitle}</h1><hr></div>` : ''}
    `;

    navContainer.innerHTML = navHTML;
});
