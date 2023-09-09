
// Function to remove the target section
function removeSection() {
    var targetSection = document.querySelector('.dwlvNd'); // create new event button
    if (targetSection) {
        targetSection.remove();
    }
    var targetSection = document.querySelector('.QQYuzf'); // left side bar
    if (targetSection) {
        targetSection.remove();
    }
    var targetSection = document.querySelector('.K2fuAf'); // inner contents of the body grid
    if (targetSection) {
        targetSection.innerHTML="";
    }
    var targetSection = document.querySelector('.rUCtP'); // a thin top bar. contains a bit more gcal content like feedback etc
    if (targetSection) {
        targetSection.remove();
    }    
    // var targetSection = document.querySelector('.F4WVze'); // extra jscontroller div. need to experiment with deleting and keeping
    // if (targetSection) {
    //   targetSection.remove();
    // }      
    var targetSection = document.querySelector('#favicon'); // favicon url
    if (targetSection) {
      targetSection.remove();
      console.log("just removed it")
    }      
    const headTag = document.querySelector('head');    
    const titleTag = headTag.querySelector('title');
    if (titleTag) {
      titleTag.remove();
    }
    var targetSection = document.querySelector('.NkK3Fc'); // header of the page
    if (targetSection) {
        targetSection.innerHTML="";
    }
}

