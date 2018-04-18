// import 'bootstrap';
(function($){
    'use strict';
    
    /**
     * Tab for status post
     */
    $('.tab-button').on('click', function(e){
        e.preventDefault();
        $('.tab-button, .tab').removeClass('active');
        $(this).addClass('active');
        let tabShow = $(this).attr('href');
        $(tabShow).addClass('active');
    })

    /**
     * Editor for history post
     * https://quilljs.com/docs/
     * Version 
     */
    let toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']
    ];

    let options = {
        // debug: 'info',
        modules: {
            toolbar: toolbarOptions
        },
        readOnly: false,
        theme: 'snow'
    };
    let story  = new Quill('.editor__quill', options); 
    let status = new Quill('.editor__content');

    /**
     * Hide comment.
     */
    $('body').on('click','.post__hidden', function(e){
        e.preventDefault();
        $(this).closest('.post__box').addClass('post__box--hide');
        $(this).closest('.post').find('[data-action="comment"]').removeClass('active');
    });

    /**
     * Action to show comment
     */
    $('body').on('click','[data-action="comment"]', function(e){
        e.preventDefault();
        let thisPostBox = $(this).closest('.post').find('.post__box');
        if (thisPostBox.hasClass('post__box--hide')) {
            $(this).addClass('active');
            return thisPostBox.removeClass('post__box--hide');
        }
        $(this).removeClass('active');
        return thisPostBox.addClass('post__box--hide');
    });

    /**
     * Action to show heart
     */
    $('body').on('click','[data-action="heart"]', function(e){
        e.preventDefault();
        let thisHeart = $(this).find('.fa');
        $(this).addClass('active');
        if (thisHeart.hasClass('fa-heart-o')) {
            thisHeart.removeClass('fa-heart-o');
            return thisHeart.addClass('fa-heart');
        }
        $(this).removeClass('active');
        $(this).removeClass('fa-heart');
        return thisHeart.addClass('fa-heart-o');
    });

    /**
     * Select all kids to tags.
     */
    $('body').on('click','.select_all', function(e){
        e.preventDefault();
        if ($(this).hasClass('active-all')) {
            $(this).removeClass('active-all');
            return $('.editor__kids li').removeClass('active');
        }
        $(this).addClass('active-all');
        $('.editor__kids li').addClass('active');
    });

    $('body').on('click', '.editor__kids li a', function (e) {
        e.preventDefault();
        let kid = $(this).closest('li');
        if ( kid.hasClass('active') ) {
            return kid.removeClass('active');
        }
        return kid.addClass( 'active' );
    });

    /**
     * Fillter click
     */
    $('body').on('click','.fillters__item a', function(e){
        e.preventDefault();
        let fillter = $(this).closest('li');
        if (fillter.hasClass('active')) {
            return fillter.removeClass('active');
        }
        return fillter.addClass('active');
    });

    /**
     * Post
     */
    $('body').on('click','.editor__btn--post', function(e){
        e.preventDefault();
        console.log('Post content');
    });

})(jQuery);