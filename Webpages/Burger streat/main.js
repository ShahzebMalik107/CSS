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
    }
    if(tst=='t2')
    {
        t2.classList.add('tabs--active')
        t1.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');
    }
    if(tst=='t3')
    {
        t3.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t1.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');
    }
    if(tst=='t4')
    {
        t4.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t1.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');
    }
    if(tst=='t5')
    {
        t5.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t1.classList.remove('tabs--active');
        t6.classList.remove('tabs--active');
    }
    if(tst=='t6')
    {
        t6.classList.add('tabs--active')
        t2.classList.remove('tabs--active');
        t3.classList.remove('tabs--active');
        t4.classList.remove('tabs--active');
        t5.classList.remove('tabs--active');
        t1.classList.remove('tabs--active');
    }
}