// Function to add your own content
function addCustomContent() {

    // Modify the head of the document
    const headTag = document.querySelector('head');
    if (headTag) {

        // 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢        
        // Add your own meta tag
        const metaTag1 = document.createElement('meta');
        metaTag1.charset = 'utf-8';
        headTag.appendChild(metaTag1);

        
        // 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 
        const titleTag = document.createElement('title');
        titleTag.innerHTML = 'My Dashboard';
        if (headTag) {
            headTag.insertBefore(titleTag, headTag.firstChild);
        }

        const faviconTag = document.createElement('link');
        faviconTag.id = 'favicon';
        faviconTag.type = 'image/x-icon';
        faviconTag.rel = 'icon';
        faviconTag.href = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGVjay1jaXJjbGUiPjxwYXRoIGQ9Ik0yMiAxMS4wOFYxMmExMCAxMCAwIDEgMS01LjkzLTkuMTQiLz48cG9seWxpbmUgcG9pbnRzPSIyMiA0IDEyIDE0LjAxIDkgMTEuMDEiLz48L3N2Zz4=';
        headTag.appendChild(faviconTag);


        // 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢        
        const metaTag2 = document.createElement('meta');
        metaTag2.name = 'viewport';
        metaTag2.content = 'width=device-width, initial-scale=1';
        headTag.appendChild(metaTag2);

        // 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢        
        const linkTag2 = document.createElement('link');
        linkTag2.rel = 'stylesheet';
        linkTag2.href = 'https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css';
        headTag.appendChild(linkTag2);

// =========================================================================


        // Modify styles directly in the document
        // 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
        const styleElement1 = document.createElement('style');
        styleElement1.textContent = `
        /* The base structure of the new tab original page: */
        /* ============================================================ */
        body {
            /* margin-top: 20px; */
            background: #1a1a1a;
            /* Dark background color */
            color: #f5f5f5;
            /* Light text color */
        }
        
        .card {
            /* margin-bottom: 0.2rem; */
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, .25);
            /* Darken the box shadow */
            background-color: #303030;
            /* Dark background color */
            border: 1px solid #424242;
            /* Dark border color */
        }
        
        .card-border-primary {
            border-top: 4px solid #2979ff;
        }
        
        .card-border-secondary {
            border-top: 4px solid #efefef;
        }
        
        .card-border-success {
            border-top: 4px solid #00c853;
        }
        
        .card-border-info {
            border-top: 4px solid #3d5afe;
        }
        
        .card-border-warning {
            border-top: 4px solid #ff9100;
        }
        
        .card-border-danger {
            border-top: 4px solid #ff1744;
        }
        
        .card-border-light {
            border-top: 4px solid #f8f9fa;
        }
        
        .card-border-dark {
            border-top: 4px solid #6c757d;
        }
        
        .card-header {
            border-bottom-width: 1px;
        }
        
        
        .card-title {
            font-weight: 500;
            margin-top: .1rem;
        }
        
        .card-subtitle {
            font-weight: 400;
        }
        
        .card-table {
            margin-bottom: 0;
        }
        
        .card-table tr td:first-child,
        .card-table tr th:first-child {
            padding-left: 1.25rem;
        }
        
        .card-table tr td:last-child,
        .card-table tr th:last-child {
            padding-right: 1.25rem;
        }
        
        .card-img-top {
            height: 100%;
        }
        
        .card-header:first-child {
            border-radius: calc(.2rem - 1px) calc(.2rem - 1px) 0 0;
        }
        .NkK3Fc{
            background-color:rgba(255,255,255,0)!important;
            color:rgba(255,255,255,1)!important;
            font-family:Segoe UI,Roboto,RobotoDraft,Helvetica,Arial,sans-serif!important;
        }
        
        .card-header {
            padding: .75rem 1.25rem;
            margin-bottom: 0;
            color: inherit;
            background-color: #1a1a1a;
            /* Dark background color */
            border-bottom: 1px solid #424242;
            /* Dark border color */
        }
        
        .card-self {
            color: #f5f5f5;
            /* Light text color */
            background-color: #424242;
            /* Dark background color */
        
        }
        .mini-card-body {
            max-height: 38vh;
            overflow-y: auto;
            /* scrollbar-width: thin; */
            /* scrollbar-color: transparent transparent; */
        }
        
        .card-body {
            max-height: 69vh;
            overflow-y: auto;
            /* scrollbar-width: thin; */
            /* scrollbar-color: transparent transparent; */
        }
        
        /* .card-body::-webkit-scrollbar {
            width: 0.5em;
        }
        
        .card-body::-webkit-scrollbar-track {
            background-color: transparent;
        }
        
        .card-body::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
        
        .card-body::-webkit-scrollbar-thumb:hover {
            background-color: transparent;
        } */
        
        /* ============================================================ */
        
        
        /* The css structure for customized sections of the page: */
        /* ============================================================ */
        
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Martel:wght@600&display=swap');
        
        
        .sticky-header {
            position: relative;
            width: 95vw;
            margin-top: 2vh;
        
          }
        
        
        
        .bottom-non-sticky{
            margin-top: 3vh;
        }
        
        
        .button-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .undo-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            border: none;
            background-color: #007bff;
            margin: 4px;
        }
        
        .undo-button:hover {
            background-color: #016dd9;
        }
        
        
        .buttons_holder {
            /* border: 1px solid white; */
            height: 4vw;
            width: 4vw;
            margin-right: 30px;
            object-fit: contain;
        
        }
        
        .buttons_holder:hover {
            background-color: rgba(67, 67, 67, 0.368);
            border-radius: 11px;
            border: 2px solid rgba(255, 255, 255, 0.08)
        }
        
        
        img {
        
            object-fit: scale-down;
            max-width: 100%;
            /* Ensure the image doesn't exceed the div's width */
            max-height: 100%;
            /* Ensure the image doesn't exceed the div's height */
        }
        
        
        .headerr {
            padding-top: 5px;
            /* padding-bottom: 30px; */
            padding-left: 14vh;
        
        }
        
        .shlok {
        
            font-size: 16px;
            font-family: 'Martel', serif;
            min-height: 160px;
            border: 1px solid white;
            margin-bottom: 15px;
            margin-left: 2px;
            margin-right: 2px;
            border-radius: 9px;
            text-align: center;
            padding: 16px;
            padding-top: 30px;
            
                /* Add your content styles here */
                /* white-space: nowrap; */
                /* Prevent text from wrapping */
                /* overflow: hidden; */
                /* Hide the overflowing text */
                /* text-overflow: ellipsis; */
                /* Show "..." when text overflows */
                transition: overflow 0.5s;
                word-wrap: break-word;
                overflow-y: scroll;
                max-height: 30vh;
        }
        
        
        ::-webkit-scrollbar {
            width: 15.3px;
        }
        
        ::-webkit-scrollbar-track {
            background-color: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #d6dee1;
            border-radius: 20px;
            border: 6px solid transparent;
            background-clip: content-box;
        }
        
        .box-contt{
            margin-left: 10vh;
            height: 100%;
        }
        
        /* ============================================================ */
        
        
        
        
        
        /* Card Specific CSS (for the card component): */
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
        
        
        
        .task-nondisp-metadata {
            display: none;
        }
        
        .taskid {
            display: none;
        }
        
        .card-content-holder {
            border-radius: 6px;
            padding-top: 5px;
            padding-left: 4px;
            padding-right: 4px;
            /* margin: 10px; */
        
        
        }
        
        .card-top-section {
            /* border: 1px solid white; */
            /* padding: 10px;
        margin: 10px; */
        
            display: flex;
            justify-content: space-between;
        }
        
        .card-snoozer {
            width: 2%
        }
        
        .card-inner-title {
            /* font-family: 'Proxima Nova', sans-serif;  */
            font-family: 'Inter', sans-serif;
            width: 80%;
            padding: 0.9vw;
            padding-top: 0.4vw;
            max-width: 78%;
            max-height: 55px;
            font-size: 16px;
            font-weight: 500;
            overflow-y: auto;
            border-radius: 9px;
            background-color: #14141475;
        
        
        }
        
        
        
        .snoozebut {
            width: 33px;
            height: 33px;
                
            display: inline-block;
            outline: 2px solid rgb(103, 103, 103);
            opacity: 0.9;
            cursor: pointer;
            align-items: center;
            margin-top: -26px;
            margin-left: -18px;
            padding: 4px;
            padding-bottom: 0px;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            vertical-align: middle;
            border: 1px solid;
            border-radius: 6px;
            color: #ffffff;
            background-color: #e19924;
            border-color: #1b1f2326;
            box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
            transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
            transition-property: color, background-color, border-color;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hbGFybS1jaGVjayI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMyIgcj0iOCIvPjxwYXRoIGQ9Ik01IDMgMiA2Ii8+PHBhdGggZD0ibTIyIDYtMy0zIi8+PHBhdGggZD0iTTYuMzggMTguNyA0IDIxIi8+PHBhdGggZD0iTTE3LjY0IDE4LjY3IDIwIDIxIi8+PHBhdGggZD0ibTkgMTMgMiAyIDQtNCIvPjwvc3ZnPg==");
            background-size: contain; /* Set the image size to contain within the button */
            background-repeat: no-repeat; /* Prevent the image from repeating */
            background-position: center; /* Center the image within the button */
                
        }
        
        .snoozebut:hover {
            background-color: #ffa618;
            border-color: #1b1f2326;
            transition-duration: 0.1s;
        }
        
        
        .meta-wrapper{
            width: 100%;
        }
        
        
        .top-metadata-holder {
            /* border: 1px solid white; */
            /* padding: 10px;
        margin: 10px; */
        
            /* flex-grow: 1; */
            width: 20%;
            min-width: fit-content;
            /* padding-right: 0.5vw; */
            padding: auto;
            display: flex;
            align-items: center;
            margin-left: 3px;
            /* padding-top: 0.5vw; */
        }
        
        
        .deadline-box {
            font-size: 12.5px;
            background-color: #1a1a1a;
            /* border: 1px solid white; */
            border-radius: 6px;
            text-align: right;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 2px;
        
            /* padding: 10px;
        margin: 10px; */
        
            margin-bottom: 3px;
        }
        
        .prio-dur-holder {
            display: flex;
            justify-content: space-between;
        }
        
        .priority-box {
            font-size: smaller;
            /* border: 1px solid white; */
            border-radius: 6px;
            text-align: center;
            width: 30%;
            padding-bottom: 2px;
        }
        
        .duration-box {
            font-size: smaller;
            /* border: 1px solid white; */
            border-radius: 6px;
            text-align: center;
            width: 58%;
            padding-bottom: 2px;
            background-color: #1a1a1a;
        
        }
        
        .card-actual-body {
            /* border: 1px solid white; */
            /* padding: 10px;
        margin: 10px; */
        
            display: flex;
            justify-content: space-between;
        }
        
        .checkbox-div {
            /* border: 1px solid white; */
            /* padding: 10px;
        margin: 10px; */
        
            width: 15%;
            /* margin-right: 0.7vw;
        margin-left: 0.7vw; */
            margin-top: 0.75vw;
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
        
        
        .donebut {
            width: 33px;
            height: 33px;
            
            display: inline-block;
            outline: 2px solid rgb(103, 103, 103);
            cursor: pointer;
            align-items: center;
            /* margin-top: -26px;
            margin-left: -18px; */
            /* height: 80px; */
            padding: 4px;
            padding-bottom: 0px;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            vertical-align: middle;
            border: 1px solid;
            border-radius: 6px;
            color: #ffffff;
            background-color: #20bd42;
            border-color: #1b1f2326;
            box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
            transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
            transition-property: color, background-color, border-color;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGVjay1jaXJjbGUiPjxwYXRoIGQ9Ik0yMiAxMS4wOFYxMmExMCAxMCAwIDEgMS01LjkzLTkuMTQiLz48cG9seWxpbmUgcG9pbnRzPSIyMiA0IDEyIDE0LjAxIDkgMTEuMDEiLz48L3N2Zz4=");
            background-size: contain; /* Set the image size to contain within the button */
            background-repeat: no-repeat; /* Prevent the image from repeating */
            background-position: center; /* Center the image within the button */
            
        }
        
        .donebut:hover {
            background-color: #0e7618;
            border-color: #1b1f2326;
            transition-duration: 0.1s;
        }
        
        
        
        .card-desc-nd-metadata {
            /* border: 1px solid white; */
            /* padding: 10px;
        margin: 10px; */
        
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            /* margin-left: 0.7vw;
        margin-right: 2vw; */
            width: 85%;
        
        }
        
        
        
        .desc-container {
            max-height: 80px;
            /* Set the initial max height of the container */
            overflow: hidden;
            /* Hide the overflowing content */
            transition: max-height 0.5s;
            /* Add transition to animate height changes */
            display: inline-block;
            /* Ensure the container takes only the content width */
        }
        
        .desc-container:hover {
            max-height: none;
            /* Allow the container to expand on hover */
        }
        
        .desc-content {
            /* Set the fixed width of the content */
            width: 100%;
            font-size: 16px;
            font-weight: 350;
            min-height: 5px;
            margin-top: 3px;
            border-radius: 7px;
            padding-left: 6px;
            /* padding-top: 10px; */
            /* Add your content styles here */
            white-space: nowrap;
            /* Prevent text from wrapping */
            overflow: hidden;
            /* Hide the overflowing text */
            text-overflow: ellipsis;
            /* Show "..." when text overflows */
            transition: overflow 0.5s;
            /* max-height: 80px; */
        }
        
        .desc-content:hover {
            overflow: visible;
            white-space: normal;
            word-wrap: break-word;
            /* max-height: none; */
        }
        
        
        /* ========================================= */
        
        /* Deprecated code */
        /* .card-desc{
        
            margin-top: 10px; 
            max-height: 120px;
            min-height: 30px;
            overflow-y: auto;
        
            border-radius: 7px;
            padding-left: 6px;
            padding-top: 10px;
        
            }
        
            .card-desc:hover{
                border-left: 2px solid  #1a1a1ab1;
                border-bottom: 2px solid  #1a1a1ab1;
            } */
        /* ========================================= */
        
        
        
        
        .bottom-metadata {
            /* border: 1px solid white; */
            /* padding: 10px;
        margin: 10px; */
        
            display: flex;
        
        }
        
        .task-type {
            /* border: 1px solid white; */
        
            font-size: smaller;
            /* border: 1px solid white; */
            border-radius: 6px;
            text-align: center;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 2px;
            /* padding: 10px;
        margin: 10px; */
        
        
            margin: 1vw;
            margin-right: 0.4vw;
            margin-left: 0.4vw;
        
        
        }
        
        
        .task-start-date {
            /* border: 1px solid white; */
            /* padding: 10px;
            margin: 10px; */
            background-color: #1a1a1a;
        
            margin: 1vw;
            margin-right: 0.4vw;
            margin-left: 0.4vw;
        
            font-size: smaller;
            /* border: 1px solid white; */
            border-radius: 6px;
            text-align: center;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 2px;
        }
        
        .task-category {
            /* border: 1px solid white; */
            /* padding: 10px;
        margin: 10px; */
        
            margin: 1vw;
            margin-right: 0.4vw;
            margin-left: 0.4vw;
        
            font-size: smaller;
            /* border: 1px solid white; */
            border-radius: 6px;
            text-align: center;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 2px;
        }
        
        
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
        
        
        
        
        /* Classes to assign colors during population */
        /* -------------------------------------------------------------- */
        
        .priority-red{
            background-color: #6e3630;
        }
        .priority-yellow{
            background-color: #89632a;
        }
        .priority-blue{
            background-color: #28456c;
        }
        /* == */
        .type-fixed{
            background-color: #2b593f;
        }
        .type-infinite{
            background-color: #89632a;
        }
        .type-schedule{
            background-color: #492f64;
        }
        .type-fixedndscheduled{
            background-color: #69314c;
        }
        /* == */
        
        %%category_classes_of_new_tab%%
        
        /* == */
        .priograd-purp{
            border: 3px solid rgb(90, 0, 138);
            background-color: rgba(40, 1, 63, 0.582);
        }
        .priograd-fire{
            /* STILL NEED TO WORK ON */
            border: 3px solid rgb(167, 0, 0);
            background-color: rgba(83, 15, 15, 0.614);
        }
        .priograd-red{
            border: 3px solid rgb(167, 0, 0);
            background-color: rgba(83, 15, 15, 0.614);
        }
        .priograd-orange{
            border: 3px solid #fc6a03;
            background-color: #6e2e00b4;
        }
        .priograd-yellow{
            border: 3px solid #ffd300;
            background-color: rgba(63, 64, 0, 0.71);
        }
        .priograd-green{
            border: 3px solid rgb(1, 146, 6);
            background-color: rgba(0, 46, 6, 0.457);
        }
        .priograd-grey{
            border: 3px solid rgb(94, 88, 88);
            background-color: rgba(20, 20, 20, 0.489);
        }
        /* == */
        .grayscale-container {
            filter: grayscale(90%); /* 100% makes the entire container grayscale */
          }
        
        
        /* -------------------------------------------------------------- */
        
        
        
        
        /* This class is applied to these classes:  .card-top-section .card-inner-title .top-metadata-holder .card-actual-body .card-desc-nd-metadata .card-desc .bottom-metadata .checkbox-div .buttons_holder */
        .tempclass {
            /* border: 1px solid white; */
            /* margin: 5px; */
        }
        
        
        
        
        `;    
        headTag.appendChild(styleElement1);


    }

    // write code to add header here
    const customHead = document.createElement('div');
    customHead.innerHTML = `
    <header class="sticky-header" role="banner" style="display: flex;justify-content: space-between;">
        <h1 class="h2 mb-3 headerr">My Dashboard</h1>
        <div style="display: flex;">
            <div style="margin-right: 15px;display: flex;">
                <div class="buttons_holder"><a href="%%gmail_you_want_to_link_to%%"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png?20221017173631" style="margin-top: 0.4vw;" alt="gmail"></a>
                </div>
                <div class="buttons_holder"><a href="%%gcal_i_want_to_link_to%%"><img
                            src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_31_2x.png" alt="gcal"></a></div>
            </div>
            <div style="text-align: right;font-size: large;">
                <p><span id="date"></span></p>
                <p><span id="time"></span></p>
            </div>
            <div class="button-container" style="align-items: right;margin-left: 40px;">
                <button class="undo-button button" id="undobutton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-undo">
                        <path d="M3 7v6h6" />
                        <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
                    </svg>
                </button>
            </div>
        </div>
    </header>
    `;

    var calendarContainer = document.querySelector('.NkK3Fc'); // Replace with the actual class of the container where you want to add your content
    if (calendarContainer) {
        calendarContainer.insertBefore(customHead, calendarContainer.firstChild);
    }

    // write code to add body here

    const customBody = document.createElement('div');
    customBody.style = "height: 100%;   ";
    customBody.innerHTML = `
    <div class="row box-contt" style="overflow-x:scroll;">
    <!-- ADD grayscale-container HERE 👇 -->
    <div class="bottom-non-sticky"style="display: flex;  flex-direction: row;width: 1700px;">
        <div class="col-10 col-lg-3">
            <div class="card card-border-primary">
                <div class="card-header">
                    <h5 class="card-title">🍂 Today's Deadlines 🍂</h5>
                    <h6 class="card-subtitle text-muted">A list of tasks with todays deadline </h6>
                </div>
                <div class="card-body p-3" id="todayDeadlineContainer">                               

                </div>
                <!-- <a href="#" class="btn btn-primary btn-block"
                    style="font-size: 40px;padding-top: 0;padding-bottom: 0;">⇧</a> -->
            </div>
        </div>
        <div class="col-10 col-lg-3">
            <div class="card card-border-success">
                <div class="card-header">
                    <h5 class="card-title">🍃 Weeks Deadlines 🍃</h5>
                    <h6 class="card-subtitle text-muted">This week in a nutshell</h6>
                </div>
                <div class="card-body p-3" id="weekDeadlineContainer">
                                       
                    
                </div>
            </div>
        </div>
        <div class="col-10 col-lg-3">
            <div>
                <!-- <div class="shlok" id="shlokContainer">
                    
                </div> -->
                
                <div id="chart"></div>                            
            </div>
            <div class="card card-border-secondary">
                <div class="card-header">
                    <h5 class="card-title">🌲 Deadlines this Month 🌲</h5>
                    <h6 class="card-subtitle text-muted" >Overview of the upcoming month</h6>
                </div>
                <div class="mini-card-body p-3" id="monthDeadlineContainer">
                    



                </div>
            </div>
        </div>
        <div class="col-10 col-lg-3">
            <div class="card card-border-success">
                <div class="card-header">
                    <h5 class="card-title">Assigned This Week</h5>
                    <h6 class="card-subtitle text-muted">No fixed deadline but preferably done this week</h6>
                   
                    <!-- This is actually just to maintain the width of the cards -->                                
                    <div class="width-maintainer " style="margin: 0px!important;height: 0px;">

                        <div class="card mb-3 bg-dark" style="visibility:hidden; user-select: none;height: 1px;width: 100%; ">
                            <div class="card-content-holder">
                                <div class="card-actual-body tempclass">
                                    <div class="card-desc-nd-metadata tempclass">

                                        <div class="desc-container">
                                            <div class="desc-content tempclass" style="height: 1px;"> 
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit. Error omnis rem dolor asperiores. Sit
                                                quod, qui distinctio neque reprehenderit id beatae, repudiandae
                                                molestiae alias recusandae tempore magni esse doloremque
                                                necessitatibus. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                                                                                              

                    </div>

                </div>
                <div class="card-body p-3" id="weekAssignedContainer">
                    

                </div>
            </div>
        </div>                      
        <div class="col-10 col-lg-3">
            <div>
                <div class="shlok" id="shlokContainer">
                    
                </div>
            </div>                        
            <div class="card card-border-secondary">
                <div class="card-header">
                    <h5 class="card-title">Assigned This Month</h5>
                    <h6 class="card-subtitle text-muted">No fixed deadline but preferably done this month</h6>


                </div>
                
                <div class="mini-card-body p-3" id="monthAssignedContainer">
                    

                </div>


            </div>
        </div>

        
    
    </div>
    

</div>
    `;
    var calendarContainer = document.querySelector('.K2fuAf'); // Replace with the actual class of the container where you want to add your content
    if (calendarContainer) {
        calendarContainer.insertBefore(customBody, calendarContainer.firstChild);
    }   
}



