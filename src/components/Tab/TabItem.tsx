import { useMemo } from 'react'
import { ITabItem } from '../../modules/Access/types'

export interface ITabProps {
  openTab: number
  setOpenTab: (openTab: number) => void
  tab: ITabItem
}

export const Tab = ({ openTab, tab, setOpenTab }: ITabProps) => {
  const tabIndex = tab.order

  const handleStyleTab = useMemo(() => {
    const classNameActivate = `bg-white text-black shadow-assetTab`
    const classNameInActivate = 'text-gray-400 bg-gray-200 hover:bg-pink-600 hover:text-white'

    return openTab === tabIndex ? classNameActivate : classNameInActivate
  }, [tabIndex, openTab])

  return (
    <li
      className={` rounded-t-3xl text-center ${handleStyleTab} w-[191px] h-[64px] flex items-center justify-center relative`}
      onClick={(e) => {
        e.preventDefault()
        setOpenTab(tabIndex)
      }}
    >
      <a className="text-2xl font-medium" data-toggle="tab" href="#" role="tablist">
        {tab?.name || ''}
      </a>

      <div className="absolute right-0 bottom-0 translate-x-full z-[2]">
        {openTab === tabIndex ? (
          <img
            className="w-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEx0lEQVRYR7WXz2/TZhjHn8R2HDcuW5DSdocKCU0RQuK0AxqXof0Bu3Wa9i9w2WE7MGmKIiFNQpomTeywgdgkDkxUYrT8ZhvQdV0BAWWrmqIxxiCwNKTETW3Hsf2+zzO9MU6dEkKhaQ65JHY+/j7f9/t8E7t06ZI8MTGBuVyOoMsrFot1/bzbtV3vS0Sb83lYCr6Ub753gtkwgEaj8eb4+Pg98cMjIyOUbzLkn4HYMIB63dt56tSJ61GZngeyERAxxtiHk5OTx0KASqXSnHUniA0B4JzvOzQzk4cbAUI2a9LEBMD27RUKIXI5aBmw1xAxRPzxwIFzHwwNbSGAOTCMrSQgBIxQYzVEzwGIqPTl6OjWtG3T4OAgWdYWKsAcvGEYlM1mKYQACFTYCABaXnZ2nj9/a/YhPIS0nSFz0KEhyyKhRqlkkhhHoTBC4Sh6CREjImKMfXr06MWvylCGTU6abNsheZuOAYRBpVKWcrndGKrQSyWaAARw/bvx8XdhEaDR75KsaWg7Dsl6AJHJZFCMolAoUBhSvVKhCSCeqFyuvj3268151/Mp5fqkKElcTNZQQFQti97JZHD37t6r0ALwff716Oi5z7y+FHk+I1mto1J7CrGgo6oOYDr9D0a90ItRtAAAYHn6ZuGtO/dLhpxQ0ao3UFY1VGp2oMSCjjt2aHz1KNYLEQUA13W/OHZmYr+sJLDuuCjZDuLmDBcQnCd4KlXBQiGDwpD5fPu+eFVPtAEAQO3qzN+7Zov3n0iuhwhxLikOYjzDWdzgw5LEi8VgFCKgoqfiVZVYDQCe5/9weOz8x0nQeUqXOMRlbjtlTPmvM8Ow0B2WuFosYjqd7gnEMwDiqR4tVN4/+/v1K0mIc4rFOIHENUYMQOYAKl9YWEJVXYFYzzg6AQAR3ftp+sZ7jx5UawQxrqjEyLR5Q+tn2msDLFmzMQoh5I9mRLhZ1+KLjgDiBq7nnT0ydnkPgstlnmRIDo/Jqs+FGiGEvoRqcQA7xfVaIZ4LIG5QM+3Pj5+8fEhSVFZ3GjzVn/A9RkxApEHmwhPDwxK3ImkZbM+1N6quAACAi4tLnxz/ZXpM4sR8hkxWkCV8zjStv+kJQ7Mwoetozjokwkqs8k5rPNq4oqN5EYC4zi+Vq3tOXr56MRlXfMaJNT0BEseYycURjYZVdSiI7W6lpg0m3AUvqNXe48Xq3tMXpk/4CjLhCQGR7Otn4oi2QTxdYOEWjTarjmV3jQCCD2umvX/03NS3EgemJIipWh9btuo8SMw4b+2OFkTQrqIjWQ2xlhG0ieN67PTklT/2/rv42JBFOoDDRWIKY8pmHaNbNOwT0WYlan9bx3wJBVogiPTgv3Llo1O/XbsmqxpDW+L6Jpk3F5hZRzYQ5/adoNSEq7zdEyun5KUViMiBnueP/nn7wb75u3cfB6aUuGk7KCUslA0NEwkdU6kBNAynNYogtMQeCSDWA9BkIaKa5/nfzN0tHrx96/YTS1GbKlSVGkrJJG7TdRQ5EbbtFT/0CCBUhAgsxvj3T5aXjpyZmpoXhkwm+9G2XeqmwroV6HR8iWjG5/yYY3s/H75wek6UGXXXAGbNlT894Rg2BGAVVAUAJhFgjjj/y/PwTjyOFc9Tl8tlMP8HKZcxDwu4t/4AAAAASUVORK5CYII="
            alt=""
          />
        ) : (
          <img
            className="w-8 absolute"
            src="data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h32v32H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath d='M.004.53C.287 17.957 14.504 32 32 32H0V0z' fill='%23F4F7F8' mask='url(%23b)'/%3E%3C/g%3E%3C/svg%3E"
            alt=""
          />
        )}
      </div>
      <div className="absolute left-0 bottom-0 -translate-x-full z-[2]">
        {tabIndex !== 1 && openTab === tabIndex && (
          <img
            className="w-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAExElEQVRYR71Xz28bZRCdme/b3ax3HWddO45p3VKioNRRIf2h0FCCKyj9mSZVpQR6qARVgQMVEkKqhITkWkj0AAcu/R8QufEHoHCh4sCpUlWlElLVQxNbqqFZd3e9uzb61t3Edu2kbRx88MGy9r15M/PeLMI2fer1Om706EKhgLlcjjb801a4dSIgQBvPzDe+8zDwvxFogOcFKCwsLAS4MzMze7eFQHP1nYBDZaenzx/eVgKdwJPJ5Brm1NTUfM8JtFYPGEp+504SczmApaVoA/MQwJUDB/LbRqBQWAcPqxbghvE3AozB8vJ9vHr11M/bRgAAUAybAF9aWsKHhoFZGANdv48rKytY1jT8am5OsOndJ5RfVJ/NLqCQPZ1uVL2s6xhdUbGslXAX7IKTJ8f39/erf/aMQNveY6GwSOn0EhqGEYB7d03SNBUfq2VMQQouXjz+Jef0fc8JiMnPZrOB9KVSiQJw0yRNVdGzLOpbVRASAJ/MzPyGAL1Zw/bqFxcX6fdSieJPwRN2jFzXpooioSJLOPvuwX2pVPyWaP6WFWhfO9H7cvk1cpwieUMmBeAxmzwnQrLEUX5SwbkPT30nMfbFlgm0O14o/e3bFlsH18hzLNIjfeRVHRrZkzYmD2b/AoD+LRFoB8/n8yAGL5stUaWSJMaqzI1pRI9KzNdUiqgKeW6V5s/krimK8nW4ey/Vgg5JF+y8kD6TKdID32e8ZjCqlZjvqkRQY74i0/7Mnh0T48O3EDGo/qUU6A5eJieTIeWBzwxDp4r0D9fUFEHNYxXTZzaY7PLsyR9lWfqo2XleSIFOsjcqL5PjZGhoaIAAHAbgMYsjR/AZ1uvMhho7/fbhIzuHkr+0D/5zEWivOtx1UUkzuB3TyPq3yPusVY5RjbmOIFFnO3fHYx9MHvoVEfe2++6mBJ4Fb7VZJ1OkIXOAQnAGPqt7jkSoMo/ZnEBhl2aP3VRk+XQn0+9KoFPVYtLDgBEup+s6Pnja8zJ4TIDLHHlltSpF1D7muw6/cO7YlVhU+6Zb4rQQ6HzHtcaqiFRhMtH9KlZNkwxLp6Dn1iqvSox7LnGJE/cZ8gvvT84mEgM/AAB1JdDtem3O8/CYCOx1WcdmkxGrRvUoEwMnes4ZcrvmSueOvfVeOhW/CQDSRnmLnaRuPh4bkdqUamZorxoJcLFq9pNVLsBFzyWX+NkTk+cHE/EbACBvFvYtBNpvuMYxsZ7nItVCb6dHtcDh+vUIc6wn3K0i9xnwuVNHP4tFtWsbyd7iA91uuPCSWcvzENy1yYtGSAyccDgEMe0WfzUxaEwdefOGIvOzm1XdkYCoPpzylp6Hx8SIirxYYwJcBIv52GOk+cxzLD79zsTEK6nkT0S4+0XAAysWCoTSiygVP65Lr2KlUqRq1STPsMiv6hTVVKK6HwzdvuHhwTdGd38ry9Lc80r+jBGFBJp3POy72PO7pkm+bVPcjQXS665Do+OjO8aGM5/KsvQ5IsZetOqWFly/fp3E1HerXtMUtO3V4Kg4c/Tovh39A5c4Zx8jgr4V4LU0bCaw9vIQjaLzR+OiuXzi7JiqycclxuYR8UAvQFsUuHevrqRSEJVlp79Wo6Qs0wgy9jqJtweAKTESvQZtft5/T3pKrvo8738AAAAASUVORK5CYII="
            alt=""
          />
        )}
      </div>
      <div className="absolute right-0 bottom-0 translate-x-full z-[1]">
        {tabIndex === 1 && tabIndex === openTab && (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEx0lEQVRYR7WXz2/TZhjHn8R2HDcuW5DSdocKCU0RQuK0AxqXof0Bu3Wa9i9w2WE7MGmKIiFNQpomTeywgdgkDkxUYrT8ZhvQdV0BAWWrmqIxxiCwNKTETW3Hsf2+zzO9MU6dEkKhaQ65JHY+/j7f9/t8E7t06ZI8MTGBuVyOoMsrFot1/bzbtV3vS0Sb83lYCr6Ub753gtkwgEaj8eb4+Pg98cMjIyOUbzLkn4HYMIB63dt56tSJ61GZngeyERAxxtiHk5OTx0KASqXSnHUniA0B4JzvOzQzk4cbAUI2a9LEBMD27RUKIXI5aBmw1xAxRPzxwIFzHwwNbSGAOTCMrSQgBIxQYzVEzwGIqPTl6OjWtG3T4OAgWdYWKsAcvGEYlM1mKYQACFTYCABaXnZ2nj9/a/YhPIS0nSFz0KEhyyKhRqlkkhhHoTBC4Sh6CREjImKMfXr06MWvylCGTU6abNsheZuOAYRBpVKWcrndGKrQSyWaAARw/bvx8XdhEaDR75KsaWg7Dsl6AJHJZFCMolAoUBhSvVKhCSCeqFyuvj3268151/Mp5fqkKElcTNZQQFQti97JZHD37t6r0ALwff716Oi5z7y+FHk+I1mto1J7CrGgo6oOYDr9D0a90ItRtAAAYHn6ZuGtO/dLhpxQ0ao3UFY1VGp2oMSCjjt2aHz1KNYLEQUA13W/OHZmYr+sJLDuuCjZDuLmDBcQnCd4KlXBQiGDwpD5fPu+eFVPtAEAQO3qzN+7Zov3n0iuhwhxLikOYjzDWdzgw5LEi8VgFCKgoqfiVZVYDQCe5/9weOz8x0nQeUqXOMRlbjtlTPmvM8Ow0B2WuFosYjqd7gnEMwDiqR4tVN4/+/v1K0mIc4rFOIHENUYMQOYAKl9YWEJVXYFYzzg6AQAR3ftp+sZ7jx5UawQxrqjEyLR5Q+tn2msDLFmzMQoh5I9mRLhZ1+KLjgDiBq7nnT0ydnkPgstlnmRIDo/Jqs+FGiGEvoRqcQA7xfVaIZ4LIG5QM+3Pj5+8fEhSVFZ3GjzVn/A9RkxApEHmwhPDwxK3ImkZbM+1N6quAACAi4tLnxz/ZXpM4sR8hkxWkCV8zjStv+kJQ7Mwoetozjokwkqs8k5rPNq4oqN5EYC4zi+Vq3tOXr56MRlXfMaJNT0BEseYycURjYZVdSiI7W6lpg0m3AUvqNXe48Xq3tMXpk/4CjLhCQGR7Otn4oi2QTxdYOEWjTarjmV3jQCCD2umvX/03NS3EgemJIipWh9btuo8SMw4b+2OFkTQrqIjWQ2xlhG0ieN67PTklT/2/rv42JBFOoDDRWIKY8pmHaNbNOwT0WYlan9bx3wJBVogiPTgv3Llo1O/XbsmqxpDW+L6Jpk3F5hZRzYQ5/adoNSEq7zdEyun5KUViMiBnueP/nn7wb75u3cfB6aUuGk7KCUslA0NEwkdU6kBNAynNYogtMQeCSDWA9BkIaKa5/nfzN0tHrx96/YTS1GbKlSVGkrJJG7TdRQ5EbbtFT/0CCBUhAgsxvj3T5aXjpyZmpoXhkwm+9G2XeqmwroV6HR8iWjG5/yYY3s/H75wek6UGXXXAGbNlT894Rg2BGAVVAUAJhFgjjj/y/PwTjyOFc9Tl8tlMP8HKZcxDwu4t/4AAAAASUVORK5CYII="
            alt=""
          />
        )}
      </div>
      {tabIndex === openTab && (
        <div className="absolute -bottom-1 h-[10px] bg-white w-full z-[2]"></div>
      )}
    </li>
  )
}
