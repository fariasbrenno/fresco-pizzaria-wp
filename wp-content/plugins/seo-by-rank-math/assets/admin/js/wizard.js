!function(){"use strict";var t,e={n:function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,{a:a}),a},d:function(t,a){for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},a=jQuery;(t=e.n(a)())((function(){window.rankMathSetupWizard={init:function(){rankMath.currentStep in this&&this[rankMath.currentStep](),t(document).on("cmb_init",(function(){t(".cmb-multicheck-toggle",".multicheck-checked").trigger("click")}))},compatibility:function(){t(".wizard-deactivate-plugin").on("click",(function(e){e.preventDefault();var a=t(this);if(!a.hasClass("disabled")){var n=a.closest("tr");t.ajax({url:rankMath.ajaxurl,type:"POST",data:{action:"rank_math_deactivate_plugins",security:rankMath.security,plugin:a.data("plugin")}}).always((function(t){"1"===t&&(n.find(".dashicons-warning").removeClass("dashicons-warning").addClass("dashicons-yes"),a.addClass("disabled").text(rankMath.deactivated))}))}})),t(".rank-math-setup-mode.is-free ul li:last-child").on("click",(function(t){return t.preventDefault(),window.open("//rankmath.com/pricing/?utm_source=Plugin&utm_medium=Setup%20Wizard%20Custom%20Mode&utm_campaign=WP"),!1}))},import:function(){var e=t("#import-progress"),a=t("#import-progress-bar"),n=0,i=0,r=function(t,e){var a=new Date,n=e.val()+"["+(10>a.getHours()?"0":"")+a.getHours()+":"+(10>a.getMinutes()?"0":"")+a.getMinutes()+":"+(10>a.getSeconds()?"0":"")+a.getSeconds()+"] "+t+"\n";e.text(n).scrollTop(e[0].scrollHeight-e.height()-20)},o=function(t){t>100&&(t=100),a.find(".number").html(t),a.find("#importBar").css("width",t+"%")},c=!1,u=function e(a,u,s,l,p,h){if(0!==u.length){l=l||1;var d=u.shift(),g="deactivate"===d?"Deactivating "+h:"Importing "+d+" from "+h,f=Math.floor(100/i);if("recalculate"===d)return r("Recalculating SEO Scores...",s),function(e,a){if(!c){var n=window.open(rankMath.recalculateURL,"rank-math-recalculation","width=530,height=300");c=!0,null===n&&(t('.recalculate-scores input[type="checkbox"]').prop("checked",!1).next("label").find("a").removeClass("hidden").first().appendTo("#import-progress-bar .left"),r("The SEO Score Recalculation could not be started because the popup was blocked. Try again with the above link, or run it from Rank Math > Status & Tools > Database Tools.",e),a())}}(s,p),void e(a,u,s,null,p,h);r(g,s),t.ajax({url:rankMath.ajaxurl,type:"POST",data:{perform:d,pluginSlug:a,paged:l,action:"rank_math_import_plugin",security:rankMath.security}}).success((function(t){var i=1;t&&t.page&&t.page<t.total_pages&&(i=t.page+1,u.unshift(d)),t&&t.total_pages&&(f=Math.ceil(f/t.total_pages)),o(n+=f),r(t.success?t.message:t.error,s),e(a,u,s,i,p,h)})).error((function(t){r(t.statusText,s),e(a,u,s,null,p,h)}))}else p()};t(".button-import",".form-footer").on("click",(function(n){if(n.preventDefault(),rankMath.isConfigured&&!window.confirm(rankMath.confirm))return!1;var c=t(".import-data:checkbox:checked");if(!c.length)return window.alert("Please select plugin to import data."),!1;var u=t(this),l={},p=[];t.each(c,(function(){var e=t(this).val(),a=t(this).parents(".cmb-group-description").next().find(":checkbox:checked"),n=a.data("active"),r=t(this).data("plugin");p.push(r);var o=function(e){var a=t.map(e,(function(t){return t.value}));if(-1!==a.indexOf("recalculate")){var n=(a=a.filter((function(t){return"recalculate"!==t}))).indexOf("postmeta");-1!==n?a.splice(n+1,0,"recalculate"):a.unshift("recalculate")}return a}(a);0<o.length&&n&&o.push("deactivate"),i+=o.length,l[e]={plugin:r,actions:o}})),u.prop("disabled",!0),e.show(),a.show(),a.find(".plugin-from").html(p.join(", ")),r("Import started...",e),s(l,e,(function(){o(100),u.prop("disabled",!1),t(".button",".form-footer").hide(),t(".button-continue").show()}))}));var s=function t(a,n,i){var o=Object.keys(a),c=o.length,s=a[o[0]],l=Object.keys(a)[0];if(delete a[l],0===c)return r("Import finished. Click on the button below to continue the Setup Wizard.",n),void i();u(l,s.actions,e,null,(function(){t(a,n,i)}),s.plugin)};t(".import-data").on("change",(function(){for(var e=t(this),a=this.checked,n=e.parents(".cmb-group-description").next().find(".cmb2-option"),i=0;i<n.length;i++)"checkbox"===n[i].type&&(n[i].checked=a);a&&("yoast"===e.val()?(t('.import-data[value="aioseo"]').prop("checked",!1).trigger("change"),t('.import-data[value="seopress"]').prop("checked",!1).trigger("change")):"aioseo"===e.val()?(t('.import-data[value="yoast"]').prop("checked",!1).trigger("change"),t('.import-data[value="seopress"]').prop("checked",!1).trigger("change")):"seopress"===e.val()&&(t('.import-data[value="yoast"]').prop("checked",!1).trigger("change"),t('.import-data[value="aioseo"]').prop("checked",!1).trigger("change")))})),t(".cmb-type-group .cmb2-checkbox-list .cmb2-option").on("click",(function(){var e=t(this),a=e.attr("name"),n=e.parents("ul").find('input[name="'+a+'"]:checkbox:checked'),i=e.parents("ul").find('input[name="'+a+'"]');n.length===i.length&&e.parents(".cmb-type-group").find(".import-data").prop("checked",!0).trigger("change")})),t(".button-deactivate-plugins").on("click",(function(e){var a=t(this);a.parents("form").find("input[data-active]").length&&(e.preventDefault(),a.text(a.data("deactivate-message")),t.ajax({url:rankMath.ajaxurl,type:"POST",data:{action:"rank_math_deactivate_plugins",security:rankMath.security,plugin:"all"}}).success((function(){a.parents("form").trigger("submit")})).error((function(){window.alert("Something went wrong! Please try again later.")})))}))},yoursite:function(){t("#rank-math-search-input").on("input keypress",(function(e){var a=t(this),n=a.next();if(13===e.keyCode||13===e.which){if("createEvent"in document){var i=this.ownerDocument,r=i.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,i.defaultView,1,0,0,0,0,!1,!1,!1,!1,0,null),n[0].dispatchEvent(r)}return!1}n.attr("href",n.data("href")+encodeURIComponent(a.val()))}));var e=t("#business_type");0!==parseInt(e.data("default"))&&t("#site_type").on("change",(function(){var a=t(this).val();"news"!==a&&"webshop"!==a&&"otherbusiness"!==a||e.val("Organization").trigger("change"),"business"===a&&e.val("LocalBusiness").trigger("change")}))},analytics:function(){t("#console_authorization_code").on("paste",(function(){var e=t(this).next(".button");setTimeout((function(){e.trigger("click")}),100)}))},ready:function(){t("#auto-update").on("change",(function(){t(".rank-math-auto-update-email-wrapper").toggle(t(this).is(":checked"))})),t(".rank-math-additional-options input.rank-math-modules").on("change",(function(){var e=t(this);t.ajax({url:rankMath.api.root+"rankmath/v1/autoUpdate",method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)},data:{key:e.data("key"),value:e.is(":checked")}})}))}},window.rankMathSetupWizard.init()}))}();