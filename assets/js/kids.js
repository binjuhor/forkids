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
    let story = new Quill('.editor__quill', options); 
    let status = new Quill('.editor__content'); 

})(jQuery);