const stageTable = [
  {stage: 1,  b1: 0, b2: 0, b3: 0, b4: 1},
  {stage: 2,  b1: 1, b2: 0, b3: 1, b4: 1},
  {stage: 3,  b1: 2, b2: 0, b3: 2, b4: 1},
  {stage: 4,  b1: 3, b2: 0, b3: 3, b4: 1},
  {stage: 5,  b1: 0, b2: 1, b3: 0, b4: 1},
  {stage: 6,  b1: 1, b2: 1, b3: 1, b4: 1},
  {stage: 7,  b1: 2, b2: 1, b3: 2, b4: 1},
  {stage: 8,  b1: 3, b2: 1, b3: 3, b4: 1},
  {stage: 9,  b1: 0, b2: 2, b3: 0, b4: 1},
  {stage: 10, b1: 1, b2: 2, b3: 1, b4: 1},
  {stage: 11, b1: 2, b2: 2, b3: 2, b4: 1},
  {stage: 12, b1: 3, b2: 2, b3: 3, b4: 1},
  {stage: 13, b1: 0, b2: 3, b3: 0, b4: 1},
  {stage: 14, b1: 1, b2: 3, b3: 1, b4: 1},
  {stage: 15, b1: 2, b2: 3, b3: 2, b4: 1},
  {stage: 16, b1: 3, b2: 3, b3: 3, b4: 1},
  {stage: 17, b1: 0, b2: 0, b3: 1, b4: 0},
  {stage: 18, b1: 1, b2: 0, b3: 0, b4: 0},
  {stage: 19, b1: 2, b2: 0, b3: 3, b4: 0},
  {stage: 20, b1: 3, b2: 0, b3: 2, b4: 0},
  {stage: 21, b1: 0, b2: 1, b3: 1, b4: 0},
  {stage: 22, b1: 1, b2: 1, b3: 0, b4: 0},
]

const livesTable = [
  {lives: 0,  l1: 0, l2: 3, l3: 1, l4: 0, l5: 2},
  {lives: 1,  l1: 0, l2: 3, l3: 1, l4: 2, l5: 0},
  {lives: 2,  l1: 1, l2: 2, l3: 1, l4: 0, l5: 2},
  {lives: 3,  l1: 1, l2: 2, l3: 1, l4: 2, l5: 0},
  {lives: 4,  l1: 2, l2: 1, l3: 1, l4: 0, l5: 2},
  {lives: 5,  l1: 2, l2: 1, l3: 1, l4: 2, l5: 0},
  {lives: 6,  l1: 3, l2: 0, l3: 1, l4: 0, l5: 2},
  {lives: 7,  l1: 3, l2: 0, l3: 1, l4: 2, l5: 0},
  {lives: 8,  l1: 0, l2: 3, l3: 0, l4: 0, l5: 3},
  {lives: 9,  l1: 0, l2: 3, l3: 0, l4: 2, l5: 1},
  {lives: 10, l1: 1, l2: 2, l3: 0, l4: 0, l5: 3},
  {lives: 11, l1: 1, l2: 2, l3: 0, l4: 2, l5: 1},
  {lives: 12, l1: 2, l2: 1, l3: 0, l4: 0, l5: 3},
  {lives: 13, l1: 2, l2: 1, l3: 0, l4: 2, l5: 1},
  {lives: 14, l1: 3, l2: 0, l3: 0, l4: 0, l5: 3},
  {lives: 15, l1: 3, l2: 0, l3: 0, l4: 2, l5: 1},
  {lives: 16, l1: 0, l2: 3, l3: 3, l4: 0, l5: 0},
  {lives: 17, l1: 0, l2: 3, l3: 3, l4: 2, l5: 2},
  {lives: 18, l1: 1, l2: 2, l3: 3, l4: 0, l5: 0},
  {lives: 19, l1: 1, l2: 2, l3: 3, l4: 2, l5: 2},
  {lives: 20, l1: 2, l2: 1, l3: 3, l4: 0, l5: 0},
  {lives: 21, l1: 2, l2: 1, l3: 3, l4: 2, l5: 2},
  {lives: 22, l1: 3, l2: 0, l3: 3, l4: 0, l5: 0},
  {lives: 23, l1: 3, l2: 0, l3: 3, l4: 2, l5: 2},
  {lives: 24, l1: 0, l2: 3, l3: 2, l4: 0, l5: 1},
  {lives: 25, l1: 0, l2: 3, l3: 2, l4: 2, l5: 3},
  {lives: 26, l1: 1, l2: 2, l3: 2, l4: 0, l5: 1},
  {lives: 27, l1: 1, l2: 2, l3: 2, l4: 2, l5: 3},
  {lives: 28, l1: 2, l2: 1, l3: 2, l4: 0, l5: 1},
  {lives: 29, l1: 2, l2: 1, l3: 2, l4: 2, l5: 3},
  {lives: 30, l1: 3, l2: 0, l3: 2, l4: 0, l5: 1},
  {lives: 31, l1: 3, l2: 0, l3: 2, l4: 2, l5: 3},
]

const continuesTable = [
  {continues: 0, reverse: 3},
  {continues: 1, reverse: 2},
  {continues: 2, reverse: 1},
  {continues: 3, reverse: 0},
]

new Vue({
  el: '#app',
  data: {
    stage: 1,
    lives: 31,
    continues: 3,
    stageTable,
    livesTable,
    continuesTable,
  },
  methods: {
    getIcon(index) {
      switch (index) {
        case 0:
          return '△'
        case 1:
          return '○'
        case 2:
          return '□'
        case 3:
          return '✕'
      }
    },
    cSum(a, b) {
      return a + b <= 3
        ? a + b
        : Math.abs(a - b)
    }
  },
  computed: {
    reverse() {return this.continuesTable.find(el => el.continues === this.continues).reverse},
    b1() {return this.stageTable.find(el => el.stage === this.stage).b1},
    b2() {return this.stageTable.find(el => el.stage === this.stage).b2},
    b3() {return this.stageTable.find(el => el.stage === this.stage).b3},
    b4() {return this.stageTable.find(el => el.stage === this.stage).b4},
    l1() {return this.livesTable.find(el => el.lives === this.lives).l1},
    l2() {return this.livesTable.find(el => el.lives === this.lives).l2},
    l3() {return this.livesTable.find(el => el.lives === this.lives).l3},
    l4() {return this.livesTable.find(el => el.lives === this.lives).l4},
    l5() {return this.livesTable.find(el => el.lives === this.lives).l5},
    passwd1() {
      return this.cSum(this.b3, this.l5)
    },
    passwd2() {
      return this.cSum(this.cSum(this.reverse, this.b2), this.l1)
    },
    passwd3() {
      return this.b1
    },
    passwd4() {
      return this.b2
    },
    passwd5() {
      return this.b4 + this.l4
    },
    passwd6() {
      return this.l2
    },
    passwd7() {
      return this.l3
    },
    passwd8() {
      return this.continues
    }
  }
})
