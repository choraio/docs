import{_ as t,o as a,c as s,a as e}from"./app-CiOG3kca.js";const n={},r=e("p",null,"Feature: Admin",-1),d=e("p",null,'Scenario: valid admin Given admin """ { "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=" } """ When validate admin Then expect no error',-1),i=e("p",null,'Scenario: an error is returned if address is empty Given admin """ {} """ When validate admin Then expect the error """ address: empty address string is not allowed: parse error """',-1),o=[r,d,i];function _(c,m){return a(),s("div",null,o)}const p=t(n,[["render",_],["__file","types_state_admin.feature.html.vue"]]),h=JSON.parse('{"path":"/specs/mods/admin/types_state_admin.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/admin/types_state_admin.feature"}');export{p as comp,h as data};