function showLiveDate() {
    var dateElement = document.getElementById("date");
    var timeElement = document.getElementById("time");

    function updateLiveDate() {
      var now = new Date();

      var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      var formattedDate = now.toLocaleDateString(undefined, options);

      var time = now.toLocaleTimeString();

      dateElement.textContent = formattedDate;
      timeElement.textContent = time;

      requestAnimationFrame(updateLiveDate); // Request next animation frame
    }

    updateLiveDate(); // Initial call to start updating the date, day, and time
  }

  function getRandomNumber(min, max) {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const random = Math.random();
  
    // Scale and shift the number to the desired range
    const randomNumber = Math.floor(random * (max - min + 1)) + min;
  
    return randomNumber;
  }

  function createCard(data,countervar, prioGradDict, prioDict, taskTypeDict, categoryDict) {
    var extractedTaskId = data[0]; 
    var extractedTaskTitle = data[1];
    var extractedDescription = data[2];
    var extractedTaskCategory = data[3];
    var extractedTaskType = data[4];
    var extractedPriority = data[5];


    var extractedDeadline = data[8];
    if(extractedDeadline ==""){
        extractedDeadline = "&nbsp - &nbsp";
    }else{
        extractedDeadlinearr = extractedDeadline.split(" ");
        extractedDeadline = String(extractedDeadlinearr[0])+"<br>"+String(extractedDeadlinearr[1])+" "+String(extractedDeadlinearr[2])+" "+String(extractedDeadlinearr[3]);
    }
    var extractedStartDate = data[9];
    if(extractedStartDate ==""){
        extractedStartDate = "&nbsp - &nbsp";
    }
    var extractedDuration = data[13];
    if(extractedDuration ==""){
        extractedDuration = "&nbsp - ";
    }
    var extractedPriogradCol = prioGradDict[data[16]];

    var extractedPriorityCol = prioDict[data[5]];
    var extractedTaskTypeCol = taskTypeDict[data[4]];
    var extractedCategoryCol = categoryDict[data[3]];



    var blockTemplate = `
        <div id="cardID${countervar}">
        <div class="card mb-3 bg-dark">
        <div class="task-nondisp-metadata">
            <!-- add id here 👇 🟠  -->
            <div class="taskid" id="taskID${countervar}">
                <!-- add taskid here 🟣  -->
                ${extractedTaskId}
            </div>
        </div>
        <!-- add priograd-class here 👇-->
        <div class="card-content-holder ${extractedPriogradCol}">
            <div class="card-top-section tempclass">
                <div class="card-snoozer tempclass">
                    <!-- add id here 👇 🟠  -->
                    <button class="snoozebut" id="snoozeBUT${countervar}">

                </div>
                <div class="card-inner-title tempclass">
                    <!-- add task title here 🟣 -->
                    ${extractedTaskTitle}
                </div>
                <div class="top-metadata-holder">
                    <div class="meta-wrapper tempclass">
                        <div class="deadline-box"> 
                            <!-- add deadline here 🟣 -->
                            ${extractedDeadline}
                        </div>
                        <div class="prio-dur-holder">
                            <!-- add priotity class here 👇 -->
                            <div class="priority-box ${extractedPriorityCol}">
                                <!-- add priority here 🟣 -->
                                ${extractedPriority}
                            </div>
                            <div class="duration-box">
                                <!-- add duration here 🟣 -->
                                ${extractedDuration} hr
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-actual-body tempclass">
                <div class="card-desc-nd-metadata tempclass">

                    <div class="desc-container">
                        <div class="desc-content tempclass"> 
                            <!-- add description here 🟣 -->
                            ${extractedDescription}
                        </div>
                    </div>

                    <div class="bottom-metadata tempclass">
                        <div class="task-start-date">
                            <!-- add start date here 🟣 -->
                            ${extractedStartDate}
                        </div>
                        <!-- add task type class here 👇 -->
                        <div class="task-type ${extractedTaskTypeCol}">
                            <!-- add task type here 🟣 -->
                            ${extractedTaskType}
                        </div>
                        <!-- add task category class here 👇 -->
                        <div class="task-category ${extractedCategoryCol}">
                            <!-- add task category here 🟣 -->
                            ${extractedTaskCategory}
                        </div>
                    </div>
                </div>
                <div class="checkbox-div tempclass">
                <!-- add id here 👇 🟠  -->                    
                    <button class="donebut" id="doneBUT${countervar}">


                </div>
            </div>
        </div>
        </div>   
        </div>
        `  
        ;

    return blockTemplate;
}


