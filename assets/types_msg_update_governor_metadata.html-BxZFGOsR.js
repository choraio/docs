import{_ as e,o as a,c as t,e as s}from"./app-CiOG3kca.js";const r={},d=s(`<h1 id="msgupdategovernormetadata" tabindex="-1"><a class="header-anchor" href="#msgupdategovernormetadata"><span>MsgUpdateGovernorMetadata</span></a></h1><h2 id="valid-message" tabindex="-1"><a class="header-anchor" href="#valid-message"><span>valid message</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect no error.</p><h2 id="an-error-is-returned-if-address-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-address-is-empty"><span>an error is returned if address is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>address: empty address string is not allowed: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-address-is-not-a-bech32-address" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-address-is-not-a-bech32-address"><span>an error is returned if address is not a bech32 address</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>address: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-new-metadata-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-new-metadata-is-empty"><span>an error is returned if new metadata is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>new metadata: empty string is not allowed: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-new-metadata-exceeds-128-characters" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-new-metadata-exceeds-128-characters"><span>an error is returned if new metadata exceeds 128 characters</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> new metadata with length &quot;129&quot;</p><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>new metadata: exceeds max length 128: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),n=[d];function i(l,m){return a(),t("div",null,n)}const c=e(r,[["render",i],["__file","types_msg_update_governor_metadata.html.vue"]]),u=JSON.parse('{"path":"/specs/mods/governor/types_msg_update_governor_metadata.html","title":"MsgUpdateGovernorMetadata","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"valid message","slug":"valid-message","link":"#valid-message","children":[]},{"level":2,"title":"an error is returned if address is empty","slug":"an-error-is-returned-if-address-is-empty","link":"#an-error-is-returned-if-address-is-empty","children":[]},{"level":2,"title":"an error is returned if address is not a bech32 address","slug":"an-error-is-returned-if-address-is-not-a-bech32-address","link":"#an-error-is-returned-if-address-is-not-a-bech32-address","children":[]},{"level":2,"title":"an error is returned if new metadata is empty","slug":"an-error-is-returned-if-new-metadata-is-empty","link":"#an-error-is-returned-if-new-metadata-is-empty","children":[]},{"level":2,"title":"an error is returned if new metadata exceeds 128 characters","slug":"an-error-is-returned-if-new-metadata-exceeds-128-characters","link":"#an-error-is-returned-if-new-metadata-exceeds-128-characters","children":[]}],"git":{},"filePathRelative":"specs/mods/governor/types_msg_update_governor_metadata.md"}');export{c as comp,u as data};
