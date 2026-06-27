import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/articles.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", {
	className: "min-h-screen grid place-items-center text-center px-6",
	children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
		className: "display text-4xl",
		children: "مقاله یافت نشد"
	}), /* @__PURE__ */ jsx(Link, {
		to: "/articles",
		className: "mt-4 inline-block underline",
		children: "بازگشت به مقالات"
	})] })
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
