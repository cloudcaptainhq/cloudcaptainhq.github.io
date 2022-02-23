$(document).ready(function () {
    $("a[href^=http]").each(function () {
        if (this.href.indexOf(location.hostname) == -1) {
            $(this).attr({
                target: "_blank",
                title: "Opens in a new window"
            });
        }
    });
    $(function () {
        $(window).scroll(function () {
            // global scroll to top button
            if ($(this).scrollTop() > 300) {
                $('.scrolltop').fadeIn();
            } else {
                $('.scrolltop').fadeOut();
            }
        });

        // scroll nav
        $('.scroller').click(function () {
            var section = $($(this).data("section"));
            var top = section.offset().top - 82;
            $("html, body").animate({scrollTop: top}, 700);
            return false;
        });


        $('.contact-form').submit(function (e) {
            $('#contact-confirm').modal('show');
        });

    });

    if (navigator.platform.indexOf('Win') == -1) {
        // Not windows
        // Fix line continuation marks
        $("pre.console").html(function () {
            return $(this).html().replace(/\^\n/g, "\\\n");
        });
        // And prompt char
        $("pre.console span.os").html(function () {
            return $(this).html().replace("del", "rm");
        });
        // And prompt char
        $("pre.console>span").html(function () {
            return $(this).html().replace("&gt;", "$");
        });
    }

    $(function () {
        prettyPrint();
    });

    $("h2[id],h3[id]").click(function () {
        window.location.hash = $(this).attr("id");
    });
    $("tr[id]>td:first-child").click(function () {
        window.location.hash = $(this).parent().attr("id");
    });
});