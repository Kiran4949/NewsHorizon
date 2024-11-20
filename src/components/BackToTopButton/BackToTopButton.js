import React, { useEffect } from "react";
import $ from "jquery";
import "jquery.easing";

const BackToTopButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      if ($(window).scrollTop() > 200) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    };

    $(window).on("scroll", handleScroll);

    $(".back-to-top").click(function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 500, "easeInOutExpo");
      return false;
    });

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="back-to-top">
      <i className="fas fa-angle-double-up"></i>
    </a>
  );
};

export default BackToTopButton;
