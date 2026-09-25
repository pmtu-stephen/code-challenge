var sum_to_n_b = function(n) {
    if (n === 0) {
        return 0;
    }

    return n + sum_to_n_b(n > 0 ? n - 1 : n + 1);
};