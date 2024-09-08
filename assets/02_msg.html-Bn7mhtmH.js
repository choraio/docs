import{_ as a,r as n,o as s,c as i,a as e,b as o,d as r,e as d}from"./app-CiOG3kca.js";const c={},p=d('<h1 id="msg-service" tabindex="-1"><a class="header-anchor" href="#msg-service"><span>Msg Service</span></a></h1><p>The <code>proposal</code> module provides a message service for interacting with the state of the module.</p><h2 id="draft-definitions" tabindex="-1"><a class="header-anchor" href="#draft-definitions"><span>Draft Definitions</span></a></h2><p><code>MsgSubmitProposal</code> - Any account can submit a proposal. A proposal will execute a message on behalf the admin or a module account depending on how the module is configured.</p><p><code>MsgSubmitProposalDeposit</code> - Any account can submit a proposal deposit. The deposit will be returned to the account after the voting period has ended (unless the result is &quot;no with veto&quot;).</p><p><code>MsgWithdrawProposal</code> - Only the account that submitted the proposal (the &quot;proposer&quot;) or the admin can withdraw a proposal. Any deposits will be returned to the accounts that made the deposits.</p><p>...</p><p><code>MsgSubmitVote</code> - Any account with voting power can vote on a proposal. Voting power is determined by the set module parameters (e.g. quantity of tokens locked in the network, accounts defined by another module - e.g. governor or validator, or an allowlist managed by the proposal module itself).</p><p><code>MsgUpdateVote</code> - The voter account can update their vote before the voting period has ended.</p><h2 id="proto-definitions" tabindex="-1"><a class="header-anchor" href="#proto-definitions"><span>Proto Definitions</span></a></h2>',10),l={href:"https://buf.build/chora/proposal",target:"_blank",rel:"noopener noreferrer"};function h(u,f){const t=n("ExternalLinkIcon");return s(),i("div",null,[p,e("p",null,[e("s",null,[o("The messages are defined in proto files available to view on "),e("a",l,[o("Buf Schema Registry"),r(t)]),o(".")])])])}const g=a(c,[["render",h],["__file","02_msg.html.vue"]]),_=JSON.parse('{"path":"/specs/mods/proposal/02_msg.html","title":"Msg Service","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Draft Definitions","slug":"draft-definitions","link":"#draft-definitions","children":[]},{"level":2,"title":"Proto Definitions","slug":"proto-definitions","link":"#proto-definitions","children":[]}],"git":{},"filePathRelative":"specs/mods/proposal/02_msg.md"}');export{g as comp,_ as data};
