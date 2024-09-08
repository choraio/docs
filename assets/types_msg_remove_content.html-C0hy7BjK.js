import{_ as e,o as a,c as r,e as t}from"./app-CiOG3kca.js";const s={},i=t(`<h1 id="msgdelete" tabindex="-1"><a class="header-anchor" href="#msgdelete"><span>MsgDelete</span></a></h1><h2 id="valid-message" tabindex="-1"><a class="header-anchor" href="#valid-message"><span>valid message</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect no error.</p><h2 id="an-error-is-returned-if-curator-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-curator-is-empty"><span>an error is returned if curator is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curator: empty address string is not allowed: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-curator-is-not-a-bech32-address" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-curator-is-not-a-bech32-address"><span>an error is returned if curator is not a bech32 address</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curator: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-hash-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-hash-is-empty"><span>an error is returned if hash is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hash: empty string is not allowed: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-hash-exceeds-128-characters" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-hash-exceeds-128-characters"><span>an error is returned if hash exceeds 128 characters</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> hash with length &quot;129&quot;</p><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hash: exceeds max length 128: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),n=[i];function d(l,c){return a(),r("div",null,n)}const u=e(s,[["render",d],["__file","types_msg_remove_content.html.vue"]]),m=JSON.parse('{"path":"/specs/mods/content/types_msg_remove_content.html","title":"MsgDelete","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"valid message","slug":"valid-message","link":"#valid-message","children":[]},{"level":2,"title":"an error is returned if curator is empty","slug":"an-error-is-returned-if-curator-is-empty","link":"#an-error-is-returned-if-curator-is-empty","children":[]},{"level":2,"title":"an error is returned if curator is not a bech32 address","slug":"an-error-is-returned-if-curator-is-not-a-bech32-address","link":"#an-error-is-returned-if-curator-is-not-a-bech32-address","children":[]},{"level":2,"title":"an error is returned if hash is empty","slug":"an-error-is-returned-if-hash-is-empty","link":"#an-error-is-returned-if-hash-is-empty","children":[]},{"level":2,"title":"an error is returned if hash exceeds 128 characters","slug":"an-error-is-returned-if-hash-exceeds-128-characters","link":"#an-error-is-returned-if-hash-exceeds-128-characters","children":[]}],"git":{},"filePathRelative":"specs/mods/content/types_msg_remove_content.md"}');export{u as comp,m as data};
