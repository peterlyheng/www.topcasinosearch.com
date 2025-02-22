$(document).ready(function(){

    // *********************************************
    // =========== INITIATE FIRST DATA ============= 
    // *********************************************

    var $pageData = $('#page_data');
    var geoId = $pageData.attr('data-geoId');
    var geoName = $pageData.attr('data-geoName');
    var lang = $('html').attr('lang');

    var slugToTitleMap = {
        "welcome-bonus": { title: "Welcome Bonus", titleData: "Welcome Bonus" },
        "free-spins": { title: "Free Spins", titleData: "Free Spins" },
        "cashback-bonus": { title: "Cashback Bonus", titleData: "Cashback Bonus" },
        "no-deposit-bonus": { title: "No Deposit Bonus", titleData: "No Deposit Bonus" },
        "reload-bonus": { title: "Reload Bonus", titleData: "Reload Bonus" },
        'bonuses': { title: "First Deposit Bonus", titleData: "First Deposit Bonus" },
        "first-deposit-bonus": { title: "First Deposit Bonus", titleData: "First Deposit Bonus" },
        'mejores-bonos-bienvenida': { title: "Bono por Primer Depósito", titleData: "First Deposit Bonus" },
        'bono-cashback': { title: "Bono de reembolso", titleData: "Cashback Bonus" },
        'giros-gratis': { title: "Giros gratis", titleData: "Free Spins" },
        'bono-por-recarga': { title: "Bono de recarga", titleData: "Reload Bonus" },
        'bonos-sin-deposito': { title: "Bono sin depósito", titleData: "No Deposit Bonus" },

        // Add more mappings here as needed
    };
    
    function getTitleAndDataFromSlug(slug) {
        var defaultResponse = { title: "Default Title", titleData: "Default Title" };
        return slugToTitleMap[slug] || defaultResponse;
    }
    
    // Get slug from URL
    var urlSlug = window.location.pathname.split('/').pop();
    
    // Convert slug to title and titleData
    var { title, titleData } = getTitleAndDataFromSlug(urlSlug);
    
    // Assuming you need to use them as arrays for some reason
    var title = [title];
    var titleData = [titleData];

    if (title == "Welcome Bonus" || title == "bonuses") {
        title = ["First Deposit Bonus"];
    }

    var initValueText = $("#preBtn").attr("data-text");
    var initValue = {
        value: initValueText + geoName,
        location: 'preFilters'
    }

    const initData = {
        lang: lang,
        type: [],
        geoId: geoId,
        page: 1, // starting from the first page
        casinos: {
            countries: [geoId],
            deposit_methods: [],
            currencies: [],
            softwares: [],
            games: [],
        },
    };

    var data = initData;

    if (slugToTitleMap.hasOwnProperty(urlSlug)) {
        var data = {
            type: titleData,
            lang: lang,
            geoId: geoId,
            page: 1, // starting from the first page
            casinos: {
                countries: [geoId],
                deposit_methods: [],
                currencies: [],
                softwares: [],
                games: [],
            },
        };
        $('#' + urlSlug).prop('checked', true);
        title.forEach(function(title) {
            var filterTag = $('<div class="filter-tag"><span class="remove-btn">+</span><span>' + title + '</span></div>');

            // Add a data attribute for easy identification and removal
            filterTag.attr('data-filter', title);
            filterTag.attr('data-location', 'type');
            $('div[data-indicator="typeFilters"]').show();
            $('.typeFilters').append(filterTag);
        });
        
    } 

    


    // *******************************************************
    // ==== ADD ACTIVE FILTER TAG AND UPDATE RESULTS ======== 
    // *******************************************************
    var initialLoad = 0;
    function add_tag_and_init(checkboxValue, data) {
        // Create a new span element to serve as the filter tag
        var filterTagId = checkboxValue.id ? checkboxValue.id : 'placeholder-id';
        var filterTag = $('<div class="filter-tag" id="' + filterTagId + '"><span class="remove-btn">+</span><span>' + checkboxValue.value + ' </span></div>');
        
        
        // Add a data attribute for easy identification and removal
        filterTag.attr('data-filter', checkboxValue.key);
        filterTag.attr('data-location', checkboxValue.location);
        $('div[data-indicator="' + checkboxValue.location + '"]').show();
        $('.' + checkboxValue.location).append(filterTag);
        if (initialLoad != 0) {
            var activeFilters = $('#sumFilters').find('.active-filters').text();
            $('#sumFilters').find('.active-filters').text(parseInt(activeFilters) + 1);
            dataLayer.push({
                'event': 'bonusFilter',
                'event_category': checkboxValue.location,
                'event_label': checkboxValue.value,
                'value': 'none'
            });
            $('.deleteFilters').css('display', 'inline-flex');
        }
        data.page = 1;

        activate_filter(data, false);
        initialLoad = 1;
    }

    // **********************************************************
    // ====== REMOVE ACTIVE TYPE FITLER AND UPDATE RESULTS ====== 
    // **********************************************************
    function remove_tag_and_init(checkboxValue) {
        // Find and remove the filter from the active types array
        if (checkboxValue.location == "casinoFilters") {
            // Assuming checkboxValue.value is defined
            var valueToRemove = checkboxValue.id;
            // Iterate through each key in data.casino
            for (var key in data.casinos) {
                
                if (data.casinos.hasOwnProperty(key) && Array.isArray(data.casinos[key])) {
                    var index = data.casinos[key].indexOf(valueToRemove);

                    // If the value is found in the current array, remove it
                    if (index > -1) {
                        data.casinos[key].splice(index, 1);
                    }
                }
            }
        } else {
            var index = data.type.indexOf(checkboxValue.key);
            if (index > -1) {
                data.type.splice(index, 1);
            }
        }

        // Remove the corresponding filter tag from the display
        $('.activeFilters').find(`.filter-tag[data-filter='${checkboxValue.key}']`).remove();
        // Uncheck the checkbox, as the filter is no longer active
        $(`.checkbox-filter input[data-key="${checkboxValue.key}"]`).prop('checked', false);
        data.page = 1;
        if (initialLoad != 0) {
            var activeFilters = $('#sumFilters').find('.active-filters').text();
            $('#sumFilters').find('.active-filters').text(parseInt(activeFilters) - 1);
        }

        activate_filter(data, false); 
        var $indicatorDiv = $('.' + checkboxValue.location);
        if ($('.filter-tag').length === 1) {
            $('.deleteFilters').hide();
        }

        // Use $.trim to remove any white space from the content
        if ($indicatorDiv.html() === '') {
            // If the div is empty, hide it
            $indicatorDiv.parent().hide();
        }
    }

    // Remove all bonus filters at once

    function removeAllBonusFilters() {
        $('.typeFilters').html("");
        $('.wagerFilters').html("");
        $('.spinsFilters').html("");    
        $('.otherFilters').html("");

    }
    $('.deleteFilters').on('click', function() {
        removeAllBonusFilters();
        data.type = [];
        delete data.freeSpins; 
        data.wageringReq = 100; 
        data.page = 1;  
        clearSpinsFilter();    
        clearWagerFilter();    
        uncheckAllBonusTypeFilters();
        activate_filter(data, false);
        $(this).hide();
    });
    // *********************************************
    // ========= Filter Click On Bonus Type ========
    // *********************************************

    $('.checkbox-filter').on('click', '.bonusTypeFilter', function() {
        var key = $(this).find('.checkbox').attr('data-key');
        var value = $(this).find('input[type=checkbox]').val();

        var checkboxValue = {
            value: value,
            location: 'typeFilters',
            key: key
        }

        if(event.target.type !== 'checkbox') {
            var $checkbox = $(this).find('.checkbox');
            $checkbox.prop('checked', !$checkbox.prop('checked'));
            if($checkbox.prop('checked')){
                if (!data.type.includes(checkboxValue.key)) { // avoid duplicates
                    data.type.push(checkboxValue.key);
                    add_tag_and_init(checkboxValue, data);  // add a tag for this filter value
                }
            } else {
                var index = data.type.indexOf(checkboxValue.key);
                if (index > -1) {
                    data.type.splice(index, 1);
                    remove_tag_and_init(checkboxValue, data);  // remove the tag for this filter value
                }
            }
        }
    });

    // ***************************************************
    // ========= Common Utility Functions ================
    // ***************************************************

    function setupSlider(slider, output, dataKey, textFormat, filterLocation) {
        slider.on('input', function() {
            $(this).css('opacity', '1');
            var text = textFormat.replace('{value}', $(this).val());
            output.text(text);
        });

        slider.on('change', function() {
            var value = $(this).val();
            data[dataKey] = value;
            var checkboxValue = {
                value: textFormat.replace('{value}', value),
                location: filterLocation
            };
            $('.' + filterLocation).find('.filter-tag').remove();
            add_tag_and_init(checkboxValue, data);
        });
    }

    function clearFilter(filterValue, location, slider, maxValue, defaultText, output){
        output.text(defaultText);
        slider.css('opacity', '0.3').val(maxValue);
        if (location == "spinsFilters") {
            delete data.freeSpins;
        }
        remove_tag_and_init(filterValue);
    }
 
    function clearSpinsFilter(){
        $('#spinsRange').css('opacity', '0.3').val(1);
        $('#spinsSum').text('Any Free Spins');
    }
    function clearWagerFilter(){
        $('#myRange').css('opacity', '0.3').val(100);
        $('#demo').text('Any');
    }

    function uncheckAllBonusTypeFilters() {
        $('.checkbox-filter .bonusTypeFilter input[type=checkbox]').each(function() {
            var key = $(this).find('.checkbox').attr('data-key');
            var value = $(this).find('input[type=checkbox]').val();
            
            
            // Uncheck the checkbox
            $(this).prop('checked', false);
    
            // Prepare the value for removal
            var checkboxValue = {
                value: value,
                location: 'typeFilters',
                key: key
            }
    
            // Remove the value from the data object
            var index = data.type.indexOf(checkboxValue.value);
            if (index > -1) {
                data.type.splice(index, 1);
    
                // Remove the corresponding filter tag and update UI
                remove_tag_and_init(checkboxValue, data);
            }
        });
    }
    // ***************************************************
    // ========= Filter Set Wagering Requirements ========
    // ***************************************************

    var slider = $("#myRange"); 
    var wagerReqOutput = $("#demo");
    var textFormat = $('#myRange').attr('data-text');


    setupSlider(slider, wagerReqOutput, 'wageringReq', textFormat, 'wagerFilters');

    // ***************************************************
    // ========= Filter Set Free Spins ========
    // ***************************************************

    var spinSlider = $("#spinsRange"); 
    var spinsOutput = $("#spinsSum");
    var spinsTextFormat = $('#spinsRange').attr('data-text');

    setupSlider(spinSlider, spinsOutput, 'freeSpins', spinsTextFormat, 'spinsFilters');

    // ***************************************************
    // ========= Filter Set Min Deposit ========
    // ***************************************************

    var depositSlider = $("#depositRange"); 
    var depositOutput = $("#depositSum");
    var depositTextFormat = $('#depositRange').attr('data-text');

    setupSlider(depositSlider, depositOutput, 'minDeposit', depositTextFormat, 'minDepFilters');
    
    // ***************************************************
    // ============= Filter Toggle Free Spins ============
    // ***************************************************


    $('#freeSpinsToggle').on('click', function(){
        var freeSpinsToggle = $(this).prop('checked');
        if (freeSpinsToggle == true) {
            var checkboxValue = {
                value: 'Free Spins',
                location: 'otherFilters'
            };
            data.freeSpins = true;
            add_tag_and_init(checkboxValue, data);
        } else {
            $('.activeFilters [data-location="otherFilters"]').trigger("click");
        }
    }); 




    // ****************************************************
    // ========= Click on an "Active Filters" Item ========
    // ****************************************************
   
    $('.activeFilters').on('click', '.filter-tag', function() {
        var filterValue = {
            key: $(this).data('filter'),
            location: $(this).data('location'),
            id: $(this).attr('id')
        }
        if (filterValue.location == "preFilters") {
        } else if (filterValue.location == "wagerFilters") {
            clearFilter(filterValue, "wagerFilters", slider, slider.attr('max'), 'All', wagerReqOutput);
        } else if (filterValue.location == "spinsFilters") {
            clearFilter(filterValue, "spinsFilters", spinSlider, spinSlider.attr('min'), 'Any', spinsOutput);
        } else if (filterValue.location == "minDepFilters") {
            clearFilter(filterValue, "minDepFilters", depositSlider, depositSlider.attr('min'), 'Any', depositOutput);
        } else {
            remove_tag_and_init(filterValue);
        }
        
    });


    // ***************************************************
    // Load more button logic
    // ***************************************************
    $('#load-more-bonuses').on('click', function() {
        data.page++;
        activate_filter(data, true); // Load the next page on click
    });

    // ***************************************************
    // The actual function that initiates the bonus filter
    // ***************************************************
    var loadedAlready = 0; 
    var activate_filter = function(data, isLoadMore) {
        if (loadedAlready == 1 && !isLoadMore) {
            var element = document.querySelector('.bonusPageContainer');
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
        $('.moreBonusesLoader').show();
        $('#loadingBanner').show();
        $('#sumFilterResults').find('.found-bonuses').html(`<div class="dot-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>`);
        $('#bonus-results').css('opacity', '0');
        $('.noResultsWrap').hide();
        $.ajax({
            type: 'POST',
            url: '/bonuses/search',
            data: data,
            success: function (response) {
                if (!isLoadMore) {
                    // If it's a new filter action, clear the previous results
                    $('#bonus-results').html("");
                } 
                
                // Append new results (in case of load more, it will just add to the existing content)
                $('#bonus-results').append(response.html);
                $('#bonus-results').css('opacity', '1');
                $('#loadingBanner').hide();
                if (screen.width > 900) {
                    updateFixedElementListeners();
                }
                loadedAlready = 1;
                // Now you can access the count directly
                var count = response.count;
                if ( count == "0") {
                    $('.noResultsWrap').show();
                    $('.moreBonusesLoader').hide();
                }
                // Check if it's the last page
                var itemsPerPage = 10;
                var totalPages = Math.ceil(count / itemsPerPage);
                if (data.page >= totalPages) {
                    $('#load-more-bonuses').hide(); // Hide the load more button
                } else {
                    $('#load-more-bonuses').show(); // Show it in case it was previously hidden
                }
                $('#sumFilterResults').find('.found-bonuses').text(count);
            },
            error: function (response) {
                console.log('An error occurred.');
            },
        }); 
    };
    add_tag_and_init(initValue, data);


    // Free spins more terms logic
    $(document).on({
        mouseenter: function() {
            if (!$(this).data('open')) {
                $(this).parent().find('.theInfo').stop().animate({ 'max-height': '3px' }, 100);
            }
        },
        mouseleave: function() {
            if (!$(this).data('open')) {
                $(this).parent().find('.theInfo').stop().animate({ 'max-height': '0' }, 100);
            }
        }
    }, '.spinsExpandBtn'); 
    $(document).on('click', '.spinsExpandBtn', function() {
        var content = $(this).parent().find('.theInfo');
        if (!$(this).data('open')) {
            $(this).find('.open').css('transform', 'rotate(180deg)');
            content.stop().animate({ 'max-height': content.prop('scrollHeight') + 'px' }, 200);
            $(this).data('open', true);
        } else {
            $(this).find('.open').css('transform', 'rotate(0deg)');
            content.stop().animate({ 'max-height': '0' }, 200, function() {
                content.css('max-height', '');
            });
            $(this).data('open', false);
        }
    });

    // Open terms lightbox logic
    $(document).on('click', '.readTerms', function(){
        var terms = $(this).parent().parent().find('.theTerms').html();
        $('.termsBody').html(terms);
        $('.termsLightBox').css('display', 'flex');
    });

    // Close terms lightbox logic
    $(document).on('click', '.closeTerms', function(){
        $('.termsBody').html("");
        $('.termsLightBox').css('display', 'none');
    });

    // Logic to close terms lightbox when clicking outside of .termsWrapper
    $(document).on('click', '.termsLightBox', function(event){
        if (event.target === this) {
            $('.termsBody').html("");
            $('.termsLightBox').css('display', 'none');
        }
    });

    // ===================
    // Casino Filter Parts
    // ===================

    // 1. Open accordion
    $('.mainItem').on('click', function(){
        var open = $(this).attr('data-open');
        if ( open == "false" ) {
            $('.filters').hide();
            // $('.filters').css('max-height', '0px');
            $('.mainItem').attr('data-open', 'false');
            $('.mainItem .closeIcon').hide();
            $('.mainItem .openIcon').show();
            $(this).parent().find('.filters').show();
            $(this).find('.closeIcon').show();
            $(this).find('.openIcon').hide();
            $(this).attr('data-open', 'true');
        } else {
            $('.mainItem .closeIcon').hide();
            $('.mainItem .openIcon').show();
            // $('.filters').css('max-height', '0px');
            $('.filters').hide();
            $(this).attr('data-open', 'false');
        }
    }); 

    // 2. Filter checkboxes by search
    $(".filterResults").on("input", function() {
        var searchVal = $(this).val().toLowerCase();

        $(this).parent().parent().find(".singleFilter").each(function() {
            var countryName = $(this).find("span.name").text().toLowerCase();
            if (countryName.includes(searchVal)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // 3. Click on checkbox logic

    $('.singleFilter').on("click", function(event){
        var type = $(this).attr('data-type');
        var id = $(this).attr('id');
        // Prevent double toggle if the checkbox is clicked directly
        var checkboxValue = {
            value: $(this).find('input[type=checkbox]').val(),
            id: id,
            location: 'casinoFilters'
        }
        if(event.target.type !== 'checkbox') {
            // Find the checkbox within the clicked singleFilter div and toggle it
            var $checkbox = $(this).find('.checkbox');
            $checkbox.prop('checked', !$checkbox.prop('checked')); 
            // Logic for when the checkbox state changes
            if($checkbox.prop('checked')){
                if (!data.casinos[type].includes(id)) {
                    data.casinos[type].push(id);
                    add_tag_and_init(checkboxValue, data);
                    // activate_filter(data, false);
                } else {
                    console.log('it seems like it was alrady included');
                }
            } else {
                data.casinos[type] = data.casinos[type].filter(item => item !== id);
                remove_tag_and_init(checkboxValue, data);
                // activate_filter(data, false);
            }
        }
    });

    // 3.1 Click on bonus tag btn logic

    $('.bonusPageContainer').on('click', '.bonusTag', function(){
        var type = $(this).attr('data-type');
        dataLayer.push({
            'event': 'bonusTagClick',
            'event_category': 'bonusTag',
            'event_label': type,
            'value': 'none'
        });
        var checkboxValue = {
            value: type,
            location: 'typeFilters'
        }
        data.type.push(checkboxValue.value);
        add_tag_and_init(checkboxValue, data);
        $("input[type='checkbox'][value='" + checkboxValue.value + "']").prop('checked', true);

    });

    // Click on bonus code copy

    $('.bonusGridWrap').on('click', '.theBonusCode', function() {
        var textToCopy = $(this).find('.codeToCopy').text();
        var that = $(this); // Store the reference to the clicked element
    
        navigator.clipboard.writeText(textToCopy).then(function() {
            // Success message
            that.find('.copied-message').fadeIn().delay(2000).fadeOut();
        }, function(err) {
            // Error handling
            console.error('Error in copying text: ', err);
        });
    });
 
    // The following logic, is in charge of scrolling the filter accordion. and the bonuses inside the container. å
    if (screen.width > 900) {
        function updateFixedElementListeners() {
            $(window).on('scroll', function() {
                $('.childDiv').each(function() {
                    var $this = $(this);
                    var parentOffset = $this.parent().offset().top;
                    var parentHeight = $this.parent().outerHeight();
                    var elementHeight = $this.outerHeight();
                    var parentWidth = $this.parent().width(); // Get the width of the parent
                    var elementHeight = $this.outerHeight();
                    var windowScrollTop = $(window).scrollTop() + 110;
        
                    // Set the width of the child element to match the parent's width
                    $this.width(parentWidth);
                    if (elementHeight < parentHeight) {
                        $this.css('position', 'absolute');
                        if (windowScrollTop > parentOffset && windowScrollTop < (parentOffset + parentHeight - elementHeight)) {
                            $this.css({
                                'position': 'fixed',
                                'top': '120px'
                            });
                        } else {
                            $this.css({
                                'position': 'absolute',
                                'top': windowScrollTop < parentOffset ? '0' : (parentHeight - elementHeight) + 'px'
                            });
                        }
                    }
    
                });
            });
        }
    }

    var filterBoxFixed = false;

 

    $('.open-green-accordion').on('click', function() {
        // Toggle the filter visibility
        $('.sticky-filter').toggle();
        $('body').toggleClass('no-scroll');
        $(this).find('span').toggleClass('clicked');
    
        // Check if the accordion is currently open or closed
        if ($(this).attr('data-state') === 'closed') {
            // If closed, hide sumFilters and show sumFilterResults
            $('#sumFilters').css('display', 'none');
            $('#sumFilterResults').css('display', 'inline-block');
            $(this).attr('data-state', 'open');
        } else {
            // If open, show sumFilters and hide sumFilterResults
            $('#sumFilters').css('display', 'inline-block');
            $('#sumFilterResults').css('display', 'none');
            $(this).attr('data-state', 'closed');
        }
    });

});