// ==UserScript==
// @name         New Userscript (Rosé Pine Moon)
// @namespace    http://tampermonkey.net/
// @version      2025-05-07
// @description  Rosé Pine Moon theme
// @author       You
// @match        *.moodle.aau.dk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aau.dk
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
:root {
    --bg-color: #232136;       /* Rosé Pine Moon base */
    --accent-color: #c4a7e7;   /* Rosé Pine Moon iris */
}

:focus-visible {
	outline: none !important;
}

.theme-dark .btn--darkmode {
	background-color: var(--accent-color);
	color: var(--bg-color);
}

.theme-dark .alert-warning, .theme-dark #page-mod-choice-view #notice p, #page-mod-choice-view #notice .theme-dark p {
	background-color: var(--accent-color);
	color: var(--bg-color);
}

.theme-dark .btn-outline-secondary, .theme-dark .comment-area .fd a[id*="cancel"], .comment-area .fd .theme-dark a[id*="cancel"], .theme-dark .visibleifjs .btn, .visibleifjs .theme-dark .btn, .theme-dark .gradingform_guide.editor .addcriterion input, .gradingform_guide.editor .addcriterion .theme-dark input, .theme-dark .gradingform_guide.editor .addcomment input, .gradingform_guide.editor .addcomment .theme-dark input, .theme-dark .gradingform_rubric_ranges.editor .addlevel input, .gradingform_rubric_ranges.editor .addlevel .theme-dark input, .theme-dark #page-grade-grading-manage .definition-preview .btn.floatright, #page-grade-grading-manage .definition-preview .theme-dark .btn.floatright {
	color: var(--bg-color);
	border: 1px solid #3C4043;
	background-color: var(--accent-color);
}

