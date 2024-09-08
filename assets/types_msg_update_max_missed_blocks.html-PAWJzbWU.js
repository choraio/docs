import{_ as e,o as a,c as s,e as i}from"./app-CiOG3kca.js";const d={},n=i(`<h1 id="msgupdatepolicy" tabindex="-1"><a class="header-anchor" href="#msgupdatepolicy"><span>MsgUpdatePolicy</span></a></h1><h2 id="valid-message" tabindex="-1"><a class="header-anchor" href="#valid-message"><span>valid message</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;signedBlocksWindow&quot;: 100,
  &quot;minSignedPerWindow&quot;: 100
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect no error.</p><h2 id="valid-message-with-zero-values" tabindex="-1"><a class="header-anchor" href="#valid-message-with-zero-values"><span>valid message with zero values</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect no error.</p><h2 id="an-error-is-returned-if-admin-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-admin-is-empty"><span>an error is returned if admin is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>admin: empty address string is not allowed: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-admin-is-not-a-bech32-address" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-admin-is-not-a-bech32-address"><span>an error is returned if admin is not a bech32 address</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;admin&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>admin: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),t=[n];function r(l,m){return a(),s("div",null,t)}const c=e(d,[["render",r],["__file","types_msg_update_max_missed_blocks.html.vue"]]),u=JSON.parse('{"path":"/specs/mods/validator/types_msg_update_max_missed_blocks.html","title":"MsgUpdatePolicy","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"valid message","slug":"valid-message","link":"#valid-message","children":[]},{"level":2,"title":"valid message with zero values","slug":"valid-message-with-zero-values","link":"#valid-message-with-zero-values","children":[]},{"level":2,"title":"an error is returned if admin is empty","slug":"an-error-is-returned-if-admin-is-empty","link":"#an-error-is-returned-if-admin-is-empty","children":[]},{"level":2,"title":"an error is returned if admin is not a bech32 address","slug":"an-error-is-returned-if-admin-is-not-a-bech32-address","link":"#an-error-is-returned-if-admin-is-not-a-bech32-address","children":[]}],"git":{},"filePathRelative":"specs/mods/validator/types_msg_update_max_missed_blocks.md"}');export{c as comp,u as data};
