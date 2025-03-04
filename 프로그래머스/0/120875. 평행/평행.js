function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    
    // 경우 1: 점1-점2와 점3-점4를 이은 직선
    if ((y2-y1)/(x2-x1) === (y4-y3)/(x4-x3)) return 1;
    
    // 경우 2: 점1-점3와 점2-점4를 이은 직선
    if ((y3-y1)/(x3-x1) === (y4-y2)/(x4-x2)) return 1;
    
    // 경우 3: 점1-점4와 점2-점3를 이은 직선
    if ((y4-y1)/(x4-x1) === (y3-y2)/(x3-x2)) return 1;
    
    return 0;
}