function doneButtonClick(event) {
    // Get the ID of the clicked button
    // console.log(event);

// provide an alert for the user to confirm the deletion
    
    if (confirm("Sure to delete task?")) {
    
    var clickedButtonId = event.target.id;
    // console.log("Clicked Button ID:", clickedButtonId);
    indexnum = clickedButtonId.split("~")[1]
    colname = clickedButtonId.split("~")[2]
    // console.log(indexnum,colname)

    taskidname = "taskID~"+indexnum+"~"+colname
    console.log(taskidname)
    var dataDiv = document.getElementById(taskidname);
    var dataToFetch = dataDiv.textContent.trim();


    var dataToSend = {
        sheetName: colname,
        searchValue: dataToFetch 
      };

    console.log(JSON.stringify(dataToSend))
    // Make a fetch call to an external API
    var delapiUrl = "%%task_deleter_endpoint%%";
    
    fetch(delapiUrl, {
        method: "POST", // Replace "POST" with the appropriate HTTP method for your API
        headers: {
        //   "Content-Type": "application/json", // Replace with the appropriate content type for your API
        },
        body: JSON.stringify(dataToSend), // Sending the data extracted from "dataDiv" to the API

      })
      .then(response => response.json())
      .then(data => {
        // Process the API response data
        console.log(data);
        if(data.status== "Task Deleted"){
            // write code to remove the task from the page 
            console.log(taskidname)
            var divToRemoveid = "cardID~"+indexnum+"~"+colname
            var divToRemove = document.getElementById(divToRemoveid);
            if (divToRemove) {
            divToRemove.remove();
            }
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch call
        console.error("Error fetching data:", error);
      });



    // Example: Hiding other buttons when a button is clicked
    // doneButtons.forEach(button => {
    //     if (button.id !== clickedButtonId) {
    //     button.style.display = "none";
    //     }
    // });
    } else {
        return;
    }
}


function snoozeButtonClick(event) {
    // Get the ID of the clicked button
    // console.log(event);

// provide an alert for the user to confirm the deletion
    
    if (confirm("Sure to snooze task?")) {
    
    var clickedButtonId = event.target.id;
    // console.log("Clicked Button ID:", clickedButtonId);
    indexnum = clickedButtonId.split("~")[1]
    colname = clickedButtonId.split("~")[2]
    // console.log(indexnum,colname)

    taskidname = "taskID~"+indexnum+"~"+colname
    console.log(taskidname)
    var dataDiv = document.getElementById(taskidname);
    var dataToFetch = dataDiv.textContent.trim();


    var dataToSend = {
        sheetName: colname,
        searchValue: dataToFetch 
      };

    console.log(JSON.stringify(dataToSend))
    // Make a fetch call to an external API
    var delapiUrl = "%%task_snoozer_endpoint%%";
    
    fetch(delapiUrl, {
        method: "POST", // Replace "POST" with the appropriate HTTP method for your API
        headers: {
        //   "Content-Type": "application/json", // Replace with the appropriate content type for your API
        },
        body: JSON.stringify(dataToSend), // Sending the data extracted from "dataDiv" to the API

      })
      .then(response => response.json())
      .then(data => {
        // Process the API response data
        console.log(data);
        if(data.status== "Task Snoozed"){
            // write code to remove the task from the page 
            console.log(taskidname)
            var divToRemoveid = "cardID~"+indexnum+"~"+colname
            var divToRemove = document.getElementById(divToRemoveid);
            if (divToRemove) {
            divToRemove.remove();
            }
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch call
        console.error("Error fetching data:", error);
      });



    // Example: Hiding other buttons when a button is clicked
    // doneButtons.forEach(button => {
    //     if (button.id !== clickedButtonId) {
    //     button.style.display = "none";
    //     }
    // });
    } else {
        return;
    }
}


// Remove the target section and add your custom content when the page is fully loaded
window.addEventListener('load', () => { 
// document.addEventListener('DOMContentLoaded', function() {    
    removeSection();
    addCustomContent();
    showLiveDate()

    var todaycardsContainer = document.getElementById("todayDeadlineContainer");

    var weekdeadcardsContainer = document.getElementById("weekDeadlineContainer");
    
    var monthdeadcardsContainer = document.getElementById("monthDeadlineContainer");
    
    var weekasgcardsContainer = document.getElementById("weekAssignedContainer");
    
    var monthasgcardsContainer = document.getElementById("monthAssignedContainer");
    
    var shlokContainer = document.getElementById("shlokContainer");
    


    const apiUrl = "%%dashboard_populator_endpoint%%"; 
        fetch(apiUrl, {
            method: "POST"
        })
        .then(response => response.json())
        .then(data => {


            // cardsContainer.textContent = data[0].sheetName;
            // cardsContainer.textContent = data[4].data;    

            var prioGradDict = {
                "-1": "priograd-purp",
                "0": "priograd-fire",
                "1": "priograd-red",
                "2": "priograd-orange",
                "3": "priograd-yellow",
                "4": "priograd-green",
                "5": "priograd-grey",
            };
            var prioDict = {
                "🔴": "priority-red",
                "🟡": "priority-yellow",
                "🔵": "priority-blue"
            }
            var taskTypeDict = {
                "Fixed": "type-fixed",
                "Infinite": "type-infinite",
                "Scheduled": "type-schedule",
                "Fixed & Scheduled": "type-fixedndscheduled"
            }
            var categoryDict = {
                %%category_classes_dictionary_of_new_tab%%
            }
        // Clear the existing cards if any
        todaycardsContainer.innerHTML = "";
            var actualData1 = data[0].data;
            var countervar =0;
            var collName = String(data[0].sheetName)
            // console.log(collName);
            actualData1.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement("div");
                tempContainer.innerHTML = card;

                todaycardsContainer.appendChild(tempContainer);
            })
        
        // Clear the existing cards if any
        weekdeadcardsContainer.innerHTML = "";        
            var actualData2 = data[1].data;
            var countervar =0;
            var collName = String(data[1].sheetName)
            // console.log(String(data[1].sheetName));
            actualData2.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement("div");
                tempContainer.innerHTML = card;

                weekdeadcardsContainer.appendChild(tempContainer);
            })        
            
        // Clear the existing cards if any
        monthdeadcardsContainer.innerHTML = "";
            var actualData3 = data[2].data;
            var countervar =0;
            var collName = String(data[2].sheetName)
            // console.log(collName);            
            actualData3.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement("div");
                tempContainer.innerHTML = card;

                monthdeadcardsContainer.appendChild(tempContainer);
            })      
            
            
        // Clear the existing cards if any
        weekasgcardsContainer.innerHTML = "";
            var actualData4 = data[3].data;
            var countervar =0;
            var collName = String(data[3].sheetName)
            // console.log(collName);            
            actualData4.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement("div");
                tempContainer.innerHTML = card;

                weekasgcardsContainer.appendChild(tempContainer);
            })
            
            
        // Clear the existing cards if any
        monthasgcardsContainer.innerHTML = "";
            var actualData5 = data[4].data;
            var countervar =0;
            var collName = String(data[4].sheetName)
            // console.log(collName);            
            actualData5.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement("div");
                tempContainer.innerHTML = card;

                monthasgcardsContainer.appendChild(tempContainer);
            })        
            ;       
            
            
        // console.log(actualData5)





