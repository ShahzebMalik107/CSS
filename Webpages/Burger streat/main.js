function ListActive(tst)
{
   
    console.log(tst);
    if(tst=='t1')
    {
        t1.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');

        //Products
        p1.classList.add('product--active');
        p2.classList.remove('product--active');
        p3.classList.remove('product--active');
        p4.classList.remove('product--active');
        p5.classList.remove('product--active');
        p6.classList.remove('product--active');
    }
    if(tst=='t2')
    {
        t2.classList.add('tabs--active')
        t1.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');
        
        
        //Products
        p2.classList.add('product--active');
        p1.classList.remove('product--active');
        p3.classList.remove('product--active');
        p4.classList.remove('product--active');
        p5.classList.remove('product--active');
        p6.classList.remove('product--active');
    }
    if(tst=='t3')
    {
        t3.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t1.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');
        
        //Products
        p3.classList.add('product--active');
        p2.classList.remove('product--active');
        p1.classList.remove('product--active');
        p4.classList.remove('product--active');
        p5.classList.remove('product--active');
        p6.classList.remove('product--active');
    }
    if(tst=='t4')
    {
        t4.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t1.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');

        
        //Products
        p4.classList.add('product--active');
        p2.classList.remove('product--active');
        p3.classList.remove('product--active');
        p1.classList.remove('product--active');
        p5.classList.remove('product--active');
        p6.classList.remove('product--active');
    }
    if(tst=='t5')
    {
        t5.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t1.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');

        
        //Products
        p5.classList.add('product--active');
        p2.classList.remove('product--active');
        p3.classList.remove('product--active');
        p4.classList.remove('product--active');
        p1.classList.remove('product--active');
        p6.classList.remove('product--active');
    }
    if(tst=='t6')
    {
        t6.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t1.classList.remove('tabs--active');

        
        //Products
        p6.classList.add('product--active');
        p2.classList.remove('product--active');
        p3.classList.remove('product--active');
        p4.classList.remove('product--active');
        p5.classList.remove('product--active');
        p1.classList.remove('product--active');
    }
}