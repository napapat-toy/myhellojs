let rabbit = {
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2,
    talk() {
        console.log(this.name + ', fuww fuww');
    },
    weightDetail() {
        if (this.weight < 1){
            return 'น้อยเกิ๊นนนนนน'
        }
        else if (this.weight >2){
            return 'มากเกิ๊นนนนนน'
        }
        return 'ปกติจ้าาาาา'
    }
}


console.log(rabbit.weightDetail());