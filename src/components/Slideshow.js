import React from 'react'

const Slideshow = () => {
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
                <div class="content centered"><img style={{width:"500px;"}} src="/htdocs_error/something-lost.png" />
                    <h1>Oops, looks like the page is lost.</h1>
                    <p style={{fontSize:"22px;"}} class="sub-header text-block-narrow">This is not a fault, just an accident that was not intentional.</p>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Slideshow
