import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/articles.$slug.tsx?tsr-split=errorComponent
var SplitErrorComponent = ({ error, reset }) => /* @__PURE__ */ jsx("div", {
	className: "min-h-screen grid place-items-center px-6",
	children: /* @__PURE__ */ jsxs("div", {
		className: "text-center",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-muted-foreground",
			children: error.message
		}), /* @__PURE__ */ jsx("button", {
			onClick: reset,
			className: "mt-3 underline",
			children: "تلاش مجدد"
		})]
	})
});
//#endregion
export { SplitErrorComponent as errorComponent };
