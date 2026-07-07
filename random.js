let data=""
        let e = [];
        const fileInput = document.getElementById("file");
        fileInput.addEventListener("change", () => {
            const file = fileInput.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(event) {
                const data_sub = event.target.result;
                data = data_sub
            };
            reader.readAsText(file, "UTF-8");
        });

        function sei(){
            
            for (let i=1;i<=10;i++){
                document.getElementById("mon_"+i).textContent=i
            }
            data_1=data.split(/\r?\n/)
            let f=data_1.length
            for (let i=0;i<f;i++){
                data_1[i]=data_1[i].split(",")
            }

            let j = 0;
            while (j < 10) {
                let n = Math.floor(Math.random() * f);

                if (!e.includes(n)) {
                    e.push(n);
                    document.getElementById("syu_" + (j + 1)).textContent = data_1[n][0];
                    document.getElementById("kot_" + (j + 1)).textContent = ''
                    j++;
                }
            }
        }
        function ca(){
            for (let i=0;i<10;i++){
                document.getElementById("kot_" + (i + 1)).textContent = data_1[e[i]][1]
            }  
            e = [];          
        }