.fc-button-primary:not(:disabled):active:focus,
.fc-button-primary:not(:disabled).fc-button-active:focus {
	box-shadow: none;
	background-color: var(--accent-color) !important;
	color: var(--bg-color) !important;
}
.fc-button-primary:not(:disabled):active,
.fc-button-primary:not(:disabled).fc-button-active {
	color: var(--bg-color) !important;
	background: var(--accent-color) !important;
	border: none !important;
}
.fc-button-primary:disabled {
	color: var(--bg-color) !important;
	background-color: var(--accent-color) !important;
	border-color: #2E3134;
}
body.theme-dark {
	color: #e0def4;
	background-color: var(--bg-color);
}
.theme-dark .card {
	background-color: var(--bg-color);
	border: 1px solid #393552;
}
.theme-dark .search-input-group .search-input {
	background-color: var(--bg-color);
	color: #c4a7e7;
}
.theme-dark .btn-secondary,
.theme-dark .collapseexpand,
.theme-dark .actions p a,
.actions p .theme-dark a,
.theme-dark .backlink a,
.backlink .theme-dark a,
.theme-dark .moreless-toggler,
.theme-dark .search-results .result-context-info a,
.theme-dark .tool_dataprivacy-expand-all,
.theme-dark .edit-link a,
.theme-dark .continuebutton a,
.theme-dark .tour-actions > ul > li > a,
.theme-dark .comment-area .fd a[id*="post"],
.theme-dark .addlinks a,
.theme-dark .gradingform_rubric.editor .addlevel input,
.theme-dark .path-tag .tagarea .controls .exclusivemode,
.theme-dark .notesgroup p a,
.theme-dark .printicon,
.theme-dark .rui-form-element-group a,
.theme-dark .mod_quiz-prev-nav,
.theme-dark .categorypagingbarcontainer .paging a,
.theme-dark .page_split_join,
.theme-dark .path-mod-wiki .printicon,
.theme-dark .gradereport_history_usp .usp-search input[type="submit"],
.theme-dark .custom-control--xs .custom-control-label,
.theme-dark .helpdoclink a,
.theme-dark .itemnav a,
.theme-dark .commentlink a,
.theme-dark .action.remove,
.theme-dark .btn-inverse,
.theme-dark .pick.template,
.theme-dark .que .comment a,
.theme-dark .ajax-contact-button,
.theme-dark #message-user-button,
.theme-dark .realtimequiz_editicons a,
.theme-dark .printdiscussion input,
.theme-dark #page .hsuforum-tools a,
.theme-dark .oublog-post-links a,
.theme-dark .ouwiki_nav_index a,
.theme-dark .ouw_byheading a,
.theme-dark #ouwiki_indexlinks a,
.theme-dark .addcomponent {
	background-color: var(--bg-color);
	color: #e0def4;
}
.theme-dark .rui-topbar-btn {
	background-color: var(--bg-color);
	color: #c4a7e7;
}
.theme-dark .drawer-right-toggle .btn {
	background: var(--bg-color);
	color: #9ccfd8;
}
.theme-dark .rui-sidebar-abtn .rui-drawer-badge {
	background-color: var(--accent-color);
	color: var(--bg-color);
}
.theme-dark .rui-course-card {
	background-color: var(--bg-color);
	border-color: var(--bg-color);
}
.custom-switch.custom-control--xs .custom-control-input:checked ~ .custom-control-label::before {
	border-color: var(--accent-color);
}
.custom-switch .custom-control-input:checked ~ .custom-control-label::before {
	background-color: var(--accent-color);
}
.theme-dark .mycourses-filter .custom-switch.custom-control--xs .custom-control-label::after {
	background-color: var(--bg-color);
}
.theme-dark .rui-sidebar-nav-item-link.active .rui-sidebar-nav-icon,
.theme-dark .rui-sidebar-nav-item-link:hover .rui-sidebar-nav-icon {
	color: var(--bg-color) !important;
}
.rui-course-card-img-top {
	background-color: color-mix(in srgb, var(--bg-color) 80%, #fff 50%);
	background-blend-mode: multiply;
}
.theme-dark .rui-course-cat-badge {
	background-color: var(--bg-color);
	color: #c4a7e7;
}
.theme-dark .editmode-switch-form {
	background-color: var(--bg-color);
}
.theme-dark .custom-control-label::before {
	border-color: var(--accent-color);
}
.custom-switch .custom-control-label::after {
	background-color: var(--accent-color);
}

.theme-dark #nav-drawer,
.theme-dark .rui-topbar-wrapper,
.theme-dark .rui-flatnavigation-box,
.theme-dark .rui-sidebar-mycourses {
	background-color: var(--bg-color) !important;
}

.theme-dark .rui-topbar-wrapper {
	color: #e0def4;
	border-color: #393552;
}

.theme-dark #nav-drawer .search-input-group .search-input {
	background-color: var(--bg-color);
	color: #e0def4;
}

.theme-dark .rui-sidebar-nav-item-link.active,
.theme-dark .rui-sidebar-nav-item-link:hover {
	background-color: var(--accent-color);
	color: var(--bg-color);
}
.theme-dark .nav-drawer-btn[aria-expanded="true"] .nav-drawer-btn--opened,
.theme-dark .nav-drawer-btn[aria-expanded="true"] div:hover {
	color: var(--bg-color);
	background-color: var(--accent-color);
}

.content-item-container.unread {
	background-color: var(--accent-color);
	color: var(--bg-color);
}
.theme-dark .content-item-container .context-link {
	color: var(--bg-color);
}
.content-item-container.notification .content-item-body .notification-image {
	background-color: var(--accent-color);
}
.rui-unreadcount:not(.hidden) {
	background-color: var(--accent-color);
	color: var(--bg-color);
}

.fc-unthemed td.fc-today {
	background: color-mix(in srgb, var(--bg-color) 100%, var(--accent-color) 15%) !important;
}
.fc-now-indicator {
	border: 0 solid var(--accent-color) !important;
}
.fc-button-group > .fc-button:not(:last-child),
.fc-button-group > .fc-button:not(:first-child),
.fc-button-primary:disabled {
	background: color-mix(in srgb, var(--bg-color) 100%, var(--accent-color) 15%);
	border: none !important;
}
`);
