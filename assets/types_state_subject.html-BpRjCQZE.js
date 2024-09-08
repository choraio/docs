import{_ as e,o as t,c as a,e as r}from"./app-CiOG3kca.js";const s={},i=r(`<h1 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h1><h2 id="valid-subject" tabindex="-1"><a class="header-anchor" href="#valid-subject"><span>valid subject</span></a></h2><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate subject</p><p><em>Then</em> expect no error.</p><h2 id="an-error-is-returned-if-address-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-address-is-empty"><span>an error is returned if address is empty</span></a></h2><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>When</em> validate subject</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>address: empty address string is not allowed: parse error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-subject-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-subject-is-empty"><span>an error is returned if subject is empty</span></a></h2><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate subject</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>steward: empty address string is not allowed: parse error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-metadata-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-metadata-is-empty"><span>an error is returned if metadata is empty</span></a></h2><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate subject</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>metadata: empty string is not allowed: parse error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-metadata-exceeds-128-characters" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-metadata-exceeds-128-characters"><span>an error is returned if metadata exceeds 128 characters</span></a></h2><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> metadata with length &quot;129&quot;</p><p><em>When</em> validate subject</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>metadata: exceeds max length 128: parse error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),d=[i];function n(l,c){return t(),a("div",null,d)}const o=e(s,[["render",n],["__file","types_state_subject.html.vue"]]),m=JSON.parse('{"path":"/specs/mods/subject/types_state_subject.html","title":"Content","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"valid subject","slug":"valid-subject","link":"#valid-subject","children":[]},{"level":2,"title":"an error is returned if address is empty","slug":"an-error-is-returned-if-address-is-empty","link":"#an-error-is-returned-if-address-is-empty","children":[]},{"level":2,"title":"an error is returned if subject is empty","slug":"an-error-is-returned-if-subject-is-empty","link":"#an-error-is-returned-if-subject-is-empty","children":[]},{"level":2,"title":"an error is returned if metadata is empty","slug":"an-error-is-returned-if-metadata-is-empty","link":"#an-error-is-returned-if-metadata-is-empty","children":[]},{"level":2,"title":"an error is returned if metadata exceeds 128 characters","slug":"an-error-is-returned-if-metadata-exceeds-128-characters","link":"#an-error-is-returned-if-metadata-exceeds-128-characters","children":[]}],"git":{},"filePathRelative":"specs/mods/subject/types_state_subject.md"}');export{o as comp,m as data};
