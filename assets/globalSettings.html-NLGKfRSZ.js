import{_ as p,c as o,a as i,b as n,d as a,e as t,f as l,r,o as u}from"./app-agnnvDA5.js";const c={};function d(m,s){const e=r("RouteLink");return u(),o("div",null,[s[21]||(s[21]=i(`<h1 id="global-settings" tabindex="-1"><a class="header-anchor" href="#global-settings"><span>Global Settings</span></a></h1><p>The global settings file is <code>config/settings.js</code>. It contains the global settings for the project.</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> crypto <span class="token keyword">from</span> <span class="token string">&quot;crypto&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">passwordHash</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">password</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&quot;md5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>password<span class="token operator">+</span><span class="token string">&quot;ywy521&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// API前缀</span></span>
<span class="line">    <span class="token literal-property property">urlPrefix</span><span class="token operator">:</span><span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 服务器端口</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 保存数据的间隔时间</span></span>
<span class="line">    <span class="token literal-property property">saveInterval</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// web接口最大单次数据查询量</span></span>
<span class="line">    <span class="token literal-property property">maxLimit</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// web接口是否允许批量更新</span></span>
<span class="line">    <span class="token literal-property property">multiUpdate</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// web接口是否允许批量删除</span></span>
<span class="line">    <span class="token literal-property property">multiDelete</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// JWT过期时间</span></span>
<span class="line">    <span class="token literal-property property">jwtExpire</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// JWT密钥</span></span>
<span class="line">    <span class="token literal-property property">jwtSecret</span><span class="token operator">:</span> <span class="token string">&quot;nihao&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 是否将JWT放在cookie token中，否则放在header的X-DYAPI-Token中</span></span>
<span class="line">    <span class="token literal-property property">cookieLogin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 密码哈希函数</span></span>
<span class="line">    passwordHash<span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 默认用户Model权限</span></span>
<span class="line">    <span class="token literal-property property">defaultModelPermission</span><span class="token operator">:</span> <span class="token string">&quot;C,R,U,D,&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 默认用户Field权限</span></span>
<span class="line">    <span class="token literal-property property">defaultFieldPermission</span><span class="token operator">:</span> <span class="token string">&quot;r,w,p,&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ObjectID生成时的设备ID。需要以很多0结尾。</span></span>
<span class="line">    <span class="token literal-property property">deviceId</span><span class="token operator">:</span> <span class="token string">&quot;abc1230000000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// Cron的时区</span></span>
<span class="line">    <span class="token literal-property property">cronTimezone</span><span class="token operator">:</span> <span class="token string">&quot;Asia/Shanghai&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),n("table",null,[s[20]||(s[20]=n("thead",null,[n("tr",null,[n("th",null,"key"),n("th",null,"type"),n("th",null,"description")])],-1)),n("tbody",null,[s[8]||(s[8]=n("tr",null,[n("td",null,[n("code",null,"urlPrefix")]),n("td",null,"string"),n("td",null,"The prefix of all the API routes.")],-1)),s[9]||(s[9]=n("tr",null,[n("td",null,[n("code",null,"port")]),n("td",null,"number"),n("td",null,"The port of the server.")],-1)),s[10]||(s[10]=n("tr",null,[n("td",null,[n("code",null,"saveInterval")]),n("td",null,"number"),n("td",null,"The interval of saving JSON data to the database.")],-1)),s[11]||(s[11]=n("tr",null,[n("td",null,[n("code",null,"maxLimit")]),n("td",null,"number"),n("td",null,"The maximum number of records that can be returned in a single request.")],-1)),s[12]||(s[12]=n("tr",null,[n("td",null,[n("code",null,"multiUpdate")]),n("td",null,"boolean"),n("td",null,"Whether to allow multiple updates in a single request.")],-1)),s[13]||(s[13]=n("tr",null,[n("td",null,[n("code",null,"multiDelete")]),n("td",null,"boolean"),n("td",null,"Whether to allow multiple deletions in a single request.")],-1)),s[14]||(s[14]=n("tr",null,[n("td",null,[n("code",null,"jwtExpire")]),n("td",null,"number"),n("td",null,"The expiration time of the JWT token, in milliseconds.")],-1)),s[15]||(s[15]=n("tr",null,[n("td",null,[n("code",null,"jwtSecret")]),n("td",null,"string"),n("td",null,"The secret key used to sign the JWT token.")],-1)),s[16]||(s[16]=n("tr",null,[n("td",null,[n("code",null,"cookieLogin")]),n("td",null,"boolean"),n("td",null,"True to login according to the cookie. False to login according to the token in the request header.")],-1)),s[17]||(s[17]=n("tr",null,[n("td",null,[n("code",null,"passwordHash")]),n("td",null,"function"),n("td",null,"The function to hash the password.")],-1)),n("tr",null,[s[2]||(s[2]=n("td",null,[n("code",null,"defaultModelPermission")],-1)),s[3]||(s[3]=n("td",null,"string",-1)),n("td",null,[s[1]||(s[1]=a("The default permission for the model. See ")),t(e,{to:"/guide/authentication.html#permissions-and-roles"},{default:l(()=>s[0]||(s[0]=[a("Permissions and Roles")])),_:1})])]),n("tr",null,[s[6]||(s[6]=n("td",null,[n("code",null,"defaultFieldPermission")],-1)),s[7]||(s[7]=n("td",null,"string",-1)),n("td",null,[s[5]||(s[5]=a("The default permission for the field. See ")),t(e,{to:"/guide/authentication.html#permissions-and-roles"},{default:l(()=>s[4]||(s[4]=[a("Permissions and Roles")])),_:1})])]),s[18]||(s[18]=n("tr",null,[n("td",null,[n("code",null,"deviceId")]),n("td",null,"string"),n("td",null,"The device id, used for generating ObjectId. It has to be 16 chars in length and end with many 0s.")],-1)),s[19]||(s[19]=n("tr",null,[n("td",null,[n("code",null,"cronTimezone")]),n("td",null,"string"),n("td",null,[a("The timezone for cron jobs. See "),n("a",{href:"https://www.iana.org/time-zones",target:"_blank",rel:"noopener noreferrer"},"Time Zone Database")])],-1))])])])}const v=p(c,[["render",d],["__file","globalSettings.html.vue"]]),b=JSON.parse('{"path":"/developing/globalSettings.html","title":"Global Settings","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1728307129000,"contributors":[{"name":"douyachan","email":"caohaozhe@163.com","commits":1}]},"filePathRelative":"developing/globalSettings.md"}');export{v as comp,b as data};
