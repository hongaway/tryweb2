(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{18149:function(e,n,t){var i=t(88746);e.exports=function(e,n){return i(e,n)}},55431:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore",function(){return t(8886)}])},55128:function(e,n,t){"use strict";var i=t(52322),r=t(64033),s=t(42840),l=t(52829),o=t(34020);n.Z=function(e){var n=e.isChecked,t=e.handleOnChange,a=(0,l.$)().t;return(0,i.jsxs)(r.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,i.jsx)(s.lX,{htmlFor:"show-listed",mb:0,children:(0,i.jsx)(o.xv,{textStyle:"detail",bold:!0,whiteSpace:"nowrap",children:a("Buy Now")})}),(0,i.jsx)(r.xu,{width:"fit-content",height:"fit-content",children:(0,i.jsx)(o.rs,{isChecked:n,"data-id":"listed-items-switch-show-listed",onChange:function(e){return t(e.target.checked)},size:"md"})})]})}},8886:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return d}});var i=t(52322),r=t(55351),s=t(75125),l=t(66170),o=t(81045),a=t(32747),c={borderBottom:"1px solid",borderBottomColor:{base:"border-01",sm:"transparent"}},d=!0;n.default=function(e){var n=e.initialTokenFilter,t=e.initialTokens,d=(0,s.$G)().t;return(0,i.jsxs)(a.Z,{navProps:c,children:[(0,i.jsx)(r.PB,{title:d("Explore"),description:d("Explore and trade popular NFT collections such as CryptoPunks and Bored Ape Yacht Club, on the LooksRare NFT Marketplace."),openGraph:{url:"".concat(l.de.appUrl,"/explore"),title:d("{{pageTitle}} | LooksRare",{pageTitle:d("Explore")}),description:d("Explore and trade popular NFT collections such as CryptoPunks and Bored Ape Yacht Club, on the LooksRare NFT Marketplace.")}}),(0,i.jsx)(o.Z,{tabIndex:0,initialTokenFilter:n,initialTokens:t})]})}},81045:function(e,n,t){"use strict";t.d(n,{Z:function(){return q}});var i=t(52322),r=t(2784),s=t(34756),l=t(64033),o=t(82353),a=t(83082),c=t(12391),d=t(48975),u=t(35676),x=t.n(u),h=t(18149),f=t.n(h),p=t(47363),j=t(89303),b=t(34068),v=t(95619),k=t(81473),g=t(61277),w=t(62026),y=t(69956),C=function(e){var n=e.initialTokens,t=(0,d.Ge)().account,s=(0,v.y)(),o=(0,c.Nv)(),a=o.filter,u=o.sort,h=o.defaultSort,C=o.setSort,m=o.initialFilters,F=(0,j.Y)(),T=F.labels,O=F.getTokensSortFromLabel,P=F.tokensSortMap,E=f()(a,m)&&u===h,N=(0,p.rj)({filter:a,sort:u,ownerFilter:(0,k.wC)({connectedAccount:t})},{enabled:s,initialData:E?{pages:[n],pageParams:[void 0]}:void 0}),_=N.data,M=N.isFetching,S=N.isSuccess,I=N.hasNextPage,L=N.fetchNextPage,A=(0,b.Z)("800px"),R=A.observerRef,Z=A.isIntersecting,B=I&&Z&&!M,H=!S||I&&(M||Z),q=_&&x()(_.pages);return(0,r.useEffect)((function(){B&&L()}),[B,L]),(0,i.jsxs)(l.xu,{position:"relative",children:[(0,i.jsx)(g.I6,{children:(0,i.jsxs)(l.kC,{flexDirection:{base:"column",lg:"row-reverse"},justifyContent:"space-between",children:[(0,i.jsx)(w.h,{height:"fit-content",labels:T,selectedLabel:P[u],handleSelect:function(e){return C(O(e)||h)},mb:{base:6,lg:0}}),(0,i.jsx)(c.WH,{})]})}),(0,i.jsxs)(l.xu,{bg:"ui-bg",children:[(0,i.jsx)(y.Z,{nfts:q,hasNextPage:I,isSuccess:S,showLoader:H}),(0,i.jsx)("div",{ref:R})]})]})},m=t(24651),F=t(28741),T=t(4611),O=t(17851),P=t(55128),E=t(71786),N=function(e){var n,t,r,s,a,d,u,x,h=e.isMobileLayout,f=(0,c.Nv)(),p=f.handleMaxPriceChange,j=f.handleMinPriceChange,b=f.toggleWithAskOnly,v=f.filter,k=(0,O.mP)({sort:o.us.HIGHEST_24H}),g=(null===(n=v.order)||void 0===n||null===(t=n.price)||void 0===t?void 0:t.min)?(0,T.wE)(null===(r=v.order)||void 0===r||null===(s=r.price)||void 0===s?void 0:s.min):"",w=(null===(a=v.order)||void 0===a||null===(d=a.price)||void 0===d?void 0:d.max)?(0,T.wE)(null===(u=v.order)||void 0===u||null===(x=u.price)||void 0===x?void 0:x.max):"";return(0,i.jsxs)(l.Kq,{divider:(0,i.jsx)(l.iz,{}),spacing:0,children:[(0,i.jsx)(E.Y,{bg:"ui-01",children:(0,i.jsx)(l.xu,{children:(0,i.jsx)(P.Z,{isChecked:v.withAskOnly,handleOnChange:b})})}),(0,i.jsx)(c.Nt,{onMaxPriceChange:p,onMinPriceChange:j,initialMin:g,initialMax:w}),(0,i.jsx)(c.Xm,{collectionFiltersQuery:k,isMobileLayout:h}),";"]})},_=t(35360),M=t(16378),S=t(52829),I=t(77138),L=t(39097),A=t(61855),R=(0,r.forwardRef)((function(e,n){var t=e.tabIndex,r=(0,S.$)().t;return(0,i.jsx)(A._,{children:(0,i.jsx)(I.mQ,{isManual:!0,defaultIndex:t,variant:"blank",isLazy:!0,children:(0,i.jsxs)(I.td,{ref:n,children:[(0,i.jsx)(L.default,{href:"/explore",passHref:!0,children:(0,i.jsx)(I.OK,{"data-id":"explore-header-items-tab",as:"a",children:r("Items")})}),(0,i.jsx)(L.default,{href:"/explore/activity",passHref:!0,children:(0,i.jsx)(I.OK,{"data-id":"explore-header-activity-tab",as:"a",children:r("Activity")})})]})})})}));function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){Z(e,n,t[n])}))}return e}R.displayName="ExploreHeader";var H=function(e){var n=e.tabIndex,t=e.initialTokens,o=(0,s.qY)(),d=o.isOpen,u=o.onOpen,x=o.onClose,h=(0,c.Nv)(),f=h.filter,p=h.clearAllFilters,j=(0,c.Ps)(),b=j.filters,v=j.resetFilters,k=(0,r.useRef)(null),w=(0,r.useCallback)((function(){return(0,M.h)(k.current)}),[k]);return(0,a.q)(f,w),(0,a.q)(b,w),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.kC,{children:[(0,i.jsxs)(l.xu,{children:[(0,i.jsx)("div",{ref:k}),(0,i.jsx)(l.xu,{display:{base:"block",sm:"none"},children:(0,i.jsx)(m.Lb,{onClick:u})}),0===n&&(0,i.jsx)(l.xu,{display:{base:"block",sm:"none"},children:(0,i.jsx)(F.Z,{isOpen:d,onClose:x,onResetAll:p,children:(0,i.jsx)(N,{isMobileLayout:!0})})}),1===n&&(0,i.jsx)(_.rB,{onFilterModalOpen:u,isFilterModalOpen:d,onFilterModalClose:x,resetFilters:v}),(0,i.jsxs)(g.qc,{children:[0===n&&(0,i.jsx)(N,{}),1===n&&(0,i.jsx)(_.YJ,{})]})]}),(0,i.jsxs)(g.q_,{children:[(0,i.jsx)(R,{tabIndex:n}),(0,i.jsxs)(l.xu,B({position:"relative"},g.kE,{children:[0===n&&(0,i.jsx)(C,{initialTokens:t}),1===n&&(0,i.jsx)(_.Cr,{filters:b})]}))]})]})})},q=function(e){var n=e.tabIndex,t=e.initialTokenFilter,r=e.initialTokens,s={flag:[o.wW.NONE,o.wW.TRIAGE]},l=B({},s,t);return(0,i.jsx)(c.pf,{defaultFilters:s,initialFilters:l,excludeUrlFilterKeys:["flag"],tokensPageType:"explore",defaultSort:o.sd.LAST_RECEIVED,children:(0,i.jsx)(c.FJ,{children:(0,i.jsx)(g.wW,{children:(0,i.jsx)(H,{tabIndex:n,initialTokens:r})})})})}}},function(e){e.O(0,[834,971,451,879,117,126,352,360,942,133,0,774,888,179],(function(){return n=55431,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=explore-0db07afc0e1f04e0.js.map