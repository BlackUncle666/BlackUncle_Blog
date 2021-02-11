class MyCircularQueue {
    /**初始化队列容量 */
    constructor(capacity) {
        /**队列容量 */
        this.cap = capacity;
        /**队列头部 */
        this.head = -1;
        /**队列尾部 */
        this.tail = -1;
        /**数据源 */
        this.arr = [];
    }
    /**向循环队列插入一个元素 */
    enQueue(value) {
        if (this.isFull()) {
            return false;
        }
        if (this.isEmpty()) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.cap;
        this.arr[this.tail] = value;
        return true;
    }
    /**从循环队列中删除一个元素 */
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        if (this.head == this.tail) {
            this.head = this.tail = -1;
        } else {
            this.head = (this.head + 1) % this.cap;
        }
        return true;
    }
    /**从队首获取元素 */
    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.head];
    }
    /**从队尾获取元素 */
    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.tail];
    }
    /**队列是否为空 */
    isEmpty() {
        return this.head == -1;
    }
    /**队列是否已满 */
    isFull() {
        return this.head == (this.tail + 1) % this.cap;
    }
}