// ====================================================================================================
    function generateUpcomingDaysObject() {
        var upcomingDays = [];
        var currentDate = new Date();

        
        for (var i = 0; i < 15; i++) {
            var dateString = currentDate.toISOString().substr(0, 10); // Get the date in "YYYY-MM-DD" format
            upcomingDays.push(dateString);
            currentDate.setDate(currentDate.getDate() +1); // Increment the date
        }
        
        return upcomingDays;
        }
        
        var upcomingDaysObject = generateUpcomingDaysObject();
        var redcount= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        var yellowcount= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        var bluecount= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        var totcount= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]          
    //   console.log(upcomingDaysObject);
    
    
    actualData1.forEach(item => {
        itsdate= item[8]
        itsdate=itsdate.split(" ")[1]+" "+itsdate.split(" ")[2]+" "+itsdate.split(" ")[3]        
        // should be 8 since its duedate
    
        var parts = itsdate.split(" ");
        var day = parseInt(parts[0]);
        var monthName = parts[1];
        var year = 2000+parseInt(parts[2]);
        
        var monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        
        var month = monthNames.indexOf(monthName);
        
        var dateObject = new Date(year, month, day);    
        
        var year = dateObject.getFullYear();
        var month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-indexed
        var day = dateObject.getDate().toString().padStart(2, "0");
        
        var formattedDate = year + "-" + month + "-" + day;    
        // i have found the formatted date here. now i need to append the counter to the index of the upcomingDaysObject in the red/yel/bluecount arrays
        var itemdateindx= upcomingDaysObject.indexOf(formattedDate);

        if (item[5]=="🔴"){
            // upcomingDaysObject[formattedDate][0] += 1;
            redcount[itemdateindx] += 1;
        } else if (item[5]=="🟡"){
            // upcomingDaysObject[formattedDate][1] += 1;
            yellowcount[itemdateindx] += 1;
        } else if (item[5]=="🔵"){
            // upcomingDaysObject[formattedDate][2] += 1;
            bluecount[itemdateindx] += 1;
        }

        totcount[itemdateindx] += 1;
        // upcomingDaysObject[formattedDate][0] += 1;

    })
        
    actualData2.forEach(item => {
        itsdate= item[8]
        itsdate=itsdate.split(" ")[1]+" "+itsdate.split(" ")[2]+" "+itsdate.split(" ")[3]
        // should be 8 since its duedate
    
        var parts = itsdate.split(" ");
        var day = parseInt(parts[0]);
        var monthName = parts[1];
        var year = 2000+parseInt(parts[2]);
        
        var monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        
        var month = monthNames.indexOf(monthName);
        
        var dateObject = new Date(year, month, day);    
        
        var year = dateObject.getFullYear();
        var month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-indexed
        var day = dateObject.getDate().toString().padStart(2, "0");
        
        var formattedDate = year + "-" + month + "-" + day;    
        // i have found the formatted date here. now i need to append the counter to the index of the upcomingDaysObject in the red/yel/bluecount arrays
        var itemdateindx= upcomingDaysObject.indexOf(formattedDate);

        if (item[5]=="🔴"){
            // upcomingDaysObject[formattedDate][0] += 1;
            redcount[itemdateindx] += 1;
        } else if (item[5]=="🟡"){
            // upcomingDaysObject[formattedDate][1] += 1;
            yellowcount[itemdateindx] += 1;
        } else if (item[5]=="🔵"){
            // upcomingDaysObject[formattedDate][2] += 1;
            bluecount[itemdateindx] += 1;
        }

        totcount[itemdateindx] += 1;
        // upcomingDaysObject[formattedDate][0] += 1;

    })

    actualData3.forEach(item => {
        itsdate= item[8]
        itsdate=itsdate.split(" ")[1]+" "+itsdate.split(" ")[2]+" "+itsdate.split(" ")[3]        
        // should be 8 since its duedate
        // console.log(itsdate)
        var parts = itsdate.split(" ");
        var day = parseInt(parts[0]);
        var monthName = parts[1];
        var year = 2000+parseInt(parts[2]);
        
        var monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        
        var month = monthNames.indexOf(monthName);
        
        var dateObject = new Date(year, month, day);    
        // console.log(dateObject)
        var year = dateObject.getFullYear();
        var month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-indexed
        var day = dateObject.getDate().toString().padStart(2, "0");
        
        var formattedDate = year + "-" + month + "-" + day;    
        // i have found the formatted date here. now i need to append the counter to the index of the upcomingDaysObject in the red/yel/bluecount arrays
        var itemdateindx= upcomingDaysObject.indexOf(formattedDate);
        // console.log(itemdateindx)
        // console.log(formattedDate)
        if (item[5]=="🔴"){
            // upcomingDaysObject[formattedDate][0] += 1;
            redcount[itemdateindx] += 1;
        } else if (item[5]=="🟡"){
            console.log("yellow")
            // upcomingDaysObject[formattedDate][1] += 1;
            yellowcount[itemdateindx] += 1;
        } else if (item[5]=="🔵"){
            // upcomingDaysObject[formattedDate][2] += 1;
            bluecount[itemdateindx] += 1;
        }

        totcount[itemdateindx] += 1;
        // upcomingDaysObject[formattedDate][0] += 1;

    })        



    // console.log(upcomingDaysObject);
    // console.log(redcount);
    console.log(yellowcount);
    // console.log(bluecount); 
