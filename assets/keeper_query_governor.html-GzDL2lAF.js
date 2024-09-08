import{_ as e,o as r,c as n,e as s}from"./app-CiOG3kca.js";const t={},a=s(`<h1 id="query-governor" tabindex="-1"><a class="header-anchor" href="#query-governor"><span>Query/Governor</span></a></h1><p>Query/Governor is successful when:</p><ul><li>governor with address exists</li></ul><p>Query/Governor has the following outcomes:</p><ul><li>query response returned</li></ul><h2 id="the-governor-must-exist" tabindex="-1"><a class="header-anchor" href="#the-governor-must-exist"><span>The governor must exist</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><p><em>Given</em> governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="governor-exists" tabindex="-1"><a class="header-anchor" href="#governor-exists"><span>governor exists</span></a></h3><p><em>When</em> query governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="governor-does-not-exist" tabindex="-1"><a class="header-anchor" href="#governor-does-not-exist"><span>governor does not exist</span></a></h3><p><em>When</em> query governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>governor with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-query-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-query-response-is-returned"><span>The query response is returned</span></a></h2><h3 id="background-1" tabindex="-1"><a class="header-anchor" href="#background-1"><span>Background</span></a></h3><p><em>Given</em> governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="query-response-returned" tabindex="-1"><a class="header-anchor" href="#query-response-returned"><span>query response returned</span></a></h3><p><em>When</em> query governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),d=[a];function i(o,u){return r(),n("div",null,d)}const c=e(t,[["render",i],["__file","keeper_query_governor.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/governor/keeper_query_governor.html","title":"Query/Governor","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The governor must exist","slug":"the-governor-must-exist","link":"#the-governor-must-exist","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"governor exists","slug":"governor-exists","link":"#governor-exists","children":[]},{"level":3,"title":"governor does not exist","slug":"governor-does-not-exist","link":"#governor-does-not-exist","children":[]}]},{"level":2,"title":"The query response is returned","slug":"the-query-response-is-returned","link":"#the-query-response-is-returned","children":[{"level":3,"title":"Background","slug":"background-1","link":"#background-1","children":[]},{"level":3,"title":"query response returned","slug":"query-response-returned","link":"#query-response-returned","children":[]}]}],"git":{},"filePathRelative":"specs/mods/governor/keeper_query_governor.md"}');export{c as comp,v as data};
