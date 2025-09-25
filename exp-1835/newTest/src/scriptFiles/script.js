
console.info('%c ${campaign.name}: ${campaign.recipe.name} ', "font-weight:600;color:#ffffff;background-color:#ff5500;");
window.Flickerlessly = window.Flickerlessly || {}, function (t) { "use strict"; var i = function (t, n, a, o) { var i = "atNodeInserted" + t, r = [], e = ["", "-moz-", "-webkit-", "-ms-", "-o-"]; e.forEach(function (t, e) { r.push("@" + t + "keyframes " + i + " {from {opacity:0.99} to {opacity:1}}") }), r.push(n + "{"), e.forEach(function (t, e) { r.push(t + "animation-duration:0.001s;" + t + "animation-name:" + i + ";") }), r.push("}"); var s = document.getElementsByTagName("head")[0]; if (s) { var c = document.createElement("style"); c.setAttribute("type", "text/css"), c.styleSheet ? c.styleSheet.cssText = r.join("\n") : c.appendChild(document.createTextNode(r.join("\n"))), s.insertBefore(c, s.firstChild) } var l = function (t) { if (t.animationName === i && "object" == typeof t.target) { var e = !0 === o || !1 === o && null === t.target.getAttribute("data-flk-success"); u("('" + n + "') ready! Execute: " + e, t.target), "function" == typeof a && e ? (t.target.setAttribute("data-flk-success", i), a(t.target, u)) : u("Won't Callback", e, a) } };["animationstart", "MSAnimationStart", "webkitAnimationStart"].forEach(function (t, e) { document.addEventListener(t, l, !1) }) }, u = function () { Array.prototype.unshift.call(arguments, "FLK:"), console.info.apply(this, arguments) }, r = Math.floor(1e3 * Math.random() + 1); t.onReady = function () { for (var t = 0; t < arguments.length; t++) { var e = arguments[t], n = e.selector, a = e.success || null, o = e.persist || !1; i(r++, n, a, o) } } }(Flickerlessly);
    //Checking element is present and starting DOM manipulation
