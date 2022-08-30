@extends('layouts.base')

@section('content')
{{-- ato --}}
  
<header>
  
    <!-- Sidebar navigation -->
    <div id="slide-out" class="fixed side-nav sn-bg-4 mdb-sidenav">
      <ul class="custom-scrollbar list-unstyled" style="max-height:100vh; padding-bottom:90px; position:relative;">
              <li class="logo-sn d-block waves-effect">
            <div class="text-center">
              <a class="pl-0" href="https://mdbootstrap.com/"><img id="MDB-logo" src="../../../../../mdbcdn.b-cdn.net/img/Marketing/general/logo/small/mdb-react.png" alt="MDB Logo"></a>
            </div>
          </li>
          <!--/. Logo -->
          <!--Search Form-->
          <li>
            <form class="search-form" onkeypress="return event.keyCode != 13;" role="search" method="GET" autocomplete="off">
              <div class="mt-0 form-group md-form d-block waves-light">
                <input type="text" class="pt-2 pb-1 mb-0 form-control" name="mdw_serach" placeholder="Search"
                      id="mdb_main_search">
                <label for="mdb_main_search" class="sr-only">Search</label>
              </div>
              <div class="dropdown-wrapper"></div>
            </form>
          </li>
          <!--/.Search Form-->
            <!-- Side navigation links -->
        <li>
          <ul id="side-menu" class="collapsible collapsible-accordion"><li id="menu-item-118680" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-118680"><a class="collapsible-header waves-effect arrow-r "><i class="far fa-gem"></i>MDB React Pro<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-126942" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-126942"><a class="collapsible-header waves-effect" id="link-menu-item-126942"  href="https://mdbootstrap.com/docs/b5/react/pro/">About MDB Pro</a></li>
        <li id="menu-item-126939" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-126939"><a class="collapsible-header waves-effect" id="link-menu-item-126939"  href="https://mdbootstrap.com/docs/b5/react/pro/git/">Git &#038; repository</a></li>
        <li id="menu-item-126940" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-126940"><a class="collapsible-header waves-effect" id="link-menu-item-126940"  href="https://mdbootstrap.com/docs/b5/react/pro/support/">Premium support</a></li>
        <li id="menu-item-126941" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-126941"><a class="collapsible-header waves-effect" id="link-menu-item-126941"  href="https://mdbootstrap.com/docs/b5/react/pro/updates/">Updates</a></li>
    </ul></div>
    </li>
    <li id="menu-item-59475" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59475"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-download"></i>Getting started<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-81329" class="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor menu-item-81329"><a class="collapsible-header waves-effect" id="link-menu-item-81329"  href="https://mdbootstrap.com/docs/react/">About MDB React</a></li>
        <li id="menu-item-46962" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46962"><a class="collapsible-header waves-effect" id="link-menu-item-46962"  href="https://mdbootstrap.com/docs/react/getting-started/download/">Download</a></li>
        <li id="menu-item-59478" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59478"><a class="collapsible-header waves-effect" id="link-menu-item-59478"  href="https://mdbootstrap.com/docs/react/getting-started/quick-start/">Quick start</a></li>
        <li id="menu-item-85136" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-85136"><a class="collapsible-header waves-effect" id="link-menu-item-85136"  href="https://mdbootstrap.com/education/react/">Full tutorial</a></li>
        <li id="menu-item-87548" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-87548"><a class="collapsible-header waves-effect" id="link-menu-item-87548"  href="https://mdbootstrap.com/cli/">MDB CLI</a></li>
        <li id="menu-item-81529" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81529"><a class="collapsible-header waves-effect" id="link-menu-item-81529"  href="https://mdbootstrap.com/docs/b4/jquery/">MDB jQuery</a></li>
        <li id="menu-item-81530" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81530"><a class="collapsible-header waves-effect" id="link-menu-item-81530"  href="https://mdbootstrap.com/docs/angular/">MDB Angular</a></li>
        <li id="menu-item-81531" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81531"><a class="collapsible-header waves-effect" id="link-menu-item-81531"  href="https://mdbootstrap.com/docs/vue/">MDB Vue</a></li>
        <li id="menu-item-59480" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-59480"><a class="collapsible-header waves-effect" id="link-menu-item-59480"  href="https://mdbootstrap.com/">Home page</a></li>
    </ul></div>
    </li>
    <li id="menu-item-46961" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46961"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-th-large"></i>Layout<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-95025" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95025"><a class="collapsible-header waves-effect" id="link-menu-item-95025"  href="https://mdbootstrap.com/docs/react/layout/box/">Box</a></li>
        <li id="menu-item-46966" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46966"><a class="collapsible-header waves-effect" id="link-menu-item-46966"  href="https://mdbootstrap.com/docs/react/layout/overview/">Layout overview</a></li>
        <li id="menu-item-46968" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46968"><a class="collapsible-header waves-effect" id="link-menu-item-46968"  href="https://mdbootstrap.com/docs/react/layout/grid-examples/">Grid examples</a></li>
        <li id="menu-item-46967" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46967"><a class="collapsible-header waves-effect" id="link-menu-item-46967"  href="https://mdbootstrap.com/docs/react/layout/grid-usage/">Grid usage</a></li>
        <li id="menu-item-84795" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-84795"><a class="collapsible-header waves-effect" id="link-menu-item-84795"  href="https://mdbootstrap.com/docs/react/layout/masonry/">Masonry</a></li>
        <li id="menu-item-46970" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46970"><a class="collapsible-header waves-effect" id="link-menu-item-46970"  href="https://mdbootstrap.com/docs/react/layout/media-object/">Media object</a></li>
        <li id="menu-item-83005" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83005"><a class="collapsible-header waves-effect" id="link-menu-item-83005"  href="https://mdbootstrap.com/docs/react/layout/media-queries/">Media Queries</a></li>
        <li id="menu-item-46971" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46971"><a class="collapsible-header waves-effect" id="link-menu-item-46971"  href="https://mdbootstrap.com/docs/react/layout/utilities/">Utilities for layout</a></li>
    </ul></div>
    </li>
    <li id="menu-item-46963" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46963"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-object-ungroup"></i>Utilities<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-46972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46972"><a class="collapsible-header waves-effect" id="link-menu-item-46972"  href="https://mdbootstrap.com/docs/react/utilities/borders/">Borders</a></li>
        <li id="menu-item-46973" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46973"><a class="collapsible-header waves-effect" id="link-menu-item-46973"  href="https://mdbootstrap.com/docs/react/utilities/clearfix/">Clearfix</a></li>
        <li id="menu-item-46974" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46974"><a class="collapsible-header waves-effect" id="link-menu-item-46974"  href="https://mdbootstrap.com/docs/react/utilities/close-icon/">Close Icon</a></li>
        <li id="menu-item-46975" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46975"><a class="collapsible-header waves-effect" id="link-menu-item-46975"  href="https://mdbootstrap.com/docs/react/utilities/display/">Display</a></li>
        <li id="menu-item-46976" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46976"><a class="collapsible-header waves-effect" id="link-menu-item-46976"  href="https://mdbootstrap.com/docs/react/utilities/embeds/">Embeds</a></li>
        <li id="menu-item-46977" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46977"><a class="collapsible-header waves-effect" id="link-menu-item-46977"  href="https://mdbootstrap.com/docs/react/utilities/float/">Float</a></li>
        <li id="menu-item-46978" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46978"><a class="collapsible-header waves-effect" id="link-menu-item-46978"  href="https://mdbootstrap.com/docs/react/utilities/flexbox/">Flexbox</a></li>
        <li id="menu-item-46980" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46980"><a class="collapsible-header waves-effect" id="link-menu-item-46980"  href="https://mdbootstrap.com/docs/react/utilities/image-replacement/">Image replacement</a></li>
        <li id="menu-item-84757" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-84757"><a class="collapsible-header waves-effect" id="link-menu-item-84757"  href="https://mdbootstrap.com/docs/react/utilities/overflow/">Overflow</a></li>
        <li id="menu-item-46981" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46981"><a class="collapsible-header waves-effect" id="link-menu-item-46981"  href="https://mdbootstrap.com/docs/react/utilities/position/">Position</a></li>
        <li id="menu-item-46982" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46982"><a class="collapsible-header waves-effect" id="link-menu-item-46982"  href="https://mdbootstrap.com/docs/react/utilities/screenreaders/">Screenreaders</a></li>
        <li id="menu-item-46983" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46983"><a class="collapsible-header waves-effect" id="link-menu-item-46983"  href="https://mdbootstrap.com/docs/react/utilities/sizing/">Sizing</a></li>
        <li id="menu-item-46984" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46984"><a class="collapsible-header waves-effect" id="link-menu-item-46984"  href="https://mdbootstrap.com/docs/react/utilities/spacing/">Spacing</a></li>
        <li id="menu-item-46985" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46985"><a class="collapsible-header waves-effect" id="link-menu-item-46985"  href="https://mdbootstrap.com/docs/react/utilities/text/">Text</a></li>
        <li id="menu-item-46986" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46986"><a class="collapsible-header waves-effect" id="link-menu-item-46986"  href="https://mdbootstrap.com/docs/react/utilities/vertical-align/">Vertical Align</a></li>
        <li id="menu-item-46987" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46987"><a class="collapsible-header waves-effect" id="link-menu-item-46987"  href="https://mdbootstrap.com/docs/react/utilities/visibility/">Visibility</a></li>
    </ul></div>
    </li>
    <li id="menu-item-75677" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-75677"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-indent"></i>Content<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-75678" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75678"><a class="collapsible-header waves-effect" id="link-menu-item-75678"  href="https://mdbootstrap.com/docs/react/content/code/">Code</a></li>
        <li id="menu-item-75679" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75679"><a class="collapsible-header waves-effect" id="link-menu-item-75679"  href="https://mdbootstrap.com/docs/react/content/figures/">Figures</a></li>
        <li id="menu-item-82802" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82802"><a class="collapsible-header waves-effect" id="link-menu-item-82802"  href="https://mdbootstrap.com/docs/react/content/icons-list/">Icons list</a></li>
        <li id="menu-item-82796" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82796"><a class="collapsible-header waves-effect" id="link-menu-item-82796"  href="https://mdbootstrap.com/docs/react/content/icons-usage/">Icons usage</a></li>
        <li id="menu-item-75682" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75682"><a class="collapsible-header waves-effect" id="link-menu-item-75682"  href="https://mdbootstrap.com/docs/react/content/images/">Images</a></li>
        <li id="menu-item-75683" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75683"><a class="collapsible-header waves-effect" id="link-menu-item-75683"  href="https://mdbootstrap.com/docs/react/content/typography/">Typography</a></li>
    </ul></div>
    </li>
    <li id="menu-item-81430" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-81430"><a class="collapsible-header waves-effect arrow-r "><i class="fab fa-css3"></i>CSS<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-81426" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81426"><a class="collapsible-header waves-effect" id="link-menu-item-81426"  href="https://mdbootstrap.com/docs/react/css/demo/">Demo</a></li>
        <li id="menu-item-54055" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54055"><a class="collapsible-header waves-effect" id="link-menu-item-54055"  href="https://mdbootstrap.com/docs/react/css/animations/">Animations</a></li>
        <li id="menu-item-82783" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82783"><a class="collapsible-header waves-effect" id="link-menu-item-82783"  href="https://mdbootstrap.com/docs/react/css/background-image/">Background image</a></li>
        <li id="menu-item-54056" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54056"><a class="collapsible-header waves-effect" id="link-menu-item-54056"  href="https://mdbootstrap.com/docs/react/css/colors/">Colors</a></li>
        <li id="menu-item-82787" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82787"><a class="collapsible-header waves-effect" id="link-menu-item-82787"  href="https://mdbootstrap.com/docs/react/css/gradients/">Gradients</a></li>
        <li id="menu-item-47523" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47523"><a class="collapsible-header waves-effect" id="link-menu-item-47523"  href="https://mdbootstrap.com/docs/react/css/masks/">Masks</a></li>
        <li id="menu-item-51614" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51614"><a class="collapsible-header waves-effect" id="link-menu-item-51614"  href="https://mdbootstrap.com/docs/react/css/hover-effects/">Hover effects</a></li>
        <li id="menu-item-95024" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95024"><a class="collapsible-header waves-effect" id="link-menu-item-95024"  href="https://mdbootstrap.com/docs/react/css/parallax/">Parallax</a></li>
        <li id="menu-item-54054" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54054"><a class="collapsible-header waves-effect" id="link-menu-item-54054"  href="https://mdbootstrap.com/docs/react/css/shadows/">Shadows</a></li>
        <li id="menu-item-54053" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54053"><a class="collapsible-header waves-effect" id="link-menu-item-54053"  href="https://mdbootstrap.com/docs/react/css/skins/">Skins</a></li>
    </ul></div>
    </li>
    <li id="menu-item-81431" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-81431"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-cubes"></i>Components<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-81427" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81427"><a class="collapsible-header waves-effect" id="link-menu-item-81427"  href="https://mdbootstrap.com/docs/react/components/demo/">Demo</a></li>
        <li id="menu-item-47527" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47527"><a class="collapsible-header waves-effect" id="link-menu-item-47527"  href="https://mdbootstrap.com/docs/react/components/alerts/">Alerts</a></li>
        <li id="menu-item-46988" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46988"><a class="collapsible-header waves-effect" id="link-menu-item-46988"  href="https://mdbootstrap.com/docs/react/components/buttons/">Buttons</a></li>
        <li id="menu-item-83412" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83412"><a class="collapsible-header waves-effect" id="link-menu-item-83412"  href="https://mdbootstrap.com/docs/react/components/button-group/">Buttons group</a></li>
        <li id="menu-item-82774" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82774"><a class="collapsible-header waves-effect" id="link-menu-item-82774"  href="https://mdbootstrap.com/docs/react/components/buttons-social/">Buttons social</a></li>
        <li id="menu-item-46989" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46989"><a class="collapsible-header waves-effect" id="link-menu-item-46989"  href="https://mdbootstrap.com/docs/react/components/cards/">Cards</a></li>
        <li id="menu-item-47519" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47519"><a class="collapsible-header waves-effect" id="link-menu-item-47519"  href="https://mdbootstrap.com/docs/react/components/dropdowns/">Dropdown</a></li>
        <li id="menu-item-83410" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83410"><a class="collapsible-header waves-effect" id="link-menu-item-83410"  href="https://mdbootstrap.com/docs/react/components/jumbotron/">Jumbotron</a></li>
        <li id="menu-item-54058" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54058"><a class="collapsible-header waves-effect" id="link-menu-item-54058"  href="https://mdbootstrap.com/docs/react/components/list-group/">List Group</a></li>
        <li id="menu-item-82836" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82836"><a class="collapsible-header waves-effect" id="link-menu-item-82836"  href="https://mdbootstrap.com/docs/react/components/spinners/">Loaders / Spinners</a></li>
        <li id="menu-item-46991" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46991"><a class="collapsible-header waves-effect" id="link-menu-item-46991"  href="https://mdbootstrap.com/docs/react/components/pagination/">Pagination</a></li>
        <li id="menu-item-59607" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59607"><a class="collapsible-header waves-effect" id="link-menu-item-59607"  href="https://mdbootstrap.com/docs/react/components/panels/">Panels</a></li>
        <li id="menu-item-82685" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82685"><a class="collapsible-header waves-effect" id="link-menu-item-82685"  href="https://mdbootstrap.com/docs/react/components/pills/">Pills</a></li>
        <li id="menu-item-47524" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47524"><a class="collapsible-header waves-effect" id="link-menu-item-47524"  href="https://mdbootstrap.com/docs/react/components/tabs/">Tabs</a></li>
        <li id="menu-item-46992" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46992"><a class="collapsible-header waves-effect" id="link-menu-item-46992"  href="https://mdbootstrap.com/docs/react/components/badges/">Tags, Labels &#038; Badges</a></li>
        <li id="menu-item-46994" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46994"><a class="collapsible-header waves-effect" id="link-menu-item-46994"  href="https://mdbootstrap.com/docs/react/components/progress-bar/">Progress Bar</a></li>
        <li id="menu-item-60869" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60869"><a class="collapsible-header waves-effect" id="link-menu-item-60869"  href="https://mdbootstrap.com/docs/react/components/stepper/">Steppers</a></li>
    </ul></div>
    </li>
    <li id="menu-item-46995" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46995"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-code"></i>Advanced<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-83411" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83411"><a class="collapsible-header waves-effect" id="link-menu-item-83411"  href="https://mdbootstrap.com/docs/react/advanced/accordion/">Accordion</a></li>
        <li id="menu-item-47518" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47518"><a class="collapsible-header waves-effect" id="link-menu-item-47518"  href="https://mdbootstrap.com/docs/react/advanced/carousel/">Carousel</a></li>
        <li id="menu-item-47521" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47521"><a class="collapsible-header waves-effect" id="link-menu-item-47521"  href="https://mdbootstrap.com/docs/react/advanced/charts/">Charts</a></li>
        <li id="menu-item-46996" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46996"><a class="collapsible-header waves-effect" id="link-menu-item-46996"  href="https://mdbootstrap.com/docs/react/advanced/collapse/">Collapse</a></li>
        <li id="menu-item-56346" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-56346"><a class="collapsible-header waves-effect" id="link-menu-item-56346"  href="https://mdbootstrap.com/docs/react/advanced/lightbox/">Lightbox</a></li>
        <li id="menu-item-82446" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82446"><a class="collapsible-header waves-effect" id="link-menu-item-82446"  href="https://mdbootstrap.com/docs/react/advanced/notifications/">Notifications</a></li>
        <li id="menu-item-47003" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47003"><a class="collapsible-header waves-effect" id="link-menu-item-47003"  href="https://mdbootstrap.com/docs/react/advanced/popovers/">Popovers</a></li>
        <li id="menu-item-85190" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-85190"><a class="collapsible-header waves-effect" id="link-menu-item-85190"  href="https://mdbootstrap.com/docs/react/advanced/scroll/">Scrollbar &#038; SmoothScroll</a></li>
        <li id="menu-item-56345" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-56345"><a class="collapsible-header waves-effect" id="link-menu-item-56345"  href="https://mdbootstrap.com/docs/react/advanced/sticky/">Sticky Content</a></li>
        <li id="menu-item-47004" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47004"><a class="collapsible-header waves-effect" id="link-menu-item-47004"  href="https://mdbootstrap.com/docs/react/advanced/tooltips/">Tooltips</a></li>
        <li id="menu-item-84977" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-84977"><a class="collapsible-header waves-effect" id="link-menu-item-84977"  href="https://mdbootstrap.com/docs/react/advanced/waves-effect/">Waves effect</a></li>
    </ul></div>
    </li>
    <li id="menu-item-60859" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-60859"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-bars"></i> Navigation<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-51613" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51613"><a class="collapsible-header waves-effect" id="link-menu-item-51613"  href="https://mdbootstrap.com/docs/react/navigation/compositions/">Compositions</a></li>
        <li id="menu-item-47520" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47520"><a class="collapsible-header waves-effect" id="link-menu-item-47520"  href="https://mdbootstrap.com/docs/react/navigation/breadcrumb/">Breadcrumb</a></li>
        <li id="menu-item-54052" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54052"><a class="collapsible-header waves-effect" id="link-menu-item-54052"  href="https://mdbootstrap.com/docs/react/navigation/footer/">Footer</a></li>
        <li id="menu-item-79821" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79821"><a class="collapsible-header waves-effect" id="link-menu-item-79821"  href="https://mdbootstrap.com/docs/react/navigation/hamburger-menu/">Hamburger Menu</a></li>
        <li id="menu-item-102905" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102905"><a class="collapsible-header waves-effect" id="link-menu-item-102905"  href="https://mdbootstrap.com/docs/react/navigation/link/">Link</a></li>
        <li id="menu-item-51604" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51604"><a class="collapsible-header waves-effect" id="link-menu-item-51604"  href="https://mdbootstrap.com/docs/react/navigation/navbar/">Navbar</a></li>
        <li id="menu-item-85198" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-85198"><a class="collapsible-header waves-effect" id="link-menu-item-85198"  href="https://mdbootstrap.com/docs/react/navigation/navs/">Navs</a></li>
        <li id="menu-item-51606" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51606"><a class="collapsible-header waves-effect" id="link-menu-item-51606"  href="https://mdbootstrap.com/docs/react/navigation/scrollspy/">ScrollSpy</a></li>
        <li id="menu-item-51612" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51612"><a class="collapsible-header waves-effect" id="link-menu-item-51612"  href="https://mdbootstrap.com/docs/react/navigation/sidenav/">SideNav</a></li>
    </ul></div>
    </li>
    <li id="menu-item-60858" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-60858"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-edit"></i> Forms<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-51602" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51602"><a class="collapsible-header waves-effect" id="link-menu-item-51602"  href="https://mdbootstrap.com/docs/react/forms/basic/">Basic examples</a></li>
        <li id="menu-item-59606" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59606"><a class="collapsible-header waves-effect" id="link-menu-item-59606"  href="https://mdbootstrap.com/docs/react/forms/autocomplete/">Autocomplete</a></li>
        <li id="menu-item-75692" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75692"><a class="collapsible-header waves-effect" id="link-menu-item-75692"  href="https://mdbootstrap.com/docs/react/forms/checkbox/">Checkbox</a></li>
        <li id="menu-item-51605" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51605"><a class="collapsible-header waves-effect" id="link-menu-item-51605"  href="https://mdbootstrap.com/docs/react/forms/date-picker/">Date picker</a></li>
        <li id="menu-item-82431" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82431"><a class="collapsible-header waves-effect" id="link-menu-item-82431"  href="https://mdbootstrap.com/docs/react/forms/file-input/">File input</a></li>
        <li id="menu-item-46990" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46990"><a class="collapsible-header waves-effect" id="link-menu-item-46990"  href="https://mdbootstrap.com/docs/react/forms/inputs/">Inputs</a></li>
        <li id="menu-item-88638" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88638"><a class="collapsible-header waves-effect" id="link-menu-item-88638"  href="https://mdbootstrap.com/docs/react/forms/input-group/">Input group</a></li>
        <li id="menu-item-84968" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-84968"><a class="collapsible-header waves-effect" id="link-menu-item-84968"  href="https://mdbootstrap.com/docs/react/forms/multiselect/">Multiselect</a></li>
        <li id="menu-item-81673" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81673"><a class="collapsible-header waves-effect" id="link-menu-item-81673"  href="https://mdbootstrap.com/docs/react/forms/radio-button/">Radio Button</a></li>
        <li id="menu-item-59608" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59608"><a class="collapsible-header waves-effect" id="link-menu-item-59608"  href="https://mdbootstrap.com/docs/react/forms/search/">Search</a></li>
        <li id="menu-item-51607" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51607"><a class="collapsible-header waves-effect" id="link-menu-item-51607"  href="https://mdbootstrap.com/docs/react/forms/select/">Select</a></li>
        <li id="menu-item-82424" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82424"><a class="collapsible-header waves-effect" id="link-menu-item-82424"  href="https://mdbootstrap.com/docs/react/forms/slider/">Slider</a></li>
        <li id="menu-item-81677" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81677"><a class="collapsible-header waves-effect" id="link-menu-item-81677"  href="https://mdbootstrap.com/docs/react/forms/switch/">Switch</a></li>
        <li id="menu-item-82437" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82437"><a class="collapsible-header waves-effect" id="link-menu-item-82437"  href="https://mdbootstrap.com/docs/react/forms/textarea/">Textarea</a></li>
        <li id="menu-item-51608" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51608"><a class="collapsible-header waves-effect" id="link-menu-item-51608"  href="https://mdbootstrap.com/docs/react/forms/time-picker/">Time picker</a></li>
        <li id="menu-item-60870" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60870"><a class="collapsible-header waves-effect" id="link-menu-item-60870"  href="https://mdbootstrap.com/docs/react/forms/validation/">Validation</a></li>
    </ul></div>
    </li>
    <li id="menu-item-76142" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-76142"><a class="collapsible-header waves-effect arrow-r active"><i class="fas fa-table"></i> Tables<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body"  style="display: block;"> <ul class="sub-menu">
        <li id="menu-item-60876" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60876"><a class="collapsible-header waves-effect" id="link-menu-item-60876"  href="https://mdbootstrap.com/docs/react/tables/basic/">Basic examples</a></li>
        <li id="menu-item-75689" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75689"><a class="collapsible-header waves-effect" id="link-menu-item-75689"  href="https://mdbootstrap.com/docs/react/tables/additional/">Additional examples</a></li>
        <li id="menu-item-75688" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-75285 current_page_item menu-item-75688"><a class="collapsible-header waves-effect" id="link-menu-item-75688"  href="index.html">Datatables</a></li>
        <li id="menu-item-60868" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60868"><a class="collapsible-header waves-effect" id="link-menu-item-60868"  href="https://mdbootstrap.com/docs/react/tables/editable/">Editable</a></li>
        <li id="menu-item-60867" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60867"><a class="collapsible-header waves-effect" id="link-menu-item-60867"  href="https://mdbootstrap.com/docs/react/tables/pagination/">Pagination</a></li>
        <li id="menu-item-60866" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60866"><a class="collapsible-header waves-effect" id="link-menu-item-60866"  href="https://mdbootstrap.com/docs/react/tables/responsive/">Responsive</a></li>
        <li id="menu-item-60865" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60865"><a class="collapsible-header waves-effect" id="link-menu-item-60865"  href="https://mdbootstrap.com/docs/react/tables/scroll/">Scroll</a></li>
        <li id="menu-item-60864" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60864"><a class="collapsible-header waves-effect" id="link-menu-item-60864"  href="https://mdbootstrap.com/docs/react/tables/search/">Search</a></li>
        <li id="menu-item-60863" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60863"><a class="collapsible-header waves-effect" id="link-menu-item-60863"  href="https://mdbootstrap.com/docs/react/tables/sort/">Sort</a></li>
    </ul></div>
    </li>
    <li id="menu-item-60856" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-60856"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-window-restore"></i>Modals<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-46997" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46997"><a class="collapsible-header waves-effect" id="link-menu-item-46997"  href="https://mdbootstrap.com/docs/react/modals/basic/">Basic examples</a></li>
        <li id="menu-item-79365" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79365"><a class="collapsible-header waves-effect" id="link-menu-item-79365"  href="https://mdbootstrap.com/docs/react/modals/generator/">Generator</a></li>
    </ul></div>
    </li>
    <li id="menu-item-58007" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-58007"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-th"></i>Sections<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-58008" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58008"><a class="collapsible-header waves-effect" id="link-menu-item-58008"  href="https://mdbootstrap.com/docs/react/sections/blog/">Blog</a></li>
        <li id="menu-item-58009" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58009"><a class="collapsible-header waves-effect" id="link-menu-item-58009"  href="https://mdbootstrap.com/docs/react/sections/contact/">Contact</a></li>
        <li id="menu-item-58010" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58010"><a class="collapsible-header waves-effect" id="link-menu-item-58010"  href="https://mdbootstrap.com/docs/react/sections/e-commerce/">E-commerce</a></li>
        <li id="menu-item-58011" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58011"><a class="collapsible-header waves-effect" id="link-menu-item-58011"  href="https://mdbootstrap.com/docs/react/sections/features/">Features</a></li>
        <li id="menu-item-58012" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58012"><a class="collapsible-header waves-effect" id="link-menu-item-58012"  href="https://mdbootstrap.com/docs/react/sections/intros/">Intros</a></li>
        <li id="menu-item-58013" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58013"><a class="collapsible-header waves-effect" id="link-menu-item-58013"  href="https://mdbootstrap.com/docs/react/sections/magazine/">Magazine</a></li>
        <li id="menu-item-58017" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58017"><a class="collapsible-header waves-effect" id="link-menu-item-58017"  href="https://mdbootstrap.com/docs/react/sections/projects/">Projects</a></li>
        <li id="menu-item-58016" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58016"><a class="collapsible-header waves-effect" id="link-menu-item-58016"  href="https://mdbootstrap.com/docs/react/sections/social/">Social</a></li>
        <li id="menu-item-58015" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58015"><a class="collapsible-header waves-effect" id="link-menu-item-58015"  href="https://mdbootstrap.com/docs/react/sections/team/">Team</a></li>
        <li id="menu-item-58014" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58014"><a class="collapsible-header waves-effect" id="link-menu-item-58014"  href="https://mdbootstrap.com/docs/react/sections/testimonials/">Testimonials</a></li>
    </ul></div>
    </li>
    <li id="menu-item-89930" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-89930"><a class="collapsible-header waves-effect arrow-r "><i class="fas fa-book"></i> Tutorials<i class="fa fa-angle-down rotate-icon"></i></a>
     <div class="collapsible-body" > <ul class="sub-menu">
        <li id="menu-item-89932" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89932"><a class="collapsible-header waves-effect" id="link-menu-item-89932"  href="https://mdbootstrap.com/education/">All tutorials</a></li>
        <li id="menu-item-89933" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89933"><a class="collapsible-header waves-effect" id="link-menu-item-89933"  href="https://mdbootstrap.com/education/react/">React</a></li>
        <li id="menu-item-89934" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89934"><a class="collapsible-header waves-effect" id="link-menu-item-89934"  href="https://mdbootstrap.com/education/react/pwa-1-react-pwa-introduction/">Progressive Web Apps</a></li>
        <li id="menu-item-89935" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-89935"><a class="collapsible-header waves-effect" id="link-menu-item-89935"  href="https://mdbootstrap.com/articles/">Miscellaneous</a></li>
    </ul></div>
    </li>
    <li id="menu-item-81347" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81347"><a class="collapsible-header waves-effect" id="link-menu-item-81347"  href="https://mdbootstrap.com/plugins/react/"><i class="fas fa-plus-square"></i>Plugins &#038; addons</a></li>
    <li id="menu-item-82153" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82153"><a class="collapsible-header waves-effect" id="link-menu-item-82153"  href="https://mdbootstrap.com/freebies/react/admin-dashboard/"><i class="fas fa-tachometer-alt"></i>Admin Dashboard Free</a></li>
    <li id="menu-item-126809" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-126809"><a class="collapsible-header waves-effect" id="link-menu-item-126809"  href="https://mdbootstrap.com/docs/react/templates/admin/"><i class="fas fa-tachometer-alt"></i>Admin Dashboard Pro</a></li>
    <li id="menu-item-125913" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-125913"><a class="collapsible-header waves-effect" id="link-menu-item-125913"  href="https://mdbootstrap.com/docs/b5/react/"><i class="fas fa-file-archive"></i> MDB 5 React Alpha</a></li>
    </ul>    </li>
        <!-- /. Side navigation links -->
      </ul>
      <div class="sidenav-bg mask-strong"></div>
    </div>
    <!--/. Sidebar navigation -->
    <!--/.SideNav-->
    
    <div id="dpl-auth-modal"></div>
    
    <!-- Navbar-->
    <nav class="navbar fixed-top navbar-expand-md navbar-light white double-nav scrolling-navbar">
      <!-- SideNav slide-out button -->
      <div class="float-left">
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="fas fa-bars"></i><span class="sr-only" aria-hidden="true">Toggle side navigation</span></a>
      </div>
      <!-- Navbar links-->
      <div class="pl-2 mr-auto">
        <span class="d-none d-md-inline-block">
    
          
            <!--React-->
            <!--DC content-->
            <div id='dpl-gtm-re'></div>
            <!--/DC content-->
    
          
        </span>
      </div>
    
      <!--Navigation icons-->
      <span id="dpl-navbar-right-buttons">
        <ul id="dpl-navbar-right-buttons-tmp" class="ml-auto nav navbar-nav nav-flex-icons">
          <li class="nav-item d-none d-xl-inline-block">
            <a href="https://mdbootstrap.com/general/contact/" class="nav-link waves-effect">
              <i class="fas fa-envelope"></i><span class="sr-only">Contact us</span>
            </a>
          </li>
          <li class="nav-item d-none d-xl-inline-block">
            <a href="https://mdbootstrap.com/services/" class="nav-link waves-effect">
              <i class="fas fa-question-circle"></i><span class="ml-1 d-none d-xl-inline-block">Support</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbar-tools" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-wrench"></i><span class="ml-1 d-none d-xl-inline-block">Tools</span></a>
            <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbar-tools">
              <a class="dropdown-item d-xl-none" href="https://mdbootstrap.com/services/">Support</a>
              <a class="dropdown-item" href="https://mdbootstrap.com/snippets/">Playground</a>
              <a class="dropdown-item" href="https://mdbootstrap.com/docs/standard/tools/">Design tools</a>
              <a class="dropdown-item" href="https://mdbootstrap.com/cli/">CLI & Hosting <span class="rounded badge badge-danger">New</span></a>
            </div>
          </li>
          <a class="ml-2 text-info align-self-center auth-modal-toggle" data-auth-modal-tab="sign-in">Sign In</a>
          <a class="btn btn-info btn-rounded btn-sm waves-effect waves-light auth-modal-toggle" data-auth-modal-tab="sign-up">SIGN UP</a>
        </ul>
      </span>
    </nav>
    <!-- /.Navbar-->
    </header>
    
          <style>
            .main-tabs-docs .nav-mtd {
              white-space: nowrap;
              overflow-x: auto;
              position: relative;
            }
    
            @media (min-width: 62rem) {
              .main-tabs-docs .nav-mtd {
                overflow-x: hidden;
              }
            }
    
            .main-tabs-docs .nav-mtd li a {
              display: block;
              padding: 20px 24px;
              font-size: 13px;
              text-transform: uppercase;
              color: rgba(255, 255, 255, 0.8);
              text-align: center;
              -webkit-border-radius: 0;
              border-radius: 0;
              font-weight: 500;
              border-bottom: 3px solid #33b5e5;
            }
    
            .main-tabs-docs .nav-mtd li a.active {
              border-bottom: 3px solid;
              color: #fff;
            }
    
            @media (min-width: 62em) {
              .main-tabs-docs .nav-mtd li:first-child {
                margin-left: 56px;
              }
            }
    
            .documentation .primary-heading {
              font-size: 2.7rem;
              font-weight: 500;
            }
    
            .documentation .secondary-heading {
              font-size: 1.5rem;
              font-weight: 500;
              color: #444343;
              overflow: hidden;
              padding-bottom: .3rem;
              margin-bottom: .7rem;
            }
    
            .documentation .section-heading {
              font-size: 2rem;
              font-weight: 600;
              margin-bottom: 1.4rem;
            }
    
            .documentation .docs-pills {
              margin-top: 1.4rem;
            }
    
            .documentation .section-preview {
              border: 1px solid #e0e0e0;
              padding: 15px;
            }
    
            @media only screen and (max-width: 991px) {
    
              .sticky,
              .sticky2,
              .sticky3,
              .sticky-placeholder {
                display: none;
              }
            }
    
            @media (max-width: 768px) {
              .documentation .docs-pills .export-to-snippet {
                display: none;
              }
    
              .documentation .docs-pills .btn-copy-code {
                right: 0 !important;
              }
            }
    
            @media (max-width: 576px) {
              .documentation .docs-pills .btn-copy-code {
                display: none;
              }
            }
          </style>
@endsection
