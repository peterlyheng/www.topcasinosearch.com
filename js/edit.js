jQuery(document).ready(function($){ 
    
    function reindexCasinoListings() {
        $('.top_5_casino_listing').each(function(index) {
            $(this).find('input, textarea').each(function() {
                const $input = $(this);
                let name = $input.attr('name');
                
                if (name) {
                    name = name.replace(/\[\d+\]/, `[${index}]`); // Replace the digit inside the square brackets with the new index.
                    $input.attr('name', name);
                }
            });
        });
    }

    $(document).on('click', '.delete_div', function() {
        console.log('clicked');
        $(this).parent().remove();
        reindexCasinoListings();
    });


    console.log('check if edit.js is active here');

    $('input').on('click', function(){
        console.log('input clicked');
        var type = $(this).attr('type');
        console.log(type);
        if (type == "checkbox") {
            var state = $(this).attr('checked');
            console.log(state);
            if ( state == "checked") {
                $(this).prop('checked', false);
                $(this).attr('checked', false);
            } else {
                $(this).prop('checked', true);
                $(this).attr('checked', true);
            }
        } 
    });

    var page_data = $('#page_data').attr('data-pagetype');
    console.log(page_data);

    $('.togBtn').on('click', function(){
        $('.togBtn').removeClass('active');
         $(this).addClass('active');
        var div = $(this).attr('data-div');
        console.log(div);
        $('.edit_items_div').hide();
        $('.' + div).css('display', 'block');
       });


    let casinoId = $('#casinoEditWrap').attr('data-casinoId');
    let author = $('#casinoEditWrap').attr('data-authorId');
    let bonusId;
 
    

    // WHEN PAGE LOADS GET ALL BONUSES
    let get_casino_bonuses = async () => {
        try {
            const response = await fetch(`/api/bonus/casino/${casinoId}`);
            const responseData = await response.json();

            $('.bonusGrid').html('');
            responseData.casinoBonuses.forEach((bonus) => {
                
                $('.bonusGrid').append(`<div class="single_bonus" data-bonusId=${bonus._id}>
                <div class="bonus_field bonus_name">
                    Bonus Name : ${bonus.name}
                </div>
                <div class="bonus_field bonus_type">
                    Bonus Type : ${bonus.type.map(type => ( 
                        type
                    ) )}
                   
                </div>
                <div class="buttonWrapper">
                    <button class="button btn editBonus">Edit</Button>
                    <button class="button btn deleteBonus button--danger">Delete</button>
                </div>
            </div>`)
            });
    
        } catch (err) {
            console.log('mehh');
            console.log(err);
      }
    }
    if (page_data == "casino_edit") {
        get_casino_bonuses();
    }
 
    function getEditorContent(elementId) {
        // Get the appropriate editor instance from the stored instances
        var targetEditor = editorInstances[elementId];
    
        if (targetEditor) {
            // Retrieve the content
            return targetEditor.getData();
        } else {
            console.error(`No editor instance found for element with ID: ${elementId}`);
            return null;
        }
    }


    // SUBMIT NEW BONUS FUNCTION 
    let submitBonus = async (edit, bonusId) => {
        console.log('starting submitBonus function' + bonusId);
        let name = $('#bonusName').val();
        let type = [];
        let exclusive = $('#exclusive').prop('checked');
        console.log('exclusive' + exclusive);
        let freeSpins = $('#freeSpinsSum').val();
        let freeSpinsInfoExtended = $('#freeSpinsInfoExtended').val();
        let wagerReq = $('#wagerReq').val();
        let wageringType = [];
        let gameRestrictions = $('#gameRestrictions').val();
        let bonusValue = $('#bonusValue').val();
        let maxBet = $('#maxBet').val();
        let maxBetInfoExtended = $('#maxBetInfoExtended').val();
        let maxCashout = $('#maxCashout').val();
        let bonusExpiration = $('#bonusExpiration').val();
        let restrictedCountries = $('#restrictedCountries').val();
        let couponCode = $('#couponCode').val();
        let minDeposit = $('#minDeposit').val();
        // Function to clean and convert the input value
        function cleanAndConvert(input) {
            if (input !== undefined && input !== null && input !== "") {
                // Remove all non-numeric characters except for the decimal point and minus sign
                let cleanedInput = input.replace(/[^\d.-]/g, '');

                // Convert the cleaned string to a number
                return parseFloat(cleanedInput);
            } else {
                return null; // Or handle this case as needed
            }
        }
        let minDepositNumber = cleanAndConvert(minDeposit);
        let maxWin = $('#maxWin').val();
        let otherTerms = getEditorContent('otherTerms');
        let termsLink = $('#termsLink').val();
        
        
        $('.checkedBonus').each(function(each){
            if ($(this).is(":checked")) {
                type.push($(this).val());
            }
        });

        $('.wageringType').each(function(each){
            if ($(this).is(":checked")) {
                wageringType.push($(this).val());
            }
        });
        console.log(otherTerms);

        let url;
        let method;
        if (edit == true && bonusId != false ){
            url = `/api/bonus/${bonusId}`;
            method = 'PATCH';
        } else {
            url = '/api/bonus';
            method = 'POST';
        }

        
        try {
        const response = await fetch(url ,{
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                type: type,
                exclusive: exclusive,
                wagerReq: wagerReq,
                wageringType: wageringType,
                freeSpins: freeSpins,
                freeSpinsInfoExtended: freeSpinsInfoExtended,
                gameRestrictions: gameRestrictions,
                bonusValue: bonusValue,
                maxBet: maxBet,
                maxBetInfoExtended:maxBetInfoExtended,
                maxCashout: maxCashout,
                bonusExpiration: bonusExpiration,
                restrictedCountries: restrictedCountries,
                couponCode: couponCode,
                minDeposit: minDeposit,
                minDepositNumber: minDepositNumber,
                maxWin: maxWin,
                otherTerms: otherTerms,
                termsLink: termsLink,
                author: author,
                casino: casinoId,

            })
        });
        const responseData = await response.json();
        console.log(responseData);
        closeModal();
        get_casino_bonuses();
        } catch (err) {
            console.log(err);
        }
    }

    // DELETE BONUS FUNCTION
    let deleteBonus = async (bonusId) => {
        try {
            const response = await fetch(`/api/bonus/${bonusId}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            const responseData = await response.json();

            closeDeleteModal();
            get_casino_bonuses();
            } catch (err) {
                console.log(err);
            }

    }

    // MODAL BEHAVIOUR FUNCTIONS

    let closeModal = () => {
        $('#bonusModalBg').css('display', 'none');
    }

    let openModal = (name, type, exclusive, wagerReq, wageringType, freeSpins, freeSpinsInfoExtended, gameRestrictions, bonusValue, maxBet, maxBetInfoExtended, maxCashout, bonusExpiration, restrictedCountries, couponCode, maxWin, minDeposit, minDepositNumber, otherTerms, termsLink, edit) => {
        
        $('#bonusModalBg').find('#bonusName').val(name);
        console.log('this is openmodal freespins' + freeSpins);
        if (edit == true ) {
            $('#submitBonusEdit').show();
            $('#bonusModalSubmit').hide(); 
            if (otherTerms) {
                updateEditorContent('otherTerms', otherTerms);
            } else {
                updateEditorContent('otherTerms', '');
            }
        } else {
            if (otherTerms) {
                updateEditorContent('otherTerms', "otherTerms");
            } 
            $('#submitBonusEdit').hide();
            $('#bonusModalSubmit').show();
        }
        $(`.bonusModal :input`).prop('checked', false);
        if (type) {
            type.forEach(function(each){
                $(`.bonusModal :input[value="${each}"]`).prop('checked', true);
            });
        }
        
        if (wageringType) {
            console.log('wagering type' + wageringType);
            wageringType.forEach(function(each){
                $(`.bonusModal :input[value="${each}"]`).prop('checked', true);
            });
        }

        if (exclusive == true) {
            $('#exclusive').prop('checked', true);
        }

        $('#bonusModalBg').find('#exclusive').val(exclusive);
        $('#bonusModalBg').find('#gameRestrictions').val(gameRestrictions);
        $('#bonusModalBg').find('#wagerReq').val(wagerReq);
        $('#bonusModalBg').find('#freeSpinsSum').val(freeSpins);
        $('#bonusModalBg').find('#freeSpinsInfoExtended').val(freeSpinsInfoExtended);
        $('#bonusModalBg').find('#bonusValue').val(bonusValue);
        $('#bonusModalBg').find('#maxBet').val(maxBet);
        $('#bonusModalBg').find('#maxBetInfoExtended').val(maxBetInfoExtended);
        $('#bonusModalBg').find('#maxCashout').val(maxCashout);
        $('#bonusModalBg').find('#bonusExpiration').val(bonusExpiration);
        $('#bonusModalBg').find('#restrictedCountries').val(restrictedCountries);        
        $('#bonusModalBg').find('#couponCode').val(couponCode);
        $('#bonusModalBg').find('#maxWin').val(maxWin);
        $('#bonusModalBg').find('#minDeposit').val(minDeposit);
        $('#bonusModalBg').find('#minDepositNumber').text(minDepositNumber);
        
        
       
    
        

        $('#bonusModalBg').find('#termsLink').val(termsLink);
        $('#bonusModalBg').css('display', 'flex');

    }

    let closeDeleteModal = () => {
        $('#deleteModal').css('display', 'none');
    }

    let openDeleteModal = () => {
        $('#deleteModal').css('display', 'flex');
    }


    let openEditModal = async (bonusId) => {
        let responseData;
        $('#bonusModalBg').attr('data-id', bonusId);
        try {
            const response = await fetch(`/api/bonus/${bonusId}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            responseData = await response.json();
            } catch (err) {
                console.log(err);
        }
        console.log('Open Edit Modal Func ' + responseData.bonus.freeSpinsInfoExtended);
        let name = responseData.bonus.name;
        let type = responseData.bonus.type;
        let exclusive = responseData.bonus.exclusive;
        let gameRestrictions = responseData.bonus.gameRestrictions;
        let wagerReq = responseData.bonus.wagerReq;
        let wageringType = responseData.bonus.wageringType;
        let freeSpins = responseData.bonus.freeSpins;
        let freeSpinsInfoExtended = responseData.bonus.freeSpinsInfoExtended;
        let bonusValue = responseData.bonus.bonusValue;
        let maxBet = responseData.bonus.maxBet;
        let maxBetInfoExtended = responseData.bonus.maxBetInfoExtended;
        let maxCashout = responseData.bonus.maxCashout;
        let bonusExpiration = responseData.bonus.bonusExpiration;
        let restrictedCountries = responseData.bonus.restrictedCountries;
        let couponCode = responseData.bonus.couponCode;
        let maxWin = responseData.bonus.maxWin;
        let minDeposit = responseData.bonus.minDeposit;
        let minDepositNumber = responseData.bonus.minDepositNumber;
        let otherTerms = responseData.bonus.otherTerms;
        let termsLink = responseData.bonus.termsLink;
        
        let edit = true;

        console.log('logging function openEditModal and this is minDepositNumber - ' + minDepositNumber );
        
        openModal(name, type, exclusive, wagerReq, wageringType, freeSpins, freeSpinsInfoExtended, gameRestrictions, bonusValue, maxBet, maxBetInfoExtended, maxCashout, bonusExpiration, restrictedCountries, couponCode, maxWin, minDeposit, minDepositNumber, otherTerms, termsLink, edit);
    }

    // ============== TRACK BUTTON CLICKS =============== 
    // ON CLICK OPEN ADD BONUS MODAL 
    $('#addNewBonus').on('click', event => {
        event.preventDefault();
        let name = "";
        let type = "";
        let exclusive = "";
        let gameRestrictions = "";
        let wagerReq = "";
        let wageringType = "";
        let freeSpins = "";
        let freeSpinsInfoExtended = "";
        let bonusValue = "";
        let maxBet = "";
        let maxBetInfoExtended = "";
        let maxCashout = "";
        let bonusExpiration = "";
        let restrictedCountries = "";
        let couponCode = "";
        let maxWin = "";
        let minDeposit = "";
        let minDepositNumber = "";
        let otherTerms = "";
        let termsLink = "";
        openModal(name, type, exclusive, wagerReq, wageringType, freeSpins, freeSpinsInfoExtended, gameRestrictions, bonusValue, maxBet, maxBetInfoExtended, maxCashout, bonusExpiration, restrictedCountries, couponCode, maxWin, minDeposit, minDepositNumber, otherTerms, termsLink);
    });

    // ON CLICK CLOSE BONUS MODAL 
    $('#bonusModalCancel').on('click', event => {
        event.preventDefault();
        closeModal();
    });

    $('#bonusModalSubmit').on('click', event => {
        event.preventDefault();
        console.log('bonusModalSubmit clicked');
        let edit = false;
        let bonusId = false;
        submitBonus(edit, bonusId);
    });

    $(document).on("click", "#submitBonusEdit", event => {
        event.preventDefault();
        let edit = true;
        let bonusId = $('#bonusModalBg').attr('data-id');
        submitBonus(edit, bonusId);
    });
    

    $(document).on("click", ".deleteBonus", event => {
        event.preventDefault();
        bonusId = event.target.parentElement.parentElement.getAttribute('data-bonusId')
        openDeleteModal();
    });

    $(document).on("click", "#confirmBonusDelete", event => {
        event.preventDefault();
        deleteBonus(bonusId);
    });
    
    $(document).on("click", "#cancelBonusDelete", event => {
        event.preventDefault();
        closeDeleteModal();
    });

    $(document).on("click", ".editBonus", event => {
        event.preventDefault();
        bonusId = event.target.parentElement.parentElement.getAttribute('data-bonusId')
        openEditModal(bonusId);
    });


    // INITIALIZE EDITOR
    // Object to keep references to your editor instances
        var editorInstances = {};

        // Create editors for each div with the 'init_editor' class
        document.querySelectorAll('.init_editor').forEach((div, index) => {
            ClassicEditor
                .create(div)
                .then(editor => {
                    // Save the editor instance for later use, associated with its source element's ID
                    editorInstances[div.id] = editor;
                })
                .catch(error => {
                    console.error('There was a problem initializing the editor.', error);
                });
        });

        function updateEditorContent(elementId, newContent) {
            // Get the appropriate editor instance from the stored instances
            var targetEditor = editorInstances[elementId];
        
            if (targetEditor) {
                // Set the new content
                targetEditor.setData(newContent);
            } else {
                console.error(`No editor instance found for element with ID: ${elementId}`);
            }
        }
    // CKEDITOR.on('instanceReady', function(ev) {
    //     var editor = ev.editor;
    //     editor.dataProcessor.htmlFilter.addRules({
    //             elements : {
    //                 a : function( element ) {
    //                     if ( !element.attributes.rel ){
    //                        //gets content's a href values
    //                         var url = element.attributes.href;
    //                        //extract host names from URLs 
    //                         var hostname = (new URL(url)).hostname;
    //                         if ( hostname !== window.location.host && hostname !=="youranothersite.com") {
    //                             element.attributes.rel = 'nofollow';
    //                         }
    //                     }
    //                 }
    //             }
    //         });
    // })

        

        var addNewRating = (e) => {
			e.preventDefault();
			console.log('clicked hell yea');
		}

        $('#addNewRating').on('click', function(e){
			e.preventDefault();
            var i = parseInt($('.questions_wrapper').last().attr('data-index')) + 1;
            var pageType = $('#faq_wrapper').attr('data-type');
            
			console.log(i + "asdfasd");
            
            var myDivInsert = '<div class="questions_wrapper" data-index="' + i + '">' +
                '<label>Custom Question</label>' +
                '<input type="text" name="' + pageType + '[faqSchema][' + i + '][question]">' +
                '<label>Custom Answer</label>' +
                '<textarea class="init_editor" name="' + pageType + '[faqSchema][' + i + '][answer]"></textarea>' +
            '</div>';
            $('.enterRowHere').append(myDivInsert);
		});

        $('#addNewSection').on('click', function(e) {
            console.log('clicked add new section');
            e.preventDefault();
            var newIndex = parseInt($('.sections_wrapper').last().attr('data-index')) + 1;
            var pageType = $('#faq_wrapper').attr('data-type');
            console.log(newIndex);
            var newSectionHtml = '<div class="sections_wrapper" data-index="' + newIndex + '">' +
                                    '<label>New Section Title</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchema][' + newIndex + '][title]">' +
                                    '<label>New Section Description</label>' +
                                    '<textarea class="init_editor" type="textarea" name="' + pageType + '[newPageSchema][' + newIndex + '][description]"></textarea>' +
                                    '<label>New Section Image</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchema][' + newIndex + '][image]">' +
                                    '<label>New Section Image Alt Tag</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchema][' + newIndex + '][image_alt]">' +
                                '</div>';
            $('#enterSections').append(newSectionHtml);

          
        });

        $('#addNewSectionES').on('click', function(e) {
            console.log('clicked add new section es');
            e.preventDefault();
            var newIndex = parseInt($('.sections_wrapper_es').last().attr('data-index')) + 1;
            var pageType = $('#faq_wrapper_es').attr('data-type');
            console.log(newIndex);
            var newSectionHtml = '<div class="sections_wrapper_es" data-index="' + newIndex + '">' +
                                    '<label>New Section Title</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchemaES][' + newIndex + '][title]">' +
                                    '<label>New Section Description</label>' +
                                    '<textarea class="init_editor" type="textarea" name="' + pageType + '[newPageSchemaES][' + newIndex + '][description]"></textarea>' +
                                    '<label>New Section Image</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchemaES][' + newIndex + '][image]">' +
                                    '<label>New Section Image Alt Tag</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchemaES][' + newIndex + '][image_alt]">' +
                                '</div>';
            $('#enterSectionsES').append(newSectionHtml);

          
        });
        $('#addNewSectionRU').on('click', function(e) {
            console.log('clicked add new section ru');
            e.preventDefault();
            var newIndex = parseInt($('.sections_wrapper_ru').last().attr('data-index')) + 1;
            var pageType = $('#faq_wrapper_ru').attr('data-type');
            console.log(newIndex);
            var newSectionHtml = '<div class="sections_wrapper_ru" data-index="' + newIndex + '">' +
                                    '<label>New Section Title</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchemaRU][' + newIndex + '][title]">' +
                                    '<label>New Section Description</label>' +
                                    '<textarea class="init_editor" type="textarea" name="' + pageType + '[newPageSchemaRU][' + newIndex + '][description]"></textarea>' +
                                    '<label>New Section Image</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchemaRU][' + newIndex + '][image]">' +
                                    '<label>New Section Image Alt Tag</label>' +
                                    '<input type="text" name="' + pageType + '[newPageSchemaRU][' + newIndex + '][image_alt]">' +
                                '</div>';
            $('#enterSectionsRU').append(newSectionHtml);

          
        });

        // Use event delegation to attach ClassicEditor to .init_editor textarea elements
            $('body').on('focus', '.init_editor', function() {
                    var editor = ClassicEditor.create(this);
                    editor.then(function(newEditor) {
                        console.log(newEditor);
                    }).catch(function(error) {
                        console.error(error);
                    });
                
            });
        $('.editUserInfo').on('click', function(){
            $('.removeDis').removeAttr('disabled');
            $('.useredit-form').find('button').removeClass('disabled');
            $('.avatar_hover').css({'opacity': '1', 'pointer-events': 'all'});
        });

        $("input:file").change(function (){
            var filename = $(this).val().split('\\').pop();
            $("#filename").val(filename);
          });

        $('.avatar_hover').on('click', function(){
            console.log('hover avatar clicked');
            $('#image').trigger('click');
        });


		var addInputTextPositive = (text) => {
			if ($('.chosenPositive').last().attr('data-index') != undefined) {
				var i = $('.chosenPositive').last().attr('data-index');
				i++
			} else {
				var i = 0;
			}
			myDivInsert = '<div class="text_row"><input class="chosenPositive" type="text" data-index="' + i + '" value="' + text + '" name="casino[casinoPositives][' + i + '][text]"><div class="delete_btn">+</div></div>';
			return myDivInsert;
		}

		$('.addPositive').on('click', function(e){
			e.preventDefault();
			console.log('clicked');
			var text = $(this).text();
			myDivInsert = addInputTextPositive(text);
			$('#positiveRows').append(myDivInsert);
		});

		$('#addNewPositive').on('click', function(e){
			e.preventDefault();
			var text = "";
			myDivInsert = addInputTextPositive(text);
			$('#positiveRows').append(myDivInsert);
		});

		var addInputTextNegative = (text) => {
			if ($('.chosenNegative').last().attr('data-index') != undefined) {
				var i = $('.chosenNegative').last().attr('data-index');
				i++
			} else {
				var i = 0;
			}
			myDivInsert = '<div class="text_row"><input class="chosenNegative" type="text" data-index="' + i + '" value="' + text + '" name="casino[casinoNegatives][' + i + '][text]"><div class="delete_btn">+</div></div>';
			return myDivInsert;
		}

		$('.addNegative').on('click', function(e){
			e.preventDefault();
			console.log('clicked');
			var text = $(this).text();
			myDivInsert = addInputTextNegative(text);
			$('#negativeRows').append(myDivInsert);
		});

		$('#addNewNegative').on('click', function(e){
			e.preventDefault();
			var text = "";
			myDivInsert = addInputTextNegative(text);
			$('#negativeRows').append(myDivInsert);
		});

		$(document).on("click", '.delete_btn', function(event) { 
			$(this).parent().remove();
		});

        $('.select_all').on('click', function(){
            console.log('hmm');
            $(this).parent().find('.single_item input').prop('checked', true);
        });










        $('#delete_open').on('click', function(){
            $('.hidden_delete_confirm').slideDown();
        });


        $('.ccode').keyup(function() {
            var value = $(this).val();
            console.log(value);
            $(this).parent().find('.getcode').attr('name', `casino[countrySpecificRating.${value}]`);
        });

        $('.clicker').on('click', function(){
            var showDiv = $(this).attr('data-lang');
            $('.rep_sec').hide();
            $('.' + showDiv).show();
        });

});