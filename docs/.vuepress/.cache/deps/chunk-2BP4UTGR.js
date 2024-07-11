import {
  strFromU8,
  strToU8,
  unzlibSync,
  zlibSync
} from "./chunk-GXWGLIGS.js";
import {
  camelize,
  capitalize,
  computed,
  getCurrentInstance
} from "./chunk-AU3CLKKL.js";

// node_modules/@vuepress/helper/lib/client/composables/useLocaleConfig.js
import { useRouteLocale } from "vuepress/client";
var useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};

// node_modules/@vuepress/helper/lib/client/composables/useRoutePaths.js
import { useRoutes } from "vuepress/client";
var useRoutePaths = () => {
  const routes = useRoutes();
  return computed(() => Object.keys(routes.value));
};

// node_modules/@vuepress/helper/lib/client/utils/data.js
var encodeData = (data, level = 6) => {
  const buffer = strToU8(data);
  const zipped = zlibSync(buffer, { level });
  const binary = strFromU8(zipped, true);
  return __VUEPRESS_SSR__ ? Buffer.from(binary, "binary").toString("base64") : btoa(binary);
};
var decodeData = (base64) => {
  const binary = __VUEPRESS_SSR__ ? Buffer.from(base64, "base64").toString("binary") : atob(base64);
  return strFromU8(unzlibSync(strToU8(binary, true)));
};

// node_modules/@vuepress/helper/lib/client/utils/hasGlobalComponent.js
var hasGlobalComponent = (name, app) => {
  var _a;
  const globalComponents = (_a = (app == null ? void 0 : app._instance) || getCurrentInstance()) == null ? void 0 : _a.appContext.components;
  if (!globalComponents)
    return false;
  return name in globalComponents || camelize(name) in globalComponents || capitalize(camelize(name)) in globalComponents;
};

// node_modules/@vuepress/helper/lib/client/utils/wait.js
var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// node_modules/@vuepress/helper/lib/client/utils/getHeaders.js
var getHeaders = ({ selector = [...new Array(6)].map((_, i) => `#vp-content h${i + 1}`).join(","), levels = 2, ignore = [] } = {}) => {
  const headers = Array.from(document.querySelectorAll(selector)).filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el, ignore),
      link: "#" + el.id,
      slug: el.id,
      level
    };
  });
  return resolveHeaders(headers, levels);
};
var serializeHeader = (h, ignore = []) => {
  let text = "";
  if (ignore.length) {
    const clone = h.cloneNode(true);
    clone.querySelectorAll(ignore.join(",")).forEach((el) => el.remove());
    text = clone.textContent || "";
  } else {
    text = h.textContent || "";
  }
  return text.trim();
};
var resolveHeaders = (headers, levels = 2) => {
  if (levels === false) {
    return [];
  }
  const [high, low] = typeof levels === "number" ? [levels, levels] : levels === "deep" ? [2, 6] : levels;
  headers = headers.filter((h) => h.level >= high && h.level <= low);
  const res = [];
  outer: for (let i = 0; i < headers.length; i++) {
    const cur = headers[i];
    if (i === 0) {
      res.push(cur);
    } else {
      for (let j = i - 1; j >= 0; j--) {
        const prev = headers[j];
        if (prev.level < cur.level) {
          ;
          (prev.children ?? (prev.children = [])).push(cur);
          continue outer;
        }
      }
      res.push(cur);
    }
  }
  return res;
};

// node_modules/@vuepress/helper/lib/shared/helper.js
import { isString } from "vuepress/shared";
import { isFunction, isString as isString2, isPlainObject } from "vuepress/shared";
import { ensureEndingSlash, ensureLeadingSlash, removeEndingSlash, removeLeadingSlash } from "vuepress/shared";
var isDef = (val) => typeof val !== "undefined";
var isBoolean = (val) => typeof val === "boolean";
var isNumber = (val) => typeof val === "number";
var isArray = Array.isArray;
var isRegExp = (val) => val instanceof RegExp;
var startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
var endsWith = (str, suffix) => isString(str) && str.endsWith(suffix);
var entries = Object.entries;
var fromEntries = Object.fromEntries;
var keys = Object.keys;
var values = Object.values;

// node_modules/@vuepress/helper/lib/shared/deepAssign.js
var deepAssign = (originObject, ...overrideObjects) => {
  if (overrideObjects.length === 0)
    return originObject;
  const assignObject = overrideObjects.shift() || null;
  if (assignObject)
    entries(assignObject).forEach(([property, value]) => {
      if (property === "__proto__" || property === "constructor")
        return;
      if (isPlainObject(originObject[property]) && isPlainObject(value))
        deepAssign(originObject[property], value);
      else if (isArray(value))
        originObject[property] = [...value];
      else if (isPlainObject(value))
        originObject[property] = {
          ...value
        };
      else
        originObject[property] = assignObject[property];
    });
  return deepAssign(originObject, ...overrideObjects);
};

// node_modules/@vuepress/helper/lib/shared/date.js
var getDate = (input) => {
  if (input) {
    if (typeof input === "number")
      return new Date(input);
    const date = Date.parse(input.toString());
    if (!Number.isNaN(date))
      return new Date(date);
  }
  return null;
};
var dateSorter = (valueA, valueB) => {
  const dateA = getDate(typeof valueA === "number" ? new Date(valueA) : valueA);
  const dateB = getDate(typeof valueB === "number" ? new Date(valueB) : valueB);
  if (!dateA)
    return dateB ? 1 : 0;
  if (!dateB)
    return -1;
  return dateB.getTime() - dateA.getTime();
};

// node_modules/@vuepress/helper/lib/shared/link.js
import { isLinkExternal, isLinkHttp, isLinkWithProtocol } from "vuepress/shared";
var isLinkAbsolute = (test) => startsWith(test, "/");

export {
  useLocaleConfig,
  useRoutePaths,
  encodeData,
  decodeData,
  hasGlobalComponent,
  wait,
  getHeaders,
  resolveHeaders,
  isDef,
  isBoolean,
  isNumber,
  isArray,
  isRegExp,
  startsWith,
  endsWith,
  entries,
  fromEntries,
  keys,
  values,
  isFunction,
  isString2 as isString,
  isPlainObject,
  ensureEndingSlash,
  ensureLeadingSlash,
  removeEndingSlash,
  removeLeadingSlash,
  deepAssign,
  getDate,
  dateSorter,
  isLinkAbsolute,
  isLinkExternal,
  isLinkHttp,
  isLinkWithProtocol
};
//# sourceMappingURL=chunk-2BP4UTGR.js.map
