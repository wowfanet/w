function TalentCalc(){function t(){var t=_t[xt];if(t.k>Y)for(var e=V-1;e>=0;--e)for(var a=t[e].t.length-1;a>=0;--a)for(var l=t[e].t[a].k,s=0;s<l;++s)if(v(t[e].t[a]),t.k<=Y)return}function e(t,e){P(-1,zt?0:X),l(t,e)}function l(t,e){Z==gt&&$WH.Tooltip.showAtCursor(e,LANG[zt?"tc_rembon":"tc_addbon"],null,null,"q")}function s(t,e){q(prompt($WH.sprintf(LANG.prompt_ratinglevel,mt,Nt),Gt)),n(t,e),y()}function n(t,e){$WH.Tooltip.showAtCursor(e,LANG.tooltip_changelevel,null,null,"q")}function r(t,e,a){var l,s,n=$WH.ce("div");switch(n.className="talentcalc-arrow",t){case 0:e=15,l=h(1,2),l.className="talentcalc-arrow-down",s=l.firstChild.childNodes[0].childNodes[0].style,s.width="15px",s.height="4px",s=l.firstChild.childNodes[1].childNodes[0].style,s.backgroundPosition="bottom",s.height=a-4+"px";break;case 1:l=h(2,2,!0),l.className="talentcalc-arrow-leftdown",s=l.firstChild.childNodes[0].childNodes[0].style,s.backgroundPosition="left",s.width=e-4+"px",s.height="11px",s=l.firstChild.childNodes[0].childNodes[1].style,s.backgroundPosition="right",s.width="4px",s=l.firstChild.childNodes[1].childNodes[0].style,s.backgroundPosition="bottom left",s.backgroundRepeat="no-repeat",s.height=a-11+"px";break;case 2:l=h(2,2,!0),l.className="talentcalc-arrow-rightdown",s=l.firstChild.childNodes[0].childNodes[0].style,s.backgroundPosition="left",s.width="4px",s=l.firstChild.childNodes[0].childNodes[1].style,s.backgroundPosition="right",s.width=e-4+"px",s.height="11px",s=l.firstChild.childNodes[1].childNodes[0].style,s.backgroundPosition="bottom right",s.backgroundRepeat="no-repeat",s.height=a-11+"px";break;case 3:a=15,l=h(2,1),l.className="talentcalc-arrow-right",s=l.firstChild.childNodes[0].childNodes[0].style,s.backgroundPosition="left",s.width="4px",s=l.firstChild.childNodes[0].childNodes[1].style,s.backgroundPosition="right",s.width=e-4+"px";break;case 4:a=15,l=h(2,1),l.className="talentcalc-arrow-left",s=l.firstChild.childNodes[0].childNodes[0].style,s.backgroundPosition="left",s.width=e-4+"px",s=l.firstChild.childNodes[0].childNodes[1].style,s.backgroundPosition="right",s.width="4px"}return n.style.width=e+"px",n.style.height=a+"px",$WH.ae(n,l),n}function c(){var t,e,a;Wt=$WH.ce("div"),Wt.className="talentcalc-lower",Wt.style.display="none";for(var l=0;l<V;++l)t=Bt[l]=$WH.ce("div"),t.className="talentcalc-lower-tree"+(l+1),e=$WH.ce("p"),$WH.ae(e,$WH.ce("b")),$WH.ae(e,$WH.ce("span")),a=$WH.ce("a"),a.href="javascript:;",a.onclick=wt.reset.bind(null,l),g_addTooltip(a,LANG.tc_resettree),$WH.ae(e,a),$WH.ae(t,e),$WH.ae(Wt,t);$WH.ae(ct,Wt)}function o(){vt=$WH.ce("div"),vt.className="talentcalc-main";var t=$WH.ce("div");t.className="clear",$WH.ae(vt,t),$WH.ae(ct,vt)}function d(){if(Z==gt){$t=$WH.ce("div"),$t.className="talentcalc-model",$t.style.display="none",_swfModel=$WH.ce("div"),_swfModel.id="shg09yrhlnk",$WH.ae($t,_swfModel);var t=$WH.ce("div");t.className="clear",$WH.ae($t,t),$WH.ae(ct,$t)}}function f(t){for(var e,a,l=[{}],s=0,n=g_pet_talents.length;s<n;++s){var i=g_pet_talents[s];if($WH.in_array(i.f,t)>=0){l[0].n=i.n,l[0].t=[],l[0].i=s,l[0].icon=i.icon;for(var r=0,c=i.t.length;r<c;++r)e=i.t[r],a=l[0].t[r]={},$WH.cO(a,e),e.f&&-1==$WH.in_array(e.f,t)&&(a.hidden=!0);break}}return l}function u(){var t,e,a;at=$WH.ce("div"),at.className="talentcalc-sidebar",t=$WH.ce("div"),t.className="talentcalc-sidebar-inner",e=$WH.ce("a"),e.className="talentcalc-button-help",e.href=Z==gt?"http://www.wow-petopia.com/talents/talents.html":"?help=talent-calculator",e.target="_blank",$WH.ae(e,$WH.ct(LANG.tc_help)),$WH.ae(t,e),lt=$WH.ce("div"),lt.className="talentcalc-sidebar-controls",lt.style.display="none",e=$WH.ce("a"),e.className="talentcalc-button-reset",e.href="javascript:;",e.onclick=wt.resetAll,$WH.ae(e,$WH.ct(LANG.tc_resetall)),$WH.ae(lt,e),e=st=$WH.ce("a"),e.className="talentcalc-button-lock",e.href="javascript:;",e.onclick=O,$WH.ae(e,$WH.ct(LANG.tc_lock)),$WH.ae(lt,e),e=$WH.ce("div"),e.className="clear",$WH.ae(lt,e),$WH.ae(t,lt),e=$WH.ce("div"),e.className="talentcalc-sidebar-controls2",a=$WH.ce("a"),a.className="talentcalc-button-import",a.href="javascript:;",a.onclick=R.profiler?wt.promptWhBuild:wt.promptBlizzBuild,$WH.ae(a,$WH.ct(LANG.tc_import)),$WH.ae(e,a),a=nt=$WH.ce("a"),a.className="talentcalc-button-summary",a.style.display="none",a.href="javascript:;",a.onclick=wt.showSummary.bind(null,1),$WH.ae(a,$WH.ct(LANG.tc_summary)),$WH.ae(e,a),a=rt=$WH.ce("a"),a.className="talentcalc-button-restore",a.style.display="none",a.href="javascript:;",a.onclick=G,$WH.ae(a,$WH.ct(LANG.tc_restore)),$WH.ae(e,a),a=it=$WH.ce("a"),a.className="talentcalc-button-export",a.style.display="none",a.href="javascript:;",a.target="_blank",$WH.ae(a,$WH.ct(LANG.tc_link)),$WH.ae(e,a),a=$WH.ce("div"),a.className="clear",$WH.ae(e,a),$WH.ae(t,e),e=$WH.ce("div"),$WH.ae(t,e),$WH.ae(at,t),e=$WH.ce("div"),e.className="talentcalc-sidebar-anchor",$WH.ae(e,at),$WH.ae(et,e)}function h(t,e,a){for(var l,s,n=$WH.ce("table"),i=$WH.ce("tbody"),r=0;r<e;++r){l=$WH.ce("tr");for(var c=0;c<t;++c){if(a&&r>0){s=$WH.ce("th"),s.colSpan=2,$WH.ae(l,s);break}var o=$WH.ce("td");o.className="talentcalc-main-cell",$WH.ae(l,o)}$WH.ae(i,l)}return $WH.ae(n,i),n}function p(t){var e=_t[t];e.k=0,e.div=$WH.ce("div"),e.div.style.display="none",$WH.aef(vt,e.div);for(var a=0;a<V;++a){e[a].k=0;var l=$WH.ce("div"),s=$WH.ce("div");l.style.backgroundRepeat="no-repeat",l.style.cssFloat=l.style.styleFloat="left",a>0&&(l.style.borderLeft="1px solid #404040"),s.style.overflow="hidden",s.style.width=Z==Ht?"204px":"244px",$WH.ae(s,h(4,J)),$WH.ae(l,s),$WH.ae(e.div,l);var n,i=$WH.gE(l,"td"),c="?"+yt;Z==gt?(l.style.backgroundImage="url("+g_staticDataUrl+"/images/wow/hunterpettalents/bg_"+(e[0].i+1)+".jpg"+c+")",n=g_staticDataUrl+"/images/wow/hunterpettalents/icons_"+(e[0].i+1)+".jpg"+c):(l.style.backgroundImage="url("+g_staticDataUrl+"/images/wow/talents/backgrounds/"+g_file_classes[t]+"_"+(a+1)+".jpg"+c+")",l.style.backgroundSize="240px 360px");for(var o=e[a].t.length-1;o>=0;--o){var d=e[a].t[o],n=g_staticDataUrl+"/images/wow/icons/talent/"+d.iconname.toLowerCase()+".jpg"+c;icon=Icon.create(n,1,null,"javascript:;"),link=Icon.getLink(icon),targetTd=i[4*d.y+d.x+1-1],Lt[e[a].t[o].i]=d,link.rel="np",link.target="_blank",link.onmousedown=$WH.rf,link.onclick=$WH.rf,g_onClick(link,m.bind(link,d)),link.onmouseover=D.bind(null,link,d),link.onmouseout=$WH.Tooltip.hide;var f=$WH.ce("div"),u=$WH.ce("div");if($WH.ae(u,$WH.ct("0")),f.className="icon-border",u.className="icon-bubble",$WH.ae(icon,f),$WH.ae(icon,u),d.k=0,d.i=o,d.tree=a,d.classId=t,d.icon=icon,d.link=link,d.border=f,d.bubble=u,d.hidden||$WH.ae(targetTd,icon),d.r){var p,b,W,v,$=e[a].t[d.r[0]],k=d.x-$.x,H=d.y-$.y,g=-1;if(null==$.links?$.links=[o]:$.links.push(o),H>0?g=0==k?0:k<0?1:2:0==H&&(k>0?g=3:k<0&&(g=4)),Z==gt?(W=60*(Math.abs(k)-1),v=60*(Math.abs(H)-1)):(W=50*(Math.abs(k)-1),v=50*(Math.abs(H)-1)),Z==gt)switch(g){case 0:v+=27,p=21,b=6-v}else switch(g){case 0:v+=17,p=16,b=6-v;break;case 1:W+=36,v+=42,p=16,b=6-v;break;case 2:W+=37,v+=42,p=-6,b=6-v;break;case 3:W+=15,p=-6,b=12;break;case 4:W+=15,p=37,b=12}var N=r(g,W,v);N.style.left=p+"px",N.style.top=b+"px";var y=$WH.ce("div");y.className="talentcalc-arrow-anchor",$WH.ae(y,N),d.hidden||targetTd.insertBefore(y,targetTd.firstChild),d.arrow=N}}}}function b(){var t,i;ot=$WH.ce("div"),ot.className="talentcalc-upper",ot.style.display="none",t=$WH.ce("span"),t.className="talentcalc-upper-class",dt=a=$WH.ce("a"),a.target="_blank",a.style.fontWeight="bold",$WH.ae(t,a),$WH.ae(t,$WH.ct(" ")),ft=$WH.ce("b"),$WH.ae(t,ft),$WH.ae(ot,t),t=$WH.ce("span"),t.className="talentcalc-upper-ptsleft",$WH.ae(t,$WH.ct(LANG.tc_ptsleft)),pt=$WH.ce("b"),$WH.ae(t,pt),$WH.ae(ot,t),Z==gt&&(i=bt=$WH.ce("a"),i.href="javascript:;",i.onclick=e.bind(null,i),i.onmouseover=l.bind(null,i),i.onmousemove=$WH.Tooltip.cursorUpdate,i.onmouseout=$WH.Tooltip.hide,$WH.ae(t,i)),t=$WH.ce("span"),t.className="talentcalc-upper-reqlevel",$WH.ae(t,$WH.ct(LANG.tc_reqlevel)),ut=$WH.ce("b"),$WH.ae(t,ut),i=ht=$WH.ce("a"),i.className="q1",i.href="javascript:;",i.onclick=s.bind(null,i),i.onmouseover=n.bind(null,i),i.onmousemove=$WH.Tooltip.cursorUpdate,i.onmouseout=$WH.Tooltip.hide,R.profiler||($WH.ae(t,$WH.ct(" (")),$WH.ae(t,i),$WH.ae(t,$WH.ct(")"))),$WH.ae(ot,t),t=$WH.ce("div"),t.className="clear",$WH.ae(ot,t),$WH.ae(ct,ot)}function W(t){for(var e="",a=[],l=0;l<t.length;l+=2){for(var s=0;s<2;++s)a[s]=parseInt(t.substring(l+s,l+s+1)),isNaN(a[s])&&(a[s]=0);e+=Tt.charAt(6*a[0]+a[1])}return e}function v(t,e,a){var l=_t[t.classId];if(t.k>0){if(t.links)for(n=0;n<t.links.length;++n)if(l[t.tree].t[t.links[n]].k)return;t.k--;for(var s=0,n=0;n<l[t.tree].t.length;++n){var i=l[t.tree].t[n];if(i.k&&t.y!=i.y&&s<i.y*K)return void t.k++;s+=i.k}if(l[t.tree].k--,n=l.k--,U(t.tree,e,null,t.classId),e){if(D(a,t),n>=Y)for(var r=0;r<V;++r)U(r,!0,null,t.classId);y()}}}function $(t){var e=$.L;if(null==e){e=$.L={};for(var a in k.L)e[k.L[a]]=a}return e[t]}function k(t){return k.L[t]}function H(){var t=_t[xt];return Z==gt?Math.max(zt?60:0,t.k>0?4*(t.k-zt)+16:0):t.k?t.k+9:0}function g(t,e){var a=(t.d,Math.max(0,t.k-1)+(e?1:0));return t.d[a]}function m(t,e){Ct||(e?v(t,!0,this):N(t,!0,this))}function N(t,e,a){var l=_t[t.classId];if(l.k<Y){if(t.enabled&&t.k<t.m&&(l.k++,l[t.tree].k++,t.k++,U(t.tree,e,t,t.classId),e)){if(D(a,t),l.k==Y)for(var s=0;s<V;++s)s!=t.tree&&U(s,e,null,t.classId);y()}}else Z!=gt||l.k!=Y||e||(P(-1,X,!0),N(t,e,a))}function y(){var t=_t[xt];if(t){Pt.mode=Z,Pt.classId=xt,Pt.locked=Ct,Pt.requiredLevel=H(),Pt.pointsLeft=Y-t.k,Pt.pointsSpent=Z==gt?t[0].k:[t[0].k,t[1].k,t[2].k],Pt.bonusPoints=zt,$WH.st(ft,"("+(Z==gt?t.k:Pt.pointsSpent.join("/"))+")"),$WH.st(ut,Pt.requiredLevel?Pt.requiredLevel:"-"),$WH.st(ht,Gt),$WH.st(pt,Pt.pointsLeft),Ct?($WH.st(st,LANG.tc_unlock),st.className="talentcalc-button-unlock"):($WH.st(st,LANG.tc_lock),st.className="talentcalc-button-lock"),Z==gt&&(zt?($WH.st(bt,"[-]"),bt.className="q10"):($WH.st(bt,"[+]"),bt.className="q2")),it&&(it.href=(Z==gt?"?petcalc#":"?talent#")+wt.getWhBuild());for(var e=0;e<V;++e){var a=Bt[e].firstChild.childNodes[1];$WH.st(a," ("+t[e].k+")")}kt&&kt(wt,Pt,t)}}function w(){$WH.st(dt,tt[xt]),Z==gt?(dt.href="?pet="+xt,E(xt),$t.style.display=""):(dt.href="?class="+xt,dt.className="c"+xt),0==It&&(lt.style.display="",nt.style.display="",it&&(it.style.display=""),ot.style.display="",Wt.style.display="");for(var e=_t[xt],a=0;a<V;++a){var l=Bt[a].firstChild.childNodes[0];Z==Ht&&(l.style.backgroundImage="url("+g_staticDataUrl+"/images/wow/talents/trees/"+g_file_classes[xt]+"_"+(a+1)+".gif)"),$WH.st(l,e[a].n)}t(),x(xt),y(),++It}function _(t,e){var a=_t[e],l=0,s=0,n=[];8==e&&62==t.length&&(t=t.substr(0,15)+t.substr(16));for(var i=0;i<t.length;++i){var r=Math.min(parseInt(t.charAt(i)),a[l].t[s].m);if(!isNaN(r)){for(var c=0;c<r;++c)N(a[l].t[s]);for(var o=0;o<n.length;++o)if(n[o][0].enabled&&n[o][1]>0){for(var c=0;c<n[o][1];++c)N(n[o][0]);n[o][1]=0}if(a[l].t[s].k<r&&n.push([a[l].t[s],r-a[l].t[s].k]),++s>a[l].t.length-1&&(s=0,++l>V-1))break}}}function L(t,e){for(var a=_t[e],l=0,s=0,n=[],i=[],r=0;r<t.length;++r){var c=t.charAt(r);if(c!=Mt){var o=Tt.indexOf(c);if(o<0)continue;n[1]=o%6,n[0]=(o-n[1])/6;for(var d=0;d<2;++d){o=Math.min(n[d],a[l].t[s].m);for(var f=0;f<o;++f)N(a[l].t[s]);for(var u=0;u<i.length;++u)if(i[u][0].enabled&&i[u][1]>0){for(var f=0;f<i[u][1];++f)N(i[u][0]);i[u][1]=0}if(a[l].t[s].k<o&&i.push([a[l].t[s],o-a[l].t[s].k]),++s>=a[l].t.length)break}}if((s>=a[l].t.length||c==Mt)&&(s=0,++l>V-1))return}}function x(t){for(var e=0;e<V;++e)U(e,!0,null,t)}function A(t,e){if(null==_t[t]){e.n=t,_t[t]=e;var a=_t[t];if(p(t),S&&S.classId==t){for(var l=0;l<V;++l)U(l,!1,null,t);(S.wh||S.blizz)&&(Ct=!0,S.wh?L(S.wh,t):_(S.blizz,t))}else Ct=!1;if(S=null,t==xt){w(),a.div.style.display="";for(var l=0;l<V;++l)U(l,!0,null,t)}}}function I(t){C(t),x(t)}function C(t){Z==gt&&P(-1,0,!0);for(var e=0;e<V;++e)z(e,t,!1)}function z(t,e,a){var l,s=_t[e];for(l=0;l<s[t].t.length;++l)s[t].t[l].k=0;if(l=s.k<Y,s.k-=s[t].k,s[t].k=0,a){if(l)U(t,!0,null,e);else for(t=0;t<V;++t)U(t,!0,null,e);y()}}function G(){F&&(F.wh?j(F.wh):B(F.classId,F.blizz))}function B(t,e){null!=tt[t]&&e&&(Ct=!0,F||(F={classId:t,blizz:e},rt.style.display=""),_t[t]?(C(t),x(t),_(e,t),x(t)):S={classId:t,blizz:e},T(t)||y())}function T(t){if(null!=tt[t]&&t!=xt){if(At=xt,xt=t,Z==gt&&null==_t[t])A(t,f(t));else if(_t[t]){w();var e=_t[t];e.div.style.display=""}else $WH.g_ajaxIshRequest("?data=talents&class="+t+"&locale="+Locale.getId()+"&"+yt);return _t[At]&&(_t[At].div.style.display="none"),!0}}function q(t){if(t=parseInt(t),!(isNaN(t)||t<mt||t>Nt)){Gt=t;var e;e=Z==gt?Math.max(0,Math.floor((t-16)/4)):Math.max(0,t-9),P(e,-1)}}function M(t){Ct!=t&&(Ct=t,x(xt),y(1))}function P(e,a,l){var s=Y;-1==e&&(e=Q),-1==a&&(a=zt),Q=e,zt=a,Y=e+a,-1!=xt&&(Y<s&&t(),x(xt),l||y())}function j(t){if(t){var e,a=t,l=!1;if(Z==gt){var s=Tt.indexOf(t.charAt(0));if(s>=0&&s<=4){var n=Tt.indexOf(t.charAt(1));n%2==1?(P(-1,X,!0),--n):P(-1,0,!0),e=10*s+n/2,null!=g_pet_families[e]&&(t=t.substr(2),l=!0)}}else{var s=Tt.indexOf(t.charAt(0));if(s>=0&&s<=27){var n=s%3,e=(s-n)/3;e=$(e),null!=e&&(t=t.substr(1),l=!0)}}return l?(t.length&&(Ct=!0,F||(F={wh:a},rt.style.display="")),_t[e]?(C(e),L(t,e),x(e)):S={classId:e,wh:t},T(e)||y(),e):void 0}}function D(t,e){var a=_t[e.classId],l="<table><tr><td><b>";e.z&&(l+='<span style="float: right" class="q0">'+e.z+"</span>"),l+=e.n+"</b><br />"+$WH.sprintf(LANG.tc_rank,e.k,e.m)+"<br />",e.r&&a[e.tree].t[e.r[0]].k<e.r[1]&&(l+='<span class="q10">',l+=$WH.sprintf(LANG[1==e.r[1]?"tc_prereq":"tc_prereqpl"],e.r[1],a[e.tree].t[e.r[0]].n),l+="</span><br />"),a[e.tree].k<e.y*K&&(l+='<span class="q10">'+$WH.sprintf(LANG.tc_tier,e.y*K,a[e.tree].n)+"</span><br />"),e.t&&e.t.length>=1&&(l+=e.t[0]),l+="</td></tr></table><table><tr><td>",e.t&&e.t.length>1&&(l+=e.t[1]+"<br />"),l+='<span class="q">'+g(e)+"</span><br />",Ct||e.enabled&&(e.k?e.k==e.m&&(l+='<span class="q10">'+LANG.tc_unlearn+"</span><br />"):l+='<span class="q2">'+LANG.tc_learn+"</span><br />",e.k&&e.k<e.m&&(l+="<br />"+LANG.tc_nextrank+'<br /><span class="q">'+g(e,1)+"</span><br />")),l+="</td></tr></table>",$WH.Tooltip.show(t,$WH.g_setTooltipLevel(l,H()))}function O(){return Ct=!Ct,x(xt),y(),Ct}function U(t,e,a,l){var s,n=_t[l];if(a&&n.k!=Y?(s=a.i,Math.floor(n[t].k/K)*K+5):(s=0,Y-21),null!=a&&null!=a.links)for(var i=0,r=a.links.length;i<r;++i)s>a.links[i]&&(s=a.links[i]);for(var i=s;i<n[t].t.length;++i)if(a=n[t].t[i],(n.k!=Y||a.k)&&n[t].k>=a.y*K?a.r?n[t].t[a.r[0]].k>=a.r[1]?a.enabled=1:a.enabled=0:a.enabled=1:a.enabled=0,e){if(!a.enabled||Ct&&!a.k){if(a.border.style.backgroundPosition="0 0",iconBg=g_staticDataUrl+"/images/wow/icons/talent/"+a.iconname.toLowerCase()+"_grey.jpg",Icon.setTexture(a.icon,1,iconBg),a.link.className="",a.bubble.style.visibility="hidden",a.r){var c=a.arrow.firstChild;"2"==c.className.charAt(c.className.length-1)&&(c.className=c.className.substr(0,c.className.length-1))}}else if(a.k==a.m?(a.border.style.backgroundPosition="-42px 0",a.bubble.style.color="#E7BA00"):(a.border.style.backgroundPosition="-84px 0",a.bubble.style.color="#17FD17"),iconBg=g_staticDataUrl+"/images/wow/icons/talent/"+a.iconname.toLowerCase()+".jpg",Icon.setTexture(a.icon,1,iconBg),a.link.className="bubbly",a.bubble.style.visibility="visible",a.r){var c=a.arrow.firstChild;"2"!=c.className.charAt(c.className.length-1)&&(c.className+="2")}a.bubble.firstChild.nodeValue=a.k,a.link.href="?spell="+a.s[Math.max(0,a.k-1)]}}function E(t,e){var a=g_staticDataUrl;if(Z==gt){var l=_t[t];if(l){if(g_pets[e]&&g_pets[e].family==t&&(l.npcId=e),!g_pets[l.npcId]||g_pets[l.npcId].family!=t){var s=[];for(var n in g_pets)g_pets[n].family==t&&s.push(g_pets[n].id);if(!s.length)return;l.npcId=s[Math.floor(Math.random()*s.length)]}var i={model:g_pets[l.npcId].displayId,modelType:8,contentPath:a+"/modelviewer/",blur:$WH.OS.mac?"0":"1"},r={quality:"high",allowscriptaccess:"always",allowfullscreen:!0,menu:!1,bgcolor:"#181818",wmode:"direct"},c={};swfobject.embedSWF(a+"/modelviewer/ZAMviewerfp11.swf",_swfModel.id,"100%","100%","10.0.0",a+"/modelviewer/expressInstall.swf",i,r,c)}}}var R,S,F,Z,V,J,K,Q,X,Y,tt,et,at,lt,st,nt,it,rt,ct,ot,dt,ft,ut,ht,pt,bt,Wt,vt,$t,kt,Ht=0,gt=1,mt=10,Nt=60,yt=85,wt=this,_t={},Lt={},xt=-1,At=-1,It=0,Ct=!1,zt=0,Gt=Nt,Bt=[],Tt="0zMcmVokRsaqbdrfwihuGINALpTjnyxtgevElBCDFHJKOPQSUWXYZ123456789",qt="aZbYcXdWeVfUgThSiRjQkPlOmNnMoLpKqJrIsHtGuFvEwDxCyBzA0123456789_=+-.",Mt="Z",Pt={};this.getTalentTrees=function(){return _t[xt]},this.getBlizzBuild=function(){if(-1!=xt){for(var t=_t[xt],e="",a=0;a<V;++a)for(var l=0;l<t[a].t.length;++l)e+=t[a].t[l].k;return e=$WH.rtrim(e,"0")}},this.getSpentFromBlizzBuild=function(t,e){for(var a=_t[e],l=[],s=0;s<V;++s)l.push(0);if(a){var n=0,i=0;8==e&&62==t.length&&(t=t.substr(0,15)+t.substr(16));for(var s=0;s<t.length;++s){var r=Math.min(parseInt(t.charAt(s)),a[n].t[i].m);if(!isNaN(r)){for(var c=0;c<r;++c)++l[n];if(++i>a[n].t.length-1&&(i=0,++n>V-1))break}}}return l},this.getTalents=function(){var t=[];if(-1!=xt){var e=_t[xt];if(e)for(var a=0;a<V;++a)for(i=0;i<e[a].t.length;++i)e[a].t[i].k&&t.push(e[a].t[i])}return t},this.getTalentRanks=function(t){if(-1!=xt)return Lt[t]?Lt[t].k:0},this.getWhBuild=function(){if(-1!=xt){for(var t,e,a=_t[xt],l="",s=0;s<V;++s){for(t="",e=0;e<a[s].t.length;++e)t+=a[s].t[e].k;t=$WH.rtrim(t,"0"),l+=W(t),e=t.length,e%2==1&&++e,e<a[s].t.length&&(l+=Mt)}var n;return n=Z==gt?Tt.charAt(Math.floor(xt/10))+Tt.charAt(xt%10*2+(zt?1:0)):Tt.charAt(3*k(xt)),n+=$WH.rtrim(l,Mt)}},this.initialize=function(t,e){et||(t=$WH.ge(t))&&(et=t,et.className="talentcalc",null==e&&(e={}),R=e,R.onChange&&(kt=R.onChange),R.mode==gt?(Z=gt,V=1,J=6,K=3,Q=16,X=4,tt=g_pet_families,et.className+=" talentcalc-pet"):(Z=Ht,V=3,J=7,K=5,Q=51,X=0,tt=g_chr_classes,et.className+=" talentcalc-default",$WowheadTalentCalculator=wt),Y=Q+zt,ct=$WH.ce("div"),ct.className="talentcalc-wrapper",$WH.ae(et,ct),u(),b(),o(),d(),c(),R.whBuild?j(R.whBuild):R.classId>0&&tt[R.classId]&&(R.blizzBuild?B(R.classId,R.blizzBuild):T(R.classId)))},this.promptBlizzBuild=function(){if(Z!=gt){var t,e=prompt(LANG.prompt_importblizz,"");if(e){if(e.match(/talent-calculator#([\w=+-.])c[0-9]{2}(![\w=+-.]*![\w=+-.]*![\w=+-.]*!?[\w=+-.]*)/))return t=qt.indexOf(RegExp.$1),void B(t,RegExp.$2);if(e.match(/\?cid=([0-9]+)&tal=([0-9]+)/))return t=parseInt(RegExp.$1),void B(t,RegExp.$2);var a=e.indexOf("?tal=");if(-1!=a){for(var l in g_file_classes)if(-1!=e.indexOf(g_file_classes[l])){t=parseInt(l);break}if(t)return void B(t,e.substring(a+5))}alert(LANG.alert_invalidurl)}}},this.promptWhBuild=function(){var t=prompt(LANG.prompt_importwh,"");if(t){var e=t.indexOf("=");if(-1!=e){j(t.substr(e).substr(1).split(":")[0]||"")}}},this.registerClass=function(t,e){A(t,e)},this.reset=function(t){-1!=xt&&(t>V-1||(Ct=!1,z(t,xt,!0)))},this.resetAll=function(){_t[xt]&&(Ct=!1,I(xt),y())},this.resetBuild=function(){_t[xt]&&(Ct=!1,C(xt),x(xt),y())},this.restore=function(){G()},this.setBlizzBuild=function(t,e){B(t,e)},this.setBonusPoints=function(){Z==gt&&P(-1,X)},this.getBonusPoints=function(t){return zt},this.setClass=function(t){return T(t)},this.setLevelCap=function(t){q(t)},this.setLock=function(t){-1!=xt&&M(t)},this.setWhBuild=function(t){return j(t)},this.setPetModel=function(t){E(xt,t)},this.showSummary=function(t){if(-1!=xt){var e,a,l,s=_t[xt],n=window.open("?talent=summary","","toolbar=no,menubar=yes,status=yes,scrollbars=yes,resizable=yes"),i="<html><head><title>"+document.title+'</title></head><body style="font-family: Arial, sans-serif; font-size: 13px">';if(n.document.open(),t)for(i+="<h2>",i+=Z==gt?$WH.sprintf(LANG.tc_printh,H(),g_pet_families[s.n]):$WH.sprintf(LANG.tc_printh,H(),g_chr_classes[s.n])+" ("+s[0].k+"/"+s[1].k+"/"+s[2].k+")",i+="</h2>",i+="<p></p>",void 0!==$WowheadTalentCalculator&&(i+="<h3>"+LANG.tc_export+LANG.colon+"</h3>",i+="<blockquote style=\"font-family: 'Courier New';\">?cid="+xt+"&tal="+$WowheadTalentCalculator.getBlizzBuild()+"</blockquote>",i+="<p></p>"),e=0;e<V;++e){for(i+="<h3>"+s[e].n+" ("+s[e].k+" "+LANG[1==s[e].k?"tc_point":"tc_points"]+")</h3>",i+="<blockquote>",l=0,a=0;a<s[e].t.length;++a)s[e].t[a].k&&(l&&(i+="<br /><br />"),i+="<b>"+s[e].t[a].n+"</b>"+LANG.hyphen+$WH.sprintf(LANG.tc_rank,s[e].t[a].k,s[e].t[a].m)+"<br />",i+=g(s[e].t[a]),++l);0==l&&(i+=LANG.tc_none),i+="</blockquote>"}else{for(i+="<pre>",e=0;e<V;++e){for(i+="<b>"+s[e].n+" ("+s[e].k+" "+LANG[1==s[e].k?"tc_point":"tc_points"]+")</b>\n\n",l=0,a=0;a<s[e].t.length;++a)s[e].t[a].k&&(i+="&nbsp;&nbsp;&nbsp;&nbsp;"+s[e].t[a].k+"/"+s[e].t[a].m+" "+s[e].t[a].n+"\n",++l);0==l&&(i+="&nbsp;&nbsp;&nbsp;&nbsp;"+LANG.tc_none+"\n"),i+="\n"}i+="</pre>"}i+="</body></html>",n.document.write(i),n.document.close()}},this.toggleLock=function(){-1!=xt&&O()},k.L={6:9,11:0,3:1,8:2,2:3,5:4,4:5,7:6,9:7,1:8}}var $WowheadTalentCalculator;TalentCalc.MODE_DEFAULT=0,TalentCalc.MODE_PET=1;