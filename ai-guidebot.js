$(document).ready(function() {
    function updateBackground() {
        let hour = new Date().getHours();
        let backgroundImage = "";

        if (hour >= 6 && hour < 11) {
            backgroundImage = "bg-pic.jpg";
        } else if (hour >= 11 && hour < 17) {
            backgroundImage = "chat-bg.jpg";
        } else if (hour >= 17 && hour < 20) {
            backgroundImage = "mt-fuji.jpg";
        } else {
            backgroundImage = "scene-2.jpg";
        }

        $("body").css("background", `url(${backgroundImage}) center/cover no-repeat`);
    }

    updateBackground();
    
    // Handle Enter key press
    $("#user-input").keypress(function(e) {
        if (e.which == 13) {
            $("#send-btn").click();
        }
    });
    
    $("#send-btn").click(function() {
        let userText = $("#user-input").val();
        if (userText.trim() !== "") {
            $("#chat-box").append(`<div class='message user-message'>${userText}</div>`);
            $("#user-input").val("");
            
            function formatBoldText(text) {
                return text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
            }
            
            function wrapText(text, maxLength) {
                return text.replace(new RegExp(`(\\S{${maxLength},})`, 'g'), 
                function(match) {
                    return match.replace(/(.{1,30})/g, "$1\u200B");
                });
            }

            // Make an API request to Gemini AI
            $.ajax({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB-kn6BUb8z3AtVMqfvgsVEBGd16HF9gZ0",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    contents: [{ 
                        parts: [{ 
                            text: `You are a travel guide AI. Only provide travel-related responses. User query: ${userText}` 
                        }] 
                    }]
                }),
                success: function(response) {
                    let botReply = response.candidates[0].content.parts[0].text;
                    botReply = formatBoldText(botReply);
                    botReply = wrapText(botReply, 30); 
                    $("#chat-box").append(`<div class='message bot-message'>${botReply}</div>`);
                    $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
                },
                error: function() {
                    $("#chat-box").append("<div class='message bot-message'>Error fetching response. Please try again.</div>");
                    $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
                }
            });
        }
    });
});