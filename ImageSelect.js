        $.fn.ImageSelect = function () {
            
            switch (typeof (arguments[0])) {
                case 'string': {
                    switch (arguments[0]) {
                        case 'getVal': {
                            //GETTER
                            var Selector = $(this).first();
                            var val = Selector.find('.head').attr('val');
                            return val;
                        } break;
                        case 'setVal': {
                            console.log('setter');
                            //SETTER
                            var setval = arguments[1];
                            return this.each(function () {
                                var Selector = $(this);
                                var opt = Selector.find('.option[val="' + setval + '"] ');
                                Selector.find('.head').attr('val', opt.attr('val'));
                                Selector.find('.head').html(opt.html());
                            });
                        } break;
                        default: return this;
                    }
                } break;
                case 'object': {
                    var width = 194;
                    if (arguments[0].width) {
                        width = arguments[0].width;
                    }

                    return this.each(function () {
                        var select = $(this);

                        var outStr = '';

                        select.find('option').each(function () {
                            var option = $(this);
                            outStr += '<div class="option" val="' + option.attr('value') + '"  > <img class="normal" src="' + option.attr('icon') + '" style="margin: 0 0 2px 4px" />  <img class="hover" src="' + option.attr('iconHover') + '" style="margin: 0 0 2px 4px;display:none" /> ' + option.text() + '</div>';
                        });

                        var list = $('<div class="list" style="width:' + width + 'px;border:1px solid #ccc;">' + outStr + '</div>');
                        var head = $('<div class="head" val="" style="width:' + width + 'px;border:1px solid #ccc;height:20px;cursor:pointer"></div>');

                        list.find('.option').each(function () {
                            var opt = $(this);
                            opt.mouseenter(function () {
                                opt.css({ 'background-color': '#658cbb', 'color': 'white' });
                                opt.find('.normal').hide();
                                opt.find('.hover').show();
                            }).mouseleave(function () {
                                opt.css({ 'background-color': 'white', 'color': '#333' });
                                opt.find('.normal').show();
                                opt.find('.hover').hide();
                            }).click(function () {
                                var val = opt.attr('val');
                                opt.find('.normal').show();
                                opt.find('.hover').hide();
                                head.attr('val', opt.attr('val'));
                                head.html(opt.html());
                            });
                        });

                        head.attr('val', (list.find('.option').first().attr('val')));
                        head.html(list.find('.option').first().html());

                        head.find('img').css({ 'height': '14px', 'margin': '2px 0 0 3px' });
                        list.find('img').css({ 'height': '14px', 'margin': '2px 0 0 3px' });

                        var newSel = $('<div></div>');

                        newSel.attr('id', select.attr('id'));
                        newSel.attr('class', select.attr('class'));

                        select.after(newSel);
                        newSel.append(head).append(list);
                        select.remove();

                        list.css({ 'position': 'absolute', 'background-color': 'white', 'z-index': '500' }).hide();

                        var isClicked = false;
                        var isShowed = false;
                        //to show
                        head.mouseenter(function () {
                            isClicked = true;
                        }).mouseleave(function () {
                            isClicked = false;
                        }).click(function () {
                            if (isShowed) {
                                list.hide();
                                isShowed = false;
                                return false;
                            }
                        });
                        //to hide
                        $(document).click(function () {
                            if (isClicked) {
                                list.show();
                                isShowed = true;
                            } else {
                                list.hide();
                                isShowed = false;
                            }
                        });
                    });
                } break;
            }  
        };
