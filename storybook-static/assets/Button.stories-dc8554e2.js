import{d as w,a as l,o as D,b as L,t as N,n as P,u as c,e as T}from"./vue.esm-bundler-a1d9eeca.js";const h=w({__name:"Button",props:{label:null,primary:{type:Boolean,default:!1},size:null,backgroundColor:null},emits:["click"],setup(n,{emit:v}){const e=n,x=l(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),q=l(()=>({backgroundColor:e.backgroundColor})),E=()=>{v("click",1)};return(F,I)=>(D(),L("button",{type:"button",class:P(c(x)),onClick:E,style:T(c(q))},N(n.label),7))}});h.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}},{name:"primary",description:"primary or secondary button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the button",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"backgroundColor",description:"background color of the button",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["D:/smartatech_vue/storybook_vue/src/stories/button/Button.vue"]};const V={title:"Example/Button",component:h,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},backgroundColor:{control:"color"},onClick:{action:"clicked"}},args:{primary:!1}},r={args:{primary:!0,label:"Button"}},a={args:{primary:!1,label:"Button"}},o={args:{label:"Button",size:"large"}},s={args:{label:"Button",size:"small"}},t={args:{label:"Custom",size:"small",backgroundColor:"yellow"}};var u,m,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,d,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'large'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,B,z;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'small'
  }
}`,...(z=(B=s.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var C,S,_;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom',
    size: 'small',
    backgroundColor: 'yellow'
  }
}`,...(_=(S=t.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const $=["Primary","Secondary","Large","Small","custom"];export{o as Large,r as Primary,a as Secondary,s as Small,$ as __namedExportsOrder,t as custom,V as default};
//# sourceMappingURL=Button.stories-dc8554e2.js.map
