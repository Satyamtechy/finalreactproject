import React, { useEffect } from 'react' ;

const Blogsingle1=()=>{

    useEffect(()=>{
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-26575989-46', 'auto');
    ga('send', 'pageview');
    },[])


    return (
        <div>
        <style type="text/css">{`
        @charset "UTF-8";
        [ng\:cloak],
        [ng-cloak],
        [data-ng-cloak],
        [x-ng-cloak],
        .ng-cloak,
        .x-ng-cloak,
        .ng-hide:not(.ng-hide-animate) {
            display: none !important;
        }

        ng\:form {
            display: block;
        }

        .ng-animate-shim {
            visibility: hidden;
        }

        .ng-anchor {
            position: absolute;
        }
            `}
    </style>
        <div class="error" id="error">
            <div class="container">
                <div class="content centered"><img style="width:500px;" src="/htdocs_error/something-lost.png" />
                    <h1>Oops, looks like the page is lost.</h1>
                    <p style="font-size:22px;" class="sub-header text-block-narrow">This is not a fault, just an accident that was not intentional.</p>
                </div>
        </div>
        </div>
        </div>
    );
}

export default Blogsingle1;