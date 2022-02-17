async function Text() {
    try {
      let input = document.getElementById("input-text").value;
      let s = document.getElementById("source-sel").value;
      let t = document.getElementById("target-sel").value;

      let res = await fetch("https://libretranslate.de/translate", {
       
        method: "POST",

        body: JSON.stringify({
          q: input,
          source: s,
          target: t,
          format: "text",
        }),

        headers: {
          "Content-Type": "application/json",
        },
      });

      let data = await res.json();
      
     
      console.log("data:", data);

      document.getElementById("translated-text").innerText =
        data.translatedText;
    } catch (error) {
      console.log("error:", error);
    }
  }