// Get the container element where the chart will be rendered
var container = document.querySelector("#chart");

for (var i = 0; i < 15; i++) {
    var upcomingDaysObjectslice= upcomingDaysObject[i].split("-")[2];
    // console.log(upcomingDaysObjectslice);
    upcomingDaysObject[i]= upcomingDaysObjectslice;
    }


// Configure the ApexCharts options
var chartOptions = {
    chart: {
    type: "area",
    height: 205
    },
    series: [     
    {
        name: "",
        data: redcount.slice(0,11)
    },
    {
        name: "",
        data: yellowcount.slice(0,11)
    },
    {
        name: "",
        data: bluecount.slice(0,11)
    }
    
    ],
    xaxis: {
    categories: upcomingDaysObject.slice(0,11)
    },
    yaxis: {
    labels: {
        formatter: function (val) {
            return Math.round(val).toString(); // Format labels as rounded integers
        }
        }
    },
    dataLabels: {
    enabled: false // Disable data labels (coordinates)
    },
    colors: ["#FA4443", "#F9C80E", "#2983FF"],
    tooltip: {
    theme: "dark"
    }
};

// Create the ApexCharts instance
var chart = new ApexCharts(container, chartOptions);

// Render the chart
chart.render();

shlokContainer.innerHTML = "";

// extract the data from the api call put it in a variable shlok
        var dataaa = data[5]
        var shlok = dataaa.slok;
        shlokarr = shlok.split("|");
        shlok= shlokarr[0]+"|"+"<br>"+shlokarr[1]+"||"+shlokarr[3]+"||"+"<br><br>";
        meaning = dataaa.sankar.et;
        shlok= shlok+meaning;
        var tempContainer = document.createElement("div");
        tempContainer.innerHTML = shlok;
        shlokContainer.appendChild(tempContainer);






// ================================================================================================

        // convert the data into sorted stacked graph like system
        // 
        })
        .then(() => {

            // Get all elements with the class "donebut"
            var doneButtons = document.querySelectorAll(".donebut");

            // Add a unique event listener to each button
            doneButtons.forEach(button => {
            button.addEventListener("click", doneButtonClick);
            });

            // Get all elements with the class "donebut"
            var snoozeButtons = document.querySelectorAll(".snoozebut");

            // Add a unique event listener to each button
            snoozeButtons.forEach(button => {
            button.addEventListener("click", snoozeButtonClick);
            });            

        })
        .catch(error => console.error("Error fetching data:", error));
    
;

});