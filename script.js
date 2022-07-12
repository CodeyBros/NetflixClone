const faq = document.querySelectorAll('.faq-question');

faq.forEach(function(question) {
    const faqHead = question.querySelector('.faq-head');
    const response = question.querySelector('.faq-question-resp');
    const faqIconAdd = question.querySelector('.faq-icon-add');
    const faqIconRemove = question.querySelector('.faq-icon-remove');

    
    faqHead.addEventListener('click', function(e) {

        faq.forEach(function(item) {
            if (item !== question) {

                const resClose = item.querySelector('.faq-question-resp');
                const faqIconAddClose = item.querySelector('.faq-icon-add');
                const faqIconRemoveClose = item.querySelector('.faq-icon-remove');

                resClose.classList.add('d-none');
                faqIconRemoveClose.classList.add('d-none');
                faqIconAddClose.classList.remove('d-none');
            }
        })

        response.classList.toggle('d-none');
        faqIconAdd.classList.toggle('d-none');
        faqIconRemove.classList.toggle('d-none');
        
    });
});


