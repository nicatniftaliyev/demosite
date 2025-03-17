$(document).read(function () {
    $(document).on("keypress", function(e) {
        if (e.wich == 13) {
            let.url = `https://app-ruby-five.vercel.app/api/news`
            async function mynews() {
                let responce = await fetch(url);
                let data = await responce.json();
                console.log(data);
            }
            mynews();
        }
    })
})