Flickerlessly.onReady(
        {
            selector: 'xc-header[customer-type *= "authenticated-all"] ul.xc-header--navigation-section-services > li.xc-header--navigation-li',
            persist: true,
            success: function (el, log) {
                try {
                    // expTrack('${activity.id}:${campaign.recipe.id}', 'render', 'navigation changes');
                    //navigation menu
                   document.querySelector(".xc-header--auth-nav.xc-mb-10.xl\\:xc-mb-0").style.display = 'none';
                    document.querySelectorAll(".xc-header--auth-nav")[1].querySelector('h2').style.display = 'none';
                    document.querySelector(".xc-header--navigation-section-shop").innerHTML = templates.navigation
                }
                catch (error) {
                    console.log('Adobe Target error in Flickerlessly success: ', error);
                }
            }
        },{
            selector: 'xc-header[state=authenticated]:not(.flownav) .xc-header--sub-nav-open',
            success: function (el, log) {
                try {

                    if (document.querySelector('xc-header[state=authenticated]')) {
                        console.log('Inside Authenticated nav');
                        console.info('%c ${campaign.name}: ${campaign.recipe.name} ', "font-weight:600;color:#ffffff;background-color:#ff5500;");
                        document.querySelectorAll('.xc-header--nav-back').forEach((element) => {
                            element.addEventListener('click', (event) => {
                                console.log('clicked');
                                const clickedElement = event.currentTarget; // the clicked .xc-header--nav-back
                                const parent = clickedElement.parentNode;
                                // Traverse from the clicked element as needed
                                const subnavContainer = parent.parentNode
                                const subnav = parent.parentNode.parentNode
                                if (subnavContainer) {
                                    subnavContainer.classList.add('xc-hidden');
                                    console.log('clicked1');
                                }
                                if (subnav) {
                                    subnav.classList.remove('opened');
                                    console.log('clicked2');
                                }
                            })
                        })
                        //close button
                        document.querySelectorAll('.xc-header--sub-nav-close').forEach((button) => {
                            button.addEventListener('click', (event) => {
                                const clickedButton = event.currentTarget;
                                const submenu = clickedButton.closest('.opened');
                                if (submenu) {
                                    submenu.classList.remove('opened');
                                }
                                const subnavContainer = submenu?.querySelector('.xc-header--menu-subnavigation-container');
                                if (subnavContainer) {
                                    subnavContainer.classList.add('xc-hidden');
                                }
                                const trigger = submenu?.previousElementSibling;
                                if (trigger && trigger.classList.contains('xc-header--sub-nav-open')) {
                                    trigger.setAttribute('aria-expanded', 'false');
                                }
                                document.querySelector('.xc-header--overlay').classList.add('xc-opacity-0', 'xc--z-10');
                            });
                        });
                        //opening submenu
                        document.querySelectorAll('button.xc-header--sub-nav-open.xc-header--navigation-link').forEach((element) => {
                            element.addEventListener('click', (event) => {
                                const clickedElement = event.currentTarget;

                                console.log(clickedElement, 'clickedElement');
                                clickedElement.setAttribute('aria-expanded', 'true');
                                const submenu = clickedElement.nextElementSibling;
                                if (submenu) {
                                    submenu.classList.add('opened');
                                    const submenuContainer = submenu.querySelector('.xc-header--menu-subnavigation-container');
                                    if (submenuContainer) {
                                        submenuContainer.classList.remove('xc-hidden');
                                    }
                                }
                            });
                        });
                    }
                } catch (e) {
                    console.log('AT:Flickerlessly', e);
                }
            }
        },
         {selector: 'xc-header[state=authenticated]:not(.flownav) .xc-header--account-container',
        persist: true,
        success: function (el, log) {
            try {
                console.info('%c ${campaign.name}: ${campaign.recipe.name} ', "font-weight:600;color:#ffffff;background-color:#ff5500;");
                //avatar menu
                let Contactinfo = templates.contactInfo;

                let container = document.querySelector('xc-header[state=authenticated]:not(.flownav) .xc-header--account-container');
                let oldUl = container && container.querySelector('ul:first-of-type');
                // Check if custom UL already exists before inserting
                if (container && !container.querySelector('ul.custom-avatar-list')) {
                    if (oldUl) oldUl.style.display = 'none';
                    oldUl.insertAdjacentHTML('afterend', Contactinfo);
                }
            } catch (e) {
                console.log('AT:Flickerlessly', e);
            }
        }
    },
        {
            selector: 'xc-header[state=authenticated]:not(.flownav)',
            persist: true,
            success: function (el, log) {
                try {
                    expTrack('${activity.id}:${campaign.recipe.id}', 'render', 'navigation changes');
                } catch (e) {
                    console.log('AT:Flickerlessly', e);
                }
            }
        });

    if (window.location.href.includes('?mboxClk=tfn')) {
        Flickerlessly.onReady(
            {
                selector: '[data-testid="SupportPageLayout"]',
                persist: true,
                success: function (el, log) {
                    try {
                        console.info('%c ${campaign.name}: ${campaign.recipe.name} ', "font-weight:600;color:#ffffff;background-color:#ff5500;");
                        let contactushref = window.location.href;
                        if (contactushref.includes('?mboxClk=tfn')) {
                            document.querySelector('[data-testid="Container-wrap"] p.px-2').innerHTML = `Find the right help and support you need
                           <span class="xds-text-white text-body1" style="text-decoration: none; color: white; cursor: default;">
     or call us at <a href="tel:844-963-0294" style="color: white; text-decoration: none; cursor: pointer;">844-963-0294</a>.`
                        }
                    } catch (e) {
                        console.log('AT:Flickerlessly', e);
                    }
                }
            })
            ;
    }
