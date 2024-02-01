// reviews object 
const reviews = {

    "html_attributions": [],
    "result": {
        "name": "Rejuvenate Med Spa",
        "rating": 5,
        "reviews": [

            {
                "author_name": "Kimberly Sietmann",
                "author_url": "https://www.google.com/maps/contrib/111414392162172347169/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWnAgkQvu-30HFbsl3zCT90MTDGJM6MzTA1ksVibRrfVck=s128-c0x00000000-cc-rp-mo",
                "rating": 5,
                "relative_time_description": "2 months ago",
                "text": "Quick to get an appointment and great results. Karen was very knowledgeable and on point with her services offered. The atmosphere was pleasant and relaxing. Karen was nice and a pleasure to work with. I will be returning soon for another procedure. Thank you, Karen!",
                "time": 1701090809,
                "translated": false
            },
            {
                "author_name": "Ivan Cruz",
                "author_url": "https://www.google.com/maps/contrib/113451251442029190325/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWJ_qymfsqYWrJiEl9G6wVxdB8dYIXfDhpViF6gVk-3C8c=s128-c0x00000000-cc-rp-mo",
                "rating": 5,
                "relative_time_description": "2 months ago",
                "text": "Fantastic service and fair pricing. The staff is very courteous and friendly. Leslie and Karen are amazing. They tend to all your needs like you were family.",
                "time": 1701115635,
                "translated": false
            },
            {
                "author_name": "Mitchell Duncan",
                "author_url": "https://www.google.com/maps/contrib/105134410623045939634/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocK_TgZ_eLZm7y_Pi5dLCYmw4VGctuy05WoDu4CJblrD=s128-c0x00000000-cc-rp-mo",
                "rating": 5,
                "relative_time_description": "a week ago",
                "text": "Karen does an excellent job in consulting your specific needs. It was a comfortable experience and I would highly recommend them!!",
                "time": 1705880157,
                "translated": false
            },
            {
                "author_name": "Frances Swiber",
                "author_url": "https://www.google.com/maps/contrib/114066995582406421260/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXtAPtQLx64TveB9NzyeU63E3GmWP0TS4xNrjo0AemiyQ=s128-c0x00000000-cc-rp-mo",
                "rating": 5,
                "relative_time_description": "4 months ago",
                "text": "Karen is amazing!  Very professional with great results!!! Well priced and definitely worth your time.  Been to many other med spas in the area, and Rejuvenate is definitely the best!",
                "time": 1694445048,
                "translated": false
            }

        ]
    },
    "status": "OK"
}

$(document).ready(function () {

    // append rating to html document
    const ratingCol = $(`
    <div class="col-sm">
        <div class="p-2 cont bg-light">
            <img id="gLogo" src="assets/images/Google-Reviews-${reviews.result.rating}.png" />
            <p class="rating">${reviews.result.rating}/5<p>
        </div>
    </div>
    `)
    $(".widget").append(ratingCol);

    // append reviews to html document
    $.each(reviews.result.reviews, function (key, value) {

        const $reviewCol = $(`            
            <div class="col-lg m-1 border container-fluid cont2 bg-light">
                <div class="row">
                    <div class="col-3">
                        <img class="userPicture" src='${value.profile_photo_url}' />
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <h3 class="user">${value.author_name}</h3>
                        </div>
                        <div class="row">
                            <h5 class="date">${value.relative_time_description}</h5>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <img class="starReview" src='./assets/images/${value.rating}-star.png' />
                </div>
                <div class="row p-2">
                    <p class="description pt-1 p-2">${value.text}</p>
                </div>
            </div>
        `)
        $('.widget').append($reviewCol)
    });
});