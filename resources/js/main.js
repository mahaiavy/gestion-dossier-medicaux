   //pagination

   $('#showTab').change(function(){
    paginations('.pagesLine','#page_navigation',$(this).val());
    });
    function set_display(first, last,paginated) {  
          $('.cache').hide();
            $(paginated).hide();
            $(paginated).slice(first, last).show();
             $('.cache').hide();
        } 
    
    function nexts(current_page,show_per_page,paginated){  
            if($('.active').next('.page_link').length){
                go_to_page(++current_page ,show_per_page,paginated);
            }
            
        }
    
    function go_to_page(page_num,show_per_page,paginated){
          
          var  start_from = page_num * show_per_page;
          var  end_on =parseInt(start_from)  + parseInt(show_per_page) ;
           
            set_display(start_from, end_on,paginated);
            $('.active').removeClass('active');
            $('#id'+page_num).addClass('active');
        } 
    
    function previous(current_page,show_per_page,paginated){  
            if($('.active').prev('.page_link').length){
                go_to_page(current_page - 1,show_per_page,paginated);
            }
            
        }
    
    function paginations(paginated,linkPaginate,pageNumber){
        var show_per_page = pageNumber;
        var current_page = 0;
    
    
        var number_of_pages =Math.ceil($(paginated).length / show_per_page);
       
            var navs = "<ul class=\"pagination\"><li><button class=\"btn btn-primary btn-sm previous\" ><<</button></li>";
            var i = -1;
            while(number_of_pages > ++i){
            navs = navs + "<li class=\"page_link pageLink ";
            if(!i) {navs = navs + " active";}
            navs = navs + "\" id=\"id"+i+"\"><input type=\"hidden\" value=\""+i+"\">";
            navs = navs + "<a  class=\"btn btn-sm goto\">"+ (i + 1) +"</a></li>";
            }
            navs = navs + "<li><button  class=\"btn btn-primary btn-sm next\">>></button></li></ul>";
            $(linkPaginate).html(navs);
            set_display(0, show_per_page,paginated);
    
            $('.next').click(function(){
                nexts(parseInt(current_page),show_per_page,paginated);
               current_page= $('.active').children().val();
             
            });
             $('.previous').click(function(){
                previous(parseInt(current_page),show_per_page,paginated);
               current_page= $('.active').children().val();
                
            });
    
            $('.goto').click(function(){
                go_to_page($(this).parent().children().val(),show_per_page,paginated);
               current_page= $(this).parent().children().val();
                
            });
    }
    //fin pagination

    paginations('.pagesLine','#page_navigation',$('#showTab').val());
    $('.cache').hide();