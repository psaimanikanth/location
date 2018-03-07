function setIntro() {
    $("#nav").hide(), $("#nav").fadeIn("slow"), $("#homeSloganCreate").textillate({
        delayScale: 0,
        initialDelay: 200,
        "in": {
            effect: "fadeIn"
        },
        callback: function() {
            $("#homeSloganShare").css("opacity", 1), $(".flower").css("display", "block"), animateFlowers()
        }
    })
}

function setFlowerRandomNumber() {
    return randomNumber = Number((2 * Math.random() - 1).toFixed(2)), randomNumber
}

function animateFlowers() {
    0 == sampleBeingDisplayed && 0 == cpBeingDisplayed && $.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], function(a, b) {
        rotateFlower("flower" + b, 1, setFlowerRandomNumber(), setFlowerRandomNumber(), setFlowerRandomNumber(), $("#flower" + b).position().left, $("#flower" + b).position().top)
    })
}

function pauseFlowers() {
    for (var a = 0; a < flowerTimers.length; a++) clearTimeout(flowerTimers[a])
}

function rotateFlower(a, b, c, d, e, f, g) {
    {
        var h = $(window).width(),
            i = $(window).height(),
            j = $("#" + a).width(),
            k = $("#" + a).height();
        $("#" + a).height()
    }
    if (f >= h - j && d >= 0 ? d = -1 * d : 0 >= f && 0 >= d && (d = -1 * d), g >= i - k && e >= 0 ? e = -1 * e : 0 >= g && 0 >= e && (e = -1 * e), $("#" + a).css("left", f + d + "px"), f += d, $("#" + a).css("top", g + e + "px"), g += e, $("#" + a).css({
            transform: "rotate(" + b + "deg)",
            MozTransform: "rotate(" + b + "deg)",
            WebkitTransform: "rotate(" + b + "deg)",
            msTransform: "rotate(" + b + "deg)"
        }), b += c, 100 > flowerAnimationSpeed) {
        $("#" + a).css("width", $("#" + a).width() + 5), $("#" + a).css("height", $("#" + a).height() + 5), flowerAnimationSpeed += .005;
        var l = setTimeout(function() {
            rotateFlower(a, b, c, d, e, f, g)
        }, flowerAnimationSpeed);
        flowerTimers.push(l)
    }
}

function backToJoinStep1() {
    $("#joinForm").unbind("submit"), $("#joinForm").find(".errorLabel").remove(), $(".joinStep2").remove(), $(".joinStep2b").remove(), $(".joinStep1").show(), $("#joinForm").submit(submitJoinStep1), $("#joinEmailInput").focus()
}

function backToJoinStep2() {
    $("#joinForm").unbind("submit"), $("#joinForm").find(".errorLabel").remove(), $(".joinStep3").remove(), $(".joinStep2").show(), $("#joinForm").submit(submitJoinStep2), $("#joinBrideFirstName").focus()
}

function backToJoinStep3() {
    $("#joinForm").unbind("submit"), $("#joinForm").find(".errorLabel").remove(), $(".joinStep4").remove(), $(".joinStep3").show(), $("#joinForm").submit(submitJoinStep3), $("#joinWedsiteDomain").focus()
}

function goToJoin() {}

function goToJoinChangeCoupleTitles() {
    $(".joinStep2").hide(), $(".joinStep2b").show()
}

function submitJoinChangeCoupleTitles() {
    $("#joinBrideFirstNameLabel").html($("#joinBrideTitle").val() + "&#39;s first name:"), $("#joinBrideLastNameLabel").html($("#joinBrideTitle").val() + "&#39;s last name:"), $("#joinGroomFirstNameLabel").html($("#joinGroomTitle").val() + "&#39;s first name:"), $("#joinGroomLastNameLabel").html($("#joinGroomTitle").val() + "&#39;s last name:"), $("#joinGoToChangeCoupleTitles").html("change &quot;" + $("#joinBrideTitle").val() + " &amp; " + $("#joinGroomTitle").val() + "&quot;"), $(".joinStep2b").hide(), $(".joinStep2").show(), $("#joinBrideFirstName").focus()
}

function submitJoinStep1(a) {
    $("#joinForm").find(".errorLabel").remove(), $.post(versionFolder + "forms/join.php", $(this).serialize(), function(a) {
        if ("toStep2" == a) {
            $("#joinForm").unbind("submit"), $(".joinStep1").hide();
            var b = '<label class="joinInstruction joinStep2">Please enter the couple&#39;s names.</label>';
            b += '<label id="joinBrideFirstNameLabel" for="joinBrideFirstName" class="joinStep2">bride&#39;s first name:</label>', b += '<input type="text" id="joinBrideFirstName" class="joinInput joinStep2" name="joinBrideFirstName" maxlength="30" required>', b += '<label id="joinBrideLastNameLabel" for="joinBrideLastName" class="joinStep2">bride&#39;s last name:</label>', b += '<input type="text" id="joinBrideLastName" class="joinInput joinStep2" name="joinBrideLastName" maxlength="30">', b += '<label id="joinGroomFirstNameLabel" for="joinGroomFirstName" class="joinStep2">groom&#39;s first name:</label>', b += '<input type="text" id="joinGroomFirstName" class="joinInput joinStep2" name="joinGroomFirstName" maxlength="30" required>', b += '<label id="joinGroomLastNameLabel" for="joinGroomLastName" class="joinStep2">groom&#39;s last name:</label>', b += '<input type="text" id="joinGroomLastName" class="joinInput joinStep2" name="joinGroomLastName" maxlength="30">', b += '<label class="joinInstruction joinStep2b">Please select the titles that you would like us to use on our forms (You will be able to edit all the page and chapter names as you wish).</label>', b += '<div id="joinCoupleTitlesDiv" class="joinStep2b">', b += '<select id="joinBrideTitle" class="joinSelectTitle" name="joinBrideTitle">', b += '<option value="bride">Bride</option>', b += '<option value="groom">Groom</option>', b += '<option value="spouse A">Spouse A</option>', b += "</select>", b += "<label>&amp;</label>", b += '<select id="joinGroomTitle" class="joinSelectTitle" name="joinGroomTitle">', b += '<option value="groom">Groom</option>', b += '<option value="bride">Bride</option>', b += '<option value="spouse B">Spouse B</option>', b += "</select></div>", b += '<button id="joinBackToStep1Button" class="button rectangleButton joinButton joinBackButton joinStep2" type="button"><i class="icon fa fa-step-backward"></i> back</button>', b += '<button class="button rectangleButton joinButton joinStep2" name="joinSubmit" value="submit"><i id="joinSubmitButtonIcon" class="icon fa fa-step-forward"></i> next</button>', b += '<label id="joinGoToChangeCoupleTitles" class="joinStep2 joinChangeTitlesToggle">change "Bride & Groom"</label>', b += '<button id="joinSubmitChangeCoupleTitlesButton" class="button rectangleButton joinButton joinStep2b" type="button"><i class="icon fa fa-step-backward"></i> back to selecting couple&#39;s names</button>', $("#joinPasswordConfirmInput").after(b), $(".joinStep2b").hide(), $("#joinGoToChangeCoupleTitles").click(goToJoinChangeCoupleTitles), $("#joinSubmitChangeCoupleTitlesButton").click(submitJoinChangeCoupleTitles), $("#joinBackToStep1Button").click(backToJoinStep1), $("#joinForm").submit(submitJoinStep2), $("#joinBrideFirstName").focus()
        } else $(a).find(".errorLabel").length > 0 && ($(a).find(".emailError").length > 0 && $("#joinEmailInput").before($(a).find(".emailError")[0]), $(a).find(".passwordError").length > 0 && $("#joinPasswordInput").before($(a).find(".passwordError")[0]), $(a).find(".passwordConfirmError").length > 0 && $("#joinPasswordConfirmInput").before($(a).find(".passwordConfirmError")[0]))
    }), a.preventDefault()
}

function submitJoinStep2(a) {
    $("#joinForm").find(".errorLabel").remove(), $.post(versionFolder + "forms/join.php", $(this).serialize(), function(a) {
        if ("toStep3" == a) {
            $("#joinForm").unbind("submit"), $(".joinStep2").hide();
            var b = '<label class="joinInstruction joinStep3">Please select a domain name.</label>';
            b += '<div id="joinWedsiteDomainDiv" class="joinStep3"><label>www.</label>', b += '<input type="text" id="joinWedsiteDomain" class="joinWedsiteDomainInput joinStep3" name="joinWedsiteDomain" maxlength="60" required>', b += "<label>.wedsite.com</label></div>", b += '<button id="joinBackToStep2Button" class="button rectangleButton joinButton joinBackButton joinStep3" type="button"><i class="icon fa fa-step-backward"></i> back</button>', b += '<button class="button rectangleButton joinButton joinStep3" name="joinSubmit" value="submit"><i id="joinSubmitButtonIcon" class="icon fa fa-step-forward"></i> next</button>', $("#joinGroomLastName").after(b), $("#joinBackToStep2Button").click(backToJoinStep2), $("#joinForm").submit(submitJoinStep3), $("#joinWedsiteDomain").focus()
        } else $(a).find(".errorLabel").length > 0 && ($(a).find(".brideFirstNameError").length > 0 && $("#joinBrideFirstNameInput").before($(a).find(".brideFirstNameError")[0]), $(a).find(".brideLastNameError").length > 0 && $("#joinBrideLastNameInput").before($(a).find(".brideLastNameError")[0]), $(a).find(".groomFirstNameError").length > 0 && $("#joinGroomFirstNameInput").before($(a).find(".groomFirstNameError")[0]), $(a).find(".groomLastNameError").length > 0 && $("#joinGroomLastNameInput").before($(a).find(".groomLastNameError")[0]))
    }), a.preventDefault()
}

function submitJoinStep3(a) {
    $("#joinForm").find(".errorLabel").remove(), $.post(versionFolder + "forms/join.php", $(this).serialize(), function(a) {
        if (a.indexOf("WEDSITE.COM TERMS OF USE") >= 0) {
            $("#joinForm").unbind("submit"), $(".joinStep3").hide();
            var b = '<label class="joinInstruction joinStep4">Please read and confirm your acceptance of Wedsite.com&#39;s policies.</label>';
            b += '<div id="joinTerms" class="joinStep4">' + a + "</div>", b += '<div id="joinAcceptTermsDiv"><input type="checkbox" class="joinAcceptTermsInput joinStep4" name="joinAcceptTerms" value="true" required>', b += '<label class="joinStep4">I accept Wedsite.com&#39;s Terms of Use Agreement</label></div>', b += '<button id="joinBackToStep3Button" class="button rectangleButton joinButton joinBackButton joinStep4" type="button"><i class="icon fa fa-step-backward"></i> back</button>', b += '<button class="button rectangleButton joinButton joinStep4" name="joinSubmit" value="submit"><i id="joinSubmitButtonIcon" class="icon fa fa-sign-in"></i> create wedsite</button>', $("#joinWedsiteDomainDiv").after(b), $("#joinBackToStep3Button").click(backToJoinStep3), $("#joinForm").submit(submitJoinStep4)
        } else $(a).find(".errorLabel").length > 0 && $(a).find(".wedsiteDomainError").length > 0 && $("#joinWedsiteDomainDiv").before($(a).find(".wedsiteDomainError")[0])
    }), a.preventDefault()
}

function submitJoinStep4(a) {
    $("#joinForm").find(".errorLabel").remove();
    var b = $(".backgroundIMGActive").attr("src"),
        c = b.split("index.html")[b.split("index.html").length - 1],
        d = c.split(".")[0],
        e = $(".designIMGActive").attr("src"),
        f = e.split("index.html")[e.split("index.html").length - 1],
        g = f.split(".")[0];
    $.post(versionFolder + "forms/join.php", $(this).serialize() + "&joinBackground=" + d + "&joinDesign=" + g, function(a) {
        if ("cp.php" == a) {
            var b = document.createElement("form"),
                c = document.createElement("input");
            c.type = "text", c.name = "log1", c.value = $("#joinEmailInput").val(), b.appendChild(c);
            var d = document.createElement("input");
            c.type = "hidden", d.name = "log2", d.value = $("#joinPasswordInput").val(), b.appendChild(d), b.action = versionFolder + "cp.php", b.method = "post", $(document.body).append(b), b.submit()
        } else $(a).find(".errorLabel").length > 0 && $(a).find(".acceptTermsError").length > 0 && $("#joinAcceptTermsDiv").before($(a).find(".acceptTermsError")[0])
    }), a.preventDefault()
}

function setWedsiteComListeners() {
    $(".backgroundColorPick").click(Designs.pickBackgroundColor), $(".backgroundIMG").click(Designs.selectBackground), $(".designColorPick").click(Designs.pickDesignColor), $(".designIMG").click(Designs.selectDesign), $("#featuresControlBack").click(function() {
        $.fn.fullpage.moveSlideLeft()
    }), $("#featuresControlNext").click(function() {
        $.fn.fullpage.moveSlideRight()
    }), $("#fullpage").fullpage({
        anchors: ["home", "sample", "designs", "info", "login", "join"],
        controlArrows: !1,
        loopBottom: !0,
        loopTop: !0,
        loopHorizontal: !0,
        fixedElements: "#navContainerTop, #cpContent",
        normalScrollElements: ".infoTextContainer, .pageContent, .map, .backgroundPhotoCanvas",
        normalScrollElementTouchThreshold: 10,
        afterLoad: function(a) {
            "login" == a ? $("#loginEmailInput").focus() : "join" == a && $("#joinEmailInput").focus()
        },
        afterSlideLoad: function(a, b, c, d) {
            4 == b && ($(".infoLink").removeClass("infoLinkActive"), $(".infoLinkTwo").removeClass("infoLinkActive"), "pricing" == c ? ($("#pricingLink").addClass("infoLinkActive"), $("#featuresControls").fadeOut("slow")) : "faq" == c ? ($("#faqLink").addClass("infoLinkActive"), $("#featuresControls").fadeOut("slow")) : "find" == c ? ($("#findWedsiteLink").addClass("infoLinkActive"), $("#featuresControls").fadeOut("slow")) : "dir" == c ? ($("#directoryLink").addClass("infoLinkActive"), $("#featuresControls").fadeOut("slow")) : ($("#featuresLink").addClass("infoLinkActive"), $("#featuresControls").fadeIn("slow")), 12 > d ? $("#infoVideo").attr("src", "/images/highlights/" + d + ".gif") : $("#infoVideo").attr("src", "images/highlights/0.gif"))
        },
        onLeave: function(a, b) {
            switch ($(".navLink").removeClass("navLinkActive"), $(".navLink").addClass("navLinkInactive"), 1 != b ? $("#navContainerTop").fadeIn("slow", function() {
                1 == a && ($("#nav").hide(), $("#nav").prependTo("#navContainerTopRight"), $("#nav").fadeIn("slow"))
            }) : $("#navContainerTop").fadeOut("slow", function() {
                $("#nav").hide(), $("#nav").prependTo("#navContainerCenter"), $("#nav").fadeIn("slow")
            }), b) {
                case 2:
                    sampleBeingDisplayed = !0, pauseFlowers(), 0 == sampleLoaded && (sampleLoaded = !0), $("#linkSample").addClass("navLinkActive"), $("#linkSample").removeClass("navLinkInactive");
                    break;
                case 3:
                    $("#linkDesigns").addClass("navLinkActive"), $("#linkDesigns").removeClass("navLinkInactive");
                    break;
                case 4:
                    $("#linkInfo").addClass("navLinkActive"), $("#linkInfo").removeClass("navLinkInactive");
                    break;
                case 5:
                    Login.goToLogin(), $("#linkLogin").addClass("navLinkActive"), $("#linkLogin").removeClass("navLinkInactive");
                    break;
                case 6:
                    goToJoin()
            }
            2 == a && (sampleBeingDisplayed = !1, animateFlowers())
        }
    })
}

