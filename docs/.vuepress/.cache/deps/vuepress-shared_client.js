import {
  isDef,
  isLinkHttp,
  keys
} from "./chunk-2BP4UTGR.js";
import "./chunk-GXWGLIGS.js";
import {
  computed,
  getCurrentInstance,
  h,
  onMounted,
  ref
} from "./chunk-AU3CLKKL.js";
import {
  __publicField
} from "./chunk-V6TY7KAL.js";

// node_modules/vuepress-shared/lib/client/index.js
var c = ({ name: e = "", color: t = "currentColor", ariaLabel: n }, { attrs: i, slots: o }) => {
  var _a;
  return h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e}-icon`], viewBox: "0 0 1024 1024", fill: t, "aria-label": n ?? `${e} icon`, ...i }, (_a = o.default) == null ? void 0 : _a.call(o));
};
c.displayName = "IconBase";
var E = ({ size: e = 48, stroke: t = 4, wrapper: n = true, height: i = 2 * e }) => {
  const o = h("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": t, "stroke-linecap": "round" }, [h("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return n ? h("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${i}px` }, o) : o;
};
E.displayName = "LoadingIcon";
var B = (e, { slots: t }) => {
  var _a;
  return (_a = t.default) == null ? void 0 : _a.call(t);
};
var y = () => h(c, { name: "enter-fullscreen" }, () => h("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
y.displayName = "EnterFullScreenIcon";
var I = () => h(c, { name: "cancel-fullscreen" }, () => h("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
I.displayName = "CancelFullScreenIcon";
var G = (e) => isLinkHttp(e) ? e : `https://github.com/${e}`;
var k = (e = "") => !isLinkHttp(e) || /github\.com/.test(e) ? "GitHub" : /bitbucket\.org/.test(e) ? "Bitbucket" : /gitlab\.com/.test(e) ? "GitLab" : /gitee\.com/.test(e) ? "Gitee" : null;
var m = () => h(c, { name: "github" }, () => h("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
m.displayName = "GitHubIcon";
var M = () => h(c, { name: "gitlab" }, () => h("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
M.displayName = "GitLabIcon";
var d = () => h(c, { name: "gitee" }, () => h("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
d.displayName = "GiteeIcon";
var h2 = () => h(c, { name: "bitbucket" }, () => h("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
h2.displayName = "BitbucketIcon";
var p = () => h(c, { name: "source" }, () => h("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
p.displayName = "SourceIcon";
var P = ({ link: e, type: t = k(e ?? "") }) => {
  if (!t) return null;
  const n = t.toLowerCase();
  return h(n === "bitbucket" ? h2 : n === "github" ? m : n === "gitlab" ? "GitLab" : n === "gitee" ? d : p);
};
function R() {
  const e = ref(false), t = getCurrentInstance();
  return t && onMounted(() => {
    e.value = true;
  }, t), e;
}
function j(e) {
  return R(), computed(() => !!e());
}
var z = () => j(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator);
var D = () => {
  const e = z();
  return computed(() => e.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
};
var F = (e) => /\b(?:Android|iPhone)/i.test(e);
var O = (e) => / wv\).+(chrome)\/([\w.]+)/i.test(e);
var W = (e) => /version\/([\w.]+) .*mobile\/\w+ (safari)/i.test(e);
var U = (e) => /version\/([\w.]+) .*(mobile ?safari|safari)/i.test(e);
var _ = (e) => /\((ip(?:hone|od)[\w ]*);/i.test(e);
var Y = (e) => [/\((ipad);[-\w),; ]+apple/i, /applecoremedia\/[\w.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some((t) => t.test(e));
var q = (e) => [/microsoft (windows) (vista|xp)/i, /(win(?=3|9|n)|win 9x )([nt\d.]+)/i, /(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[/ ]?([\d.\w ]*)/i, /(windows)[/ ]?([ntce\d. ]+\w)(?!.+xbox)/i].some((t) => t.test(e));
var J = (e) => [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i].some((t) => t.test(e));
var K = (e) => [/(mac os x) ?([\w. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i].some((t) => t.test(e));
var L = (e, t = 0) => {
  let n = 3735928559 ^ t, i = 1103547991 ^ t;
  for (let o = 0, a; o < e.length; o++) a = e.charCodeAt(o), n = Math.imul(n ^ a, 2654435761), i = Math.imul(i ^ a, 1597334677);
  return n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(i ^ i >>> 13, 3266489909), i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(n ^ n >>> 13, 3266489909), 4294967296 * (2097151 & i) + (n >>> 0);
};
var Q = (e, t) => L(e) % t;
var X = class {
  constructor() {
    __publicField(this, "containerElement");
    __publicField(this, "messageElements", {});
    const t = "message-container", n = document.getElementById(t);
    n ? this.containerElement = n : (this.containerElement = document.createElement("div"), this.containerElement.id = t, document.body.appendChild(this.containerElement));
  }
  pop(t, n = 2e3) {
    const i = document.createElement("div"), o = Date.now();
    return i.className = "message move-in", i.innerHTML = t, this.containerElement.appendChild(i), this.messageElements[o] = i, n > 0 && setTimeout(() => {
      this.close(o);
    }, n), o;
  }
  close(t) {
    if (t) {
      const n = this.messageElements[t];
      n.classList.remove("move-in"), n.classList.add("move-out"), n.addEventListener("animationend", () => {
        n.remove(), delete this.messageElements[t];
      });
    } else keys(this.messageElements).forEach((n) => this.close(Number(n)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
};
var x = /#.*$/u;
var C = (e) => {
  const t = x.exec(e);
  return t ? t[0] : "";
};
var u = (e) => decodeURI(e).replace(x, "").replace(/\/index\.html$/iu, "/").replace(/\/(README|index)\.md$/iu, "/").replace(/\.(?:html|md)$/iu, "");
var Z = (e, t) => {
  if (!isDef(t)) return false;
  const n = u(e.path), i = u(t), o = C(t);
  return o ? o === e.hash && (!i || n === i) : n === i;
};
var e1 = class {
  constructor() {
    __publicField(this, "containerElement");
    __publicField(this, "popupElements", {});
    const t = "popup-container", n = document.getElementById(t);
    n ? this.containerElement = n : (this.containerElement = document.createElement("div"), this.containerElement.id = t, document.body.appendChild(this.containerElement));
  }
  emit(t, n) {
    const i = document.createElement("div"), o = document.createElement("div"), a = Date.now();
    return this.containerElement.appendChild(i), this.popupElements[a] = i, i.className = "popup-wrapper appear", i.appendChild(o), i.addEventListener("click", () => this.close(a)), o.className = "popup-container", o.innerHTML = t, typeof n == "number" && setTimeout(() => {
      this.close(a);
    }, n), a;
  }
  close(t) {
    if (t) {
      const n = this.popupElements[t];
      n.classList.replace("appear", "disappear"), n.children[0].addEventListener("animationend", () => {
        n.remove(), delete this.popupElements[t];
      });
    } else keys(this.popupElements).forEach((n) => this.close(Number(n)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
};
var S = () => {
  const { availWidth: e, availHeight: t } = screen, { screenLeft: n, screenTop: i, innerWidth: o, innerHeight: a } = window, l = Math.max(e / 2, 600), b = Math.max(t / 2, 400);
  return { width: l, height: b, left: n + o / 2 - l / 2, top: i + a / 2 - b / 2 };
};
var t1 = (e, t = "_blank", n = ["resizable", "status"]) => {
  var _a, _b;
  const { width: i, height: o, left: a, top: l } = S();
  (_b = (_a = window.open(e, t, `width=${i},height=${o},left=${a},top=${l},${n.join(",")}`)) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
};
var n1 = (e) => Object.prototype.toString.call(e) === "[object Object]";
var r = (e) => typeof e == "string";
var H = Array.isArray;
var N = (e) => n1(e) && r(e.name);
var i1 = (e, t = false) => e ? H(e) ? e.map((n) => r(n) ? { name: n } : N(n) ? n : null).filter((n) => n !== null) : r(e) ? [{ name: e }] : N(e) ? [e] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t ? "" : "| false"} | undefined\`, but got`, e), []) : [];
var g = (e, t) => {
  if (e) {
    if (H(e) && e.every(r)) return e;
    if (r(e)) return [e];
    console.error(`Expect ${t} to be \`string[] | string | undefined\`, but got`, e);
  }
  return [];
};
var o1 = (e) => g(e, "category");
var s1 = (e) => g(e, "tag");
export {
  h2 as BitbucketIcon,
  I as CancelFullScreenIcon,
  y as EnterFullScreenIcon,
  m as GitHubIcon,
  M as GitLabIcon,
  d as GiteeIcon,
  c as IconBase,
  E as LoadingIcon,
  X as Message,
  e1 as Popup,
  B as RenderDefault,
  P as RepoIcon,
  p as SourceIcon,
  O as checkIsChromeWebView,
  J as checkIsIOS,
  K as checkIsMacOS,
  F as checkIsMobile,
  U as checkIsSafari,
  W as checkIsSafariMobile,
  q as checkIsWindows,
  Y as checkIsiPad,
  _ as checkIsiPhone,
  L as cyrb53,
  Q as generateIndexFromHash,
  i1 as getAuthor,
  o1 as getCategory,
  C as getHash,
  S as getSize,
  g as getStringArray,
  s1 as getTag,
  Z as isActiveLink,
  u as normalizePath,
  t1 as openPopupWindow,
  G as resolveRepoLink,
  k as resolveRepoType,
  D as useIsMobile,
  z as useSupportUserAgent
};
//# sourceMappingURL=vuepress-shared_client.js.map
