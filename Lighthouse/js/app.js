$(document).foundation()

//mostly from jquery documents
//codes are straight from my mind
//siblings = other divs except the selected one

$("#by_first").click(function(){
    $(".quote").fadeOut(function(){
        $(".quote").html("&ldquo;The Lighthouse has helped my children in providing comfort to their souls when they need it the most. Listening to my children's laughter whenever we are there, is what warms up my heart and gives me peace and hope.&rdquo;").fadeIn(600);
    })
    $(this).siblings().animate({opacity:0.8},600);
    $(this).animate({opacity:1},600);
});
$("#by_second").click(function(){
    $(".quote").fadeOut(function(){
        $(".quote").html("&ldquo;After the loss of our father and husband and grandmother three weeks later, my daughter who was nine years old at the time and I were left devastated. We, through the help of a friend found our way to the Lighthouse group for grieving children.&rdquo;").fadeIn(600);
    })
    $(this).siblings().animate({opacity:0.8},600);
    $(this).animate({opacity:1},600);
});
$("#by_third").click(function(){
    $(".quote").fadeOut(function(){
        $(".quote").html("&ldquo;When I was six, my father passed away from cancer. The Lighthouse Program for grieving children was an inviting and comfortable place during the struggle.&rdquo;").fadeIn(600);
    })
    $(this).siblings().animate({opacity:0.8},600);
    $(this).animate({opacity:1},600);
});

$("#volunteer").click(function(){
    $("#don").fadeOut(600);
    $("#donI").fadeOut(600,function(){
        $("#vol").fadeIn(600);
        $("#volI").fadeIn(600);
    });
    $("#donate").animate({opacity:0.7},600);
    $(this).animate({opacity:1},600);
});
$("#donate").click(function(){
    $("#vol").fadeOut(600);
    $("#volI").fadeOut(600,function(){
        $("#don").fadeIn(600);
        $("#donI").fadeIn(600);
    });
    $("#volunteer").animate({opacity:.7},600);
    $(this).animate({opacity:1},600);
});

$("#work").click(function(){
    $("#info_help").fadeOut(function(){
        $("#info_help").html("To better support our adult participants, we occasionally offer weekend or evening workshops to help parents and others to better understand a particular concern, such as grieving in teens or parenting a grieving child.  Many of these workshops are offered by professionals with a particular expertise such as financial management, or relaxation & self-care, or home maintenance.").fadeIn(600);
    })
    $(this).siblings().animate({opacity:0.65},600);
    $(this).animate({opacity:1},600);
});
$("#breave").click(function(){
    $("#info_help").fadeOut(function(){
        $("#info_help").html("The death of a family member can be a difficult time of change and uncertainty for children, teens and their families. Often isolating, grief needs time, space, support and connections to others so that children and families can begin rebuilding their lives.<br/><br/>The Lighthouse provides a place where children, teens, and their parents and guardians who have experienced a life changing death loss can come together to be part of a community. Through participation in facilitated peer groups, they find understanding, stability and support.<br/><br/>Any child or teen who has experienced the death of an immediate family member or very close friend can join a group. Parents and guardians are welcome to attend the adult peer support groups which are offered at the same time as the children/teen groups.<br/>All conversations at The Lighthouse are confidential so everyone can freely share their thoughts, feelings and experiences. Regular attendance is important for building a supportive peer group. We therefore ask families’ commit to their group by attending regularly.<br/><br/>At the Lighthouse we realize that everyone grieves differently, and in their own time.  For this reason, The Lighthouse groups are ongoing and open-ended.  Families are able to stay with the Lighthouse community for as long as they need to actively explore their grief, with no time limits.  Some children or teens may leave the Lighthouse for a period of time and return at a later age and stage, when they have a greater understanding of death, and new questions or concerns related to their grief.").fadeIn(600);
    })
    $(this).siblings().animate({opacity:0.65},600);
    $(this).animate({opacity:1},600);
});
$("#grief").click(function(){
    $("#info_help").fadeOut(function(){
        $("#info_help").html("Since its founding in 1999, The Lighthouse has continually developed our approach and our learning so we can share with our community, volunteers, participants and the broader community. Beyond our support groups we also provide educational presentations and consultations to schools, educational organizations, employers, community agencies, faith communities and other groups on topics such as:<br/><br/>• Understanding the grieving process<br/>• Understanding children's and teen grief<br/>• Talking to children about death and dying<br/>• Supporting employees who are grieving<br/>• Supporting grieving students at school<br/><br/>We offer these educational sessions as needed so that these organizations in turn can better support their community.").fadeIn(600);
    })
    $(this).siblings().animate({opacity:0.65},600);
    $(this).animate({opacity:1},600);
});
$("#con").click(function(){
    $("#info_help").fadeOut(function(){
        $("#info_help").html("Bereaved individuals and families often find themselves grieving alone because members of their community are at a loss for how to help people do not reach out to the grieving individual because they don’t know the right thing to say or do.<br/><br/>The Lighthouse provides free telephone consultations to anyone wanting to better understand child and teen grief and ways they can support a young grieving family. The Lighthouse welcomes calls from caring extended family members, neighbours, friends and community professionals. In addition, The Lighthouse can often also provide information regarding grief support counselling agencies and recommended grief counsellors in the family’s own community (click here to see our list of grief resources), as well as suggested books on grief related topics.").fadeIn(600);
        $( "#info_help" ).slideDown( "slow" );
    })
    $(this).siblings().animate({opacity:0.65},600);
    $(this).animate({opacity:1},600);
});

//click hold div for donate page
$(".option").click(function(){
   $(this).toggleClass('active').siblings().removeClass("active");
});