function submitVisitorPassword(a) {
    $(".visitorPasswordError").remove(), $.post(versionFolder + "forms/visitorpassword.php", $(this).serialize(), function(a) {
        "success" == a ? location.reload() : $(a).find(".visitorPasswordError").length > 1 ? ($("#visitorPasswordForm").before($(a).find(".visitorPasswordError")[0]), $("#visitorPasswordForm").before($(a).find(".visitorPasswordError")[1]), $("#visitorPasswordInput").val("")) : (alert("Your password does not match our records. Please try again or contact the wedsite's owner."), $("#visitorPasswordInput").val(""))
    }), a.preventDefault()
}
var Designs = {
        pickBackgroundColor: function() {
            $(".backgroundIMGActive").attr("src", "/images/backgrounds/previews/" + $(this).attr("id").split("backgroundColor").pop() + ".jpg"), $("#designsInstruction").show(100)
        },
        pickDesignColor: function() {
            $(".designIMGActive").attr("src", "/images/sample/cover/" + $(this).attr("id").split("designColor").pop() + ".jpg");
            for (var a = $(".designIMGActive").attr("class").split(" "), b = 0; b < a.length; b++)
                if (0 == a[b].indexOf("designColor")) var c = a[b];
            for (var a = $(this).attr("class").split(" "), b = 0; b < a.length; b++)
                if (0 == a[b].indexOf("designColor")) var d = a[b];
            $(".designIMGActive").attr("class", $(".designIMGActive").attr("class").replace(c, d)), $("#designsInstruction").show(100)
        },
        selectBackground: function() {
            if ($(event.target).hasClass("backgroundIMGPrev") || $(event.target).hasClass("backgroundIMGNext")) {
                var a = 160;
                if ($(window).width() > $(window).height())
                    if ($(window).width() < sizeX7 || $(window).height() < sizeY7) var b = .6 * a + "px";
                    else if ($(window).width() < sizeX8 || $(window).height() < sizeY8) var b = .7 * a + "px";
                else if ($(window).width() < sizeX9 || $(window).height() < sizeY9) var b = .8 * a + "px";
                else if ($(window).width() < sizeX10 || $(window).height() < sizeY10) var b = .9 * a + "px";
                else if ($(window).width() < sizeX11 || $(window).height() < sizeY11) var b = a + "px";
                else if ($(window).width() < sizeX12 || $(window).height() < sizeY12) var b = 1.1 * a + "px";
                else if ($(window).width() < sizeX13 || $(window).height() < sizeY13) var b = 1.2 * a + "px";
                else if ($(window).width() < sizeX14 || $(window).height() < sizeY8) var b = 1.3 * a + "px";
                else var b = 1.4 * a + "px";
                else if ($(window).width() < sizeY7 || $(window).height() < sizeX7) var b = .6 * a + "px";
                else if ($(window).width() < sizeY8 || $(window).height() < sizeX8) var b = .7 * a + "px";
                else if ($(window).width() < sizeY9 || $(window).height() < sizeX9) var b = .8 * a + "px";
                else if ($(window).width() < sizeY10 || $(window).height() < sizeX10) var b = .9 * a + "px";
                else if ($(window).width() < sizeY11 || $(window).height() < sizeX11) var b = a + "px";
                else if ($(window).width() < sizeY12 || $(window).height() < sizeX12) var b = 1.1 * a + "px";
                else if ($(window).width() < sizeY13 || $(window).height() < sizeX13) var b = 1.2 * a + "px";
                else if ($(window).width() < sizeY14 || $(window).height() < sizeX8) var b = 1.3 * a + "px";
                else var b = 1.4 * a + "px";
                $(event.target).hasClass("backgroundIMGPrev") ? $("#backgroundsContainer").animate({
                    top: "+=" + b
                }, 200, function() {
                    $("#backgroundsContainer img:last-child").addClass("backgroundIMGPrev"), $("#backgroundsContainer img:last-child").removeClass("backgroundIMGNext"), $("#backgroundsContainer img:last-child").prependTo("#backgroundsContainer"), $("#backgroundsContainer").css("top", "50%"), $("#backgroundsContainer img:nth-child(6)").addClass("backgroundIMGActive"), $("#backgroundsContainer img:nth-child(6)").removeClass("backgroundIMGInactive"), $("#backgroundsContainer img:nth-child(6)").removeClass("backgroundIMGPrev"), $("#backgroundsContainer img:nth-child(7)").addClass("backgroundIMGInactive"), $("#backgroundsContainer img:nth-child(7)").addClass("backgroundIMGNext"), $("#backgroundsContainer img:nth-child(7)").removeClass("backgroundIMGActive"), $(".backgroundColorsContainer").fadeOut("slow");
                    for (var a = $(".backgroundIMGActive").attr("class").split(" "), b = 0; b < a.length; b++)
                        if (0 == a[b].indexOf("backgroundIMGCategory")) var c = "#backgroundColorsContainer" + a[b].split("backgroundIMGCategory").pop();
                    $(c).fadeIn()
                }) : $(event.target).hasClass("backgroundIMGNext") && $("#backgroundsContainer").animate({
                    top: "-=" + b
                }, 200, function() {
                    $("#backgroundsContainer img:first-child").addClass("backgroundIMGNext"), $("#backgroundsContainer img:first-child").removeClass("backgroundIMGPrev"), $("#backgroundsContainer img:first-child").appendTo("#backgroundsContainer"), $("#backgroundsContainer").css("top", "50%"), $("#backgroundsContainer img:nth-child(5)").addClass("backgroundIMGInactive"), $("#backgroundsContainer img:nth-child(5)").addClass("backgroundIMGPrev"), $("#backgroundsContainer img:nth-child(5)").removeClass("backgroundIMGActive"), $("#backgroundsContainer img:nth-child(6)").addClass("backgroundIMGActive"), $("#backgroundsContainer img:nth-child(6)").removeClass("backgroundIMGInactive"), $("#backgroundsContainer img:nth-child(6)").removeClass("backgroundIMGNext"), $(".backgroundColorsContainer").fadeOut("slow");
                    for (var a = $(".backgroundIMGActive").attr("class").split(" "), b = 0; b < a.length; b++)
                        if (0 == a[b].indexOf("backgroundIMGCategory")) var c = "#backgroundColorsContainer" + a[b].split("backgroundIMGCategory").pop();
                    $(c).fadeIn()
                })
            }
            $("#designsInstruction").show(100)
        },
        selectDesign: function() {
            if ($(event.target).hasClass("designIMGPrev") || $(event.target).hasClass("designIMGNext")) {
                var a = 140;
                if ($(window).width() > $(window).height())
                    if ($(window).width() < sizeX7 || $(window).height() < sizeY7) var b = .6 * a + "px";
                    else if ($(window).width() < sizeX8 || $(window).height() < sizeY8) var b = .7 * a + "px";
                else if ($(window).width() < sizeX9 || $(window).height() < sizeY9) var b = .8 * a + "px";
                else if ($(window).width() < sizeX10 || $(window).height() < sizeY10) var b = .9 * a + "px";
                else if ($(window).width() < sizeX11 || $(window).height() < sizeY11) var b = a + "px";
                else if ($(window).width() < sizeX12 || $(window).height() < sizeY12) var b = 1.1 * a + "px";
                else if ($(window).width() < sizeX13 || $(window).height() < sizeY13) var b = 1.2 * a + "px";
                else if ($(window).width() < sizeX14 || $(window).height() < sizeY8) var b = 1.3 * a + "px";
                else var b = 1.4 * a + "px";
                else if ($(window).width() < sizeY7 || $(window).height() < sizeX7) var b = .6 * a + "px";
                else if ($(window).width() < sizeY8 || $(window).height() < sizeX8) var b = .7 * a + "px";
                else if ($(window).width() < sizeY9 || $(window).height() < sizeX9) var b = .8 * a + "px";
                else if ($(window).width() < sizeY10 || $(window).height() < sizeX10) var b = .9 * a + "px";
                else if ($(window).width() < sizeY11 || $(window).height() < sizeX11) var b = a + "px";
                else if ($(window).width() < sizeY12 || $(window).height() < sizeX12) var b = 1.1 * a + "px";
                else if ($(window).width() < sizeY13 || $(window).height() < sizeX13) var b = 1.2 * a + "px";
                else if ($(window).width() < sizeY14 || $(window).height() < sizeX8) var b = 1.3 * a + "px";
                else var b = 1.4 * a + "px";
                $(event.target).hasClass("designIMGPrev") ? $("#designsContainer").animate({
                    left: "+=" + b
                }, 300, function() {
                    $("#designsContainer img:last-child").addClass("designIMGPrev"), $("#designsContainer img:last-child").removeClass("designIMGNext"), $("#designsContainer img:last-child").prependTo("#designsContainer"), $("#designsContainer").css("left", "50%"), $("#designsContainer img:nth-child(11)").addClass("designIMGActive"), $("#designsContainer img:nth-child(11)").removeClass("designIMGInactive"), $("#designsContainer img:nth-child(11)").removeClass("designIMGPrev"), $("#designsContainer img:nth-child(12)").addClass("designIMGInactive"), $("#designsContainer img:nth-child(12)").addClass("designIMGNext"), $("#designsContainer img:nth-child(12)").removeClass("designIMGActive"), $(".designColorsContainer").fadeOut("slow");
                    for (var a = $(".designIMGActive").attr("class").split(" "), b = 0; b < a.length; b++)
                        if (0 == a[b].indexOf("designIMGCategory")) var c = "#designColorsContainer" + a[b].split("designIMGCategory").pop();
                    $(c).fadeIn()
                }) : $(event.target).hasClass("designIMGNext") && $("#designsContainer").animate({
                    left: "-=" + b
                }, 300, function() {
                    $("#designsContainer img:first-child").addClass("designIMGNext"), $("#designsContainer img:first-child").removeClass("designIMGPrev"), $("#designsContainer img:first-child").appendTo("#designsContainer"), $("#designsContainer").css("left", "50%"), $("#designsContainer img:nth-child(10)").addClass("designIMGInactive"), $("#designsContainer img:nth-child(10)").addClass("designIMGPrev"), $("#designsContainer img:nth-child(10)").removeClass("designIMGActive"), $("#designsContainer img:nth-child(11)").addClass("designIMGActive"), $("#designsContainer img:nth-child(11)").removeClass("designIMGInactive"), $("#designsContainer img:nth-child(11)").removeClass("designIMGNext"), $(".designColorsContainer").fadeOut("slow");
                    for (var a = $(".designIMGActive").attr("class").split(" "), b = 0; b < a.length; b++)
                        if (0 == a[b].indexOf("designIMGCategory")) var c = "#designColorsContainer" + a[b].split("designIMGCategory").pop();
                    $(c).fadeIn()
                }), $("#designsInstruction").show(100)
            } else if ($(event.target).hasClass("designIMGActive")) {
                var c = $(".backgroundIMGActive").attr("src"),
                    d = c.split("index.html")[c.split("index.html").length - 1],
                    e = d.split(".")[0],
                    f = $(".designIMGActive").attr("src"),
                    g = f.split("index.html")[f.split("index.html").length - 1],
                    h = g.split(".")[0];
                Tools.isWedsiteCom() ? (Designs.updateStyles(h, e), document.location.href = "#sample") : Tools.isCP() && DesignCP.updateDesign(h, e), $("#designsInstruction").hide(100)
            }
        },
        updateStyles: function(a, b) {
            for (var c = $(".designIMGActive").attr("class").split(" "), d = 0; d < c.length; d++)
                if (0 == c[d].indexOf("designColor")) var e = "#" + c[d].split("designColor").pop();
            $("#dynamicStyles").detach(), $(".bookCover").css("background-image", 'url("/images/designs/coverimages/cover' + $("#navIconPreview").attr("data-wedsitedomain") + ".jpg?" + (new Date).getTime() + '")');
            var f = '<style id="dynamicStyles">';
            f += " a, a:visited, a:hover, a:active {color: " + e + ";}", f += ' .background {background-image: url("../' + b + '.jpg");}', f += ' .bookCoverSample {background-image: url("../' + a + '.jpg");}', f += " #bottomTools #countdown {border: 1px solid " + e + ";}", f += " #bottomTools #musicPlayer {border: 1px solid " + e + ";}", f += " button {background: " + e + "; background: linear-gradient(150deg, #ffffff, " + e + ", " + e + "); border: 1px outset " + e + ";}", f += " button:hover {background: " + e + "; background: linear-gradient(150deg, #ffffff, " + e + ");}", f += " .closeWindowIcon:hover {color: " + e + ";}", f += " .iconButton:hover {color: " + e + ";}", f += " input[type=password] {border: 1px solid " + e + ";}", f += " input[type=password]:focus {outline-color: " + e + ";}", f += " input[type=text] {border: 1px solid " + e + ";}", f += " input[type=text]:focus {outline-color: " + e + ";}", f += ' .insideCover {background-image: url("../images/designs/insidecover/' + a + '.jpg");}', f += ' .leftPage {background-image: url("../images/designs/leftpage/' + a + '.png");}', f += " .pageSection:not(:last-child) {border-bottom: 1px solid " + e + ";}", f += ' .rightPageNoTitle {background-image: url("../images/designs/rightpage/' + a + '.png");}', f += ' .rightPageWithTitle {background-image: url("../images/designs/rightpagewithtitle/' + a + '.png");}', f += " select {border: 1px solid " + e + ";}", f += " select:focus {outline-color: " + e + ";}", f += " textarea {border: 1px solid " + e + ";}", f += " textarea:focus {outline-color: " + e + ";}", f += " .ui-datepicker th {color: " + e + ";}", f += " .ui-tooltip {background-color: " + e + ";}", f += " .weddingColorBackground {background-color: " + e + " !important}", f += " .weddingColorBackgroundHover:hover {background-color: " + e + " !important}", f += " .weddingColorBorder {border-color: " + e + " !important}", f += " .weddingColorBorder {border-style: solid !important}", f += " .weddingColorContent {color: " + e + " !important}", f += " .weddingColorContentHover:hover {color: " + e + " !important}", f += ' @media (orientation: portrait) {.leftPage {background-image: url("../images/designs/toppage/' + a + '.png")}.rightPageNoTitle {background-image: url("../images/designs/bottompage/' + a + '.png")}.rightPageWithTitle {background-image: url("../images/designs/bottompagewithtitle/' + a + '.png")}};', f += " </style>", $("head").append(f)
        }
    },
    Login = {
        goToForgotYourPassword: function() {
            Modal.createErrorWindow("This option is currently disabled while it undergoes maintenance.", "NOT AVAILABLE")
        },
        goToLogin: function() {
            if ($(0 == "#loginForm".length)) {
                $("#loginFormDiv").empty();
                var a = '<label id="loginFormTitle">LOG IN</label>';
                $("#loginFormDiv").append(a);
                var b = '<form id="loginForm" class="loginForm">';
                b += '<label id="loginInstruction">Registered users log in here.</label>', b += '<label for="loginEmailInput">email:</label>', b += '<input type="email" id="loginEmailInput" name="loginEmail" required>', b += '<label for="loginPasswordInput">password:</label>', b += '<input type="password" id="loginPasswordInput" name="loginPassword" value="" maxlength="20" required>', b += '<button id="loginSubmitButton" class="button rectangleButton" name="loginSubmit" value="submit"><i class="icon fa fa-sign-in"></i> log in</button>', b += '<label id="loginForgotYourPassword" class="loginResetToggle">forgot your password?</label>', b += "</form>", $("#loginFormDiv").append(b), $("#loginForgotYourPassword").click(Login.goToForgotYourPassword), $("#loginForm").submit(Login.submitLogin)
            }
        },
        submitLogin: function(a) {
            $.post(versionFolder + "forms/login.php", $(this).serialize(), function(a) {
                "success" == a ? ($(".loaderBlock").show(), $(location).attr("href", versionFolder + "cp.php")) : ($("#loginPasswordInput").val(""), Modal.createErrorWindow(a))
            }), a.preventDefault()
        },
        submitResetPassword: function(a) {
            $.post(versionFolder + "forms/resetPassword.php", $(this).serialize(), function(a) {
                "success" == a ? (Login.goToLogin(), Modal.createErrorWindow("An email that will enable you to reset your password</br>has been sent to your email address.", "EMAIL SENT")) : Modal.createErrorWindow(a)
            }), a.preventDefault()
        }
    };
$(function() {
    setWedsiteComListeners(), setIntro()
});
var flowerAnimationSpeed = .01,
    flowerTimers = new Array;
