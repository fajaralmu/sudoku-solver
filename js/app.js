/**
 * 
 * @param {String} value 
 */
function processInput(value){

    return new Promise(function(res,rej){


        const result = convert(value, value.length);
        res(result);

    });
}

/**
 * 
 * @param {String} sentence 
 * @param {Number} textLength 
 */
function convert(sentence, textLength) {
    let result = "";
    let character = "";
    for (let i = 0; i < textLength; i++) {

        let c = sentence[i];
        //karakter spesial
        if (c == '(') {
            if (sentence[i + 1] == 's') {
                if (sentence[i + 2] == 'y') {
                    if (sentence[i + 3] == ')') {
                        character = "ش";
                        i += 3;
                    }
                } else if (sentence[i + 2] == 'h') {
                    if (sentence[i + 3] == ')') {
                        character = "ص";
                        i += 3;
                    }
                }
            } else if (sentence[i + 1] == 'c') {
                if (sentence[i + 2] == 'h') {
                    if (sentence[i + 3] == ')') {
                        character = "ح";
                        i += 3;
                    }
                }
            } else if (sentence[i + 1] == 'd') {
                if (sentence[i + 2] == 'l') {
                    if (sentence[i + 3] == ')') {
                        character = "ض";
                        i += 3;
                    }
                } else if (sentence[i + 2] == 'h') {
                    if (sentence[i + 3] == ')') {
                        character = "ذ";
                        i += 3;
                    }
                } else if (sentence[i + 2] == 'z') {
                    if (sentence[i + 3] == ')') {
                        character = "ظ";
                        i += 3;
                    }
                }
            } else if (sentence[i + 1] == 'g') {
                if (sentence[i + 2] == 'h') {
                    if (sentence[i + 3] == ')') {
                        character = "غ";
                        i += 3;
                    }
                }
            } else if (sentence[i + 1] == 'k') {
                if (sentence[i + 2] == 'h') {
                    if (sentence[i + 3] == ')') {
                        character = "خ";
                        i += 3;
                    }
                }
            } else if (sentence[i + 1] == '\'') {
                if (sentence[i + 2] == 'a') {
                    if (sentence[i + 3] == ')') {
                        character = "ع";
                        i += 3;
                    }
                }
            } else if (sentence[i + 1] == 't') {
                if (sentence[i + 2] == ')') {
                    character = "ة";
                    i += 2;
                } else if (sentence[i + 2] == 'h') {
                    if (sentence[i + 3] == ')') {
                        character = "ط";
                        i += 3;
                    }
                } else if (sentence[i + 2] == 's') {
                    if (sentence[i + 3] == ')') {
                        character = "ث";
                        i += 3;
                    }
                }
            } else if (sentence[i + 1] == '1') {
                if (sentence[i + 2] == 'a') {
                    if (sentence[i + 3] == ')') {
                        character = "أ";
                        i += 3;
                    }
                } else if (sentence[i + 2] == 'i') {
                    if (sentence[i + 3] == ')') {
                        character = "إ";
                        i += 3;
                    }
                }
            }else if (sentence[i + 1] == 'a') {
                if (sentence[i + 2] == ')') {
                    character = "ء";
                    i += 2;
                } else if (sentence[i + 2] == 'y') {
                    if (sentence[i + 3] == ')') {
                        character = "ئ";
                        i += 3;
                    }
                } else if (sentence[i + 2] == 'w') {
                    if (sentence[i + 3] == ')') {
                        character = "ؤ";
                        i += 3;
                    }
                } else if (sentence[i + 2] == 'e') {
                    if (sentence[i + 3] == ')') {
                        character = "ى";
                        i += 3;
                    }
                } else if (sentence[i + 2] == 'n') {
                    if (sentence[i + 3] == ')') {
                        character = "ً";
                        i += 3;
                    }
                }
            } else if (sentence[i + 1] == 'i') {
                if (sentence[i + 2] == 'n') {
                    if (sentence[i + 3] == ')') {
                        character = "ٍ";
                        i += 3;
                    }
                }

            } else if (sentence[i + 1] == 'u') {
                if (sentence[i + 2] == 'n') {
                    if (sentence[i + 3] == ')') {
                        character = "ٌ";
                        i += 3;
                    }
                }

            } else if (sentence[i + 1] == 'y') {
                if (sentence[i + 2] == ')') {
                    character = "ى";
                    i += 2;
                }
            }
            //Harokat

        } else if (sentence[i] == '/') {
            if (sentence[i + 1] == 'a') {
                character = "َ";
                i += 1;

            } else if (sentence[i + 1] == 'i') {
                character = "ِ";
                i += 1;
            } else if (sentence[i + 1] == 'u') {
                character = "ُ";
                i += 1;
            } else if (sentence[i + 1] == '0') {
                character = "ْ";
                i += 1;
            } else if (sentence[i + 1] == '3') {
                character = "ّ";
                i += 1;
            }
        } else {

            switch (c) {
                case 'a':
                    character = "ا";
                    break;
                case 'b':
                    character = "ب";
                    break;
                case 'c':
                    character = "تش";
                    break;
                case 'd':
                    character = "د";
                    break;
                case 'e':
                    character = "ي";
                    break;
                case 'f':
                    character = "ف";
                    break;
                case 'g':
                    character = "ج";
                    break;
                case 'h':
                    character = "ه";
                    break;
                case 'i':
                    character = "ي";
                    break;
                case 'j':
                    character = "ج";
                    break;
                case 'k':
                    character = "ك";
                    break;
                case 'l':
                    character = "ل";
                    break;
                case 'm':
                    character = "م";
                    break;
                case 'n':
                    character = "ن";
                    break;
                case 'o':
                    character = "و";
                    break;
                case 'p':
                    character = "ف";
                    break;
                case 'q':
                    character = "ق";
                    break;
                case 'r':
                    character = "ر";
                    break;
                case 's':
                    character = "س";
                    break;
                case 't':
                    character = "ت";
                    break;
                case 'u':
                    character = "و";
                    break;
                case 'v':
                    character = "ف";
                    break;
                case 'w':
                    character = "و";
                    break;
                case 'x':
                    character = "كس";
                    break;
                case 'y':
                    character = "ي";
                    break;
                case 'z':
                    character = "ز";
                    break;

                //special character
                case '3':
                    character = "ع";
                    break;
                case '1':
                    character = "ا";
                    break;
                case '6':
                    character = "ط";
                    break;
                case '?':
                    character = "؟";
                    break;
                case '!':
                    character = "!";
                    break;
                case ',':
                    character = ",";
                    break;
                //spasi
                case ' ':
                    character = " ";
                    break;
                //panjang
                case '-':
                    character = "ـ";
                    break;

                default:
                    character = (c);
            }
        }
        result += character;

    }

    return result;
}