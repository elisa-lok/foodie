import Link from 'next/link';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';
import MealsGrid from '@/components/meals/meals-grid';

export default function MealsPage() {
  const meals = getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals created {' '}
          <span className={classes.highlight}>
            by you
          </span>
        </h1>
        <p>Choose your own recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your favorite meals</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  )
}