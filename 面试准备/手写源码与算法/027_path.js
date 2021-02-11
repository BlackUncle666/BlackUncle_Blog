function go(x, y) {
    if (x == 0 && y == 0) {
        return 0;
    } else if (x == 0 || y == 0) {
        return 1;
    }
    return go(x, y - 1) + go(x - 1, y);
}
go(3, 4);