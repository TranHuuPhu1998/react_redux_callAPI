var initialState = [
    {
        id:1,
        name: 'Iphone 7 Plus',
        image:'data:image/jpeg;base64,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',
        description:'Sản phẩm của Apple',
        price:1000,
        inventory:10,
        rating:4
    },
    {
        id:2,
        name: 'SamSung 11',
        image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PEA8NDQ8NDQ0NDw8PDQ0PDw8NDQ0NFREWFhURExUYHSggGBolGxUVIT0hJSkrMC8uFx8zODMsNygtMisBCgoKDg0OFg8PGy0dHx0zKy0rLS0tLS0tLS0rLSstLSsrLS0tLS0tLS0tLS0tMC0tLSstLS0rKy0rLTcrKysrLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQHBgj/xABREAACAQIBBQcMDggFBQAAAAAAAQIDBBEFBhIhMQciQVFxdLMXIzIzNWGBkZOhstETFBYkQlNUcoSUscHC0kNSZHN1krTTJTSCw/EVRFVi8P/EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAlEQEBAAEDBAMBAAMBAAAAAAAAAQIDETEEEjJREyEiFAVScUH/2gAMAwEAAhEDEQA/AO4gAAAAAI3K2XrG0w9t3NC30tcVUmoya41HaQ0t0jIS/wC/ov5sakvsiTtR6sHkeqXkL5bDydb8o6peQvlsfJVvyjam71wPIdUzIXy2Hk635SvVMyF8th5Ot+UbVG71wPI9UvIXy2Hk635Sq3SchfLaa5YVV+EbU3etBAWOeuSK8lTo31rKcnhGLmoOT4lpYE+QkAAAAAAYbq6pUYSqVpwpU465TnJQhFd9shnnnkr4N1Tn+7jUq+imTJabp8EB7scnfG1Pq9x+Qe7HJ3xtT6vcfkJ7b6RvE+CA92OTvjKv1e4/IPdjk74yr9WuPyDtvo3ifBAe7HJ3xtT6vcfkHuyyd8bU+r3H5B230bxPFSAWeeS+G6hD95GpT9JImLO8o14KrQqQrU5bJ05KcX4URZYndnABAAACgAAqAABq5Vu1QoV7hrSVCjUq6PHoQcsPMbRE53dz77mdz0UgPm3PHJGUr29qqlRuL2rB++K0Kc5p1uFOWyKWOqPAsCKhmJljVjk67w4d5tPpiVGNNaMEktcmlwzk8ZSffbbZY2asdDeb7uF1dq+avcLljX/h93/67zZ5y15i5Yx1ZPusO/FH0pJmKUi06ae1fnvp86e4rKv/AIy585iqZlZX4Mn3MVxYYn0VORgnIn+We0fPfT58eZmVNHD2jc6WO3RWGHjMcszcq6veVx396j6AnM1qki38k9o/ovpwVZuZRotVKlnXUItaWNNzjo8OOHAfS+5le1J2io1ZyqexKnKhOTcp+1px3sW+HRlGpFN8EUec09a5T1eaVOMa9zGKSj7Xs2ktSWM7hv7Tjr6HxyWV10tW58vUAAzOwAAOWbo11KpWkp66dvWp0KMHrgpulGpOrhwy64o48Gi8NrMFrNqKSbSw4y3Pt9dq8+fQUjHby3qNeHjHHLluqo+N+Nlym+N+M11Iu0i6GbTfG/GNN8b8bMLkNIDNpvjfjZa6j4342YnIo5AVuKjcWm3hxYsZgXMqVxpQejCpXVC4gtUainHCnNr9dT0VjxSfewwVpamWZnvrj57adNApnxU48uxAAyOwAAAAAAAAQ2eVRRyffOTwTta8V86UHFLxtEyefz+7m3n7r8SAx3b33gRrykZrx77xGrKR6enPzGHLmkpGKUhORgnM6yKblSZrzmJzNapMtIraVJmvOYqTNacy8iKv09a5T2mavb7jm1l6VweCU9a5T3maT69cc2svSuDJ1s/MaOm5r1AAPNbAAAciz77bV58+gpGtby3qNjP3tlbnz6CkaVCWpGvDxjjeW4pFykYFIuTLoQWV89LO1qyo1PZZTjhpKEVLDHlaLMmZ8WdxVjRgq0ZTeC04KOvwNnhs5O6NxyUtmp9qgY8lf5604evRWPHr19/iOHyXd07Zs7E5FrkY/bVGm06+loNNb1YvS4NWKx1JlkKsZLSjjoyxccdb0cdWPgOvd+tlNvrddWlqZbmnVjCTlJ4L29ZrHW9br00vO0Y60tTMOQnvZfxDJ/8AV0RlxUTl3BAAxu4AAAAAAAAefz+7m3n7r8UT0BBZ803LJ16o7VQlJ8G9jhJ+ZMDSvXvvEak5GfKEt94EaE5nrac/MYMuarOZr1JipM1qkztI50qTNepMVJmtUmWkRSpM15zFSZrzmXkVXKetcp0PNDt1xzay9K4OaKWtcp0XM2uncXFLB6UbOwm3q0cJVLpJcu9Zi6+fmNPTc168AHltoAAOQZ/9src+fQUiOovUjdz6qqU60liv8QqR18cadOL86ZHUXqNeHjHG8tpSL1IwJlVIuh53LmatpcVVXnVqUasqdPSUZQwlhBJSwaxWrDxGPJOadpQrQrqtUrVKbxgpShgpceCWLwJyM99JYPHe7NeyCjrX+n7O/gnPBxxTxbWCwaZTsx33T3VXLFOcoR0E5OM8Wk8HhotfeZ7VONOEXqajFNd/Au0ijkW2+90blWWosyD2Mv4hk7+roltR6jJmzSlNSjHXJ39g9uGpXVJvzIjLgjt4AMbuAAAAAAAAEPnjNRyffNvBO1rxXzpQcUvG0TB5/P7ubefuvxICLylLfsjqkzbyrLfsjZyPa0p+Y87O/dUqTNepMrUmYdGUsWti4XqXjO22znax1JmvUmW3VxGG1p8hH/8AVKLejpaLezS1JvlLzGo5bU5mvOYqTME5lthcp61ynQ8yH79uv4dk3pr05rGW+XKdRzIpR9mr1PhO0sIN46tFVLlrVyyZg/yHhGnpua9iADyW0AAHF88dtf8Aidz+E0KT1Enn7TUZ1ktjv5y49cqVOT87ZE0nqRsx4jjeWwmV0jCmSGTrFVozk56DjOlFJ4YNTnotttrZiTbshqvB7dfKFgtiSJOeSqSjKSrxeGLisI4yWClH4XCseRox1Mmwi2nWWjGei3gscNCMsdvfervEd0Ts0HIo2bF1axhHFTUnp6OCww2N8fe86NNyJlQVHqNzM2rGEnKTUYq9s02+N16aXnaI+o9TM2br3sv4hk7+sokZcUnLugAMbuAAAAAAAAEJntS08nXqxwwt6k+PsFp4eHRwJsiM7u599zO56KQHlssS64yMnM3Msy65Ii5zPe0p+I8zPypKa2y2Lb3zBWuXPvR4IrVqI/KFZupGnwNxx8LM85Hft2+3Kze/aypo8S8SInKGTKVRPRSpz4JLUvCiRnI15yLRaXZBZMvpwm7attTwhjr0X+rjxPgJSciDzl3s6dWOqTT19+LTX2ktKWOvj1kbr5Tiroy3y5TrWY3Z1ubWXpXBx+Mt8uU6/mJ2dbm1l6dwef8A5Dxjv03NevAB5LYAADju6F2ytz59BSISk9RNbofbK3Pn0FIgqT1GzDxjjeWfEYlmI0iyF+IxLNIaRAvxGJZpDEkKj1G7mlQ9kxhjo431i8cMexuaUvuI6o9RLZi9n9NtOngVy4pOXagUKmN3AAAAAAAACIzu7n3/ADO56KRLkRnd3Pv+Z3PRSA8TlyXXZETOZv5el12XKRMpH0WlPxHl5+VaN+t/Ga73jTM0p46+MVkpLB+DvMh7q9nQe+jjF8GzHkZo23is+0lORrzkR7y9b8OnHvOOP2EbfZfxTjRi4v8AXlhiuRHPLKY8rTC1jy5U9lrQox16O9eHBKTWPiSXnJeciJyJaNdfnrcsdDHbg9svD/8AbSRnIpj7Xy9T/wAVjLfLlOxZhvfVubWXp3BxeMt8uU7PmD2VXmtl6dyYOv8AGO/T817IAHltQUKlAOObonbK3Pn0NIgKb1E/uidsrc+fQ0jz9PYbMPGON5ZMRiWgshdiMS3EYgXYjEtxACb1EvmJ2f0206eBDT2ExmJ2f0206eBXLik5dsABjdwAAAAAAAAiM7u59/zO56KRLkRnd3Pv+Z3PRSA53nBPr0uX7yJlM384p9fny/eREpn0ml4R5eflV0pmCrg000mntT1p+ASkYpSOqrTr2Nsk5Sp00ksW8MEkiAo0lc1XoxVOhD4MUo73gWrhZtZcvJTkranrbaU8OGXBHwbf+DdtLeNKCgtb2yf60uFnG/q/8dpbjN2WTwWC1JbFxIwTkXTkYJyJqkhCW+XKds3P9tXm1l6dwcOhLfLlO4bnu2rzaz9O4PO67xjVoc17MAHmNIAAON7ovbK3PX0FI87T2Hod0Xtlbnr6Ckedp7EbMPGON5X4jEFGWQqC0YgXYjEpiVQFJ7CZzD7P6bZ9NTIWewmsw+z+m2nTQK5cUnLtgAMbuAACgKgAAABEZ3dz7/mdz0UiXIjO7uff8zueikBy3OWfX58r+0h3Mkc55e+J8r+0h3M+l0vCPMz8qvlIxVHqaTwevB7cHxlJTMUpl6q07TJ8KUnNOU5NbZYasdr8JnnITkYZyKfU4X+7ypORgnIunIwTkUtWisHvlync9zz9Lzaz9O4OEU3vlyndtzr9Lzaz9O4PP63xjRo8vagA81oAABxrdF7ZW56+gpHnaWw9Hui9src9fQUjzlLYa8PGON5XFAwXQoAAKlUUCAT2E1mF2f0206aBCz2E1mF2f0y06aBXLik5dsABjdwAAAAAAAAiM7u59/zO56KRLkRnd3Pv+Z3PRSA4/nTL3xU5X9pDOZJZ1y981PnP7SFcz6PTv4jzsp91llIxymY3Msci1qsi6UzFORbKZilIpuvsSkYpSEpGKbKWrSLqct8uU71ucfpebWfp3BwCEt8uU79ubbKnNrP07gw9b4x30uXtwCh5zuqAAON7ovbK3PX0FI85T2Ho90Xtlbnr6CkecpbDXh4xxvK5lpcy0ugBQAVRci1FUAnsJrMLs/ptp01MhZ7CazC7P6badNArlxUzl2wAGN2AAAAAAAACIzv7n3/M7nopEuRucdvOrZ3dGmsalW1rwguOcqckl48AOGZ2y981PnP7SEcjHnRnBBXEpSjJxqb+nOOGuLeKTT2NbCI90ND9Wr/LH1ns6fU6fbN6x5aeW/CZcyxzIh5wUOKp/LH1lHl6hxVP5V6y39On7R8eXpKSkY5SIx5co8VT+VesteWqPFU/lXrI/o0/9k/Hl6SEpGKUjRllilxT8S9ZjllWnxT8S9ZX+jT9rTC+m/Tlvlyn0Fua7KnNrP07g+baeUoOUVGMm21gtSPpDcpxnQq1WtS9ht8eCUqalOWHI62jyxfEZOq1ccpJLu66eNnL3QAMTqBgAca3Re2VuevoKR52lsPS7pNJqtXi1rVzTqrv0p0KaUuTShUX+lnmaWw2YeMcbyuZRlWWssgAAFUVRai5AUqbCazC7Z9MtOmgQtTYT+57Scq1OCWupd05LvQpL2SUuTeJcslxlcuKmcu0AoVMbsAAAAAAAAAADnOd25Fk+/qSr06lWzq1JOc1TSnRlNvFyUH2Lb1vB6zzEtwKHwb5v51Fp+aR20E7jh/UD/bY+Tl6x1A/22Pk5+s7gBuOH9QT9sj5OfrHUD/bYeTn6zuAG44f1A/22Pk5+sujuBrhvV4KUn+I7cBuOQZM3CLOnUU615cVIp46FOEaTfe0sW14DquTcn0balC3t4RpUaUdGEFsS+9t68XtbNoEAAAAAAg8582LbKEUqrnTqQTVOtTaU4p7YtNNSj3mvEeR6mFWOOheU5Lg07aWOHfcah0oFpnZwiyVzN7m118ptPI1/wC4U6mt18otPI1/7h00FvlyR2xzSG5pcfCurVcWFvXl/uoT3NLj4N1avlt68f8AdZ0sD5cjtjmXU1uvlFp5Gv8A3C7qa3OH+atseL2vWw8fsv3HSwPlyO2Oa9TGrLs7ykuPQt5PV3tKoerzXzUtsnpum51a01hKtUw0tHHHRgksIxx4tuCxxwRPgrc7eUySAAKpAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCoAowAARUAAwAAAAH/9k=',
        description:'Sản phẩm của SamSung',
        price:2000,
        inventory:15,
        rating:3
    },
    {
        id:3,
        name: 'Oppo F1s',
        image:'data:image/jpeg;base64,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',
        description:'Sản phẩm của OPPP',
        price:450,
        inventory:5,
        rating:5
    },
]

const products = (state = initialState,action)=>{
    switch(action.type){
        default:return [...state];
    }
}

export default products;