
        const map = L.map('map').setView([56.1439, 47.2489], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const attractions = [
            {
                id: 1,
                name: "Чебоксарский залив",
                coords: [56.1460, 47.2370],
                description: "Живописный залив на Волге в центре Чебоксар с красивой набережной, фонтанами и памятниками.",
                image: "https://via.placeholder.com/300x150?text=Чебоксарский+залив"
            },
            {
                id: 2,
                name: "Монумент Матери-Покровительницы",
                coords: [56.1439, 47.2489],
                description: "Символ Чебоксар и всей Чувашии, 46-метровый монумент, расположенный на историческом холме.",
                image: "https://via.placeholder.com/300x150?text=Монумент+Матери"
            },
            {
                id: 3,
                name: "Введенский собор",
                coords: [56.1468, 47.2462],
                description: "Старейшее здание Чебоксар, построенное в 1657 году по указу Ивана Грозного.",
                image: "https://via.placeholder.com/300x150?text=Введенский+собор"
            },
            {
                id: 4,
                name: "Чувашский национальный музей",
                coords: [56.1442, 47.2486],
                description: "Крупнейший музей Чувашии с богатой коллекцией, рассказывающей об истории и культуре чувашского народа.",
                image: "https://via.placeholder.com/300x150?text=Национальный+музей"
            },
            {
                id: 5,
                name: "Музей В.И. Чапаева",
                coords: [56.1460, 47.2660],
                description: "Мемориальный комплекс, посвященный легендарному комдиву Василию Чапаеву, уроженцу Чувашии.",
                image: "https://via.placeholder.com/300x150?text=Музей+Чапаева"
            },
            {
                id: 6,
                name: "Этнокультурный парк «Сувар»",
                coords: [55.9686, 47.3086],
                description: "Парк, воссоздающий атмосферу древнего болгарского города Сувар с ремесленными мастерскими и экспозициями.",
                image: "https://via.placeholder.com/300x150?text=Парк+Сувар"
            },
            {
                id: 7,
                name: "Присурский заповедник",
                coords: [55.1333, 46.6667],
                description: "Заповедник в долине реки Сура с уникальной флорой и фауной, прекрасное место для экотуризма.",
                image: "https://via.placeholder.com/300x150?text=Присурский+заповедник"
            },
            {
                id: 8,
                name: "Озеро Астраханка",
                coords: [55.7833, 47.1833],
                description: "Живописное озеро карстового происхождения, популярное место отдыха и рыбалки.",
                image: "https://via.placeholder.com/300x150?text=Озеро+Астраханка"
            },
            {
                id: 9,
                name: "Чебоксарский ботанический сад",
                coords: [56.0833, 47.3000],
                description: "Обширная территория с уникальными растениями, дендрарием и оранжереями.",
                image: "https://via.placeholder.com/300x150?text=Ботанический+сад"
            },
            {
                id: 10,
                name: "Храм Успения Пресвятой Богородицы",
                coords: [56.1081, 47.4939],
                description: "Красивый православный храм в городе Новочебоксарск с уникальной архитектурой.",
                image: "https://via.placeholder.com/300x150?text=Храм+Успения"
            }
        ];

        attractions.forEach(attraction => {
            const marker = L.marker(attraction.coords)
                .addTo(map)
                .bindPopup(`<b>${attraction.name}</b><br>${attraction.description.substring(0, 100)}...`);
            
            marker.on('click', function() {
                showAttractionInfo(attraction);
            });
        });

        function showAttractionInfo(attraction) {
            const infoPanel = document.getElementById('info-panel');
            infoPanel.innerHTML = `
                <div class="marker-title">${attraction.name}</div>
                <img src="${attraction.image}" alt="${attraction.name}" class="marker-image">
                <div class="marker-description">${attraction.description}</div>
                <button class="close-btn" onclick="closeInfoPanel()">Закрыть</button>
            `;
            infoPanel.style.display = 'block';
        }

        function closeInfoPanel() {
            document.getElementById('info-panel').style.display = 'none';
        }

        map.on('click', function() {
            closeInfoPanel();
        });