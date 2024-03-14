import { decrement, increment, selectCount } from '@/features/counter'
import { Button } from '@/components/Elements'
import { useAppDispatch, useAppSelector } from '@/hooks'

export const Counter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}