! function(a) {
    function b(b, c, d, e) {
        var f = b.text(),
            g = f.split(c),
            h = "";
        g.length && (a(g).each(function(a, b) {
            h += '<span class="' + d + (a + 1) + '" aria-hidden="true">' + b + "</span>" + e
        }), b.attr("aria-label", f).empty().append(h))
    }
    var c = {
        init: function() {
            return this.each(function() {
                b(a(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                b(a(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var c = "eefec303079ad17405c889e092e105b0";
                b(a(this).children("br").replaceWith(c).end(), c, "line", "")
            })
        }
    };
    a.fn.lettering = function(b) {
        return b && c[b] ? c[b].apply(this, [].slice.call(arguments, 1)) : "letters" !== b && b ? (a.error("Method " + b + " does not exist on jQuery.lettering"), this) : c.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        return /In/.test(b) || a.inArray(b, a.fn.textillate.defaults.inEffects) >= 0
    }

    function c(b) {
        return /Out/.test(b) || a.inArray(b, a.fn.textillate.defaults.outEffects) >= 0
    }

    function d(a) {
        return "true" !== a && "false" !== a ? a : "true" === a
    }

    function e(b) {
        var c = b.attributes || [],
            e = {};
        return c.length ? (a.each(c, function(a, b) {
            var c = b.nodeName.replace(/delayscale/, "delayScale");
            /^data-in-*/.test(c) ? (e["in"] = e["in"] || {}, e["in"][c.replace(/data-in-/, "")] = d(b.nodeValue)) : /^data-out-*/.test(c) ? (e.out = e.out || {}, e.out[c.replace(/data-out-/, "")] = d(b.nodeValue)) : /^data-*/.test(c) && (e[c.replace(/data-/, "")] = d(b.nodeValue))
        }), e) : e
    }

    function f(a) {
        for (var b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
        return a
    }

    function g(a, b, c) {
        a.addClass("animated " + b).css("visibility", "visible").show(), a.one("animationend webkitAnimationEnd oAnimationEnd", function() {
            a.removeClass("animated " + b), c && c()
        })
    }

    function h(d, e, h) {
        var i = d.length;
        return i ? (e.shuffle && (d = f(d)), e.reverse && (d = d.toArray().reverse()), void a.each(d, function(d, f) {
            function j() {
                b(e.effect) ? k.css("visibility", "visible") : c(e.effect) && k.css("visibility", "hidden"), i -= 1, !i && h && h()
            }
            var k = a(f),
                l = e.sync ? e.delay : e.delay * d * e.delayScale;
            k.text() ? setTimeout(function() {
                g(k, e.effect, j)
            }, l) : j()
        })) : void(h && h())
    }
    var i = function(d, f) {
        var g = this,
            i = a(d);
        g.init = function() {
            g.$texts = i.find(f.selector), g.$texts.length || (g.$texts = a('<ul class="texts"><li>' + i.html() + "</li></ul>"), i.html(g.$texts)), g.$texts.hide(), g.$current = a("<span>").html(g.$texts.find(":first-child").html()).prependTo(i), b(f["in"].effect) ? g.$current.css("visibility", "hidden") : c(f.out.effect) && g.$current.css("visibility", "visible"), g.setOptions(f), g.timeoutRun = null, setTimeout(function() {
                g.options.autoStart && g.start()
            }, g.options.initialDelay)
        }, g.setOptions = function(a) {
            g.options = a
        }, g.triggerEvent = function(b) {
            var c = a.Event(b + ".tlt");
            return i.trigger(c, g), c
        }, g["in"] = function(d, f) {
            d = d || 0;
            var i, j = g.$texts.find(":nth-child(" + ((d || 0) + 1) + ")"),
                k = a.extend(!0, {}, g.options, j.length ? e(j[0]) : {});
            j.addClass("current"), g.triggerEvent("inAnimationBegin"), g.$current.html(j.html()).lettering("words"), "char" == g.options.type && g.$current.find('[class^="word"]').css({
                display: "inline-block",
                "-webkit-transform": "translate3d(0,0,0)",
                "-moz-transform": "translate3d(0,0,0)",
                "-o-transform": "translate3d(0,0,0)",
                transform: "translate3d(0,0,0)"
            }).each(function() {
                a(this).lettering()
            }), i = g.$current.find('[class^="' + g.options.type + '"]').css("display", "inline-block"), b(k["in"].effect) ? i.css("visibility", "hidden") : c(k["in"].effect) && i.css("visibility", "visible"), g.currentIndex = d, h(i, k["in"], function() {
                g.triggerEvent("inAnimationEnd"), k["in"].callback && k["in"].callback(), f && f(g)
            })
        }, g.out = function(b) {
            var c = g.$texts.find(":nth-child(" + ((g.currentIndex || 0) + 1) + ")"),
                d = g.$current.find('[class^="' + g.options.type + '"]'),
                f = a.extend(!0, {}, g.options, c.length ? e(c[0]) : {});
            g.triggerEvent("outAnimationBegin"), h(d, f.out, function() {
                c.removeClass("current"), g.triggerEvent("outAnimationEnd"), f.out.callback && f.out.callback(), b && b(g)
            })
        }, g.start = function(a) {
            setTimeout(function() {
                g.triggerEvent("start"),
                    function b(a) {
                        g["in"](a, function() {
                            var c = g.$texts.children().length;
                            a += 1, !g.options.loop && a >= c ? (g.options.callback && g.options.callback(), g.triggerEvent("end")) : (a %= c, g.timeoutRun = setTimeout(function() {
                                g.out(function() {
                                    b(a)
                                })
                            }, g.options.minDisplayTime))
                        })
                    }(a || 0)
            }, g.options.initialDelay)
        }, g.stop = function() {
            g.timeoutRun && (clearInterval(g.timeoutRun), g.timeoutRun = null)
        }, g.init()
    };
    a.fn.textillate = function(b, c) {
        return this.each(function() {
            var d = a(this),
                f = d.data("textillate"),
                g = a.extend(!0, {}, a.fn.textillate.defaults, e(this), "object" == typeof b && b);
            f ? "string" == typeof b ? f[b].apply(f, [].concat(c)) : f.setOptions.call(f, g) : d.data("textillate", f = new i(this, g))
        })
    }, a.fn.textillate.defaults = {
        selector: ".texts",
        loop: !1,
        minDisplayTime: 2e3,
        initialDelay: 0,
        "in": {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function() {}
        },
        out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function() {}
        },
        autoStart: !0,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function() {},
        type: "char"
    }
}(jQuery);
var cpBeingDisplayed = !1,
    sampleBeingDisplayed = !1,
    sampleLoaded = !1,
    sizeX10 = 1e3,
    sizeX14 = 1.4 * sizeX10,
    sizeX13 = 1.3 * sizeX10,
    sizeX12 = 1.2 * sizeX10,
    sizeX11 = 1.1 * sizeX10,
    sizeX9 = .9 * sizeX10,
    sizeX8 = .8 * sizeX10,
    sizeX7 = .7 * sizeX10,
    sizeY10 = 550,
    sizeY14 = 1.4 * sizeY10,
    sizeY13 = 1.3 * sizeY10,
    sizeY12 = 1.2 * sizeY10,
    sizeY11 = 1.1 * sizeY10,
    sizeY9 = .9 * sizeY10,
    sizeY8 = .8 * sizeY10,
    sizeY7 = .7 * sizeY10;
$(function() {
    BackgroundPhotos.setBackgroundPhotos(), $(window).resize(BackgroundPhotos.positionBackgroundPhotos)
});
var BackgroundPhotos = {
        positionBackgroundPhotos: function() {
            if ($("#backgroundPhotos").length)
                for (var a = 1; a <= $("#backgroundPhotos").attr("data-actualphotocount"); a++) {
                    var b = $(window).width() * $("#backgroundPhotoCanvas" + a).attr("data-xya").split(",")[0] / 1023 + ($(window).width() / 1023 * 260 - 260) / 2 + "px",
                        c = $(window).height() * $("#backgroundPhotoCanvas" + a).attr("data-xya").split(",")[1] / 605 + ($(window).height() / 605 * 260 - 260) / 2 + "px",
                        d = "rotate(" + $("#backgroundPhotoCanvas" + a).attr("data-xya").split(",")[2] + "deg)";
                    $("#backgroundPhotoCanvas" + a).css({
                        left: b,
                        top: c,
                        transform: d
                    }), $("#backgroundPhotoCanvas" + a).draggable()
                }
        },
        setBackgroundPhotos: function() {
            $("#backgroundPhotos").empty();
            var a = "photoAlbum" + $("#backgroundPhotos").attr("data-photoalbum");
            if ("photoAlbum0" != a && window[a]) {
                for (var b = [], c = 0; c < window[a].length; c++) "undefined" != typeof window[a][c].photo && null !== window[a][c].photo && b.push(window[a][c]);

                $("#backgroundPhotos").attr("data-actualphotocount", $("#backgroundPhotos").attr("data-photocount")), $("#backgroundPhotos").attr("data-photocount") > b.length && $("#backgroundPhotos").attr("data-actualphotocount", b.length);
                var d = 0;
                b.length > $("#backgroundPhotos").attr("data-photocount") && (d = Math.floor(Math.random() * (b.length - $("#backgroundPhotos").attr("data-photocount"))));
                for (var e = $("#backgroundPhotos").attr("data-xya").split("index.html"), f = "", g = "", c = $("#backgroundPhotos").attr("data-actualphotocount"); c > 0; c--) {
                    if ("286,77,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0/10,10,0" == $("#backgroundPhotos").attr("data-xya")) {
                        var h = 0;
                        h = 5 > c ? c % 2 == 0 ? Tools.randIntBetween(-20, 66) : Tools.randIntBetween(697, 783) : Tools.randIntBetween(-20, 783), e[c] = h + "," + Tools.randIntBetween(-20, 365) + "," + Tools.randIntBetween(-20, 20)
                    }
                    g = $("<style>#backgroundPhoto" + c + ' {background-image: url("/uploads/' + $("#book").attr("data-wedding") + "/images640/" + b[c - 1 + d].file + '");}</style>'), f = $('<div id="backgroundPhotoCanvas' + c + '" class="backgroundPhotoCanvas" data-xya="' + e[c] + '"><div id="backgroundPhoto' + c + '" class="backgroundPhoto"></div></div>'), $("#backgroundPhotos").append(g), $("#backgroundPhotos").append(f)
                }
                BackgroundPhotos.positionBackgroundPhotos()
            }
        }
    },
    countdownUpdateTimer = null;
$(function() {
    $("#countdownTime").click(Countdown.toggleCountdown), Countdown.startCountdown()
});
var Countdown = {
    displayCountdown: function() {
        $("#countdown").addClass("countdownExpanded"), $("#bottomTools").addClass("countdownExpanded"), clearTimeout(window.displayCountdownTimer), window.displayCountdownTimer = setTimeout(Countdown.hideCountdown, 4e3)
    },
    hideCountdown: function() {
        clearTimeout(window.displayCountdownTimer), $("#countdown").removeClass(), $("#bottomTools").removeClass("countdownExpanded")
    },
    startCountdown: function() {
        Countdown.stopCountdown(), $("#countdown").length > 0 && (countdownUpdateTimer = setInterval(function() {
            Countdown.updateCountdown()
        }, 1e3))
    },
    stopCountdown: function() {
        clearInterval(countdownUpdateTimer)
    },
    toggleCountdown: function() {
        $("#countdown").hasClass("countdownExpanded") ? Countdown.hideCountdown() : Countdown.displayCountdown()
    },
    updateCountdown: function() {
        var a = new Date($("#weddingTime").text());
        if (isNaN(a.valueOf())) $("#countdown").hasClass("displayNone") || ($("#countdown").addClass("displayNone"), Countdown.stopCountdown());
        else {
            var b = 0;
            new Date > a ? (b = new Date - new Date($("#weddingTime").text().replace(" ", "T")), $("#preWedCountdownText").css("visibility", "hidden"), $("#postWedCountdownText").css("visibility", "visible")) : (b = new Date($("#weddingTime").text().replace(" ", "T")) - new Date, $("#preWedCountdownText").css("visibility", "visible"), $("#postWedCountdownText").css("visibility", "hidden"));
            var c = Math.floor(b / 864e5).toString(),
                d = Math.floor(b / 36e5 - 24 * c).toString();
            1 == d.length && (d = "0" + d);
            var e = Math.floor(b / 6e4 - 60 * c * 24 - 60 * d).toString();
            1 == e.length && (e = "0" + e);
            var f = Math.floor(b / 1e3 - 60 * c * 60 * 24 - 60 * d * 60 - 60 * e).toString();
            1 == f.length && (f = "0" + f), $("#countdownTime").text(c + ":" + d + ":" + e + ":" + f)
        }
    }
};
$(function() {
    $("#guestBookForm").submit(GuestBook.submitGuestNote)
});
var GuestBook = {
    submitGuestNote: function(a) {
        $.post(versionFolder + "forms/submitGuestNote.php", $(this).serialize(), function(a) {
            if (Tools.isInt(a)) {
                var b = $('<div class="pageSection guestBookSection' + (Tools.isCP() ? " weddingColorBorderHover" : "") + '"' + (Tools.isCP() ? ' data-guestnoteid="' + a + '" data-active="1" title="click to edit or delete entry"' : "") + ">" + (Tools.isCP() ? '<i class="hiddenSectionIcon fa fa-eye-slash" title="inactive guest note (will not be displayed on wedsite)"></i>' : "") + '<h4 class="pageSectionTitle">' + $("#guestBookNameInput").val() + '</h4><h4 class="pageSectionSubTitle weddingColorContent">' + $.datepicker.formatDate("DD, MM d, yy", new Date) + '</h4><div class="pageSectionText">' + $("#guestBookNoteInput").val() + "</div></div>");
                "undefined" != typeof GuestBookCP && null !== GuestBookCP && b.click(GuestBookCP.goToEdit), $(".pageTypeGuestBook").find(".pageContent").prepend(b), $(".pageTypeGuestBook").find(".pageContent").scrollTop(0), $("#guestBookForm").find("input[type=text], textarea").val(""), $("#bookModal").remove()
            } else Modal.createErrorWindow(a)
        }), a.preventDefault()
    }
};
$(function() {
    $(".rsvpButton").click(function(a) {
        Guests.goToFindGuest($(a.target).attr("data-event"))
    })
});
var Guests = {
    rsvpOriginalTotalGroup: 1,
    addGroupMember: function() {
        var a = $(event.target).closest(".window"),
            b = $(a).find(".rsvpTabGroup").find("label").length + 1;
        if ($(a).find(".rsvpTotalGroup").text(b), b >= 1 && 9 >= b) {
            var c = $(a).find(".rsvpTabGroup").find("label:first").clone();
            $(c).text(b), $(c).click(function() {
                Guests.changeRSVPTab(b - 1)
            }), $(a).find(".rsvpTabGroup").append(c);
            var d = $(a).find(".rsvpGuestDiv:first").clone();
            $(d).find("input:text").val(""), $(d).find("input:first").val(0), $(d).find("input:radio").attr("checked", !1), $(d).find("textarea").text(""), $(d).find("input,textarea").each(function() {
                $(this).attr("name", $(this).attr("name").replace(/\d+/g, "") + b)
            }), $(d).find("select").each(function() {
                $(this).attr("name", $(this).attr("name").split("Input").shift() + "Input" + b)
            }), $(a).find("form").append(d), Guests.changeRSVPTab(b - 1)
        }
    },
    changeRSVPTab: function(a) {
        var b = $("#guestsModal").find(".window"),
            c = b.find(".rsvpTabGroup").find("label:eq(" + a + ")");
        $(b).find(".rsvpTabActive").removeClass(), $(c).attr("class", "rsvpTabActive"), $(b).find(".rsvpGuestDiv").hide(), $(b).find(".rsvpGuestDiv:eq(" + a + ")").show();
        var d = $(b).find(".rsvpTabGroup").find("label").length,
            e = $(b).find("button:contains('back')"),
            f = $(b).find("button:contains('next')"),
            g = $(b).find("button:contains('save')"),
            h = $(b).find("button:contains('submit')");
        a + 1 == d ? ($(f).hide(), $(g).show(), $(h).show()) : ($(g).hide(), $(h).hide(), $(f).show()), a + 1 > 1 && d > 1 ? $(e).show() : $(e).hide(), d >= 9 && $(b).find("i.fa-plus").hide(), d > 1 && (Tools.isCP() || d > Guests.rsvpOriginalTotalGroup) ? $(b).find("i.fa-minus").show() : $(b).find("i.fa-minus").hide()
    },
    goToFindGuest: function(a) {
        Images.stopVideos(), $("#guestsModal").remove();
        var b = $('<div data-event="' + a + '">');
        $(b).load(versionFolder + "forms/findGuest.php", {
            wedding: $("#book").attr("data-wedding"),
            event: a
        }, function() {
            var a = $("<div>"),
                c = $('<button class="rectangleButton"><i class="icon fa fa-arrow-circle-right"></i> next</button>');
            $(c).click(Guests.submitFindGuest), $(a).append(c), Modal.createWindow("guestsModal", "RSVP", "bookBackground", b, a)
        })
    },
    goToGuest: function(a) {
        var b = $(a.target).closest(".window"),
            c = $('<div data-event="' + $(b).find("[data-event]").attr("data-event") + '" data-guest="' + $(a.target).attr("data-guest") + '">');
        $(c).load(versionFolder + "forms/viewGuest.php", {
            wedding: $("#book").attr("data-wedding"),
            guest: $(a.target).attr("data-guest"),
            event: $(b).find("[data-event]").attr("data-event")
        }, function() {
            $(c).find(".rsvpGuestDiv:not(:first)").hide(), $(c).find(".rsvpTabGroup").find("label").click(function() {
                Guests.changeRSVPTab($(c).find(".rsvpTabGroup").find("label").index(this))
            }), Guests.rsvpOriginalTotalGroup = $(c).find(".rsvpTabGroup").find("label").length, $(c).find("i.fa-plus").click(Guests.addGroupMember), $(c).find("i.fa-minus").click(Guests.removeGroupMember);
            var a = $("<div>"),
                b = $('<button class="rectangleButton"><i class="icon fa fa-arrow-circle-left"></i> back</button>');
            $(b).click(function() {
                Guests.changeRSVPTab($(c).find(".rsvpTabGroup").find("label").index($(c).find(".rsvpTabActive")) - 1)
            }), $(a).append(b);
            var d = $('<button class="rectangleButton"><i class="icon fa fa-arrow-circle-right"></i> next</button>');
            $(d).click(function() {
                Guests.changeRSVPTab($(c).find(".rsvpTabGroup").find("label").index($(c).find(".rsvpTabActive")) + 1)
            }), $(a).append(d);
            var e = $('<button class="rectangleButton"><i class="icon fa fa-save"></i> submit</button>');
            $(e).click(Guests.submitEditGuest), $(a).append(e), $("#guestsModal").remove(), Modal.createWindow("guestsModal", "RSVP", "bookBackground", c, a), Guests.changeRSVPTab(0)
        })
    },
    removeGroupMember: function() {
        var a = $(event.target).closest(".window"),
            b = $(a).find(".rsvpTabGroup").find("label").length - 1;
        $(a).find(".rsvpTotalGroup").text(b), b >= 1 && 9 >= b && ($(a).find(".rsvpTabGroup").find("label:last").remove(), $(a).find(".rsvpGuestDiv:last").remove(), Guests.changeRSVPTab(b - 1))
    },
    submitEditGuest: function() {
        var a = $(event.target).closest(".window");
        $.post(versionFolder + "forms/editGuest.php", $(a).find("form").serialize() + "&wedding=" + $("#book").attr("data-wedding") + "&event=" + $(a).find("[data-event]").attr("data-event") + "&guest=" + $(a).find("[data-guest]").attr("data-guest"), function(a) {
            "success" == a ? ($("#guestsModal").remove(), Modal.createErrorWindow("Your RSVP has been submitted.", "RSVP")) : Modal.createErrorWindow(a)
        }), event.preventDefault()
    },
    submitFindGuest: function(a) {
        var b = $(a.target).closest(".window");
        $.post(versionFolder + "forms/returnedGuests.php", {
            wedding: $("#book").attr("data-wedding"),
            findGuest: $(b).find('input[name="findGuest"]').val(),
            event: $(b).find("[data-event]").attr("data-event")
        }, function(a) {
            if (a.startsWith('<div class="rsvpFindGuestSuccess">')) {
                var c = $('<div data-event="' + $(b).find("[data-event]").attr("data-event") + '">');
                $(c).append(a), $(c).find(".rsvpReturnedGuest").find("button").click(Guests.goToGuest), $(c).find(".rsvpReturnedGuestOptions").find('button:contains("add RSVP")').click(Guests.goToGuest), $(c).find(".rsvpReturnedGuestOptions").find('button:contains("search again")').click(function() {
                    Guests.goToFindGuest($(b).find("[data-event]").attr("data-event"))
                });
                var d = $("<div>");
                $("#guestsModal").remove(), Modal.createWindow("guestsModal", "RSVP", "bookBackground", c, d)
            } else Modal.createErrorWindow(a)
        }), a.preventDefault()
    }
};
$(function() {
    Images.setAllPagePhotos(), $(".expandPhotoButton").click(function() {
        Images.expandPhoto(this)
    }), $("#galleryDropdown").change(Images.setGallery), $(".mapButton").click(function(a) {
        Images.goToMap(this), a.stopPropagation()
    }), $(".nextPhotoButton").click(function() {
        Images.goToPhoto(this)
    }), $(".pageContent").each(function() {
        Images.setPagePhotoButtons(this)
    }), $(".previousPhotoButton").click(function() {
        Images.goToPhoto(this)
    })
});
var Images = {
        expandPhoto: function(a) {
            Images.stopVideos();
            var b = $(a).siblings(".photo"),
                c = $('<div id="modal"></div>'),
                d = $('<div class="window expandPhotoWindow"><div class="expandPhotoFrame"><div class="expandPhoto"></div></div></div>'),
                e = $('<button class="roundButton closeWindowButton"><i class="icon fa fa-times" title="close expanded view"></i></button>');
            $(e).click(function() {
                $("#modal").remove()
            }), $(d).append(e);
            var f = $('<button class="roundButton collapsePhotoButton"><i class="icon fa fa-compress" title="close expanded view"></i></button>');
            $(f).click(function() {
                $("#modal").remove()
            }), $(d).append(f);
            var g = $('<button class="roundButton previousPhotoButton"><i class="icon fa fa-arrow-left" title="previous image"></i></button>');
            $(g).click(function() {
                Images.goToPhoto($(b).siblings(".previousPhotoButton"))
            }), $(d).append(g);
            var h = $('<button class="roundButton nextPhotoButton"><i class="icon fa fa-arrow-right" title="next image"></i></button>');
            $(h).click(function() {
                Images.goToPhoto($(b).siblings(".nextPhotoButton"))
            }), $(d).append(h), $(c).append(d), $(".background").append(c), Images.setPhotoOrVideo(b)
        },
        goToMap: function(a) {
            Images.stopVideos();
            var b = $(a).closest(".page").attr("data-pagenumber"),
                c = $(".leftPageBase[data-pagenumber='" + b + "']").find(".photo");
            $(c).siblings(".map").css("display", "block"), $(c).siblings(".previousPhotoButton").css("display", "none"), $(c).siblings(".nextPhotoButton").css("display", "none"), $(c).siblings(".expandPhotoButton").css("display", "none"), $(".photoTextBack").remove(), geocoder = new google.maps.Geocoder, currentMap = $(c).siblings(".map")[0];
            var d = $(a).closest(".pageSection").find(".mapAddress").text() + " " + $(a).closest(".pageSection").find(".mapCity").text();
            geocoder.geocode({
                address: d
            }, function(a, b) {
                if (b == google.maps.GeocoderStatus.OK) {
                    var c = (a[0].geometry.location.toString(), {
                            zoom: 14,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        }),
                        e = new google.maps.Map(currentMap, c);
                    e.setCenter(a[0].geometry.location);
                    var f = new google.maps.Marker({
                        map: e,
                        position: a[0].geometry.location,
                        title: d
                    });
                    google.maps.event.addListener(f, "click", function() {
                        window.open("http://maps.google.com/?q=" + d, "_blank")
                    })
                } else alert("The map requested could not be loaded. Error code: " + b)
            })
        },
        goToPhoto: function(a) {
            var b = $(a).siblings(".photo"),
                c = $(b).attr("data-currentphoto");
            "undefined" == typeof c || null == c ? c = 0 : -1 != $(a).attr("class").indexOf("previousPhotoButton") ? c-- : c++, $(b).attr("data-currentphoto", c), Images.setPhotoOrVideo(b)
        },
        goToPhotoAlbum: function(a) {
            var b = $(a).closest(".page").attr("data-pagenumber"),
                c = $(a).closest(".pageSection").attr("data-photoalbum"),
                d = $(".leftPageBase[data-pagenumber='" + b + "']").find(".photo");
            $(d).attr("data-photoalbum", c), $(d).attr("data-currentphoto", 0), Images.setPhotoOrVideo(d)
        },
        setAllPagePhotos: function() {
            $(".photo").each(function() {
                Images.setPagePhotoAlbum(this)
            })
        },
        setGallery: function() {
            if ($(".photoPreviewFrame").remove(), $("#galleryDropdown").length > 0) {
                var a = $(".pageTypeGallery.leftPageBase").find(".photo"),
                    b = "photoAlbum" + $("#galleryDropdown").val();
                if ($(a).attr("data-photoalbum", $("#galleryDropdown").val()), $(a).attr("data-currentphoto", 0), Images.setPhotoOrVideo(a), window[b])
                    for (var c = 0; c < window[b].length; c++) {
                        var d = $('<div class="photoPreviewFrame">');
                        $(d).click(function(a) {
                            return function() {
                                var b = $(".pageTypeGallery.leftPageBase").find(".photo");
                                $(b).attr("data-photoalbum", $("#galleryDropdown").val()), $(b).attr("data-currentphoto", a), Images.setPhotoOrVideo(b)
                            }
                        }(c));
                        var e = $('<div class="photoPreview">'),
                            f = window[b][c];
                        f.photo ? $(e).css("background-image", "url('/uploads/" + $("#book").attr("data-wedding") + "/images640/" + f.file + "')") : f.video && $(e).css("background-image", "url('http://i1.ytimg.com/vi/" + f.file + "/default.jpg')"), $(d).append(e), $("#galleryContent").append(d)
                    }
            }
        },
        setPagePhotoAlbum: function(a) {
            var b = $(a).closest("section").attr("class").split(" ")[1];
            if (-1 != b.indexOf("pageTypeGallery")) Images.setGallery();
            else if (-1 == b.indexOf("pageTypeGallery") && -1 == b.indexOf("pageTypeGuestBook")) {
                if (-1 == b.indexOf("pageTypeIndex")) {
                    var c = $(a).closest(".page").attr("data-pagenumber");
                    $(".rightPageBase[data-pagenumber=" + c + "]").find(".pageSection:first[data-photoalbum]").length > 0 ? $(a).attr("data-photoalbum", $(".rightPageBase[data-pagenumber=" + c + "]").find(".pageSection:first").attr("data-photoalbum")) : $(a).attr("data-photoalbum", 0)
                }
                Images.setPhotoOrVideo(a)
            }
        },
        setPagePhotoButtons: function(a) {
            $(a).find(".photosButton").remove(), $(a).find(".pageSection").each(function() {
                if (0 != $(this).attr("data-photoalbum") && (!$(this).is(":first-child") || $(this).siblings(".pageSection[data-photoalbum]").filter(function() {
                        return $(this).attr("data-photoalbum") > 0
                    }).length > 0 || $(this).parent().children().find(".mapButton").length > 0)) {
                    var a = '<button class="sectionButtonSmall photosButton"><i class="icon fa fa-photo"></i> photos</button>';
                    $(this).parent().children().filter(function() {
                        return $(this).attr("data-photoalbum") > 0 && 0 == $(this).find(".photosButton").length
                    }).find(".pageSectionButtons").append(a)
                }
            }), $(".photosButton").click(function(a) {
                Images.goToPhotoAlbum(this), a.stopPropagation()
            })
        },
        setPhotoControls: function(a, b) {
            window[a].length <= 1 ? ($(b).siblings(".previousPhotoButton").css("display", "none"), $(b).siblings(".nextPhotoButton").css("display", "none"), $(".expandPhoto").length && ($("#modal").find(".previousPhotoButton").css("display", "none"), $("#modal").find(".nextPhotoButton").css("display", "none"))) : ($(b).siblings(".previousPhotoButton").css("display", "block"), $(b).siblings(".nextPhotoButton").css("display", "block"))
        },
        setPhotoOrVideo: function(a) {
            $(a).siblings(".map").css("display", "none");
            var b = "photoAlbum" + $(a).attr("data-photoalbum");
            if ("photoAlbum0" == b) $(a).closest(".photoFrame").css("display", "none");
            else if (window[b])
                if (window[b].length) {
                    $(a).closest(".photoFrame").css("display", "block");
                    var c = $(a).attr("data-currentphoto");
                    ("undefined" == typeof c || null == c) && (c = 0), 0 > c ? c = window[b].length - 1 : c > window[b].length - 1 && (c = 0);
                    var d = window[b][c];
                    $(a).attr("data-currentphoto", c), $(a).find(".photoTextBack").remove(), d.photo ? ($(a).siblings(".expandPhotoButton").css("display", "block"), $(a).find(".video").remove(), $(a).css("background-image", "url('/uploads/" + $("#book").attr("data-wedding") + "/images640/" + d.file + "')")) : d.video && ($(a).siblings(".expandPhotoButton").css("display", "none"), $(a).css("background-image", ""), $(a).html('<iframe id="video" class="video" src="https://www.youtube.com/embed/' + d.file + '?enablejsapi=1&rel=0&showinfo=0" frameborder="0" allowfullscreen="true"></iframe>')), "" != d.text && $(a).append('<div class="photoTextBack"><p class="photoText">' + d.text + "</p></div>"), $(".expandPhoto").length && ($(".expandPhotoText").remove(), d.photo ? ($(".expandPhoto").find(".expandVideo").remove(), $(".expandPhoto").css("background-image", "url('/uploads/" + $("#book").attr("data-wedding") + "/images640/" + d.file + "')")) : d.video && ($(".expandPhoto").css("background-image", ""), $(".expandPhoto").html('<iframe class="expandVideo" src="https://www.youtube.com/embed/' + d.file + '?enablejsapi=1&rel=0&showinfo=0" frameborder="0" allowfullscreen="true"></iframe>')), "" != d.text && $(".expandPhotoWindow").append('<p class="expandPhotoText">' + d.text + "</p>")), Images.setPhotoControls(b, a)
                } else $(a).closest(".photoFrame").css("display", "none");
            else $(a).closest(".photoFrame").css("display", "none")
        },
        stopVideos: function() {
            $("#video").length && $("#video")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', "*")
        }
    },
    Modal = {
        createDeleteConfirmWindow: function(a, b, c, d, e) {
            var f = $('<div class="deleteWindowContent">'),
                g = $('<div class="deleteMessage">Please confirm:</br></br>Are you sure that you want to delete ' + d + '</br></br><label class="deleteMessageHeading">This action cannot be undone.</label></div>');
            f.append(g);
            var h = $("<div>"),
                i = $('<button class="rectangleButton"><i class="icon fa fa-times"></i> cancel</button>');
            $(i).click(function() {
                $("#" + a).remove()
            }), h.append(i);
            var j = $('<button class="rectangleButton"><i class="icon fa fa-trash-o"></i> delete</button>');
            $(j).click(function() {
                e()
            }), h.append(j), Modal.createWindow(a, b, c, f, h)
        },
        createErrorWindow: function(a, b) {
            var c = $('<div id="errorContainer"></div>');
            $("body").append(c), b = b || "ERROR";
            var d = $('<div class="errorWindowContent">'),
                e = $('<div class="errorMessage">' + a + "</div>");
            d.append(e);
            var f = $("<div>"),
                g = $('<button class="rectangleButton"><i class="icon fa fa-times"></i> close</button>');
            $(g).click(function() {
                $("#errorModal").remove(), $("#errorContainer").remove()
            }), f.append(g), Modal.createWindow("errorModal", b, "errorContainer", d, f)
        },
        createWindow: function(a, b, c, d, e) {
            var f = $('<div id="' + a + '" class="modal"></div>'),
                g = $('<div class="window"><h3 class="windowTitle">' + b + "</h3></div>"),
                h = $('<div class="windowContent"></div>'),
                i = $('<div class="windowOptions"></div>'),
                j = $('<button class="roundButton closeWindowButton"><i class="icon fa fa-times"></i></button>');
            $(j).click(function() {
                $(f).remove(), $("#errorContainer").remove()
            }), $(g).append(j), $(h).append(d), $(g).append(h), $(i).append(e), $(g).append(i), $(f).append(g), $("#" + c).append(f)
        }
    };
$(function() {
    Music.loadMusic(), $("#musicAudio").bind("ended", function() {
        Music.playNextSong()
    }), $("#musicAudio").on("timeupdate", function() {
        Music.setMusicPlayIcon()
    }), $("#musicBackIcon").click(Music.restartSong), $("#musicIcon").click(Music.toggleMusicPlayer), $("#musicNextIcon").click(Music.playNextSong), $("#musicPlayIcon").click(Music.playMusic)
});
var Music = {
    currentSong: -1,
    displayMusicPlayer: function() {
        $("#musicPlayer").addClass("musicPlayerExpanded"), $("#bottomTools").addClass("musicPlayerExpanded"), clearTimeout(window.displayMusicTimer), window.displayMusicTimer = setTimeout(Music.hideMusicPlayer, 4e3)
    },
    hideMusicPlayer: function() {
        clearTimeout(window.displayMusicTimer), $("#musicPlayer").removeClass(), $("#bottomTools").removeClass("musicPlayerExpanded")
    },
    loadMusic: function() {
        if ("undefined" != typeof musicPlaylist && null != musicPlaylist && musicPlaylist.length > 0) {
            var a = document.getElementById("musicAudio");
            Music.currentSong = Music.currentSong + 1, musicPlaylist.length <= Music.currentSong && (Music.currentSong = 0), a.src = musicPlaylist[Music.currentSong].file, $("#musicTitle").text(musicPlaylist[Music.currentSong].title + ("" != musicPlaylist[Music.currentSong].artist ? " - " + musicPlaylist[Music.currentSong].artist : "")), 0 == Tools.isWedsiteCom() && 0 == Tools.isCP() && Music.playMusic()
        }
    },
    playMusic: function() {
        clearTimeout(window.displayMusicTimer), window.displayMusicTimer = setTimeout(Music.hideMusicPlayer, 4e3);
        var a = document.getElementById("musicAudio");
        a.paused || !a.currentTime ? a.play() : a.pause()
    },
    playNextSong: function() {
        Music.loadMusic(), Music.playMusic()
    },
    restartSong: function() {
        var a = document.getElementById("musicAudio");
        a.currentTime = 0, Music.playMusic()
    },
    setMusicPlayIcon: function() {
        var a = document.getElementById("musicAudio");
        a.paused || !a.currentTime ? $("#musicPlayIcon").removeClass("fa-pause").addClass("fa-play") : $("#musicPlayIcon").removeClass("fa-play").addClass("fa-pause")
    },
    toggleMusicPlayer: function() {
        $("#musicPlayer").hasClass("musicPlayerExpanded") ? Music.hideMusicPlayer() : Music.displayMusicPlayer()
    }
};
$(function() {
    Page.setBookToInitialPosition(), $(window).resize(Page.setBookToInitialPosition), $("#bookCover").click(Page.openBook), $(".homePageButton").click(function() {
        Page.turnToPage(-1)
    }), $(".indexChapter").click(function() {
        var a = $(this).index() - $(this).prevAll("h2").length + 1;
        $(this).is("h2") && $(this).is(":last-child") && $(this).prev().is("h2") && a++, Page.turnToPage(a)
    }), $(".indexPageButton").click(function() {
        Page.turnToPage(0)
    }), $(".indexPageTitle").click(function() {
        var a = $(this).index() - $(this).prevAll("h2").length + 1;
        Page.turnToPage(a)
    }), $(".nextPageButton").click(Page.turnPageNext), $(".previousPageButton").click(Page.turnPagePrevious)
});
var Page = {
    bookHasBeenOpened: !1,
    currentPage: -1,
    pageTurnSpeed: 600,
    closeBook: function() {
        Screen.blockUI(), Images.stopVideos(), Page.currentPage = -1, $(window).width() >= $(window).height() ? ($("#bookCoverBase").velocity({
            rotateY: "-89.99deg",
            width: "90rem"
        }, {
            duration: 0,
            display: "block"
        }), $(".leftPageBase[data-pagenumber='0']").velocity({
            width: "90rem"
        }, {
            duration: 0
        }), $(".leftPageBase[data-pagenumber='0']").velocity({
            rotateY: "90deg"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "easeInQuad",
            complete: function() {
                $(".leftPageBase[data-pagenumber='0']").velocity({
                    width: "45rem"
                }, {
                    duration: 0,
                    display: "none"
                }), $("#bookCoverBase").velocity({
                    rotateY: "0deg"
                }, {
                    duration: Page.pageTurnSpeed,
                    easing: "easeOutQuad",
                    complete: function() {
                        $("#book").css("display", "none"), $("#bookCoverBase").velocity({
                            left: "+=22.5rem",
                            width: "45rem"
                        }, {
                            duration: Page.pageTurnSpeed,
                            easing: "ease",
                            complete: function() {
                                $("#bookCoverBase").removeClass("bookCoverBaseOpen"), $("#bookCover").removeClass("bookCoverOpen"), Screen.unblockUI()
                            }
                        })
                    }
                })
            }
        })) : ($("#bookCoverBase").velocity({
            rotateY: "-89.99deg",
            width: "90rem"
        }, {
            duration: 0,
            display: "block"
        }), $(".leftPageBase[data-pagenumber='0']").velocity({
            height: "90rem"
        }, {
            duration: 0
        }), $(".leftPageBase[data-pagenumber='0']").velocity({
            rotateX: "-90deg"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "easeInQuad",
            complete: function() {
                $(".leftPageBase[data-pagenumber='0']").velocity({
                    height: "45rem"
                }, {
                    duration: 0,
                    display: "none"
                }), $("#bookCoverBase").velocity({
                    rotateY: "0deg"
                }, {
                    duration: Page.pageTurnSpeed,
                    easing: "easeOutQuad",
                    complete: function() {
                        $("#book").css("display", "none"), $("#bookCoverBase").velocity({
                            left: "+=22.5rem",
                            width: "45rem",
                            rotateZ: "0deg"
                        }, {
                            duration: Page.pageTurnSpeed,
                            easing: "ease",
                            complete: function() {
                                $("#bookCoverBase").removeClass("bookCoverBaseOpen"), $("#bookCover").removeClass("bookCoverOpen"), Screen.unblockUI()
                            }
                        })
                    }
                })
            }
        }), $("#bookCover").velocity({
            boxShadowY: ".7rem"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "ease"
        }))
    },
    openBook: function() {
        Screen.blockUI(), Page.bookHasBeenOpened = !0, Page.currentPage = 0, $(window).width() >= $(window).height() ? $("#bookCoverBase").velocity({
            left: $(window).width() / 2 - $("#bookCover").width() + "px",
            top: $(window).height() / 2 - $("#bookCover").height() / 2 + "px",
            width: "90rem",
            rotateZ: "0deg"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "ease",
            complete: function() {
                $("#book").css("display", "block"), $(".leftPageBase[data-pagenumber='0']").velocity({
                    rotateX: "0deg",
                    rotateY: "90deg",
                    width: "90rem"
                }, {
                    duration: 0,
                    display: "block"
                }), $("#bookCoverBase").velocity({
                    rotateY: "-90deg"
                }, {
                    duration: Page.pageTurnSpeed,
                    easing: "easeInQuad",
                    complete: function() {
                        $("#bookCoverBase").velocity({
                            width: "45rem"
                        }, {
                            duration: 0,
                            display: "none"
                        }), $("#bookCoverBase").addClass("bookCoverBaseOpen"), $("#bookCover").addClass("bookCoverOpen"), $(".leftPageBase[data-pagenumber='0']").velocity({
                            rotateY: "0deg"
                        }, {
                            duration: Page.pageTurnSpeed,
                            easing: "easeOutQuad",
                            complete: function() {
                                $(".leftPageBase[data-pagenumber='0']").velocity({
                                    width: "45rem"
                                }, {
                                    duration: 0
                                }), Screen.unblockUI()
                            }
                        })
                    }
                })
            }
        }) : ($("#bookCoverBase").velocity({
            left: $(window).width() / 2 - $("#bookCover").width() + "px",
            top: $(window).height() / 2 - $("#bookCover").height() / 2 + "px",
            width: "90rem",
            rotateZ: "90deg"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "ease",
            complete: function() {
                $("#book").css("display", "block"), $(".leftPageBase[data-pagenumber='0']").velocity({
                    rotateX: "-90deg",
                    rotateY: "0deg",
                    height: "90rem"
                }, {
                    duration: 0,
                    display: "block"
                }), $("#bookCoverBase").velocity({
                    rotateY: "-90deg"
                }, {
                    duration: Page.pageTurnSpeed,
                    easing: "easeInQuad",
                    complete: function() {
                        $("#bookCoverBase").velocity({
                            width: "45rem"
                        }, {
                            duration: 0,
                            display: "none"
                        }), $("#bookCoverBase").addClass("bookCoverBaseOpen"), $("#bookCover").addClass("bookCoverOpen"), $(".leftPageBase[data-pagenumber='0']").velocity({
                            rotateX: "0deg"
                        }, {
                            duration: Page.pageTurnSpeed,
                            easing: "easeOutQuad",
                            complete: function() {
                                $(".leftPageBase[data-pagenumber='0']").velocity({
                                    height: "45rem"
                                }, {
                                    duration: 0
                                }), Screen.unblockUI()
                            }
                        })
                    }
                })
            }
        }), $("#bookCover").velocity({
            boxShadowY: "-.7rem"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "ease"
        }))
    },
    setBookToInitialPosition: function() {
        if (0 == Page.bookHasBeenOpened) {
            var a = $(window).width() * $("#bookCover").attr("class").split("bookCoverXYA")[1].split(",")[0] / 1023 + ($(window).width() / 1023 * 450 - $("#bookCover").width()) / 2 + "px",
                b = $(window).height() * $("#bookCover").attr("class").split("bookCoverXYA")[1].split(",")[1] / 605 + ($(window).height() / 605 * 450 - $("#bookCover").height()) / 2 + "px",
                c = $("#bookCover").attr("class").split("bookCoverXYA")[1].split(",")[2] + "deg";
            $("#bookCoverBase").velocity({
                rotateZ: c,
                left: a,
                top: b
            }, {
                duration: 0
            })
        }
    },
    setPagesForScreenOrientation: function() {
        "l" == screenOrientation ? ($(".bookCoverOpen").velocity({
            boxShadowY: ".7rem"
        }, {
            duration: 0
        }), $(".bookCoverBaseOpen").velocity({
            rotateZ: "0deg",
            left: $(window).width() / 2 - $("#bookCover").width() + "px",
            top: $(window).height() / 2 - $("#bookCover").height() / 2 + "px"
        }, {
            duration: 0
        })) : "p" == screenOrientation && ($(".bookCoverOpen").velocity({
            boxShadowY: "-.7rem"
        }, {
            duration: 0
        }), $(".bookCoverBaseOpen").velocity({
            rotateZ: "90deg",
            left: $(window).width() / 2 - $("#bookCover").width() + "px",
            top: $(window).height() / 2 - $("#bookCover").height() / 2 + "px"
        }, {
            duration: 0
        })), $("#bookCoverBase:not(.bookCoverBaseOpen)").velocity({
            left: $(window).width() / 2 - $("#bookCover").width() / 2 + "px",
            top: $(window).height() / 2 - $("#bookCover").height() / 2 + "px"
        }, {
            duration: 0
        })
    },
    turnPagePrevious: function() {
        Screen.blockUI(), Images.stopVideos();
        var a = Page.currentPage - 1;
        Page.currentPage--, 0 > a ? Page.closeBook() : $(window).width() >= $(window).height() ? ($(".rightPageBase[data-pagenumber='" + a + "']").velocity({
            rotateX: "0deg",
            rotateY: "-90deg",
            width: "90rem"
        }, {
            duration: 0,
            display: "block"
        }), $(".leftPageBase[data-pagenumber='" + (a + 1) + "']").velocity({
            width: "90rem"
        }, {
            duration: 0
        }), $(".leftPageBase[data-pagenumber='" + (a + 1) + "']").velocity({
            rotateY: "90deg"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "easeInQuad",
            complete: function() {
                $(".leftPageBase[data-pagenumber='" + (a + 1) + "']").velocity({
                    width: "45rem"
                }, {
                    duration: 0,
                    display: "none"
                }), $(".rightPageBase[data-pagenumber='" + a + "']").velocity({
                    rotateY: "0deg"
                }, {
                    duration: Page.pageTurnSpeed,
                    easing: "easeOutQuad",
                    complete: function() {
                        $(".rightPageBase[data-pagenumber='" + a + "']").velocity({
                            width: "45rem"
                        }, {
                            duration: 0
                        }), Screen.unblockUI()
                    }
                })
            }
        })) : ($(".rightPageBase[data-pagenumber='" + a + "']").velocity({
            rotateX: "90deg",
            rotateY: "0deg",
            height: "90rem"
        }, {
            duration: 0,
            display: "block"
        }), $(".leftPageBase[data-pagenumber='" + (a + 1) + "']").velocity({
            height: "90rem"
        }, {
            duration: 0
        }), $(".leftPageBase[data-pagenumber='" + (a + 1) + "']").velocity({
            rotateX: "-90deg"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "easeInQuad",
            complete: function() {
                $(".leftPageBase[data-pagenumber='" + (a + 1) + "']").velocity({
                    height: "45rem"
                }, {
                    duration: 0,
                    display: "none"
                }), $(".rightPageBase[data-pagenumber='" + a + "']").velocity({
                    rotateX: "0deg"
                }, {
                    duration: Page.pageTurnSpeed,
                    easing: "easeOutQuad",
                    complete: function() {
                        $(".rightPageBase[data-pagenumber='" + a + "']").velocity({
                            height: "45rem"
                        }, {
                            duration: 0
                        }), Screen.unblockUI()
                    }
                })
            }
        }))
    },
    turnPageNext: function() {
        Screen.blockUI(), Images.stopVideos();
        var a = Page.currentPage + 1;
        Page.currentPage++, a > $("#pages section").length ? Page.closeBook() : $(window).width() >= $(window).height() ? ($(".leftPageBase[data-pagenumber='" + a + "']").velocity({
            rotateX: "0deg",
            rotateY: "90deg",
            width: "90rem"
        }, {
            duration: 0,
            display: "block"
        }), $(".rightPageBase[data-pagenumber='" + (a - 1) + "']").velocity({
            width: "90rem"
        }, {
            duration: 0
        }), $(".rightPageBase[data-pagenumber='" + (a - 1) + "']").velocity({
            rotateY: "-90deg"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "easeInQuad",
            complete: function() {
                $(".rightPageBase[data-pagenumber='" + (a - 1) + "']").velocity({
                    width: "45rem"
                }, {
                    duration: 0,
                    display: "none"
                }), $(".leftPageBase[data-pagenumber='" + a + "']").velocity({
                    rotateY: "0deg"
                }, {
                    duration: Page.pageTurnSpeed,
                    easing: "easeOutQuad",
                    complete: function() {
                        $(".leftPageBase[data-pagenumber='" + a + "']").velocity({
                            width: "45rem"
                        }, {
                            duration: 0
                        }), Screen.unblockUI()
                    }
                })
            }
        })) : ($(".leftPageBase[data-pagenumber='" + a + "']").velocity({
            rotateX: "-90deg",
            rotateY: "0deg",
            height: "90rem"
        }, {
            duration: 0,
            display: "block"
        }), $(".rightPageBase[data-pagenumber='" + (a - 1) + "']").velocity({
            height: "90rem"
        }, {
            duration: 0
        }), $(".rightPageBase[data-pagenumber='" + (a - 1) + "']").velocity({
            rotateX: "90deg"
        }, {
            duration: Page.pageTurnSpeed,
            easing: "easeInQuad",
            complete: function() {
                $(".rightPageBase[data-pagenumber='" + (a - 1) + "']").velocity({
                    height: "45rem"
                }, {
                    duration: 0,
                    display: "none"
                }), $(".leftPageBase[data-pagenumber='" + a + "']").velocity({
                    rotateX: "0deg"
                }, {
                    duration: Page.pageTurnSpeed,
                    easing: "easeOutQuad",
                    complete: function() {
                        $(".leftPageBase[data-pagenumber='" + a + "']").velocity({
                            height: "45rem"
                        }, {
                            duration: 0
                        }), Screen.unblockUI()
                    }
                })
            }
        }))
    },
    turnToPage: function(a) {
        function b(a) {
            -1 * (a - Page.currentPage) <= 1 && (Page.pageTurnSpeed = c), a > Page.currentPage ? Page.turnPageNext() : a < Page.currentPage && Page.turnPagePrevious(), a != Page.currentPage && setTimeout(b, .2 * Page.pageTurnSpeed, a)
        }
        var c = Page.pageTurnSpeed + 0;
        a != Page.currentPage && (Math.abs(a - Page.currentPage) > 1 && (Page.pageTurnSpeed = Page.pageTurnSpeed / 2), b(a))
    }
};
$(function() {
    $(".pollSubmitButton").click(function(a) {
        Poll.submitPoll($(a.target).closest(".pageSection[data-pollid]")), a.stopPropagation()
    }), $(".pollResultsButton").click(function(a) {
        Poll.submitViewPollResults($(a.target).closest(".pageSection[data-pollid]")), a.stopPropagation()
    })
});
var Poll = {
        submitBackToPoll: function(a) {
            $.post(versionFolder + "forms/poll.php", "wedding=" + $("#book").attr("data-wedding") + "&refresh=1&poll=" + $(a).attr("data-pollid"), function(b) {
                if (b.startsWith("<section")) {
                    var c = $.parseHTML(b);
                    $(a).replaceWith(c), "undefined" != typeof PollCP && null !== PollCP && ($(c).click(function() {
                        PollCP.goToEdit(event, !0)
                    }), SectionCP.setSectionActiveIcon(c), PollCP.stopInputPropagation()), $(c).find(".pollSubmitButton").click(function(a) {
                        Poll.submitPoll($(a.target).closest(".pageSection[data-pollid]")), a.stopPropagation()
                    }), $(c).find(".pollResultsButton").click(function(a) {
                        Poll.submitViewPollResults($(a.target).closest(".pageSection[data-pollid]")), a.stopPropagation()
                    }), Images.setPagePhotoButtons($(c).parent())
                } else Modal.createErrorWindow(b)
            }), event.preventDefault()
        },
        submitPoll: function(a) {
            $.post(versionFolder + "forms/poll.php", "wedding=" + $("#book").attr("data-wedding") + "&poll=" + $(a).attr("data-pollid") + "&vote=" + $(a).find("input[name=poll]:checked").val(), function(b) {
                if (b.startsWith("<section")) {
                    var c = $.parseHTML(b);
                    $(a).replaceWith(c), "undefined" != typeof PollCP && null !== PollCP && ($(c).click(function() {
                        PollCP.goToEdit(event, !0)
                    }), SectionCP.setSectionActiveIcon(c), PollCP.stopInputPropagation()), Images.setPagePhotoButtons($(c).parent())
                } else Modal.createErrorWindow(b);

            }), event.preventDefault()
        },
        submitViewPollResults: function(a) {
            $.post(versionFolder + "forms/poll.php", "wedding=" + $("#book").attr("data-wedding") + "&poll=" + $(a).attr("data-pollid"), function(b) {
                if (b.startsWith("<section")) {
                    var c = $.parseHTML(b);
                    $(a).replaceWith(c), "undefined" != typeof PollCP && null !== PollCP && ($(c).click(function() {
                        PollCP.goToEdit(event, !0)
                    }), SectionCP.setSectionActiveIcon(c), PollCP.stopInputPropagation()), $(c).find(".pollBackButton").click(function(a) {
                        Poll.submitBackToPoll($(a.target).closest(".pageSection[data-pollid]")), a.stopPropagation()
                    }), Images.setPagePhotoButtons($(c).parent())
                } else Modal.createErrorWindow(b)
            }), event.preventDefault()
        }
    },
    Screen = {
        blockUI: function() {
            $("#uiBlock").show()
        },
        unblockUI: function() {
            $("#uiBlock").hide()
        }
    };
$(function() {
    Tools.setScreenOrientation(), $(window).resize(Tools.setScreenOrientation)
});
var Tools = {
    flashVersionIsActive: function() {
        var a = !0;
        return 0 == $(".flashContent").length && (a = !1), a
    },
    isCP: function() {
        var a = !1;
        return $("#cpBookSection").length > 0 && (a = !0), a
    },
    isInt: function(a) {
        return Math.floor(a) == a && $.isNumeric(a) ? !0 : !1
    },
    isWedsiteCom: function() {
        var a = !1;
        return $("#sampleSection").length > 0 && (a = !0), a
    },
    randIntBetween: function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    },
    setScreenOrientation: function() {
        var a = screenOrientation;
        screenOrientation = $(document).width() < $(document).height() ? "p" : "l", screenOrientation != a && Page.setPagesForScreenOrientation()
    }
};
$(function() {
        $(document).ajaxError(function(a, b, c, d) {
            alert("AJAX error:" + d)
        }), $(document).ajaxStart(function() {
            $(".loader").fadeTo(0, .5)
        }), $(document).ajaxStop(function() {
            $(".loader").fadeOut(500)
        })
    }), $(window).on("load", function() {
        $(".loader").fadeOut(500)
    }),
    function(a) {
        function b(a, b) {
            return a.currentStyle && a.currentStyle[b] || a.style[b]
        }

        function c(c) {
            var d = a(c).css("clip") || "";
            if (!d) {
                var e = {
                    top: b(c, "clipTop"),
                    right: b(c, "clipRight"),
                    bottom: b(c, "clipBottom"),
                    left: b(c, "clipLeft")
                };
                e.top && e.right && e.bottom && e.left && (d = "rect(" + e.top + " " + e.right + " " + e.bottom + " " + e.left + ")")
            }
            return d.replace(/,/g, " ")
        }
        a.fx.step.clip = function(a) {
            if (0 === a.pos) {
                var b = /rect\(([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)\)/;
                a.start = b.exec(c(a.elem)), "string" == typeof a.end && (a.end = b.exec(a.end.replace(/,/g, " ")))
            }
            if (a.start && a.end) {
                for (var d = new Array, e = new Array, f = a.start.length, g = a.end.length, h = "em" == a.start[i + 1] ? 1.333 * parseInt($(a.elem).css("fontSize")) * parseInt(a.start[i]) : 1, i = 1; f > i; i += 2) d.push(parseInt(h * a.start[i]));
                for (var j = 1; g > j; j += 2) e.push(parseInt(h * a.end[j]));
                a.elem.style.clip = "rect(" + parseInt(a.pos * (e[0] - d[0]) + d[0]) + "px " + parseInt(a.pos * (e[1] - d[1]) + d[1]) + "px " + parseInt(a.pos * (e[2] - d[2]) + d[2]) + "px " + parseInt(a.pos * (e[3] - d[3]) + d[3]) + "px)"
            }
        }
    }(jQuery),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery)
    }(this, function(a) {
        function b(a) {
            if (a in l.style) return a;
            for (var b = ["Moz", "Webkit", "O", "ms"], c = a.charAt(0).toUpperCase() + a.substr(1), d = 0; d < b.length; ++d) {
                var e = b[d] + c;
                if (e in l.style) return e
            }
        }

        function c() {
            return l.style[m.transform] = "", l.style[m.transform] = "rotateY(90deg)", "" !== l.style[m.transform]
        }

        function d(a) {
            return "string" == typeof a && this.parse(a), this
        }

        function e(a, b, c) {
            b === !0 ? a.queue(c) : b ? a.queue(b, c) : a.each(function() {
                c.call(this)
            })
        }

        function f(b) {
            var c = [];
            return a.each(b, function(b) {
                b = a.camelCase(b), b = a.transit.propertyMap[b] || a.cssProps[b] || b, b = i(b), m[b] && (b = i(m[b])), -1 === a.inArray(b, c) && c.push(b)
            }), c
        }

        function g(b, c, d, e) {
            var g = f(b);
            a.cssEase[d] && (d = a.cssEase[d]);
            var h = "" + k(c) + " " + d;
            parseInt(e, 10) > 0 && (h += " " + k(e));
            var i = [];
            return a.each(g, function(a, b) {
                i.push(b + " " + h)
            }), i.join(", ")
        }

        function h(b, c) {
            c || (a.cssNumber[b] = !0), a.transit.propertyMap[b] = m.transform, a.cssHooks[b] = {
                get: function(c) {
                    var d = a(c).css("transit:transform");
                    return d.get(b)
                },
                set: function(c, d) {
                    var e = a(c).css("transit:transform");
                    e.setFromString(b, d), a(c).css({
                        "transit:transform": e
                    })
                }
            }
        }

        function i(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }

        function j(a, b) {
            return "string" != typeof a || a.match(/^[\-0-9\.]+$/) ? "" + a + b : a
        }

        function k(b) {
            var c = b;
            return "string" != typeof c || c.match(/^[\-0-9\.]+/) || (c = a.fx.speeds[c] || a.fx.speeds._default), j(c, "ms")
        }
        a.transit = {
            version: "0.9.12",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var l = document.createElement("div"),
            m = {},
            n = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        m.transition = b("transition"), m.transitionDelay = b("transitionDelay"), m.transform = b("transform"), m.transformOrigin = b("transformOrigin"), m.filter = b("Filter"), m.transform3d = c();
        var o = {
                transition: "transitionend",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                WebkitTransition: "webkitTransitionEnd",
                msTransition: "MSTransitionEnd"
            },
            p = m.transitionEnd = o[m.transition] || null;
        for (var q in m) m.hasOwnProperty(q) && "undefined" == typeof a.support[q] && (a.support[q] = m[q]);
        return l = null, a.cssEase = {
            _default: "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }, a.cssHooks["transit:transform"] = {
            get: function(b) {
                return a(b).data("transform") || new d
            },
            set: function(b, c) {
                var e = c;
                e instanceof d || (e = new d(e)), b.style[m.transform] = "WebkitTransform" !== m.transform || n ? e.toString() : e.toString(!0), a(b).data("transform", e)
            }
        }, a.cssHooks.transform = {
            set: a.cssHooks["transit:transform"].set
        }, a.cssHooks.filter = {
            get: function(a) {
                return a.style[m.filter]
            },
            set: function(a, b) {
                a.style[m.filter] = b
            }
        }, a.fn.jquery < "1.8" && (a.cssHooks.transformOrigin = {
            get: function(a) {
                return a.style[m.transformOrigin]
            },
            set: function(a, b) {
                a.style[m.transformOrigin] = b
            }
        }, a.cssHooks.transition = {
            get: function(a) {
                return a.style[m.transition]
            },
            set: function(a, b) {
                a.style[m.transition] = b
            }
        }), h("scale"), h("scaleX"), h("scaleY"), h("translate"), h("rotate"), h("rotateX"), h("rotateY"), h("rotate3d"), h("perspective"), h("skewX"), h("skewY"), h("x", !0), h("y", !0), d.prototype = {
            setFromString: function(a, b) {
                var c = "string" == typeof b ? b.split(",") : b.constructor === Array ? b : [b];
                c.unshift(a), d.prototype.set.apply(this, c)
            },
            set: function(a) {
                var b = Array.prototype.slice.apply(arguments, [1]);
                this.setter[a] ? this.setter[a].apply(this, b) : this[a] = b.join(",")
            },
            get: function(a) {
                return this.getter[a] ? this.getter[a].apply(this) : this[a] || 0
            },
            setter: {
                rotate: function(a) {
                    this.rotate = j(a, "deg")
                },
                rotateX: function(a) {
                    this.rotateX = j(a, "deg")
                },
                rotateY: function(a) {
                    this.rotateY = j(a, "deg")
                },
                scale: function(a, b) {
                    void 0 === b && (b = a), this.scale = a + "," + b
                },
                skewX: function(a) {
                    this.skewX = j(a, "deg")
                },
                skewY: function(a) {
                    this.skewY = j(a, "deg")
                },
                perspective: function(a) {
                    this.perspective = j(a, "px")
                },
                x: function(a) {
                    this.set("translate", a, null)
                },
                y: function(a) {
                    this.set("translate", null, a)
                },
                translate: function(a, b) {
                    void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== a && void 0 !== a && (this._translateX = j(a, "px")), null !== b && void 0 !== b && (this._translateY = j(b, "px")), this.translate = this._translateX + "," + this._translateY
                }
            },
            getter: {
                x: function() {
                    return this._translateX || 0
                },
                y: function() {
                    return this._translateY || 0
                },
                scale: function() {
                    var a = (this.scale || "1,1").split(",");
                    return a[0] && (a[0] = parseFloat(a[0])), a[1] && (a[1] = parseFloat(a[1])), a[0] === a[1] ? a[0] : a
                },
                rotate3d: function() {
                    for (var a = (this.rotate3d || "0,0,0,0deg").split(","), b = 0; 3 >= b; ++b) a[b] && (a[b] = parseFloat(a[b]));
                    return a[3] && (a[3] = j(a[3], "deg")), a
                }
            },
            parse: function(a) {
                var b = this;
                a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(a, c, d) {
                    b.setFromString(c, d)
                })
            },
            toString: function(a) {
                var b = [];
                for (var c in this)
                    if (this.hasOwnProperty(c)) {
                        if (!m.transform3d && ("rotateX" === c || "rotateY" === c || "perspective" === c || "transformOrigin" === c)) continue;
                        "_" !== c[0] && b.push(a && "scale" === c ? c + "3d(" + this[c] + ",1)" : a && "translate" === c ? c + "3d(" + this[c] + ",0)" : c + "(" + this[c] + ")")
                    }
                return b.join(" ")
            }
        }, a.fn.transition = a.fn.transit = function(b, c, d, f) {
            var h = this,
                i = 0,
                j = !0,
                l = a.extend(!0, {}, b);
            "function" == typeof c && (f = c, c = void 0), "object" == typeof c && (d = c.easing, i = c.delay || 0, j = "undefined" == typeof c.queue ? !0 : c.queue, f = c.complete, c = c.duration), "function" == typeof d && (f = d, d = void 0), "undefined" != typeof l.easing && (d = l.easing, delete l.easing), "undefined" != typeof l.duration && (c = l.duration, delete l.duration), "undefined" != typeof l.complete && (f = l.complete, delete l.complete), "undefined" != typeof l.queue && (j = l.queue, delete l.queue), "undefined" != typeof l.delay && (i = l.delay, delete l.delay), "undefined" == typeof c && (c = a.fx.speeds._default), "undefined" == typeof d && (d = a.cssEase._default), c = k(c);
            var n = g(l, c, d, i),
                o = a.transit.enabled && m.transition,
                q = o ? parseInt(c, 10) + parseInt(i, 10) : 0;
            if (0 === q) {
                var r = function(a) {
                    h.css(l), f && f.apply(h), a && a()
                };
                return e(h, j, r), h
            }
            var s = {},
                t = function(b) {
                    var c = !1,
                        d = function() {
                            c && h.unbind(p, d), q > 0 && h.each(function() {
                                this.style[m.transition] = s[this] || null
                            }), "function" == typeof f && f.apply(h), "function" == typeof b && b()
                        };
                    q > 0 && p && a.transit.useTransitionEnd ? (c = !0, h.bind(p, d)) : window.setTimeout(d, q), h.each(function() {
                        q > 0 && (this.style[m.transition] = n), a(this).css(l)
                    })
                },
                u = function(a) {
                    this.offsetWidth, t(a)
                };
            return e(h, j, u), this
        }, a.transit.getTransitionValue = g, a
    }), ! function(a) {
        "use strict";

        function b(a) {
            var b = a.length,
                d = c.type(a);
            return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }
        if (!a.jQuery) {
            var c = function(a, b) {
                return new c.fn.init(a, b)
            };
            c.isWindow = function(a) {
                return a && a === a.window
            }, c.type = function(a) {
                return a ? "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a : a + ""
            }, c.isArray = Array.isArray || function(a) {
                return "array" === c.type(a)
            }, c.isPlainObject = function(a) {
                var b;
                if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
                try {
                    if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (d) {
                    return !1
                }
                for (b in a);
                return void 0 === b || f.call(a, b)
            }, c.each = function(a, c, d) {
                var e, f = 0,
                    g = a.length,
                    h = b(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (a.hasOwnProperty(f) && (e = c.apply(a[f], d), e === !1)) break
                } else if (h)
                    for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (a.hasOwnProperty(f) && (e = c.call(a[f], f, a[f]), e === !1)) break; return a
            }, c.data = function(a, b, e) {
                if (void 0 === e) {
                    var f = a[c.expando],
                        g = f && d[f];
                    if (void 0 === b) return g;
                    if (g && b in g) return g[b]
                } else if (void 0 !== b) {
                    var h = a[c.expando] || (a[c.expando] = ++c.uuid);
                    return d[h] = d[h] || {}, d[h][b] = e, e
                }
            }, c.removeData = function(a, b) {
                var e = a[c.expando],
                    f = e && d[e];
                f && (b ? c.each(b, function(a, b) {
                    delete f[b]
                }) : delete d[e])
            }, c.extend = function() {
                var a, b, d, e, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                    if (f = arguments[i])
                        for (e in f) f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d)));
                return h
            }, c.queue = function(a, d, e) {
                function f(a, c) {
                    var d = c || [];
                    return a && (b(Object(a)) ? ! function(a, b) {
                        for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                        if (c !== c)
                            for (; void 0 !== b[d];) a[e++] = b[d++];
                        return a.length = e, a
                    }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
                }
                if (a) {
                    d = (d || "fx") + "queue";
                    var g = c.data(a, d);
                    return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
                }
            }, c.dequeue = function(a, b) {
                c.each(a.nodeType ? [a] : a, function(a, d) {
                    b = b || "fx";
                    var e = c.queue(d, b),
                        f = e.shift();
                    "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                        c.dequeue(d, b)
                    }))
                })
            }, c.fn = c.prototype = {
                init: function(a) {
                    if (a.nodeType) return this[0] = a, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function a(a) {
                        for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position;) b = b.offsetParent;
                        return b || document
                    }
                    var b = this[0],
                        d = a(b),
                        e = this.offset(),
                        f = /^(?:body|html)$/i.test(d.nodeName) ? {
                            top: 0,
                            left: 0
                        } : c(d).offset();
                    return e.top -= parseFloat(b.style.marginTop) || 0, e.left -= parseFloat(b.style.marginLeft) || 0, d.style && (f.top += parseFloat(d.style.borderTopWidth) || 0, f.left += parseFloat(d.style.borderLeftWidth) || 0), {
                        top: e.top - f.top,
                        left: e.left - f.left
                    }
                }
            };
            var d = {};
            c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
            for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
            c.fn.init.prototype = c.fn, a.Velocity = {
                Utilities: c
            }
        }
    }(window),
    function(a) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
    }(function() {
        "use strict";
        return function(a, b, c, d) {
            function e(a) {
                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                    var e = a[b];
                    e && d.push(e)
                }
                return d
            }

            function f(a) {
                return t.isWrapped(a) ? a = s.call(a) : t.isNode(a) && (a = [a]), a
            }

            function g(a) {
                var b = o.data(a, "velocity");
                return null === b ? d : b
            }

            function h(a, b) {
                var c = g(a);
                c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout))
            }

            function i(a) {
                var b = g(a);
                b && b.delayTimer && b.delayPaused && (b.delayPaused = !1, b.delayTimer.setTimeout = setTimeout(b.delayTimer.next, b.delayRemaining))
            }

            function j(a) {
                return function(b) {
                    return Math.round(b * a) * (1 / a)
                }
            }

            function k(a, c, d, e) {
                function f(a, b) {
                    return 1 - 3 * b + 3 * a
                }

                function g(a, b) {
                    return 3 * b - 6 * a
                }

                function h(a) {
                    return 3 * a
                }

                function i(a, b, c) {
                    return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
                }

                function j(a, b, c) {
                    return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
                }

                function k(b, c) {
                    for (var e = 0; p > e; ++e) {
                        var f = j(c, a, d);
                        if (0 === f) return c;
                        var g = i(c, a, d) - b;
                        c -= g / f
                    }
                    return c
                }

                function l() {
                    for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
                }

                function m(b, c, e) {
                    var f, g, h = 0;
                    do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                    return g
                }

                function n(b) {
                    for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) c += u;
                    --e;
                    var g = (b - x[e]) / (x[e + 1] - x[e]),
                        h = c + g * u,
                        i = j(h, a, d);
                    return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u)
                }

                function o() {
                    y = !0, a === c && d === e || l()
                }
                var p = 4,
                    q = .001,
                    r = 1e-7,
                    s = 10,
                    t = 11,
                    u = 1 / (t - 1),
                    v = "Float32Array" in b;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
                var x = v ? new Float32Array(t) : new Array(t),
                    y = !1,
                    z = function(b) {
                        return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                    };
                z.getControlPoints = function() {
                    return [{
                        x: a,
                        y: c
                    }, {
                        x: d,
                        y: e
                    }]
                };
                var A = "generateBezier(" + [a, c, d, e] + ")";
                return z.toString = function() {
                    return A
                }, z
            }

            function l(a, b) {
                var c = a;
                return t.isString(a) ? x.Easings[a] || (c = !1) : c = t.isArray(a) && 1 === a.length ? j.apply(null, a) : t.isArray(a) && 2 === a.length ? y.apply(null, a.concat([b])) : !(!t.isArray(a) || 4 !== a.length) && k.apply(null, a), c === !1 && (c = x.Easings[x.defaults.easing] ? x.defaults.easing : w), c
            }

            function m(a) {
                if (a) {
                    var b = x.timestamp && a !== !0 ? a : r.now(),
                        c = x.State.calls.length;
                    c > 1e4 && (x.State.calls = e(x.State.calls), c = x.State.calls.length);
                    for (var f = 0; c > f; f++)
                        if (x.State.calls[f]) {
                            var h = x.State.calls[f],
                                i = h[0],
                                j = h[2],
                                k = h[3],
                                l = !!k,
                                q = null,
                                s = h[5],
                                u = h[6];
                            if (k || (k = x.State.calls[f][3] = b - 16), s) {
                                if (s.resume !== !0) continue;
                                k = h[3] = Math.round(b - u - 16), h[5] = null
                            }
                            u = h[6] = b - k;
                            for (var v = Math.min(u / j.duration, 1), w = 0, y = i.length; y > w; w++) {
                                var A = i[w],
                                    C = A.element;
                                if (g(C)) {
                                    var D = !1;
                                    if (j.display !== d && null !== j.display && "none" !== j.display) {
                                        if ("flex" === j.display) {
                                            var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            o.each(E, function(a, b) {
                                                z.setPropertyValue(C, "display", b)
                                            })
                                        }
                                        z.setPropertyValue(C, "display", j.display)
                                    }
                                    j.visibility !== d && "hidden" !== j.visibility && z.setPropertyValue(C, "visibility", j.visibility);
                                    for (var F in A)
                                        if (A.hasOwnProperty(F) && "element" !== F) {
                                            var G, H = A[F],
                                                I = t.isString(H.easing) ? x.Easings[H.easing] : H.easing;
                                            if (t.isString(H.pattern)) {
                                                var J = 1 === v ? function(a, b, c) {
                                                    var d = H.endValue[b];
                                                    return c ? Math.round(d) : d
                                                } : function(a, b, c) {
                                                    var d = H.startValue[b],
                                                        e = H.endValue[b] - d,
                                                        f = d + e * I(v, j, e);
                                                    return c ? Math.round(f) : f
                                                };
                                                G = H.pattern.replace(/{(\d+)(!)?}/g, J)
                                            } else if (1 === v) G = H.endValue;
                                            else {
                                                var K = H.endValue - H.startValue;
                                                G = H.startValue + K * I(v, j, K)
                                            }
                                            if (!l && G === H.currentValue) continue;
                                            if (H.currentValue = G, "tween" === F) q = G;
                                            else {
                                                var L;
                                                if (z.Hooks.registered[F]) {
                                                    L = z.Hooks.getRoot(F);
                                                    var M = g(C).rootPropertyValueCache[L];
                                                    M && (H.rootPropertyValue = M)
                                                }
                                                var N = z.setPropertyValue(C, F, H.currentValue + (9 > p && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                                                z.Hooks.registered[F] && (g(C).rootPropertyValueCache[L] = z.Normalizations.registered[L] ? z.Normalizations.registered[L]("extract", null, N[1]) : N[1]), "transform" === N[0] && (D = !0)
                                            }
                                        }
                                    j.mobileHA && g(C).transformCache.translate3d === d && (g(C).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && z.flushTransformCache(C)
                                }
                            }
                            j.display !== d && "none" !== j.display && (x.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (x.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f)
                        }
                }
                x.State.isTicking && B(m)
            }

            function n(a, b) {
                if (!x.State.calls[a]) return !1;
                for (var c = x.State.calls[a][0], e = x.State.calls[a][1], f = x.State.calls[a][2], h = x.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                    var l = c[j].element;
                    b || f.loop || ("none" === f.display && z.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && z.setPropertyValue(l, "visibility", f.visibility));
                    var m = g(l);
                    if (f.loop !== !0 && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
                        m.isAnimating = !1, m.rootPropertyValueCache = {};
                        var n = !1;
                        o.each(z.Lists.transforms3D, function(a, b) {
                            var c = /^scale/.test(b) ? 1 : 0,
                                e = m.transformCache[b];
                            m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b])
                        }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && z.flushTransformCache(l), z.Values.removeClass(l, "velocity-animating")
                    }
                    if (!b && f.complete && !f.loop && j === k - 1) try {
                        f.complete.call(e, e)
                    } catch (p) {
                        setTimeout(function() {
                            throw p
                        }, 1)
                    }
                    h && f.loop !== !0 && h(e), m && f.loop === !0 && !b && (o.each(m.tweensContainer, function(a, b) {
                        if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 === 0) {
                            var c = b.startValue;
                            b.startValue = b.endValue, b.endValue = c
                        }
                        /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                    }), x(l, "reverse", {
                        loop: !0,
                        delay: f.delay
                    })), f.queue !== !1 && o.dequeue(l, f.queue)
                }
                x.State.calls[a] = !1;
                for (var q = 0, r = x.State.calls.length; r > q; q++)
                    if (x.State.calls[q] !== !1) {
                        i = !0;
                        break
                    }
                i === !1 && (x.State.isTicking = !1, delete x.State.calls, x.State.calls = [])
            }
            var o, p = function() {
                    if (c.documentMode) return c.documentMode;
                    for (var a = 7; a > 4; a--) {
                        var b = c.createElement("div");
                        if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                    }
                    return d
                }(),
                q = function() {
                    var a = 0;
                    return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                        var c, d = (new Date).getTime();
                        return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                            b(d + c)
                        }, c)
                    }
                }(),
                r = function() {
                    var a = b.performance || {};
                    if (!Object.prototype.hasOwnProperty.call(a, "now")) {
                        var c = a.timing && a.timing.domComplete ? a.timing.domComplete : (new Date).getTime();
                        a.now = function() {
                            return (new Date).getTime() - c
                        }
                    }
                    return a
                }(),
                s = function() {
                    var a = Array.prototype.slice;
                    try {
                        a.call(c.documentElement)
                    } catch (b) {
                        a = function() {
                            for (var a = this.length, b = []; --a > 0;) b[a] = this[a];
                            return cloned
                        }
                    }
                    return a
                }(),
                t = {
                    isNumber: function(a) {
                        return "number" == typeof a
                    },
                    isString: function(a) {
                        return "string" == typeof a
                    },
                    isArray: Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    },
                    isFunction: function(a) {
                        return "[object Function]" === Object.prototype.toString.call(a)
                    },
                    isNode: function(a) {
                        return a && a.nodeType
                    },
                    isWrapped: function(a) {
                        return a && t.isNumber(a.length) && !t.isString(a) && !t.isFunction(a) && !t.isNode(a) && (0 === a.length || t.isNode(a[0]))
                    },
                    isSVG: function(a) {
                        return b.SVGElement && a instanceof b.SVGElement
                    },
                    isEmptyObject: function(a) {
                        for (var b in a)
                            if (a.hasOwnProperty(b)) return !1;
                        return !0
                    }
                },
                u = !1;
            if (a.fn && a.fn.jquery ? (o = a, u = !0) : o = b.Velocity.Utilities, 8 >= p && !u) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var v = 400,
                w = "swing",
                x = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: b.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: c.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: o,
                    Redirects: {},
                    Easings: {},
                    Promise: b.Promise,
                    defaults: {
                        queue: "",
                        duration: v,
                        easing: w,
                        begin: d,
                        complete: d,
                        progress: d,
                        display: d,
                        visibility: d,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function(a) {
                        o.data(a, "velocity", {
                            isSVG: t.isSVG(a),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 4,
                        patch: 2
                    },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function(a) {
                        var b = (new Date).getTime();
                        o.each(x.State.calls, function(b, c) {
                            if (c) {
                                if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                                c[5] = {
                                    resume: !1
                                }
                            }
                        }), o.each(x.State.delayedElements, function(a, c) {
                            c && h(c, b)
                        })
                    },
                    resumeAll: function(a) {
                        var b = (new Date).getTime();
                        o.each(x.State.calls, function(b, c) {
                            if (c) {
                                if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                                c[5] && (c[5].resume = !0)
                            }
                        }), o.each(x.State.delayedElements, function(a, c) {
                            c && i(c, b)
                        })
                    }
                };
            b.pageYOffset !== d ? (x.State.scrollAnchor = b, x.State.scrollPropertyLeft = "pageXOffset", x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, x.State.scrollPropertyLeft = "scrollLeft", x.State.scrollPropertyTop = "scrollTop");
            var y = function() {
                function a(a) {
                    return -a.tension * a.x - a.friction * a.v
                }

                function b(b, c, d) {
                    var e = {
                        x: b.x + d.dx * c,
                        v: b.v + d.dv * c,
                        tension: b.tension,
                        friction: b.friction
                    };
                    return {
                        dx: e.v,
                        dv: a(e)
                    }
                }

                function c(c, d) {
                    var e = {
                            dx: c.v,
                            dv: a(c)
                        },
                        f = b(c, .5 * d, e),
                        g = b(c, .5 * d, f),
                        h = b(c, d, g),
                        i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                        j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                    return c.x = c.x + i * d, c.v = c.v + j * d, c
                }
                return function d(a, b, e) {
                    var f, g, h, i = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        j = [0],
                        k = 0,
                        l = 1e-4,
                        m = .016;
                    for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
                    return f ? function(a) {
                        return j[a * (j.length - 1) | 0]
                    } : k
                }
            }();
            x.Easings = {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                },
                spring: function(a) {
                    return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
                }
            }, o.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(a, b) {
                x.Easings[b[0]] = k.apply(null, b[1])
            });
            var z = x.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var a = 0; a < z.Lists.colors.length; a++) {
                            var b = "color" === z.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                            z.Hooks.templates[z.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                        }
                        var c, d, e;
                        if (p)
                            for (c in z.Hooks.templates)
                                if (z.Hooks.templates.hasOwnProperty(c)) {
                                    d = z.Hooks.templates[c], e = d[0].split(" ");
                                    var f = d[1].match(z.RegEx.valueSplit);
                                    "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), z.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                                }
                        for (c in z.Hooks.templates)
                            if (z.Hooks.templates.hasOwnProperty(c)) {
                                d = z.Hooks.templates[c], e = d[0].split(" ");
                                for (var g in e)
                                    if (e.hasOwnProperty(g)) {
                                        var h = c + e[g],
                                            i = g;
                                        z.Hooks.registered[h] = [c, i]
                                    }
                            }
                    },
                    getRoot: function(a) {
                        var b = z.Hooks.registered[a];
                        return b ? b[0] : a
                    },
                    getUnit: function(a, b) {
                        var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return c && z.Lists.units.indexOf(c) >= 0 ? c : ""
                    },
                    fixColors: function(a) {
                        return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(a, b, c) {
                            return z.Lists.colorNames.hasOwnProperty(c) ? (b ? b : "rgba(") + z.Lists.colorNames[c] + (b ? "" : ",1)") : b + c
                        })
                    },
                    cleanRootPropertyValue: function(a, b) {
                        return z.RegEx.valueUnwrap.test(b) && (b = b.match(z.RegEx.valueUnwrap)[1]), z.Values.isCSSNullValue(b) && (b = z.Hooks.templates[a][1]), b
                    },
                    extractValue: function(a, b) {
                        var c = z.Hooks.registered[a];
                        if (c) {
                            var d = c[0],
                                e = c[1];
                            return b = z.Hooks.cleanRootPropertyValue(d, b), b.toString().match(z.RegEx.valueSplit)[e]
                        }
                        return b
                    },
                    injectValue: function(a, b, c) {
                        var d = z.Hooks.registered[a];
                        if (d) {
                            var e, f, g = d[0],
                                h = d[1];
                            return c = z.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(z.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                        }
                        return c
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(a, b, c) {
                            switch (a) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var d;
                                    return z.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(z.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                                case "inject":
                                    return "rect(" + c + ")"
                            }
                        },
                        blur: function(a, b, c) {
                            switch (a) {
                                case "name":
                                    return x.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var d = parseFloat(c);
                                    if (!d && 0 !== d) {
                                        var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        d = e ? e[1] : 0
                                    }
                                    return d;
                                case "inject":
                                    return parseFloat(c) ? "blur(" + c + ")" : "none"
                            }
                        },
                        opacity: function(a, b, c) {
                            if (8 >= p) switch (a) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return c = d ? d[1] / 100 : 1;
                                case "inject":
                                    return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                            } else switch (a) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return c;
                                case "inject":
                                    return c
                            }
                        }
                    },
                    register: function() {
                        function a(a, b, c) {
                            var d = "border-box" === z.getPropertyValue(b, "boxSizing").toString().toLowerCase();
                            if (d === (c || !1)) {
                                var e, f, g = 0,
                                    h = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
                                    i = ["padding" + h[0], "padding" + h[1], "border" + h[0] + "Width", "border" + h[1] + "Width"];
                                for (e = 0; e < i.length; e++) f = parseFloat(z.getPropertyValue(b, i[e])), isNaN(f) || (g += f);
                                return c ? -g : g
                            }
                            return 0
                        }

                        function b(b, c) {
                            return function(d, e, f) {
                                switch (d) {
                                    case "name":
                                        return b;
                                    case "extract":
                                        return parseFloat(f) + a(b, e, c);
                                    case "inject":
                                        return parseFloat(f) - a(b, e, c) + "px"
                                }
                            }
                        }
                        p && !(p > 9) || x.State.isGingerbread || (z.Lists.transformsBase = z.Lists.transformsBase.concat(z.Lists.transforms3D));

                        for (var c = 0; c < z.Lists.transformsBase.length; c++) ! function() {
                            var a = z.Lists.transformsBase[c];
                            z.Normalizations.registered[a] = function(b, c, e) {
                                switch (b) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");
                                    case "inject":
                                        var f = !1;
                                        switch (a.substr(0, a.length - 1)) {
                                            case "translate":
                                                f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                                break;
                                            case "scal":
                                            case "scale":
                                                x.State.isAndroid && g(c).transformCache[a] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                                break;
                                            case "skew":
                                                f = !/(deg|\d)$/i.test(e);
                                                break;
                                            case "rotate":
                                                f = !/(deg|\d)$/i.test(e)
                                        }
                                        return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a]
                                }
                            }
                        }();
                        for (var e = 0; e < z.Lists.colors.length; e++) ! function() {
                            var a = z.Lists.colors[e];
                            z.Normalizations.registered[a] = function(b, c, e) {
                                switch (b) {
                                    case "name":
                                        return a;
                                    case "extract":
                                        var f;
                                        if (z.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                        else {
                                            var g, h = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : z.RegEx.isHex.test(e) ? g = "rgb(" + z.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(z.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;
                                    case "inject":
                                        return /^rgb/.test(e) ? e : (8 >= p ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                }
                            }
                        }();
                        z.Normalizations.registered.innerWidth = b("width", !0), z.Normalizations.registered.innerHeight = b("height", !0), z.Normalizations.registered.outerWidth = b("width"), z.Normalizations.registered.outerHeight = b("height")
                    }
                },
                Names: {
                    camelCase: function(a) {
                        return a.replace(/-(\w)/g, function(a, b) {
                            return b.toUpperCase()
                        })
                    },
                    SVGAttribute: function(a) {
                        var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (p || x.State.isAndroid && !x.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                    },
                    prefixCheck: function(a) {
                        if (x.State.prefixMatches[a]) return [x.State.prefixMatches[a], !0];
                        for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                            var e;
                            if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                    return a.toUpperCase()
                                }), t.isString(x.State.prefixElement.style[e])) return x.State.prefixMatches[a] = e, [e, !0]
                        }
                        return [a, !1]
                    }
                },
                Values: {
                    hexToRgb: function(a) {
                        var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return a = a.replace(c, function(a, b, c, d) {
                            return b + b + c + c + d + d
                        }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(a) {
                        return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                    },
                    getUnitType: function(a) {
                        return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                    },
                    getDisplayType: function(a) {
                        var b = a && a.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                    },
                    addClass: function(a, b) {
                        if (a)
                            if (a.classList) a.classList.add(b);
                            else if (t.isString(a.className)) a.className += (a.className.length ? " " : "") + b;
                        else {
                            var c = a.getAttribute(7 >= p ? "className" : "class") || "";
                            a.setAttribute("class", c + (c ? " " : "") + b)
                        }
                    },
                    removeClass: function(a, b) {
                        if (a)
                            if (a.classList) a.classList.remove(b);
                            else if (t.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                        else {
                            var c = a.getAttribute(7 >= p ? "className" : "class") || "";
                            a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "))
                        }
                    }
                },
                getPropertyValue: function(a, c, e, f) {
                    function h(a, c) {
                        var e = 0;
                        if (8 >= p) e = o.css(a, c);
                        else {
                            var i = !1;
                            /^(width|height)$/.test(c) && 0 === z.getPropertyValue(a, "display") && (i = !0, z.setPropertyValue(a, "display", z.Values.getDisplayType(a)));
                            var j = function() {
                                i && z.setPropertyValue(a, "display", "none")
                            };
                            if (!f) {
                                if ("height" === c && "border-box" !== z.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                    var k = a.offsetHeight - (parseFloat(z.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingBottom")) || 0);
                                    return j(), k
                                }
                                if ("width" === c && "border-box" !== z.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                    var l = a.offsetWidth - (parseFloat(z.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingRight")) || 0);
                                    return j(), l
                                }
                            }
                            var m;
                            m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j()
                        }
                        if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
                            var n = h(a, "position");
                            ("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px")
                        }
                        return e
                    }
                    var i;
                    if (z.Hooks.registered[c]) {
                        var j = c,
                            k = z.Hooks.getRoot(j);
                        e === d && (e = z.getPropertyValue(a, z.Names.prefixCheck(k)[0])), z.Normalizations.registered[k] && (e = z.Normalizations.registered[k]("extract", a, e)), i = z.Hooks.extractValue(j, e)
                    } else if (z.Normalizations.registered[c]) {
                        var l, m;
                        l = z.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, z.Names.prefixCheck(l)[0]), z.Values.isCSSNullValue(m) && z.Hooks.templates[c] && (m = z.Hooks.templates[c][1])), i = z.Normalizations.registered[c]("extract", a, m)
                    }
                    if (!/^[\d-]/.test(i)) {
                        var n = g(a);
                        if (n && n.isSVG && z.Names.SVGAttribute(c))
                            if (/^(height|width)$/i.test(c)) try {
                                i = a.getBBox()[c]
                            } catch (q) {
                                i = 0
                            } else i = a.getAttribute(c);
                            else i = h(a, z.Names.prefixCheck(c)[0])
                    }
                    return z.Values.isCSSNullValue(i) && (i = 0), x.debug >= 2 && console.log("Get " + c + ": " + i), i
                },
                setPropertyValue: function(a, c, d, e, f) {
                    var h = c;
                    if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                    else if (z.Normalizations.registered[c] && "transform" === z.Normalizations.registered[c]("name", a)) z.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                    else {
                        if (z.Hooks.registered[c]) {
                            var i = c,
                                j = z.Hooks.getRoot(c);
                            e = e || z.getPropertyValue(a, j), d = z.Hooks.injectValue(i, d, e), c = j
                        }
                        if (z.Normalizations.registered[c] && (d = z.Normalizations.registered[c]("inject", a, d), c = z.Normalizations.registered[c]("name", a)), h = z.Names.prefixCheck(c)[0], 8 >= p) try {
                            a.style[h] = d
                        } catch (k) {
                            x.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                        } else {
                            var l = g(a);
                            l && l.isSVG && z.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d
                        }
                        x.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                    }
                    return [h, d]
                },
                flushTransformCache: function(a) {
                    var b = "",
                        c = g(a);
                    if ((p || x.State.isAndroid && !x.State.isChrome) && c && c.isSVG) {
                        var d = function(b) {
                                return parseFloat(z.getPropertyValue(a, b))
                            },
                            e = {
                                translate: [d("translateX"), d("translateY")],
                                skewX: [d("skewX")],
                                skewY: [d("skewY")],
                                scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")],
                                rotate: [d("rotateZ"), 0, 0]
                            };
                        o.each(g(a).transformCache, function(a) {
                            /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a])
                        })
                    } else {
                        var f, h;
                        o.each(g(a).transformCache, function(c) {
                            return f = g(a).transformCache[c], "transformPerspective" === c ? (h = f, !0) : (9 === p && "rotateZ" === c && (c = "rotate"), void(b += c + f + " "))
                        }), h && (b = "perspective" + h + " " + b)
                    }
                    z.setPropertyValue(a, "transform", b)
                }
            };
            z.Hooks.register(), z.Normalizations.register(), x.hook = function(a, b, c) {
                var e;
                return a = f(a), o.each(a, function(a, f) {
                    if (g(f) === d && x.init(f), c === d) e === d && (e = z.getPropertyValue(f, b));
                    else {
                        var h = z.setPropertyValue(f, b, c);
                        "transform" === h[0] && x.CSS.flushTransformCache(f), e = h
                    }
                }), e
            };
            var A = function() {
                function a() {
                    return k ? y.promise || null : p
                }

                function e(a, e) {
                    function f() {
                        var f, k;
                        if (i.begin && 0 === C) try {
                            i.begin.call(r, r)
                        } catch (n) {
                            setTimeout(function() {
                                throw n
                            }, 1)
                        }
                        if ("scroll" === F) {
                            var p, q, v, w = /^x$/i.test(i.axis) ? "Left" : "Top",
                                A = parseFloat(i.offset) || 0;
                            i.container ? t.isWrapped(i.container) || t.isNode(i.container) ? (i.container = i.container[0] || i.container, p = i.container["scroll" + w], v = p + o(a).position()[w.toLowerCase()] + A) : i.container = null : (p = x.State.scrollAnchor[x.State["scrollProperty" + w]], q = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === w ? "Top" : "Left")]], v = o(a).offset()[w.toLowerCase()] + A), j = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: p,
                                    currentValue: p,
                                    endValue: v,
                                    unitType: "",
                                    easing: i.easing,
                                    scrollData: {
                                        container: i.container,
                                        direction: w,
                                        alternateValue: q
                                    }
                                },
                                element: a
                            }, x.debug && console.log("tweensContainer (scroll): ", j.scroll, a)
                        } else if ("reverse" === F) {
                            if (f = g(a), !f) return;
                            if (!f.tweensContainer) return void o.dequeue(a, i.queue);
                            "none" === f.opts.display && (f.opts.display = "auto"), "hidden" === f.opts.visibility && (f.opts.visibility = "visible"), f.opts.loop = !1, f.opts.begin = null, f.opts.complete = null, u.easing || delete i.easing, u.duration || delete i.duration, i = o.extend({}, f.opts, i), k = o.extend(!0, {}, f ? f.tweensContainer : null);
                            for (var D in k)
                                if (k.hasOwnProperty(D) && "element" !== D) {
                                    var E = k[D].startValue;
                                    k[D].startValue = k[D].currentValue = k[D].endValue, k[D].endValue = E, t.isEmptyObject(u) || (k[D].easing = i.easing), x.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(k[D]), a)
                                }
                            j = k
                        } else if ("start" === F) {
                            f = g(a), f && f.tweensContainer && f.isAnimating === !0 && (k = f.tweensContainer);
                            var G = function(b, c) {
                                    var d, f, g;
                                    return t.isFunction(b) && (b = b.call(a, e, B)), t.isArray(b) ? (d = b[0], !t.isArray(b[1]) && /^[\d-]/.test(b[1]) || t.isFunction(b[1]) || z.RegEx.isHex.test(b[1]) ? g = b[1] : t.isString(b[1]) && !z.RegEx.isHex.test(b[1]) && x.Easings[b[1]] || t.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), t.isFunction(d) && (d = d.call(a, e, B)), t.isFunction(g) && (g = g.call(a, e, B)), [d || 0, f, g]
                                },
                                H = function(e, g) {
                                    var l, m = z.Hooks.getRoot(e),
                                        n = !1,
                                        p = g[0],
                                        q = g[1],
                                        r = g[2];
                                    if (!(f && f.isSVG || "tween" === m || z.Names.prefixCheck(m)[1] !== !1 || z.Normalizations.registered[m] !== d)) return void(x.debug && console.log("Skipping [" + m + "] due to a lack of browser support."));
                                    (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && k && k[e] ? (r === d && (r = k[e].endValue + k[e].unitType), n = f.rootPropertyValueCache[m]) : z.Hooks.registered[e] ? r === d ? (n = z.getPropertyValue(a, m), r = z.getPropertyValue(a, e, n)) : n = z.Hooks.templates[m][1] : r === d && (r = z.getPropertyValue(a, e));
                                    var s, u, v, w = !1,
                                        y = function(a, b) {
                                            var c, d;
                                            return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                                return c = a, ""
                                            }), c || (c = z.Values.getUnitType(a)), [d, c]
                                        };
                                    if (r !== p && t.isString(r) && t.isString(p)) {
                                        l = "";
                                        var A = 0,
                                            B = 0,
                                            C = [],
                                            D = [],
                                            E = 0,
                                            F = 0,
                                            G = 0;
                                        for (r = z.Hooks.fixColors(r), p = z.Hooks.fixColors(p); A < r.length && B < p.length;) {
                                            var H = r[A],
                                                I = p[B];
                                            if (/[\d\.]/.test(H) && /[\d\.]/.test(I)) {
                                                for (var J = H, K = I, M = ".", N = "."; ++A < r.length;) {
                                                    if (H = r[A], H === M) M = "..";
                                                    else if (!/\d/.test(H)) break;
                                                    J += H
                                                }
                                                for (; ++B < p.length;) {
                                                    if (I = p[B], I === N) N = "..";
                                                    else if (!/\d/.test(I)) break;
                                                    K += I
                                                }
                                                var O = z.Hooks.getUnit(r, A),
                                                    P = z.Hooks.getUnit(p, B);
                                                if (A += O.length, B += P.length, O === P) J === K ? l += J + O : (l += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K)));
                                                else {
                                                    var Q = parseFloat(J),
                                                        R = parseFloat(K);
                                                    l += (5 > E ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R))
                                                }
                                            } else {
                                                if (H !== I) {
                                                    E = 0;
                                                    break
                                                }
                                                l += H, A++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && 5 > E || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && (G ? 5 : 4) > F || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0)
                                            }
                                        }
                                        A === r.length && B === p.length || (x.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), l = d), l && (C.length ? (x.debug && console.log('Pattern found "' + l + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, u = v = "") : l = d)
                                    }
                                    l || (s = y(e, r), r = s[0], v = s[1], s = y(e, p), p = s[0].replace(/^([+-\/*])=/, function(a, b) {
                                        return w = b, ""
                                    }), u = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === u && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, u = "em") : /^scale/.test(e) ? (p /= 100, u = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, u = "")));
                                    var S = function() {
                                        var d = {
                                                myParent: a.parentNode || c.body,
                                                position: z.getPropertyValue(a, "position"),
                                                fontSize: z.getPropertyValue(a, "fontSize")
                                            },
                                            e = d.position === L.lastPosition && d.myParent === L.lastParent,
                                            g = d.fontSize === L.lastFontSize;
                                        L.lastParent = d.myParent, L.lastPosition = d.position, L.lastFontSize = d.fontSize;
                                        var h = 100,
                                            i = {};
                                        if (g && e) i.emToPx = L.lastEmToPx, i.percentToPxWidth = L.lastPercentToPxWidth, i.percentToPxHeight = L.lastPercentToPxHeight;
                                        else {
                                            var j = f && f.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                            x.init(j), d.myParent.appendChild(j), o.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                                x.CSS.setPropertyValue(j, b, "hidden")
                                            }), x.CSS.setPropertyValue(j, "position", d.position), x.CSS.setPropertyValue(j, "fontSize", d.fontSize), x.CSS.setPropertyValue(j, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                                x.CSS.setPropertyValue(j, b, h + "%")
                                            }), x.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(z.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(z.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = L.lastEmToPx = (parseFloat(z.getPropertyValue(j, "paddingLeft")) || 1) / h, d.myParent.removeChild(j)
                                        }
                                        return null === L.remToPx && (L.remToPx = parseFloat(z.getPropertyValue(c.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(b.innerWidth) / 100, L.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = L.remToPx, i.vwToPx = L.vwToPx, i.vhToPx = L.vhToPx, x.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), a), i
                                    };
                                    if (/[\/*]/.test(w)) u = v;
                                    else if (v !== u && 0 !== r)
                                        if (0 === p) u = v;
                                        else {
                                            h = h || S();
                                            var T = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                                            switch (v) {
                                                case "%":
                                                    r *= "x" === T ? h.percentToPxWidth : h.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    r *= h[v + "ToPx"]
                                            }
                                            switch (u) {
                                                case "%":
                                                    r *= 1 / ("x" === T ? h.percentToPxWidth : h.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    r *= 1 / h[u + "ToPx"]
                                            }
                                        }
                                    switch (w) {
                                        case "+":
                                            p = r + p;
                                            break;
                                        case "-":
                                            p = r - p;
                                            break;
                                        case "*":
                                            p *= r;
                                            break;
                                        case "/":
                                            p = r / p
                                    }
                                    j[e] = {
                                        rootPropertyValue: n,
                                        startValue: r,
                                        currentValue: r,
                                        endValue: p,
                                        unitType: u,
                                        easing: q
                                    }, l && (j[e].pattern = l), x.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a)
                                };
                            for (var I in s)
                                if (s.hasOwnProperty(I)) {
                                    var J = z.Names.camelCase(I),
                                        K = G(s[I]);
                                    if (z.Lists.colors.indexOf(J) >= 0) {
                                        var N = K[0],
                                            O = K[1],
                                            P = K[2];
                                        if (z.RegEx.isHex.test(N)) {
                                            for (var Q = ["Red", "Green", "Blue"], R = z.Values.hexToRgb(N), S = P ? z.Values.hexToRgb(P) : d, T = 0; T < Q.length; T++) {
                                                var U = [R[T]];
                                                O && U.push(O), S !== d && U.push(S[T]), H(J + Q[T], U)
                                            }
                                            continue
                                        }
                                    }
                                    H(J, K)
                                }
                            j.element = a
                        }
                        j.element && (z.Values.addClass(a, "velocity-animating"), M.push(j), f = g(a), f && ("" === i.queue && (f.tweensContainer = j, f.opts = i), f.isAnimating = !0), C === B - 1 ? (x.State.calls.push([M, r, i, null, y.resolver, null, 0]), x.State.isTicking === !1 && (x.State.isTicking = !0, m())) : C++)
                    }
                    var h, i = o.extend({}, x.defaults, u),
                        j = {};
                    switch (g(a) === d && x.init(a), parseFloat(i.delay) && i.queue !== !1 && o.queue(a, i.queue, function(b) {
                        x.velocityQueueEntryFlag = !0;
                        var c = x.State.delayedElements.count++;
                        x.State.delayedElements[c] = a;
                        var d = function(a) {
                            return function() {
                                x.State.delayedElements[a] = !1, b()
                            }
                        }(c);
                        g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                            setTimeout: setTimeout(b, parseFloat(i.delay)),
                            next: d
                        }
                    }), i.duration.toString().toLowerCase()) {
                        case "fast":
                            i.duration = 200;
                            break;
                        case "normal":
                            i.duration = v;
                            break;
                        case "slow":
                            i.duration = 600;
                            break;
                        default:
                            i.duration = parseFloat(i.duration) || 1
                    }
                    if (x.mock !== !1 && (x.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(x.mock) || 1, i.delay *= parseFloat(x.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !t.isFunction(i.begin) && (i.begin = null), i.progress && !t.isFunction(i.progress) && (i.progress = null), i.complete && !t.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = x.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && x.State.isMobile && !x.State.isGingerbread, i.queue === !1)
                        if (i.delay) {
                            var k = x.State.delayedElements.count++;
                            x.State.delayedElements[k] = a;
                            var n = function(a) {
                                return function() {
                                    x.State.delayedElements[a] = !1, f()
                                }
                            }(k);
                            g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                                setTimeout: setTimeout(f, parseFloat(i.delay)),
                                next: n
                            }
                        } else f();
                    else o.queue(a, i.queue, function(a, b) {
                        return b === !0 ? (y.promise && y.resolver(r), !0) : (x.velocityQueueEntryFlag = !0, void f(a))
                    });
                    "" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a)
                }
                var j, k, p, q, r, s, u, w = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || t.isString(arguments[0].properties));
                t.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = w ? arguments[0].elements || arguments[0].e : arguments[0]);
                var y = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (k && x.Promise && (y.promise = new x.Promise(function(a, b) {
                        y.resolver = a, y.rejecter = b
                    })), w ? (s = arguments[0].properties || arguments[0].p, u = arguments[0].options || arguments[0].o) : (s = arguments[q], u = arguments[q + 1]), r = f(r), !r) return void(y.promise && (s && u && u.promiseRejectEmpty === !1 ? y.resolver() : y.rejecter()));
                var B = r.length,
                    C = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(u)) {
                    var D = q + 1;
                    u = {};
                    for (var E = D; E < arguments.length; E++) t.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? t.isString(arguments[E]) || t.isArray(arguments[E]) ? u.easing = arguments[E] : t.isFunction(arguments[E]) && (u.complete = arguments[E]) : u.duration = arguments[E]
                }
                var F;
                switch (s) {
                    case "scroll":
                        F = "scroll";
                        break;
                    case "reverse":
                        F = "reverse";
                        break;
                    case "pause":
                        var G = (new Date).getTime();
                        return o.each(r, function(a, b) {
                            h(b, G)
                        }), o.each(x.State.calls, function(a, b) {
                            var c = !1;
                            b && o.each(b[1], function(a, e) {
                                var f = u === d ? "" : u;
                                return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || (o.each(r, function(a, d) {
                                    return d === e ? (b[5] = {
                                        resume: !1
                                    }, c = !0, !1) : void 0
                                }), !c && void 0)
                            })
                        }), a();
                    case "resume":
                        return o.each(r, function(a, b) {
                            i(b, G)
                        }), o.each(x.State.calls, function(a, b) {
                            var c = !1;
                            b && o.each(b[1], function(a, e) {
                                var f = u === d ? "" : u;
                                return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || !b[5] || (o.each(r, function(a, d) {
                                    return d === e ? (b[5].resume = !0, c = !0, !1) : void 0
                                }), !c && void 0)
                            })
                        }), a();
                    case "finish":
                    case "finishAll":
                    case "stop":
                        o.each(r, function(a, b) {
                            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || u !== !0 && !t.isString(u) || (o.each(o.queue(b, t.isString(u) ? u : ""), function(a, b) {
                                t.isFunction(b) && b()
                            }), o.queue(b, t.isString(u) ? u : "", []))
                        });
                        var H = [];
                        return o.each(x.State.calls, function(a, b) {
                            b && o.each(b[1], function(c, e) {
                                var f = u === d ? "" : u;
                                return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || void o.each(r, function(c, d) {
                                    if (d === e)
                                        if ((u === !0 || t.isString(u)) && (o.each(o.queue(d, t.isString(u) ? u : ""), function(a, b) {
                                                t.isFunction(b) && b(null, !0)
                                            }), o.queue(d, t.isString(u) ? u : "", [])), "stop" === s) {
                                            var h = g(d);
                                            h && h.tweensContainer && f !== !1 && o.each(h.tweensContainer, function(a, b) {
                                                b.endValue = b.currentValue
                                            }), H.push(a)
                                        } else "finish" !== s && "finishAll" !== s || (b[2].duration = 1)
                                })
                            })
                        }), "stop" === s && (o.each(H, function(a, b) {
                            n(b, !0)
                        }), y.promise && y.resolver(r)), a();
                    default:
                        if (!o.isPlainObject(s) || t.isEmptyObject(s)) {
                            if (t.isString(s) && x.Redirects[s]) {
                                j = o.extend({}, u);
                                var I = j.duration,
                                    J = j.delay || 0;
                                return j.backwards === !0 && (r = o.extend(!0, [], r).reverse()), o.each(r, function(a, b) {
                                    parseFloat(j.stagger) ? j.delay = J + parseFloat(j.stagger) * a : t.isFunction(j.stagger) && (j.delay = J + j.stagger.call(b, a, B)), j.drag && (j.duration = parseFloat(I) || (/^(callout|transition)/.test(s) ? 1e3 : v), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / B : (a + 1) / B), .75 * j.duration, 200)), x.Redirects[s].call(b, b, j || {}, a, B, r, y.promise ? y : d)
                                }), a()
                            }
                            var K = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return y.promise ? y.rejecter(new Error(K)) : console.log(K), a()
                        }
                        F = "start"
                }
                var L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    M = [];
                o.each(r, function(a, b) {
                    t.isNode(b) && e(b, a)
                }), j = o.extend({}, x.defaults, u), j.loop = parseInt(j.loop, 10);
                var N = 2 * j.loop - 1;
                if (j.loop)
                    for (var O = 0; N > O; O++) {
                        var P = {
                            delay: j.delay,
                            progress: j.progress
                        };
                        O === N - 1 && (P.display = j.display, P.visibility = j.visibility, P.complete = j.complete), A(r, "reverse", P)
                    }
                return a()
            };
            x = o.extend(A, x), x.animate = A;
            var B = b.requestAnimationFrame || q;
            if (!x.State.isMobile && c.hidden !== d) {
                var C = function() {
                    c.hidden ? (B = function(a) {
                        return setTimeout(function() {
                            a(!0)
                        }, 16)
                    }, m()) : B = b.requestAnimationFrame || q
                };
                C(), c.addEventListener("visibilitychange", C)
            }
            return a.Velocity = x, a !== b && (a.fn.velocity = A, a.fn.velocity.defaults = x.defaults), o.each(["Down", "Up"], function(a, b) {
                x.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                    var i = o.extend({}, c),
                        j = i.begin,
                        k = i.complete,
                        l = {},
                        m = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                    i.display === d && (i.display = "Down" === b ? "inline" === x.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                        0 === e && j && j.call(g, g);
                        for (var c in m)
                            if (m.hasOwnProperty(c)) {
                                l[c] = a.style[c];
                                var d = z.getPropertyValue(a, c);
                                m[c] = "Down" === b ? [d, 0] : [0, d]
                            }
                        l.overflow = a.style.overflow, a.style.overflow = "hidden"
                    }, i.complete = function() {
                        for (var b in l) l.hasOwnProperty(b) && (a.style[b] = l[b]);
                        e === f - 1 && (k && k.call(g, g), h && h.resolver(g))
                    }, x(a, m, i)
                }
            }), o.each(["In", "Out"], function(a, b) {
                x.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                    var i = o.extend({}, c),
                        j = i.complete,
                        k = {
                            opacity: "In" === b ? 1 : 0
                        };
                    0 !== e && (i.begin = null), i.complete = e !== f - 1 ? null : function() {
                        j && j.call(g, g), h && h.resolver(g)
                    }, i.display === d && (i.display = "In" === b ? "auto" : "none"), x(this, k, i)
                }
            }), x
        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    }), $(function() {
        $(document).tooltip(), $("#visitorPasswordForm").submit(submitVisitorPassword)
    });
var screenOrientation = "l";
